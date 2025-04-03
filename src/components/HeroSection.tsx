
import React from "react";
import { ArrowRight, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Simplifying <span className="text-vesipay-600">Cross-Border</span> Payments
            </h1>
            <p className="mt-6 text-xl text-gray-700 max-w-xl">
              Secure, fast, and efficient payment solutions for businesses sending and receiving money globally.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-vesipay-600 hover:bg-vesipay-700 text-white px-8">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-vesipay-600 text-vesipay-600 hover:bg-vesipay-50">
                Contact Sales
              </Button>
            </div>
            <div className="mt-8 flex items-center text-sm text-gray-600">
              <Globe className="mr-2 h-4 w-4 text-vesipay-500" />
              <span>Supporting payments in 100+ countries worldwide</span>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              <div className="absolute -z-10 rounded-full w-72 h-72 bg-vesipay-100 blur-3xl opacity-50 -top-10 -right-10"></div>
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 w-full max-w-md">
                <div className="space-y-6">
                  <div className="bg-vesipay-50 p-4 rounded-lg">
                    <h3 className="font-medium text-vesipay-800">Global Transfer</h3>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-sm text-gray-500">From</span>
                      <span className="text-sm font-medium">USA</span>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-sm text-gray-500">To</span>
                      <span className="text-sm font-medium">Europe</span>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-sm text-gray-500">Amount</span>
                      <span className="text-sm font-medium">$10,000.00</span>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-sm text-gray-500">Fee</span>
                      <span className="text-sm font-medium text-green-600">$0</span>
                    </div>
                    <div className="mt-4 pt-3 border-t border-gray-200 flex items-center justify-between">
                      <span className="font-medium">Recipient gets</span>
                      <span className="font-bold text-lg">€9,320.00</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs font-medium flex items-center">
                      <span className="block w-2 h-2 rounded-full bg-green-500 mr-1"></span>
                      Transfer complete
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
