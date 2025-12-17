import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import CategoryProducts from "./pages/CategoryProducts";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Login from "./pages/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:id" element={<CategoryProducts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
