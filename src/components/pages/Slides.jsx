import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUser, FaBuilding } from 'react-icons/fa'; // Import icons from react-icons

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    source: 'CEO, Company A',
    text: "WebOpMatics transformed our online presence with a stunning, user-friendly website that captures our brand perfectly.",
  },
  {
    id: 2,
    name: 'Jane Smith',
    source: 'COO, Company B',
    text: "The team at WebOpMatics is knowledgeable and professional. They delivered our project ahead of schedule with top-notch quality.",
  },
  {
    id: 3,
    name: 'David Johnson',
    source: 'CIO, Company C',
    text: "Partnering with WebOpMatics has been a game-changer. Their strategic IT solutions have streamlined our operations significantly.",
  },
];

const Slides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((current) => (current + 1) % testimonials.length);
  };

  const handlePrevious = () => {
    setCurrentSlide((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  const slideContainerStyle = {
    position: 'relative',
    maxWidth: '1000px',
    margin: 'auto',
    overflow: 'hidden',
    borderRadius: '8px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
  };
  
  const slideStyle = {
    display: 'flex',
    transition: 'transform 0.5s ease',
    transform: `translateX(-${currentSlide * 100}%)`,
  };
  
  const slideItemStyle = {
    flex: '0 0 100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(38, 12, 28, 0.8)',
    color: 'white',
    padding: '20px',
    boxSizing: 'border-box',
    borderRadius: '8px', // Added border radius for a rounded look
    margin: '0 10px', // Added margin to create spacing between testimonials
    textAlign: 'center', // Center-align text
  };

  const nameStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const sourceStyle = {
    fontSize: '1rem',
    fontStyle: 'italic',
    display: 'flex',
    alignItems: 'center',
  };

  const iconStyle = {
    marginRight: '6px',
  };

  const navButtonStyle = (direction) => ({
    position: 'absolute',
    top: '50%',
    [direction]: '10px',
    transform: 'translateY(-50%)',
    background: 'rgba(38, 12, 28, 0.6)',
    border: 'none',
    color: 'white',
    padding: '10px',
    cursor: 'pointer',
    zIndex: 10,
    borderRadius: '50%',
  });

  return (
    <div style={slideContainerStyle}>
      <AnimatePresence exit={{ mode: 'wait' }}>
        <motion.div
          key={currentSlide}
          style={slideStyle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              style={slideItemStyle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div style={nameStyle}>
                <FaUser style={iconStyle} /> {/* User icon */}
                {testimonial.name}
              </div>
              <div style={sourceStyle}>
                <FaBuilding style={iconStyle} /> {/* Building icon */}
                {testimonial.source}
              </div>
              <p>{testimonial.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
      <motion.button onClick={handlePrevious} style={navButtonStyle('left')} whileTap={{ scale: 0.95 }}>
        &lt;
      </motion.button>
      <motion.button onClick={handleNext} style={navButtonStyle('right')} whileTap={{ scale: 0.95 }}>
        &gt;
      </motion.button>
    </div>
  );
};

export default Slides;
