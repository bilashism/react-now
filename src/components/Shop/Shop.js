import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
import { getShoppingCart, addToDb } from "../../utilities/fakedb";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch(`products.json`)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart();
    const storedCartItems = [];
    for (const id in storedCart) {
      const addedProducts = products.find(product => product.id === id);
      if (addedProducts) {
        const quantity = storedCart[id];
        addedProducts.quantity = quantity;
        storedCartItems.push(addedProducts);
      }
    }
    setCart(storedCartItems);
  }, [products]);

  const handleAddToCart = selectedProduct => {
    console.log(selectedProduct);
    const exists = cart.find(prod => prod.id === selectedProduct.id);
    let newCart = [];

    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter(prod => prod.id !== selectedProduct.id);
      selectedProduct.quantity = selectedProduct.quantity + 1;
      newCart = [...rest, selectedProduct];
    }

    console.log(newCart);
    setCart(newCart);
    // console.log(newCart);
    addToDb(selectedProduct.id);
  };
  return (
    <section className="shop-section">
      <div className="shop-container">
        <div className="products-section">
          <h2 className="">All products: {products.length}</h2>
          <div className="products-container">
            {products.map(prod => (
              <Product
                key={prod.id}
                product={prod}
                handleAddToCart={() => handleAddToCart(prod)}></Product>
            ))}
          </div>
        </div>
        {<Cart cart={cart}></Cart>}
      </div>
    </section>
  );
};

export default Shop;
