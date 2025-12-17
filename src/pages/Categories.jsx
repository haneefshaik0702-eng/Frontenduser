import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api";

export default function Categories() {
  const { vendorId } = useParams();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    api.get(`/categories?vendor=${vendorId}`)
      .then(res => setCategories(res.data));
  }, [vendorId]);

  return (
    <div>
      <h2>Categories</h2>
      {categories.map(c => (
        <Link key={c._id} to={`/category/${c._id}/subcategories`}>
          <p>{c.name}</p>
        </Link>
      ))}
    </div>
  );
}
