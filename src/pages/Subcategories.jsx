import { useParams, Link } from "react-router-dom";  
import { useEffect, useState } from "react";  
import api from "../api";  

export default function Subcategories() {  
  const { categoryId } = useParams();  
  const [subcategories, setSubcategories] = useState([]);  

  useEffect(() => {  
    const fetchSubcategories = async () => {
      try {
        const res = await api.get(`/subcategories?category=${categoryId}`);
        setSubcategories(res.data);
      } catch (err) {
        console.error(err.response?.data || err.message);
      }
    };
    fetchSubcategories();
  }, [categoryId]);  

  return (  
    <div>  
      <h2>Subcategories</h2>  
      {subcategories.length === 0 && <p>No subcategories found.</p>}
      {subcategories.map(s => (  
        <Link key={s._id} to={`/subcategory/${s._id}/products`}>  
          <p>{s.name}</p>  
        </Link>  
      ))}  
    </div>  
  );  
}
