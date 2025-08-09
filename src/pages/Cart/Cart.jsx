import React, { useState } from "react";
import "./Cart.css";

const initialItems = [
  { id: 1, name: "Ceylon Cinnamon Sticks", price: 12, qty: 1 },
  { id: 2, name: "Cinnamon Powder", price: 8, qty: 2 },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialItems);

  const handleRemove = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleQtyChange = (id, qty) => {
    setCartItems(
      cartItems.map(item =>
        item.id === id ? { ...item, qty: qty < 1 ? 1 : qty } : item
      )
    );
  };

  const handleAddItem = () => {
    // Simulate adding a new item (replace with actual product selection in real app)
    const newId = cartItems.length + 1;
    setCartItems([
      ...cartItems,
      { id: newId, name: `New Cinnamon Product ${newId}`, price: 10, qty: 1 }
    ]);
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="booking-container">
      <h2>Your Cart</h2>
      <hr className="booking-divider" />

      {cartItems.length === 0 ? (
        <div className="cart-empty">Your cart is empty.</div>
      ) : (
        <div className="cart-list">
          {cartItems.map(item => (
            <div className="cart-item" key={item.id}>
              <div className="cart-item-info">
                <span className="cart-item-name">{item.name}</span>
                <span className="cart-item-price">${item.price}</span>
              </div>
              <div className="cart-item-actions">
                <input
                  type="number"
                  min="1"
                  value={item.qty}
                  className="cart-qty-input"
                  onChange={e => handleQtyChange(item.id, parseInt(e.target.value))}
                />
                <button className="cart-remove-btn" onClick={() => handleRemove(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="cart-actions">
        <button className="cart-add-btn" onClick={handleAddItem}>
          Add More Items
        </button>
        <div className="cart-total">
          <strong>Total:</strong> ${total}
        </div>
        <button className="booking-continue" disabled={cartItems.length === 0}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;