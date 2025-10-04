import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle, ChefHat } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/ChatGPT Image Sep 21, 2025, 10_01_51 AM.png" 
                alt="Demat African Kitchen Logo" 
                className="h-12 w-auto"
              />
              <span className="ml-3 text-lg font-medium text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
                Demat African Kitchen
              </span>
            </div>
            <p className="text-gray-300 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              Bringing authentic Nigerian and African flavors to Qatar. Connecting diaspora with home through food.
            </p>
            <div className="flex space-x-4">
              <a href="https://wa.me/97471962487?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20get%20in%20touch%20with%20you." className="text-gray-300 hover:text-green-400 transition-colors" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/demat_african_kitchen_/" className="text-gray-300 hover:text-pink-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-red-400 mr-3" />
                <span style={{ fontFamily: 'Inter, sans-serif' }}>+974 7196 2487</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-red-400 mr-3" />
                <span style={{ fontFamily: 'Inter, sans-serif' }}>dematafrikitchen25@gmail.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-red-400 mr-3" />
                <span style={{ fontFamily: 'Inter, sans-serif' }}>Doha, Qatar</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Quick Order
            </h4>
            <div className="space-y-2">
              <a href="https://wa.me/97471962487?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Egusi%20Soup.%20My%20delivery%20location%20is%20..." 
                 className="block text-gray-300 hover:text-yellow-400 transition-colors" 
                 style={{ fontFamily: 'Inter, sans-serif' }}
                 target="_blank"
                 rel="noopener noreferrer">
                Egusi Soup
              </a>
              <a href="https://wa.me/97471962487?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Jollof%20Rice.%20My%20delivery%20location%20is%20..." 
                 className="block text-gray-300 hover:text-yellow-400 transition-colors"
                 style={{ fontFamily: 'Inter, sans-serif' }}
                 target="_blank"
                 rel="noopener noreferrer">
                Jollof Rice
              </a>
              <a href="https://wa.me/97471962487?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Pounded%20Yam.%20My%20delivery%20location%20is%20..." 
                 className="block text-gray-300 hover:text-yellow-400 transition-colors"
                 style={{ fontFamily: 'Inter, sans-serif' }}
                 target="_blank"
                 rel="noopener noreferrer">
                Pounded Yam
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
            © 2025 Demat African Kitchen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;