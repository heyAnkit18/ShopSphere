import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="location-bar">
        <div className="logo">ShopSphere</div>

        <div className="location-input">
          <span className="location-icon">📍</span>
          <input type="text" placeholder="Deliver to..." />
        </div>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/login" className="login-link">Login</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
