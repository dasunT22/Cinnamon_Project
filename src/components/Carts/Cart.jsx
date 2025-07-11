import React from "react";
import "./Cart.css";

const Cart = () => (
  <button className="cart-btn" aria-label="Add to cart">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4e2e0e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h7.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  </button>
);

export default Cart;
