import { useTranslation } from 'react-i18next';

interface Rate {
  category: string;
  taxRate: string;
  surcharge: string;
  educationCess: string;
  total: string;
}

interface Avoidance {
  category: string;
  form: string;
}

interface Note {
  text: string;
}

const Tds = () => {
  const { t } = useTranslation();

  const tdsRates: Rate[] = [
    {
      category: t('rates_table_category_1'),
      taxRate: '10.00%',
      surcharge: '—',
      educationCess: '0.00%',
      total: '10.00%',
    },
  ];

  const tdsAvoidance: Avoidance[] = [
    { category: t('avoiding_table_category_1'), form: t('avoiding_table_form_1') },
    { category: t('avoiding_table_category_2'), form: t('avoiding_table_form_2') },
    { category: t('avoiding_table_category_3'), form: t('avoiding_table_form_3') },
  ];

  const importantNotes: Note[] = [
    { text: t('note_1') },
    { text: t('note_2') },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-6 text-center mb-6">
            {t('tds_title')}
          </h1>

          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>{t('intro_description')}</p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 mb-4">
              {t('rules_title')}
            </h2>
            <p>{t('rules_description_1')}</p>
            <p>{t('rules_description_2')}</p>
            <p>{t('rules_description_3')}</p>
            <p>{t('rules_description_4')}</p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 mb-4">
              {t('rates_title')}
            </h2>
            <p>{t('rates_description')}</p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="py-3 px-4 font-semibold text-sm">{t('rates_table_category')}</th>
                    <th className="py-3 px-4 font-semibold text-sm">{t('rates_table_tax_rate')}</th>
                    <th className="py-3 px-4 font-semibold text-sm">{t('rates_table_surcharge')}</th>
                    <th className="py-3 px-4 font-semibold text-sm">{t('rates_table_education_cess')}</th>
                    <th className="py-3 px-4 font-semibold text-sm">{t('rates_table_total')}</th>
                  </tr>
                </thead>
                <tbody>
                  {tdsRates.map((rate, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-200 hover:bg-blue-50 transition-colors duration-200"
                    >
                      <td className="py-3 px-4 text-gray-700">{rate.category}</td>
                      <td className="py-3 px-4 text-gray-700">{rate.taxRate}</td>
                      <td className="py-3 px-4 text-gray-700">{rate.surcharge}</td>
                      <td className="py-3 px-4 text-gray-700">{rate.educationCess}</td>
                      <td className="py-3 px-4 text-gray-700">{rate.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 mb-4">
              {t('avoiding_title')}
            </h2>
            <p>{t('avoiding_description')}</p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="py-3 px-4 font-semibold text-sm">{t('avoiding_table_category')}</th>
                    <th className="py-3 px-4 font-semibold text-sm">{t('avoiding_table_form')}</th>
                  </tr>
                </thead>
                <tbody>
                  {tdsAvoidance.map((item, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-200 hover:bg-blue-50 transition-colors duration-200"
                    >
                      <td className="py-3 px-4 text-gray-700">{item.category}</td>
                      <td className="py-3 px-4 text-gray-700">{item.form}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-6">
              <strong>{t('notes_title')}</strong>
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              {importantNotes.map((note, index) => (
                <li key={index}>{note.text}</li>
              ))}
            </ol>

            <p>{t('notes_description_1')}</p>
            <p>{t('notes_description_2')}</p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 mb-4">
              {t('splitting_title')}
            </h2>
            <p>{t('splitting_description')}</p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 mb-4">
              {t('exemption_title')}
            </h2>
            <p>{t('exemption_description')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tds;