import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex items-center"
            >
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-900 flex items-center justify-center text-white font-bold text-lg mr-2">
                CI
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                CitizenIn
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <ul className="flex items-center space-x-8">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/features" 
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/faq" 
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all"
                >
                  FAQs
                </Link>
              </li>
            </ul>
            <Link 
              to="/get-started" 
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-md font-medium hover:shadow-lg transition-all duration-200 hover:scale-105"
            >
              Sign In/ Up
            </Link>
          </nav>

          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {mobileMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-700 hover:text-blue-600 block font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/features" 
                  className="text-gray-700 hover:text-blue-600 block font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Features
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-700 hover:text-blue-600 block font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/faq" 
                  className="text-gray-700 hover:text-blue-600 block font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link 
                  to="/get-started" 
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-md font-medium inline-block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign In
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;