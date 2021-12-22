import React, { useState, useEffect } from "react";
import ProductItem from "../Components/ProductItem";
import CartItem from "../Components/CartItem";
import "./Homepage.css";

function Homepage() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="containerHomepage">
      <div className="category">
        <h2 className="heading">Categories</h2>
      </div>
      <div className="productlist">
        {data
          ? data.map((item) => (
              <ProductItem data={item} key={item.id}></ProductItem>
            ))
          : "Loading..."}
      </div>
      <div className="cartpage">
        <h2 className="heading">My Cart</h2>
        <div>
            <CartItem></CartItem>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
