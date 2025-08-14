import React from 'react';
import annualTwentyOne from '@assets/pdfs/Annual Report 2020-21.pdf';
import annualTwentyTwo from '@assets/pdfs/Annual Report 2021-22.pdf';
import annualTwentyThree from '@assets/pdfs/Annual Report 2022-23.pdf';
import annualTwentyFour from '@assets/pdfs/Annual Report 2023-24.pdf';

interface PDFItem {
  name: string;
  filename: string;
}

const pdfs: PDFItem[] = [
    { name: 'Annual Report 2020-21', filename: annualTwentyOne },
    { name: 'Annual Report 2021-22', filename: annualTwentyTwo },
    { name: 'Annual Report 2022-23', filename: annualTwentyThree },
    { name: 'Annual Report 2023-24', filename: annualTwentyFour },
];

const Finance: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 pb-3 border-b-2 border-blue-500 text-center">
        Financial Statement
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {pdfs.map((pdf, index) => (
          <a
            key={index}
            href={pdf.filename}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-200 text-center"
          >
            <svg
              className="h-12 w-12 text-blue-600 mx-auto mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <h3 className="text-base font-semibold text-gray-800">{pdf.name}</h3>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Finance;