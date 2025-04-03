
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white py-4 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold text-vesipay-700">Vesi<span className="text-accent">pay</span></span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#business" className="text-gray-700 hover:text-vesipay-600 transition-colors">For Business</a>
            <a href="#individual" className="text-gray-700 hover:text-vesipay-600 transition-colors">For Individual</a>
            <a href="#contact" className="text-gray-700 hover:text-vesipay-600 transition-colors">Contact</a>
            <Button className="bg-vesipay-600 hover:bg-vesipay-700 text-white">Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-2 border-t border-gray-200 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a href="#business" className="text-gray-700 hover:text-vesipay-600 py-2 transition-colors" onClick={toggleMenu}>For Business</a>
              <a href="#individual" className="text-gray-700 hover:text-vesipay-600 py-2 transition-colors" onClick={toggleMenu}>For Individual</a>
              <a href="#contact" className="text-gray-700 hover:text-vesipay-600 py-2 transition-colors" onClick={toggleMenu}>Contact</a>
              <Button className="bg-vesipay-600 hover:bg-vesipay-700 text-white w-full">Get Started</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
