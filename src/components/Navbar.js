import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">CyberAware</Link>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:text-blue-300">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-300">About Us</Link></li>
          <li><Link to="/blogs" className="hover:text-blue-300">Blogs</Link></li>
          <li><Link to="/game" className="hover:text-blue-300">Game</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
