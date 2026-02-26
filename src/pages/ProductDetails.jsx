import { useParams, Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";
import { NotificationContext } from "../context/NotificationContext.jsx";
import products from "../data/products";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const { showNotification } = useContext(NotificationContext);
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Product not found</h2>
        <Link to="/">Go back to Home</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    showNotification(`✓ ${product.name} added to cart!`, "success", 2500);
  };

  const handleBuyNow = () => {
    addToCart(product);
    showNotification(`✓ Redirecting to checkout...`, "info", 1500);
    setTimeout(() => navigate("/checkout"), 1500);
  };

  return (
    <main style={{ maxWidth: "900px" }}>
      <div style={{ background: "white", padding: "2rem", borderRadius: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
        <h1>{product.name}</h1>
        {product.image && (
          <img
            src={product.image}
            alt={product.name}
            style={{
              maxWidth: "400px",
              width: "100%",
              display: "block",
              margin: "1.5rem 0",
              borderRadius: "8px",
            }}
          />
        )}
        <p style={{ fontSize: "1.1em", marginBottom: "1rem" }}>{product.description}</p>
        <p style={{ fontSize: "2em", fontWeight: "bold", color: "var(--primary)", marginBottom: "2rem" }}>₹{product.price}</p>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "2rem" }}>
          <button onClick={handleAddToCart} className="btn btn-success">
            ➕ Add to Cart
          </button>
          <button onClick={handleBuyNow} className="btn btn-warning">
            ⚡ Buy Now
          </button>
          <Link to="/cart">
            <button className="btn btn-primary">
              🛒 View Cart
            </button>
          </Link>
          <Link to="/">
            <button className="btn btn-secondary">
              ← Back to Home
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default ProductDetails;