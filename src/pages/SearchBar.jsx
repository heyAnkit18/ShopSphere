// src/pages/SearchBar.js
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard/ProductCard';
import './SearchBar.css';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchBar = () => {
  const query = useQuery().get('q') || '';
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=400')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        const filteredResults = data.products.filter((product) =>
          product.title.toLowerCase().includes(query.toLowerCase())
        );
        setFiltered(filteredResults);
      })
      .catch((err) => console.error('Error:', err));
  }, [query]);

  return (
    <div className="searchbar-page">
      <h2>Search results for: "{query}"</h2>
      <div className="search-results">
        {filtered.length > 0 ? (
          filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="no-results">No matching products found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
