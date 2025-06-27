// ProductCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product, onAddToCart }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="product-card" onClick={handleClick}>
      {product.discountPercentage && (
        <div className="offer-badge">{Math.round(product.discountPercentage)}% OFF</div>
      )}
      <img
        src={product.images?.[0]}
        alt={product.title}
        className="product-image"
      />
      <div className="delivery-time">🕒 12 MINS</div>
      <h3 className="product-title">{product.title}</h3>
      <p className="product-weight">{product.weight || '100 g'}</p>
      <div className="product-price">
        ₹{product.price}
        {product.oldPrice && <span className="old-price">₹{product.oldPrice}</span>}
      </div>
      <button
        className="add-btn"
        onClick={e => {
          e.stopPropagation();
          onAddToCart(product);
        }}
      >
        ADD
      </button>
    </div>
  );
};

export default ProductCard;


