import React from 'react';
import UPI_Instant from "@assets/images/UPI_Instant.png";


interface UPIFeature {
  description: string;
  features: string[];
  image: string; // Assuming image is a string path, adjust if using different type
}

const UPI: React.FC = () => {
  const upiData: Record<string, UPIFeature> = {
    "UPI Instant": {
      description: `Unified Payments Interface (UPI) is a real-time payment system developed by the National Payments Corporation of India (NPCI).`,
      features: [
        "Instant transfers anytime",
        "Single app for all banks",
        "Safe 2-factor authentication",
        "No need for account details",
        "Works on all UPI apps"
      ],
      image: UPI_Instant
    }
  };

return (
    <div className="max-w-4xl mx-auto p-8 rounded-2xl shadow-xl" style={{marginTop: "40px"}}>
      {Object.entries(upiData).map(([key, value]) => (
        <div key={key} className="flex flex-col gap-8">
          {/* Image section - now on top */}
          <div className="w-full flex justify-center">
            <div className=" h-90 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <img 
                src={value.image} 
                alt={key} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
              />
            </div>
          </div>
          
          {/* Content section */}
          <div className="w-full">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">{key}</h2>
            <p className="text-gray-600 mb-6 text-center leading-relaxed">{value.description}</p>
            
            <h3 className="text-xl font-semibold text-gray-700 mb-4 text-center">Features:</h3>
            <div className="grid gap-3">
              {value.features.map((feature, index) => (
                <div key={index} className="flex items-center bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UPI;