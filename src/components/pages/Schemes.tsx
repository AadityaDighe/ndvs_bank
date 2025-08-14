// const Schemes = () => {
//   const schemes = [
//     {
//       title: 'Missed Call Alert Service',
//       description:
//         'NDVS Bank Missed Call Service is a free service where you can get your account balance by giving a missed call to 7065844440. Ensure that the mobile number used is registered with the bank for your account.',
//     },
//     {
//       title: 'Centre for Bharat Bill Payment System',
//       description:
//         'Bharat Bill Payment System (BBPS) is an integrated bill payment system in India offering interoperable and accessible bill payment services through a network of agents, enabling multiple payment modes and instant confirmation. National Payments Corporation of India (NPCI) functions as the authorized Bharat Bill Payment Central Unit (BBPCU), setting standards and procedures for all participants. NDVS Bank has launched BBPS services for customers and non-customers to pay electricity, landline, mobile postpaid, and DTH recharge bills centrally at all branches.',
//     },
//     {
//       title: 'Additional Service on ATM Card',
//       description:
//         'NDVS Bank customers can make purchases at malls, petrol pumps, and hotels by swiping their ATM card on POS machines, providing an easy transaction method. The e-Commerce facility allows NDVS Bank ATM debit cards to be used for online purchases and bill payments. Our centralized customer care service efficiently handles ATM card disputes.',
//     },
//     {
//       title: 'Yuva Saving Account Facility',
//       description:
//         'This scheme encourages saving habits among teenagers and students for their future benefit. Account opening guidelines: Teenagers aged 14 to 18 can open a savings account with a minimum deposit of Rs.100/-. Required documents include a photo, address proof, identity proof, and birth date confirmation. Account holders can withdraw money using a withdrawal slip in person. Cheque book facilities are not available for this account.',
//     },
//   ];

//   return (
//     <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">

//         {/* Main Content */}
//         <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
//           <h1 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-6 text-center mb-6">
//             Schemes
//           </h1>

//           {/* Schemes List */}
//           <div className="space-y-8">
//             {schemes.map((scheme, index) => (
//               <div
//                 key={index}
//                 className="bg-gray-50 rounded-lg p-6 hover:bg-blue-50 transition-colors duration-200 border border-gray-200"
//               >
//                 <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
//                   {scheme.title}
//                 </h2>
//                 <p className="text-gray-600 leading-relaxed">
//                   {scheme.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Schemes;







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