import React from "react";
import { Building2, User } from "lucide-react";
// import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const UseCases = () => {
  const businessUseCases = [
    {
      title: "Cross-Border Merchant Payments",
      description:
        "Enable your business to accept payments from international customers with real-time processing and competitive exchange rates.",
      icon: "💼",
    },
    {
      title: "Global Payroll Solutions",
      description:
        "Pay your international employees and contractors in their local currencies without the hassle of multiple banking relationships.",
      icon: "💰",
    },
  ];

  const individualUseCases = [
    {
      title: "Family Support",
      description:
        "Send money to family in Zambia quickly and securely, with lower fees than traditional money transfer services.",
      icon: "👨‍👩‍👧‍👦",
    },
    {
      title: "Education Payments",
      description:
        "Pay international tuition and education expenses directly from the UK or USA to institutions worldwide.",
      icon: "🎓",
    },
  ];

  return (
    <section id="use-cases" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How People Use Vesipay
          </h2>
          <p className="text-xl text-gray-700">
            Real solutions for businesses and individuals making global
            payments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Business Use Cases */}
          <div
            className="space-y-6 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="h-8 w-8 text-vesipay-600" />
              <h3 className="text-2xl font-semibold text-gray-900">
                For Businesses
              </h3>
            </div>

            <div className="relative">
              {/* Business illustration */}
              <div className="mb-8 relative h-64 bg-gradient-to-br from-blue-50 to-gray-100 rounded-lg overflow-hidden">
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 800 400"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      id="businessGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.1" />
                      <stop
                        offset="100%"
                        stopColor="#0284c7"
                        stopOpacity="0.3"
                      />
                    </linearGradient>
                  </defs>
                  <rect
                    width="100%"
                    height="100%"
                    fill="url(#businessGradient)"
                  />

                  {/* Business buildings */}
                  <g transform="translate(100, 100)">
                    <rect
                      x="50"
                      y="100"
                      width="100"
                      height="200"
                      fill="#0284c7"
                      opacity="0.7"
                    />
                    <rect
                      x="60"
                      y="120"
                      width="20"
                      height="20"
                      fill="white"
                      opacity="0.5"
                    />
                    <rect
                      x="90"
                      y="120"
                      width="20"
                      height="20"
                      fill="white"
                      opacity="0.5"
                    />
                    <rect
                      x="120"
                      y="120"
                      width="20"
                      height="20"
                      fill="white"
                      opacity="0.5"
                    />

                    <rect
                      x="60"
                      y="150"
                      width="20"
                      height="20"
                      fill="white"
                      opacity="0.5"
                    />
                    <rect
                      x="90"
                      y="150"
                      width="20"
                      height="20"
                      fill="white"
                      opacity="0.5"
                    />
                    <rect
                      x="120"
                      y="150"
                      width="20"
                      height="20"
                      fill="white"
                      opacity="0.5"
                    />

                    <rect
                      x="60"
                      y="180"
                      width="20"
                      height="20"
                      fill="white"
                      opacity="0.5"
                    />
                    <rect
                      x="90"
                      y="180"
                      width="20"
                      height="20"
                      fill="white"
                      opacity="0.5"
                    />
                    <rect
                      x="120"
                      y="180"
                      width="20"
                      height="20"
                      fill="white"
                      opacity="0.5"
                    />

                    <rect
                      x="200"
                      y="50"
                      width="150"
                      height="250"
                      fill="#075985"
                      opacity="0.8"
                    />
                    <rect
                      x="215"
                      y="70"
                      width="30"
                      height="30"
                      fill="white"
                      opacity="0.5"
                    />
                    <rect
                      x="260"
                      y="70"
                      width="30"
                      height="30"
                      fill="white"
                      opacity="0.5"
                    />
                    <rect
                      x="305"
                      y="70"
                      width="30"
                      height="30"
                      fill="white"
                      opacity="0.5"
                    />

                    <rect
                      x="215"
                      y="110"
                      width="30"
                      height="30"
                      fill="white"
                      opacity="0.5"
                    />
                    <rect
                      x="260"
                      y="110"
                      width="30"
                      height="30"
                      fill="white"
                      opacity="0.5"
                    />
                    <rect
                      x="305"
                      y="110"
                      width="30"
                      height="30"
                      fill="white"
                      opacity="0.5"
                    />

                    <rect
                      x="215"
                      y="150"
                      width="30"
                      height="30"
                      fill="white"
                      opacity="0.5"
                    />
                    <rect
                      x="260"
                      y="150"
                      width="30"
                      height="30"
                      fill="white"
                      opacity="0.5"
                    />
                    <rect
                      x="305"
                      y="150"
                      width="30"
                      height="30"
                      fill="white"
                      opacity="0.5"
                    />

                    <rect
                      x="215"
                      y="190"
                      width="30"
                      height="30"
                      fill="white"
                      opacity="0.5"
                    />
                    <rect
                      x="260"
                      y="190"
                      width="30"
                      height="30"
                      fill="white"
                      opacity="0.5"
                    />
                    <rect
                      x="305"
                      y="190"
                      width="30"
                      height="30"
                      fill="white"
                      opacity="0.5"
                    />

                    {/* Money transfer arrow */}
                    <path
                      d="M400,150 C500,100 550,200 600,150"
                      stroke="#0ea5e9"
                      strokeWidth="6"
                      fill="none"
                      strokeDasharray="10,5"
                    />
                    <polygon points="590,145 610,150 590,155" fill="#0ea5e9" />
                  </g>
                </svg>
              </div>
            </div>

            <div className="space-y-6">
              {businessUseCases.map((useCase, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border-l-4 border-l-vesipay-600"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">{useCase.icon}</div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">
                          {useCase.title}
                        </h4>
                        <p className="text-gray-600">{useCase.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            {/* 
            <Button className="w-full bg-vesipay-600 hover:bg-vesipay-700">
              Business Solutions <ArrowRight className="ml-2 h-5 w-5" />
            </Button> */}
          </div>

          {/* Individual Use Cases */}
          <div
            className="space-y-6 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <User className="h-8 w-8 text-vesipay-600" />
              <h3 className="text-2xl font-semibold text-gray-900">
                For Individuals
              </h3>
            </div>

            <div className="relative">
              {/* Individual illustration */}
              <div className="mb-8 relative h-64 bg-gradient-to-br from-blue-50 to-gray-100 rounded-lg overflow-hidden">
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 800 400"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      id="individualGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.1" />
                      <stop
                        offset="100%"
                        stopColor="#0284c7"
                        stopOpacity="0.3"
                      />
                    </linearGradient>
                  </defs>
                  <rect
                    width="100%"
                    height="100%"
                    fill="url(#individualGradient)"
                  />

                  {/* World map simplified */}
                  <path
                    d="M100,200 Q150,150 200,180 Q250,210 300,190 Q350,170 400,200 Q450,230 500,210 Q550,190 600,220 Q650,250 700,230"
                    stroke="#0284c7"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.4"
                  />

                  {/* UK representation */}
                  <circle
                    cx="250"
                    cy="150"
                    r="30"
                    fill="#0ea5e9"
                    opacity="0.3"
                  />
                  <text
                    x="250"
                    y="155"
                    textAnchor="middle"
                    fill="#075985"
                    fontSize="14"
                    fontWeight="bold"
                  >
                    UK
                  </text>

                  {/* US representation */}
                  <circle
                    cx="150"
                    cy="170"
                    r="40"
                    fill="#0ea5e9"
                    opacity="0.3"
                  />
                  <text
                    x="150"
                    y="175"
                    textAnchor="middle"
                    fill="#075985"
                    fontSize="14"
                    fontWeight="bold"
                  >
                    USA
                  </text>

                  {/* Zambia representation */}
                  <circle
                    cx="450"
                    cy="240"
                    r="30"
                    fill="#0ea5e9"
                    opacity="0.3"
                  />
                  <text
                    x="450"
                    y="245"
                    textAnchor="middle"
                    fill="#075985"
                    fontSize="14"
                    fontWeight="bold"
                  >
                    Zambia
                  </text>

                  {/* Money transfer arrows */}
                  <path
                    d="M180,170 C300,100 350,150 420,220"
                    stroke="#0ea5e9"
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray="10,5"
                  />
                  <polygon points="410,215 430,230 405,235" fill="#0ea5e9" />

                  <path
                    d="M280,150 C350,120 380,180 420,220"
                    stroke="#0ea5e9"
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray="10,5"
                  />
                  <polygon points="410,215 430,230 405,235" fill="#0ea5e9" />
                </svg>
              </div>
            </div>

            <div className="space-y-6">
              {individualUseCases.map((useCase, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border-l-4 border-l-vesipay-600"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">{useCase.icon}</div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">
                          {useCase.title}
                        </h4>
                        <p className="text-gray-600">{useCase.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* <Button className="w-full bg-vesipay-600 hover:bg-vesipay-700">
              Send Money Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
