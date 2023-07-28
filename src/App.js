
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Navbar from './pages/navbar';
import Home from './pages/home';
import Secret from "./pages/secret";
import Cart from "./pages/cart";
import Myorder from "./pages/myorder";
import { Carprovider } from "./pages/contextreducer";
const App = () => {
  return (
    <Carprovider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} >
            <Route index element={<Home />}></Route>
            <Route path="signup" element={<Signup />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="secret" element={<Secret />}></Route>
            <Route path="myorder" element={<Myorder />} ></Route>
            <Route path="cart" element={<Cart />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Carprovider>

  );
};

export default App;
