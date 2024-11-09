import React from 'react';
import { ShoppingBag, Star, TrendingUp, Heart, Gift, Coffee, Headphones, Watch, Laptop, Camera } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import {products} from '../components/products'
export default function Home() {

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-8 tracking-tight">
              Discover Amazing Products
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Curated selection of the best products on Amazon, handpicked just for you.
              Get exclusive deals and recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Start Shopping Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers and discover amazing products at great prices.
          </p><Link to="/browse">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2">
              <Coffee className="w-5 h-5" />
              Browse All Products
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}