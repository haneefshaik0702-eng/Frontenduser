import axios from "axios";

// Local backend URL
const API = axios.create({
  baseURL: "https://backend-ynph.onrender.com/api",
});

// Add token automatically to protected requests
export const setAuthToken = (token) => {
  if (token) {
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete API.defaults.headers.common["Authorization"];
  }
};

export default API;
