import React from "react";
import { Link } from "react-router-dom";
import Cart from "../Components/Cart";
import "./Cartpage.css";
function CartPage() {
  return (
    <div className="cartpage__container">
      <div className="breadcum"><Link to="/">Home</Link> / Cart</div>
      <Cart></Cart>
    </div>
  );
}

export default CartPage;