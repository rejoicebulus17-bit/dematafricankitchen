import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Menu from '../components/Menu';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default Home;