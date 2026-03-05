import { useState } from 'react';
import { Link } from "react-router-dom";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold text-blue-500"><a href="/">Gouravgilhare.online</a></h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="/#about" className="hover:text-blue-500 transition">
            About
          </a>
          <a href="/#skills" className="hover:text-blue-500 transition">
            Skills
          </a>
          <a href="/#projects" className="hover:text-blue-500 transition">
            Projects
          </a>
          <a href="/#contact" className="hover:text-blue-500 transition">
            Contact
          </a>

          {/* Login Button */}
          <a
            href="/login"
            className="border-blue-500 border-2  px-5 py-2 rounded-lg font-semibold hover:bg-blue-600 transition duration-300 text-white" 
          >
            Login
        </a>
          {/* Resume Button */}
          <a
            href="/docs/Gourav_Gilhare_SDE_Intern_Resume.pdf"
            download
            className="bg-blue-500 px-5 py-2 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
          >
            Resume
          </a>
        {/* <Link
            to="/login"
            className="bg-blue-500 px-5 py-2 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
          >
            Login
          </Link> */}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 px-6 py-4 space-y-4">
          <a href="#about" className="block hover:text-blue-500">
            About
          </a>
          <a href="#skills" className="block hover:text-blue-500">
            Skills
          </a>
          <a href="#projects" className="block hover:text-blue-500">
            Projects
          </a>
          <a href="#contact" className="block hover:text-blue-500">
            Contact
          </a>

          {/* Mobile Resume Button */}
          <a
            href="/resume.pdf"
            download
            className="block bg-blue-500 text-center py-2 rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
}
