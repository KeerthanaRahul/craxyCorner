import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const galleryImages = [
  // Interior
  {
    id: 1,
    src: 'https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    alt: 'Cafe interior with wooden tables and chairs',
    category: 'interior'
  },
  {
    id: 2,
    src: 'https://images.pexels.com/photos/2079438/pexels-photo-2079438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    alt: 'Cozy seating area with plants',
    category: 'interior'
  },
  {
    id: 3,
    src: 'https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    alt: 'Counter area with barista equipment',
    category: 'interior'
  },
  {
    id: 4,
    src: 'https://images.pexels.com/photos/3928526/pexels-photo-3928526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    alt: 'Outdoor seating area',
    category: 'interior'
  },
  
  // Food
  {
    id: 5,
    src: 'https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    alt: 'Brunch plate with eggs and avocado',
    category: 'food'
  },
  {
    id: 6,
    src: 'https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    alt: 'Club sandwich on wooden board',
    category: 'food'
  },
  {
    id: 7,
    src: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    alt: 'Pancakes with berries and syrup',
    category: 'food'
  },
  {
    id: 8,
    src: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    alt: 'Fresh salad bowl',
    category: 'food'
  },
  
  // Drinks
  {
    id: 9,
    src: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    alt: 'Cappuccino with latte art',
    category: 'drinks'
  },
  {
    id: 10,
    src: 'https://images.pexels.com/photos/2615323/pexels-photo-2615323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    alt: 'Cold brew coffee',
    category: 'drinks'
  },
  {
    id: 11,
    src: 'https://images.pexels.com/photos/1793035/pexels-photo-1793035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    alt: 'Fruit smoothie',
    category: 'drinks'
  },
  {
    id: 12,
    src: 'https://images.pexels.com/photos/685527/pexels-photo-685527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    alt: 'Herbal tea with lemon',
    category: 'drinks'
  },
  
  // Events
  {
    id: 13,
    src: 'https://images.pexels.com/photos/7538368/pexels-photo-7538368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    alt: 'Book club meeting at the cafe',
    category: 'events'
  },
  {
    id: 14,
    src: 'data:image/jpeg;base64,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',
    alt: 'Live music night',
    category: 'events'
  },
  {
    id: 15,
    src: 'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    alt: 'Coffee tasting event',
    category: 'events'
  },
  {
    id: 16,
    src: 'https://images.pexels.com/photos/6256081/pexels-photo-6256081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    alt: 'Community gathering',
    category: 'events'
  }
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter(image => image.category === activeCategory);

  return (
    <div className="pt-16">
      {/* Hero Banner */}
      <div className="relative h-80 bg-cover bg-center flex items-center justify-center" 
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/2506990/pexels-photo-2506990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')"
        }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Gallery</h1>
          <p className="text-xl max-w-xl mx-auto">
            Explore the ambiance, dishes, and moments that make MoodSync Cafe special
          </p>
        </div>
      </div>

      <div className="container-custom py-16">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            { value: 'all', label: 'All Photos' },
            { value: 'interior', label: 'Interior' },
            { value: 'food', label: 'Food' },
            { value: 'drinks', label: 'Drinks' },
            { value: 'events', label: 'Events' }
          ].map((category) => (
            <button
              key={category.value}
              onClick={() => setActiveCategory(category.value)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeCategory === category.value
                  ? 'bg-primary-800 text-white'
                  : 'bg-white text-primary-800 hover:bg-primary-100'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence>
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="aspect-square overflow-hidden rounded-lg shadow-soft cursor-pointer"
                onClick={() => setSelectedImage(image)}
                whileHover={{ scale: 1.03 }}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button 
                className="absolute top-4 right-4 text-white hover:text-secondary-500 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-8 w-8" />
              </button>

              <div className="max-w-4xl max-h-[80vh] relative" onClick={(e) => e.stopPropagation()}>
                <motion.img
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-[80vh] rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4 rounded-b-lg">
                  <p>{selectedImage.alt}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Instagram CTA */}
      <section className="bg-primary-50 py-16">
        <div className="container-custom text-center">
          <h2 className="section-title">Share Your Moments</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Tag us on Instagram with #MoodSyncCafeMoments for a chance to be featured on our page!
          </p>
          <a 
            href="https://www.instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Follow Us on Instagram
          </a>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
