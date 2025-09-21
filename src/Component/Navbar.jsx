import React, { useState } from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className="bg-[#252734] fixed top-0 left-0 w-full z-50">
        <nav className="md:w-[65%] mx-auto py-4 px-6 ">
          <div className="container mx-auto flex justify-between items-center">
            {/* Logo/Name */}
            <div className="flex items-center">
              <div className="text-white font-bold text-2xl flex items-center">
                <svg
                  className="w-8 h-8 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white" />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Sabbir Islam</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-white font-medium"
                    : "text-gray-300 hover:text-white transition duration-300"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-white font-medium"
                    : "text-gray-300 hover:text-white transition duration-300"
                }
              >
                About
              </NavLink>
              <NavLink
                to="/works"
                className={({ isActive }) =>
                  isActive
                    ? "text-white font-medium"
                    : "text-gray-300 hover:text-white transition duration-300"
                }
              >
                Works
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-white font-medium"
                    : "text-gray-300 hover:text-white transition duration-300"
                }
              >
                Contact
              </NavLink>
            </div>

            {/* Hire Me Button */}
            <div className="hidden md:block">
              <NavLink
                to="/contact"
                className="bg-transparent hover:bg-white/10 text-white px-6 py-2 rounded-full border border-gray-600 flex items-center transition duration-300"
              >
                Hire Me
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </NavLink>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMobileMenu}
                className="text-white focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Side Drawer */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`fixed top-0 left-0 w-3/4 h-full bg-[#1a1c25] transform transition-transform duration-300 ease-in-out z-50 ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-5 flex justify-end">
            <button
              onClick={closeMobileMenu}
              className="p-2 rounded-full bg-gray-700/50 text-white focus:outline-none"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div className="flex flex-col px-8 py-6 space-y-6 text-lg uppercase font-medium">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-white" : "text-gray-300"
              }
              onClick={closeMobileMenu}
            >
              <div className="flex justify-between items-center">
                <span>Home</span>
              </div>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-white" : "text-gray-300"
              }
              onClick={closeMobileMenu}
            >
              <div className="flex justify-between items-center">
                <span>About</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </div>
            </NavLink>
            <NavLink
              to="/works"
              className={({ isActive }) =>
                isActive ? "text-white" : "text-gray-300"
              }
              onClick={closeMobileMenu}
            >
              <div className="flex justify-between items-center">
                <span>Works</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </div>
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-white" : "text-gray-300"
              }
              onClick={closeMobileMenu}
            >
              <div className="flex justify-between items-center">
                <span>Contact</span>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
