import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Product.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const Product = ({ product, handleAddToCart }) => {
  const { name, img, seller, price, ratings } = product;
  return (
    <article className="product">
      <figure>
        <picture>
          <source srcSet={img} />
          <img
            src={img}
            alt={name}
            loading="lazy"
            width="320"
            height="320"
            decoding="async"
            fetchpriority="low"
          />
        </picture>
      </figure>
      <div className="info">
        <h2 className="name">{name}</h2>
        <p>
          <b>seller:</b> {seller}
        </p>
        <p>
          <b>price:</b> ${price}
        </p>
        <p>
          <b>ratings:</b> {ratings} stars
        </p>
        <p className="btn-wrapper">
          <button
            type="button"
            className="add-to-cart"
            onClick={() => handleAddToCart(product)}>
            add to cart
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
          </button>
        </p>
      </div>
    </article>
  );
};

export default Product;
