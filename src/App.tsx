import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Variant3Page';
import CartPage from './pages/CartPage';
import ProductPage from './pages/ProductPage';
import AboutPage from './pages/AboutPage';
import WaitlistPage from './pages/WaitlistPage';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/waitlist" element={<WaitlistPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;