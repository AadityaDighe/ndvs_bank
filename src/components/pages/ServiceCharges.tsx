const ServiceCharges = () => {
  return (
    <div className="container mx-auto px-4 py-8">

      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-700 my-6 text-center">Service Charges</h1>
      </div>

      {/* Service Charges Sections */}
      <div className="space-y-10">
        {/* Loan Service Charges */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-blue-800 mb-4 pb-2 border-b border-gray-200">Loan Service Charges</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-800">All Other Loan (Excluding Adv Ag FDR/OD/RD)</h3>
                <ul className="mt-2 space-y-1 text-gray-700">
                  <li>• Upto ₹10,000: ₹5 + GST</li>
                  <li>• ₹10,001 and above: ₹10 + GST</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-800">Processing Fees</h3>
                <ul className="mt-2 space-y-1 text-gray-700">
                  <li>• Gold Loan: 0.20% (Min ₹100 + GST)</li>
                  <li>• Vehicle Loans: 0.60% (Min ₹500, Max ₹10,000 + GST)</li>
                  <li>• Other Loans: 0.75% (Min ₹500, Max ₹20,000 + GST)</li>
                  <li>• Renewal: 0.30% (Min ₹100, Max ₹10,000 + GST)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Banking Instruments */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-blue-800 mb-4 pb-2 border-b border-gray-200">Banking Instruments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-800">DD / Pay Order Commission</h3>
              <ul className="mt-2 space-y-1 text-gray-700">
                <li>• ₹1 per ₹1,000 + GST</li>
                <li>• Min ₹10 + GST</li>
                <li>• Max ₹2,500 + GST</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-800">Cheque Book Charges</h3>
              <ul className="mt-2 space-y-1 text-gray-700">
                <li>• MICR cheque: ₹3 per cheque</li>
                <li>• Unused cheque: ₹10 per instrument + GST</li>
                <li>• Cheque return: ₹100 (outward), ₹250 (inward) + GST</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-800">RTGS/NEFT Charges</h3>
              <ul className="mt-2 space-y-1 text-gray-700">
                <li>• Upto ₹10,000: ₹2 + GST</li>
                <li>• ₹10,001-1,00,000: ₹4 + GST</li>
                <li>• ₹1,00,001-2,00,000: ₹12 + GST</li>
                <li>• ₹2,00,001-5,00,000: ₹20 + GST</li>
                <li>• Above ₹5,00,000: ₹40 + GST</li>
                <li>• Mobile app: Free</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Account Related Charges */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-blue-800 mb-4 pb-2 border-b border-gray-200">Account Related Charges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-800">Minimum Balance Charges</h3>
              <ul className="mt-2 space-y-1 text-gray-700">
                <li>• Savings: ₹60 + GST (quarterly)</li>
                <li>• Current: ₹150 + GST (quarterly)</li>
                <li>• BSBDA: N.A.</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-800">Account Closing</h3>
              <ul className="mt-2 space-y-1 text-gray-700">
                <li>• Savings: ₹150 (before 6 months), ₹100 (after) + GST</li>
                <li>• Current: ₹200 + GST</li>
                <li>• BSBDA: N.A.</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-800">SMS Charges</h3>
              <ul className="mt-2 space-y-1 text-gray-700">
                <li>• Savings: ₹15 + GST (quarterly)</li>
                <li>• Current: ₹25 + GST (quarterly)</li>
                <li>• Working Capital: ₹25 + GST (quarterly)</li>
                <li>• Extra SMS: ₹0.25 per SMS</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Certificate & Documentation */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-blue-800 mb-4 pb-2 border-b border-gray-200">Certificates & Documentation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-800">Solvency Certificate</h3>
              <ul className="mt-2 space-y-1 text-gray-700">
                <li>• Upto ₹5 Lacs: ₹500 + GST</li>
                <li>• ₹5-25 Lacs: ₹1,000 + GST</li>
                <li>• ₹25-50 Lacs: ₹1,500 + GST</li>
                <li>• ₹50-100 Lacs: ₹2,000 + GST</li>
                <li>• Above ₹100 Lacs: ₹2,500 + GST</li>
                <li>• Min ₹250, Max ₹2,500 + GST</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-800">Other Documentation</h3>
              <ul className="mt-2 space-y-1 text-gray-700">
                <li>• Bank Guarantee: Min ₹500/year, 2.5% per annum + GST</li>
                <li>• NOC/Signature Verification: ₹100 + GST</li>
                <li>• Government Challan: ₹100 + GST</li>
                <li>• Duplicate Passbook: ₹100 + GST</li>
                <li>• Duplicate Statement: ₹15/page + GST</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Locker Charges */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-blue-800 mb-4 pb-2 border-b border-gray-200">Locker Charges</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4 text-left">Locker Size</th>
                  <th className="py-2 px-4 text-left">Annual Charges</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { size: '₹500', charge: '₹30 + GST' },
                  { size: '₹700', charge: '₹40 + GST' },
                  { size: '₹1000', charge: '₹60 + GST' },
                  { size: '₹1500', charge: '₹90 + GST' },
                  { size: '₹2000', charge: '₹120 + GST' },
                  { size: '₹4000', charge: '₹240 + GST' },
                  { size: '₹5000', charge: '₹300 + GST' },
                ].map((item, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4">{item.size}</td>
                    <td className="py-2 px-4">{item.charge}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-sm text-gray-600">
            <p>• Locker break open charges: Min ₹3,000 + GST or actual</p>
          </div>
        </div>

        {/* Recovery & Legal Charges */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-blue-800 mb-4 pb-2 border-b border-gray-200">Recovery & Legal Charges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-800">Defaulters Notice Charges</h3>
              <ul className="mt-2 space-y-1 text-gray-700">
                <li>• 1st notice: ₹75 per person + GST</li>
                <li>• 2nd notice: ₹100 per person + GST</li>
                <li>• 3rd notice: ₹125 per person + GST</li>
                <li>• 4th & subsequent: ₹150 per person + GST</li>
                <li>• Gold Auction: ₹75 + GST</li>
                <li>• SARFAESI notice: ₹1,500 per person + GST</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-800">Seizing Charges</h3>
              <ul className="mt-2 space-y-1 text-gray-700">
                <li>• Two Wheelers: ₹500 + GST</li>
                <li>• Three/Four Wheelers: ₹1,000 + GST</li>
                <li>• Heavy Vehicle: ₹1,500 + GST</li>
                <li>• Cranes: ₹5,000 + GST and actual</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Miscellaneous Charges */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-blue-800 mb-4 pb-2 border-b border-gray-200">Miscellaneous Charges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-800">ATM/Debit Card</h3>
              <ul className="mt-2 space-y-1 text-gray-700">
                <li>• Loss/damage reissue: ₹200 + GST</li>
                <li>• Yearly charges: ₹150 + GST</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-800">Other Services</h3>
              <ul className="mt-2 space-y-1 text-gray-700">
                <li>• Change of mode of operation: ₹150 + GST</li>
                <li>• CERSAI charges: ₹250 per entry + GST</li>
                <li>• CIBIL report: ₹250 (individual), ₹1,500 (commercial) + GST</li>
                <li>• RTO registration: ₹100 + GST</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCharges;