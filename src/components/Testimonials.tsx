import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Chioma A.",
    quote: "Tastes just like home! Egusi soup was amazing.",
    rating: 5
  },
  {
    name: "Ahmed K.",
    quote: "First time trying Nigerian food, and I loved it!",
    rating: 5
  },
  {
    name: "Mary J.",
    quote: "Best African food in Qatar, hands down.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Real reviews from our satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <Quote className="w-8 h-8 text-red-600 mb-4" />
              
              <p className="text-gray-600 mb-6 text-lg leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                "{testimonial.quote}"
              </p>
              
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {testimonial.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;