const BankHoliday = () => {
  const bankHolidays = [
    { srNo: 1, date: 'Sunday, January 26, 2025', holiday: 'Republic Day' },
    { srNo: 2, date: 'Wednesday, February 19, 2025', holiday: 'Chhatrapati Shivaji Maharaj Jayanti' },
    { srNo: 3, date: 'Wednesday, February 26, 2025', holiday: 'Maha Shivratri' },
    { srNo: 4, date: 'Friday, March 14, 2025', holiday: 'Holi (Day 2)' },
    { srNo: 5, date: 'Sunday, March 30, 2025', holiday: 'Gudi Padwa' },
    { srNo: 6, date: 'Monday, March 31, 2025', holiday: 'Ramjan Eid (Eid-Ul-Fitar) (Shavval-1)' },
    { srNo: 7, date: 'Monday, April 01, 2025', holiday: 'Annual Closing of Banks' },
    { srNo: 8, date: 'Sunday, April 06, 2025', holiday: 'Ram Navami' },
    { srNo: 9, date: 'Thursday, April 10, 2025', holiday: 'Mahavir Janma Kalyanak' },
    { srNo: 10, date: 'Monday, April 14, 2025', holiday: 'Dr. Babasaheb Ambedkar Jayanti' },
    { srNo: 11, date: 'Friday, April 18, 2025', holiday: 'Good Friday' },
    { srNo: 12, date: 'Thursday, May 01, 2025', holiday: 'Maharashtra Din' },
    { srNo: 13, date: 'Monday, May 12, 2025', holiday: 'Buddha Purnima' },
    { srNo: 14, date: 'Saturday, June 07, 2025', holiday: 'Bakri Eid (Eid-Ul-Zua)' },
    { srNo: 15, date: 'Sunday, July 06, 2025', holiday: 'Mohram' },
    { srNo: 16, date: 'Friday, August 15, 2025', holiday: 'Independence Day' },
    { srNo: 17, date: 'Friday, August 15, 2025', holiday: 'Parsi New Year' },
    { srNo: 18, date: 'Wednesday, August 27, 2025', holiday: 'Ganesh Chaturthi' },
    { srNo: 19, date: 'Friday, September 05, 2025', holiday: 'Eid-a-Milad' },
    { srNo: 20, date: 'Thursday, October 02, 2025', holiday: 'Mahatma Gandhi Jayanti' },
    { srNo: 21, date: 'Thursday, October 02, 2025', holiday: 'Dusshera (Vijayadashami)' },
    { srNo: 22, date: 'Tuesday, October 21, 2025', holiday: 'Laxmipujan (Diwali)' },
    { srNo: 23, date: 'Wednesday, October 22, 2025', holiday: 'Bali Pratipada (Diwali)' },
    { srNo: 24, date: 'Wednesday, November 05, 2025', holiday: 'Guru Nanak Jayanti' },
    { srNo: 25, date: 'Thursday, December 25, 2025', holiday: 'Christmas' },
  ];

  const ctsHolidays = [
    { srNo: 1, date: 'Tuesday, April 01, 2025', day: 'Tuesday', holiday: 'Annual Closing of Bank’s Account' },
    { srNo: 2, date: 'Friday, August 15, 2025', day: 'Friday', holiday: 'Independence Day' },
    { srNo: 3, date: 'Thursday, October 02, 2025', day: 'Thursday', holiday: 'Gandhi Jayanti' },
    { srNo: 4, date: 'Thursday, December 25, 2025', day: 'Thursday', holiday: 'Christmas' },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-6 text-center mb-6">
            Bank Holiday
          </h1>

          {/* Bank Holidays Table */}
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
            Bank Holidays
          </h2>
          <div className="overflow-x-auto mb-12">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="py-3 px-4 font-semibold text-sm">Sr No.</th>
                  <th className="py-3 px-4 font-semibold text-sm">Day & Date</th>
                  <th className="py-3 px-4 font-semibold text-sm">Holiday</th>
                </tr>
              </thead>
              <tbody>
                {bankHolidays.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 hover:bg-blue-50 transition-colors duration-200"
                  >
                    <td className="py-3 px-4 text-gray-700">{item.srNo}</td>
                    <td className="py-3 px-4 text-gray-700">{item.date}</td>
                    <td className="py-3 px-4 text-gray-700">{item.holiday}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* CTS Clearing Holidays Table */}
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
            CTS Clearing Holidays
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="py-3 px-4 font-semibold text-sm">Sr No.</th>
                  <th className="py-3 px-4 font-semibold text-sm">Date</th>
                  <th className="py-3 px-4 font-semibold text-sm">Day</th>
                  <th className="py-3 px-4 font-semibold text-sm">Holiday</th>
                </tr>
              </thead>
              <tbody>
                {ctsHolidays.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 hover:bg-blue-50 transition-colors duration-200"
                  >
                    <td className="py-3 px-4 text-gray-700">{item.srNo}</td>
                    <td className="py-3 px-4 text-gray-700">{item.date}</td>
                    <td className="py-3 px-4 text-gray-700">{item.day}</td>
                    <td className="py-3 px-4 text-gray-700">{item.holiday}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankHoliday;