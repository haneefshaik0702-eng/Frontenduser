import axios from "axios";

// Local backend URL
const API = axios.create({
  baseURL: "http://localhost:10000/api",
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
