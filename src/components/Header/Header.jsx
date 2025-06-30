// src/components/Header/Header.js
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './Header.css';
import logo from '../../assets/logo.png';

const Header = () => {
  const [searchInput, setSearchInput] = useState('');
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);

  const handleSearch = () => {
    if (searchInput.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchInput.trim())}`);
    }
  };

  return (
    <>
      <header className="header">
        <div className="header-left">
          <Link to="/" className="logo-container">
            <img src={logo} alt="ShopSphere" className="logo" />
            <div className="brand-info">
              <h1>ShopSphere</h1>
              <span>📍 Garh Rd, New Delhi</span>
            </div>
          </Link>
        </div>

        <div className="header-center">
          <input
            type="text"
            placeholder='Search for - iphone, dress, laptop...etc.'
            className="search-input"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          />
          <button className="search-btn" onClick={handleSearch}>🔍</button>
        </div>

        <div className="header-right">
          <Link to="/cart" className="cart">
            <span className="cart-icon">🛒</span>
            <div className="cart-info">
              <span className="cart-items">{itemCount} items</span>
              <span className="cart-price">₹{totalPrice.toFixed(2)}</span>
            </div>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;


