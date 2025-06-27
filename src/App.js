// File: src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Context provider
import { CartProvider } from './context/CartContext';

// Components and pages
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import FilteredProducts from './pages/FilteredProducts';
import SearchBar from './pages/SearchBar'; // ✅ Add SearchBar

import './App.css';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/category/:category" element={<FilteredProducts />} />
          <Route path="/search" element={<SearchBar />} /> {/* ✅ New route for search */}
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
};

export default App;


