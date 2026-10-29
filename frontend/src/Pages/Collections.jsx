import "./NewArrivals.css";
import { Link } from "react-router-dom";
import "./Cart.css";
import logoImage from "../assets/luxcart-logo.svg";
import "./Collections.css";
const Collections = () => {
  const products = [
    {
      id: 1,
      name: "Watch",
      price: 349,
      image:
        "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 2,
      name: "Nike Shoes ",
      price: 219,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 3,
      name: "Wireless Headphones",
      price: 199,
      tone: "Black",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 4,
      name: "Eclipse Sunglasses",
      price: 129,
      image:
        "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=900&q=80",
    },

    {
      id: 5,
      name: "Polaroid Camera",
      price: 59,
      image:
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 6,
      name: "Midnight Silk Scarf",
      price: 49,
      image:
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80",
    },
  ];

  return (
    <>
      <div className="cart-page">
        <header className="cart-header">
          <Link to="/" className="back-link">
            ← Continue Shopping
          </Link>
          <Link to="/" className="logo-box">
            <img src={logoImage} alt="LuxCart logo" className="logo-image" />
            <span className="logo-text">LuxCart</span>
          </Link>
        </header>
        <h2 className="collections-title">Collections</h2>
        <section className="new-arrivals">
          <div className="products-grid">
            {products.map((product) => (
              <article className="product-card" key={product.id}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>${product.price}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Collections;
