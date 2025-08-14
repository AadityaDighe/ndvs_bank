import React from 'react';
import atm_services from "@assets/images/atm_services.png";
import { FaCheckCircle, FaCreditCard } from 'react-icons/fa';

interface ATMFeature {
  description: string;
  features: string[];
  image: string;
}

interface ATMServicesProps {
  className?: string;
}

const ATM: React.FC<ATMServicesProps> = ({ className = '' }) => {
  const atmData: Record<string, ATMFeature> = {
    "ATM Services": {
      description: `Withdraw or deposit cash at any NDVS Bank ATMs. The Rupay ATM card can be used at any Rupay Enabled ATM in India.`,
      features: [
        "24/7 cash access",
        "Wide network of ATMs",
        "Secure PIN-based transactions",
        "Mini-statements",
        "Fund transfer facility"
      ],
      image: atm_services
    }
  };

  return (
    <div className={`max-w-5xl mx-auto p-8 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl shadow-lg border border-gray-100 overflow-hidden ${className}`} style={{marginTop: "40px"}}>
      {Object.entries(atmData).map(([title, data]) => (
        <div key={title} className="flex flex-col gap-8 items-center">
          {/* ATM Image Section - now on top */}
          <div className="w-full flex justify-center">
            <div className="relative overflow-hidden rounded-xl shadow-lg border-2 border-white max-w-md">
              <img 
                src={data.image} 
                alt="ATM Services" 
                className="w-full h-auto object-contain transition-all duration-500 hover:scale-105"
              />
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 h-20 w-20 bg-purple-400 rounded-full opacity-20"></div>
              <div className="absolute -top-4 -left-4 h-16 w-16 bg-blue-400 rounded-full opacity-20"></div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="w-full">
            <div className="mb-6 text-center">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <FaCreditCard className="h-6 w-6 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed max-w-2xl mx-auto">{data.description}</p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Key Features:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-3xl mx-auto">
                {data.features.map((feature, index) => (
                  <li key={index} className="flex items-start bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0 mr-3 mt-0.5">
                      <FaCheckCircle className="h-5 w-5 text-purple-500" />
                    </div>
                    <span className="text-gray-800">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ATM;