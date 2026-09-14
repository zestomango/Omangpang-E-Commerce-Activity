import React from "react";
import { useNavigate } from "react-router-dom";
import { useGameContext } from "../context/GameContext";
import "../css/Cart.css";

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart } = useGameContext();
  const cartTotal = cartItems.reduce((total, item) => {
    const numericPrice = Number(item.price.replace(/[₱,]/g, ""));
    return total + numericPrice * item.quantity;
  }, 0);

  return (
    <div className="cart-page">
      <div className="cart-container">
        <div className="cart-layout">
          <div className="cart-items">
            <h1 className="cart-title">
              Your Shopping Cart ({cartItems.length} items)
            </h1>
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="cart-item-left">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="cart-item-image"
                  />
                  <div className="cart-item-details">
                    <div className="cart-item-title">
                      <span style={{ color: "#8f98a0", marginRight: "8px" }}>
                        {item.quantity}x
                      </span>
                      {item.title}
                    </div>
                    {item.priceChanged && (
                      <div className="cart-item-warning">
                        The price of this item has changed
                      </div>
                    )}
                  </div>
                </div>
                <div className="cart-item-right">
                  <div className="cart-item-price-row">
                    {item.discount && (
                      <div className="discount-badge">{item.discount}</div>
                    )}
                    <div className="price-stack">
                      {item.originalPrice && (
                        <div className="original-price">
                          {item.originalPrice}
                        </div>
                      )}
                      <div className="current-price">
                        ₱
                        {(
                          Number(item.price.replace(/[₱,]/g, "")) *
                          item.quantity
                        ).toLocaleString("en-PH", { minimumFractionDigits: 2 })}
                      </div>
                    </div>
                  </div>
                  <div className="cart-item-actions">
                    <span onClick={() => removeFromCart(item.id)}>Remove</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="summary-row">
              <span className="summary-label">Total:</span>
              <span className="summary-total">
                ₱
                {cartTotal.toLocaleString("en-PH", {
                  minimumFractionDigits: 2,
                })}
              </span>
            </div>
            <button
              className="checkout-btn"
              disabled={cartItems.length === 0}
              onClick={() => navigate("/checkout")}
            >
              Continue to payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
