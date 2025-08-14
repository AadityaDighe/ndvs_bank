import React from 'react';
import mobile_banking from "@assets/images/mobile_banking.png";
import { FaCheckCircle, FaMobileAlt } from 'react-icons/fa';

interface MobileBankingFeature {
  description: string;
  features: string[];
  image: string;
}

interface MobileBankingProps {
  className?: string;
}

const MobileBanking: React.FC<MobileBankingProps> = ({ className = '' }) => {
  const mobileBankingData: Record<string, MobileBankingFeature> = {
    "Mobile Banking": {
      description: `Fund Transfer - Transfer funds between your own accounts within the bank. Make payments to other bank accounts.`,
      features: [
        "Instant transfers 24/7",
        "Bill payments and recharges",
        "Account management",
        "Secure login with MPIN",
        "Beneficiary management"
      ],
      image: mobile_banking
    }
  };

  return (
    <div className={`max-w-6xl mx-auto p-8 bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl shadow-xl border border-gray-200/50 ${className}`} style={{marginTop: "40px"}}>
      {Object.entries(mobileBankingData).map(([title, data]) => (
        <div key={title} className="flex flex-col gap-10 items-center">
          {/* Mobile App Showcase - now on top */}

            <div className="w-full flex justify-center">
                <div className=" h-90 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <img 
                    src={data.image} 
                    alt="Mobile Banking App" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                />
                </div>
            </div>
          
          {/* Content Section */}
          <div className="w-full">
            <div className="mb-8 text-center">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="p-3 bg-blue-100 rounded-xl shadow-sm">
                  <FaMobileAlt className="h-7 w-7 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
              </div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed max-w-2xl mx-auto">{data.description}</p>
            </div>
            
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-gray-800 mb-5 text-center">Key Features:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                {data.features.map((feature, index) => (
                  <div key={index} className="bg-white/90 p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 p-2 bg-green-100 rounded-lg">
                        <FaCheckCircle className="h-5 w-5 text-green-600" />
                      </div>
                      <span className="text-gray-800 font-medium">{feature}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MobileBanking;