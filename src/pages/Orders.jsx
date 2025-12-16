import { useEffect, useState } from "react";
import api from "../api";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (!token) return;

    api.get("/user/orders", {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => setOrders(res.data))
    .catch(() => alert("Failed to load orders"));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>My Orders</h2>
      {orders.map(o => (
        <div key={o._id} style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}>
          <p>Status: {o.status}</p>
          <p>Items: {o.products.length}</p>
        </div>
      ))}
    </div>
  );
}
