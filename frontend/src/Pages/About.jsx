import { Link } from "react-router-dom";
import "./About.css";

const FACTS = [
  { label: "Founded", value: "2019" },
  { label: "Based in", value: "Bengaluru, India" },
  { label: "Makers we work with", value: "40 and growing" },
  { label: "Returns", value: "Free within 30 days, no questions asked" },
];

const VALUES = [
  {
    title: "Fewer, better products",
    text: "We would rather stock twenty things we love than two hundred we tolerate.",
  },
  {
    title: "Clear, fair pricing",
    text: "The price you see includes what it costs us to source, pack, and ship it well.",
  },
  {
    title: "Repairs over replacement",
    text: "If something breaks, we help you fix it first and replace it only as a last resort.",
  },
];

export default function About() {
  return (
    <div className="about">
      <header className="about-header">
        <div className="about-wrap about-header-inner">
          <Link to="/" className="about-brand">
            LuxCart
          </Link>
          <nav className="about-nav" aria-label="Main">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/new-arrivals">New Arrivals</Link>
              </li>
              <li>
                <Link to="/about" aria-current="page">
                  About
                </Link>
              </li>
              <li>
                <Link to="/tracking">Track Order</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section
          className="about-hero about-wrap"
          aria-labelledby="about-title"
        >
          <h1 id="about-title">Well-made things, sold honestly.</h1>
          <p className="about-lede">
            We started LuxCart because good products were hard to find and
            harder to trust. We pick each item ourselves, test it in real life,
            and tell you plainly what it is.
          </p>
        </section>

        <section
          className="about-story about-wrap"
          aria-labelledby="story-title"
        >
          <h2 id="story-title">How we got here</h2>
          <div>
            <p>
              LuxCart began in a spare room with a single shelf and a simple
              rule: if we would not use it at home, we would not sell it to you.
              That rule still decides what makes it onto the site.
            </p>
            <p>
              Today our small team works with independent makers and family
              workshops across the country. We visit where we can, ask hard
              questions about materials and repairs, and keep the catalogue
              small enough that every product gets a proper description.
            </p>
          </div>
        </section>

        <section
          className="about-wrap about-facts-section"
          aria-label="Quick facts"
        >
          <dl className="about-facts">
            {FACTS.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section
          className="about-values about-wrap"
          aria-labelledby="values-title"
        >
          <h2 id="values-title">What we care about</h2>
          <ul>
            {VALUES.map((value) => (
              <li key={value.title}>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section
          className="about-closing about-wrap"
          aria-labelledby="closing-title"
        >
          <p id="closing-title">Find something you will keep for years.</p>
          <Link to="/" className="about-button">
            Browse the collection
          </Link>
        </section>
      </main>

      <footer className="about-footer">
        <div className="about-wrap about-footer-inner">
          <span>&copy; 2026 LuxCart. All rights reserved.</span>
          <span>
            <Link to="/">Home</Link> &middot;{" "}
            <Link to="/new-arrivals">New Arrivals</Link> &middot;{" "}
            <Link to="/tracking">Tracking</Link>
          </span>
        </div>
      </footer>
    </div>
  );
}
