import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, HelpCircle } from 'lucide-react';

// Components
import FeaturedItems from '../components/Home/FeaturedItems';
import About from '../components/Home/About';
import Testimonials from '../components/Home/Testimonials';
import Hero from '../components/Home/Hero';

const Home = ({ user }) => {
  return (
    <div>
      {/* Personalized Welcome Banner */}
      {user && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-primary-800 to-primary-700 text-white py-3 mt-16"
        >
          <div className="container-custom text-center">
            <p className="text-sm md:text-base">
              Welcome back, <span className="font-semibold">{user.name.split(' ')[0]}</span>! 
              Ready for another amazing coffee experience? ☕
            </p>
          </div>
        </motion.div>
      )}
      
      <Hero />
      <FeaturedItems />
      <About />
      
      {/* Parallax CTA Section */}
      <section className="relative py-32 bg-fixed bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')",
        }}
      >
        <div className="absolute inset-0 bg-primary-900 opacity-70"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative container-custom text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Experience the Perfect Blend
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us for a cup of coffee and discover why our customers keep coming back.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="btn btn-primary flex items-center justify-center">
              <MapPin className="mr-2 h-5 w-5" />
              Find Us
            </Link>
            <Link to="/support" className="btn bg-secondary-500 text-white hover:bg-secondary-600 flex items-center justify-center">
              <HelpCircle className="mr-2 h-5 w-5" />
              Need Help?
            </Link>
          </div>
        </motion.div>
      </section>
      
      <Testimonials />
      
      {/* Instagram Gallery Preview */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Follow Us on Instagram</h2>
            <p className="section-subtitle">
              Share your Aroma Cafe moments with us using #AromaCafeMoments
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/1002740/pexels-photo-1002740.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/1566816/pexels-photo-1566816.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/4051221/pexels-photo-4051221.jpeg?auto=compress&cs=tinysrgb&w=600"
            ].map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="overflow-hidden rounded-lg shadow-soft"
              >
                <img 
                  src={image} 
                  alt={`Instagram post ${index + 1}`} 
                  className="w-full h-64 object-cover"
                />
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <a 
              href="https://www.instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              View More on Instagram
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;