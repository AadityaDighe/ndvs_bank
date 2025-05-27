import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown, FaGlobe } from 'react-icons/fa';
import ndvs_logo from '@assets/images/ndvs_logo.png';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

// Type definitions for better maintainability
type DropdownKey = 'about' | 'services' | 'quickAccess';

interface DropdownItem {
  label: string;
  path: string;
  isExternal?: boolean;
}

interface DropdownMenu {
  label: string;
  key: DropdownKey;
  items: DropdownItem[];
}

interface NavItem {
  label: string;
  path: string;
  dropdown?: boolean;
  dropdownKey?: DropdownKey;
}

const Navbar: React.FC = () => {
  const { t } = useTranslation();

  // State for menu toggles
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<DropdownKey | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Ref for handling outside clicks
  const navRef = useRef<HTMLDivElement>(null);

  // Handle outside clicks to close dropdowns
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

  // Add scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Dropdown menu configuration
  const dropdownMenus: Record<DropdownKey, DropdownMenu> = {
    about: {
      label: t('about'),
      key: 'about',
      items: [
        { label: t('about_us'), path: '/about-us' },
        { label: t('activities_social'), path: '/activities-social' },
      ],
    },
    services: {
      label: t('services_'),
      key: 'services',
      items: [
        { label: t('digital_services'), path: '/digital-banking-services' },
        { label: t('regular_services'), path: '/regular-services' },
      ],
    },
    quickAccess: {
      label: t('quick_access'),
      key: 'quickAccess',
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

  // Regular navigation items
  const navItems: NavItem[] = [
    { label: t('home'), path: '/' },
    { label: t('about'), path: '#', dropdown: true, dropdownKey: 'about' },
    { label: t('management'), path: '/management' },
    { label: t('services_'), path: '#', dropdown: true, dropdownKey: 'services' },
    { label: t('loan_scheme'), path: '/banking-service/loan-services' },
    { label: t('deposit_scheme'), path: '/service' },
    { label: t('quick_access'), path: '#', dropdown: true, dropdownKey: 'quickAccess' },
    { label: t('tender_notice'), path: '/tender-notice' },
    { label: t('branches'), path: '/branches' },
    { label: t('contact_us'), path: '/contact' },
  ];

  // Menu toggle handlers
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

  // Component for dropdown menu item (link or external link)
  const DropdownMenuItem = ({
    item,
    isMobile,
    onItemClick,
  }: {
    item: DropdownItem;
    isMobile: boolean;
    onItemClick: () => void;
  }) => {
    const itemClass = isMobile
      ? 'block px-3 py-2 rounded-md text-base font-medium text-blue-100 hover:bg-blue-500 hover:text-white'
      : 'block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50';

    if (item.isExternal) {
      return (
        <a
          href={item.path}
          target="_blank"
          rel="noopener noreferrer"
          className={itemClass}
          onClick={onItemClick}
        >
          {item.label}
        </a>
      );
    }

    return (
      <NavLink
        to={item.path}
        className={({ isActive }) =>
          `${itemClass} ${isActive && !isMobile ? 'bg-blue-100 text-blue-700' : ''}`
        }
        onClick={onItemClick}
        end
      >
        {item.label}
      </NavLink>
    );
  };

  // Component for nav item (regular link or dropdown trigger)
  const NavItemComponent = ({
    item,
    isMobile,
  }: {
    item: NavItem;
    isMobile: boolean;
  }) => {
    if (item.dropdown && item.dropdownKey) {
      const menu = dropdownMenus[item.dropdownKey];
      const isOpen = openDropdown === item.dropdownKey;

      const buttonClass = isMobile
        ? 'flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium text-blue-100 hover:bg-blue-500 hover:text-white'
        : `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center ${isOpen ? 'bg-blue-700 text-white' : 'text-blue-100 hover:bg-blue-500 hover:text-white'
        }`;

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
              className={
                isMobile
                  ? 'pl-4 mt-1 space-y-1'
                  : 'absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg z-20 max-h-96 overflow-y-auto py-1'
              }
            >
              {menu.items.map((dropdownItem, idx) => (
                <DropdownMenuItem
                  key={idx}
                  item={dropdownItem}
                  isMobile={isMobile}
                  onItemClick={closeAllMenus}
                />
              ))}
            </div>
          )}
        </div>
      );
    }

    const linkClass = isMobile
      ? ({ isActive }: { isActive: boolean }) =>
        `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-blue-600 text-white' : 'text-blue-100 hover:bg-blue-500 hover:text-white'
        }`
      : ({ isActive }: { isActive: boolean }) =>
        `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${isActive ? 'bg-blue-700 text-white' : 'text-blue-100 hover:bg-blue-500 hover:text-white'
        }`;

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
    <div className={`bg-blue-600 shadow-lg z-30 transition-all duration-300 ${isScrolled ? 'shadow-xl' : ''}`}>
      {/* Bank header with logo */}
      <div className="bg-blue-600 py-4 pt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center justify-between w-full sm:w-auto">
            <img
              src={ndvs_logo}
              alt="Bank Logo"
              className="h-10 sm:h-20 w-auto mb-2 sm:mb-0 hover:opacity-90 transition-opacity"
            />
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
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="text-white text-xs sm:text-sm font-medium text-center sm:text-right bg-blue-700 px-4 py-2 rounded-md shadow-sm">
              <p>{t('rbi_license')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav
        className={`bg-blue-800 transition-all duration-300 ${isScrolled ? 'py-1' : 'py-2'}`}
        ref={navRef}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Desktop navigation */}
            <div className="hidden sm:flex items-center space-x-1 w-full justify-center flex-wrap">
              {navItems.map((item, index) => (
                <NavItemComponent key={index} item={item} isMobile={false} />
              ))}
              {/* Language Switcher in Desktop Nav */}
              <div className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-blue-100 hover:bg-blue-500 hover:text-white">
                <FaGlobe className="mr-2 h-4 w-4" />
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="sm:hidden bg-blue-700 pb-4 px-2 shadow-inner">
            <div className="pt-2 pb-3 space-y-1">
              {navItems.map((item, index) => (
                <NavItemComponent key={index} item={item} isMobile={true} />
              ))}
              {/* Language Switcher in Mobile Menu */}
              <div className="px-3 py-2 rounded-md text-base font-medium text-blue-100 hover:bg-blue-500 hover:text-white flex items-center">
                <FaGlobe className="mr-2 h-5 w-5" />
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;