import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface Service {
  title: string;
  description: string;
  link: string;
  icon: string;
}

const LoanSkim = () => {
  const { t } = useTranslation();

  const services: Service[] = [
    {
      title: t('saving_account_title'),
      description: t('saving_account_description'),
      link: '/banking-service/saving-services',
      icon: '💰',
    },
    {
      title: t('current_account_title'),
      description: t('current_account_description'),
      link: '/banking-service/current-services',
      icon: '🏦',
    },
    {
      title: t('deposit_account_title'),
      description: t('deposit_account_description'),
      link: '/banking-service/deposit-services',
      icon: '📈',
    },
    {
      title: t('loan_account_title'),
      description: t('loan_account_description'),
      link: '/banking-service/loan-services',
      icon: '🤝',
    },
    {
      title: t('locker_services_title'),
      description: t('locker_services_description'),
      link: '/banking-service/locker-services',
      icon: '🔒',
    },
    {
      title: t('financial_statement_title'),
      description: t('financial_statement_description'),
      link: '#',
      icon: '📊',
    },
    {
      title: t('neft_rtgs_title'),
      description: t('neft_rtgs_description'),
      link: '/banking-service/rtgs',
      icon: '💸',
    },
  ];

  return (
    <div className="container mx-auto py-12 px-4 min-h-screen">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-blue-700">
        {t('banking_services_title')}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-200"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-xl"></div>
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">{service.icon}</span>
              <h3 className="text-2xl font-bold text-gray-800">{service.title}</h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
            <Link
              to={service.link}
              className="inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              {t('read_more')}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoanSkim;