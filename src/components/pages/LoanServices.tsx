import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface LoanType {
  title: string;
  content: string;
}

const LoanServices = () => {
  const { t } = useTranslation();
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const loanTypes: LoanType[] = [
    { title: t('deposit_advances_title'), content: t('deposit_advances_content') },
    { title: t('nsc_loan_title'), content: t('nsc_loan_content') },
    { title: t('gold_mortgage_loan_title'), content: t('gold_mortgage_loan_content') },
    { title: t('vehicle_loan_title'), content: t('vehicle_loan_content') },
    { title: t('business_machinery_loan_title'), content: t('business_machinery_loan_content') },
    { title: t('shop_shed_loan_title'), content: t('shop_shed_loan_content') },
    { title: t('small_business_loan_title'), content: t('small_business_loan_content') },
    { title: t('hypothecation_small_business_loan_title'), content: t('hypothecation_small_business_loan_content') },
    { title: t('hypothecation_cash_credit_loan_title'), content: t('hypothecation_cash_credit_loan_content') },
    { title: t('construction_loan_title'), content: t('construction_loan_content') },
    { title: t('educational_loan_title'), content: t('educational_loan_content') },
    { title: t('installment_cash_credit_loan_title'), content: t('installment_cash_credit_loan_content') },
    { title: t('staff_loan_title'), content: t('staff_loan_content') },
    { title: t('housing_loan_employees_title'), content: t('housing_loan_employees_content') },
    { title: t('housing_loan_shares_title'), content: t('housing_loan_shares_content') },
    { title: t('agricultural_loan_title'), content: t('agricultural_loan_content') },
    { title: t('vehicle_loan_b_class_title'), content: t('vehicle_loan_b_class_content') },
    { title: t('gold_mortgage_cash_credit_loan_title'), content: t('gold_mortgage_cash_credit_loan_content') },
    { title: t('housing_loan_merchants_title'), content: t('housing_loan_merchants_content') },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">{t('loan_schemes_title')}</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t('loan_schemes_description')}</p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="md:flex">
            {/* Right Side - Content */}
            <div className="p-8 md:p-12">
              <div className="prose max-w-none">
                <h3 className="text-2xl font-semibold text-blue-700 text-center mb-4">{t('common_rules_title')}</h3>
                <ul className="space-y-3 mb-8">
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <li key={num} className="flex items-start">
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
                      <span className="text-gray-700">{t(`common_rule_${num}`)}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-2xl font-semibold text-blue-700 text-center my-6">{t('our_loan_types_title')}</h3>
                <div className="space-y-4">
                  {loanTypes.map((loan, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg">
                      <button
                        className="w-full flex justify-between items-center p-4 text-left text-lg font-medium text-gray-800 bg-gray-50 hover:bg-gray-100"
                        onClick={() => toggleAccordion(index)}
                      >
                        <span>{loan.title}</span>
                        <svg
                          className={`w-5 h-5 transform transition-transform ${
                            openAccordion === index ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {openAccordion === index && (
                        <div className="p-4 text-gray-700 whitespace-pre-wrap">{loan.content}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanServices;