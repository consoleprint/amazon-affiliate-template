import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Laptop, 
  Home, 
  ShoppingBag, 
  Book, 
  Gamepad, 
  Camera, 
  Watch, 
  Headphones 
} from 'lucide-react';

const categories = [
  {
    id: 'electronics',
    name: 'Electronics',
    icon: Laptop,
    description: 'Latest gadgets and tech accessories',
    color: 'blue'
  },
  {
    id: 'home-kitchen',
    name: 'Home & Kitchen',
    icon: Home,
    description: 'Everything for your home',
    color: 'green'
  },
  {
    id: 'fashion',
    name: 'Fashion',
    icon: ShoppingBag,
    description: 'Trending clothing and accessories',
    color: 'purple'
  },
  {
    id: 'books',
    name: 'Books',
    icon: Book,
    description: 'Best-selling books and e-readers',
    color: 'yellow'
  },
  {
    id: 'gaming',
    name: 'Gaming',
    icon: Gamepad,
    description: 'Gaming consoles and accessories',
    color: 'red'
  },
  {
    id: 'cameras',
    name: 'Cameras',
    icon: Camera,
    description: 'Photography and video equipment',
    color: 'indigo'
  },
  {
    id: 'watches',
    name: 'Watches',
    icon: Watch,
    description: 'Smart watches and accessories',
    color: 'pink'
  },
  {
    id: 'audio',
    name: 'Audio',
    icon: Headphones,
    description: 'Headphones and speakers',
    color: 'orange'
  }
];

export default function Categories() {
  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: 'bg-blue-50 text-blue-600 hover:bg-blue-100',
      green: 'bg-green-50 text-green-600 hover:bg-green-100',
      purple: 'bg-purple-50 text-purple-600 hover:bg-purple-100',
      yellow: 'bg-yellow-50 text-yellow-600 hover:bg-yellow-100',
      red: 'bg-red-50 text-red-600 hover:bg-red-100',
      indigo: 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100',
      pink: 'bg-pink-50 text-pink-600 hover:bg-pink-100',
      orange: 'bg-orange-50 text-orange-600 hover:bg-orange-100'
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Shop by Category</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our curated selection of products across various categories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/categories/${category.id}`}
              className={`block p-6 rounded-xl transition-all transform hover:scale-105 ${getColorClasses(category.color)}`}
            >
              <category.icon className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
              <p className="text-sm opacity-75">{category.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}