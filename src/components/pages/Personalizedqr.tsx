import React from 'react';
import personalized_qr_code from "@assets/images/qr-in-personalized_cropped.png";
import { FaCheckCircle, FaQrcode } from 'react-icons/fa';

interface QRFeature {
  description: string;
  features: string[];
  image: string;
}

const PersonalizedQRCode: React.FC = () => {
  const qrData: Record<string, QRFeature> = {
    "Personalized QR Code": {
      description: `Avail personalized QR Code with The Nasik Road Deolali Vyapari Sahakari Bank with Saving, Current and CC Accounts. Fast Secure way of receiving digital payment.`,
      features: [
        "Instant payment collection",
        "Works with all UPI apps",
        "No additional hardware needed",
        "Secure transactions with encryption"
      ],
      image: personalized_qr_code
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 rounded-xl shadow-lg">
      {Object.entries(qrData).map(([title, data]) => (
        <div key={title} className="flex flex-col gap-8 items-center">
          {/* QR Code Image - now on top */}
          <div className="w-full flex justify-center">
            <div className="p-4 ">
              <img 
                src={data.image} 
                alt="Personalized QR Code" 
                className="w-full object-cover rounded-lg"
              />
            </div>
          </div>
          
          {/* Content Section */}
          <div className="w-full">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="p-2 bg-indigo-100 rounded-lg">
                <FaQrcode className="h-6 w-6 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-bold text-indigo-800">{title}</h2>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed text-center max-w-2xl mx-auto">{data.description}</p>
            
            <h3 className="text-lg font-semibold text-indigo-700 mb-3 text-center">Key Benefits:</h3>
            <ul className="space-y-3 mb-6 max-w-2xl mx-auto">
              {data.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 mr-3">
                    <FaCheckCircle className="h-6 w-6 text-indigo-500" />
                  </div>
                  <span className="text-gray-800">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PersonalizedQRCode;