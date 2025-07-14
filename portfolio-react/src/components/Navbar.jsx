import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = (
    <>
      <a href="#home" className="hover:text-gray-400 block md:inline">Home</a>
      <a href="#about" className="hover:text-gray-400 block md:inline">About Me</a>
      <a href="#skills" className="hover:text-gray-400 block md:inline">Skills</a>
      <a href="#projects" className="hover:text-gray-400 block md:inline">Projects</a>
      <a href="#contact" className="hover:text-gray-400 block md:inline">Contact</a>
    </>
  );

  return (
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24 fixed w-full z-50 shadow-md">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Soorya</div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks}
          <a href="#contact">
            <button className="bg-gradient-to-r from-blue-500 to-purple-800 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full cursor-pointer">
              Connect Me
            </button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-3xl">
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black px-8 pb-4 space-y-4">
          {navLinks}
          <a href="#contact">
            <button className="w-full bg-gradient-to-r from-blue-500 to-purple-800 text-white px-4 py-2 rounded-full">
              Connect Me
            </button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
