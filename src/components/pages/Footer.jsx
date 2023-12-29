import React from 'react';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-primary-800 to-primary-900 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Gradient Shape Layers */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg transform -rotate-12 scale-105 opacity-40 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-red-500 rounded-lg transform rotate-12 scale-105 opacity-40 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-600 rounded-lg transform -rotate-12 scale-105 opacity-40 z-0"></div>

        <div className="mb-8 relative z-10">
          <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
          <p className="text-gray-400">123 Example Street, City, Country</p>
        </div>
        <div className="mb-8 relative z-10">
          <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
          <ul className="text-gray-400">
            <li>
              <a href="/tos">Terms of Service</a>
            </li>
            <li>
              <a href="/legal">Legal</a>
            </li>
            <li>
              <a href="/sitemap">Site Map</a>
            </li>
          </ul>
        </div>
        <div className="relative z-10">
          <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-white hover:text-secondary-500">
              <FaInstagram className="text-2xl" />
            </a>
            <a href="#" className="text-white hover:text-secondary-500">
              <FaTwitter className="text-2xl" />
            </a>
            <a href="#" className="text-white hover:text-secondary-500">
              <FaFacebook className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; {new Date().getFullYear()} WebOpMatics - All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
