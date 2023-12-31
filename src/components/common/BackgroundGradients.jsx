import React from 'react';

const BackgroundGradients = () => {
  const generateRandomShapes = () => {
    const shapes = [];
    const colors = ['#ff8e3c', '#f64f59', '#8e44ad', '#3498db']; // Add more colors if needed
    const types = ['circle', 'rect', 'polygon']; // Add more types if needed
    
    for (let i = 0; i < 10; i++) { // Generates 10 random shapes
      const color = colors[Math.floor(Math.random() * colors.length)];
      const type = types[Math.floor(Math.random() * types.length)];
      const opacity = Math.random() * 0.8 + 0.2; // Opacity between 0.2 and 1
      const transform = `scale(${Math.random() * 1.5})`; // Random scale
      shapes.push({ type, color, opacity, transform });
    }
    
    return shapes;
  };

  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-red-400 to-pink-600 opacity-75 z-0"></div>
      <div className="absolute inset-0 z-10">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Generate random shapes */}
          {generateRandomShapes().map((shape, index) => {
            switch (shape.type) {
              case 'circle':
                return <circle key={index} cx={`${Math.random() * 100}%`} cy={`${Math.random() * 100}%`} r="50" fill={shape.color} opacity={shape.opacity} transform={shape.transform} />;
              case 'rect':
                return <rect key={index} x={`${Math.random() * 100}%`} y={`${Math.random() * 100}%`} width="100" height="100" fill={shape.color} opacity={shape.opacity} transform={`rotate(45) ${shape.transform}`} />;
              case 'polygon':
                return <polygon key={index} points="50%,0 100%,50% 50%,100% 0,50%" fill={shape.color} opacity={shape.opacity} transform={shape.transform} />;
              default:
                return null;
            }
          })}
        </svg>
      </div>
    </>
  );
};

export default BackgroundGradients;