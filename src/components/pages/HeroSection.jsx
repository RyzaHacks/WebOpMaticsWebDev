import React from 'react';
import { FaRocket } from 'react-icons/fa';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center p-4 md:p-20 bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: "url('/bg.png')" }}>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-gradient-to-r from-green-400 to-blue-500 transform translate-x-2/4 -translate-y-2/4 animate-spin"></div>
        <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-gradient-to-r from-yellow-300 to-red-500 transform -translate-x-2/4 -translate-y-2/4 animate-reverse-spin"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-gradient-to-r from-pink-200 to-purple-600 transform translate-x-2/4 -translate-y-2/4 animate-spin"></div>
      </div>
      <div className="z-10 max-w-4xl text-shadow-lg relative">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-3 leading-tight tracking-wide">
          Unlock Your Digital Potential
        </h1>
        <h2 className="text-2xl md:text-4xl text-cyan-300 mb-6 tracking-wider">
          Be a Part of the Digital Transformation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white bg-opacity-20 p-6 rounded-lg relative z-10">
          <p className="text-base md:text-lg text-white mb-6 leading-relaxed">
            Begin your journey into the digital age with WebOpMatics as your trusted partner.
          </p>
          <p className="text-base md:text-lg text-white mb-6 leading-relaxed">
            Elevate your online presence with our cutting-edge web solutions. We promise to keep you at the forefront of the digital landscape.
          </p>
        </div>
        <div className="flex justify-center space-x-4 mt-8">
          <motion.button
            className="text-lg font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300 ease-in-out flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaRocket className="mr-2" /> Get Started
          </motion.button>
          <button className="text-lg font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300 ease-in-out flex items-center justify-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white hover:-translate-y-1">
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
