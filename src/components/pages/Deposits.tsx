import { useState } from 'react';

interface Deposit {
  id: number;
  term: string;
  rate: string;
}

const Deposits = () => {
  const initialData: Deposit[] = [
    { id: 1, term: '15 to 45 Days', rate: '4.00%' },
    { id: 2, term: '46 to 90 Days', rate: '4.35%' },
    { id: 3, term: '91 to 180 Days', rate: '4.75%' },
    { id: 4, term: '181 to 364 Days', rate: '5.25%' },
    { id: 5, term: '12 to 18 Months', rate: '6.50%' },
    { id: 6, term: 'Above 18 to 24 Months', rate: '6.75%' },
    { id: 7, term: 'Above 24 to 30 Months', rate: '7.00%' },
    { id: 8, term: 'Above 30 to 36 Months', rate: '7.25%' },
    { id: 9, term: 'Above 36 to 42 Months', rate: '7.50%' },
    { id: 10, term: 'Above 42 to 48 Months', rate: '7.50%' },
    { id: 11, term: 'Above 48 to 60 Months', rate: '7.50%' },
    { id: 12, term: '60 Months and Above', rate: '7.50%' },
    { id: 13, term: '161 Days (Up to 31 Mar 2025)', rate: '7.50%' },
  ];

  const [data] = useState<Deposit[]>(initialData);

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 pb-3 border-b-2 border-blue-500 text-center">
        Deposit Interest Rates
      </h2>

      {/* Desktop Table */}
      <div className="hidden md:block rounded-xl shadow-xl border border-gray-100 overflow-hidden">
        <table className="min-w-full bg-white text-gray-800">
          <thead>
            <tr className="bg-gradient-to-r from-blue-500 to-blue-700 text-white">
              <th className="py-4 px-6 text-left rounded-tl-xl">Sr. No.</th>
              <th className="py-4 px-6 text-left">Term</th>
              <th className="py-4 px-6 text-left rounded-tr-xl">Interest Rate (p.a.)</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => (
              <tr
                key={item.id}
                className={`border-b border-gray-100 hover:bg-blue-50/50 transition-all duration-200 ${
                  idx % 2 === 0 ? 'bg-gray-50/50' : 'bg-white'
                }`}
              >
                <td className="py-4 px-6 font-medium">{item.id}</td>
                <td className="py-4 px-6">{item.term}</td>
                <td className="py-4 px-6 font-semibold text-blue-600">{item.rate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden grid gap-4">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md p-5 border border-gray-100 hover:shadow-lg transition-all duration-200"
          >
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-medium text-gray-500">Sr. No. {item.id}</span>
              <span className="text-lg font-bold text-blue-600">{item.rate}</span>
            </div>
            <p className="text-gray-700 font-medium">{item.term}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deposits;