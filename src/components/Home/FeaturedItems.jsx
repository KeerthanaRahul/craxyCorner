import React, { useState } from 'react';
import { motion } from 'framer-motion';

const featuredItems = [
  {
    id: 1,
    name: 'Signature Espresso',
    description: 'Our house blend with notes of chocolate, caramel, and a hint of citrus.',
    price: '$4.50',
    image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    category: 'coffee'
  },
  {
    id: 2,
    name: 'Caramel Macchiato',
    description: 'Espresso with steamed milk and vanilla, topped with caramel drizzle.',
    price: '$5.75',
    image: 'https://images.pexels.com/photos/2396220/pexels-photo-2396220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    category: 'coffee'
  },
  {
    id: 3,
    name: 'Avocado Toast',
    description: 'Sourdough toast topped with mashed avocado, cherry tomatoes, and microgreens.',
    price: '$9.95',
    image: 'https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    category: 'food'
  },
  {
    id: 4,
    name: 'Blueberry Pancakes',
    description: 'Fluffy pancakes with fresh blueberries, served with maple syrup and butter.',
    price: '$12.50',
    image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    category: 'food'
  }
];

const FeaturedItems = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all' 
    ? featuredItems 
    : featuredItems.filter(item => item.category === activeCategory);

  return (
    <section className="py-20 bg-cream">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Featured Items</h2>
          <p className="section-subtitle">
            Handcrafted with love and the finest ingredients, these customer favorites are not to be missed.
          </p>
          
          {/* Category Filter */}
          <div className="flex justify-center space-x-4 mt-8">
            <button 
              className={`px-6 py-2 rounded-full transition-all ${
                activeCategory === 'all' 
                  ? 'bg-primary-800 text-white' 
                  : 'bg-white text-primary-800 hover:bg-primary-100'
              }`}
              onClick={() => setActiveCategory('all')}
            >
              All
            </button>
            <button 
              className={`px-6 py-2 rounded-full transition-all ${
                activeCategory === 'coffee' 
                  ? 'bg-primary-800 text-white' 
                  : 'bg-white text-primary-800 hover:bg-primary-100'
              }`}
              onClick={() => setActiveCategory('coffee')}
            >
              Coffee
            </button>
            <button 
              className={`px-6 py-2 rounded-full transition-all ${
                activeCategory === 'food' 
                  ? 'bg-primary-800 text-white' 
                  : 'bg-white text-primary-800 hover:bg-primary-100'
              }`}
              onClick={() => setActiveCategory('food')}
            >
              Food
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="card group hover:translate-y-[-5px]"
            >
              <div className="relative overflow-hidden rounded-t-lg h-48 mb-4">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-xl font-bold text-primary-800">
                    {item.name}
                  </h3>
                  <span className="text-secondary-500 font-medium">
                    {item.price}
                  </span>
                </div>
                <p className="text-accent-600 text-sm">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedItems;