import { useTranslation } from 'react-i18next';

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-700 text-center mb-6">
            {t('about_us_title')}
          </h1>

          {/* Introduction */}
          <p className="text-gray-600 leading-relaxed mb-6">{t('introduction')}</p>

          {/* Member Base */}
          <p className="text-gray-600 leading-relaxed mb-6">{t('member_base')}</p>

          {/* Branch Network */}
          <p className="text-gray-600 leading-relaxed mb-6">{t('branch_network')}</p>

          {/* Mission Statement */}
          <p className="text-gray-600 leading-relaxed mb-8">{t('mission_statement')}</p>

          {/* Featured Services */}
          <h2 className="text-2xl font-bold text-gray-800 mb-6">{t('featured_services')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(t('services___', { returnObjects: true })as string[]).map((service: string, index: number) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-4 hover:bg-blue-50 transition-colors duration-200 flex items-start"
              >
                <span className="text-blue-600 mr-3">•</span>
                <span className="text-gray-700">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;