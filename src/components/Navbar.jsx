import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const token = localStorage.getItem("userToken");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("userToken");
    navigate("/");
  };

  return (
    <div style={{ padding: 10, background: "#eee", display: "flex", gap: 15 }}>
      <Link to="/">Products</Link>
      <Link to="/categories">Categories</Link>

      {token && <Link to="/cart">Cart</Link>}
      {token && <Link to="/orders">My Orders</Link>}

      {!token && <Link to="/login">Login</Link>}
      {token && <button onClick={logout}>Logout</button>}
    </div>
  );
}
