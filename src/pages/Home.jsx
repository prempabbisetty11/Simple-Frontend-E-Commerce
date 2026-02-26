

import { useEffect, useState } from "react";
import productsData from "../data/products";
import ProductCard from "../components/ProductCard";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <main>
      <h1>🛒 Shop Our Collection</h1>
      {products.length === 0 ? (
        <div className="empty-state">
          <p>No products available</p>
        </div>
      ) : (
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
}

export default Home;