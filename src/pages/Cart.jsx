import api from "../api";

export default function Cart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const checkout = async () => {
    if (!cart.length) return alert("Cart empty");

    const token = localStorage.getItem("userToken");
    if (!token) return alert("Login required");

    try {
      await api.post(
        "/user/orders",
        { products: cart.map(p => ({ product: p._id, qty: p.qty })) },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      localStorage.removeItem("cart");
      alert("Order placed");
    } catch {
      alert("Failed to place order");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Cart</h2>
      {cart.map((p, i) => (
        <p key={i}>{p.name} - ₹{p.price}</p>
      ))}
      <button onClick={checkout}>Checkout (COD)</button>
    </div>
  );
}
