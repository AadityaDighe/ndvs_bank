const InterestRates = () => {
  return (
    <div className="container mx-auto px-4 py-8">
  
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-700 text-center mb-6">Interest Rates</h1>
        <p className="mt-2 text-lg text-gray-600 text-center text-xl font-bold">Rate Applicable From 1st January 2025</p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4 pb-2 border-b border-gray-200">Deposit Interest Rate Chart</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg overflow-hidden">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Sr. No.</th>
                <th className="py-3 px-4 text-left">Particulars</th>
                <th className="py-3 px-4 text-left">Common (Interest Rate p.a)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
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
                { id: 13, term: '161 Days(Up to 31 Mar 2025)', rate: '7.50%' },
              ].map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="py-3 px-4">{item.id}</td>
                  <td className="py-3 px-4">{item.term}</td>
                  <td className="py-3 px-4 font-medium">{item.rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4 pb-2 border-b border-gray-200">Loan Interest Rate Chart</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg overflow-hidden">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="py-3 px-4 text-left">SR.NO</th>
                <th className="py-3 px-4 text-left">TYPE OF LOAN</th>
                <th className="py-3 px-4 text-left">INTEREST RATE</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                { id: 1, type: 'KALPAWRUKSHA HOUSING LOAN', rate: '8.50%' },
                { id: 2, type: 'HOUSING LOAN(Reparing)', rate: '13%' },
                { id: 3, type: 'BUSINESS VEHICAL LOAN', rate: '10%' },
                { id: 4, type: 'KALPAWRUKSHA VEHICLE LOAN', rate: '10%' },
                { id: 5, type: 'AGRICULTURE & ALLIED ACTIVITIES', rate: '12%' },
                { id: 6, type: 'SECURED LOAN AG. PROPERTY', rate: '13%' },
                { id: 7, type: 'HYPOTHICATION', rate: '10%' },
                { id: 8, type: 'WORKING CAPITAL', rate: '10%' },
                { id: 9, type: 'C/C AGE PROPERTY', rate: '11%' },
                { id: 10, type: 'KALPAWRUKSHA TERM LOAN', rate: '11.50%' },
                { id: 11, type: 'Gold Loan', rate: '9.95%' },
                { id: 12, type: 'Gold Loan(cash credit)', rate: '9.95%' },
                { id: 13, type: 'AGRI AND ALLIED ACTIVITIES ADV. AG. GOLD', rate: '9.45%' },
                { id: 14, type: 'PERSONAL LOAN', rate: '14%' },
                { id: 15, type: 'ADV.AG.NSC', rate: '11%' },
                { id: 16, type: 'CASH CREDIT', rate: '11%' },
                { id: 17, type: 'SHOP PURCHASE', rate: '12%' },
                { id: 18, type: 'TERM LOAN', rate: '15%' },
                { id: 19, type: 'HIRE PURCHASE', rate: '11%' },
                { id: 20, type: 'ADVANCE AGAINST LEASE / RENT AGGREMENT', rate: '12%' },
                { id: 21, type: 'KALPAWRUKSHA SOLAR SCHEME', rate: '10%' },
                { id: 22, type: 'Advance Against FDR', rate: '1% More than Deposite Interest Rate' },
                { id: 23, type: 'KALPAWRUKSHA VEHICLE LOAN(CBIL above 700)', rate: '9%' },
              ].map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="py-3 px-4">{item.id}</td>
                  <td className="py-3 px-4">{item.type}</td>
                  <td className="py-3 px-4 font-medium">{item.rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4 pb-2 border-b border-gray-200">Savings Interest Rate Chart</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg overflow-hidden">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Sr. No.</th>
                <th className="py-3 px-4 text-left">Savings Account</th>
                <th className="py-3 px-4 text-left">Interest Rates % (p.a)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                { id: 1, type: 'Saving', rate: '2.80%' },
                { id: 2, type: 'Yuva Saving', rate: '3.00%' },
              ].map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="py-3 px-4">{item.id}</td>
                  <td className="py-3 px-4">{item.type}</td>
                  <td className="py-3 px-4 font-medium">{item.rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recurring Deposit Rates */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4 pb-2 border-b border-gray-200">Recurring Deposit Interest Rate Chart</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg overflow-hidden">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Sr. No.</th>
                <th className="py-3 px-4 text-left">Reccuring Deposit</th>
                <th className="py-3 px-4 text-left">Common (Interest Rate p.a)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                { id: 1, term: '12 to 15 Months', rate: '7.00%' },
                { id: 2, term: 'Above 15 to 24 Months', rate: '7.75%' },
                { id: 3, term: 'Above 24 to 36 Months', rate: '7.00%' },
                { id: 4, term: 'Above 36 to 48 Months', rate: '7.50%' },
                { id: 5, term: 'Above 48 to 60 Months', rate: '7.50%' },
                { id: 6, term: '60 Months and Above', rate: '7.50%' },
              ].map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="py-3 px-4">{item.id}</td>
                  <td className="py-3 px-4">{item.term}</td>
                  <td className="py-3 px-4 font-medium">{item.rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Small Saving Rates */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4 pb-2 border-b border-gray-200">Small Saving Interest Rate</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg overflow-hidden">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Sr.No</th>
                <th className="py-3 px-4 text-left">Particulars</th>
                <th className="py-3 px-4 text-left">Interest Rate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                { id: 1, term: '1 to 6 days', rate: 'No Interest' },
                { id: 2, term: '7 to 90 days', rate: '0.25%' },
                { id: 3, term: '91 to 180 days', rate: '0.50%' },
                { id: 4, term: '181 to 365 days', rate: '1.00%' },
                { id: 5, term: 'Above 366 days', rate: '2.00%' },
              ].map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="py-3 px-4">{item.id}</td>
                  <td className="py-3 px-4">{item.term}</td>
                  <td className="py-3 px-4 font-medium">{item.rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Small Saving Commission */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4 pb-2 border-b border-gray-200">Small Saving Commission</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg overflow-hidden">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Sr. No.</th>
                <th className="py-3 px-4 text-left">Particular</th>
                <th className="py-3 px-4 text-left">Interest Rate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                { id: 1, type: 'Small saving', rate: '2.00%' },
                { id: 2, type: 'Other deposit', rate: '0.15%' },
                { id: 3, type: 'Loan account', rate: '0.15%' },
              ].map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="py-3 px-4">{item.id}</td>
                  <td className="py-3 px-4">{item.type}</td>
                  <td className="py-3 px-4 font-medium">{item.rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Additional Information */}
      <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
        <h3 className="text-xl font-semibold text-blue-800 mb-3">Additional Information</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Term Deposit or Recurring for one year and above, interest rate for senior citizens (above 60) and Kanya(up to 10), Army & his family get 0.50% extra.</li>
          <li>No interest for current Deposit. But in the case of a Deceased account Nominee get the interest from the date of death as per the applicable rate of saving deposit.</li>
        </ul>
      </div>
    </div>
  );
};

export default InterestRates;