import React from 'react';
import { Link } from 'react-router-dom';
import { useGameContext } from '../context/GameContext';
import './NavBar.css';

const NavBar = () => {
    const { cartItems } = useGameContext();
    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/landing" className="navbar-brand">GAMEZONE</Link>
            </div>
            <div className="navbar-right">
                <Link to="/cart" className="navbar-cart" title="Shopping Cart">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    {totalQuantity > 0 && (
                        <span className="cart-count">{totalQuantity}</span>
                    )}
                </Link>
            </div>
        </nav>
    );
}

export default NavBar;
