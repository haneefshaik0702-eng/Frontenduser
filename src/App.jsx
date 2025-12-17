import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Folders from "./pages/Folders";
import Vendors from "./pages/Vendors";
import Categories from "./pages/Categories";
import Subcategories from "./pages/Subcategories";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Login from "./pages/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Folders />} />
        <Route path="/folder/:folderId/vendors" element={<Vendors />} />
        <Route path="/vendor/:vendorId/categories" element={<Categories />} />
        <Route path="/category/:categoryId/subcategories" element={<Subcategories />} />
        <Route path="/subcategory/:subcategoryId/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
