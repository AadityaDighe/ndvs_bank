import { FaCheckCircle } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

interface InfoPoint {
  text: string;
}

const RTGS = () => {
  const { t } = useTranslation();

  const infoPoints: InfoPoint[] = [
    { text: t('rtgs_point_1') },
    { text: t('rtgs_point_2') },
    { text: t('rtgs_point_3') },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-800">{t('rtgs_title')}</h1>
          <p className="mt-3 text-lg text-gray-600">{t('rtgs_description')}</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-2xl font-semibold text-blue-700 mb-6 text-center">{t('service_highlights')}</h2>

          <ul className="space-y-5">
            {infoPoints.map((point, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <FaCheckCircle className="text-green-600 w-6 h-6 mt-1 shrink-0" />
                <span className="text-gray-700 text-base leading-relaxed">{point.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RTGS;