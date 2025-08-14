import { useTranslation } from 'react-i18next';
import { FaCheck, FaFileAlt, FaHandHoldingUsd } from 'react-icons/fa';

interface Benefit {
  text: string;
}

interface Document {
  text: string;
}

const CurrentAccount = () => {
  const { t } = useTranslation();

  const currentAccountBenefits: Benefit[] = [
    // { text: t('benefit_1_') },
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('current_account_title_')}
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('current_account_description_')}
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            {/* Right Side - Content */}
            <div className="w-full p-8 md:p-12">
              <div className="space-y-10">
                {/* Benefits Section */}
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <FaHandHoldingUsd className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      {t('benefits_title_')}
                    </h3>
                  </div>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentAccountBenefits.map((benefit, index) => (
                      <li key={index} className="bg-blue-50 rounded-lg p-4 hover:bg-blue-100 transition-colors duration-200">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 mt-0.5">
                            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                              <FaCheck className="w-3 h-3 text-white" />
                            </div>
                          </div>
                          <span className="ml-3 text-gray-700 font-medium">{benefit.text}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Documents Section */}
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                      <FaFileAlt className="w-5 h-5 text-indigo-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      {t('documents_title_')}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {currentAccountDocuments.map((doc, index) => (
                      <li key={index} className="flex items-start bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-200">
                        <div className="flex-shrink-0 mt-0.5">
                          <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center">
                            <FaCheck className="w-3 h-3 text-white" />
                          </div>
                        </div>
                        <span className="ml-3 text-gray-700 font-medium">{doc.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentAccount;