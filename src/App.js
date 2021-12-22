import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/Homepage";
import PageNotFound from "./Pages/PageNotFound";
import CartPage from "./Pages/CartPage";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
