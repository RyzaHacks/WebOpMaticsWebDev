//webopmatics\src\components\pages\ServicesSection.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ServicesSection = ({ services }) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('services-section');
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        setIsInView(sectionTop < window.innerHeight / 2);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="services-section" className="py-16 bg-gray-50 relative z-40">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-center text-gray-800 tracking-wider">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <AnimatePresence exit={{ when: "afterChildren" }}>
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="relative z-10"
                initial={{ opacity: 0, y: -10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(38, 12, 28, 0.7)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-gradient-start to-primary-gradient-end rounded-xl transform -rotate-12 scale-105 opacity-50 z-0"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary-gradient-start to-secondary-gradient-end rounded-xl transform rotate-12 scale-105 opacity-50 z-0"></div>

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
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-center tracking-wider z-10">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed z-10">
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