import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Categories from './pages/Categories';
import Deals from './pages/Deals';
import Browse from './pages/Browse';
import CategoryProducts from './pages/CategoryProducts';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:category" element={<CategoryProducts />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/browse" element={<Browse />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;