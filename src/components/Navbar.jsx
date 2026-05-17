import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../components/Navbar.css'; // Assuming you have some base styling here

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar relative bg-gradient-to-r from-blue-600 to-purple-700 text-white shadow-lg p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className="text-3xl font-extrabold tracking-tight">
          Raagneet
        </NavLink>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              )}
            </svg>
          </button>
        </div>

        {/* Desktop menu */}
        <div className={`md:flex items-center space-x-8 ${isOpen ? 'flex flex-col absolute top-full left-0 w-full bg-blue-600 md:relative md:flex-row md:bg-transparent md:w-auto p-4 md:p-0' : 'hidden'}`}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav-link text-lg font-medium hover:text-blue-200 transition duration-300 ${isActive ? 'text-blue-100 border-b-2 border-blue-100' : ''}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `nav-link text-lg font-medium hover:text-blue-200 transition duration-300 ${isActive ? 'text-blue-100 border-b-2 border-blue-100' : ''}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `nav-link text-lg font-medium hover:text-blue-200 transition duration-300 ${isActive ? 'text-blue-100 border-b-2 border-blue-100' : ''}`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              `nav-link text-lg font-medium hover:text-blue-200 transition duration-300 ${isActive ? 'text-blue-100 border-b-2 border-blue-100' : ''}`
            }
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `nav-link text-lg font-medium hover:text-blue-200 transition duration-300 ${isActive ? 'text-blue-100 border-b-2 border-blue-100' : ''}`
            }
          >
            Contact
          </NavLink>
          <button className="bg-white text-blue-700 px-6 py-2 rounded-full font-bold text-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;