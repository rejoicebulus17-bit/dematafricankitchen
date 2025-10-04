import React from 'react';
import { MessageCircle, Sparkles } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Sparkles className="w-12 h-12 text-yellow-400 mx-auto mb-6" />
        
        <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Craving Authentic African Flavors?
        </h2>
        
        <p className="text-xl mb-8 text-red-100 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
          Don't wait! Order now and taste the authentic flavors of Africa delivered right to your doorstep in Qatar.
        </p>
        
        <a
          href="https://wa.me/97471962487?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20place%20an%20order.%20My%20delivery%20location%20is%20..."
          className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          style={{ fontFamily: 'Inter, sans-serif' }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle className="w-6 h-6 mr-3" />
          Order Now on WhatsApp
        </a>
        
        <div className="mt-8 flex justify-center items-center space-x-4 text-red-100">
          <span className="text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>🚚 Free Delivery Over QAR 100</span>
          <span>•</span>
          <span className="text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>⚡ 30-45 Min Delivery</span>
        </div>
      </div>
    </section>
  );
};

export default CTA;