import { useTranslation } from "react-i18next";
import Hypothecation_Loan from "@assets/images/Hypothecation_Loan.jpg"

const HypothecationLoan = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 flex items-center justify-center px-4 py-16">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden p-8 md:p-12 text-center relative">

        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-full -translate-y-16 translate-x-16 opacity-50" />

        <div className="relative z-10">

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight mb-22">
            {t('hypothecation_small_business_loan_title')}
          </h2>
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-full max-h-[400px] mb-8 hover:scale-105 transition-transform duration-300">
            <img src={Hypothecation_Loan} alt="" />
          </div>

          {/* Description */}
          <p className="text-gray-600 text-lg md:text-xl text-left leading-relaxed my-8">
            {t('hypothecation_small_business_loan_content')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HypothecationLoan;