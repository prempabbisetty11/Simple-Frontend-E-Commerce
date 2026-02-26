import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";
import { NotificationContext } from "../context/NotificationContext.jsx";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const { showNotification } = useContext(NotificationContext);

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product);
    showNotification(`✓ ${product.name} added to cart!`, "success", 2500);
  };

  const handleBuyNow = () => {
    addToCart(product);
    showNotification(`✓ Proceeding with ${product.name}...`, "info", 2000);
  };

  return (
    <div className="product-card">
      {product.image && (
        <img
          src={product.image}
          alt={product.name}
        />
      )}
      <div className="product-card-content">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="product-price">₹{product.price}</div>
        <div className="product-actions">
          <button
            onClick={handleAddToCart}
            className="btn btn-success"
          >
            Add to Cart
          </button>
          <button
            onClick={handleBuyNow}
            className="btn btn-warning"
          >
            Buy Now
          </button>
          <Link to={`/product/${product.id}`}>
            <button className="btn btn-primary">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;