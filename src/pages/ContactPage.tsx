import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock, Instagram, Facebook, Send } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hi Demat African Kitchen,

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Message: ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/97471962487?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+974 7196 2487",
      link: "tel:+97471962487",
      description: "Call us for immediate assistance"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: "+974 7196 2487",
      link: "https://wa.me/97471962487",
      description: "Quick orders and inquiries"
    },
    {
      icon: Mail,
      title: "Email",
      details: "dematafrikitchen25@gmail.com",
      link: "mailto:dematafrikitchen25@gmail.com",
      description: "For general inquiries and feedback"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Doha, Qatar",
      link: "#",
      description: "Serving all areas in Doha"
    }
  ];

  const operatingHours = [
    { day: "Monday – Thursday", hours: "10:00 AM – 11:00 PM" },
    { day: "Friday", hours: "12:00 PM – 11:00 PM" },
    { day: "Saturday – Sunday", hours: "10:00 AM – 11:00 PM" }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-red-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageCircle className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
          <h1 className="text-4xl sm:text-5xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Contact Us
          </h1>
          <p className="text-xl text-red-100 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Get in touch with us for orders, inquiries, or just to say hello
          </p>
        </div>
      </div>

      {/* Quick Order Section */}
      <div className="bg-green-600 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Ready to Order?
          </h2>
          <p className="mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
            Click below to place your order directly via WhatsApp
          </p>
          <a
            href="https://wa.me/97471962487?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20place%20an%20order.%20My%20delivery%20location%20is%20..."
            className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            style={{ fontFamily: 'Inter, sans-serif' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Order Now on WhatsApp
          </a>
        </div>
      </div>

      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Get In Touch
              </h2>
              
              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                        <info.icon className="w-6 h-6 text-red-600" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {info.title}
                      </h3>
                      <a
                        href={info.link}
                        className="text-red-600 font-medium hover:text-red-700 transition-colors"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {info.details}
                      </a>
                      <p className="text-gray-600 text-sm mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Operating Hours */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 text-red-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Operating Hours
                  </h3>
                </div>
                <div className="space-y-3">
                  {operatingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <span className="text-gray-700 font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {schedule.day}
                      </span>
                      <span className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://wa.me/97471962487?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20get%20in%20touch%20with%20you."
                    className="w-12 h-12 bg-green-500 text-white rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.instagram.com/demat_african_kitchen_/"
                    className="w-12 h-12 bg-pink-500 text-white rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Send Us a Message
                </h2>
                <p className="text-gray-600 mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Have a question or special request? Fill out the form below and we'll get back to you via WhatsApp.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors resize-none"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                      placeholder="Tell us about your inquiry, special dietary requirements, or any questions you have..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message via WhatsApp
                  </button>
                </form>

                <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm text-yellow-800" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <strong>Note:</strong> This form will open WhatsApp with your message pre-filled. You can review and send it directly to us.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                What areas do you deliver to?
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                We deliver to all areas within Doha, Qatar. Delivery fees may vary based on location. Contact us for specific delivery information to your area.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                How long does delivery take?
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                Our typical delivery time is 30-45 minutes, depending on your location and order size. We'll provide an estimated delivery time when you place your order.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Do you cater for events?
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                Yes! We offer catering services for events, parties, and gatherings. Contact us via WhatsApp to discuss your catering needs and get a custom quote.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Can you accommodate dietary restrictions?
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                We can accommodate various dietary preferences and restrictions. Please let us know about any allergies or dietary requirements when placing your order.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;