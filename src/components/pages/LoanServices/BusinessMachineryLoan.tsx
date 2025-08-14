import { useTranslation } from "react-i18next";
import Business_Machinery_Loan from '@assets/images/Business_Machinery_Loan.jpg'

const BusinessMachineryLoan = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-50 flex items-center justify-center px-4 py-16">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden p-8 md:p-12 text-center relative">
        
        {/* Subtle background accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-100 to-slate-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
        
        <div className="relative z-10">

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight mb-20">
            {t('business_machinery_loan_title')}
          </h2>
          
          {/* Icon Container with subtle animation - Using machinery/gear icon */}
          <div className="inline-flex items-center justify-center w-full h-auto mb-8 hover:scale-105 transition-transform duration-300">
            <img src={Business_Machinery_Loan} alt="" />
          </div>

          {/* Description */}
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed my-8 text-left">
            {t('business_machinery_loan_content')}
          </p>

        </div>
      </div>
    </section>
  );
};

export default BusinessMachineryLoan;