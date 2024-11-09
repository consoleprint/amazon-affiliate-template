import React, { useState } from 'react';
import { Filter, SlidersHorizontal, ChevronDown } from 'lucide-react';
import ProductCard from '../components/ProductCard';

export default function Browse() {
  const [sortBy, setSortBy] = useState('popular');
  const [priceRange, setPriceRange] = useState('all');
  const [rating, setRating] = useState('all');

  // Sample products data
  const products = [
    {
      id: 1,
      title: "Sony WH-1000XM4",
      description: "Wireless noise-canceling headphones",
      price: 348,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=800&q=80",
      icon: Filter
    },
    // Add more products here...
  ];

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
                {['All', 'Under $50', '$50 - $100', '$100 - $200', 'Over $200'].map((range) => (
                  <label key={range} className="flex items-center">
                    <input
                      type="radio"
                      name="price"
                      value={range.toLowerCase().replace(/\s+/g, '-')}
                      checked={priceRange === range.toLowerCase().replace(/\s+/g, '-')}
                      onChange={(e) => setPriceRange(e.target.value)}
                      className="text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-gray-600">{range}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4">Rating</h3>
              <div className="space-y-2">
                {['All', '4★ & up', '3★ & up', '2★ & up'].map((ratingOption) => (
                  <label key={ratingOption} className="flex items-center">
                    <input
                      type="radio"
                      name="rating"
                      value={ratingOption.toLowerCase().replace(/\s+/g, '-')}
                      checked={rating === ratingOption.toLowerCase().replace(/\s+/g, '-')}
                      onChange={(e) => setRating(e.target.value)}
                      className="text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-gray-600">{ratingOption}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}