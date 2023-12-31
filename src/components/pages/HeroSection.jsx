import React, { useRef } from 'react';
import { FaRocket } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import BackgroundGradients from '../common/BackgroundGradients';
import AnimatedText from '../common/MotionText';

const HeroSection = () => {
  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  const textBoxRef = useRef(null);

  return (
<section className="relative min-h-screen flex flex-col justify-center items-center text-center p-4 md:p-20">
  <BackgroundGradients textBoxRef={textBoxRef} />
  <div className="z-40 max-w-4xl mx-auto text-white relative space-y-6 md:space-y-12" ref={textBoxRef}>
    <AnimatedText tag="h1" className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-blue-700" delay={0.2}>
      Empowering Your Digital Journey
    </AnimatedText>
    <AnimatedText tag="h2" className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-normal text-blue-500" delay={0.4}>
      Join the Digital Transformation Revolution
    </AnimatedText>
    <AnimatedText tag="p" className="text-lg md:text-xl lg:text-2xl font-normal leading-relaxed text-gray-400" delay={0.6}>
      Discover cutting-edge solutions to accelerate your business growth in the digital era.
    </AnimatedText>
    <ScrollLink to="contact" smooth={true} duration={500} className="inline-block">
      <motion.button className="text-lg md:text-xl bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 md:py-4 px-6 md:px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out flex items-center justify-center transform" variants={buttonVariants} whileHover="hover" whileTap="tap">
        <FaRocket className="mr-2" /> Get Started
      </motion.button>
    </ScrollLink>
  </div>
</section>
  );
};

export default HeroSection;
