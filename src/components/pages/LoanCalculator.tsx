import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface LoanCalculatorProps {
  onCalculate?: (values: {
    loanAmount: number;
    loanTerm: number;
    interestRate: number;
    monthlyPayment: number;
    totalInterest: number;
    totalPayment: number;
  }) => void;
}

const LoanCalculator: React.FC<LoanCalculatorProps> = ({ onCalculate }) => {
  const { t } = useTranslation();

  const productOptions = [
    t('personal_loan'),
    t('home_loan'),
    t('auto_loan'),
    t('education_loan'),
    t('business_loan'),
  ];

  const productTypeOptions: Record<string, string[]> = {
    [t('personal_loan')]: [
      t('debt_consolidation'),
      t('home_improvement'),
      t('medical_expenses'),
      t('vacation'),
      t('other'),
    ],
    [t('home_loan')]: [
      t('purchase'),
      t('refinance'),
      t('construction'),
      t('renovation'),
    ],
    [t('auto_loan')]: [
      t('new_car'),
      t('used_car'),
      t('motorcycle'),
      t('rv'),
    ],
    [t('education_loan')]: [
      t('undergraduate'),
      t('graduate'),
      t('vocational'),
      t('professional'),
    ],
    [t('business_loan')]: [
      t('startup'),
      t('expansion'),
      t('equipment'),
      t('working_capital'),
    ],
  };

  const interestRates: Record<string, number> = {
    [t('personal_loan')]: 8.5,
    [t('home_loan')]: 5.2,
    [t('auto_loan')]: 6.8,
    [t('education_loan')]: 7.3,
    [t('business_loan')]: 9.1,
  };

  const [selectedProduct, setSelectedProduct] = useState('');
  const [selectedProductType, setSelectedProductType] = useState('');
  const [productTypes, setProductTypes] = useState<string[]>([]);
  const [loanAmount, setLoanAmount] = useState<string>('10000');
  const [loanTerm, setLoanTerm] = useState<string>('5');
  const [interestRate, setInterestRate] = useState<number>(0);
  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);
  const [totalPayment, setTotalPayment] = useState<number>(0);

  useEffect(() => {
    if (selectedProduct) {
      const rate = interestRates[selectedProduct] || 0;
      setInterestRate(rate);
    }
  }, [selectedProduct, t]);

  useEffect(() => {
    if (selectedProduct && parseFloat(loanAmount) > 0 && parseFloat(loanTerm) > 0) {
      calculateLoan();
    }
  }, [selectedProduct, loanAmount, loanTerm, interestRate, selectedProductType]);

  const calculateLoan = () => {
    const amount = parseFloat(loanAmount) || 0;
    const term = parseFloat(loanTerm) || 0;

    if (!selectedProduct || amount <= 0 || term <= 0) return;

    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = term * 12;

    const payment =
      (amount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    const total = payment * numberOfPayments;
    const interest = total - amount;

    setMonthlyPayment(parseFloat(payment.toFixed(2)));
    setTotalInterest(parseFloat(interest.toFixed(2)));
    setTotalPayment(parseFloat(total.toFixed(2)));

    if (onCalculate) {
      onCalculate({
        loanAmount: amount,
        loanTerm: term,
        interestRate,
        monthlyPayment: parseFloat(payment.toFixed(2)),
        totalInterest: parseFloat(interest.toFixed(2)),
        totalPayment: parseFloat(total.toFixed(2)),
      });
    }
  };

  const handleProductChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const product = e.target.value;
    setSelectedProduct(product);
    setSelectedProductType('');
    setProductTypes(product ? productTypeOptions[product] || [] : []);
  };

  const handleLoanAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow numbers and empty string
    if (value === '' || /^[0-9\b]+$/.test(value)) {
      setLoanAmount(value);
    }
  };

  const handleLoanTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow numbers and empty string
    if (value === '' || /^[0-9\b]+$/.test(value)) {
      setLoanTerm(value);
    }
  };

  return (
    <div className="w-full bg-white p-6 rounded-xl shadow-lg max-w-7xl mx-auto space-y-12 md:space-y-16 my-15">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">{t('loan_calculator')}</h2>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-2">
              {t('loan_type')}
            </label>
            <div className="relative">
              <select
                id="product"
                value={selectedProduct}
                onChange={handleProductChange}
                className="w-full px-4 py-3 pr-10 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none bg-white text-gray-800 font-medium appearance-none"
                required
              >
                <option value="">{t('select_loan_product')}</option>
                {productOptions.map((product) => (
                  <option key={product} value={product}>
                    {product}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="productType" className="block text-sm font-medium text-gray-700 mb-2">
              {t('loan_purpose')}
            </label>
            <div className="relative">
              <select
                id="productType"
                value={selectedProductType}
                onChange={(e) => setSelectedProductType(e.target.value)}
                disabled={!selectedProduct}
                className="w-full px-4 py-3 pr-10 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none bg-white text-gray-800 font-medium appearance-none disabled:bg-gray-50 disabled:text-gray-400"
                required
              >
                <option value="">{t('select_purpose')}</option>
                {productTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-700 mb-2">
              {t('loan_amount')}
            </label>
            <input
              type="text"
              id="loanAmount"
              value={loanAmount}
              onChange={handleLoanAmountChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none bg-white text-gray-800 font-medium"
              required
            />
          </div>

          <div>
            <label htmlFor="loanTerm" className="block text-sm font-medium text-gray-700 mb-2">
              {t('loan_term')}
            </label>
            <input
              type="text"
              id="loanTerm"
              value={loanTerm}
              onChange={handleLoanTermChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none bg-white text-gray-800 font-medium"
              required
            />
          </div>
        </div>

        {selectedProduct && selectedProductType && (
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">{t('loan_summary')}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-sm text-gray-600">{t('interest_rate')}</p>
                <p className="text-2xl font-bold text-blue-600">{interestRate}%</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-sm text-gray-600">{t('monthly_payment')}</p>
                <p className="text-2xl font-bold text-green-600">
                  ₹{monthlyPayment.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-sm text-gray-600">{t('total_interest')}</p>
                <p className="text-2xl font-bold text-red-600">
                  ₹{totalInterest.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-sm text-gray-600">{t('total_payment')}</p>
                <p className="text-2xl font-bold text-purple-600">
                  ₹{totalPayment.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoanCalculator;