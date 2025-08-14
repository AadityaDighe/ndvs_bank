import { useTranslation } from "react-i18next";
import educational from "@assets/images/edu.jpg"

const EducationalLoan = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden p-6 sm:p-10 md:p-14 text-center relative">

        {/* Decorative Circle */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-full -translate-y-16 -translate-x-16 opacity-40 pointer-events-none" />

          {/* Title */}
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            {t('educational_loan_title')}
          </h2>

        <div className="relative z-10">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-full max-h-[400px] mb-8 hover:scale-105 transition-transform duration-300">
            <img src={educational} alt=""/>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-lg sm:text-xl text-left leading-relaxed mb-10">
            {t('educational_loan_content')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default EducationalLoan;
