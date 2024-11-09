import { ShoppingBag, Star, TrendingUp, Heart, Gift, Coffee, Headphones, Watch, Laptop, Camera } from 'lucide-react';

export const products = [
    {
      id: 1,
      title: "Sony WH-1000XM4 Wireless Headphones",
      description: "Industry-leading noise canceling with Dual Noise Sensor technology",
      price: 348,
      rating: 3.8,
      image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=800&q=80",
      icon: Headphones,
      category: "audio"
    },
    {
      id: 2,
      title: "Apple Watch Series 8",
      description: "Advanced health features and an Always-On Retina display",
      price: 399,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80",
      icon: Watch,
      category: "watches"
    },
    {
      id: 3,
      title: "MacBook Air M2",
      description: "Supercharged by M2 chip for incredible performance",
      price: 1199,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
      icon: Laptop,
      category: "electronics"
    },
    {
      id: 4,
      title: "Sony Alpha A7 IV",
      description: "Full-frame mirrorless interchangeable lens camera",
      price: 2498,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
      icon: Camera,
      category: "cameras"
    },
    {
      id: 5,
      title: "Bose QuietComfort 35 II",
      description: "Premium wireless noise cancelling headphones",
      price: 299,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
      icon: Headphones,
      category: "audio"
    },
    {
      id: 6,
      title: "Samsung Galaxy Watch 5",
      description: "Advanced health monitoring and fitness tracking",
      price: 279,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
      icon: Watch,
      category: "watches"
    },
    {
      id: 7,
      title: "Dell XPS 13",
      description: "Ultra-thin and light premium laptop",
      price: 999,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80",
      icon: Laptop,
      category: "electronics"
    },
    {
      id: 8,
      title: "Canon EOS R6",
      description: "Professional-grade mirrorless camera",
      price: 2499,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80",
      icon: Camera,
      category: "cameras"
    },
    {
      id: 9,
      title: "Sennheiser Momentum 4",
      description: "Premium wireless headphones with superior sound",
      price: 349,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80",
      icon: Headphones,
      category: "audio"
    },
    {
      id: 10,
      title: "Garmin Fenix 7",
      description: "Advanced multisport GPS watch",
      price: 699,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80",
      icon: Watch,
      category: "watches"
    },
    {
      id: 11,
      title: "Lenovo ThinkPad X1 Carbon",
      description: "Business laptop with premium features",
      price: 1399,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80",
      icon: Laptop,
      category: "electronics"
    },
    {
      id: 12,
      title: "Nikon Z6 II",
      description: "Versatile full-frame mirrorless camera",
      price: 1999,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?auto=format&fit=crop&w=800&q=80",
      icon: Camera,
      category: "cameras"
    },
    {
      id: 13,
      title: "Jabra Elite 85h",
      description: "Smart noise-cancelling headphones",
      price: 249,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80",
      icon: Headphones,
      category: "audio"
    },
    {
      id: 14,
      title: "Fitbit Sense 2",
      description: "Advanced health and fitness smartwatch",
      price: 299,
      rating: 4.4,
      image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&w=800&q=80",
      icon: Watch,
      category: "watches"
    },
    {
      id: 15,
      title: "HP Spectre x360",
      description: "Premium convertible laptop",
      price: 1299,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1544731612-de7f96afe55f?auto=format&fit=crop&w=800&q=80",
      icon: Laptop,
      category: "electronics"
    },
    {
      id: 16,
      title: "Fujifilm X-T4",
      description: "Professional mirrorless camera with IBIS",
      price: 1699,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?auto=format&fit=crop&w=800&q=80",
      icon: Camera,
      category: "cameras"
    },
    {
      id: 17,
      title: "Bang & Olufsen Beoplay H95",
      description: "Luxury wireless headphones",
      price: 899,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?auto=format&fit=crop&w=800&q=80",
      icon: Headphones,
      category: "audio"
    },
    {
      id: 18,
      title: "Fossil Gen 6",
      description: "Stylish smartwatch with Wear OS",
      price: 299,
      rating: 4.3,
      image: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?auto=format&fit=crop&w=800&q=80",
      icon: Watch,
      category: "watches"
    },
    {
      id: 19,
      title: "ASUS ROG Zephyrus G14",
      description: "Powerful gaming laptop",
      price: 1499,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80",
      icon: Laptop,
      category: "electronics"
    },
    {
      id: 20,
      title: "Panasonic Lumix S5",
      description: "Full-frame mirrorless for photo and video",
      price: 1699,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1516724562728-afc824a36e84?auto=format&fit=crop&w=800&q=80",
      icon: Camera,
      category: "cameras"
    }
  ];
