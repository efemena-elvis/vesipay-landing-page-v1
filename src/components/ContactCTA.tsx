
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ContactCTA = () => {
  return (
    <section 
      id="contact" 
      className="py-16 md:py-24 bg-vesipay-700 text-white relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-vesipay-500 opacity-10"></div>
        <div className="absolute top-40 -left-20 w-80 h-80 rounded-full bg-vesipay-800 opacity-20"></div>
        <div className="absolute -bottom-40 right-20 w-96 h-96 rounded-full bg-vesipay-600 opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Global Payments?</h2>
          <p className="text-lg md:text-xl mb-8 text-vesipay-100">
            Join businesses worldwide that trust Vesipay for their cross-border payment needs.
            Our team is ready to help you implement the perfect solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white hover:bg-gray-100 text-vesipay-700 font-medium">
              Schedule a Demo
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-vesipay-600">
              Contact Sales <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
