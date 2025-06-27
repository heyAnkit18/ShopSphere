import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext); // ✅ Use cart context

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem('allProducts')) || [];
    const foundProduct = products.find(p => p.id === parseInt(id));
    setProduct(foundProduct || null);
  }, [id]);

  if (!product) return <div>Product not found or still loading...</div>;

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: 1 }); // ✅ Add with quantity 1
  };

  return (
    <div className="product-details-container">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
      <div className="product-details">
        <img
          src={product.images?.[0]}
          alt={product.title}
          className="details-image"
        />
        <div className="details-info">
          <h1>{product.title}</h1>
          <p className="details-price">₹{product.price}</p>
          <p className="details-description">{product.description}</p>

          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            🛒 Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;



