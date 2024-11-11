import { ShoppingBag, Star, TrendingUp, Heart, Gift, Coffee, Headphones, Watch, Laptop, Camera } from 'lucide-react';

export const products = [
    {
      id: 1,
      title: "Sony WH-1000XM4 Wireless Headphones",
      description: "Industry-leading noise canceling with Dual Noise Sensor technology",
      price: 348,
      rating: 3.8,
      image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=800&q=80", // Headphones image
      icon: Headphones,
      category: "audio"
    },
    {
      id: 2,
      title: "Apple Watch Series 8",
      description: "Advanced health features and an Always-On Retina display",
      price: 399,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80", // Apple Watch image
      icon: Watch,
      category: "fashion"
    },
    {
      id: 3,
      title: "MacBook Air M2",
      description: "Supercharged by M2 chip for incredible performance",
      price: 1199,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80", // MacBook image
      icon: Laptop,
      category: "electronics"
    },
    {
      id: 4,
      title: "Sony Alpha A7 IV",
      description: "Full-frame mirrorless interchangeable lens camera",
      price: 2498,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80", // Camera image
      icon: Camera,
      category: "cameras"
    },
    {
      id: 5,
      title: "Ninja Foodi 9-in-1 Deluxe XL",
      description: "Pressure Cooker and Air Fryer Combo",
      price: 299,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80", // Pressure cooker image
      icon: Headphones,
      category: "home-kitchen"
    },
    {
      id: 6,
      title: "Designer Leather Handbag",
      description: "Premium Italian leather with gold hardware",
      price: 279,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80", // Handbag image
      icon: Watch,
      category: "fashion"
    },
    {
      id: 7,
      title: "PlayStation 5",
      description: "Next-gen gaming console with DualSense controller",
      price: 499,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80", // PS5 image
      icon: Laptop,
      category: "gaming"
    },
    {
      id: 8,
      title: "KitchenAid Stand Mixer",
      description: "Professional 5-quart stand mixer",
      price: 399,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1594385208974-2e75f8d7bb48?auto=format&fit=crop&w=800&q=80", // Stand mixer image
      icon: Camera,
      category: "home-kitchen"
    },
    {
      id: 9,
      title: "Designer Sunglasses",
      description: "UV protection with premium frame",
      price: 249,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80", // Sunglasses image
      icon: Headphones,
      category: "fashion"
    },
    {
      id: 10,
      title: "Xbox Series X",
      description: "4K gaming with ray tracing",
      price: 499,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?auto=format&fit=crop&w=800&q=80", // Xbox image
      icon: Watch,
      category: "gaming"
    },
    {
      id: 11,
      title: "Instant Pot Pro",
      description: "10-in-1 pressure cooker",
      price: 199,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80", // Instant pot image
      icon: Laptop,
      category: "home-kitchen"
    },
    {
      id: 12,
      title: "Designer Watch Collection",
      description: "Limited edition timepiece",
      price: 1999,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=800&q=80", // Watch collection image
      icon: Camera,
      category: "fashion"
    },
    {
      id: 13,
      title: "Nintendo Switch OLED",
      description: "Enhanced portable gaming console",
      price: 349,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?auto=format&fit=crop&w=800&q=80", // Nintendo Switch image
      icon: Headphones,
      category: "gaming"
    },
    {
      id: 14,
      title: "Coffee Machine Deluxe",
      description: "Professional grade espresso maker",
      price: 799,
      rating: 4.4,
      image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&w=800&q=80", // Coffee machine image
      icon: Watch,
      category: "home-kitchen"
    },
    {
      id: 15,
      title: "Designer Shoes",
      description: "Italian leather formal shoes",
      price: 399,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1544731612-de7f96afe55f?auto=format&fit=crop&w=800&q=80", // Designer shoes image
      icon: Laptop,
      category: "fashion"
    },
    {
      id: 16,
      title: "Gaming PC RTX 4090",
      description: "High-end gaming desktop",
      price: 2999,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=800&q=80", // Gaming PC image
      icon: Camera,
      category: "gaming"
    },
    {
      id: 17,
      title: "Air Fryer Pro Max",
      description: "Digital air fryer with 8 presets",
      price: 199,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80", // Air fryer image
      icon: Headphones,
      category: "home-kitchen"
    },
    {
      id: 18,
      title: "Designer Belt",
      description: "Premium leather belt with signature buckle",
      price: 299,
      rating: 4.3,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80", // Belt image
      icon: Watch,
      category: "fashion"
    },
    {
      id: 19,
      title: "Gaming Laptop RTX 4080",
      description: "17-inch gaming powerhouse",
      price: 2499,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80", // Gaming laptop image
      icon: Laptop,
      category: "gaming"
    },
    {
      id: 20,
      title: "Stand Mixer Pro",
      description: "Professional grade baking mixer",
      price: 599,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1594385208974-2e75f8d7bb48?auto=format&fit=crop&w=800&q=80", // Stand mixer image
      icon: Camera,
      category: "home-kitchen"
    }
  ];
