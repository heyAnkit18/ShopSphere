import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import LoginModal from '../LoginModal/LoginModal';
import { CartContext } from '../../context/CartContext';
import './Header.css';
import logo from '../../assets/logo.png'; // Use your logo here

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const { cartItems } = useContext(CartContext);

  const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <>
      <header className="custom-header">
        {/* Left - Logo and Location */}
        <div className="left-section">
          <Link to="/">
            <img src={logo} alt="ShopSphere" className="logo" />
          </Link>
          <div className="delivery-info">
            <strong>Delivery in 10 minutes</strong>
            <span>XQ67+2JW, Garh Rd, Delhi</span>
          </div>
        </div>

        {/* Center - Search */}
        <div className="search-section">
          <input type="text" placeholder='Search "clothes", "rings", etc.' />
          <span className="search-icon">🔍</span>
        </div>

        {/* Right - Nav and Cart */}
        <div className="right-section">
          <button className="login-link" onClick={() => setShowLogin(true)}>Login</button>
          <Link to="/cart" className="cart-btn">
            🛒 <span>{itemCount} items</span> ₹{totalPrice}
          </Link>
        </div>
      </header>

      {/* Login modal */}
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
    </>
  );
};

export default Header;

