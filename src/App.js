import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import ProductDetail from "./pages/productDetail/ProductDetail";
import Cart from "./pages/cart/Cart";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="products/:catName/:subCat" element={<Products />} />
        <Route path="products/:catName" element={<Products />} />

        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
