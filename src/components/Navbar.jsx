
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 0,
    }}>
      <Link to="/" style={{ fontSize: "1.5em", fontWeight: 700 }}>
        🛍️ MiniShop
      </Link>

      <div style={{ display: "flex", gap: "2rem" }}>
        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""} style={{ marginRight: 0 }}>
          Home
        </NavLink>
        <NavLink to="/cart" className={({ isActive }) => isActive ? "active" : ""} style={{ marginRight: 0 }}>
          Cart
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""} style={{ marginRight: 0 }}>
          About
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;