import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api";

export default function Products() {
  const { subId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get(`/products?subcategory=${subId}`)
      .then(res => setProducts(res.data));
  }, [subId]);

  return (
    <div style={{ padding: 20 }}>
      <h2>Products</h2>
      {products.map(p => (
        <div key={p._id}>
          <b>{p.name}</b> – ₹{p.price}
        </div>
      ))}
    </div>
  );
}
