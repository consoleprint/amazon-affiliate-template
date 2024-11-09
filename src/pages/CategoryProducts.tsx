import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { Laptop, ShoppingBag } from 'lucide-react';

export default function CategoryProducts() {
  const { category } = useParams();

  // Sample category-specific products
  const products = [
    {
      id: 1,
      title: "MacBook Pro 14\"",
      description: "M2 Pro chip, 16GB RAM, 512GB SSD",
      price: 1999,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
      icon: Laptop
    },
    {
      id: 2,
      title: "Dell XPS 13",
      description: "Intel Core i7, 16GB RAM, 1TB SSD",
      price: 1499,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80",
      icon: Laptop
    },
    // Add more products...
  ];

  const getCategoryName = (slug: string) => {
    return slug.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {getCategoryName(category || '')}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our selection of {getCategoryName(category || '').toLowerCase()} products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}