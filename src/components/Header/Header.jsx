import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginModal from '../LoginModal/LoginModal'; // adjust path
import './Header.css';

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <header className="header">
        <div className="location-bar">
          <div className="logo">
            <Link to="/">ShopSphere</Link>
          </div>
          <div className="location-input">
            <span className="location-icon">📍</span>
            <input type="text" placeholder="Deliver to..." />
          </div>
          <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/cart">Cart</Link>
            <button className="login-link" onClick={() => setShowLogin(true)}>Login</button>
          </nav>
        </div>
      </header>

      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
    </>
  );
};

export default Header;
