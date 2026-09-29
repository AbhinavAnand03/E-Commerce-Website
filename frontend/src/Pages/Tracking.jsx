import { useState } from "react";
import { Link } from "react-router-dom";
import "./Tracking.css";

const Tracking = () => {
  const [orderNumber, setOrderNumber] = useState("");
  const [email, setEmail] = useState("");
  const [trackingResult, setTrackingResult] = useState(null);

  const handleTrackOrder = (e) => {
    e.preventDefault();

    // Mock tracking data
    const mockOrder = {
      orderNumber: orderNumber,
      status: "In Transit",
      estimatedDelivery: "May 12, 2026",
      currentLocation: "Distribution Center - New York, NY",
      trackingHistory: [
        {
          date: "May 8, 2026 2:30 PM",
          status: "Order Confirmed",
          location: "Online Store",
        },
        {
          date: "May 8, 2026 4:15 PM",
          status: "Order Processed",
          location: "Warehouse - Los Angeles, CA",
        },
        {
          date: "May 9, 2026 9:00 AM",
          status: "Shipped",
          location: "Distribution Center - Los Angeles, CA",
        },
        {
          date: "May 10, 2026 11:30 AM",
          status: "In Transit",
          location: "Distribution Center - New York, NY",
        },
      ],
      items: [
        { name: "Aurora Chronograph", quantity: 1, price: 349 },
        { name: "Noir Signature Bag", quantity: 1, price: 219 },
      ],
    };

    setTrackingResult(mockOrder);
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "order confirmed":
        return "#28a745";
      case "order processed":
        return "#007bff";
      case "shipped":
        return "#17a2b8";
      case "in transit":
        return "#ffc107";
      case "delivered":
        return "#28a745";
      default:
        return "#6c757d";
    }
  };

  return (
    <div className="tracking-page">
      <header className="tracking-header">
        <Link to="/" className="back-link">
          ← Back to Shop
        </Link>
        <h1>LuxCart</h1>
      </header>

      <div className="tracking-container">
        <h1>Track Your Order</h1>

        {!trackingResult ? (
          <div className="tracking-form-section">
            <p>
              Enter your order number and email address to track your package.
            </p>

            <form onSubmit={handleTrackOrder} className="tracking-form">
              <div className="form-group">
                <label htmlFor="orderNumber">Order Number</label>
                <input
                  type="text"
                  id="orderNumber"
                  value={orderNumber}
                  onChange={(e) => setOrderNumber(e.target.value)}
                  placeholder="e.g. LC-12345678"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <button type="submit" className="track-btn">
                Track Order
              </button>
            </form>
          </div>
        ) : (
          <div className="tracking-result">
            <div className="order-header">
              <h2>Order #{trackingResult.orderNumber}</h2>
              <div
                className={`status-badge ${trackingResult.status.toLowerCase().replace(" ", "-")}`}
              >
                {trackingResult.status}
              </div>
            </div>

            <div className="delivery-info">
              <div className="info-card">
                <h3>Estimated Delivery</h3>
                <p>{trackingResult.estimatedDelivery}</p>
              </div>
              <div className="info-card">
                <h3>Current Location</h3>
                <p>{trackingResult.currentLocation}</p>
              </div>
            </div>

            <div className="tracking-timeline">
              <h3>Tracking History</h3>
              <div className="timeline">
                {trackingResult.trackingHistory.map((event, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-marker">
                      <div
                        className="timeline-dot"
                        style={{
                          backgroundColor: getStatusColor(event.status),
                        }}
                      ></div>
                      {index < trackingResult.trackingHistory.length - 1 && (
                        <div className="timeline-line"></div>
                      )}
                    </div>
                    <div className="timeline-content">
                      <h4 style={{ color: getStatusColor(event.status) }}>
                        {event.status}
                      </h4>
                      <p className="timeline-date">{event.date}</p>
                      <p className="timeline-location">{event.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-items">
              <h3>Order Items</h3>
              {trackingResult.items.map((item, index) => (
                <div key={index} className="order-item">
                  <span>
                    {item.name} (x{item.quantity})
                  </span>
                  <span>${item.price}</span>
                </div>
              ))}
            </div>

            <div className="tracking-actions">
              <button
                onClick={() => setTrackingResult(null)}
                className="track-another-btn"
              >
                Track Another Order
              </button>
              <Link to="/" className="continue-shopping">
                Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tracking;
