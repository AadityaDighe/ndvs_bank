const IfscCode = () => {
  const ifscData = [
    { srNo: 1, branchName: 'HO', ifscCode: 'YESB0NRDB01' },
    { srNo: 2, branchName: 'NASIKROAD', ifscCode: 'YESB0NRDB02' },
    { srNo: 3, branchName: 'BHAGUR', ifscCode: 'YESB0NRDB03' },
    { srNo: 4, branchName: 'DEOLALI CAMP', ifscCode: 'YESB0NRDB04' },
    { srNo: 5, branchName: 'INGALENAGAR', ifscCode: 'YESB0NRDB05' },
    { srNo: 6, branchName: 'UPNAGAR', ifscCode: 'YESB0NRDB06' },
    { srNo: 7, branchName: 'PAWANNAGAR', ifscCode: 'YESB0NRDB07' },
    { srNo: 8, branchName: 'INDIRANAGAR', ifscCode: 'YESB0NRDB08' },
    { srNo: 9, branchName: 'O.G.NAKA', ifscCode: 'YESB0NRDB09' },
    { srNo: 10, branchName: 'SUBHASH ROAD', ifscCode: 'YESB0NRDB10' },
    { srNo: 11, branchName: 'SINNARPHATA', ifscCode: 'YESB0NRDB11' },
    { srNo: 12, branchName: 'SAUBHAGYANGR', ifscCode: 'YESB0NRDB12' },
    { srNo: 13, branchName: 'SATPUR', ifscCode: 'YESB0NRDB13' },
    { srNo: 14, branchName: 'SINNAR', ifscCode: 'YESB0NRDB14' },
    { srNo: 15, branchName: 'AMBAD', ifscCode: 'YESB0NRDB15' },
    { srNo: 16, branchName: 'NASIKPOONARD', ifscCode: 'YESB0NRDB16' },
    { srNo: 17, branchName: 'PANCHAVATI', ifscCode: 'YESB0NRDB17' },
    { srNo: 18, branchName: 'MAHATMANAGAR', ifscCode: 'YESB0NRDB18' },
    { srNo: 19, branchName: 'DWARKA', ifscCode: 'YESB0NRDB19' },
    { srNo: 20, branchName: 'TAPOVANROAD', ifscCode: 'YESB0NRDB20' },
    { srNo: 21, branchName: 'OLD SAYKHEDA ROAD', ifscCode: 'YESB0NRDB22' },
    { srNo: 22, branchName: 'JATRA HOTEL ROAD', ifscCode: 'YESB0NRDB23' },
    { srNo: 23, branchName: 'MAKHMALABAD', ifscCode: 'YESB0NRDB24' },
    { srNo: 24, branchName: 'DINDORI', ifscCode: 'YESB0NRDB25' },
    { srNo: 25, branchName: 'GHOTI', ifscCode: 'YESB0NRDB26' },
    { srNo: 26, branchName: 'PIMPALGAON A', ifscCode: 'YESB0NRDB27' },
    { srNo: 27, branchName: 'MALEGAON', ifscCode: 'YESB0NRDB28' },
    { srNo: 28, branchName: 'GOVIND NAGAR', ifscCode: 'YESB0NRDB29' },
    { srNo: 29, branchName: 'GIRNARE', ifscCode: 'YESB0NRDB31' },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
      
        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-6 text-center mb-10">
            IFSC Code
          </h1>

          {/* IFSC Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="py-3 px-4 font-semibold text-sm">Sr No.</th>
                  <th className="py-3 px-4 font-semibold text-sm">Branch Name</th>
                  <th className="py-3 px-4 font-semibold text-sm">IFSC Code</th>
                </tr>
              </thead>
              <tbody>
                {ifscData.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 hover:bg-blue-50 transition-colors duration-200"
                  >
                    <td className="py-3 px-4 text-gray-700">{item.srNo}</td>
                    <td className="py-3 px-4 text-gray-700">{item.branchName}</td>
                    <td className="py-3 px-4 text-gray-700">{item.ifscCode}</td>
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

export default IfscCode;