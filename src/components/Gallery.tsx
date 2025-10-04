import React from 'react';
import { Camera } from 'lucide-react';

const Gallery = () => {
  const images = [
    {
      src: "/EGUSI-SOUP 1.png",
      alt: "Authentic Egusi Soup with rich melon seed base"
    },
    {
      src: "/rice.png",
      alt: "Perfect Jollof Rice with tender chicken"
    },
    {
      src: "/Beans and Plantain.png",
      alt: "Ewa Agoyin - Beans with spicy sauce and fried plantain"
    },
    {
      src: "/Zobo.png",
      alt: "Refreshing Zobo - Traditional hibiscus drink"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Camera className="w-8 h-8 text-red-600 mr-3" />
            <h2 className="text-4xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Gallery
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            A visual feast of our authentic African dishes
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300"></div>
              <div className="absolute inset-0 flex items-end">
                <div className="p-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {image.alt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;