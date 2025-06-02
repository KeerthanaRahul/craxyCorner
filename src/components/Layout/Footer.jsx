import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Coffee, 
  Instagram, 
  Facebook, 
  Twitter, 
  Clock, 
  MapPin, 
  Phone, 
  Mail 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-800 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div>
            <div className="flex items-center mb-4">
              <Coffee className="h-8 w-8 mr-2 text-secondary-500" />
              <span className="font-serif text-xl font-bold">Aroma Cafe</span>
            </div>
            <p className="text-primary-100 mb-6">
              Bringing you the finest coffee experience since 2010. Our passion for quality and 
              community drives everything we do.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-primary-100 hover:text-secondary-500 transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary-100 hover:text-secondary-500 transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-primary-100 hover:text-secondary-500 transition-colors duration-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4 text-secondary-500">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-100 hover:text-white transition-colors duration-300">Home</Link>
              </li>
              <li>
                <Link to="/menu" className="text-primary-100 hover:text-white transition-colors duration-300">Our Menu</Link>
              </li>
              <li>
                <Link to="/reservations" className="text-primary-100 hover:text-white transition-colors duration-300">Reservations</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-primary-100 hover:text-white transition-colors duration-300">Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-100 hover:text-white transition-colors duration-300">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4 text-secondary-500">Opening Hours</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Clock size={18} className="mr-2 mt-1 flex-shrink-0 text-primary-200" />
                <div>
                  <p className="font-medium">Monday - Friday</p>
                  <p className="text-primary-200">7:00 AM - 8:00 PM</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="mr-2 mt-1 flex-shrink-0 text-primary-200" />
                <div>
                  <p className="font-medium">Saturday - Sunday</p>
                  <p className="text-primary-200">8:00 AM - 9:00 PM</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4 text-secondary-500">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0 text-primary-200" />
                <p>123 Coffee Street, Brewville, CA 90210</p>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="mr-2 mt-1 flex-shrink-0 text-primary-200" />
                <p>(123) 456-7890</p>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-1 flex-shrink-0 text-primary-200" />
                <p>hello@aromacafe.com</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-700 mt-12 pt-8 text-center">
          <p className="text-primary-200">
            &copy; {new Date().getFullYear()} Aroma Cafe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;