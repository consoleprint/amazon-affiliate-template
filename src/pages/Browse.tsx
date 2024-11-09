import React, { useState } from 'react';
import { Filter, SlidersHorizontal, ChevronDown } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import {products} from '../components/products'

export default function Browse() {
  const [sortBy, setSortBy] = useState('popular');
  const [priceRange, setPriceRange] = useState('all');
  const [rating, setRating] = useState('all');
  console.log(rating)
  const filterProducts = () => {
    let filtered = [...products];

    // Filter by price range
    if (priceRange !== 'all') {
      filtered = filtered.filter(product => {
        switch(priceRange) {
          case 'under-50':
            return product.price < 50;
          case '50-100':
            return product.price >= 50 && product.price <= 100;
          case '100-200':
            return product.price > 100 && product.price <= 200;
          case 'over-200':
            return product.price > 200;
          default:
            return true;
        }
      });
    }

    // Filter by rating
    if (rating !== 'all') {
      const ratingValue = parseFloat(rating);
      filtered = filtered.filter(product =>product.rating >= ratingValue);
    }

    // Sort products
    switch(sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered.sort((a, b) => b.id - a.id);
        break;
      default: // 'popular'
        filtered.sort((a, b) => b.rating - a.rating);
    }

    return filtered;
  };

  const filteredProducts = filterProducts();

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">All Products</h1>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg py-2 px-4 pr-8 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="popular">Most Popular</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <ChevronDown className="absolute right-2 top-3 w-4 h-4 text-gray-400" />
            </div>
            
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* Filters Sidebar */}
          <div className="col-span-3 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4">Price Range</h3>
              <div className="space-y-2">
                {[
                  { value: 'all', display: 'All' },
                  { value: 'under-50', display: 'Under $50' },
                  { value: '50-100', display: '$50 - $100' },
                  { value: '100-200', display: '$100 - $200' },
                  { value: 'over-200', display: 'Over $200' }
                ].map((range) => (
                  <label key={range.value} className="flex items-center">
                    <input
                      type="radio"
                      name="price"
                      value={range.value}
                      checked={priceRange === range.value}
                      onChange={(e) => setPriceRange(e.target.value)}
                      className="text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-gray-600">{range.display}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4">Rating</h3>
              <div className="space-y-2">
                {[
                  { value: 'all', display: 'All' },
                  { value: '4', display: '4★ & up' },
                  { value: '3', display: '3★ & up' }, 
                  { value: '2', display: '2★ & up' }
                ].map((ratingOption) => (
                  <label key={ratingOption.value} className="flex items-center">
                    <input
                      type="radio"
                      name="rating"
                      value={ratingOption.value}
                      checked={rating === ratingOption.value}
                      onChange={(e) => setRating(e.target.value)}
                      className="text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-gray-600">{ratingOption.display}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}