import React from "react";
import "./ProductItem.css";
function ProductItem(props) {
function cartAddHandler(e){
    console.log('Item Added to Cart successfully');
}
// category: "men's clothing"
// description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
// id: 1
// image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
// price: 109.95
// rating: {rate: 3.9, count: 120}
// title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
  return (
    <div className="container">
      <div className="imgbox">
        <img src={props.data.image} alt={props.data.title} className="img"/>
      </div>
      <div className="detailsbox">
        <h2 className="title">{props.data.title}</h2>
        <div className="price">&#8377; {props.data.price}</div>
        <p className="description">{props.data.description}</p>
      </div>
      <div className="buttonbox">
        <button className="btn" onClick={cartAddHandler}>Add</button>
      </div>
    </div>
  );
}

export default ProductItem;
