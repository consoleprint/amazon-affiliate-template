import React from 'react';
import { ShoppingBag, Star, TrendingUp, Heart, Gift, Coffee, Headphones, Watch, Laptop, Camera } from 'lucide-react';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const products = [
    {
      id: 1,
      title: "Sony WH-1000XM4 Wireless Headphones",
      description: "Industry-leading noise canceling with Dual Noise Sensor technology",
      price: 348,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=800&q=80",
      icon: Headphones
    },
    {
      id: 2,
      title: "Apple Watch Series 8",
      description: "Advanced health features and an Always-On Retina display",
      price: 399,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80",
      icon: Watch
    },
    {
      id: 3,
      title: "MacBook Air M2",
      description: "Supercharged by M2 chip for incredible performance",
      price: 1199,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
      icon: Laptop
    },
    {
      id: 4,
      title: "Sony Alpha A7 IV",
      description: "Full-frame mirrorless interchangeable lens camera",
      price: 2498,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
      icon: Camera
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-8 tracking-tight">
              Discover Amazing Products
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
              Curated selection of the best products on Amazon, handpicked just for you.
              Get exclusive deals and recommendations.
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2">
                <ShoppingBag className="w-5 h-5" />
                Start Shopping
              </button>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                View Trending
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Best Sellers</h3>
              <p className="text-gray-600">Discover top-rated products loved by thousands</p>
            </div>
            <div className="text-center p-6">
              <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Curated Selection</h3>
              <p className="text-gray-600">Hand-picked products just for you</p>
            </div>
            <div className="text-center p-6">
              <Gift className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Special Deals</h3>
              <p className="text-gray-600">Exclusive discounts and offers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Trending Products
          </h2>
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
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2">
            <Coffee className="w-5 h-5" />
            Browse All Products
          </button>
        </div>
      </section>
    </>
  );
}