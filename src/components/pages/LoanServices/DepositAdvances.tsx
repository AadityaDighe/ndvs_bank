import { useTranslation } from "react-i18next";
import Deposits_advances from "@assets/images/Deposits-advances.png"

const DepositAdvances = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center px-4 py-16">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden p-8 md:p-12 text-center relative">
        
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
        
        <div className="relative z-10">
          
          <div className="inline-flex items-center justify-center w-full max-h-[400px] mb-8 hover:scale-105 transition-transform duration-300">
            <img src={Deposits_advances} alt="" />
          </div>

          {/* <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            {t("deposit_advances_title")}
          </h2> */}

          <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8 text-left">
            {t("deposit_advances_content")}
          </p>

        </div>
      </div>
    </section>
  );
};

export default DepositAdvances;