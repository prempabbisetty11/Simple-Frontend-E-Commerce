import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext.jsx";
import { NotificationContext } from "../context/NotificationContext.jsx";

function Cart() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const { showNotification } = useContext(NotificationContext);

  const handleRemoveItem = (item) => {
    removeFromCart(item.id);
    showNotification(`✓ ${item.name} removed from cart`, "info", 2000);
  };

  const handleClearCart = () => {
    clearCart();
    showNotification("✓ Cart cleared", "info", 2000);
  };

  return (
    <main style={{ maxWidth: "900px" }}>
      <h1>🛒 Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div className="empty-state">
          <p>Your cart is empty. Let's go shopping! 🛍️</p>
          <Link to="/">
            <button className="btn btn-primary">
              Continue Shopping
            </button>
          </Link>
        </div>
      ) : (
        <div>
          <div>
            {cartItems.map((item, idx) => (
              <div key={idx} className="cart-item">
                <div className="cart-item-info">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-price">₹{item.price}</div>
                </div>
                <button
                  onClick={() => handleRemoveItem(item)}
                  className="btn btn-danger"
                >
                  ✕ Remove
                </button>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <button
              onClick={handleClearCart}
              className="btn btn-danger"
              style={{ flex: 1, minWidth: "150px" }}
            >
              Clear Cart
            </button>
            <Link to="/">
              <button className="btn btn-secondary" style={{ minWidth: "150px" }}>
                Continue Shopping
              </button>
            </Link>
            <Link to="/checkout">
              <button className="btn btn-success" style={{ minWidth: "150px" }}>
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}

export default Cart;