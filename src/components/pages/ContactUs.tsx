const ContactUs = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-blue-700 text-center text-center mb-12">Contact Us</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <form className="space-y-6">
              <div>
                <label htmlFor="enquiry-name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="enquiry-name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none"
                  placeholder="Your name"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="enquiry-email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email ID
                  </label>
                  <input
                    type="email"
                    id="enquiry-email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <label htmlFor="enquiry-mobile" className="block text-sm font-medium text-gray-700 mb-1">
                    Mobile No.
                  </label>
                  <input
                    type="tel"
                    id="enquiry-mobile"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none"
                    placeholder="Mobile number"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="enquiry-subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="enquiry-subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none"
                  placeholder="Subject of enquiry"
                />
              </div>

              <div>
                <label htmlFor="enquiry-type" className="block text-sm font-medium text-gray-700 mb-1">
                  Type Of Enquiry
                </label>
                <select
                  id="enquiry-type"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none"
                >
                  <option value="">Select enquiry type</option>
                  <option value="Account Opening">Account Opening</option>
                  <option value="Loan Enquiry">Loan Enquiry</option>
                  <option value="Deposit Enquiry">Deposit Enquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="enquiry-message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="enquiry-message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none"
                  placeholder="Your message"
                ></textarea>
              </div>

              <button
                type="button"
                className="w-full py-3 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition duration-200 shadow-md"
              >
                Submit Enquiry
              </button>
            </form>
          </div>
          
          {/* Contact Information Cards */}
          <div className="space-y-6">
            {/* Address Card */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-lg">
                  <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Head Office Address</h3>
                  <p className="text-gray-600">Kalpavruksha, Aashanagar, Nashikroad,</p>
                  <p className="text-gray-600">Nashik, Maharashtra 422 101.</p>
                </div>
              </div>
            </div>
            
            {/* Phone Numbers Card */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-lg">
                  <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Contact Numbers</h3>
                  <p className="text-gray-600">+91 253 2465345, +91 253 2464640</p>
                  <p className="text-gray-600">+91 253 2465728, +91 253 2464637</p>
                  <p className="mt-3 text-gray-600 font-medium">Email: info@ndvsbank.com</p>
                </div>
              </div>
            </div>
            
            {/* Customer Care Card */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-lg">
                  <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">ATM Card/Mobile Banking Customer Care</h3>
                  <p className="text-gray-600">+91 0253-2462569, +91 7588112010</p>
                </div>
              </div>
            </div>
            
            {/* Grievance Officer Card */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-lg">
                  <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Grievance Redressal Officer</h3>
                  <p className="text-gray-600">Mr. Y. L. Pagere</p>
                  <p className="text-gray-600">Mobile: +91 9890061606</p>
                  <p className="text-gray-600">Email: info@ndvsbank.com</p>
                  <p className="mt-2 text-sm text-gray-500">
                    Call - Monday to Saturday (10.45 to 6.00 PM)<br />
                    (This facility is not available on 2nd and 4th Saturday, All Sunday and Bank Holiday)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;