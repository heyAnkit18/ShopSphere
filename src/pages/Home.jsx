import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard/ProductCard';
import { CartContext } from '../context/CartContext';
import bannerImage from '../assets/banner.jpg';
import promo1 from '../assets/promo1.jpg';
import promo2 from '../assets/promo2.jpg';
import promo3 from '../assets/promo3.jpg';
import './Home.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate(); 

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const getMappedCategory = (label) => {
    switch (label) {
      case 'Groceries':
        return 'jewelery';
      case 'Electronics':
        return 'electronics';
      case 'Fashion':
        return "men's clothing";
      default:
        return '';
    }
  };

  const handlePromoClick = (category) => {
    navigate(`/category/${encodeURIComponent(category)}`);
  };

  return (
    <div className="main">
      <div className="banner">
        <img src={bannerImage} alt="Banner" className="banner-image" />
      </div>

      <div className="promo-section">
        {[{ img: promo1, label: 'Groceries' }, { img: promo2, label: 'Electronics' }, { img: promo3, label: 'Fashion' }].map((promo, i) => (
          <div
            key={i}
            className="promo-card"
            onClick={() => handlePromoClick(getMappedCategory(promo.label))}
          >
            <img src={promo.img} alt={promo.label} className="promo-image" />
            <h4>{promo.label}</h4>
          </div>
        ))}
      </div>

      <h2>Best Deals for You</h2>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Home;
