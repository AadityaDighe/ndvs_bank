import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { MdArrowBack } from "react-icons/md";
import { useTranslation } from "react-i18next";

const serviceIcons: { [key: string]: string } = {
  "Personalized QR Code": "qr_code",
  "SMS Banking": "sms",
  "ATM Services": "atm",
  "Mobile Banking": "smartphone",
  "UPI Instant": "payments"
};

const serviceKeyMap: { [key: string]: { description: string; featurePrefix: string; englishName: string } } = {
  "personalized_qr_code": {
    description: "personalized_qr_code_description",
    featurePrefix: "qr_feature_",
    englishName: "Personalized QR Code"
  },
  "sms_banking": {
    description: "sms_banking_description",
    featurePrefix: "sms_feature_",
    englishName: "SMS Banking"
  },
  "atm_services": {
    description: "atm_services_description",
    featurePrefix: "atm_feature_",
    englishName: "ATM Services"
  },
  "mobile_banking": {
    description: "mobile_banking_description",
    featurePrefix: "mobile_feature_",
    englishName: "Mobile Banking"
  },
  "upi_instant": {
    description: "upi_instant_description",
    featurePrefix: "upi_feature_",
    englishName: "UPI Instant"
  }
};

const ServiceDetailPage = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const query = new URLSearchParams(location.search);
    const service = query.get("service");
    setSelectedService(service);
    setIsLoading(false);
  }, [location.search]);

  useEffect(() => {
    const handleLanguageChange = () => {
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 100); // Small delay to ensure translations are loaded
    };
    i18n.on('languageChanged', handleLanguageChange);
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  const serviceKey = selectedService
    ? Object.keys(serviceKeyMap).find(
      (key) =>
        t(key) === selectedService ||
        serviceKeyMap[key].englishName === selectedService
    )
    : null;

  const serviceData = serviceKey && !isLoading
    ? {
      description: t(serviceKeyMap[serviceKey].description),
      features: [
        t(`${serviceKeyMap[serviceKey].featurePrefix}1`),
        t(`${serviceKeyMap[serviceKey].featurePrefix}2`),
        t(`${serviceKeyMap[serviceKey].featurePrefix}3`),
        t(`${serviceKeyMap[serviceKey].featurePrefix}4`),
        ...(t(`${serviceKeyMap[serviceKey].featurePrefix}5`) !== `${serviceKeyMap[serviceKey].featurePrefix}5`
          ? [t(`${serviceKeyMap[serviceKey].featurePrefix}5`)]
          : [])
      ],
      icon: serviceIcons[serviceKeyMap[serviceKey].englishName]
    }
    : null;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors duration-200"
        >
          <MdArrowBack className="mr-1" />
          {t("back_to_services")}
        </button>

        {selectedService && serviceData ? (
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3 flex flex-col items-center">
                  <div className="bg-blue-50 p-6 rounded-full mb-4">
                    <span className="material-icons-outlined text-5xl text-blue-600">
                      {serviceData.icon}
                    </span>
                  </div>
                  <h1 className="text-3xl font-bold text-gray-800 text-center mb-2">
                    {selectedService}
                  </h1>
                  <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                    {t("digital_banking_service")}
                  </div>
                </div>

                <div className="md:w-2/3">
                  <div className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-700 mb-3">
                      {t("service_overview")}
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      {serviceData.description}
                    </p>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold text-gray-700 mb-3">
                      {t("key_features")}
                    </h2>
                    <ul className="space-y-3">
                      {serviceData.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="flex-shrink-0 bg-blue-100 text-blue-600 p-1 rounded-full mr-3">
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">
              {t("service_not_found")}
            </h2>
            <p className="text-gray-600 mb-6">
              {t("service_not_found_description")}
            </p>
            <button
              onClick={() => navigate('/digital-banking-services')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-200"
            >
              {t("browse_all_services")}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceDetailPage;