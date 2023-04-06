import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

  let totalPrice = 0;
  let totalShipping = 0;
  let quantity = 0;

  for (const product of cart) {
    
    if (product.quantity === 0) {
      product.quantity = 1;
    }
    totalPrice = totalPrice + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping;
    quantity = quantity + product.quantity;
  }

  const tex = (totalPrice * 7) / 100;
  const grandTotal = totalPrice + totalShipping + tex;

  return (
    <div className="cart" style={{backgroundColor: randomColor}}>
      <h6>Order Summary</h6>
      <p>Selected Items: {quantity}</p>
      <p>Selected Items: </p>
      <p>Total Price: ${totalPrice}</p>
      <p>Total Shipping Charge: ${totalShipping} </p>
      <p>Tax: ${tex}</p>
      <h6>Grand Total: ${grandTotal}</h6>
    </div>
  );
};

export default Cart;
