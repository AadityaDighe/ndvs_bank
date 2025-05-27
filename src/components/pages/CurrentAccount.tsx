import { useTranslation } from 'react-i18next';

interface Benefit {
  text: string;
}

interface Document {
  text: string;
}

const CurrentAccount = () => {
  const { t } = useTranslation();

  const currentAccountBenefits: Benefit[] = [
    { text: t('benefit_1_') },
    { text: t('benefit_2_') },
    { text: t('benefit_3_') },
    { text: t('benefit_4_') },
    { text: t('benefit_5') },
    { text: t('benefit_6') },
    { text: t('benefit_7') },
    { text: t('benefit_8') },
    { text: t('benefit_9') },
  ];

  const currentAccountDocuments: Document[] = [
    { text: t('document_1') },
    { text: t('document_2') },
    { text: t('document_3') },
    { text: t('document_4') },
    { text: t('document_5') },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{t('current_account_title_')}</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t('current_account_description_')}</p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="md:flex">
            {/* Left Side - Image */}
            <div className="md:w-1/3 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center p-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-16 h-16 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{t('current_account_title')}</h3>
                <p className="text-blue-600 font-medium">{t('current_account_tagline_')}</p>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="md:w-2/3 p-8 md:p-12">
              <div className="prose max-w-none">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{t('benefits_title_')}</h3>
                <ul className="space-y-3 mb-8">
                  {currentAccountBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
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

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{t('benefits_title_')}</h3>
                <ul className="space-y-3 mb-8">
                  {currentAccountDocuments.map((doc, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">{doc.text}</span>
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

export default CurrentAccount;