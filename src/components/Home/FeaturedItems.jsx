import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Heart, Zap, Coffee, Users, Award } from 'lucide-react';


const featuredItems = [
  {
    id: 1,
    name: 'Signature Espresso',
    description: 'Our house blend with notes of chocolate, caramel, and a hint of citrus.',
    price: '$4.50',
    image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    category: 'coffee',
    moods: ['energetic', 'focused']
  },
  {
    id: 2,
    name: 'Caramel Macchiato',
    description: 'Espresso with steamed milk and vanilla, topped with caramel drizzle.',
    price: '$5.75',
    image: 'https://images.pexels.com/photos/2396220/pexels-photo-2396220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    category: 'coffee',
    moods: ['happy', 'relaxed']
  },
  {
    id: 3,
    name: 'Avocado Toast',
    description: 'Sourdough toast topped with mashed avocado, cherry tomatoes, and microgreens.',
    price: '$9.95',
    image: 'https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    category: 'food',
    moods: ['energetic', 'healthy']
  },
  {
    id: 4,
    name: 'Blueberry Pancakes',
    description: 'Fluffy pancakes with fresh blueberries, served with maple syrup and butter.',
    price: '$12.50',
    image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    category: 'food',
    moods: ['happy', 'indulgent']
  }
];

const moodFilters = [
  { id: 'all', label: 'All Items', icon: Coffee },
  { id: 'energetic', label: 'Energetic', icon: Zap },
  { id: 'relaxed', label: 'Relaxed', icon: Moon },
  { id: 'happy', label: 'Happy', icon: Sun },
  { id: 'healthy', label: 'Healthy', icon: Heart }
];

const FeaturedItems = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeMood, setActiveMood] = useState('all');

  const filteredItems = featuredItems.filter(item => {
    const categoryMatch = activeCategory === 'all' || item.category === activeCategory;
    const moodMatch = activeMood === 'all' || item.moods.includes(activeMood);
    return categoryMatch && moodMatch;
  });

  return (
    <section className="py-20 bg-cream">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Featured Items</h2>
          <p className="section-subtitle">
            Discover items that match your mood and cravings
          </p>
          
          {/* Mood Filter */}
          <div className="flex justify-center space-x-4 mb-8">
            {moodFilters.map(filter => {
              const Icon = filter.icon;
              return (
                <button 
                  key={filter.id}
                  className={`flex items-center px-6 py-3 rounded-full transition-all ${
                    activeMood === filter.id 
                      ? 'bg-primary-800 text-white' 
                      : 'bg-white text-primary-800 hover:bg-primary-100'
                  }`}
                  onClick={() => setActiveMood(filter.id)}
                >
                  <Icon className="h-5 w-5 mr-2" />
                  {filter.label}
                </button>
              );
            })}
          </div>

          {/* Category Filter */}
          <div className="flex justify-center space-x-4">
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
                <div className="absolute top-2 right-2 flex gap-1">
                  {item.moods.map(mood => (
                    <span key={mood} className="px-2 py-1 bg-white/90 rounded-full text-xs font-medium text-primary-800">
                      {mood}
                    </span>
                  ))}
                </div>
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