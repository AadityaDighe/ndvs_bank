import ndvs_logo from '@assets/images/ndvs_logo.png';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const sections = [
    {
      title: "Home",
      links: [
        { name: "Home", path: "/" },
        { name: "Management", path: "/management" },
        { name: "Tender/Notice", path: "/tender-notice" },
        { name: "Branches", path: "/branches" },
        { name: "Contact Us", path: "/contact" },
      ],
    },
    {
      title: "About",
      links: [
        { name: "About Us", path: "/about-us" },
        { name: "Activities and Social", path: "/activities-social" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Banking Services", path: "/service" },
        { name: "Service Charges", path: "/service-charges" },
        { name: "IMPS Terms and Conditions", path: "/imps-terms-conditions" },
        { name: "Privacy Policy", path: "/privacy-policy" },
      ],
    },
    {
      title: "Quick Access",
      links: [
        { name: "Interest Rates", path: "/interest-rates" },
        { name: "Schemes", path: "/schemes" },
        { name: "IFSC Code", path: "/ifsc-code" },
        { name: "Download", path: "/download" },
      ],
    },
    {
      title: "Bank Information",
      links: [
        { name: "Bank Holidays", path: "/bank-holidays" },
        { name: "TDS Information", path: "/tds-information" },
        { name: "Inoperative Accounts", path: "/inoperative-accounts" },
        { name: "Deaf Account List", path: "/deaf-account-list" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-12">

          <img 
            src={ndvs_logo} 
            alt="Company Logo" 
            className="h-25 w-auto mx-auto mb-10" 
          />

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {sections.map((section, idx) => (
          <div key={idx}>
            <h3 className="text-white font-semibold text-lg mb-4">{section.title}</h3>
            <ul className="space-y-2">
              {section.links.map((link, i) => (
                <li key={i}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `hover:text-white text-sm transition-colors duration-200 ${
                        isActive ? 'text-white' : 'text-gray-300'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} NDVS Bank of India. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;