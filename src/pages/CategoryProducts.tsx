import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { Laptop, ShoppingBag } from 'lucide-react';
import {products} from '../components/products'
export default function CategoryProducts() {
  const { category } = useParams();
  const filteredProducts = products.filter(product => product.category === category);

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
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}