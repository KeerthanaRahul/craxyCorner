import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, Utensils, Wine, Cookie, ShoppingBag, Plus, Minus, Sun, Moon, Heart, Zap } from 'lucide-react';
import useCartStore from '../components/Store/cartStore';

const moodFilters = [
  { id: 'all', label: 'All Moods', icon: Coffee },
  { id: 'energetic', label: 'Energetic', icon: Zap },
  { id: 'relaxed', label: 'Relaxed', icon: Moon },
  { id: 'happy', label: 'Happy', icon: Sun },
  { id: 'healthy', label: 'Healthy', icon: Heart }
];

const menuData = [
  {
    id: 'coffee',
    name: 'Coffee & Drinks',
    icon: <Coffee className="h-6 w-6" />,
    items: [
      {
        id: 1,
        name: 'Espresso',
        description: 'Strong, pure coffee in a small serving.',
        price: '$3.50',
        featured: true,
        tags: ['hot'],
        moods: ['energetic', 'focused']
      },
      {
        id: 2,
        name: 'Cappuccino',
        description: 'Equal parts espresso, steamed milk, and milk foam.',
        price: '$4.75',
        image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
        featured: true,
        tags: ['hot'],
        moods: ['relaxed', 'happy']
      },
      {
        id: 3,
        name: 'Latte',
        description: 'Espresso with steamed milk and a light layer of foam.',
        price: '$4.50',
        tags: ['hot'],
        moods: ['relaxed', 'happy']
      },
      {
        id: 4,
        name: 'Americano',
        description: 'Espresso diluted with hot water.',
        price: '$3.75',
        tags: ['hot'],
        moods: ['energetic', 'focused']
      },
      {
        id: 5,
        name: 'Cold Brew',
        description: 'Coffee brewed with cold water over 12-24 hours.',
        price: '$5.00',
        image: 'https://images.pexels.com/photos/2615323/pexels-photo-2615323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
        tags: ['cold'],
        moods: ['energetic', 'focused']
      },
      {
        id: 6,
        name: 'Iced Latte',
        description: 'Espresso with cold milk and ice.',
        price: '$5.25',
        tags: ['cold'],
        moods: ['happy', 'relaxed']
      },
      {
        id: 7,
        name: 'Chai Latte',
        description: 'Black tea infused with spices, steamed milk, and a touch of honey.',
        price: '$4.95',
        tags: ['hot', 'tea'],
        moods: ['relaxed', 'healthy']
      },
      {
        id: 8,
        name: 'Hot Chocolate',
        description: 'Rich Belgian chocolate melted into steamed milk.',
        price: '$4.50',
        tags: ['hot'],
        moods: ['happy', 'indulgent']
      }
    ]
  },
  {
    id: 'breakfast',
    name: 'Breakfast',
    icon: <Utensils className="h-6 w-6" />,
    items: [
      {
        id: 9,
        name: 'Avocado Toast',
        description: 'Sourdough toast topped with mashed avocado, cherry tomatoes, and microgreens.',
        price: '$9.95',
        image: 'https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
        featured: true,
        tags: ['vegetarian'],
        moods: ['healthy', 'energetic']
      },
      {
        id: 10,
        name: 'Eggs Benedict',
        description: 'English muffin topped with poached eggs, Canadian bacon, and hollandaise sauce.',
        price: '$13.50',
        tags: ['classic'],
        moods: ['indulgent', 'happy']
      },
      {
        id: 11,
        name: 'Breakfast Burrito',
        description: 'Scrambled eggs, black beans, avocado, cheese, and salsa wrapped in a flour tortilla.',
        price: '$11.25',
        tags: ['savory'],
        moods: ['energetic', 'healthy']
      },
      {
        id: 12,
        name: 'Blueberry Pancakes',
        description: 'Fluffy pancakes with fresh blueberries, served with maple syrup and butter.',
        price: '$12.50',
        image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
        featured: true,
        tags: ['sweet'],
        moods: ['happy', 'indulgent']
      }
    ]
  },
  {
    id: 'lunch',
    name: 'Lunch & Dinner',
    icon: <Wine className="h-6 w-6" />,
    items: [
      {
        id: 13,
        name: 'Chicken Caesar Salad',
        description: 'Romaine lettuce, grilled chicken, parmesan, croutons, and house-made Caesar dressing.',
        price: '$14.50',
        tags: ['salad'],
        moods: ['healthy', 'energetic']
      },
      {
        id: 14,
        name: 'Turkey Club Sandwich',
        description: 'Roasted turkey, bacon, lettuce, tomato, and mayo on toasted sourdough.',
        price: '$13.95',
        image: 'https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
        featured: true,
        tags: ['sandwich'],
        moods: ['happy', 'energetic']
      }
    ]
  },
  {
    id: 'desserts',
    name: 'Desserts & Pastries',
    icon: <Cookie className="h-6 w-6" />,
    items: [
      {
        id: 15,
        name: 'Chocolate Croissant',
        description: 'Buttery croissant filled with rich chocolate.',
        price: '$4.25',
        tags: ['pastry'],
        moods: ['happy', 'indulgent']
      },
      {
        id: 16,
        name: 'Carrot Cake',
        description: 'Moist carrot cake with cream cheese frosting and candied walnuts.',
        price: '$6.50',
        image: 'https://images.pexels.com/photos/4110541/pexels-photo-4110541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
        featured: true,
        tags: ['cake'],
        moods: ['happy', 'indulgent']
      }
    ]
  }
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(menuData[0].id);
  const [activeMood, setActiveMood] = useState('all');
  const { items, addItem, updateQuantity, removeItem } = useCartStore();

  const getItemQuantity = (itemId) => {
    const cartItem = items.find(item => item.id === itemId);
    return cartItem ? cartItem.quantity : 0;
  };

  const handleQuantityChange = (item, change) => {
    const currentQuantity = getItemQuantity(item.id);
    const newQuantity = currentQuantity + change;

    if (newQuantity === 0) {
      removeItem(item.id);
    } else if (newQuantity > 0) {
      if (currentQuantity === 0) {
        addItem(item);
      } else {
        updateQuantity(item.id, newQuantity);
      }
    }
  };

  const filterItemsByMood = (items) => {
    return activeMood === 'all' ? items : items.filter(item => item.moods?.includes(activeMood));
  };

  return (
    <div className="pt-16">
      {/* Hero Banner */}
      <div className="relative h-80 bg-cover bg-center flex items-center justify-center" 
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/7438530/pexels-photo-7438530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')"
        }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Menu</h1>
          <p className="text-xl max-w-xl mx-auto">
            Discover dishes that match your mood and cravings
          </p>
        </div>
      </div>

      <div className="container-custom py-16">
        {/* Mood Filters */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex space-x-4 justify-center pb-2">
            {moodFilters.map(filter => {
              const Icon = filter.icon;
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveMood(filter.id)}
                  className={`flex items-center px-6 py-3 rounded-full transition-all ${
                    activeMood === filter.id
                      ? 'bg-primary-800 text-white'
                      : 'bg-white text-primary-800 hover:bg-primary-100'
                  }`}
                >
                  <Icon className="h-5 w-5 mr-2" />
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Category Navigation */}
        <div className="mb-12 overflow-x-auto">
          <div className="flex space-x-2 md:space-x-4 min-w-max md:justify-center pb-2">
            {menuData.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-4 py-3 rounded-lg transition-all ${
                  activeCategory === category.id
                    ? 'bg-primary-800 text-white'
                    : 'bg-white text-primary-800 hover:bg-primary-50'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items */}
        <AnimatePresence mode="wait">
          {menuData.map((category) => (
            category.id === activeCategory && (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filterItemsByMood(category.items).map((item) => (
                    <div 
                      key={item.id} 
                      className={`card flex ${item.image ? 'flex-col' : 'flex-row'}`}
                    >
                      {item.image && (
                        <div className="w-full h-48 mb-4 overflow-hidden rounded-t-lg">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                          />
                        </div>
                      )}
                      <div className={`${item.image ? '' : 'flex-1'}`}>
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-serif text-xl font-bold text-primary-800">
                            {item.name}
                            {item.featured && (
                              <span className="ml-2 px-2 py-1 bg-secondary-100 text-secondary-800 text-xs rounded-full">
                                Popular
                              </span>
                            )}
                          </h3>
                          <span className="text-secondary-500 font-medium">
                            {item.price}
                          </span>
                        </div>
                        <p className="text-accent-600 mb-2">
                          {item.description}
                        </p>
                        <div className="flex justify-between items-center">
                          <div className="flex flex-wrap gap-2">
                            {item.tags?.map((tag) => (
                              <span 
                                key={tag} 
                                className="px-2 py-1 bg-primary-50 text-primary-600 text-xs rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                            {item.moods?.map((mood) => (
                              <span 
                                key={mood} 
                                className="px-2 py-1 bg-secondary-50 text-secondary-600 text-xs rounded-full"
                              >
                                {mood}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center gap-2">
                            {getItemQuantity(item.id) > 0 ? (
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => handleQuantityChange(item, -1)}
                                  className="p-1 rounded-full hover:bg-primary-50"
                                >
                                  <Minus className="h-4 w-4" />
                                </button>
                                <span className="w-8 text-center">{getItemQuantity(item.id)}</span>
                                <button
                                  onClick={() => handleQuantityChange(item, 1)}
                                  className="p-1 rounded-full hover:bg-primary-50"
                                >
                                  <Plus className="h-4 w-4" />
                                </button>
                              </div>
                            ) : (
                              <button
                                onClick={() => handleQuantityChange(item, 1)}
                                className="btn btn-primary flex items-center"
                              >
                                <ShoppingBag className="h-5 w-5 mr-2" />
                                Add to Cart
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>

      {/* Special Dietary Requirements */}
      <section className="bg-primary-50 py-16">
        <div className="container-custom">
          <h2 className="section-title text-center">Special Dietary Requirements</h2>
          <p className="text-center mb-10 text-accent-600 max-w-2xl mx-auto">
            We understand that many of our guests have specific dietary needs or preferences. 
            Please inform our staff about any allergies or restrictions, and we'll do our best to accommodate you.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Vegetarian', description: 'Plant-based items without meat' },
              { label: 'Vegan', description: 'No animal products including dairy and eggs' },
              { label: 'Gluten-Free', description: 'Items without wheat, barley, or rye' },
              { label: 'Dairy-Free', description: 'No milk, cheese, or other dairy products' }
            ].map((item, index) => (
              <div key={index} className="card text-center hover:shadow-medium">
                <div className="inline-block p-3 rounded-full bg-primary-100 mb-4">
                  <div className="h-10 w-10 rounded-full bg-primary-800 flex items-center justify-center text-white font-bold">
                    {item.label.charAt(0)}
                  </div>
                </div>
                <h3 className="font-serif text-xl font-bold text-primary-800 mb-2">
                  {item.label}
                </h3>
                <p className="text-accent-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;