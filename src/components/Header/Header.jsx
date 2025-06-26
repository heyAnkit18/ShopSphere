import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import LoginModal from '../LoginModal/LoginModal';
import './Header.css';
import logo from '../../assets/logo.png';

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const { cartItems } = useContext(CartContext);

  const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <>
      <header className="header">
        {/* Logo + Location */}
        <div className="header-left">
          <Link to="/" className="logo-container">
            <img src={logo} alt="ShopSphere" className="logo" />
            <div className="brand-info">
              <h1>ShopSphere</h1>
              <span>📍 Garh Rd, New Delhi</span>
            </div>
          </Link>
        </div>

        {/* Search */}
        <div className="header-center">
          <input
            type="text"
            placeholder='Search for "shoes", "dress", "decor", etc.'
            className="search-input"
          />
          <button className="search-btn">🔍</button>
        </div>

        {/* Login + Cart */}
        <div className="header-right">
          <button className="login-btn" onClick={() => setShowLogin(true)}>🔑 Login</button>
          <Link to="/cart" className="cart">
            <span className="cart-icon">🛒</span>
            <div className="cart-info">
              <span className="cart-items">{itemCount} items</span>
              <span className="cart-price">₹{totalPrice.toFixed(2)}</span>
            </div>
          </Link>
        </div>
      </header>

      {/* Modal */}
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
    </>
  );
};

export default Header;


