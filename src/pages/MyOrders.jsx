import { useEffect, useState } from "react";
import api from "../api";

export default function MyOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem("userToken");
      if (!token) {
        alert("Login required");
        return;
      }

      try {
        const res = await api.get("/user/orders", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setOrders(res.data);
      } catch (err) {
        alert("Failed to load orders");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) return <p style={{ padding: 20 }}>Loading orders...</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>My Orders</h2>

      {orders.length === 0 && <p>No orders found</p>}

      {orders.map(order => (
        <div
          key={order._id}
          style={{
            border: "1px solid #ccc",
            marginBottom: 15,
            padding: 10,
            borderRadius: 6,
          }}
        >
          <p><b>Order ID:</b> {order._id}</p>
          <p><b>Status:</b> {order.status}</p>
          <p><b>Date:</b> {new Date(order.createdAt).toLocaleString()}</p>

          <hr />

          {order.products.map((p, i) => (
            <p key={i}>
              • {p.product?.name || "Product"} × {p.qty}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}
