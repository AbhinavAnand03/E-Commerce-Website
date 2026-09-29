import { useState } from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";

const SignIn = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      // Handle sign up
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords don't match!");
        return;
      }
      alert("Account created successfully!");
    } else {
      // Handle sign in
      alert("Signed in successfully!");
    }
  };

  return (
    <div className="signin-page">
      <header className="signin-header">
        <Link to="/" className="back-link">
          ← Back to Shop
        </Link>
        <h1>LuxCart</h1>
      </header>

      <div className="signin-container">
        <div className="signin-card">
          <h1>{isSignUp ? "Create Account" : "Welcome Back"}</h1>
          <p className="signin-subtitle">
            {isSignUp
              ? "Join LuxCart for exclusive access to curated collections"
              : "Sign in to your account to continue shopping"}
          </p>

          <form onSubmit={handleSubmit} className="signin-form">
            {isSignUp && (
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            )}

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                required
              />
            </div>

            {isSignUp && (
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirm your password"
                  required
                />
              </div>
            )}

            <button type="submit" className="signin-btn">
              {isSignUp ? "Create Account" : "Sign In"}
            </button>
          </form>

          <div className="signin-footer">
            <p>
              {isSignUp ? "Already have an account?" : "Don't have an account?"}
              <button
                type="button"
                onClick={() => setIsSignUp(!isSignUp)}
                className="toggle-btn"
              >
                {isSignUp ? "Sign In" : "Sign Up"}
              </button>
            </p>

            {!isSignUp && (
              <button type="button" className="forgot-btn">
                Forgot your password?
              </button>
            )}
          </div>

          <div className="social-signin">
            <p>Or continue with</p>
            <div className="social-buttons">
              <button className="social-btn google-btn">
                <span>Google</span>
              </button>
              <button className="social-btn facebook-btn">
                <span>Facebook</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
