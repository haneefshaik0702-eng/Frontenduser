import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    api.get("/categories")
      .then(res => setCategories(res.data));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Categories</h2>

      {categories.map(c => (
        <div key={c._id}>
          <Link to={`/category/${c._id}`}>{c.name}</Link>
        </div>
      ))}
    </div>
  );
}
