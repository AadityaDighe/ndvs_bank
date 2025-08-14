import { useTranslation } from "react-i18next";
import agriculture_loan from "@assets/images/agriculture_loan.png"

const AgriculturalLoan = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden p-6 sm:p-10 md:p-14 text-center relative">

        {/* Background Accent */}
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-br from-green-100 to-blue-100 rounded-full opacity-40 pointer-events-none" />

          {/* Title */}
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6 leading-tight mb-20">
            {t('agricultural_loan_title')}
          </h2>

        <div className="relative z-10">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-full max-h-[400px] mb-8 hover:scale-105 transition-transform duration-300">
            <img src={agriculture_loan} alt="" />
          </div>

          {/* Description */}
          <p className="text-gray-600 text-lg sm:text-xl text-left leading-relaxed my-10">
            {t('agricultural_loan_content')}
          </p>

        </div>
      </div>
    </section>
  );
};

export default AgriculturalLoan;
