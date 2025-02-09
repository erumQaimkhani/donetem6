
import React from "react";
import { Truck, RotateCw, ShieldCheck } from "lucide-react"; // Corrected icon imports

const Pay: React.FC = () => {
  // Data for the features
  const features = [
    {
      icon: <Truck className="w-8 h-8 text-black" />,
      title: "Free Delivery",
      description: "For all orders over $50, consectetur adipiscing elit.",
    },
    {
      icon: <RotateCw className="w-8 h-8 text-black" />,
      title: "90 Days Return",
      description: "If goods have problems, consectetur adipiscing elit.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-black" />,
      title: "Secure Payment",
      description: "100% secure payment, consectetur adipiscing elit.",
    },
  ];

  return (
    <div className="bg-[#faf4f4] py-12">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start gap-8 px-6">
        {features.map((feature, index) => (
          <div key={index} className="text-left max-w-sm flex flex-col items-start gap-4">
            <div className="p-3 bg-white rounded-full shadow-md">
              {feature.icon}
            </div>
            <h2 className="text-2xl lg:text-3xl font-medium text-black">
              {feature.title}
            </h2>
            <p className="text-gray-500 text-lg">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pay;