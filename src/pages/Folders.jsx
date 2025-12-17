import { useEffect, useState } from "react";
import api from "../api";
import { Link } from "react-router-dom";

export default function Folders() {
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    api.get("/folders").then(res => setFolders(res.data));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Choose Service</h2>
      {folders.map(f => (
        <div key={f._id}>
          <Link to={`/folders/${f._id}`}>{f.name}</Link>
        </div>
      ))}
    </div>
  );
}
