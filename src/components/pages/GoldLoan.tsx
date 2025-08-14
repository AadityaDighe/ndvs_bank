import { useTranslation } from 'react-i18next';
import { MdDescription } from 'react-icons/md';
import goldLoan from '@assets/images/goldLoan.jpg';
import gold_loan from '@assets/images/gold_loan.png';

const GoldLoan = () => {
  const { t } = useTranslation();

  // const features = [
  //   {
  //     icon: <FaPercentage className="text-2xl text-yellow-600" />,
  //     title: t('goldLoan.features.loanAmount.title'),
  //     description: t('goldLoan.features.loanAmount.description')
  //   },
  //   {
  //     icon: <FaWeightHanging className="text-2xl text-yellow-600" />,
  //     title: t('goldLoan.features.goldPurity.title'),
  //     description: t('goldLoan.features.goldPurity.description')
  //   },
  //   {
  //     icon: <FaFileSignature className="text-2xl text-yellow-600" />,
  //     title: t('goldLoan.features.documentation.title'),
  //     description: t('goldLoan.features.documentation.description')
  //   },
  //   {
  //     icon: <MdOutlineSecurity className="text-2xl text-yellow-600" />,
  //     title: t('goldLoan.features.security.title'),
  //     description: t('goldLoan.features.security.description')
  //   },
  //   {
  //     icon: <MdAccountCircle className="text-2xl text-yellow-600" />,
  //     title: t('goldLoan.features.eligibility.title'),
  //     description: t('goldLoan.features.eligibility.description')
  //   },
  //   {
  //     icon: <FaHandHoldingUsd className="text-2xl text-yellow-600" />,
  //     title: t('goldLoan.features.minimumLoan.title'),
  //     description: t('goldLoan.features.minimumLoan.description')
  //   }
  // ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="relative rounded-xl overflow-hidden mb-8 h-64 shadow-lg">
          <img src={gold_loan} alt={t('goldLoan.heroImageAlt')} className="h-28 md:max-h-32 object-contain" />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <img src={gold_loan} alt={t('goldLoan.heroImageAlt')} />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
          <div className="p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <MdDescription className="text-yellow-600" />
              {t('goldLoan.about.title')}
            </h2>
            <div className="prose prose-yellow max-w-none text-gray-600 space-y-4">
              <p>{t('goldLoan.about.description1')}</p>
              <p>{t('goldLoan.about.description2')}</p>
            </div>
          </div>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-yellow-500">
              <div className="mb-3">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div> */}

        {/* Process Section */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
          <div className="p-8">
            <div className="flex items-center mb-6">
              <div className="hidden md:block w-1/3 pr-6">
                <img 
                  src={goldLoan}
                  alt={t('goldLoan.processImageAlt')}
                  className="w-full h-auto object-cover rounded-lg shadow"
                />
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t('goldLoan.process.title')}</h2>
                <div className="prose prose-yellow max-w-none text-gray-600 space-y-4">
                  <div className="space-y-2">
                    <ul className="pl-5 space-y-1">
                      {(t('goldLoan.process.eligibilityItems', { returnObjects: true })as string[]).map((item: string, i: number) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="prose prose-yellow max-w-none text-gray-600 space-y-4">
              {/* <div className="space-y-2">
                <h4 className="font-medium text-gray-800">{t('goldLoan.process.applicationTitle')}</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {(t('goldLoan.process.applicationItems', { returnObjects: true }) as string[]).map((item: string, i: number) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div> */}

              <div className="space-y-2">
                <h4 className="font-bold text-xl text-center mb-5 text-gray-800">{t('goldLoan.process.mortgageTitle')}</h4>
                <ul className=" pl-5 space-y-1">
                  {(t('goldLoan.process.mortgageItems', { returnObjects: true }) as string[]).map((item: string, i: number) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* <div className="space-y-2">
                <h4 className="font-medium text-gray-800">{t('goldLoan.process.notesTitle')}</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {(t('goldLoan.process.notesItems', { returnObjects: true }) as string[]).map((item: string, i: number) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoldLoan;