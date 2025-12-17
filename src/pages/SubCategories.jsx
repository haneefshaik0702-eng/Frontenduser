import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api";

export default function SubCategories() {
  const { categoryId } = useParams();
  const [subs, setSubs] = useState([]);

  useEffect(() => {
    api.get(`/subcategories?category=${categoryId}`)
      .then(res => setSubs(res.data));
  }, [categoryId]);

  return (
    <div style={{ padding: 20 }}>
      <h2>Sub Categories</h2>
      {subs.map(s => (
        <div key={s._id}>
          <Link to={`/products/${s._id}`}>{s.name}</Link>
        </div>
      ))}
    </div>
  );
}
