import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../api";

export default function Categories() {
  const { vendorId } = useParams();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    api
      .get(`/categories?vendor=${vendorId}`)
      .then(res => setCategories(res.data))
      .catch(err => {
        console.error(err);
        alert("Failed to load categories");
      });
  }, [vendorId]);

  return (
    <div style={{ padding: 20 }}>
      <h2>Categories</h2>

      {categories.length === 0 && <p>No categories found</p>}

      {categories.map(cat => (
        <div key={cat._id} style={{ marginBottom: 10 }}>
          <Link to={`/categories/${cat._id}`}>
            {cat.name}
          </Link>
        </div>
      ))}
    </div>
  );
}
