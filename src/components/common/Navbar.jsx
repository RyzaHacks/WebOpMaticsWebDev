import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  // Function to determine active link class
  const getNavLinkClass = (path) => {
    return location.pathname === path
      ? 'nav-link font-semibold border-b-4 border-secondary-500' // Active link class
      : 'nav-link';
  };

  // Navigation links data
  const navLinks = [
    { name: 'Company', path: '/company' },
    { name: 'Services', path: '/services' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Careers', path: '/careers' },
  ];

  return (
    <nav className="navbar">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className="brand-logo">
          WebOpMatics
        </NavLink>
        <div className="flex">
          {navLinks.map((link) => (
            <NavLink
              to={link.path}
              className={getNavLinkClass(link.path)}
              key={link.name}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
