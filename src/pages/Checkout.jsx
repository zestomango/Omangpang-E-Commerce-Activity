import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { useGameContext } from '../context/GameContext';
import '../css/Checkout.css';



const Checkout = () => {
    const { cartItems, clearCart } = useGameContext();
    const { userData } = useUser();
    const navigate = useNavigate();
    const [paymentMethod, setPaymentMethod] = useState('Cash on Delivery');

    const cartTotal = cartItems.reduce((total, item) => {
        const numericPrice = Number(item.price.replace(/[₱,]/g, ''));
        return total + numericPrice * item.quantity;
    }, 0);

    const handlePurchase = () => {
        clearCart();
        alert("Checkout has been successful and your order has been placed!");
        navigate('/landing');
    };

    return (
        <div className="checkout-page">
            <div className="checkout-container">
                
                <div className="checkout-section">
                    <ul className="checkout-items">
                        {cartItems.map((item) => (
                            <li className="checkout-item" key={item.id}>
                                <div className="checkout-item-left">
                                    <img src={item.image} alt={item.title} className="checkout-item-image" />
                                    <span className="checkout-item-title">
                                        <span style={{ color: '#8f98a0', marginRight: '8px' }}>{item.quantity}x</span>
                                        {item.title}
                                    </span>
                                </div>
                                <div className="checkout-item-right">
                                    <div className="checkout-item-price">
                                        ₱{(Number(item.price.replace(/[₱,]/g, '')) * item.quantity).toLocaleString('en-PH', { minimumFractionDigits: 2 })}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    
                    <div className="checkout-totals">
                        <div className="checkout-total-row">
                            <span>Subtotal:</span>
                            <span>₱{cartTotal.toLocaleString('en-PH', { minimumFractionDigits: 2 })}</span>
                        </div>
                        <div className="checkout-total-row total">
                            <span>Total:</span>
                            <span>₱{cartTotal.toLocaleString('en-PH', { minimumFractionDigits: 2 })}</span>
                        </div>
                        <div className="checkout-vat-note">
                            All prices include VAT where applicable
                        </div>
                    </div>
                </div>



                <div className="checkout-payment-details" style={{ marginBottom: '20px' }}>
                    <h3 style={{ color: '#ffffff', marginTop: 0, marginBottom: '1.5rem', fontSize: '1.2rem', fontWeight: 'bold' }}>Personal Details</h3>
                    <div className="checkout-field">
                        <span className="checkout-label">Name:</span>
                        <div className="checkout-value" style={{ color: '#ffffff' }}>
                            {userData ? `${userData.firstName} ${userData.lastName}` : 'N/A'}
                        </div>
                    </div>
                    <div className="checkout-field">
                        <span className="checkout-label">Email:</span>
                        <div className="checkout-value" style={{ color: '#ffffff', textTransform: 'none' }}>
                            {userData?.email || 'N/A'}
                        </div>
                    </div>
                    <div className="checkout-field">
                        <span className="checkout-label">Address:</span>
                        <div className="checkout-value" style={{ color: '#ffffff', textTransform: 'none' }}>
                            {userData?.address || 'N/A'}
                        </div>
                    </div>
                    <div className="checkout-field" style={{ marginBottom: 0 }}>
                        <span className="checkout-label">Phone:</span>
                        <div className="checkout-value" style={{ color: '#ffffff', textTransform: 'none' }}>
                            {userData?.phone || 'N/A'}
                        </div>
                    </div>
                </div>

                <div className="checkout-payment-details">
                    <div className="checkout-field">
                        <span className="checkout-label">Payment method:</span>
                        <div className="payment-method-group">
                            <button 
                                className={`payment-method-btn ${paymentMethod === 'Cash on Delivery' ? 'active' : ''}`}
                                onClick={() => setPaymentMethod('Cash on Delivery')}
                            >
                                Cash on Delivery
                            </button>
                            <button 
                                className={`payment-method-btn ${paymentMethod === 'Jaycash' ? 'active' : ''}`}
                                onClick={() => setPaymentMethod('Jaycash')}
                            >
                                JayCash
                            </button>
                        </div>
                    </div>

                    <div className="checkout-actions">
                        <button className="purchase-btn" onClick={handlePurchase}>
                            Purchase
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Checkout;
