import React from 'react';
import { MessageCircle, ChefHat } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/ChatGPT Image Sep 21, 2025, 09_46_00 AM copy copy.png)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <img 
            src="/ChatGPT Image Sep 21, 2025, 10_01_51 AM.png" 
            alt="Demat African Kitchen Logo" 
            className="h-16 w-auto mb-4"
          />
        </div>
        
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Authentic Nigerian & African Soups and Foods in Qatar
        </h2>
        
        <p className="text-xl sm:text-2xl mb-8 text-gray-200" style={{ fontFamily: 'Inter, sans-serif' }}>
          Bringing the flavors of home to Africans in diaspora and sharing African cuisine with Qatar.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://wa.me/97471962487?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20place%20an%20order.%20My%20delivery%20location%20is%20..."
            className="inline-flex items-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            style={{ fontFamily: 'Inter, sans-serif' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Order Now
          </a>
          
          <a
            href="#menu"
            className="inline-flex items-center px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            See Menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;