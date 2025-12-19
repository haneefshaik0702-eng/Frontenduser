import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api";

export default function Products() {
  const { subcategoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await api.get(`/products?subcategory=${subcategoryId}`);
        setProducts(res.data);
      } catch (err) {
        console.error(err.response?.data || err.message);
      }
    };
    fetchProducts();
  }, [subcategoryId]);

  return (
    <div>
      <h2>Products</h2>
      {products.length === 0 && <p>No products found in this subcategory.</p>}
      {products.map((p) => (
        <div key={p._id}>
          <p>{p.name}</p>
          <p>${p.price}</p>
        </div>
      ))}
    </div>
  );
}
