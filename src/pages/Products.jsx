import { useEffect, useState } from "react";
import api from "../api";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/products")
      .then(res => setProducts(res.data))
      .catch(() => alert("Failed to load products"));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Products</h2>

      {products.length === 0 && <p>No products</p>}

      {products.map(p => (
        <div key={p._id} style={{ borderBottom: "1px solid #ccc", marginBottom: 10 }}>
          <h4>{p.name}</h4>
          <p>₹{p.price}</p>
          <button
            onClick={() => {
              const cart = JSON.parse(localStorage.getItem("cart")) || [];
              cart.push({ ...p, qty: 1 });
              localStorage.setItem("cart", JSON.stringify(cart));
              alert("Added to cart");
            }}
          >
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
}
