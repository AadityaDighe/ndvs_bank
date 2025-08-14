import { useTranslation } from 'react-i18next';
import saving_account from '@/assets/images/saving_account.jpg';

interface Benefit {
  text: string;
}

const SavingsAccount = () => {
  const { t } = useTranslation();

  const benefits: Benefit[] = [
    { text: t('benefit_1') },
    { text: t('benefit_2') },
    { text: t('benefit_3') },
    { text: t('benefit_4') },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-blue-700">{t('saving_account_title_')}</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Image */}
            <div className="md:w-1/2">
              <img src={saving_account} alt="Saving Account" className="w-full h-full object-cover" />
            </div>

            {/* Right Side - Content */}
            <div className="md:w-1/2 p-6 sm:p-10 md:p-12 flex items-center">
              <div className="w-full">
                <p className="text-gray-700 mb-6 leading-relaxed">{t('saving_account_description_')}</p>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{t('key_benefits_title')}</h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">{benefit.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavingsAccount;