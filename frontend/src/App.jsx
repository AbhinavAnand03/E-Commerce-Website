import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import SignIn from "./Pages/SignIn";
import Tracking from "./Pages/Tracking";
import Payment from "./Pages/Payment";
import About from "./Pages/About";
import NewArrivals from "./Pages/NewArrivals";
import Collections from "./Pages/Collections";
import "./App.css";

function ProtectedRoute({ isAuthenticated, children }) {
  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />;
  }
  return children;
}

function PublicAuthRoute({ isAuthenticated, children }) {
  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userName");
    setIsAuthenticated(false);
  };

  return (
    <Routes>
      {/* Auth routes */}
      <Route
        path="/signin"
        element={
          <PublicAuthRoute isAuthenticated={isAuthenticated}>
            <SignIn onAuthSuccess={handleLoginSuccess} />
          </PublicAuthRoute>
        }
      />
      <Route
        path="/signup"
        element={
          <PublicAuthRoute isAuthenticated={isAuthenticated}>
            <SignIn initialSignUp={true} onAuthSuccess={handleLoginSuccess} />
          </PublicAuthRoute>
        }
      />

      {/* Main Ecommerce Store Routes (Protected: must sign in first) */}
      <Route
        path="/"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Home onLogout={handleLogout} />
          </ProtectedRoute>
        }
      />
      <Route
        path="/cart"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Cart />
          </ProtectedRoute>
        }
      />
      <Route
        path="/tracking"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Tracking />
          </ProtectedRoute>
        }
      />
      <Route
        path="/payment"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Payment />
          </ProtectedRoute>
        }
      />
      <Route
        path="/about"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <About />
          </ProtectedRoute>
        }
      />
      <Route
        path="/new-arrivals"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <NewArrivals />
          </ProtectedRoute>
        }
      />
      <Route
        path="/collections"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Collections />
          </ProtectedRoute>
        }
      />

      {/* Catch-all redirect */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
