import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const categories = [
  'Phones', 'Laptops', 'Home Decor', 'Clothes',
  'Tops', 'Men Accessories', 'Books', 'Electronics'
];

const Footer = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    const encoded = encodeURIComponent(category.toLowerCase());
    navigate(`/category/${encoded}`);
  };

  return (
    <footer className="custom-footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3>Popular Categories</h3>
          <div className="footer-categories">
            {categories.map((cat, index) => (
              <div
                key={index}
                className="footer-category"
                onClick={() => handleCategoryClick(cat)}
              >
                {cat}
              </div>
            ))}
          </div>
        </div>

        <div className="footer-right">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 ShopSphere Pvt Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

