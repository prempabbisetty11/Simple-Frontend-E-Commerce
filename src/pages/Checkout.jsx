import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { NotificationContext } from "../context/NotificationContext.jsx";

function Checkout() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { showNotification } = useContext(NotificationContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !address || !phone) {
      showNotification("⚠ Please fill in all fields", "error", 2500);
      return;
    }

    showNotification("✓ Processing your order...", "info", 1500);
    setTimeout(() => {
      setSubmitted(true);
      showNotification("✓ Order placed successfully!", "success", 3000);
    }, 1500);
  };

  if (submitted) {
    return (
      <main>
        <div className="success-message">
          <h1>✅ Order Placed Successfully!</h1>
          <p style={{ fontSize: "1.1em", marginBottom: "2rem" }}>
            Thank you, {name}! Your order will be delivered to {address} soon.
          </p>
          <p>Order confirmation has been sent to your reference.</p>
          <Link to="/">
            <button className="btn" style={{ background: "rgba(255,255,255,0.2)", marginTop: "2rem" }}>
              Continue Shopping
            </button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main>
      <div className="checkout-form">
        <h1>💳 Checkout</h1>
        <p style={{ color: "var(--gray-500)", marginBottom: "2rem" }}>Please fill in your details to complete the order</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
            />
          </div>

          <div className="form-group">
            <label>Delivery Address</label>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="123 Main Street, Apt 4B..."
              style={{ resize: "vertical" }}
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91 9876543210"
            />
          </div>

          <button
            type="submit"
            className="btn btn-success"
            style={{ width: "100%", fontSize: "1.1em" }}
          >
            ✓ Place Order
          </button>
          <Link to="/" style={{ display: "block", marginTop: "1rem" }}>
            <button type="button" className="btn btn-secondary" style={{ width: "100%" }}>
              ✕ Cancel
            </button>
          </Link>
        </form>
      </div>
    </main>
  );
}

export default Checkout;