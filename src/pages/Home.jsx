import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard/ProductCard';
import { CartContext } from '../context/CartContext';
import bannerVideo from '../assets/banner.mp4';
import promo1 from '../assets/promo1.jpg';
import promo2 from '../assets/promo2.jpg';
import promo3 from '../assets/promo3.jpg';
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
      </div>

      <div className="promo-section">
        {[{ img: promo1, label: 'Home Decor' }, { img: promo2, label: 'Electronics' }, { img: promo3, label: 'Skincare' }].map((promo, i) => (
          <div
            key={i}
            className="promo-card"
            onClick={() => handlePromoClick(categoryMap[promo.label])}
          >
            <img src={promo.img} alt={promo.label} className="promo-image" />
            <h4>{promo.label}</h4>
          </div>
        ))}
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








