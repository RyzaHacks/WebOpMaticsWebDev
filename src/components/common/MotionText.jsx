import React from 'react';
import { motion } from 'framer-motion';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8, // Reduced duration for smoother animation
      delay: custom.delay,
      ease: 'easeOut', // Added easing for a smoother transition
    },
  }),
};

const AnimatedText = ({ tag: Tag, className, delay, children }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      custom={{ delay }}
      variants={textVariants}
      className={`text-gray-900 ${className}`}
    >
      <Tag>{children}</Tag>
    </motion.div>
  );
};

export default AnimatedText;
