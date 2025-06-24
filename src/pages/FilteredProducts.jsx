import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard/ProductCard';
import { CartContext } from '../context/CartContext';

const FilteredProducts = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        const filtered = data.filter(product => product.category === category);
        setProducts(filtered);
      });
  }, [category]);

  return (
    <div className="main">
      <h2>Category: {category}</h2>
      <div className="product-grid">
        {products.length > 0 ? (
          products.map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
          ))
        ) : (
          <p>No products found for this category.</p>
        )}
      </div>
    </div>
  );
};

export default FilteredProducts;
