import React from 'react';
import '../css/Cart.css';

const Cart = () => {
    const cartItems = [
        {
            id: 1,
            title: "Rain World",
            priceChanged: true,
            hasWindows: true,
            hasMac: false,
            hasLinux: false,
            discount: "-65%",
            originalPrice: "₱765.00",
            currentPrice: "₱267.75",
            img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/312520/capsule_231x87.jpg"
        },
        {
            id: 2,
            title: "Bendy and the Dark Revival",
            priceChanged: true,
            hasWindows: true,
            hasMac: false,
            hasLinux: false,
            currentPrice: "₱625.00",
            img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1063660/capsule_231x87.jpg"
        },
        {
            id: 3,
            title: "Sonic Mania",
            priceChanged: true,
            hasWindows: true,
            hasMac: false,
            hasLinux: false,
            currentPrice: "₱1,095.00",
            img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/584400/capsule_231x87.jpg"
        },
        {
            id: 4,
            title: "The Binding of Isaac: Rebirth",
            priceChanged: true,
            hasWindows: true,
            hasMac: true,
            hasLinux: true,
            currentPrice: "₱388.00",
            img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/250900/capsule_231x87.jpg"
        }
    ];

    return (
        <div className="cart-page">
            <div className="cart-container">
                <h1 className="cart-title">Your Shopping Cart ({cartItems.length} items)</h1>
                <div className="cart-layout">
                    <div className="cart-items">
                        {cartItems.map((item) => (
                            <div className="cart-item" key={item.id}>
                                <div className="cart-item-left">
                                    <img src={item.img} alt={item.title} className="cart-item-image" />
                                    <div className="cart-item-details">
                                        <div className="cart-item-title">{item.title}</div>
                                        {item.priceChanged && (
                                            <div className="cart-item-warning">The price of this item has changed</div>
                                        )}
                                        <div className="cart-item-platforms">
                                            {item.hasWindows && <span>🪟</span>}
                                            {item.hasMac && <span>🍎</span>}
                                            {item.hasLinux && <span>🐧</span>}
                                        </div>
                                        <select className="cart-item-account-select">
                                            <option>For my account</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="cart-item-right">
                                    <div className="cart-item-price-row">
                                        {item.discount && (
                                            <div className="discount-badge">{item.discount}</div>
                                        )}
                                        <div className="price-stack">
                                            {item.originalPrice && (
                                                <div className="original-price">{item.originalPrice}</div>
                                            )}
                                            <div className="current-price">{item.currentPrice}</div>
                                        </div>
                                    </div>
                                    <div className="cart-item-actions">
                                        <span>Add</span> | <span>Remove</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="cart-summary">
                        <div className="summary-row">
                            <span className="summary-label">Estimated total</span>
                            <span className="summary-total">₱2,375.75</span>
                        </div>
                        <div className="summary-tax-note">
                            Sales tax will be calculated during checkout where applicable
                        </div>
                        <button className="checkout-btn">Continue to payment</button>

                        <div style={{ textAlign: 'center', marginTop: '1.5rem', marginBottom: '1.5rem', padding: '2rem 1rem', background: 'rgba(0,0,0,0.3)', borderRadius: '4px' }}>
                            <div style={{ fontSize: '4rem', display: 'flex', justifyContent: 'center', gap: '1rem', alignItems: 'center' }}>
                                ☕ 💻
                            </div>
                        </div>

                        <div className="legal-notice">
                            <p>A purchase of a digital product grants a license for the product on Steam.</p>
                            <p>For full terms and conditions, please see the <a href="#">Steam Subscriber Agreement</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
