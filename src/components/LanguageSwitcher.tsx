// import { useTranslation } from 'react-i18next';

// const LanguageSwitcher: React.FC = () => {
//   const { i18n } = useTranslation();

//   const changeLanguage = (lng: string) => {
//     i18n.changeLanguage(lng);
//   };

//   return (
//     <div className="flex gap-2">
//       <button
//         onClick={() => changeLanguage('en')}
//         className={`px-4 py-2 rounded-md ${i18n.language === 'en' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'} hover:bg-blue-500 hover:text-white transition-colors`}
//       >
//         English
//       </button>
//       <button
//         onClick={() => changeLanguage('mr')}
//         className={`px-4 py-2 rounded-md ${i18n.language === 'mr' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'} hover:bg-blue-500 hover:text-white transition-colors`}
//       >
//         मराठी
//       </button>
//     </div>
//   );
// };

// export default LanguageSwitcher;









// import { useTranslation } from 'react-i18next';

// const LanguageSwitcher: React.FC = () => {
//   const { i18n } = useTranslation();

//   const changeLanguage = (lng: string) => {
//     i18n.changeLanguage(lng);
//   };

//   return (
//     <div className="flex gap-2">
//       <button
//         onClick={() => changeLanguage('en')}
//         className={`px-3 py-2 rounded-md text-sm font-medium ${
//           i18n.language === 'en'
//             ? 'bg-blue-700 text-white'
//             : 'text-blue-100 hover:bg-blue-500 hover:text-white'
//         } transition-colors`}
//       >
//         English
//       </button>
//       <button
//         onClick={() => changeLanguage('mr')}
//         className={`px-3 py-2 rounded-md text-sm font-medium ${
//           i18n.language === 'mr'
//             ? 'bg-blue-700 text-white'
//             : 'text-blue-100 hover:bg-blue-500 hover:text-white'
//         } transition-colors`}
//       >
//         मराठी
//       </button>
//     </div>
//   );
// };

// export default LanguageSwitcher;










import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => changeLanguage('en')}
        className={`px-3 py-1 rounded-md text-sm cursor-pointer font-medium ${
          i18n.language === 'en'
            ? 'bg-blue-700 text-white'
            : 'text-black hover:bg-blue-500 hover:text-white'
        } transition-colors`}
        aria-label="Switch to English"
      >
        English
      </button>
      <button
        onClick={() => changeLanguage('mr')}
        className={`px-3 py-1 rounded-md text-sm cursor-pointer font-medium ${
          i18n.language === 'mr'
            ? 'bg-blue-700 text-white'
            : 'text-black hover:bg-blue-500 hover:text-white'
        } transition-colors`}
        aria-label="Switch to Marathi"
      >
        मराठी
      </button>
    </div>
  );
};

export default LanguageSwitcher;