import React from 'react';
import { FaRocket } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import BackgroundGradients from '../common/BackgroundGradients';
import MotionText from '../common/MotionText';

const HeroSection = () => {
  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center p-4 md:p-20">
      <BackgroundGradients />
      <div className="z-40 max-w-4xl mx-auto text-gray-900 relative space-y-6 md:space-y-12">
        <MotionText
          tag="h1"
          size="text-4xl md:text-5xl lg:text-6xl"
          weight="font-bold"
          leading="leading-tight"
          delay={0.5}
        >
          Empowering Your Digital Journey
        </MotionText>
        <MotionText
          tag="h2"
          size="text-xl md:text-2xl lg:text-3xl"
          weight="font-medium"
          leading="leading-normal"
          delay={0.75}
        >
          Join the Digital Transformation Revolution
        </MotionText>
        <MotionText
          tag="p"
          size="text-sm md:text-base lg:text-lg"
          weight="font-normal"
          leading="leading-relaxed"
          delay={1}
        >
          Discover cutting-edge solutions to accelerate your business growth in the digital era.
        </MotionText>
        <ScrollLink to="contact" smooth={true} duration={500} className="inline-block">
          <motion.button
            className="text-base md:text-lg bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 md:py-4 px-6 md:px-8 rounded-full shadow-outline transition duration-300 ease-in-out flex items-center justify-center transform"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <FaRocket className="mr-2" /> Get Started
          </motion.button>
        </ScrollLink>
      </div>
    </section>
  );
};

export default HeroSection;