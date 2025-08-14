import { useTranslation } from "react-i18next";
import Home_loan from "@assets/images/Home_loan.jpg"

const HomeLoanShareHolders = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-100 flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden p-6 sm:p-10 md:p-14 text-center relative">

        {/* Background Accent */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-full opacity-40 pointer-events-none" />

          {/* Title */}
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6 leading-tight mb-20">
            {t('housing_loan_shares_title')}
          </h2>

        <div className="relative z-10">
          {/* Icon */}
           <div className="inline-flex items-center justify-center w-full max-h-[400px] mb-8 hover:scale-105 transition-transform duration-300">
            <img src={Home_loan} alt="" />
          </div>

          {/* Description */}
          <p className="text-gray-600 text-lg sm:text-xl text-left leading-relaxed my-10">
            {t('housing_loan_shares_content')}
          </p>

        </div>
      </div>
    </section>
  );
};

export default HomeLoanShareHolders;
