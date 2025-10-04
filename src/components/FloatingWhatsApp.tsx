import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/97471962487?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20place%20an%20order.%20My%20delivery%20location%20is%20..."
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-50 animate-pulse"
      aria-label="Contact us on WhatsApp"
      target="_blank"
      rel="noopener noreferrer"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
};

export default FloatingWhatsApp;