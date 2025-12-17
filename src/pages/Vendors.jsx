import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api";

export default function Vendors() {
  const { folderId } = useParams();
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    api.get(`/vendors?folder=${folderId}`)
      .then(res => setVendors(res.data));
  }, [folderId]);

  return (
    <div style={{ padding: 20 }}>
      <h2>Vendors</h2>
      {vendors.map(v => (
        <div key={v._id}>
          <Link to={`/vendors/${v._id}`}>{v.name}</Link>
        </div>
      ))}
    </div>
  );
}
