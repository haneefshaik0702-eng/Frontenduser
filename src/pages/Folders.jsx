import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api";

export default function Folders() {
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    api.get("/folders").then(res => setFolders(res.data));
  }, []);

  return (
    <div>
      <h2>Folders</h2>
      {folders.map(f => (
        <Link key={f._id} to={`/folder/${f._id}/vendors`}>
          <p>{f.name}</p>
        </Link>
      ))}
    </div>
  );
}
