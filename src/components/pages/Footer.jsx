import React from 'react';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  // Function to generate random shapes
  const generateRandomShapes = (count) => {
    const shapes = [];
    const colors = ['#ff8e3c', '#f64f59', '#8e44ad', '#3498db']; // Adjust colors to match your theme
    for (let i = 0; i < count; i++) {
      const type = Math.random() > 0.5 ? 'circle' : 'polygon'; // Randomly choose between a circle or polygon
      const color = colors[Math.floor(Math.random() * colors.length)];
      const opacity = Math.random() * 0.5 + 0.5; // Opacity between 0.5 and 1 for better visibility
      const size = Math.random() * 80 + 20; // Size between 20 and 100
      const positionX = Math.random() * 100; // X position between 0 and 100%
      const positionY = Math.random() * 100; // Y position between 0 and 100%

      if (type === 'circle') {
        shapes.push(
          <circle key={`shape-${i}`} cx={`${positionX}%`} cy={`${positionY}%`} r={size / 2} fill={color} fillOpacity={opacity} />
        );
      } else {
        // Example polygon shape - you may design your own
        shapes.push(
          <polygon key={`shape-${i}`} points={`${positionX},${positionY} ${positionX + size / 2},${positionY + size / 3} ${positionX - size / 2},${positionY - size / 3}`} fill={color} fillOpacity={opacity} />
        );
      }
    }
    return shapes;
  };

  return (
    <footer className="relative text-white py-12 overflow-hidden bg-blue-900">
      {/* SVG Background Shapes */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#7F00FF', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#E100FF', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#0072FF', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#00C6FF', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        {/* Existing complex shapes */}
        <path d="M0,256 L256,256 L256,0 C192,64 128,128 64,192 Z" fill="url(#gradient1)" className="transform scale-125 translate-y-1/4" />
        <path d="M256,0 L512,0 L512,256 C448,192 384,128 320,64 Z" fill="url(#gradient2)" className="transform scale-125 translate-y-1/4" />
        {/* Randomly generated shapes */}
        {generateRandomShapes(15)}
      </svg>
      
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="md:w-1/3 mb-6 md:mb-0">
          <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
          <p className="text-gray-100">123 Example Street, City, Country</p>
        </div>
        <div className="md:w-1/3 mb-6 md:mb-0 text-center">
          <h2 className="text-2xl font-semibold mb-2">Follow Us</h2>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-white hover:text-blue-300">
              <FaInstagram className="text-2xl" />
            </a>
            <a href="#" className="text-white hover:text-blue-300">
              <FaTwitter className="text-2xl" />
            </a>
            <a href="#" className="text-white hover:text-blue-300">
              <FaFacebook className="text-2xl" />
            </a>
          </div>
        </div>
        <div className="md:w-1/3 text-right">
          <h2 className="text-2xl font-semibold mb-2">Quick Links</h2>
          <ul>
            <li className="mb-2">
              <a href="/tos" className="hover:text-blue-300">Terms of Service</a>
            </li>
            <li className="mb-2">
              <a href="/legal" className="hover:text-blue-300">Legal</a>
            </li>
            <li>
              <a href="/sitemap" className="hover:text-blue-300">Site Map</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
