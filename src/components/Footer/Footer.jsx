import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.css';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaTelegramPlane,
} from 'react-icons/fa';

const categories = [
  'Phones',
  'Laptops',
  'Home Decor',
  'Clothes',
  'Tops',
];

// Map categories to slugs/paths
const categorySlugMap = {
  Phones: 'phones',
  Laptops: 'laptops',
  'Home Decor': 'home-decor',
  Clothes: 'clothes',
  Tops: 'tops',
  'Men Accessories': 'men-accessories',
  Books: 'books',
  Electronics: 'electronics',
};

const Footer = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleCategoryClick = (category) => {
    const slug = categorySlugMap[category];
    if (slug) {
      navigate(`/category/${slug}`);
    } else {
      console.warn('No slug found for category:', category);
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      alert('Please enter a valid email address.');
      return;
    }
    alert('Thank you! We will notify you about the latest offers and deals.');
    setEmail('');
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

        <div className="footer-center">
          <h3>Subscribe to Our Newsletter</h3>
          <form className="subscribe-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        <div className="footer-right">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
            <a
              href="https://telegram.me/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
            >
              <FaTelegramPlane />
            </a>
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


