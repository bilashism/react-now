import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch(`products.json`)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);
  const handleAddToCart = prod => {
    console.log(prod);
    const newCart = [...cart, prod];
    setCart(newCart);
    console.log(newCart);
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
