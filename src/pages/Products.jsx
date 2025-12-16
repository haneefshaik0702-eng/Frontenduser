import { useEffect, useState } from "react";
import api from "../api";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/products")
      .then(res => setProducts(res.data))
      .catch(() => alert("Failed to load products"));
  }, []);

  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const exists = cart.find(p => p._id === product._id);
    if (exists) {
      exists.qty += 1;
    } else {
      cart.push({ ...product, qty: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Products</h2>

      {products.map(p => (
        <div key={p._id} style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}>
          <h4>{p.name}</h4>
          <p>₹{p.price}</p>

          {p.image && (
            <img
              src={`http://localhost:7000${p.image}`}
              width="120"
              alt={p.name}
            />
          )}

          <br />
          <button onClick={() => addToCart(p)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}
