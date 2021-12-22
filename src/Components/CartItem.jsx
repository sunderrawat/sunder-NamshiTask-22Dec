import React from "react";
function CartItem(props){
    return (
      <div className="cartContainer">
        <h2 className="title">{props.data.title}</h2>
        <div className="price">&#8377; {props.data.price}</div>
      </div>
    );
}

export default CartItem;