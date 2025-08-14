// const PrivacyPolicy = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">

//         {/* Main Content */}
//         <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
//           <h1 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-6 text-center mb-6">
//             Privacy Policy
//           </h1>

//           <div className="space-y-6 text-gray-600 leading-relaxed">
//             <p>
//               When using this website, mobile banking services, or availing
//               products and services via online application forms and
//               questionnaires, NDVS Bank may become privy to the personal
//               information of its customers, including information that is of a
//               confidential nature.
//             </p>

//             <p>
//               NDVS Bank is strongly committed to protecting the privacy of its
//               customers and has taken all reasonable measures to safeguard the
//               confidentiality of customer information and its transmission through
//               the world-wide web and secure mobile banking app. The bank shall not
//               be held liable for disclosure of confidential information in
//               accordance with this privacy commitment, agreements with customers,
//               or due to reasons beyond its control.
//             </p>

//             <p>
//               NDVS Bank endeavors to ensure the security of the information
//               provided by customers. We use 256-bit encryption for the
//               transmission of information in our online system, which is currently
//               the permitted maximum level of encryption in India. Customers are
//               required to cooperate with NDVS Bank to ensure the security of their
//               information. It is recommended that customers choose their passwords
//               carefully to prevent unauthorized access. To make passwords complex
//               and difficult to guess, customers should use a combination of
//               alphabets, numbers, and special characters (e.g., !, @, #, $).
//               Customers can also generate complex MPIN and MTPIN while accessing
//               the bank’s mobile banking application. Customers should not disclose
//               their password(s) to anyone or keep any written or other record of
//               the password(s) that could allow third-party access.
//             </p>

//             <ul className="list-disc pl-6 space-y-2">
//               <li>
//                 Profile photos are stored in the application’s local storage on
//                 the user’s device only and not on the server. The stored profile
//                 image is retrieved from local storage on dashboard navigation and
//                 displayed as the user’s profile image.
//               </li>
//               <li>
//                 SMS is sent to verify the mobile number registered for the
//                 application. The received SMS OTP is read and auto-fetched for
//                 financial transactions.
//               </li>
//             </ul>

//             <p>
//               NDVS Bank undertakes not to disclose customer information to any
//               person unless such action is necessary to:
//             </p>

//             <ol className="list-decimal pl-6 space-y-2">
//               <li>Conform to legal requirements or comply with legal processes.</li>
//               <li>Protect and defend NDVS Bank’s rights, interests, or property.</li>
//               <li>
//                 Enforce the terms and conditions of the products or services.
//               </li>
//               <li>
//                 Act to protect the interests of NDVS Bank, its members, or other
//                 persons.
//               </li>
//               <li>
//                 The customer authorizes NDVS Bank to exchange, share, or part with
//                 all information related to the details and transaction history of
//                 the customers to banks, financial institutions, NPCI, RBI, credit
//                 bureaus, agencies, or participants in any telecommunication or
//                 electronic clearing network as required by law, customary
//                 practice, credit reporting, statistical analysis, credit scoring,
//                 verification, or risk management. The customer shall not hold NDVS
//                 Bank liable for the use or disclosure of this information.
//               </li>
//             </ol>

//             <p>
//               The information, material, advice, suggestions, illustrations,
//               notifications, circulars, etc., are collectively referred to as “the
//               content” on this website and mobile app services. If the content
//               contains any mistakes, omissions, inaccuracies, or typographical
//               errors, NDVS Bank assumes no responsibility thereof. NDVS Bank makes
//               no warranty or representation regarding any content provided through
//               this website or mobile app and disclaims its liability in respect
//               thereof. Any action taken by you based on the content is at your own
//               risk and responsibility. NDVS Bank reserves the right to correct any
//               part of the content at any time as required, at its sole discretion.
//               The content of this website or mobile app shall not be displayed or
//               printed in any form, in part or whole, without the prior written
//               approval of NDVS Bank.
//             </p>

//             <p>
//               NDVS Bank will limit the collection and use of customer information
//               to a need-to-know basis to deliver better service. The bank may use
//               and share the information provided by customers and third parties
//               for providing services and notifying or contacting customers
//               regarding any issues with, or the expiration of, such services. We
//               collect images to display as user profile pictures in the app.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PrivacyPolicy;








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