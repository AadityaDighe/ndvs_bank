// import React from 'react';

// const BankHeader = () => {
//   return (
//     <div className="w-full max-w-md mx-auto">
//       <style jsx>{`
//         .curved-bottom {
//           position: relative;
//           background: #eab308;
//           height: 30px;
//           overflow: hidden;
//         }
//         .curved-bottom::after {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: -10%;
//           width: 120%;
//           height: 60px;
//           background: #eab308;
//           border-radius: 50%;
//           transform: translateY(-50%);
//         }
//         .logo-inner {
//           background: white;
//           border-radius: 50%;
//           position: relative;
//           border: 2px solid #dc2625;
//         }
//         .logo-inner::before {
//           content: '';
//           position: absolute;
//           top: 3px;
//           left: 3px;
//           right: 3px;
//           height: 8px;
//           background: #dc2625;
//           border-radius: 8px 8px 0 0;
//         }
//         .logo-inner::after {
//           content: '';
//           position: absolute;
//           bottom: 3px;
//           left: 3px;
//           right: 3px;
//           height: 8px;
//           background: #dc2625;
//           border-radius: 0 0 8px 8px;
//         }
//         .yellow-center {
//           position: absolute;
//           top: 50%;
//           left: 50%;
//           transform: translate(-50%, -50%);
//           width: 20px;
//           height: 4px;
//           background: #eab308;
//           z-index: 2;
//         }
//         .balance-scale {
//           position: absolute;
//           top: 30%;
//           left: 50%;
//           transform: translateX(-50%);
//           z-index: 3;
//         }
//         .balance-scale::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: 50%;
//           transform: translateX(-50%);
//           width: 12px;
//           height: 1px;
//           background: #374151;
//         }
//         .balance-scale::after {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: 50%;
//           transform: translateX(-50%);
//           width: 1px;
//           height: 4px;
//           background: #374151;
//         }
//       `}</style>
      
//       {/* Header Section */}
//       <div className="relative">
//         <div className="bg-gradient-to-b from-blue-600 to-blue-800 px-4 py-3 text-white">
//           <div className="flex items-center gap-3">
//             {/* Logo */}
//             <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 border-2 border-green-600">
//               <div className="logo-inner w-8 h-8">
//                 <div className="yellow-center"></div>
//                 <div className="balance-scale"></div>
//               </div>
//             </div>
            
//             {/* Text */}
//             <div className="flex-1">
//               <div className="text-sm font-bold leading-tight">
//                 THE NASHIK ROAD DEOLALI VYAPARI
//               </div>
//               <div className="text-sm font-bold leading-tight">
//                 SAHAKARI BANK LTD.,NASIK ROAD
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Curved transition between blue and yellow */}
//         <div className="relative h-8 bg-yellow-500">
//           <svg 
//             viewBox="0 0 400 32" 
//             className="w-full h-full absolute top-0"
//             preserveAspectRatio="none"
//           >
//             <path 
//               d="M0,0 Q200,32 400,0 L400,0 L0,0 Z" 
//               fill="url(#blueGradient)"
//             />
//             <defs>
//               <linearGradient id="blueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
//                 <stop offset="0%" stopColor="#1e40af" />
//                 <stop offset="100%" stopColor="#1e3a8a" />
//               </linearGradient>
//             </defs>
//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BankHeader;









            // This is perfect








// import React from 'react';

// const BankHeader = () => {
//   return (
//     <div className="w-full max-w-md mx-auto">
//       <style jsx>{`
//         .curved-bottom {
//           position: relative;
//           background: #eab308;
//           height: 30px;
//           overflow: hidden;
//         }
//         .curved-bottom::after {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: -10%;
//           width: 120%;
//           height: 60px;
//           background: #eab308;
//           border-radius: 50%;
//           transform: translateY(-50%);
//         }
//         .logo-inner {
//           background: white;
//           border-radius: 50%;
//           position: relative;
//           border: 2px solid #dc2625;
//         }
//         .logo-inner::before {
//           content: '';
//           position: absolute;
//           top: 3px;
//           left: 3px;
//           right: 3px;
//           height: 8px;
//           background: #dc2625;
//           border-radius: 8px 8px 0 0;
//         }
//         .logo-inner::after {
//           content: '';
//           position: absolute;
//           bottom: 3px;
//           left: 3px;
//           right: 3px;
//           height: 8px;
//           background: #dc2625;
//           border-radius: 0 0 8px 8px;
//         }
//         .yellow-center {
//           position: absolute;
//           top: 50%;
//           left: 50%;
//           transform: translate(-50%, -50%);
//           width: 20px;
//           height: 4px;
//           background: #eab308;
//           z-index: 2;
//         }
//         .balance-scale {
//           position: absolute;
//           top: 30%;
//           left: 50%;
//           transform: translateX(-50%);
//           z-index: 3;
//         }
//         .balance-scale::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: 50%;
//           transform: translateX(-50%);
//           width: 12px;
//           height: 1px;
//           background: #374151;
//         }
//         .balance-scale::after {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: 50%;
//           transform: translateX(-50%);
//           width: 1px;
//           height: 4px;
//           background: #374151;
//         }
//       `}</style>
      
//       {/* Header Section */}
//       <div className="relative">
//         <div className="bg-gradient-to-b from-blue-600 to-blue-800 px-4 py-3 text-white">
//           <div className="flex items-center gap-3">
//             {/* Text - logo is now positioned at transition */}
//             <div className="flex-1 ml-16">
//               <div className="text-sm font-bold leading-tight">
//                 THE NASHIK ROAD DEOLALI VYAPARI
//               </div>
//               <div className="text-sm font-bold leading-tight">
//                 SAHAKARI BANK LTD.,NASIK ROAD
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Curved transition between blue and yellow */}
//         <div className="relative h-8 bg-yellow-500">
//           <svg 
//             viewBox="0 0 400 32" 
//             className="w-full h-full absolute top-0"
//             preserveAspectRatio="none"
//           >
//             <path 
//               d="M0,0 Q200,32 400,0 L400,0 L0,0 Z" 
//               fill="url(#blueGradient)"
//             />
//             <defs>
//               <linearGradient id="blueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
//                 <stop offset="0%" stopColor="#1e40af" />
//                 <stop offset="100%" stopColor="#1e3a8a" />
//               </linearGradient>
//             </defs>
//           </svg>
          
//           {/* Logo positioned at the transition */}
//           <div className="absolute left-4 top-1/9 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-green-600">
//             <div className="logo-inner w-8 h-8">
//               <div className="yellow-center"></div>
//               <div className="balance-scale"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BankHeader;























// import React, { useState, useEffect, useRef } from 'react';
// import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

// // Mock translation function for demo
// const useTranslation = () => {
//   const t = (key: any) => {
//     const translations = {
//       'home': 'Home',
//       'about': 'About',
//       'about_us': 'About Us',
//       'activities_social': 'Social Activities',
//       'management': 'Management',
//       'services________': 'Services',
//       'digital_services': 'Digital Services',
//       'regular_services': 'Regular Services',
//       'loan_scheme': 'Loan Schemes',
//       'deposit_advances_title': 'Deposit Advances',
//       'nsc_loan_title': 'NSC Loan',
//       'gold_mortgage_loan_title': 'Gold Mortgage Loan',
//       'vehicle_loan': 'Vehicle Loan',
//       'business_machinery_loan_title': 'Business Machinery Loan',
//       'shop_shed_loan_title': 'Shop & Shed Loan',
//       'small_business_loan_title': 'Small Business Loan',
//       'hypothecation_small_business_loan_title': 'Hypothecation Small Business Loan',
//       'hypothecation_cash_credit_loan_title': 'Hypothecation Cash Credit Loan',
//       'construction_loan_title': 'Construction Loan',
//       'educational_loan_title': 'Educational Loan',
//       'installment_cash_credit_loan_title': 'Installment Cash Credit Loan',
//       'staff_loan_title': 'Staff Loan',
//       'housing_loan_employees_title': 'Housing Loan (Employees)',
//       'housing_loan_shares_title': 'Housing Loan (Shareholders)',
//       'agricultural_loan_title': 'Agricultural Loan',
//       'gold_mortgage_cash_credit_loan_title': 'Gold Mortgage Cash Credit Loan',
//       'housing_loan_merchants_title': 'Housing Loan (Merchants)',
//       'deposit_scheme': 'Deposit Schemes',
//       'saving_account_title_': 'Saving Account',
//       'current_account_title': 'Current Account',
//       'deposit_account_title': 'Deposit Account',
//       'quick_access': 'Quick Access',
//       'interest_rates': 'Interest Rates',
//       'schemes': 'Schemes',
//       'career': 'Career',
//       'ifsc_code': 'IFSC Code',
//       'download': 'Downloads',
//       'bank_holidays': 'Bank Holidays',
//       'tds_information': 'TDS Information',
//       'inoperative_accounts': 'Inoperative Accounts',
//       'deaf_account_list': 'Deaf Account List',
//       'service_charges': 'Service Charges',
//       'imps_terms_conditions': 'IMPS Terms & Conditions',
//       'privacy_policy': 'Privacy Policy',
//       'tender_notice': 'Tender Notice',
//       'branches': 'Branches',
//       'contact_us': 'Contact Us',
//       'rbi_license': 'RBI License No: COOP/LIC/2019-20/123'
//     };
//     return translations[key] || key;
//   };
  
//   const i18n = {
//     language: 'en',
//     changeLanguage: (lang) => console.log('Language changed to:', lang)
//   };
  
//   return { t, i18n };
// };

// // Mock NavLink component
// const NavLink = ({ to, className, onClick, children, end }) => (
//   <a 
//     href={to} 
//     className={typeof className === 'function' ? className({ isActive: false }) : className}
//     onClick={(e) => {
//       e.preventDefault();
//       if (onClick) onClick();
//     }}
//   >
//     {children}
//   </a>
// );

// type DropdownKey = 'about' | 'services' | 'quickAccess' | 'loanSchemes' | 'depositScheme';

// interface DropdownItem {
//   label: string;
//   path: string;
//   isExternal?: boolean;
// }

// interface DropdownMenu {
//   label: string;
//   key: DropdownKey;
//   items: DropdownItem[];
//   columns?: number;
// }

// interface NavItem {
//   label: string;
//   path: string;
//   dropdown?: boolean;
//   dropdownKey?: DropdownKey;
//   isLanguage?: boolean;
//   languageCode?: string;
// }

// const BankHeader = () => {
//   const { t, i18n } = useTranslation();

//   // State management
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const navRef = useRef(null);
//   const dropdownRefs = useRef(new Map());

//   // Event handlers
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (navRef.current && !navRef.current.contains(event.target)) {
//         setOpenDropdown(null);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   // Dropdown configurations
//   const dropdownMenus = {
//     about: {
//       label: t('about'),
//       key: 'about',
//       columns: 2,
//       items: [
//         { label: t('about_us'), path: '/about-us' },
//         { label: t('activities_social'), path: '/activities-social' },
//       ],
//     },
//     services: {
//       label: t('services________'),
//       key: 'services',
//       columns: 3,
//       items: [
//         { label: t('digital_services'), path: '/digital-banking-services' },
//         { label: t('regular_services'), path: '/regular-services' },
//       ],
//     },
//     loanSchemes: {
//       label: t('loan_scheme'),
//       key: 'loanSchemes',
//       columns: 3,
//       items: [
//         { label: t('deposit_advances_title'), path: '/deposit-advances' },
//         { label: t('nsc_loan_title'), path: '/national-saving-certificate' },
//         { label: t('gold_mortgage_loan_title'), path: '/gold-mortgage-loan' },
//         { label: t('vehicle_loan'), path: '/vehicle-loan' },
//         { label: t('business_machinery_loan_title'), path: '/buisness-machinary-loan' },
//         { label: t('shop_shed_loan_title'), path: '/loan-shop-shed' },
//         { label: t('small_business_loan_title'), path: '/small-business-loan' },
//         { label: t('hypothecation_small_business_loan_title'), path: '/hypothecation-loan' },
//         { label: t('hypothecation_cash_credit_loan_title'), path: '/hypothecation-cash-credit-loan' },
//         { label: t('construction_loan_title'), path: '/construction-loan' },
//         { label: t('educational_loan_title'), path: '/educational-loan' },
//         { label: t('installment_cash_credit_loan_title'), path: '/installment-loan' },
//         { label: t('staff_loan_title'), path: '/staff-loan' },
//         { label: t('housing_loan_employees_title'), path: '/housing-employees-loan' },
//         { label: t('housing_loan_shares_title'), path: '/housing-loan-share-holders' },
//         { label: t('agricultural_loan_title'), path: '/agricultural-loan' },
//         { label: t('gold_mortgage_cash_credit_loan_title'), path: '/gold-morgage-cash-credit' },
//         { label: t('housing_loan_merchants_title'), path: '/housing-loan-merchant' },
//       ],
//     },
//     depositScheme: {
//       label: t('deposit_scheme'),
//       key: 'depositScheme',
//       columns: 1,
//       items: [
//         { label: t('saving_account_title_'), path: '/banking-service/saving-services' },
//         { label: t('current_account_title'), path: '/banking-service/current-services' },
//         { label: t('deposit_account_title'), path: '/banking-service/deposit-services' },
//       ],
//     },
//     quickAccess: {
//       label: t('quick_access'),
//       key: 'quickAccess',
//       columns: 3,
//       items: [
//         { label: t('interest_rates'), path: '/interest-rates' },
//         { label: t('schemes'), path: '/schemes' },
//         { label: t('career'), path: 'https://www.mucbf.in/exam-108', isExternal: true },
//         { label: t('ifsc_code'), path: '/ifsc-code' },
//         { label: t('download'), path: '/download' },
//         { label: t('bank_holidays'), path: '/bank-holidays' },
//         { label: t('tds_information'), path: '/tds-information' },
//         { label: t('inoperative_accounts'), path: '/inoperative-accounts' },
//         { label: t('deaf_account_list'), path: '/deaf-account-list' },
//         { label: t('service_charges'), path: '/service-charges' },
//         { label: t('imps_terms_conditions'), path: '/imps-terms-conditions' },
//         { label: t('privacy_policy'), path: '/privacy-policy' },
//       ],
//     },
//   };

//   // Navigation items
//   const navItems = [
//     { label: t('home'), path: '/' },
//     { label: t('about'), path: '#', dropdown: true, dropdownKey: 'about' },
//     { label: t('management'), path: '/management' },
//     { label: t('services________'), path: '#', dropdown: true, dropdownKey: 'services' },
//     { label: t('loan_scheme'), path: '#', dropdown: true, dropdownKey: 'loanSchemes' },
//     { label: t('deposit_scheme'), path: '#', dropdown: true, dropdownKey: 'depositScheme' },
//     { label: t('quick_access'), path: '#', dropdown: true, dropdownKey: 'quickAccess' },
//     { label: t('tender_notice'), path: '/tender-notice' },
//     { label: t('branches'), path: '/branches' },
//     { label: t('contact_us'), path: '/contact' },
//     { label: 'English', path: '#', isLanguage: true, languageCode: 'en' },
//     { label: 'मराठी', path: '#', isLanguage: true, languageCode: 'mr' },
//   ];

//   // Helper functions
//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//     setOpenDropdown(null);
//   };

//   const toggleDropdown = (key, e) => {
//     e.preventDefault();
//     setOpenDropdown(openDropdown === key ? null : key);
//   };

//   const closeAllMenus = () => {
//     setOpenDropdown(null);
//     setIsMobileMenuOpen(false);
//   };

//   const handleLanguageChange = (languageCode) => {
//     i18n.changeLanguage(languageCode);
//     closeAllMenus();
//   };

//   const splitIntoColumns = (items, columns) => {
//     const itemsPerColumn = Math.ceil(items.length / columns);
//     return Array.from({ length: columns }, (_, i) =>
//       items.slice(i * itemsPerColumn, (i + 1) * itemsPerColumn)
//     );
//   };

//   // Component for dropdown menu items
//   const DropdownMenuItem = ({ item, isMobile, onItemClick }) => {
//     const itemClass = isMobile
//       ? 'block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-yellow-500 hover:text-black'
//       : 'flex items-center px-3 py-2 text-sm text-white hover:bg-blue-700 hover:text-white transition-colors duration-200 rounded hover:scale-[1.02]';

//     if (item.isExternal) {
//       return (
//         <a
//           href={item.path}
//           target="_blank"
//           rel="noopener noreferrer"
//           className={itemClass}
//           onClick={onItemClick}
//         >
//           <span className="mr-2">▶</span>
//           {item.label}
//         </a>
//       );
//     }

//     return (
//       <NavLink
//         to={item.path}
//         className={({ isActive }) =>
//           `${itemClass} ${isActive && !isMobile ? 'bg-blue-700 text-white' : ''}`
//         }
//         onClick={onItemClick}
//         end
//       >
//         <span className="mr-2">▶</span>
//         {item.label}
//       </NavLink>
//     );
//   };

//   // Component for navigation items
//   const NavItemComponent = ({ item, isMobile }) => {
//     if (item.isLanguage && item.languageCode) {
//       const isActive = i18n.language === item.languageCode;
//       const buttonClass = isMobile
//         ? `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-yellow-500 text-black' : 'text-gray-900 hover:bg-yellow-500 hover:text-black'}`
//         : `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${isActive ? 'bg-yellow-500 text-black' : 'text-gray-900 hover:bg-yellow-500 hover:text-black'}`;

//       return (
//         <button
//           onClick={() => handleLanguageChange(item.languageCode)}
//           className={buttonClass}
//         >
//           {item.label}
//         </button>
//       );
//     }

//     if (item.dropdown && item.dropdownKey) {
//       const menu = dropdownMenus[item.dropdownKey];
//       const isOpen = openDropdown === item.dropdownKey;
//       const columns = splitIntoColumns(menu.items, menu.columns || 1);

//       const buttonClass = isMobile
//         ? 'flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-yellow-500 hover:text-black'
//         : `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center ${
//             isOpen ? 'bg-yellow-500 text-black' : 'text-gray-900 hover:bg-yellow-500 hover:text-black'
//           } hover:scale-105 font-bold cursor-pointer`;

//       return (
//         <div className={isMobile ? '' : 'relative'}>
//           <button
//             onClick={(e) => toggleDropdown(item.dropdownKey, e)}
//             className={buttonClass}
//             aria-expanded={isOpen}
//           >
//             {menu.label}
//             <FaChevronDown
//               className={`ml-1 h-4 w-4 transition-transform duration-200 ${
//                 isOpen ? 'transform rotate-180' : ''
//               }`}
//             />
//           </button>

//           {isOpen && (
//             <div
//               ref={(el) => {
//                 dropdownRefs.current.set(item.dropdownKey, el);
//               }}
//               className={
//                 isMobile
//                   ? 'pl-4 mt-1 space-y-1'
//                   : `absolute mt-2 bg-blue-800 rounded-lg shadow-2xl z-20 min-w-max border border-blue-500 max-w-[90vw] md:max-w-[600px]`
//               }
//               style={{ left: 'auto' }}
//             >
//               {isMobile ? (
//                 menu.items.map((dropdownItem, idx) => (
//                   <DropdownMenuItem
//                     key={idx}
//                     item={dropdownItem}
//                     isMobile={isMobile}
//                     onItemClick={closeAllMenus}
//                   />
//                 ))
//               ) : (
//                 <div className={`grid grid-cols-${menu.columns || 1} gap-1 p-4`}>
//                   {columns.map((column, colIndex) => (
//                     <div key={colIndex} className="space-y-1">
//                       {column.map((dropdownItem, idx) => (
//                         <DropdownMenuItem
//                           key={idx}
//                           item={dropdownItem}
//                           isMobile={false}
//                           onItemClick={closeAllMenus}
//                         />
//                       ))}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       );
//     }

//     const linkClass = isMobile
//       ? ({ isActive }) =>
//           `block px-3 py-2 rounded-md text-base font-medium ${
//             isActive ? 'bg-yellow-500 text-black' : 'text-gray-900 hover:bg-yellow-500 hover:text-black'
//           }`
//       : ({ isActive }) =>
//           `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
//             isActive ? 'bg-yellow-500 text-black' : 'text-gray-900 hover:bg-yellow-500 hover:text-black'
//           } hover:scale-105`;

//     return (
//       <NavLink
//         to={item.path}
//         className={linkClass}
//         onClick={closeAllMenus}
//         end={item.path === '/'}
//       >
//         {item.label}
//       </NavLink>
//     );
//   };

//   return (
//     <div className="w-full max-w-6xl mx-auto relative z-30 shadow-lg">
//       <style jsx>{`
//         .curved-bottom {
//           position: relative;
//           background: #eab308;
//           height: 30px;
//           overflow: hidden;
//         }
//         .curved-bottom::after {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: -10%;
//           width: 120%;
//           height: 60px;
//           background: #eab308;
//           border-radius: 50%;
//           transform: translateY(-50%);
//         }
//         .logo-inner {
//           background: white;
//           border-radius: 50%;
//           position: relative;
//           border: 2px solid #dc2625;
//         }
//         .logo-inner::before {
//           content: '';
//           position: absolute;
//           top: 3px;
//           left: 3px;
//           right: 3px;
//           height: 8px;
//           background: #dc2625;
//           border-radius: 8px 8px 0 0;
//         }
//         .logo-inner::after {
//           content: '';
//           position: absolute;
//           bottom: 3px;
//           left: 3px;
//           right: 3px;
//           height: 8px;
//           background: #dc2625;
//           border-radius: 0 0 8px 8px;
//         }
//         .yellow-center {
//           position: absolute;
//           top: 50%;
//           left: 50%;
//           transform: translate(-50%, -50%);
//           width: 20px;
//           height: 4px;
//           background: #eab308;
//           z-index: 2;
//         }
//         .balance-scale {
//           position: absolute;
//           top: 30%;
//           left: 50%;
//           transform: translateX(-50%);
//           z-index: 3;
//         }
//         .balance-scale::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: 50%;
//           transform: translateX(-50%);
//           width: 12px;
//           height: 1px;
//           background: #374151;
//         }
//         .balance-scale::after {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: 50%;
//           transform: translateX(-50%);
//           width: 1px;
//           height: 4px;
//           background: #374151;
//         }
//       `}</style>
      
//       {/* Header Section */}
//       <div className="relative">
//         {/* Blue header section */}
//         <div className="bg-gradient-to-b from-blue-600 to-blue-800 px-4 py-3 text-white">
//           <div className="flex items-center justify-between">
//             {/* Logo positioned at the left */}
//             <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-green-600 flex-shrink-0">
//               <div className="logo-inner w-8 h-8">
//                 <div className="yellow-center"></div>
//                 <div className="balance-scale"></div>
//               </div>
//             </div>
            
//             {/* Bank name */}
//             <div className="flex-1 mx-4">
//               <div className="text-sm md:text-base font-bold leading-tight text-center">
//                 THE NASHIK ROAD DEOLALI VYAPARI
//               </div>
//               <div className="text-sm md:text-base font-bold leading-tight text-center">
//                 SAHAKARI BANK LTD.,NASIK ROAD
//               </div>
//             </div>

//             {/* Mobile menu button */}
//             <div className="sm:hidden">
//               <button
//                 onClick={toggleMobileMenu}
//                 className="inline-flex items-center justify-center p-2 rounded-md text-blue-100 hover:text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-white"
//                 aria-expanded={isMobileMenuOpen}
//               >
//                 <span className="sr-only">Open main menu</span>
//                 {isMobileMenuOpen ? (
//                   <FaTimes className="block h-6 w-6" />
//                 ) : (
//                   <FaBars className="block h-6 w-6" />
//                 )}
//               </button>
//             </div>

//             {/* RBI License info */}
//             <div className="hidden sm:block text-white text-xs font-medium bg-blue-700 px-3 py-1 rounded-md shadow-sm">
//               <p>{t('rbi_license')}</p>
//             </div>
//           </div>
//         </div>
        
//         {/* Curved transition between blue and yellow */}
//         <div className="relative h-8 bg-yellow-500">
//           <svg 
//             viewBox="0 0 400 32" 
//             className="w-full h-full absolute top-0"
//             preserveAspectRatio="none"
//           >
//             <path 
//               d="M0,0 Q200,32 400,0 L400,0 L0,0 Z" 
//               fill="url(#blueGradient)"
//             />
//             <defs>
//               <linearGradient id="blueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
//                 <stop offset="0%" stopColor="#1e40af" />
//                 <stop offset="100%" stopColor="#1e3a8a" />
//               </linearGradient>
//             </defs>
//           </svg>
//         </div>

//         {/* Navigation Menu */}
//         <nav
//           className={`bg-yellow-500 transition-all duration-300 ${isScrolled ? 'py-1' : 'py-2'}`}
//           ref={navRef}
//           style={{
//             boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
//           }}
//         >
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex justify-between h-12 items-center">
//               {/* Desktop navigation */}
//               <div className="hidden sm:flex items-center space-x-1 w-full justify-center flex-wrap">
//                 {navItems.map((item, index) => (
//                   <NavItemComponent key={index} item={item} isMobile={false} />
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Mobile menu */}
//           {isMobileMenuOpen && (
//             <div className="sm:hidden bg-yellow-500 pb-4 px-2 shadow-inner rounded-b-lg">
//               <div className="pt-2 pb-3 space-y-1">
//                 {navItems.map((item, index) => (
//                   <NavItemComponent key={index} item={item} isMobile={true} />
//                 ))}
//               </div>
//             </div>
//           )}
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default BankHeader;