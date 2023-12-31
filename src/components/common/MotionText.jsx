import React from 'react';
import { motion } from 'framer-motion';

const defaultVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: custom.delay },
  }),
};

const MotionText = ({ tag: Tag, size, weight, leading, children, delay }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      custom={{ delay }}
      variants={defaultVariants}
      className={`${size} ${weight} ${leading} text-gray-900`}
    >
      <Tag>{children}</Tag>
    </motion.div>
  );
};

export default MotionText;
