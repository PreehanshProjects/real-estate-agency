import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="flex items-center px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex-shrink-0 text-xl font-bold text-blue-600 cursor-pointer">
          <Link to="/">RealEstateCo</Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 justify-center space-x-8 relative">
          <Link to="/" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>

          <Link to="/about" className="text-gray-700 hover:text-blue-600">
            About the Agency
          </Link>

          {/* Dropdown wrapper */}
          <div className="relative group">
            <button
              className="flex items-center gap-1 text-gray-700 hover:text-blue-600 focus:outline-none"
              type="button"
            >
              All Properties
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown menu - show on hover */}
            <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity z-10">
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                For Sale
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                For Rent
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                New Listings
              </a>
            </div>
          </div>

          <Link to="/contact" className="text-gray-700 hover:text-blue-600">
            Contact Us
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex-shrink-0 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 ml-auto"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            // Close icon
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger icon
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <Link
            to="/"
            className="block px-6 py-3 text-gray-700 hover:bg-gray-100"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-6 py-3 text-gray-700 hover:bg-gray-100"
            onClick={() => setMenuOpen(false)}
          >
            About the Agency
          </Link>

          {/* Dropdown not functional here — optional: keep it or simplify */}
          <details className="group px-6 py-3 border-t border-gray-200">
            <summary className="flex justify-between items-center cursor-pointer text-gray-700 hover:bg-gray-100">
              All Properties
              <svg
                className="w-4 h-4 transition-transform duration-200 group-open:rotate-180"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>

            <div className="mt-2 flex flex-col space-y-2">
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                For Sale
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                For Rent
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                New Listings
              </a>
            </div>
          </details>

          <Link
            to="/contact"
            className="block px-6 py-3 text-gray-700 hover:bg-gray-100"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>
        </nav>
      )}
    </header>
  );
}
