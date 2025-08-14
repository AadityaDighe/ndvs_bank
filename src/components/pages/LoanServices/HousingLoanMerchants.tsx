import { useTranslation } from "react-i18next";
import Housing_merchants from "@assets/images/Housing_merchants.png"

const HousingLoanMerchants = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden p-6 sm:p-10 md:p-14 text-center relative">

        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-full translate-x-10 -translate-y-10 opacity-40 pointer-events-none" />

          {/* Title */}
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-10 leading-tight">
            {t('housing_loan_merchants_title')}
          </h2>

        <div className="relative z-10">
          {/* Icon */}
           <div className="inline-flex items-center justify-center w-full max-h-[400px] mb-8 hover:scale-105 transition-transform duration-300">
            <img src={Housing_merchants} alt="" className="w-90 h-auto" />
          </div>

          {/* Description */}
          <p className="text-gray-600 text-lg sm:text-xl text-left leading-relaxed mb-10">
            {t('housing_loan_merchants_content')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HousingLoanMerchants;
