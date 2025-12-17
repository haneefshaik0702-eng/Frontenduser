import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api";

export default function Vendors() {
  const { folderId } = useParams();
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    api.get(`/vendors?folder=${folderId}`).then(res => setVendors(res.data));
  }, [folderId]);

  return (
    <div>
      <h2>Vendors</h2>
      {vendors.map(v => (
        <Link key={v._id} to={`/vendor/${v._id}/categories`}>
          <p>{v.name}</p>
        </Link>
      ))}
    </div>
  );
}
