import React from 'react';
import { FaRocket } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center p-4 md:p-20">
      {/* Unique Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-300 to-blue-600 opacity-60 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-purple-600 to-pink-300 opacity-60 z-10 rotate-180 transform scale-105"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-yellow-300 to-red-500 opacity-60 z-20 rotate-45 transform scale-105"></div>      
      {/* Content */}
      <div className="z-40 max-w-4xl mx-auto text-white relative space-y-6">
        <h1 className="text-5xl md:text-8xl font-extrabold mb-4 leading-tight">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Empowering Your Digital Journey
          </motion.span>
        </h1>
        <h2 className="text-xl md:text-3xl font-light mb-8">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.75 }}
          >
            Join the Digital Transformation Revolution
          </motion.span>
        </h2>
        {/* Reintroduced Contextual Content */}
        <p className="text-base md:text-lg font-normal max-w-2xl mx-auto mb-8">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Discover cutting-edge solutions to accelerate your business growth in the digital era.
          </motion.span>
        </p>
        <div className="flex justify-center mt-8">
          <ScrollLink to="contact" smooth={true} duration={500}>
            <motion.button
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaRocket className="mr-2" /> Get Started
            </motion.button>
          </ScrollLink>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
