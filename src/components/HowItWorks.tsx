
import React from "react";
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Sign Up",
      description: "Create your Vesipay account and complete the verification process.",
    },
    {
      number: "02",
      title: "Connect Your Systems",
      description: "Integrate Vesipay with your existing business systems using our API or dashboard.",
    },
    {
      number: "03",
      title: "Configure Payment Options",
      description: "Set up your preferred payment methods and currencies for your business.",
    },
    {
      number: "04",
      title: "Start Transacting Globally",
      description: "Begin accepting and sending payments worldwide with competitive rates.",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How Vesipay Works
          </h2>
          <p className="text-xl text-gray-700">
            Getting started with global payments is simple and straightforward.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Vertical line for desktop */}
            <div className="hidden md:block absolute left-[50%] transform -translate-x-1/2 top-0 bottom-0 w-px bg-vesipay-200"></div>
            
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`flex flex-col md:flex-row mb-12 last:mb-0 items-start relative animate-fade-in`}
                style={{ animationDelay: `${0.2 * (index + 1)}s` }}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:order-2 md:pl-16'}`}>
                  <div className={`md:flex ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <div>
                      <div className="bg-vesipay-600 text-white text-sm font-bold py-1 px-3 rounded-full inline-block mb-3">
                        {step.number}
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </div>
                
                {/* Circle point for timeline */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-vesipay-600 rounded-full border-4 border-white"></div>
                
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:order-2' : 'md:pr-16'}`}>
                  {/* Empty div to maintain layout */}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" className="bg-vesipay-600 hover:bg-vesipay-700 text-white px-8">
            Start Your Integration
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
