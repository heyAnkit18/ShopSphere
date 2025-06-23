import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="location-bar">
        <div className="logo">ShopSphere</div>
        <div className="location-input">
          <input type="text" placeholder="Deliver to..." />
        </div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;