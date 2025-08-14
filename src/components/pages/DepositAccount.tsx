import { useTranslation } from 'react-i18next';

import depositImage from '@assets/images/fixed-deposit.jpg'
import recurringImage from '@assets/images/recurring.jpg'
import pigmyImage from '@assets/images/pigmy-daily-deposit-scheme.jpg'

interface DepositType {
  text: string;
}

interface FixedDepositSubtype {
  text: string;
}

const DepositAccount = () => {
  const { t } = useTranslation();

  const depositTypes: DepositType[] = [
    { text: t('deposit_type_1') },
    { text: t('deposit_type_2') },
    { text: t('deposit_type_3') },
  ];

  const fixedDepositSubtypes: FixedDepositSubtype[] = [
    { text: t('fixed_deposit_subtype_1') },
    { text: t('fixed_deposit_subtype_2') },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="backdrop-blur-sm bg-white/80 rounded-xl shadow-md max-w-6xl mx-auto p-10">
        <div className="text-center mb-8 bg-gray-300 py-3">
          <h1 className="text-4xl font-bold text-blue-700">{t('deposit_account_title_')}</h1>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-6">{t('deposit_types_title')}</h2>
          <ul className="list-disc pl-6 text-gray-700 mb-8 space-y-1">
            {depositTypes.map((type, index) => (
              <li key={index}>{type.text}</li>
            ))}
          </ul>

          <div className="mb-10">
            <h3 className="text-xl font-bold text-blue-700 mb-4">{t('fixed_deposits_title')}</h3>
            <div className="overflow-hidden rounded-xl shadow-lg mb-4 aspect-[16/9]">
              <img
                src={depositImage}
                alt="Fixed deposit"
                className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
              />
            </div>
            <p className="text-gray-700 mb-4">{t('fixed_deposits_description_1')}</p>
            <p className="text-gray-700">{t('fixed_deposits_description_2')}</p>
            <ul className="list-disc pl-6 text-gray-700 mt-2">
              {fixedDepositSubtypes.map((subtype, index) => (
                <li key={index}>{subtype.text}</li>
              ))}
            </ul>
          </div>

          <div className="mb-10">
            <h3 className="text-xl font-bold text-blue-700 mb-4">{t('recurring_deposit_title')}</h3>
            <div className="overflow-hidden rounded-xl shadow-lg mb-4 aspect-[16/9]">
              <img
                src={recurringImage}
                alt="Recurring deposit"
                className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
              />
            </div>
            <p className="text-gray-700">{t('recurring_deposit_description')}</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-blue-700 mb-2">{t('pigmy_deposit_title')}</h3>
            <img
              src={pigmyImage}
              alt="Pigmy deposit"
              className="rounded-lg w-full h-48 object-cover mb-4"
            />
            <p className="text-gray-700 mb-4">{t('pigmy_deposit_description_1')}</p>
            <p className="text-gray-700">{t('pigmy_deposit_description_2')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepositAccount;
