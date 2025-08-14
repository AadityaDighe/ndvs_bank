import { useTranslation } from "react-i18next";

const VehicleLoanBClassMembers = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 flex items-center justify-center px-4 py-12">
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-xl overflow-hidden p-8 md:p-12 text-center">
        <div className="flex flex-col items-center space-y-6">
          <div className="bg-blue-100 text-blue-600 rounded-full p-4">
            <svg
              className="w-12 h-12"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            {t('vehicle_loan_b_class_title')}
          </h2>

          <p className="text-gray-600 text-lg md:text-xl max-w-2xl">
            {t('vehicle_loan_b_class_content')}
          </p>

        </div>
      </div>
    </section>
  );
};

export default VehicleLoanBClassMembers;