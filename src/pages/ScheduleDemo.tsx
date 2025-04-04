import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { toast } from "sonner";

const ScheduleDemo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessName: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(!formData.name || !formData.email || !formData.businessName) {
        toast.error("Please fill in all required fields.", {
            style: {
                color: "red",
                border: "1px solid gray",
            }
        });
        return;
    }
    console.log("Demo Request Submitted:", formData);

    toast.success("Your demo request has been submitted! We will get back to you shortly.", {
        style: {
            color: "green",
            border: "1px solid gray",
        }
    });
    setFormData({
        name: "",
        email: "",
        businessName: "",
        message: "",
        });

  };

  return (
    <div>
        <Navbar/>
        <section className="min-h-screen flex items-center justify-center bg-vesipay-700 text-white px-6">
          <div className="container mx-auto flex flex-col md:flex-row  md:items-start gap-12 items-center justify-center">

            <div className="md:w-[40%]">
              <h2 className="text-4xl font-bold mb-4">Schedule a Demo</h2>
              <p className="text-vesipay-100 text-lg mb-6 md:w-[90%]">
                Discover how Vesipay can transform your global payments. Schedule a personalized demo with our team today.
              </p>
              <ul className="text-vesipay-100 space-y-2">
                <li>✅ Streamline cross-border transactions</li>
                <li>✅ Improve payment processing efficiency</li>
                <li>✅ Get expert insights tailored to your business</li>
              </ul>
            </div>
    
            <div className="md:w-[40%] bg-vesipay-800 p-8 rounded-xl shadow-lg w-full">
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 text-black rounded-md focus:outline-none"
                 
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 text-black rounded-md focus:outline-none"
      
                />
                <input
                  type="text"
                  name="businessName"
                  placeholder="Business Name"
                  value={formData.businessName}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 text-black rounded-md focus:outline-none"
                
                />
                <textarea
                  name="message"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 text-black rounded-md focus:outline-none"
                  rows={4}
                />
                <Button type="submit" className="w-full bg-white text-vesipay-700 font-medium hover:bg-vesipay-600">
                  Book a Demo
                </Button>
              </form>
            </div>
          </div>
        </section>
        <Footer/>
    </div>
  );
};

export default ScheduleDemo;
