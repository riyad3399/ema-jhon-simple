import React from "react";
import "./Product.css";

const Product = (props) => {
  console.log(props.product);
  const { name, img, price, quantity, seller, ratings } = props.product;
  return (
    <div className="product">
      <img src={img && img} alt="" />
      <div className="product-info">
        <h6 className="product-name">{name ? name : "Not Found"}</h6>
        <p>Pirce: ${price ? price : "Not Found"}</p>
        <p>Manufacturer: {seller ? seller : "Not Found"}</p>
        <p>Rating: {ratings ? ratings : "Not Found"} stars</p>
      </div>
      <button className="btn-cart">Add to Cart</button>
    </div>
  );
};

export default Product;
