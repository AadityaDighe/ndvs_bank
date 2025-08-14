import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { MdArrowBack } from "react-icons/md";
import personalized_qr_code from "@assets/images/personlized_qr_code_cropped.png";
import sms_banking_image from "@assets/images/sms_bank.jpg";
import atm_services from "@assets/images/atm_services.png";
import mobile_banking from "@assets/images/mobile_banking.png";
import UPI_Instant from "@assets/images/UPI_Instant.png";

const serviceDetails = {
  "Personalized QR Code": {
    description: `Avail personalized QR Code with The Nasik Road Deolali Vyapari Sahakari Bank with Saving, Current and CC Accounts. Fast Secure way of receiving digital payment.`,
    features: [
      "Instant payment collection",
      "Works with all UPI apps",
      "No additional hardware needed",
      "Secure transactions with encryption"
    ],
    image: personalized_qr_code
  },
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
  },
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
  },
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
  },
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

const ServiceDetailPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const query = new URLSearchParams(location.search);
    const service = query.get("service");
    setSelectedService(service);
  }, [location.search]);

  const serviceData = selectedService
    ? serviceDetails[selectedService as keyof typeof serviceDetails]
    : null;

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
        >
          <MdArrowBack className="mr-2 text-xl" />
          Back to Services
        </button>

        {selectedService && serviceData ? (
          <div className="bg-white shadow-xl rounded-xl overflow-hidden">
            {/* Header with Title */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6">
              <h1 className="text-2xl md:text-3xl font-bold text-center">
                {selectedService}
              </h1>
            </div>

            {/* Image Section - Properly contained */}
            <div className="relative">
              <img
                src={serviceData.image}
                alt={selectedService}
                className="w-full"
              />
            </div>

            {/* Content Section */}
            <div className="p-6 md:p-8 space-y-8">
              {/* Description */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3 border-b border-gray-200 pb-2">
                  Service Overview
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {serviceData.description}
                </p>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                  Key Features
                </h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {serviceData.features.map((feature, index) => (
                    <div key={index} className="flex items-start p-3 bg-gray-50 rounded-lg">
                      <div className="bg-blue-100 text-blue-600 rounded-full p-2 mr-3 flex-shrink-0">
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <div className="mb-4">
              <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Service Not Found</h2>
            <p className="text-gray-600 mb-6">
              The service you're looking for doesn't exist or is currently unavailable.
            </p>
            <button
              onClick={() => navigate('/digital-banking-services')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Browse All Services
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceDetailPage;
