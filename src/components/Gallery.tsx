import React from 'react';
import { Camera } from 'lucide-react';

const Gallery = () => {
  const images = [
    {
      src: "/Egusi + Protein copy.jpg",
      alt: "Authentic Egusi Soup with rich melon seed base"
    },
    {
      src: "/Banga Soup Only copy.webp",
      alt: "Traditional Banga Soup with palm nut fruit and spices"
    },
    {
      src: "/Ogbono Soup With Protein copy.jpeg",
      alt: "Rich Ogbono Soup with ground ogbono seeds and protein"
    },
    {
      src: "/White Soup + Protein copy.jpg",
      alt: "Light and clear White Soup with assorted proteins"
    },
    {
      src: "/Ogbono & Egusi copy.jpg",
      alt: "Combination of Ogbono and Egusi soups with mixed proteins"
    },
    {
      src: "/Groundnut (Peanut) Soup.jpg",
      alt: "Rich and creamy Groundnut (Peanut) Soup with assorted proteins"
    },
    {
      src: "/Afang Soup.jpg",
      alt: "Traditional Afang Soup with fresh afang leaves and proteins"
    },
    {
      src: "/Edikaikong Soup.jpg",
      alt: "Delicious Edikaikong Soup with waterleaf and fluted pumpkin leaves"
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
    },
    {
      src: "/Efo Riro (Big Pot) copy.jpg",
      alt: "Efo Riro - Traditional Nigerian spinach stew in a big pot"
    },
    {
      src: "/Ogbono (Small Pot) + 7 Protein copy.jpg",
      alt: "Ogbono Soup - Small pot with 7 pieces of protein"
    },
    {
      src: "/Ogbono (Big Pot) + 10 Protein copy.jpg",
      alt: "Ogbono Soup - Large pot with 10 pieces of protein"
    },
    {
      src: "/Okro (Small Pot) + 5 Protein copy.jpg",
      alt: "Okro Soup - Small pot with 5 pieces of protein"
    },
    {
      src: "/Pounded Yam copy.jpg",
      alt: "Pounded Yam - Smooth, stretchy yam paste perfect for soups"
    },
    {
      src: "/Poundo Yam copy.jpg",
      alt: "Poundo Yam - Made from yam flour, smooth and delicious"
    },
    {
      src: "/Yellow Garri copy.jpg",
      alt: "Yellow Garri - Traditional cassava-based swallow"
    },
    {
      src: "/Amala (Yam Fufu) copy.jpg",
      alt: "Amala (Yam Fufu) - Traditional Yoruba swallow made from yam flour"
    },
    {
      src: "/Semolina copy.jpg",
      alt: "Semolina - Smooth wheat-based swallow perfect with any soup"
    },
    {
      src: "/Plantain Porridge Only copy.jpg",
      alt: "Plantain Porridge - Traditional Nigerian plantain dish"
    },
    {
      src: "/Native Jollof Rice copy copy.webp",
      alt: "Native Jollof Rice - Traditional jollof rice cooked with native spices and palm oil"
    },
    {
      src: "/Waakye copy copy.jpg",
      alt: "Waakye - Ghanaian rice and beans dish cooked with millet leaves"
    },
    {
      src: "/Spaghetti Jollof Only copy copy.jpg",
      alt: "Spaghetti Jollof - Spaghetti cooked in jollof style with Nigerian spices"
    },
    {
      src: "/White Rice with Pepper Soup Side copy copy.jpg",
      alt: "White Rice with Pepper Soup Side - Plain white rice served with spicy pepper soup"
    },
    {
      src: "/Rice Flour (Ground Rice) copy copy.jpg",
      alt: "Rice Flour (Ground Rice) - Light swallow made from ground rice flour"
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