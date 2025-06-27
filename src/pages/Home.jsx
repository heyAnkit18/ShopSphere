import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard/ProductCard';
import { CartContext } from '../context/CartContext';
import bannerVideo from '../assets/banner.mp4';
import './Home.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=400')
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        localStorage.setItem('allProducts', JSON.stringify(data.products));
      });
  }, []);

  const categoryMap = {
    'Electronics': 'smartphones',
    'Laptops': 'laptops',
    'Furniture': 'furniture',
    'Skincare': 'skincare',
    'Groceries': 'groceries',
    'Home Decor': 'home-decoration',
    'Tops': 'tops',
    'Mens Accessories': 'mens-watches',
    'Clothes': 'womens-dresses'
  };

  const handlePromoClick = (category) => {
    navigate(`/category/${encodeURIComponent(category)}`);
  };

  const usedIds = new Set();
  const getUniqueCategoryProducts = (category) => {
    const filtered = products.filter(p => p.category === category && !usedIds.has(p.id));
    const selected = filtered.slice(0, 10);
    selected.forEach(p => usedIds.add(p.id));
    return selected;
  };

  return (
    <div className="main">
      <div className="banner">
        <video src={bannerVideo} className="banner-video" autoPlay muted loop playsInline />
        <div className="banner-overlay">
          <div className="banner-content">
            <div className="banner-text">
              <h1>ShopSphere</h1>
              <p>Your One-Stop Destination for Everyday Needs</p>
              <p className="sub-heading">Trusted by Millions. Delivered to Your Doorstep.</p>
            </div>
            <div className="banner-cards">
              {[
                { label: 'Clothes 👗', category: 'womens-dresses' },
                { label: 'Mens Accessories ⌚', category: 'mens-watches' },
                { label: 'Smartphones 📱', category: 'smartphones' },
                { label: 'Home Decor 🛋️', category: 'home-decoration' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="banner-card"
                  onClick={() => handlePromoClick(item.category)}
                >
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {Object.entries(categoryMap).map(([heading, apiCategory], index) => {
        const categoryProducts = getUniqueCategoryProducts(apiCategory);
        if (categoryProducts.length === 0) return null;

        return (
          <section key={index} className="product-section">
            <h2 className="section-heading">{heading}</h2>
            <div className="product-grid">
              {categoryProducts.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={addToCart}
                />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Home;









