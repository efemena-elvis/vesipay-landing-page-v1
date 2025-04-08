import React from "react";
import FeatureCard from "./FeatureCard";
import {
  Shield,
  Globe,
  Send,
  CreditCard,
  Wallet,
  Users,
  Building2,
  User,
} from "lucide-react";

const FeaturesSection = () => {
  const businessFeatures = [
    {
      icon: Building2,
      title: "Cross-Border Payment Setup",
      description:
        "Easily set up and manage international payment infrastructure for your business.",
    },
    {
      icon: CreditCard,
      title: "Secure Payment Collection",
      description:
        "Collect payments from customers worldwide with multiple payment methods.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Bank-grade security protocols protect all your business transactions.",
    },
  ];

  const individualFeatures = [
    {
      icon: Send,
      title: "Global Money Transfer",
      description:
        "Send money to friends and family in Zambia, UK, USA and other countries instantly.",
    },
    {
      icon: Wallet,
      title: "Competitive Rates",
      description:
        "Get the best exchange rates for multiple currencies including USD, GBP, and ZMW.",
    },
    {
      icon: User,
      title: "Easy to Use",
      description: "Simple and quick money transfers with just a few clicks.",
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-24">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Solutions for Everyone
          </h2>
        </div>

        {/* Business Features */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-gray-800">
            For Businesses
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessFeatures.map((feature, index) => (
              <div
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Individual Features */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-gray-800">
            For Individuals
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {individualFeatures.map((feature, index) => (
              <div
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
