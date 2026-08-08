import "./Navbar.css";
import OIP from "../../assets/OIP.webp";
import cartLogo from "../../assets/cart.logo.webp";

const Navbar = ({ cartCount = 0 }) => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={OIP} alt="Logo" className="logo-image" height="50" />
      </div>
      <ul className="nav-menu">
        <li>Home</li>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <div className="cart-wrap">
          <img src={cartLogo} alt="Cart" className="cart-icon-image" height="24" />
          <span className="cart-count">{cartCount}</span>
        </div>
      </div>
    </div>
  );
};
