import React from "react";
import "./Cart.css";
const Cart = props => {
  const { cart } = props;
  return (
    <aside className="cart-section">
      <div className="cart-content">
        <h2 className="">Order Summary</h2>
        <p>
          Selected items: <b>{cart.length}</b>
        </p>
        <p>
          Total price: <b>{}</b>
        </p>
        <p>
          Total tax: <b>{}</b>
        </p>
      </div>
    </aside>
  );
};

export default Cart;
