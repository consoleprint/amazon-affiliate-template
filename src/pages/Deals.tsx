import React from 'react';
import { Tag, Clock, Percent } from 'lucide-react';
import ProductCard from '../components/ProductCard';

export default function Deals() {
  const deals = [
    {
      id: 1,
      title: "Deal of the Day",
      products: [
        {
          id: 101,
          title: "Apple AirPods Pro",
          description: "Active noise cancellation, Transparency mode",
          price: 199,
          originalPrice: 249,
          rating: 4.8,
          image: "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?auto=format&fit=crop&w=800&q=80",
          icon: Tag,
          discount: 20
        },
        // More products...
      ]
    },
    {
      id: 2,
      title: "Lightning Deals",
      products: [
        {
          id: 201,
          title: "Samsung 4K Smart TV",
          description: "55-inch QLED Display, HDR",
          price: 699,
          originalPrice: 999,
          rating: 4.7,
          image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80",
          icon: Clock,
          discount: 30
        },
        // More products...
      ]
    },
    {
      id: 3,
      title: "Weekly Offers",
      products: [
        {
          id: 301,
          title: "Kindle Paperwhite",
          description: "Waterproof e-reader with 6.8\" display",
          price: 129,
          originalPrice: 159,
          rating: 4.9,
          image: "https://images.unsplash.com/photo-1592434134753-8e85d08e07d1?auto=format&fit=crop&w=800&q=80",
          icon: Percent,
          discount: 15
        },
        // More products...
      ]
    }
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Today's Best Deals</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't miss out on these amazing discounts and special offers
          </p>
        </div>

        {deals.map((section) => (
          <div key={section.id} className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">{section.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {section.products.map((product) => (
                <div key={product.id} className="relative">
                  <div className="absolute top-4 left-4 z-10 bg-red-600 text-white px-3 py-1 rounded-full">
                    {product.discount}% OFF
                  </div>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}