
import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

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
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 w-[400px]">
                      <div className="p-4 hover:bg-slate-50 rounded-lg">
                        <h4 className="text-sm font-semibold mb-1">For Businesses</h4>
                        <p className="text-sm text-gray-500">Setup and manage cross-border payments for your business</p>
                      </div>
                      <div className="p-4 hover:bg-slate-50 rounded-lg">
                        <h4 className="text-sm font-semibold mb-1">For Individuals</h4>
                        <p className="text-sm text-gray-500">Send money to friends and family worldwide</p>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <a href="#features" className="text-gray-700 hover:text-vesipay-600 transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-vesipay-600 transition-colors">How it Works</a>
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
              <div className="py-2">
                <div className="font-medium mb-2">Products</div>
                <div className="pl-4 space-y-2">
                  <a href="#business" className="block text-gray-600 hover:text-vesipay-600">For Businesses</a>
                  <a href="#individual" className="block text-gray-600 hover:text-vesipay-600">For Individuals</a>
                </div>
              </div>
              <a href="#features" className="text-gray-700 hover:text-vesipay-600 py-2 transition-colors" onClick={toggleMenu}>Features</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-vesipay-600 py-2 transition-colors" onClick={toggleMenu}>How it Works</a>
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
