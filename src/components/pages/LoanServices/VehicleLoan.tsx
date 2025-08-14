import { useTranslation } from "react-i18next";
import Car_Loan from "@assets/images/ve.jpg"

const VehicleLoan = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 flex items-center justify-center px-4 py-16">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden p-8 md:p-12 text-center relative">
        
        {/* Subtle background accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
        
        <div className="relative z-10">

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight mb-20">
            {t('vehicle_loan_title')}
          </h2>
          
          {/* Icon Container with subtle animation - Using car icon */}
          <div className="inline-flex items-center justify-center w-full max-h-[400px] mb-8 hover:scale-105 transition-transform duration-300">
            <img src={Car_Loan} alt="" />
          </div>

          {/* Description */}
          <p className="text-gray-600 text-lg md:text-xl text-left leading-relaxed my-8">
            {t('vehicle_loan_content')}
          </p>
          <p className="text-gray-600 text-lg md:text-xl text-left leading-relaxed my-8">
            {t('vehicle_loan_content_for_loan')}
          </p>
          <p className="text-gray-600 text-lg md:text-xl text-left leading-relaxed my-8">
            {t('vehicle_for_loan_limit')}
          </p>

        </div>
      </div>
    </section>
  );
};

export default VehicleLoan;