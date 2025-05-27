import { useTranslation } from 'react-i18next';

interface Term {
  text: string;
}

interface Disclaimer {
  text: string;
  subItems?: string[];
}

const ImpsTermsConditions = () => {
  const { t } = useTranslation();

  const terms: Term[] = [
    { text: t('term_1') },
    { text: t('term_2') },
    { text: t('term_3') },
    { text: t('term_4') },
    { text: t('term_5') },
    { text: t('term_6') },
    { text: t('term_7') },
    { text: t('term_8') },
    { text: t('term_9') },
    { text: t('term_10') },
    { text: t('term_11') },
  ];

  const disclaimers: Disclaimer[] = [
    {
      text: t('disclaimer_1'),
      subItems: [
        t('disclaimer_1_sub_1'),
        t('disclaimer_1_sub_2'),
        t('disclaimer_1_sub_3'),
        t('disclaimer_1_sub_4'),
      ],
    },
    { text: t('disclaimer_2') },
    { text: t('disclaimer_3') },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-6 text-center">
            {t('imps_title')}
          </h1>

          <div className="space-y-8 text-gray-600 leading-relaxed">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              {t('terms_title')}
            </h2>
            <ol className="list-decimal pl-6 space-y-4">
              {terms.map((term, index) => (
                <li key={index}>
                  {term.text.split('www.ndvsbank.com').length > 1 ? (
                    <>
                      {term.text.split('www.ndvsbank.com')[0]}
                      <a
                        href="https://www.ndvsbank.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        {t('website_link_label')}
                      </a>
                      {term.text.split('www.ndvsbank.com')[1]}
                    </>
                  ) : (
                    term.text
                  )}
                </li>
              ))}
            </ol>

            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              {t('disclaimer_title')}
            </h2>
            <ol className="list-decimal pl-6 space-y-4">
              {disclaimers.map((disclaimer, index) => (
                <li key={index}>
                  {disclaimer.text}
                  {disclaimer.subItems && (
                    <ul className="list-disc pl-6 mt-2 space-y-2">
                      {disclaimer.subItems.map((subItem, subIndex) => (
                        <li key={subIndex}>{subItem}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpsTermsConditions;