import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api";

export default function Products() {
  const { subcategoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get(`/products?subcategory=${subcategoryId}`)
      .then(res => setProducts(res.data));
  }, [subcategoryId]);

  const addToCart = (p) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ ...p, qty: 1 });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart");
  };

  return (
    <div>
      <h2>Products</h2>
      {products.map(p => (
        <div key={p._id}>
          <p>{p.name} - ₹{p.price}</p>
          <button onClick={() => addToCart(p)}>Add</button>
        </div>
      ))}
    </div>
  );
}
