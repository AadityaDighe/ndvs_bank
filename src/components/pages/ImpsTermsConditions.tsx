// const ImpsTermsConditions = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">

//         {/* Main Content */}
//         <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
//           <h1 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-6 text-center">
//             IMPS Terms and Conditions
//           </h1>

//           <div className="space-y-8 text-gray-600 leading-relaxed">
//             <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
//               Terms and Conditions
//             </h2>
//             <ol className="list-decimal pl-6 space-y-4">
//               <li>
//                 Transactions initiated through the IMPS application are
//                 irrevocable. The Bank shall not entertain any request for
//                 revocation or stop payment for transactions initiated through IMPS,
//                 as they are instantaneous and incapable of being reversed.
//               </li>
//               <li>
//                 The Customer is solely responsible for the safe custody and
//                 security of the IMPS application downloaded on their mobile phones.
//                 The Customer shall immediately inform the Bank about the loss or
//                 theft of a mobile phone to disable the IMPS service and prevent
//                 unauthorized usage.
//               </li>
//               <li>
//                 The Customer shall operate within the maximum limit permitted by
//                 the Bank for IMPS. The Bank reserves the right to change the
//                 transaction limit at any time.
//               </li>
//               <li>
//                 The Bank shall not be responsible for any loss caused to the
//                 Customer while using the IMPS service.
//               </li>
//               <li>
//                 The Bank reserves the right to modify, add, or remove any terms
//                 and conditions governing the IMPS service.
//               </li>
//               <li>
//                 Any change in the business rules of any processes will be notified
//                 on the Bank’s website{' '}
//                 <a
//                   href="https://www.ndvsbank.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-600 hover:underline"
//                 >
//                   www.ndvsbank.com
//                 </a>
//                 , which will be construed as sufficient notice to the Customer.
//               </li>
//               <li>
//                 In the case of a joint account where the mode of operation is
//                 “Either or Survivor,” any joint account holder can use the IMPS
//                 facility. Transactions in such accounts shall be binding on all
//                 joint account holders, jointly and severally. Customers must advise
//                 the Bank separately of any change in the mode of operation in an
//                 account and request necessary modifications to the application.
//               </li>
//               <li>
//                 The Bank reserves the right to reject a Customer’s request for IMPS
//                 without assigning any reasons.
//               </li>
//               <li>
//                 The Bank may suspend the IMPS facility if it has not been accessed
//                 by the Customer for three months or more. If the facility has not
//                 been accessed for six months or more, it will be canceled.
//               </li>
//               <li>
//                 The Customer shall remain accountable for all transactions on the
//                 designated account made prior to confirmation of any cancellation
//                 request by the Bank. The Bank will endeavor to provide reasonable
//                 notice for withdrawal or termination of the facility but may, at
//                 its discretion, withdraw temporarily or terminate the facility,
//                 either wholly or partially, at any time without prior notice. The
//                 facility may be suspended for maintenance, repair work, breakdown
//                 in IMPS hardware/software, emergencies, or security reasons
//                 without prior notice. The Bank shall not be responsible if such
//                 action is taken for security or emergency reasons.
//               </li>
//               <li>
//                 The services offered under the IMPS facility will be automatically
//                 terminated if the primary account linked to Mobile Banking Services
//                 is closed. The Bank may also terminate or suspend services without
//                 prior notice if the Customer violates the terms and conditions or
//                 upon the Customer’s death when brought to the Bank’s notice.
//               </li>
//             </ol>

//             <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
//               Disclaimer
//             </h2>
//             <ol className="list-decimal pl-6 space-y-4">
//               <li>
//                 The Bank, when acting in good faith, shall be absolved of any
//                 liability in case:
//                 <ul className="list-disc pl-6 mt-2 space-y-2">
//                   <li>
//                     There is any failure or delay in transmitting information, or
//                     any error or inaccuracy of information, or any other
//                     consequence arising from causes beyond the Bank’s control,
//                     including technology failure, mechanical breakdown, or power
//                     disruption.
//                   </li>
//                   <li>
//                     There is any loss, direct or indirect, incurred by the Customer
//                     or any other person due to any failure or lapse in the IMPS
//                     facility beyond the Bank’s control.
//                   </li>
//                   <li>
//                     The Bank is unable to receive or execute requests from the
//                     Customer, or there is a loss of information during processing
//                     or transmission, unauthorized access by others, breach of
//                     confidentiality, or reasons beyond the Bank’s control.
//                   </li>
//                   <li>
//                     There is any lapse or failure on the part of service providers
//                     or third parties affecting the IMPS facility, and the Bank
//                     makes no warranty as to the quality of service provided by such
//                     providers.
//                   </li>
//                 </ul>
//               </li>
//               <li>
//                 The Bank, its employees, agents, or contractors shall not be liable
//                 for any loss or damage, whether direct, indirect, or consequential,
//                 including but not limited to loss of revenue, profit, business,
//                 contracts, anticipated savings, goodwill, or use/value of
//                 equipment (including software), whether foreseeable or not,
//                 suffered by the Customer or any person arising from or relating to
//                 any delay, interruption, suspension, resolution, or error in
//                 receiving and processing requests, formulating and returning
//                 responses, or any failure, delay, interruption, suspension,
//                 restriction, or error in the transmission of information or
//                 messages to and from the Customer’s telecommunication equipment,
//                 the network of any service provider, the Bank’s system, or any
//                 breakdown, interruption, suspension, or failure of the Customer’s
//                 telecommunication equipment, the Bank’s system, or the network of
//                 any service provider or third party necessary to provide the
//                 facility.
//               </li>
//               <li>
//                 The Bank will not be responsible if the IMPS application is not
//                 compatible with or does not work on the Customer’s mobile handset.
//               </li>
//             </ol>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ImpsTermsConditions;
















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