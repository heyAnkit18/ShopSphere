import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard/ProductCard';
import { CartContext } from '../context/CartContext';
import './FilteredProducts.css';

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
    <div className="filtered-products-container">
      <h2 className="category-heading">
        Showing results for <span className="category-name">"{decodeURIComponent(category)}"</span>
      </h2>

      {filteredProducts.length > 0 ? (
        <div className="product-grid">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
          ))}
        </div>
      ) : (
        <div className="no-products">
          <p>No products found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default FilteredProducts;


