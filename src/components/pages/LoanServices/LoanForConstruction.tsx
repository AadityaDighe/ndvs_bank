import { useTranslation } from "react-i18next";
import construction from "@assets/images/construction.png"

const LoanForConstruction = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 flex items-center justify-center px-4 py-16">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden p-8 md:p-12 text-center relative">

        {/* Decorative Accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-full -translate-y-16 translate-x-16 opacity-50" />

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-22 leading-tight">
            {t('construction_loan_title')}
          </h2>

        <div className="relative z-10">

           <div className="inline-flex items-center justify-center w-full max-h-[400px] mb-8 hover:scale-105 transition-transform duration-300">
            <img src={construction} alt="" />
          </div>

          {/* Description */}
          <p className="text-gray-600 text-lg md:text-xl text-left leading-relaxed my-8">
            {t('construction_loan_content')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoanForConstruction;
