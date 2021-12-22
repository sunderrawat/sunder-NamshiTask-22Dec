import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productActions } from "../store/product";

function Categories() {
  const [categoryData, setCategoryData] = useState();
  const [selectCategory, setSelectCategory] = useState("all");

  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategoryData(data));
  }, []);

  function selectCategoryHandler(name) {
    setSelectCategory(name);
    fetch(`https://fakestoreapi.com/products/category/${name}`)
      .then((res) => res.json())
      .then((data) => dispatch(productActions.productDataHandler(data)));
  }

  function selectAllItemsHandler() {
      setSelectCategory("all");
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        dispatch(productActions.productDataHandler(data));
      })
      .catch((e) => console.log(e));
  }
  return (
    <ul>
      <li
        onClick={selectAllItemsHandler}
        className={`${selectCategory === "all" && "select"}`}
      >
        All Items
      </li>
      {categoryData &&
        categoryData.map((data) => {
          return (
            <li
              onClick={() => selectCategoryHandler(data)}
              className={`${selectCategory === data && "select"}`}
            >
              {data}
            </li>
          );
        })}
    </ul>
  );
}

export default Categories;
