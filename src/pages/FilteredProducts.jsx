import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard/ProductCard';
import { CartContext } from '../context/CartContext';
// import './FilteredProducts.css'; // optional for styles

const FilteredProducts = () => {
  const { category } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const allProducts = JSON.parse(localStorage.getItem('allProducts')) || [];
    const categoryDecoded = decodeURIComponent(category);

    const filtered = allProducts.filter(
      product => product.category.toLowerCase() === categoryDecoded.toLowerCase()
    );

    setFilteredProducts(filtered);
  }, [category]);

  return (
    <div className="main">
      <h2 className="category-heading">Category: {decodeURIComponent(category)}</h2>
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
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

