import { useState } from "react";
import { Link } from "react-router-dom";
import logoImage from "../assets/luxcart-logo.svg";
import "./NewArrivals.css";

const NEW_PRODUCTS = [
  {
    id: 101,
    name: "Chronos Solar Watch",
    category: "watches",
    tone: "Titanium / Matte Black",
    price: "$389",
    tag: "New Release",
    image:
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 102,
    name: "Aero Glide Runners",
    category: "footwear",
    tone: "Cloud White & Sage",
    price: "$210",
    tag: "Trending",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 103,
    name: "Minimalist Italian Leather Tote",
    category: "accessories",
    tone: "Cognac Brown",
    price: "$275",
    tag: "Editor's Pick",
    image:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 104,
    name: "Architectural Linen Overshirt",
    category: "apparel",
    tone: "Oatmeal",
    price: "$145",
    tag: "Just In",
    image:
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 105,
    name: "Polarized Horizon Eyewear",
    category: "accessories",
    tone: "Amber Tortoise",
    price: "$165",
    tag: "New Release",
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 106,
    name: "Heritage Field Jacket",
    category: "apparel",
    tone: "Forest Green",
    price: "$320",
    tag: "Limited Stock",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 107,
    name: "Vanguard Minimalist Watch",
    category: "watches",
    tone: "Brushed Steel / Midnight Blue",
    price: "$340",
    tag: "Just In",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 108,
    name: "Monochrome Low-Tops",
    category: "footwear",
    tone: "Midnight Charcoal",
    price: "$185",
    tag: "Popular",
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=80",
  },
];

export default function NewArrivals() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [addedItems, setAddedItems] = useState({});

  const filteredProducts =
    selectedCategory === "all"
      ? NEW_PRODUCTS
      : NEW_PRODUCTS.filter((item) => item.category === selectedCategory);

  const handleAddToCart = (id) => {
    setAddedItems((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [id]: false }));
    }, 1800);
  };

  return (
    <div className="new-arrivals-page">
      <header className="new-arrivals-top-nav">
        <div className="new-arrivals-logo-box">
          <img src={logoImage} alt="LuxCart logo" className="new-arrivals-logo-image" />
          <p className="new-arrivals-logo-text">LuxCart</p>
        </div>
        <nav className="new-arrivals-nav-links">
          <Link to="/">Home</Link>
          <Link to="/new-arrivals" className="active">
            New Arrivals
          </Link>
          <Link to="/about">About</Link>
          <Link to="/tracking">Track Order</Link>
          <Link to="/cart">Cart</Link>
        </nav>
        <div className="new-arrivals-nav-actions">
          <Link to="/signin">
            <button className="new-arrivals-outline-btn">Sign In</button>
          </Link>
          <Link to="/cart">
            <button className="new-arrivals-outline-btn">Cart</button>
          </Link>
        </div>
      </header>

      <section className="new-arrivals-hero">
        <span className="new-arrivals-pill">✨ Spring / Summer 2026</span>
        <h1>Fresh Arrivals Just Landed</h1>
        <p>
          Discover the newest additions to our collection. Thoughtfully designed,
          responsibly crafted, and made to last for years to come.
        </p>

        <div className="new-arrivals-filters" role="tablist">
          {["all", "apparel", "footwear", "watches", "accessories"].map(
            (cat) => (
              <button
                key={cat}
                className={selectedCategory === cat ? "active" : ""}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ),
          )}
        </div>
      </section>

      <main className="new-arrivals-container">
        <div className="new-arrivals-grid">
          {filteredProducts.map((product) => (
            <article className="new-arrivals-card" key={product.id}>
              <div className="new-arrivals-image-block">
                <span className="new-arrivals-tag">{product.tag}</span>
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                />
              </div>
              <div className="new-arrivals-info">
                <p className="new-arrivals-tone">{product.tone}</p>
                <h3>{product.name}</h3>
                <div className="new-arrivals-footer-row">
                  <span className="new-arrivals-price">{product.price}</span>
                  <button
                    className={`new-arrivals-btn ${addedItems[product.id] ? "added" : ""}`}
                    onClick={() => handleAddToCart(product.id)}
                  >
                    {addedItems[product.id] ? "✓ Added" : "Add to Cart"}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      <footer className="new-arrivals-footer">
        <div className="new-arrivals-footer-inner">
          <span>&copy; 2026 LuxCart. All rights reserved.</span>
          <nav>
            <Link to="/">Home</Link> &middot; <Link to="/about">About</Link> &middot;{" "}
            <Link to="/tracking">Track Order</Link> &middot; <Link to="/cart">Cart</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
