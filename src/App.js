import React, { useContext } from "react";
import AppContext from "./context/AppContext.js";
import ShowProduct from "./components/product/ShowProduct.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from "./components/product/ProductDetail.js";
import Navbar from "./components/Navbar.js";
import SearchProduct from "./components/product/SearchProduct.js";
import Register from "./components/user/Register.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/user/Login.js";
import Profile from "./components/user/Profile.js";
import Cart from "./components/Cart.js";
import Address from "./components/Address.js";
import Checkout from "./components/Checkout.js";
import OrderConfirmation from "./components/OrderConfirmation.js";


const App = () => {
  // const {  } = useContext(AppContext);
  return (
    <Router>
      <Navbar /> {/* nav bar content */}
      <ToastContainer />
      <Routes>
        <Route path="/" element={<ShowProduct />} />
        <Route path="/product/search/:term" element={<SearchProduct />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shipping" element={<Address />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orderconfirmation" element={<OrderConfirmation />} />
      </Routes>
    </Router>
  );
};

export default App;
