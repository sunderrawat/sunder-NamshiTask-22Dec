import React from "react";
function CartItem(props){
    return (
      <div className="cartItemContainer">
        <h2 className="cart__title">{props.data.title}</h2>
        <div className="cart__price">&#8377; {props.data.price}</div>
      </div>
    );
}

export default CartItem;