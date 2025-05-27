import { FaCoins, FaPercentage, FaWeightHanging, FaFileSignature, FaHandHoldingUsd } from 'react-icons/fa';
import { MdOutlineSecurity, MdDescription, MdAccountCircle } from 'react-icons/md';

const GoldLoan = () => {
  const features = [
    {
      icon: <FaPercentage className="text-2xl text-yellow-600" />,
      title: "Loan Amount",
      description: "50-70% of gold valuation (as per bank approval)"
    },
    {
      icon: <FaWeightHanging className="text-2xl text-yellow-600" />,
      title: "Gold Purity",
      description: "Minimum 80% purity required"
    },
    {
      icon: <FaFileSignature className="text-2xl text-yellow-600" />,
      title: "Documentation",
      description: "Pledge letter proving ownership required"
    },
    {
      icon: <MdOutlineSecurity className="text-2xl text-yellow-600" />,
      title: "Security",
      description: "Ornaments sealed with signatures of applicant, bank officer & valuator"
    },
    {
      icon: <MdAccountCircle className="text-2xl text-yellow-600" />,
      title: "Eligibility",
      description: "Must be Share Holder or Nominal Member of the Bank"
    },
    {
      icon: <FaHandHoldingUsd className="text-2xl text-yellow-600" />,
      title: "Minimum Loan",
      description: "Not applicable below ₹1,000"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center bg-yellow-100 p-3 rounded-full mb-4">
            <FaCoins className="text-4xl text-yellow-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Gold Loan Services</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Easy, convenient loans against gold jewelry with competitive rates
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
          <div className="p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <MdDescription className="text-yellow-600" />
              About Our Gold Loan
            </h2>
            <div className="prose prose-yellow max-w-none text-gray-600 space-y-4">
              <p>
                We provide loans against your gold jewelry and ornaments. Our gold mortgage loan is easy and convenient with competitive mortgage rates, combined with the assistance of an experienced loan officer to guide you through the process.
              </p>
              <p>
                The bank gives loans up to 60-70% of the gold ornaments' value as certified by the approved valuator of the Bank. The final loan amount will be 50% of the gold valuation and depends on the market rate and the decision of the Board of Directors.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-yellow-500">
              <div className="mb-3">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Eligibility & Process</h2>
            <div className="space-y-6">
              <div className="prose prose-yellow max-w-none text-gray-600 space-y-4">
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-800">Eligibility Criteria:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Applicant must be Share Holder or Nominal Member of the Bank</li>
                    <li>No loan will be sanctioned except against gold ornaments</li>
                    <li>Applicant must present pledge letter proving ownership of gold ornaments</li>
                    <li>Only original gold ornaments with minimum 80% purity accepted</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium text-gray-800">Application Process:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Submit completed loan application form with introduction from bank shareholders</li>
                    <li>Provide passport photograph, photocopy of Ration Card & Address Proof</li>
                    <li>Gold valuation by authorized bank valuator (fee approx. ₹140 per 10gms)</li>
                    <li>Valuation depends on current market rate and will be certified</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium text-gray-800">Mortgage Process:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Mortgage ornaments will be properly sealed with applicant & loan details</li>
                    <li>Includes signatures of applicant, bank officer & Valuator</li>
                    <li>After repayment, present original receipt for ornament retrieval</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium text-gray-800">Important Notes:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Bank reserves all rights regarding loan sanctioning decisions</li>
                    <li>Final loan amount depends on valuation and Board of Directors' approval</li>
                    <li>Gold mortgage loan not applicable below ₹1,000</li>
                    <li>All rights reserved with the Bank regarding sanctioning/not sanctioning of loan</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoldLoan;