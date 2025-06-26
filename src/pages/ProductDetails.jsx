import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem('allProducts')) || [];
    const foundProduct = products.find(p => p.id === parseInt(id));
    setProduct(foundProduct || null);
  }, [id]);

  if (!product) return <div>Product not found or still loading...</div>;

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
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;


