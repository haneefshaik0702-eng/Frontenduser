import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-ynph.onrender.com/api",
});

export default api;
