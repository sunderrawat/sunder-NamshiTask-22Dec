import React, { useState, useEffect } from "react";
import ProductItem from "../Components/ProductItem";
import { useSelector, useDispatch } from "react-redux";
import { productActions } from "../store/product";
import CartItem from "../Components/CartItem";
import "./Homepage.css";

function Homepage() {
  let price = 0;
  const cartData = useSelector((state) => state.cart.cartDataItem);
  const data = useSelector((state) => state.product.productData);
  const dispatch = useDispatch();
  cartData.length > 0 &&
    cartData.map((item) => {
      price = price + item.price;
    });
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        dispatch(productActions.productDataHandler(data));
      })
      .catch((e) => console.log(e));
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
          {cartData && cartData.length > 0 ? (
            <div>
              {cartData.map((data, index) => {
                return (
                  <div key={index}>
                    <CartItem data={data}></CartItem>
                  </div>
                );
              })}
              <div>
                <div>
                  <div>Item Total</div>
                  <div>&#8377; {price.toFixed(2)}</div>
                </div>

                <div className="checkout">Check Out</div>
              </div>
            </div>
          ) : (
            <h2>No Item in Cart</h2>
          )}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
