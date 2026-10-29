import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logoImage from "../assets/luxcart-logo.svg";
import "./SignIn.css";

// Array of images or banner slides for the slideshow
const slideshowImages = [
  {
    url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80",
    title: "Curated Luxury Essentials",
    subtitle: "Explore hand-picked collections crafted for quality.",
  },
  {
    url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    title: "Exclusive Design Pieces",
    subtitle: "Upgrade your lifestyle with modern sophistication.",
  },
  {
    url: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80",
    title: "Seamless Shopping Experience",
    subtitle: "Fast checkout, secure payments, and premium support.",
  },
];

export default function SignIn({ initialSignUp = false, onAuthSuccess }) {
  const [isSignUp, setIsSignUp] = useState(initialSignUp);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  // Auto-advance slideshow every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) return;

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userEmail", email);
    if (name) {
      localStorage.setItem("userName", name);
    }

    if (onAuthSuccess) {
      onAuthSuccess();
    }
    navigate("/", { replace: true });
  };

  const handleSocialSignIn = (provider) => {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userEmail", `${provider.toLowerCase()}user@luxcart.com`);
    if (onAuthSuccess) {
      onAuthSuccess();
    }
    navigate("/", { replace: true });
  };

  return (
    <div className="signin-container">
      {/* Left Column: Visual/Graphic Slideshow Side */}
      <div className="signin-visual-side">
        {slideshowImages.map((slide, index) => (
          <div
            key={index}
            className={`visual-slide ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.url})` }}
          >
            <div className="slide-content">
              <h2>{slide.title}</h2>
              <p>{slide.subtitle}</p>
            </div>
          </div>
        ))}
        {/* Slideshow Dots Indicator */}
        <div className="slide-dots">
          {slideshowImages.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Right Column: Form Side */}
      <div className="signin-form-side">
        <div className="signin-form-wrapper">
          <div className="brand-header">
            <img src={logoImage} alt="LuxCart Logo" className="brand-logo" />
            <span className="brand-name">LuxCart</span>
          </div>

          <h1 className="creative-heading">
            {isSignUp ? "Create Account" : "Welcome Back"}
          </h1>
          <p className="signin-subtitle">
            {isSignUp
              ? "Join LuxCart for exclusive access to curated collections."
              : "Please enter your details to continue to our store."}
          </p>

          <form onSubmit={handleSubmit}>
            {isSignUp && (
              <div className="input-group">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            )}

            <div className="input-group">
              <label>E-mail</label>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="form-actions-row">
              <div className="terms-group">
                <input type="checkbox" id="remember" defaultChecked />
                <label htmlFor="remember">Remember me</label>
              </div>
              {!isSignUp && (
                <a href="#forgot" className="forgot-link">
                  Forgot password?
                </a>
              )}
            </div>

            <button type="submit" className="signin-submit-btn">
              {isSignUp ? "Create Account & Enter Store" : "Sign In & Enter Store"}
            </button>
          </form>

          <div className="auth-divider">
            <span>Or continue with</span>
          </div>

          <div className="social-buttons-row">
            <button
              type="button"
              className="social-btn"
              onClick={() => handleSocialSignIn("Google")}
            >
              Google
            </button>
            <button
              type="button"
              className="social-btn"
              onClick={() => handleSocialSignIn("Facebook")}
            >
              Facebook
            </button>
          </div>

          <div className="signup-footer">
            <span>
              {isSignUp ? "Already have an account?" : "Don't have an account?"}
            </span>
            <button
              type="button"
              className="toggle-link-btn"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
