import { useEffect, useState } from "react";
import api from "../api";
import { Link } from "react-router-dom";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    api.get("/categories").then(res => setCategories(res.data));
  }, []);

  return (
    <div>
      <h2>Categories</h2>
      {categories.map(c => (
        <div key={c._id}>
          <Link to={`/category/${c._id}`}>{c.name}</Link>
        </div>
      ))}
    </div>
  );
}
