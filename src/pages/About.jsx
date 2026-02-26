import { Link } from "react-router-dom";

function About() {
  return (
    <main>
      <h1>📱 About MiniShop</h1>

      <div style={{ background: "white", padding: "2rem", borderRadius: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)", marginBottom: "2rem" }}>
        <h2>Our Mission</h2>
        <p>
          Welcome to MiniShop, your one-stop destination for quality electronics and gadgets. We believe in bringing you the best products at competitive prices with exceptional customer service.
        </p>
      </div>

      <div style={{ background: "white", padding: "2rem", borderRadius: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)", marginBottom: "2rem" }}>
        <h2>Why Choose Us?</h2>
        <ul style={{ marginLeft: "2rem" }}>
          <li>🚚 <strong>Fast Delivery:</strong> Free shipping on orders over ₹500</li>
          <li>✅ <strong>Quality Assured:</strong> All products are genuine and tested</li>
          <li>💰 <strong>Best Prices:</strong> Competitive pricing with regular discounts</li>
          <li>🛡️ <strong>Secure Shopping:</strong> Safe and encrypted transactions</li>
          <li>📞 <strong>24/7 Support:</strong> Dedicated customer service team</li>
        </ul>
      </div>

      <div style={{ background: "white", padding: "2rem", borderRadius: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)", marginBottom: "2rem" }}>
        <h2>Our Products</h2>
        <p>
          We carefully curate our collection of electronics and gadgets to ensure you get the best devices for your lifestyle. From smartphones to smart home devices, we have everything you need.
        </p>
      </div>

      <div style={{ textAlign: "center", padding: "2rem", background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)", borderRadius: "12px", color: "white" }}>
        <h2>Ready to Shop?</h2>
        <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "1.1em" }}>Browse our amazing collection of electronics and gadgets!</p>
        <Link to="/">
          <button className="btn" style={{ background: "white", color: "var(--primary)", marginTop: "1rem", fontWeight: "600" }}>
            Start Shopping Now
          </button>
        </Link>
      </div>
    </main>
  );
}

export default About;
