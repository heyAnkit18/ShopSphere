import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="main">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} height="200" />
      <p>{product.description}</p>
      <strong>${product.price}</strong>
    </div>
  );
};

export default ProductDetails;