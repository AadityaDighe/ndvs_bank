import ndvs_logo from '@assets/images/vyapari_bank_logo_.png';
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

      <div className="flex justify-center my-10">
        <div className="flex items-center gap-4 max-w-4xl w-full px-4">
          {/* Logo on the left */}
          <div className="w-16 lg:w-20 h-auto">
            <img
              src={ndvs_logo}
              alt="Bank Logo"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Bank Name on the right */}
          <div className="flex flex-col text-left">
            <div className="text-lg font-bold leading-tight">
              THE NASIK ROAD DEOLALI VYAPARI SAHAKARI BANK LTD., NASIK ROAD
            </div>
            <div className="text-lg font-semibold leading-tight">
              (NDVS Bank)
            </div>
          </div>
        </div>
      </div>



      <div className="max-w-7xl mx-auto">
        {/* Mobile: Form on top */}
        <div className="block lg:hidden mb-10 bg-gray-800 p-6 rounded-lg">
          <h3 className="text-white font-semibold text-lg mb-4">Launch Complaint</h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="complaint-type" className="block text-sm font-medium mb-1">
                Select Complaint Type
              </label>
              <select
                id="complaint-type"
                className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-yellow-500"
              >
                <option value="">Select Complaint Type</option>
                <option value="ATM">ATM</option>
                <option value="POS">POS</option>
                <option value="ECOM">ECOM</option>
                <option value="IMPS">IMPS</option>
                <option value="UPI">UPI</option>
                <option value="Mobile Banking">Mobile Banking</option>
              </select>
            </div>

            <div>
              <label htmlFor="full-name" className="block text-sm font-medium mb-1">
                Enter Full Name
              </label>
              <input
                type="text"
                id="full-name"
                className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-yellow-500"
                placeholder="Your full name"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="mobile" className="block text-sm font-medium mb-1">
                  Mobile
                </label>
                <input
                  type="tel"
                  id="mobile"
                  className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-yellow-500"
                  placeholder="Mobile number"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-yellow-500"
                  placeholder="Email address"
                />
              </div>
            </div>

            <div>
              <label htmlFor="queries" className="block text-sm font-medium mb-1">
                Enter Queries
              </label>
              <textarea
                id="queries"
                rows={3}
                className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-yellow-500"
                placeholder="Your message or queries"
              ></textarea>
            </div>

            <button
              type="button"
              className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-2 px-4 rounded-md transition duration-200"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Desktop: Navigation and Form side by side */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Navigation Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 flex-1">
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

          {/* Form - Hidden on mobile, shown on desktop */}
          <div className="hidden lg:block w-full max-w-md bg-gray-800 p-6 rounded-lg h-fit">
            <h3 className="text-white font-semibold text-lg mb-4">Launch Complaint</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="complaint-type" className="block text-sm font-medium mb-1">
                  Select Complaint Type
                </label>
                <select
                  id="complaint-type"
                  className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-yellow-500"
                >
                    <option value="">Select Complaint Type</option>
                    <option value="ATM">ATM</option>
                    <option value="POS">POS</option>
                    <option value="ECOM">ECOM</option>
                    <option value="IMPS">IMPS</option>
                    <option value="UPI">UPI</option>
                    <option value="Mobile Banking">Mobile Banking</option>
                </select>
              </div>

              <div>
                <label htmlFor="full-name" className="block text-sm font-medium mb-1">
                  Enter Full Name
                </label>
                <input
                  type="text"
                  id="full-name"
                  className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-yellow-500"
                  placeholder="Your full name"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="mobile" className="block text-sm font-medium mb-1">
                    Mobile
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-yellow-500"
                    placeholder="Mobile number"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-yellow-500"
                    placeholder="Email address"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="queries" className="block text-sm font-medium mb-1">
                  Enter Queries
                </label>
                <textarea
                  id="queries"
                  rows={3}
                  className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-yellow-500"
                  placeholder="Your message or queries"
                ></textarea>
              </div>

              <button
                type="button"
                className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-2 px-4 rounded-md transition duration-200"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Ndvsbank. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;