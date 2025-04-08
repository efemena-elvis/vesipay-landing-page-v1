import React from "react";
import { Building2, User } from "lucide-react";
// import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-gray-900 lg:leading-[82px] mb-6 w-4/5 mx-auto ">
            Global Payments Made{" "}
            <span className="text-vesipay-600">Simple</span>
          </h1>
          <p className="text-xl leading-[30px] text-gray-500 w-[90%] mx-auto">
            Whether you're a business expanding globally or sending money to
            loved ones abroad, Vesipay makes cross-border payments seamless and
            secure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Business Card */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 relative overflow-hidden">
            <div className="mb-4">
              <Building2 className="h-8 w-8 text-vesipay-600" />
            </div>
            <h2 className="text-2xl font-semibold mb-3">For Businesses</h2>
            <p className="text-gray-600 mb-6">
              Setup cross-border payments, manage international transactions,
              and expand your global reach.
            </p>
            {/* <Button className="w-full bg-vesipay-600 hover:bg-vesipay-700">
              Business Solutions <ArrowRight className="ml-2 h-5 w-5" />
            </Button> */}

            {/* Business illustration */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 opacity-10">
              <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-vesipay-600"
              >
                <path d="M0,0 L200,0 L200,160 L0,160 L0,0 Z M20,20 L180,20 L180,140 L20,140 L20,20 Z M50,40 L150,40 L150,60 L50,60 L50,40 Z M50,80 L150,80 L150,100 L50,100 L50,80 Z M50,120 L150,120 L150,140 L50,140 L50,120 Z" />
              </svg>
            </div>
          </div>

          {/* Individual Card */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 relative overflow-hidden">
            <div className="mb-4">
              <User className="h-8 w-8 text-vesipay-600" />
            </div>
            <h2 className="text-2xl font-semibold mb-3">For Individuals</h2>
            <p className="text-gray-600 mb-6">
              Send money to friends and family in Zambia, UK, USA, and beyond
              with great rates.
            </p>
            {/* <Button className="w-full bg-vesipay-600 hover:bg-vesipay-700">
              Send Money Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button> */}

            {/* Individual illustration */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 opacity-10">
              <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-vesipay-600"
              >
                <path d="M100,0 C155.228,0 200,44.772 200,100 C200,155.228 155.228,200 100,200 C44.772,200 0,155.228 0,100 C0,44.772 44.772,0 100,0 Z M100,50 C72.386,50 50,72.386 50,100 C50,127.614 72.386,150 100,150 C127.614,150 150,127.614 150,100 C150,72.386 127.614,50 100,50 Z" />
                <path d="M100,20 C110.457,20 120,29.543 120,40 C120,50.457 110.457,60 100,60 C89.543,60 80,50.457 80,40 C80,29.543 89.543,20 100,20 Z" />
                <path d="M60,120 L140,120 L140,180 C140,190.457 130.457,200 120,200 L80,200 C69.543,200 60,190.457 60,180 L60,120 Z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Global illustration */}
        <div className="mt-20 flex justify-center animate-fade-in">
          <svg
            viewBox="0 0 800 400"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full max-w-3xl"
          >
            <defs>
              <linearGradient
                id="globeGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.6" />
              </linearGradient>
              <linearGradient
                id="pathGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#0284c7" stopOpacity="0.9" />
              </linearGradient>
            </defs>

            {/* Globe */}
            <ellipse
              cx="400"
              cy="200"
              rx="200"
              ry="200"
              fill="url(#globeGradient)"
              opacity="0.3"
            />

            {/* Grid lines */}
            <g stroke="#0284c7" strokeWidth="1" opacity="0.4">
              {/* Horizontal lines */}
              <path d="M200,200 h400" />
              <path d="M230,120 h340" />
              <path d="M230,280 h340" />
              <path d="M400,40 v320" />
              <path d="M300,60 v280" />
              <path d="M500,60 v280" />

              {/* Elliptical paths */}
              <ellipse cx="400" cy="200" rx="200" ry="200" fill="none" />
              <ellipse cx="400" cy="200" rx="200" ry="100" fill="none" />
              <ellipse cx="400" cy="200" rx="100" ry="200" fill="none" />
            </g>

            {/* Connection paths */}
            <g
              stroke="url(#pathGradient)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="5,5"
            >
              <path d="M300,150 C350,100 450,100 500,150" />
              <path d="M250,200 C300,250 400,250 450,200" />
              <path d="M350,250 C400,180 450,180 500,250" />
            </g>

            {/* Location dots */}
            <circle cx="300" cy="150" r="6" fill="#0ea5e9" />
            <circle cx="500" cy="150" r="6" fill="#0ea5e9" />
            <circle cx="250" cy="200" r="6" fill="#0ea5e9" />
            <circle cx="450" cy="200" r="6" fill="#0ea5e9" />
            <circle cx="350" cy="250" r="6" fill="#0ea5e9" />
            <circle cx="500" cy="250" r="6" fill="#0ea5e9" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
