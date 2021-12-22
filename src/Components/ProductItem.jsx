import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/cart";
import "./ProductItem.css";
function ProductItem(props) {
  const dispatch = useDispatch();
  function cartAddHandler(item) {
    dispatch(cartActions.cartDataHandler(item));
    console.log("Item Added to Cart successfully");
  }
  return (
    <div className="container">
      <div className="imgbox">
        <img src={props.data.image} alt={props.data.title} className="img" />
      </div>
      <div className="detailsbox">
        <h2 className="title">{props.data.title}</h2>
        <div className="price">&#8377; {props.data.price}</div>
        <p className="description">{props.data.description}</p>
      </div>
      <div className="buttonbox">
        <button
          className="btn"
          onClick={() => {
            cartAddHandler(props.data);
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
