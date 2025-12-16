import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api";

export default function CategoryProducts() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get(`/products?category=${id}`)
      .then(res => setProducts(res.data))
      .catch(() => alert("Failed to load products"));
  }, [id]);

  return (
    <div style={{ padding: 20 }}>
      <h2>Products</h2>

      {products.map(p => (
        <div key={p._id}>
          <p>{p.name} - ₹{p.price}</p>
        </div>
      ))}
    </div>
  );
}
