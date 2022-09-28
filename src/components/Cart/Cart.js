import React from "react";
import "./Cart.css";
const Cart = props => {
  const { cart } = props;
  console.log(cart);
  let totalPrice = 0;
  let totalShipping = 0;
  let totalQuantity = 0;
  for (const product of cart) {
    totalQuantity = totalQuantity + product.quantity;
    totalPrice = Number(
      (totalPrice + product.price * product.quantity).toFixed(2)
    );
    totalShipping = Number((totalShipping + product.shipping).toFixed(2));
  }
  const tax = Number((totalPrice * 0.1).toFixed(2));
  return (
    <aside className="cart-section">
      <div className="cart-content">
        <h2 className="">Order Summary</h2>
        <p>
          Selected items: <b>{totalQuantity}</b>
        </p>
        <p>
          Total price: <b>{totalPrice}</b>
        </p>
        <p>
          Total shipping cost: <b>{totalShipping}</b>
        </p>
        <p>
          Total tax: <b>{tax}</b>
        </p>
        <p>
          <b>Grand total:</b> <b>{totalPrice + totalShipping + tax}</b>
        </p>
        <div className="btn-wrapper">
          <button type="button">clear cart</button>
          <button type="button">review order</button>
        </div>
      </div>
    </aside>
  );
};

export default Cart;
