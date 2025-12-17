import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api";

export default function Categories() {
  const { vendorId } = useParams();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    api.get(`/vendors/${vendorId}/categories`)
      .then(res => setCategories(res.data));
  }, [vendorId]);

  return (
    <div style={{ padding: 20 }}>
      <h2>Categories</h2>
      {categories.map(c => (
        <div key={c._id}>
          <Link to={`/categories/${c._id}`}>{c.name}</Link>
        </div>
      ))}
    </div>
  );
}
