import React from 'react';

const LockerServices: React.FC = () => {
  const lockerData = [
    { id: 1, type: 'A', height: '4.9', width: '6.9', depth: '19.37', deposit: '5000', rental: '500' },
    { id: 2, type: 'B', height: '5.88', width: '8.46', depth: '19.37', deposit: '5000', rental: '500' },
    { id: 3, type: 'C', height: '4.9', width: '13.8', depth: '19.37', deposit: '5000', rental: '1000' },
    { id: 4, type: 'D', height: '7.4', width: '10.3', depth: '19.37', deposit: '5000', rental: '1000' },
    { id: 5, type: 'E', height: '5.84', width: '17.4', depth: '19.37', deposit: '5000', rental: '1000' },
    { id: 6, type: 'F', height: '10.9', width: '13.8', depth: '19.37', deposit: '10000', rental: '2000' },
    { id: 7, type: 'G', height: '7.4', width: '20.8', depth: '19.37', deposit: '10000', rental: '2000' },
    { id: 8, type: 'K', height: '15.55', width: '21.41', depth: '19.37', deposit: '20000', rental: '2000' },
    { id: 9, type: 'L', height: '15.9', width: '20.8', depth: '19.37', deposit: '20000', rental: '2000' },
  ];

  return (
    <div className="container mx-auto py-8 sm:py-12 px-4 min-h-screen">
      <h1 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-8 sm:mb-10 text-center">Locker Services</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 bg-white rounded-lg shadow-lg border border-gray-200">
          <thead className="bg-purple-50">
            <tr>
              <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm font-medium uppercase tracking-wider text-purple-700 whitespace-nowrap">
                Sr. No.
              </th>
              <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm font-medium uppercase tracking-wider text-purple-700 whitespace-nowrap">
                Type of Lockers
              </th>
              <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm font-medium uppercase tracking-wider text-purple-700 whitespace-nowrap">
                Internal Dimensions (mm)
              </th>
              <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm font-medium uppercase tracking-wider text-purple-700 whitespace-nowrap">
                Deposit (₹)
              </th>
              <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm font-medium uppercase tracking-wider text-purple-700 whitespace-nowrap">
                Rentals (₹)
              </th>
            </tr>
            <tr>
              <th colSpan={2}></th>
              <th className="px-2 sm:px-4 py-1 sm:py-2 text-center text-xs font-medium text-purple-600 tracking-wider">
                <div className="grid grid-cols-3 gap-1 sm:gap-2">
                  <span className="text-xs">Height</span>
                  <span className="text-xs">Width</span>
                  <span className="text-xs">Depth</span>
                </div>
              </th>
              <th colSpan={2}></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {lockerData.map((locker) => (
              <tr key={locker.id} className="hover:bg-purple-50 transition-colors duration-150">
                <td className="px-2 sm:px-4 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-base text-gray-900 text-center">
                  {locker.id}
                </td>
                <td className="px-2 sm:px-4 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-base font-medium text-gray-900 text-center">
                  {locker.type}
                </td>
                <td className="px-2 sm:px-4 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-base text-gray-700">
                  <div className="grid grid-cols-3 gap-1 sm:gap-2 text-center">
                    <span>{locker.height}</span>
                    <span>{locker.width}</span>
                    <span>{locker.depth}</span>
                  </div>
                </td>
                <td className="px-2 sm:px-4 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-base text-gray-900 text-center">
                  {locker.deposit}
                </td>
                <td className="px-2 sm:px-4 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-base text-gray-900 text-center">
                  {locker.rental}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LockerServices;