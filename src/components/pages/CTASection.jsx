import React from 'react';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section className="relative z-0 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-tr-3xl rounded-bl-3xl transform -rotate-6 scale-105 opacity-50 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-red-500 rounded-tl-3xl rounded-br-3xl transform rotate-12 scale-105 opacity-50 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-600 rounded-tl-3xl rounded-br-3xl transform -rotate-6 scale-105 opacity-50 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-secondary-400 to-secondary-600 rounded-tr-3xl rounded-bl-3xl transform rotate-12 scale-105 opacity-50 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-900 rounded-xl opacity-40 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-600 rounded-xl opacity-40 z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white py-16">
        <h2 className="text-4xl font-bold mb-4">Embark On Your Success Story</h2>
        <p className="text-lg text-white mb-8">
          Are you ready to transform your digital strategy? Connect with us and let's create something extraordinary together.
        </p>
        <motion.button
          className="bg-secondary-500 hover:bg-secondary-600 text-white font-medium py-2 px-4 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out rounded-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get In Touch
        </motion.button>
      </div>
    </section>
  );
};

export default CTASection;
