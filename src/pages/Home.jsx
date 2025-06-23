// File: src/pages/Home.jsx
import React, { useEffect, useState, useContext } from 'react';
import ProductCard from '../components/ProductCard/ProductCard';
import { CartContext } from '../context/CartContext';
import bannerImage from '../assets/banner.jpg'; // ✅ imported from assets

const Home = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="main">
      <div className="banner">
        <img
          src={bannerImage} // ✅ used here
          alt="Banner"
          style={{
            width: '100%',
            borderRadius: '10px',
            marginBottom: '20px'
          }}
        />
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
