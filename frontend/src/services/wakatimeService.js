// WakaTime API service
const WAKATIME_API_KEY = import.meta.env.VITE_WAKATIME_API_KEY;
const WAKATIME_API_BASE = "https://wakatime.com/api/v1";

export const getWakaTimeStats = async (user = "current") => {
  if (!WAKATIME_API_KEY) {
    console.warn("WakaTime API key not configured");
    return null;
  }

  try {
    const response = await fetch(
      `${WAKATIME_API_BASE}/users/${user}/stats/last_7_days`,
      {
        headers: {
          Authorization: `Basic ${btoa(WAKATIME_API_KEY)}`,
          "Content-Type": "application/json",
        },
      },
    );

    if (!response.ok) {
      throw new Error(`WakaTime API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching WakaTime stats:", error);
    return null;
  }
};

export const getWakaTimeProjects = async (user = "current") => {
  if (!WAKATIME_API_KEY) {
    console.warn("WakaTime API key not configured");
    return null;
  }

  try {
    const response = await fetch(
      `${WAKATIME_API_BASE}/users/${user}/projects`,
      {
        headers: {
          Authorization: `Basic ${btoa(WAKATIME_API_KEY)}`,
          "Content-Type": "application/json",
        },
      },
    );

    if (!response.ok) {
      throw new Error(`WakaTime API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching WakaTime projects:", error);
    return null;
  }
};
