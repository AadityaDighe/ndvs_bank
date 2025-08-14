import { useTranslation } from 'react-i18next';

interface Bullet {
  text: string;
}

interface Condition {
  text: string;
}

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  const bullets: Bullet[] = [
    { text: t('bullet_1') },
    { text: t('bullet_2') },
  ];

  const conditions: Condition[] = [
    { text: t('condition_1') },
    { text: t('condition_2') },
    { text: t('condition_3') },
    { text: t('condition_4') },
    { text: t('condition_5') },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-6 text-center mb-6">
            {t('privacy_title')}
          </h1>

          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>{t('description_1')}</p>
            <p>{t('description_2')}</p>
            <p>{t('description_3')}</p>
            <ul className="list-disc pl-6 space-y-2">
              {bullets.map((bullet, index) => (
                <li key={index}>{bullet.text}</li>
              ))}
            </ul>
            <p>{t('description_4')}</p>
            <ol className="list-decimal pl-6 space-y-2">
              {conditions.map((condition, index) => (
                <li key={index}>{condition.text}</li>
              ))}
            </ol>
            <p>{t('description_5')}</p>
            <p>{t('description_6')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;