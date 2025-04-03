
import React from "react";
import FeatureCard from "./FeatureCard";
import { Shield, Globe, Send, CreditCard, Wallet, Users } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Send,
      title: "Fast Cross-Border Transfers",
      description:
        "Send money internationally with speed and reliability, ensuring your recipients get funds when they need them.",
    },
    {
      icon: CreditCard,
      title: "Secure Payment Collection",
      description:
        "Collect payments from customers around the world with multiple payment methods and robust security.",
    },
    {
      icon: Shield,
      title: "Advanced Security",
      description:
        "Enterprise-grade security protocols protect all transactions and sensitive financial data.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description:
        "Connect with businesses and customers in over 100 countries with local payment options.",
    },
    {
      icon: Wallet,
      title: "Competitive Rates",
      description:
        "Save on international transfers with transparent pricing and competitive exchange rates.",
    },
    {
      icon: Users,
      title: "Easy Integration",
      description:
        "Seamlessly integrate with your existing systems using our developer-friendly APIs.",
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Global Commerce
          </h2>
          <p className="text-xl text-gray-700">
            Vesipay provides the tools businesses need to thrive in the global marketplace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
