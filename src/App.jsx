import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

// pages
import Folders from "./pages/Folders";
import Vendors from "./pages/Vendors";
import Categories from "./pages/Categories";
import SubCategories from "./pages/SubCategories";
import Products from "./pages/Products";

import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Login from "./pages/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* ENTRY */}
        <Route path="/" element={<Folders />} />

        {/* FLOW */}
        <Route path="/folders/:folderId" element={<Vendors />} />
        <Route path="/vendors/:vendorId" element={<Categories />} />
        <Route path="/categories/:categoryId" element={<SubCategories />} />
        <Route path="/products/:subId" element={<Products />} />

        {/* USER */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
