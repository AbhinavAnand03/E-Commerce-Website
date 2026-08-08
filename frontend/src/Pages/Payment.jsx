import { useState } from "react";
import { Link } from "react-router-dom";
import "./Payment.css";

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [name, setName] = useState("");

  const paymentMethods = [
    { id: "card", label: "Credit/Debit Card", description: "Fast, secure checkout" },
    { id: "paypal", label: "PayPal", description: "Use your PayPal account" },
    { id: "applepay", label: "Apple Pay", description: "Tap to pay with Apple Pay" },
    { id: "bank", label: "Bank Transfer", description: "Transfer directly from your bank" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle payment processing here
    alert("Payment processed successfully!");
  };

  return (
    <div className="payment-page">
      <header className="payment-header">
        <Link to="/" className="back-link">
          ← Back to Shop
        </Link>
        <h1>LuxCart</h1>
      </header>
      <div className="payment-container">
        <h1>Secure Payment</h1>
        <div className="payment-summary">
          <h2>Order Summary</h2>
          <div className="order-items">
            <div className="item">
              <span>Aurora Chronograph</span>
              <span>$349</span>
            </div>
            <div className="item">
              <span>Noir Signature Bag</span>
              <span>$219</span>
            </div>
          </div>
          <div className="total">
            <span>Total: $568</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="payment-form">
          <div className="payment-methods">
            <h2>Payment Method</h2>
            <div className="method-options">
              {paymentMethods.map((method) => (
                <label
                  key={method.id}
                  className={`method-option ${paymentMethod === method.id ? "active" : ""}`}
                >
                  <input
                    type="radio"
                    value={method.id}
                    checked={paymentMethod === method.id}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <div>
                    <strong>{method.label}</strong>
                    <span>{method.description}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {paymentMethod === "card" && (
            <div className="card-details">
              <h3>Card Details</h3>
              <div className="form-group">
                <label htmlFor="cardNumber">Card Number</label>
                <input
                  type="text"
                  id="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  required
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="expiryDate">Expiry Date</label>
                  <input
                    type="text"
                    id="expiryDate"
                    placeholder="MM/YY"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cvv">CVV</label>
                  <input
                    type="text"
                    id="cvv"
                    placeholder="123"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="name">Cardholder Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>
          )}

          {paymentMethod === "paypal" && (
            <div className="paypal-section">
              <h3>Pay with PayPal</h3>
              <p>You will be redirected to PayPal to complete your payment.</p>
            </div>
          )}

          {paymentMethod === "applepay" && (
            <div className="applepay-section">
              <h3>Apple Pay</h3>
              <p>Use Apple Pay for a quick, secure checkout with your linked device.</p>
            </div>
          )}

          {paymentMethod === "bank" && (
            <div className="bank-transfer-section">
              <h3>Bank Transfer</h3>
              <p>Please transfer the total amount to the bank account below:</p>
              <ul>
                <li>Account Name: LuxCart Ltd.</li>
                <li>Account Number: 12345678</li>
                <li>Sort Code: 00-11-22</li>
              </ul>
            </div>
          )}

          <button type="submit" className="pay-btn">
            Pay $568
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
