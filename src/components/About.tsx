import React from 'react';
import { Heart } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex items-center mb-6">
              <Heart className="w-8 h-8 text-red-600 mr-3" />
              <h2 className="text-4xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Our Story
              </h2>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              Demat African Kitchen brings authentic Nigerian soups and African dishes to Qatar. Founded to connect Africans in diaspora with their roots, and introduce locals to a taste of Africa.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
              Every dish tells a story of tradition, love, and the rich culinary heritage of West Africa. From our signature Egusi soup to our perfectly spiced Jollof rice, we use traditional recipes passed down through generations.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <div className="text-3xl font-bold text-red-600 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>100%</div>
                <div className="text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>Authentic Recipes</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Fresh</div>
                <div className="text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>Daily Ingredients</div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src="/ChatGPT Image Sep 21, 2025, 09_46_00 AM.png"
                alt="Chef preparing authentic African cuisine"
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-yellow-400 text-black p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>Est. 2024</div>
                <div className="text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>Doha, Qatar</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;