import React from 'react';

const Shapes = () => {
  return (
    <div>
      <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-gradient-to-r from-green-400 to-blue-500 transform translate-x-2/4 -translate-y-2/4 animate-spin-slow"></div>
      <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-gradient-to-r from-yellow-300 to-red-500 transform -translate-x-2/4 -translate-y-2/4 animate-reverse-spin-slow"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-gradient-to-r from-pink-400 to-purple-600 transform translate-x-2/4 -translate-y-2/4 animate-spin-fast"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-green-400 transform -translate-x-2/4 -translate-y-2/4 animate-reverse-spin-fast"></div>
      {/* Add more shapes here */}
    </div>
  );
};

export default Shapes;
