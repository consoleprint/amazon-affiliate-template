import React from 'react';
import { Star, ExternalLink } from 'lucide-react';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  icon: React.ElementType;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { title, description, price, rating, image, icon: Icon } = product;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
          <Icon className="w-5 h-5 text-blue-600" />
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="ml-1 text-gray-600">{rating}</span>
          </div>
          <span className="text-2xl font-bold text-gray-900">${price}</span>
        </div>
        
        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
          View on Amazon
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}