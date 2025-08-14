import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import ndvs_logo from '@assets/images/vyapari_bank_logo_.png';

type DropdownKey = 'about' | 'services' | 'quickAccess' | 'loanSchemes' | 'depositScheme';

interface DropdownItem {
  label: string;
  path: string;
  isExternal?: boolean;
}

interface DropdownMenu {
  label: string;
  key: DropdownKey;
  items: DropdownItem[];
  columns?: number;
}

interface NavItem {
  label: string;
  path: string;
  dropdown?: boolean;
  dropdownKey?: DropdownKey;
}

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<DropdownKey | null>(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement>(null);
  const dropdownRefs = useRef<Map<DropdownKey, HTMLDivElement>>(new Map());

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const dropdownMenus: { [key in DropdownKey]: DropdownMenu } = {
    about: {
      label: t('about'),
      key: 'about',
      columns: 2,
      items: [
        { label: t('about_us'), path: '/about-us' },
        { label: t('activities_social'), path: '/activities-social' },
      ],
    },
    services: {
      label: t('services________'),
      key: 'services',
      columns: 3,
      items: [
        { label: t('digital_services'), path: '/digital-banking-services' },
        { label: t('regular_services'), path: '/regular-services' },
      ],
    },
    loanSchemes: {
      label: t('loan_scheme'),
      key: 'loanSchemes',
      columns: 3,
      items: [
        { label: t('deposit_advances_title'), path: '/deposit-advances' },
        { label: t('hypothecation_small_business_loan_title'), path: '/hypothecation-loan' },
        { label: t('nsc_loan_title'), path: '/national-saving-certificate' },
        { label: t('agricultural_loan_title'), path: '/agricultural-loan' },
        { label: t('shop_shed_loan_title'), path: '/loan-shop-shed' },
        { label: t('educational_loan_title'), path: '/educational-loan' },
        { label: t('gold_mortgage_loan_title'), path: '/gold-mortgage-loan' },
        { label: t('gold_mortgage_cash_credit_loan_title'), path: '/gold-morgage-cash-credit' },
        { label: t('vehicle_loan_title'), path: '/vehicle-loan' },
        { label: t('housing_loan_employees_title'), path: '/housing-employees-loan' },

        // { label: t('housing_loan_shares_title'), path: '/housing-loan-share-holders' },
        // { label: t('business_machinery_loan_title'), path: '/buisness-machinary-loan' },
        // { label: t('small_business_loan_title'), path: '/small-business-loan' },
        // { label: t('hypothecation_cash_credit_loan_title'), path: '/hypothecation-cash-credit-loan' },
        // { label: t('construction_loan_title'), path: '/construction-loan' },
        // { label: t('installment_cash_credit_loan_title'), path: '/installment-loan' },
        // { label: t('staff_loan_title'), path: '/staff-loan' },
        // { label: t('housing_loan_merchants_title'), path: '/housing-loan-merchant' },
      ],
    },
    depositScheme: {
      label: t('deposit_scheme'),
      key: 'depositScheme',
      columns: 1,
      items: [
        { label: t('saving_account_title_'), path: '/banking-service/saving-services' },
        { label: t('current_account_title'), path: '/banking-service/current-services' },
        { label: t('deposit_account_title'), path: '/banking-service/deposit-services' },
      ],
    },
    quickAccess: {
      label: t('quick_access'),
      key: 'quickAccess',
      columns: 3,
      items: [
        { label: t('interest_rates'), path: '/interest-rates' },
        { label: t('schemes'), path: '/schemes' },
        { label: t('career'), path: 'https://www.mucbf.in/exam-108', isExternal: true },
        { label: t('ifsc_code'), path: '/ifsc-code' },
        { label: t('download'), path: '/download' },
        { label: t('bank_holidays'), path: '/bank-holidays' },
        { label: t('tds_information'), path: '/tds-information' },
        { label: t('inoperative_accounts'), path: '/inoperative-accounts' },
        { label: t('deaf_account_list'), path: '/deaf-account-list' },
        { label: t('service_charges'), path: '/service-charges' },
        { label: t('imps_terms_conditions'), path: '/imps-terms-conditions' },
        { label: t('privacy_policy'), path: '/privacy-policy' },
      ],
    },
  };

  const navItems: NavItem[] = [
    { label: t('home'), path: '/' },
    { label: t('about'), path: '#', dropdown: true, dropdownKey: 'about' },
    { label: t('management'), path: '/management' },
    { label: t('services________'), path: '#', dropdown: true, dropdownKey: 'services' },
    { label: t('loan_scheme'), path: '#', dropdown: true, dropdownKey: 'loanSchemes' },
    { label: t('deposit_scheme'), path: '#', dropdown: true, dropdownKey: 'depositScheme' },
    { label: t('quick_access'), path: '#', dropdown: true, dropdownKey: 'quickAccess' },
    { label: t('tender_notice'), path: '/tender-notice' },
    { label: t('branches'), path: '/branches' },
    { label: t('contact_us'), path: '/contact' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenDropdown(null);
  };

  const toggleDropdown = (key: DropdownKey, e: React.MouseEvent) => {
    e.preventDefault();
    setOpenDropdown(openDropdown === key ? null : key);
  };

  const closeAllMenus = () => {
    setOpenDropdown(null);
    setIsMobileMenuOpen(false);
  };

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    closeAllMenus();
  };

  const splitIntoColumns = (items: DropdownItem[], columns: number): DropdownItem[][] => {
    const itemsPerColumn = Math.ceil(items.length / columns);
    return Array.from({ length: columns }, (_, i) =>
      items.slice(i * itemsPerColumn, (i + 1) * itemsPerColumn)
    );
  };

  interface DropdownMenuItemProps {
    item: DropdownItem;
    isMobile: boolean;
    onItemClick: () => void;
  }

  const DropdownMenuItem: React.FC<DropdownMenuItemProps> = ({ item, isMobile, onItemClick }) => {
    const itemClass = isMobile
      ? 'block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-yellow-500 hover:text-black'
      : 'flex items-center px-3 py-2 text-sm text-white hover:bg-blue-700 hover:text-white transition-colors duration-200 rounded hover:scale-[1.02]';

    if (item.isExternal) {
      return (
        <a
          href={item.path}
          target="_blank"
          rel="noopener noreferrer"
          className={itemClass}
          onClick={onItemClick}
        >
          <span className="mr-2">▶</span>
          {item.label}
        </a>
      );
    }

    return (
      <NavLink
        to={item.path}
        className={({ isActive }) =>
          `${itemClass} ${isActive && !isMobile ? 'bg-blue-700 text-white' : ''}`
        }
        onClick={onItemClick}
        end
      >
        <span className="mr-2">▶</span>
        {item.label}
      </NavLink>
    );
  };

  interface NavItemComponentProps {
    item: NavItem;
    isMobile: boolean;
  }

  const NavItemComponent: React.FC<NavItemComponentProps> = ({ item, isMobile }) => {
    if (item.dropdown && item.dropdownKey) {
      const menu = dropdownMenus[item.dropdownKey];
      const isOpen = openDropdown === item.dropdownKey;
      const columns = splitIntoColumns(menu.items, menu.columns || 1);

      const buttonClass = isMobile
        ? 'flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-yellow-500 hover:text-black'
        : `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center ${isOpen ? 'bg-yellow-500 text-black' : 'text-gray-900 hover:bg-yellow-500 hover:text-black'
        } hover:scale-105 font-bold cursor-pointer`;

      return (
        <div className={isMobile ? '' : 'relative'}>
          <button
            onClick={(e) => toggleDropdown(item.dropdownKey!, e)}
            className={buttonClass}
            aria-expanded={isOpen}
          >
            {menu.label}
            <FaChevronDown
              className={`ml-1 h-4 w-4 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''
                }`}
            />
          </button>

          {isOpen && (
            <div
              ref={(el) => {
                if (el) dropdownRefs.current.set(item.dropdownKey!, el);
              }}
              className={
                isMobile
                  ? 'pl-4 mt-1 space-y-1'
                  : `absolute mt-2 bg-blue-800 rounded-lg shadow-2xl z-20 min-w-max border border-blue-500 max-w-[90vw] md:max-w-[600px]`
              }
            >
              {isMobile ? (
                menu.items.map((dropdownItem, idx) => (
                  <DropdownMenuItem
                    key={idx}
                    item={dropdownItem}
                    isMobile={isMobile}
                    onItemClick={closeAllMenus}
                  />
                ))
              ) : (
                <div className={`grid grid-cols-${menu.columns || 1} gap-1 p-4`}>
                  {columns.map((column, colIndex) => (
                    <div key={colIndex} className="space-y-1">
                      {column.map((dropdownItem, idx) => (
                        <DropdownMenuItem
                          key={idx}
                          item={dropdownItem}
                          isMobile={false}
                          onItemClick={closeAllMenus}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      );
    }

    const linkClass = isMobile
      ? ({ isActive }: { isActive: boolean }) =>
        `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-yellow-500 text-black' : 'text-gray-900 hover:bg-yellow-500 hover:text-black'
        }`
      : ({ isActive }: { isActive: boolean }) =>
        `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${isActive ? 'bg-yellow-500 text-black' : 'text-gray-900 hover:bg-yellow-500 hover:text-black'
        } hover:scale-105`;

    return (
      <NavLink
        to={item.path}
        className={linkClass}
        onClick={closeAllMenus}
        end={item.path === '/'}
      >
        {item.label}
      </NavLink>
    );
  };

  return (
    <div className="w-full mx-auto relative z-30 shadow-lg">
      <div className="relative">
        <div className="px-4 py-3 text-white relative" style={{ background: 'linear-gradient(to right, #003A79, #01478A, #0052A3)' }}>

          <div className="flex justify-end space-x-4">
            <div className="hidden sm:block text-white text-base font-medium bg-blue-700 px-3 py-1 rounded-md shadow-sm">
              <p>{t('rbi_license')}</p>
            </div>

            <div className="hidden sm:flex space-x-2">
              <button
                onClick={() => handleLanguageChange('en')}
                className={`px-2 py-1 rounded text-base font-medium transition-colors ${i18n.language === 'en' ? 'bg-white text-blue-700' : 'text-white hover:bg-blue-600'}`}
              >
                English
              </button>
              <button
                onClick={() => handleLanguageChange('mr')}
                className={`px-2 py-1 rounded text-base font-medium transition-colors ${i18n.language === 'mr' ? 'bg-white text-blue-700' : 'text-white hover:bg-blue-600'}`}
              >
                मराठी
              </button>
            </div>

            <div className="sm:hidden">
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-blue-100 hover:text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-white"
                aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <FaTimes className="block h-6 w-6" />
                ) : (
                  <FaBars className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between w-full">
            <div className="flex items-center space-x-4 relative mt-10 w-full">
              <div className="absolute bottom-[-2.5rem] w-16 h-30 lg:w-20 lg:h-30 overflow-hidden z-40">
                <img
                  src={ndvs_logo}
                  alt="Bank Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="ml-20 lg:ml-24 flex flex-col w-full">
                <div className="text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-4xl font-bold leading-tight text-left w-full max-w-full break-words">
                  THE NASIK ROAD DEOLALI VYAPARI SAHAKARI BANK LTD., NASIK ROAD
                </div>
                <div className="text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-4xl font-semibold leading-tight text-left w-full max-w-full break-words">
                  (NDVS Bank)
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-8 bg-yellow-500">
          <svg
            viewBox="0 0 400 32"
            className="w-full h-full absolute top-0"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 Q200,32 400,0 L400,0 L0,0 Z"
              fill="url(#blueGradient)"
            />
            <defs>
              <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#003A79" />
                <stop offset="50%" stopColor="#01478A" />
                <stop offset="100%" stopColor="#0052A3" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <nav
          className={`bg-yellow-500 transition-all duration-300 ${isScrolled ? 'py-1' : 'py-2'}`}
          ref={navRef}
          style={{
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}
        >
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-12 items-center">
              <div className="hidden sm:flex items-center space-x-1 w-full justify-center flex-wrap">
                {navItems.map((item, index) => (
                  <NavItemComponent key={index} item={item} isMobile={false} />
                ))}
              </div>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="sm:hidden bg-yellow-500 pb-4 px-2 shadow-inner rounded-b-lg">
              <div className="pt-2 pb-3 space-y-1">
                {navItems.map((item, index) => (
                  <NavItemComponent key={index} item={item} isMobile={true} />
                ))}
                <div className="flex space-x-2 px-3 py-2">
                  <button
                    onClick={() => handleLanguageChange('en')}
                    className={`px-3 py-1 rounded-md text-base font-medium ${i18n.language === 'en' ? 'bg-yellow-600 text-white' : 'bg-gray-200 text-gray-800'}`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => handleLanguageChange('mr')}
                    className={`px-3 py-1 rounded-md text-base font-medium ${i18n.language === 'mr' ? 'bg-yellow-600 text-white' : 'bg-gray-200 text-gray-800'}`}
                  >
                    मराठी
                  </button>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;