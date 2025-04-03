
import React from "react";
import { ArrowRight, Building2, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Global Payments Made <span className="text-vesipay-600">Simple</span>
          </h1>
          <p className="text-xl text-gray-700">
            Whether you're a business expanding globally or sending money to loved ones abroad,
            Vesipay makes cross-border payments seamless and secure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Business Card */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <div className="mb-4">
              <Building2 className="h-8 w-8 text-vesipay-600" />
            </div>
            <h2 className="text-2xl font-semibold mb-3">For Businesses</h2>
            <p className="text-gray-600 mb-6">
              Setup cross-border payments, manage international transactions, and expand your global reach.
            </p>
            <Button className="w-full bg-vesipay-600 hover:bg-vesipay-700">
              Business Solutions <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Individual Card */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <div className="mb-4">
              <User className="h-8 w-8 text-vesipay-600" />
            </div>
            <h2 className="text-2xl font-semibold mb-3">For Individuals</h2>
            <p className="text-gray-600 mb-6">
              Send money to friends and family in Zambia, UK, USA, and beyond with great rates.
            </p>
            <Button className="w-full bg-vesipay-600 hover:bg-vesipay-700">
              Send Money Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
