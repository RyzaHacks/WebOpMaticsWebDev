import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ServicesSection = ({ services }) => {
  return (
    <section className="py-16 bg-gray-50 relative z-0"> {/* Give a lower z-index */}
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-center text-gray-800 tracking-wider">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <AnimatePresence exit={{ when: "afterChildren" }}>
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="relative z-10"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(38, 12, 28)" }}
                transition={{ duration: 0.5 }}
              >
                {/* Background Gradients */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl transform -rotate-12 scale-105 opacity-50 z-0"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-red-500 rounded-xl transform rotate-12 scale-105 opacity-50 z-0"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-600 rounded-xl transform -rotate-12 scale-105 opacity-50 z-0"></div>

                {/* Service Card Content */}
                <div className="bg-white hover:bg-gray-100 rounded-xl shadow-xl overflow-hidden transition-shadow duration-300 ease-in-out transform hover:scale-105 p-6 relative z-10">
                  <div className="flex justify-center z-10">
                    <motion.img
                      src={`/icons/${service.icon}`}
                      alt={service.title}
                      className="h-16 w-16 mb-4 rounded-full"
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-center tracking-wider z-10" style={{ textShadow: '0px 2px 4px rgba(0,0,0,0.5)' }}>
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed z-10" style={{ textShadow: '0px 2px 4px rgba(0,0,0,0.3)' }}>
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
