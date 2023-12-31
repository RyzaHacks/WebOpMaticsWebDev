import React, { useState, useEffect } from 'react';

// Constants
const NUM_SHAPES = 20;
const DISTANCE_THRESHOLD = 150;

// Shapes components
const Circle = ({ shape }) => (
  <circle
    fill={shape.color}
    opacity={shape.opacity}
    transform={`translate(${shape.x}, ${shape.y}) ${shape.transform}`}
    r={shape.size}
    filter="url(#shadow)"
  />
);

const Hexagon = ({ shape }) => {
  const calculateHexagonPoints = (size) => {
    const angle = 60;
    const centerX = size;
    const centerY = size;
    let points = '';

    for (let i = 0; i < 6; i++) {
      const x = centerX + size * Math.cos((angle * i * Math.PI) / 180);
      const y = centerY + size * Math.sin((angle * i * Math.PI) / 180);
      points += `${x},${y} `;
    }

    return points;
  };

  return (
    <polygon
      fill={shape.color}
      opacity={shape.opacity}
      transform={`translate(${shape.x}, ${shape.y}) ${shape.transform}`}
      points={calculateHexagonPoints(shape.size)}
      filter="url(#shadow)"
    />
  );
};

const BackgroundGradients = ({ textBoxRef }) => {
  const [shapes, setShapes] = useState([]);
  const [cursorPosition, setCursorPosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const colors = ['#ff8e3c', '#f64f59', '#8e44ad', '#3498db'];
    const types = ['circle', 'hexagon'];

    const generateRandomShape = () => {
      const color = colors[Math.floor(Math.random() * colors.length)];
      const type = types[Math.floor(Math.random() * types.length)];
      const opacity = Math.random() * 0.8 + 0.2;
      const size = Math.random() * 50 + 20;
      return {
        type,
        color,
        opacity,
        size,
        transform: `scale(${Math.random() * 0.5 + 0.5})`,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        velocityX: (Math.random() - 0.5) * 5,
        velocityY: (Math.random() - 0.5) * 5,
      };
    };

    setShapes(Array.from({ length: NUM_SHAPES }, generateRandomShape));

    const updateShapesPosition = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', updateShapesPosition);
    window.addEventListener('touchmove', updateShapesPosition);

    return () => {
      window.removeEventListener('mousemove', updateShapesPosition);
      window.removeEventListener('touchmove', updateShapesPosition);
    };
  }, []);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setShapes((prevShapes) => prevShapes.map(updateShapePosition));
      }, 20);

      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const updateShapePosition = (shape) => {
    if (!isPaused) {
      const attractionStrength = 0.3;

      const distanceX = cursorPosition.x - shape.x;
      const distanceY = cursorPosition.y - shape.y;
      const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
      const isAllergic = distance < DISTANCE_THRESHOLD;

      const accelerationX = isAllergic ? (distanceX / distance) * attractionStrength : 0;
      const accelerationY = isAllergic ? (distanceY / distance) * attractionStrength : 0;

      shape.velocityX = isAllergic ? shape.velocityX + accelerationX : shape.velocityX;
      shape.velocityY = isAllergic ? shape.velocityY + accelerationY : shape.velocityY;

      shape.x += shape.velocityX;
      shape.y += shape.velocityY;

      if (shape.x < 0 || shape.x > window.innerWidth) {
        shape.velocityX *= -1;
      }
      if (shape.y < 0 || shape.y > window.innerHeight) {
        shape.velocityY *= -1;
      }
    }

    return shape;
  };

  const togglePause = () => {
    setIsPaused((prevIsPaused) => !prevIsPaused);
  };

  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-red-400 to-pink-600 opacity-55 z-0"></div>
      <div className="absolute inset-0 z-20">
        <svg className="w-full h-full" style={{ position: 'absolute' }} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#000" />
            </filter>
          </defs>
          {shapes.map((shape, index) => {
            switch (shape.type) {
              case 'circle':
                return <Circle key={index} shape={shape} />;
              case 'hexagon':
                return <Hexagon key={index} shape={shape} />;
              default:
                return null;
            }
          })}
        </svg>
      </div>
      <button onClick={togglePause} className="absolute top-4 right-4 bg-blue-500 text-white px-2 py-1 rounded z-30">
        {isPaused ? 'Resume' : 'Pause'}
      </button>
    </>
  );
};

export default BackgroundGradients;
