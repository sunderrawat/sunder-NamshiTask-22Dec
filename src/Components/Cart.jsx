import React from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

function Cart() {
  let price = 0;
  const cartData = useSelector((state) => state.cart.cartDataItem);
  cartData.length > 0 &&
    cartData.map((item) => {
      price = price + item.price;
    });

  return (
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
            <div className="cartBottom">
              <div className="totalBox">
                <div className="toatalText">Item Total</div>
                <div className="totalPrice">&#8377; {price.toFixed(2)}</div>
              </div>

              <div className="checkout">Check Out</div>
            </div>
          </div>
        ) : (
          <h2 className="noitem">No Item in Cart</h2>
        )}
      </div>
    </div>
  );
}

export default Cart;
