import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaBuilding, FaQuestion, FaBriefcase, FaServicestack } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="py-4 font-body" style={{ background: 'linear-gradient(to right, #1A202C, #2D3748)' }}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl font-extrabold flex items-center" style={{ color: '#FFFFFF' }}>
          <FaHome className="mr-2" /> WebOpMatics
        </Link>
        <div className="flex space-x-10">
          <NavLink to="/company" isActive={location.pathname === '/company'}><FaBuilding className="mr-2" /> Company</NavLink>
          <NavLink to="/services" isActive={location.pathname === '/services'}><FaServicestack className="mr-2" /> Services</NavLink>
          <NavLink to="/faq" isActive={location.pathname === '/faq'}><FaQuestion className="mr-2" /> FAQ</NavLink>
          <NavLink to="/careers" isActive={location.pathname === '/careers'}><FaBriefcase className="mr-2" /> Careers</NavLink>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, children, isActive }) => {
  return (
    <Link
      to={to}
      className={`text-lg transition-colors flex items-center ${isActive ? 'text-accent' : 'text-white'}`}
      style={{ color: isActive ? '#FF6347' : '#FFFFFF' }}
    >
      {children}
    </Link>
  );
};

export default Navbar;