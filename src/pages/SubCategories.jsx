import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../api";

export default function SubCategories() {
  const { categoryId } = useParams();
  const [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    api
      .get(`/subcategories?category=${categoryId}`)
      .then(res => setSubCategories(res.data))
      .catch(err => {
        console.error(err);
        alert("Failed to load subcategories");
      });
  }, [categoryId]);

  return (
    <div style={{ padding: 20 }}>
      <h2>Sub Categories</h2>

      {subCategories.length === 0 && <p>No subcategories found</p>}

      {subCategories.map(sub => (
        <div key={sub._id} style={{ marginBottom: 10 }}>
          <Link to={`/products/${sub._id}`}>
            {sub.name}
          </Link>
        </div>
      ))}
    </div>
  );
}
