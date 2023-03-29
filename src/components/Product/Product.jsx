import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
  const { name, img, price, seller, ratings } = props.product;
  const handelAddToCart = props.handelAddToCart;
  
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);



  return (
    <div className="product">
      <img src={img && img} alt="" />
      <div className="product-info">
        <h6 className="product-name">{name ? name : "Not Found"}</h6>
        <p className="product-price">Pirce: ${price ? price : "Not Found"}</p>
        <p>Manufacturer: {seller ? seller : "Not Found"}</p>
        <p>Rating: {ratings ? ratings : "Not Found"} stars</p>
      </div>
      <button onClick={() => handelAddToCart(props.product)} className="btn-cart">
        Add to Cart <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
