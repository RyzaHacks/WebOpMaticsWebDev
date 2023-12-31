//webopmatics\src\components\pages\Slides.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    quote: "WebOpMatics transformed our online presence with a stunning, user-friendly website that captures our brand perfectly.",
    name: "John Doe",
    title: "CEO, Company A",
  },
  {
    id: 2,
    quote: "The team at WebOpMatics is knowledgeable and professional. They delivered our project ahead of schedule with top-notch quality.",
    name: "Jane Smith",
    title: "COO, Company B",
  },
  {
    id: 3,
    quote: "Partnering with WebOpMatics has been a game-changer. Their strategic IT solutions have streamlined our operations significantly.",
    name: "David Johnson",
    title: "CIO, Company C",
  },
  // Add more testimonials as needed
];

const Slides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div className="relative w-full flex justify-center items-center">
      <AnimatePresence>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
          className="w-full"
        >
          <div className="flex justify-center items-center">
            <div className="max-w-xl p-10 bg-purple-600 text-white rounded-lg shadow-lg m-4">
              <FaQuoteLeft className="text-4xl mb-4" />
              <p className="text-lg">{testimonials[currentSlide].quote}</p>
              <div className="font-bold mt-4">{testimonials[currentSlide].name}</div>
              <div className="font-medium">{testimonials[currentSlide].title}</div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-purple-700 text-white p-3 rounded-full shadow-lg"
        onClick={handlePrevSlide}
      >
        <FaChevronLeft />
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-purple-700 text-white p-3 rounded-full shadow-lg"
        onClick={handleNextSlide}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Slides;
