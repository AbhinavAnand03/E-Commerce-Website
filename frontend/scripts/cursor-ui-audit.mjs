import { Agent, CursorAgentError } from "@cursor/sdk";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const projectRoot = process.cwd();
const reportDir = path.join(projectRoot, "reports");
const reportPath = path.join(reportDir, "ui-audit.md");

const filesToReview = [
  "src/App.jsx",
  "src/Components/Navbar/Navbar.jsx",
  "src/Components/Navbar/Navbar.css",
];

const readProjectFile = async (relativePath) => {
  try {
    return await readFile(path.join(projectRoot, relativePath), "utf8");
  } catch {
    return `// File not found: ${relativePath}`;
  }
};

const buildPrompt = (fileContents) => `You are auditing a React storefront UI.
Return markdown with these sections in order:
1) Top 5 issues (highest impact first)
2) Quick wins (small changes)
3) Suggested next commit (list changed files and exact changes)

Constraints:
- Focus on accessibility, maintainability, and frontend UX quality.
- Keep each issue concrete and tied to a file path.
- Include specific JSX/CSS changes, not generic advice.
- If there are no critical issues, say so and provide polish tasks.

Project files:
${fileContents}`;

const main = async () => {
  if (!process.env.CURSOR_API_KEY) {
    console.error("Missing CURSOR_API_KEY environment variable.");
    process.exit(1);
  }

  const fileContents = await Promise.all(
    filesToReview.map(async (file) => {
      const content = await readProjectFile(file);
      return `\n--- ${file} ---\n${content}\n`;
    }),
  );

  const prompt = buildPrompt(fileContents.join("\n"));

  try {
    const result = await Agent.prompt(prompt, {
      apiKey: process.env.CURSOR_API_KEY,
      model: { id: "auto" },
      local: { cwd: projectRoot },
    });

    if (result.status !== "finished") {
      console.error(`Audit failed with status: ${result.status}`);
      process.exit(2);
    }

    await mkdir(reportDir, { recursive: true });
    await writeFile(reportPath, String(result.result ?? ""), "utf8");
    console.log(`UI audit saved to ${reportPath}`);
  } catch (error) {
    if (error instanceof CursorAgentError) {
      console.error(`Cursor SDK startup error: ${error.message}`);
      process.exit(3);
    }
    throw error;
  }
};

main();
