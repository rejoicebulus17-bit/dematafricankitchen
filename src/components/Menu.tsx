import React from 'react';
import { ShoppingCart, Utensils } from 'lucide-react';

const menuData = {
  categories: [
    {
      name: "Soups",
      items: [
        {
          name: "Egusi Soup",
          description: "Ground melon seed stew served with proteins.",
          price: "QR 25",
          image: "/EGUSI-SOUP 1.png",
          orderLink: "https://wa.me/97471962487?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Egusi%20Soup.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "Banga Soup",
          description: "Palm nut fruit, palm oil, and banga spices.",
          price: "QR 30",
          image: "/Banga Soup Only copy.webp",
          orderLink: "https://wa.me/97471962487?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Banga%20Soup.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "White Soup",
          description: "A light clear soup with proteins.",
          price: "QR 30",
          image: "/White Soup + Protein copy.jpg",
          orderLink: "https://wa.me/97471962487?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20White%20Soup.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "Black Soup",
          description: "Thick soup with assorted meats, herbs, and spices.",
          price: "QR 20",
          orderLink: "https://wa.me/97471962487?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Black%20Soup.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "Afang Soup",
          description: "Traditional Nigerian soup made with afang leaves and assorted proteins.",
          price: "QR 40",
          image: "/Afang Soup.jpg",
          orderLink: "https://wa.me/97471962487?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Afang%20Soup.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "Edikaikong Soup",
          description: "Delicious vegetable soup with waterleaf and fluted pumpkin leaves.",
          price: "QR 40",
          image: "/Edikaikong Soup.jpg",
          orderLink: "https://wa.me/97471962487?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Edikaikong%20Soup.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "Groundnut (Peanut) Soup",
          description: "Rich and creamy soup made with groundnuts and assorted proteins.",
          price: "QR 40",
          image: "/Groundnut (Peanut) Soup.jpg",
          orderLink: "https://wa.me/97471962487?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Groundnut%20Peanut%20Soup.%20My%20delivery%20location%20is%20..."
        }
      ]
    },
    {
      name: "Rice Dishes",
      items: [
        {
          name: "Nigerian Jollof Rice",
          description: "Classic Nigerian jollof rice cooked to perfection.",
          price: "QR 26",
          image: "/rice.png",
          orderLink: "https://wa.me/97471962487?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Nigerian%20Jollof%20Rice.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "Fried Rice",
          description: "West African style fried rice with mixed vegetables.",
          price: "QR 26",
          orderLink: "https://wa.me/97471962487?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Fried%20Rice.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "Waakye",
          description: "Ghanaian rice and beans dish cooked with millet leaves for authentic flavor.",
          price: "QR 30",
          orderLink: "https://wa.me/97471962487?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Waakye.%20My%20delivery%20location%20is%20..."
        }
      ]
    },
    {
      name: "Sides & Specials",
      items: [
        {
          name: "Ewa Agoyin",
          description: "Mashed beans with spicy ewa agoyin sauce and plantain.",
          price: "QR 30",
          image: "/Beans and Plantain.png",
          orderLink: "https://wa.me/97471962487?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Ewa%20Agoyin.%20My%20delivery%20location%20is%20..."
        }
      ]
    },
    {
      name: "Drinks",
      items: [
        {
          name: "Hibiscus Drink (Zobo)",
          description: "Refreshing hibiscus drink with natural fruits and spices.",
          price: "QR 12",
          image: "/Zobo.png",
          orderLink: "https://wa.me/97471962487?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Zobo.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "Fresh Orange Juice",
          description: "Freshly squeezed orange juice, vitamin C rich.",
          price: "QR 12",
          orderLink: "https://wa.me/97471962487?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Fresh%20Orange%20Juice.%20My%20delivery%20location%20is%20..."
        }
      ]
    }
  ]
};

const Menu = () => {
  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Utensils className="w-8 h-8 text-red-600 mr-3" />
            <h2 className="text-4xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Our Menu
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Authentic Nigerian and African dishes made with love and traditional recipes
          </p>
        </div>

        <div className="space-y-16">
          {menuData.categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center border-b-2 border-red-600 pb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {category.name}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all duration-300 hover:border-red-300">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-xl font-semibold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {item.name}
                      </h4>
                      <span className="text-lg font-bold text-red-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {item.price}
                      </span>
                    </div>
                    
                    {item.description && (
                      <p className="text-gray-600 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {item.description}
                      </p>
                    )}
                    
                    <a
                      href={item.orderLink}
                      className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-md transition-all duration-300 transform hover:scale-105"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Order Now
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;