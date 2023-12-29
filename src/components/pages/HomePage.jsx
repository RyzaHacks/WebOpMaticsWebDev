import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import TestimonialSlider from './TestimonialSlider';
import CTASection from './CTASection';
import Footer from './Footer';
import servicesData from '../data/servicesData'; // assuming services data is stored here

const HomePage = () => {
  return (
    <div className="antialiased text-gray-900">
      <Helmet>
        <title>Home - WebOpMatics</title>
      </Helmet>
      <main>
        <HeroSection />
        <ServicesSection services={servicesData} />
        <TestimonialSlider />
        <CTASection />
        <Footer />
      </main>
    </div>
  );
};

export default HomePage;
