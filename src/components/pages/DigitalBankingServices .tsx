import {
  MdQrCode,
  MdSms,
  MdAtm,
  MdPhoneIphone,
  MdArrowForward
} from 'react-icons/md';
import {
  FaMoneyBillWave,
  FaCar,
  FaPiggyBank,
  FaHandHoldingUsd,
  FaGem
} from 'react-icons/fa';
import {
  RiExchangeFundsLine
} from 'react-icons/ri';
import online_banking from '@assets/images/online_banking.webp';
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const DigitalBankingServices = () => {
  const { t } = useTranslation();

  const services = [
    { icon: <MdQrCode className="text-2xl" />, name: t('personalized_qr_code') },
    { icon: <MdSms className="text-2xl" />, name: t('sms_banking') },
    { icon: <MdAtm className="text-2xl" />, name: t('atm_services') },
    { icon: <MdPhoneIphone className="text-2xl" />, name: t('mobile_banking') },
    { icon: <RiExchangeFundsLine className="text-2xl" />, name: t('upi_instant') }
  ];

  const navigate = useNavigate();

  const rateCards = [
    { icon: <FaPiggyBank className="text-blue-500" />, label: t('upto'), rate: '7.50%', title: t('fixed_deposit') },
    { icon: <FaHandHoldingUsd className="text-blue-500" />, label: t('from'), rate: '13%', title: t('housing_loan') },
    { icon: <FaMoneyBillWave className="text-blue-500" />, label: t('from'), rate: '14%', title: t('personal_loan') },
    { icon: <FaGem className="text-blue-500" />, label: t('from'), rate: '9.95%', title: t('gold_loan') },
    { icon: <FaCar className="text-blue-500" />, label: t('cbil_above_700'), rate: '9%', title: t('vehicle_loan') },
  ];

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">

        {/* Digital Banking Services Section */}
        <div className="space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">{t('digital_banking_services')}</h2>
            <p className="text-lg sm:text-xl text-gray-500">{t('convenient_futuristic_personalized')}</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Services Grid */}
            <div className="lg:w-1/2 w-full">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-gray-800">{t('benefits')}</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {services.map((service, index) => (
                  <div
                    key={index}
                    onClick={() => navigate(`/digital-service?service=${encodeURIComponent(service.name)}`)}
                    className="cursor-pointer bg-white p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-3 border border-gray-100"
                  >
                    <div className="text-blue-600 flex-shrink-0">
                      {service.icon}
                    </div>
                    <p className="text-sm sm:text-base font-medium text-gray-700">{service.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="lg:w-1/2 w-full flex justify-center">
              <img
                src={online_banking}
                alt={t('digital_banking_services')}
                className="rounded-lg shadow-lg w-full max-w-md object-cover h-auto"
              />
            </div>
          </div>
        </div>

        {/* Rates Section */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
            {/* Rates Info Card */}
            <div className="md:w-1/3 p-5 sm:p-6 bg-white rounded-lg shadow-sm border border-gray-100">
              <p className="uppercase text-xs sm:text-sm font-semibold text-gray-500 mb-2">{t('rates_and_charges')}</p>
              <p className="text-lg sm:text-xl font-bold text-gray-800 mb-3">{t('best_interest_rates')}</p>
              <button
                className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1 mb-2 group cursor-pointer"
                onClick={() => navigate('/interest-rates')}
              >
                {t('view_all_interest_rates')}
                <MdArrowForward className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <p className="text-xs text-gray-400">{t('conditions_apply')}</p>
            </div>

            {/* Rate Cards */}
            <div className="md:w-2/3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
              {rateCards.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-blue-500 flex flex-col justify-between h-full"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <p className="text-xs text-gray-500">{item.label}</p>
                  </div>
                  <p className="text-xl sm:text-2xl font-bold text-blue-600 mb-1">{item.rate}</p>
                  <p className="text-sm font-medium text-gray-700">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DigitalBankingServices;