import React, { useEffect } from "react";
import ProductItem from "../Components/ProductItem";
import { useSelector, useDispatch } from "react-redux";
import { productActions } from "../store/product";
import Categories from "../Components/Categories";
import Header from "./../Components/Header";
import Cart from "../Components/Cart";
import "./Homepage.css";

function Homepage() {
  
  const data = useSelector((state) => state.product.productData);
  const dispatch = useDispatch();
 
  function getAllData() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        dispatch(productActions.productDataHandler(data));
      })
      .catch((e) => console.log(e));
  }
  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div>
      <Header></Header>
      <div className="containerHomepage">
        <div className="category">
          <h2 className="heading">Categories</h2>
          <Categories></Categories>
        </div>
        <div className="productlist">
          {data
            ? data.map((item) => (
                <ProductItem data={item} key={item.id}></ProductItem>
              ))
            : "Loading..."}
        </div>
        <Cart></Cart>
      </div>
    </div>
  );
}

export default Homepage;
