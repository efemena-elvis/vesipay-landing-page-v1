
import React from "react";
import { Instagram, Twitter, Linkedin } from "lucide-react";
import vesipayLogo from "@/assets/vesipayLogo.png"; 

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex justify-between items-center h-[80px] ">
        <div className="mb-16">
            <a href="/" className="">
              <img src={vesipayLogo} alt="Vesipay Logo" className="w-64" /> </a>
          </div>
          <div>
  
            <p className="mb-4 text-sm">
              Simplifying cross-border payment solutions for businesses worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
         
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0"> &copy; {year} Vesipay. All rights reserved.</p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
