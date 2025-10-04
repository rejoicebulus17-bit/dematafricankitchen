import React from 'react';
import { Heart, Users, Award, Globe, ChefHat, Clock } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: Heart,
      title: "Authentic Recipes",
      description: "Every dish is prepared using traditional recipes passed down through generations, ensuring authentic flavors that remind you of home."
    },
    {
      icon: Users,
      title: "Community Connection",
      description: "We bring together Africans in diaspora and introduce locals to the rich culinary heritage of West Africa."
    },
    {
      icon: Award,
      title: "Quality Ingredients",
      description: "We source the finest ingredients to ensure every meal meets the highest standards of taste and quality."
    },
    {
      icon: Globe,
      title: "Cultural Bridge",
      description: "Food is our way of sharing African culture and building bridges between communities in Qatar."
    }
  ];

  const stats = [
    { number: "100%", label: "Authentic Recipes" },
    { number: "500+", label: "Satisfied Customers" },
    { number: "15+", label: "Time-Honored Dishes" },
    { number: "2024", label: "Proudly Established" }
  ];

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-red-600 text-white py-20">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/8629129/pexels-photo-8629129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
          }}
        ></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ChefHat className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
          <h1 className="text-4xl sm:text-5xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            About Demat African Kitchen
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
            Bringing authentic Nigerian and African flavors to Qatar, connecting diaspora with home through food
          </p>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                <p>
                  Demat African Kitchen was born from a simple yet powerful desire - to bring the authentic taste of home to Africans living in Qatar while introducing the local community to the rich, diverse flavors of African cuisine.
                </p>
                <p>
                  Founded in 2024, our kitchen represents more than just a restaurant. It's a cultural bridge, a place where memories are rekindled through the familiar aroma of egusi soup, the comforting texture of pounded yam, and the vibrant flavors of perfectly spiced jollof rice.
                </p>
                <p>
                  Every dish we prepare tells a story of tradition, love, and the incredible culinary heritage of West Africa. Our recipes have been carefully preserved and passed down through generations, ensuring that each bite transports you to the heart of Nigeria and beyond.
                </p>
              </div>
            </div>
            
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
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {stat.number}
                </div>
                <div className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              What drives us to serve authentic African cuisine with passion and dedication
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <value.icon className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Our Mission
          </h2>
          <p className="text-xl leading-relaxed mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
            To preserve and share the authentic flavors of African cuisine while creating a sense of home and community for Africans in Qatar. We believe food is more than sustenance - it's culture, memory, and connection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/menu"
              className="inline-flex items-center px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Explore Our Menu
            </a>
            <a
              href="https://wa.me/97471962487?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20place%20an%20order.%20My%20delivery%20location%20is%20..."
              className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              style={{ fontFamily: 'Inter, sans-serif' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Order Now
            </a>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Passionate chefs dedicated to bringing you authentic African flavors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-24 h-24 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <ChefHat className="w-12 h-12 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Head Chef
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                Master of traditional Nigerian cuisine with 15+ years of experience
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-24 h-24 bg-yellow-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-12 h-12 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Kitchen Team
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                Dedicated team ensuring every dish meets our high standards
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Clock className="w-12 h-12 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Delivery Team
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                Fast and reliable delivery to bring fresh meals to your door
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;