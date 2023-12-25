import React, { useState } from 'react';

const testimonials = [
  { id: 1, text: "WebOpMatics transformed our online presence with a stunning, user-friendly website that captures our brand perfectly." },
  { id: 2, text: "The team at WebOpMatics is knowledgeable and professional. They delivered our project ahead of schedule with top-notch quality." },
  { id: 3, text: "Partnering with WebOpMatics has been a game-changer. Their strategic IT solutions have streamlined our operations significantly." },
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
    maxWidth: '600px',
    height: '250px',
    margin: 'auto',
    overflow: 'hidden',
    borderRadius: '8px',
  };

  const slideStyle = {
    display: 'flex',
    transition: 'transform 0.5s ease',
    transform: `translateX(-${currentSlide * 100}%)`,
    height: '100%',
  };

  const slideItemStyle = {
    minWidth: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    background: 'rgba(0, 0, 0, 0.7)',
    color: 'white',
    padding: '20px',
    boxSizing: 'border-box',
  };

  const navButtonStyle = (direction) => ({
    position: 'absolute',
    top: '50%',
    [direction]: '10px',
    transform: 'translateY(-50%)',
    background: 'rgba(0, 0, 0, 0.5)',
    border: 'none',
    color: 'white',
    padding: '10px',
    cursor: 'pointer',
    zIndex: 10,
  });

  return (
    <div style={slideContainerStyle}>
      <div style={slideStyle}>
        {testimonials.map((testimonial, index) => (
          <div key={testimonial.id} style={slideItemStyle}>
            {testimonial.text}
          </div>
        ))}
      </div>
      <button onClick={handlePrevious} style={navButtonStyle('left')}>&lt;</button>
      <button onClick={handleNext} style={navButtonStyle('right')}>&gt;</button>
    </div>
  );
};

export default Slides;
