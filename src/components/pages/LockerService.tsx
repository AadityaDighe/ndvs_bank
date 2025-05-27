const LockerServices = () => {
    const lockerData = [
      { id: 1, type: 'A', height: '4.9', width: '6.9', depth: '19.37', deposit: '5000', rental: '500' },
      { id: 2, type: 'B', height: '5.88', width: '8.46', depth: '19.37', deposit: '5000', rental: '500' },
      { id: 3, type: 'C', height: '4.9', width: '13.8', depth: '19.37', deposit: '5000', rental: '1000' },
      { id: 4, type: 'D', height: '7.4', width: '10.3', depth: '19.37', deposit: '5000', rental: '1000' },
      { id: 5, type: 'E', height: '5.84', width: '17.4', depth: '19.37', deposit: '5000', rental: '1000' },
      { id: 6, type: 'F', height: '10.9', width: '13.8', depth: '19.37', deposit: '10000', rental: '2000' },
      { id: 7, type: 'G', height: '7.4', width: '20.8', depth: '19.37', deposit: '10000', rental: '2000' },
      { id: 8, type: 'K', height: '15.55', width: '21.41', depth: '19.37', deposit: '20000', rental: '2000' },
      { id: 9, type: 'L', height: '15.9', width: '20.8', depth: '19.37', deposit: '20000', rental: '2000' }
    ];
  
    return (
      <div className="container mx-auto py-12 px-4 min-h-screen">
        <h1 className="text-3xl font-bold text-blue-700 mb-10 text-center">Locker Services</h1>
    
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-purple-50">
              <tr>
                <th className="px-6 py-4 text-center text-sm font-medium uppercase tracking-wider text-purple-700">Sr. No.</th>
                <th className="px-6 py-4 text-center text-sm font-medium uppercase tracking-wider text-purple-700">Type of Lockers</th>
                <th className="px-6 py-4 text-center text-sm font-medium uppercase tracking-wider text-purple-700">Internal Dimensions (mm)</th>
                <th className="px-6 py-4 text-center text-sm font-medium uppercase tracking-wider text-purple-700">Deposit (₹)</th>
                <th className="px-6 py-4 text-center text-sm font-medium uppercase tracking-wider text-purple-700">Rentals (₹)</th>
              </tr>
              <tr>
                <th colSpan={2}></th>
                <th className="px-6 py-2 text-center text-xs font-medium text-purple-600 tracking-wider">
                  <div className="grid grid-cols-3 gap-2">
                    <span>Height</span>
                    <span>Width</span>
                    <span>Depth</span>
                  </div>
                </th>
                <th colSpan={2}></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {lockerData.map((locker) => (
                <tr key={locker.id} className="hover:bg-purple-50 transition-colors duration-150">
                  <td className="px-6 py-4 whitespace-nowrap text-base text-gray-900 text-center">{locker.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-base font-medium text-gray-900 text-center">{locker.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-base text-gray-700">
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <span>{locker.height}</span>
                      <span>{locker.width}</span>
                      <span>{locker.depth}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-base text-gray-900 text-center">{locker.deposit}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-base text-gray-900 text-center">{locker.rental}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default LockerServices;