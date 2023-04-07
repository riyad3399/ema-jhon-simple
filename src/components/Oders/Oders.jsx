import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import Cart from "../Cart/Cart";
import { Link, useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Order.css";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";

const Oders = () => {
  const saveCart = useLoaderData();

  const [cart, setCart] = useState(saveCart);

  const handelDeleteFromCart = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };

  const handelClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div className="shop-container">
      <div className="review-container">
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            product={product}
            handelDeleteFromCart={handelDeleteFromCart}
          />
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} handelClearCart={handelClearCart}>
          <Link className="proceed-link" to="/checkout">
            <button className="btn-proceed"><span>Proceed Checkout</span>
              <FontAwesomeIcon icon={faWallet}/>
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Oders;
