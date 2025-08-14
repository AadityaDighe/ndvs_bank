// const Tds = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">

//         {/* Main Content */}
//         <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
//           <h1 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-6 text-center mb-6">
//             TDS Information
//           </h1>

//           <div className="space-y-6 text-gray-600 leading-relaxed">
//             <p>
//               People prefer to deposit their savings in time deposits as such
//               deposits earn a higher rate of interest than normal savings
//               accounts. However, they face the issue of TDS (Tax Deducted at
//               Source) by banks for fixed deposits. In Income Tax law, one of the
//               sources of income is “Interest Income,” and thus, directions issued
//               by income tax authorities must be followed by all bankers.
//             </p>

//             <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 mb-4">
//               Rules for Deducting Tax on Fixed Deposits
//             </h2>
//             <p>
//               Banks deduct tax (TDS) if the total interest earned on all your time
//               deposits in the bank exceeds Rs.40,000/- during a financial year.
//               The tax liability for TDS purposes is determined at the branch
//               level. Whenever the bank pays interest on your fixed deposits, it
//               checks for TDS eligibility. If applicable, TDS is deducted. TDS is
//               also deducted on interest accrued (but not yet paid) at the end of
//               the financial year, i.e., 31st March every year. The rate at which
//               TDS is deducted varies according to the category of account holders.
//             </p>

//             <p>
//               Currently, no interest income is exempted from tax (earlier, interest
//               income up to Rs.12,000/- per year was exempted under Section 80L of
//               the Income Tax Act). However, in certain conditions, no TDS is
//               deducted on the interest earned on fixed deposits, e.g., if the
//               total interest earned on the deposit in a financial year is up to
//               Rs.40,000/-.
//             </p>

//             <p>
//               As per current income tax guidelines, banks are required to deduct
//               TDS on deposits if the total interest earned on all fixed deposits in
//               a bank exceeds Rs.40,000/- in a financial year. (As per these
//               guidelines, TDS is deducted even if a fixed deposit is in the name
//               of a minor.) However, depositors can claim credit for such TDS in
//               their income tax returns. (In the case of minors, this credit for
//               TDS can be claimed by the person who manages the minor’s income.)
//             </p>

//             <p>
//               Banks check whether an account is exempted from TDS whenever they
//               pay interest on fixed deposits. If it is not exempted, TDS is
//               deducted. TDS is also deducted on interest accrued (but not yet
//               paid) at the end of the financial year, i.e., 31st March every year.
//             </p>

//             <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 mb-4">
//               TDS Rates
//             </h2>
//             <p>
//               For resident individuals and Hindu Undivided Families (HUF), TDS is
//               deducted at a rate of 10%. The applicable rates are as follows:
//             </p>
//             <div className="overflow-x-auto">
//               <table className="w-full text-left border-collapse">
//                 <thead>
//                   <tr className="bg-blue-600 text-white">
//                     <th className="py-3 px-4 font-semibold text-sm">
//                       Category
//                     </th>
//                     <th className="py-3 px-4 font-semibold text-sm">
//                       Tax Rate
//                     </th>
//                     <th className="py-3 px-4 font-semibold text-sm">
//                       Surcharge
//                     </th>
//                     <th className="py-3 px-4 font-semibold text-sm">
//                       Education Cess
//                     </th>
//                     <th className="py-3 px-4 font-semibold text-sm">Total</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr className="border-b border-gray-200 hover:bg-blue-50 transition-colors duration-200">
//                     <td className="py-3 px-4 text-gray-700">
//                       Resident Individuals & HUF (Payment up to 10 lacs)
//                     </td>
//                     <td className="py-3 px-4 text-gray-700">10.00%</td>
//                     <td className="py-3 px-4 text-gray-700">—</td>
//                     <td className="py-3 px-4 text-gray-700">0.00%</td>
//                     <td className="py-3 px-4 text-gray-700">10.00%</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>

//             <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 mb-4">
//               Avoiding TDS Deduction
//             </h2>
//             <p>
//               If you believe your total interest income for the year will not fall
//               within taxable limits, you can inform your bank not to deduct TDS on
//               your deposit by submitting a form as per the provisions of the
//               Income Tax Act. The required forms for different categories are:
//             </p>
//             <div className="overflow-x-auto">
//               <table className="w-full text-left border-collapse">
//                 <thead>
//                   <tr className="bg-blue-600 text-white">
//                     <th className="py-3 px-4 font-semibold text-sm">
//                       Category of Account
//                     </th>
//                     <th className="py-3 px-4 font-semibold text-sm">
//                       Form Required
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr className="border-b border-gray-200 hover:bg-blue-50 transition-colors duration-200">
//                     <td className="py-3 px-4 text-gray-700">
//                       Individual - Senior Citizens
//                     </td>
//                     <td className="py-3 px-4 text-gray-700">15H</td>
//                   </tr>
//                   <tr className="border-b border-gray-200 hover:bg-blue-50 transition-colors duration-200">
//                     <td className="py-3 px-4 text-gray-700">Trusts</td>
//                     <td className="py-3 px-4 text-gray-700">15AA</td>
//                   </tr>
//                   <tr className="border-b border-gray-200 hover:bg-blue-50 transition-colors duration-200">
//                     <td className="py-3 px-4 text-gray-700">
//                       Individual - Others
//                     </td>
//                     <td className="py-3 px-4 text-gray-700">15G</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>

//             <p className="mt-6">
//               <strong>Important Notes:</strong>
//             </p>
//             <ol className="list-decimal pl-6 space-y-2">
//               <li>
//                 Form 15AA must be obtained from the Assessing Officer of the
//                 Income Tax Department.
//               </li>
//               <li>
//                 Even if you submit Form 15H, 15AA, or 15G, the tax already
//                 deducted as TDS during the year prior to submission is usually not
//                 refunded by banks, as they are obligated to deposit this TDS
//                 within a time-bound period. However, certificates will be issued
//                 to customers, which can be used while filing their tax returns.
//               </li>
//             </ol>

//             <p>
//               Forms 15H and 15AA are valid only for the financial year in which
//               they are issued. Banks usually require a fresh Form 15H for each
//               deposit placed with the bank. However, if the depositor submits Form
//               15H or 15G (available free of cost from all banks) and declares no
//               tax liability, the bank will not deduct TDS from the interest
//               earned.
//             </p>

//             <p>
//               If the interest income from a bank branch exceeds Rs.10,000/- (and
//               you have not submitted Form 15H or 15G), the bank will deduct TDS.
//               For any TDS deducted, the bank will issue a Form 16A, which can be
//               used while filing income tax returns.
//             </p>

//             <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 mb-4">
//               Splitting Deposits to Avoid TDS
//             </h2>
//             <p>
//               If you do not want TDS to be deducted, you can split your bank
//               deposits across two or more banks or branches so that the total
//               interest earned at one branch is less than Rs.10,000/-. However,
//               this does not exempt the income earned from such deposits from
//               income tax. You must club all such interest income, add it to your
//               other income, and pay the applicable tax while filing your income
//               tax return.
//             </p>

//             <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 mb-4">
//               Exemption for ‘A’ Class Shareholders
//             </h2>
//             <p>
//               TDS provisions are not applicable to ‘A’ class shareholders of the
//               bank.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Tds;
















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