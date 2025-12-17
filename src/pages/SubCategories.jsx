import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api";

export default function Subcategories() {
  const { categoryId } = useParams();
  const [subs, setSubs] = useState([]);

  useEffect(() => {
    api.get(`/subcategories?category=${categoryId}`)
      .then(res => setSubs(res.data));
  }, [categoryId]);

  return (
    <div>
      <h2>Subcategories</h2>
      {subs.map(s => (
        <Link key={s._id} to={`/subcategory/${s._id}/products`}>
          <p>{s.name}</p>
        </Link>
      ))}
    </div>
  );
}
