import React, { useEffect, useState } from "react";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);


  useEffect(() => {
    const savedCart = [];
    const storedCart = getShoppingCart();
    // step 1: get id of the addedProduct
    for (const id in storedCart) {
      // step 2: get product from product state by using id
      const addedProduct = products.find(product => product.id === id)
      if (addedProduct) {
        // step 3: set quantity
        const quantity = storedCart[id];
        addedProduct.quantity = quantity

        // step 4: add the addedProduct to the savedCart
        savedCart.push(addedProduct)
      }
    }
    // step 5: set the cart 
    setCart(savedCart);
  }, [products]);

  
  const handelAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handelAddToCart={handelAddToCart}
          ></Product>
        ))}
      </div>
      <div className="card-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
