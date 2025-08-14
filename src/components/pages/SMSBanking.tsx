import React from 'react';
import sms_banking_image from "@assets/images/sms_bank.jpg";
import { FaCheckCircle, FaSms } from 'react-icons/fa';

interface SMSBankingFeature {
  description: string;
  features: string[];
  image: string;
}



const SMSBanking: React.FC = () => {
  const smsBankingData: Record<string, SMSBankingFeature> = {
    "SMS Banking": {
      description: `Allows you to access and manage your accounts directly from your mobile phones via text messages.`,
      features: [
        "No internet required",
        "24/7 account access",
        "Check balance and mini-statements",
        "Block cards if lost",
        "Available on all mobile devices"
      ],
      image: sms_banking_image
    }
  };

 return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl shadow-lg border border-gray-200" style={{marginTop: "40px"}}>
      {Object.entries(smsBankingData).map(([title, data]) => (
        <div key={title} className="flex flex-col gap-8 items-center">
          {/* Image Section - now on top */}
          <div className="w-full flex justify-center">
            <div className="overflow-hidden rounded-xl shadow-md border border-gray-300 max-w-md">
              <img 
                src={data.image} 
                alt="SMS Banking Illustration" 
                className="w-full h-auto object-cover transition-transform hover:scale-105 duration-300"
              />
            </div>
          </div>
          
          {/* Content Section */}
          <div className="w-full">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <FaSms className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed text-center max-w-2xl mx-auto">{data.description}</p>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3 text-center">Features:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-3xl mx-auto">
                {data.features.map((feature, index) => (
                  <li key={index} className="flex items-start bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                    <FaCheckCircle className="flex-shrink-0 h-5 w-5 text-green-500 mr-2 mt-0.5" />
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

export default SMSBanking;