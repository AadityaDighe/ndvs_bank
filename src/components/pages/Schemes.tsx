import { useTranslation } from 'react-i18next';

interface Scheme {
  title: string;
  description: string;
}

const Schemes = () => {
  const { t } = useTranslation();

  const schemes: Scheme[] = [
    {
      title: t('scheme_1_title'),
      description: t('scheme_1_description'),
    },
    {
      title: t('scheme_2_title'),
      description: t('scheme_2_description'),
    },
    {
      title: t('scheme_3_title'),
      description: t('scheme_3_description'),
    },
    {
      title: t('scheme_4_title'),
      description: t('scheme_4_description'),
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-6 text-center mb-6">
            {t('schemes_title')}
          </h1>

          {/* Schemes List */}
          <div className="space-y-8">
            {schemes.map((scheme, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 hover:bg-blue-50 transition-colors duration-200 border border-gray-200"
              >
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                  {scheme.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {scheme.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schemes;