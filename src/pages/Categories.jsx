import { useEffect, useState } from "react";
import api from "../api";
import { Link } from "react-router-dom";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    api.get("/categories")
      .then(res => setCategories(res.data))
      .catch(() => alert("Failed to load categories"));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Categories</h2>

      {categories.map(cat => (
        <div key={cat._id} style={{ marginBottom: 10 }}>
          <Link to={`/category/${cat._id}`}>
            {cat.name}
          </Link>
        </div>
      ))}
    </div>
  );
}
