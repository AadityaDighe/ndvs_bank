import {
  FaCheck,
  FaUsers,
  FaCoins,
  FaFileAlt,
  FaShieldAlt,
  FaCreditCard,
  FaReceipt,
  FaUserCheck
} from 'react-icons/fa';
import ndvs_logo from '@assets/images/vyapari_bank_logo_cropped.png';
import { useNavigate } from 'react-router-dom';

const BankingLayout=() =>{

    const navigate = useNavigate()

  return (
    <div className="bg-gray-50 p-6">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Kalpvruksha Housing Loan */}
        <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300">
          <div className="bg-yellow-400 px-6 py-3">
            <h2 className="text-lg font-bold text-gray-800">Kalpvruksha Housing Loan</h2>
          </div>
          
          <div className="p-6 text-white">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <img src={ndvs_logo} alt="" className="w-10 h-10 text-purple-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">NDVS Bank</h3>
                <p className="text-purple-200 text-sm">Kalpvruksha Housing Loan</p>
              </div>
            </div>

            <div className="mb-8">
              <div className="text-6xl font-bold mb-2">1</div>
              <div className="text-2xl font-bold text-pink-300 mb-1">Family</div>
              <div className="text-2xl font-bold text-pink-300">Bank</div>
              <div className="text-lg font-semibold mt-4 text-yellow-300">Kalpvruksha Housing Loan</div>
              <div className="text-sm text-purple-200">SAVING ACCOUNT</div>
            </div>

            <div className="mb-6">
              <p className="text-sm mb-4">Be a Family Account Holder with NDVS and Free benefits including</p>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <FaCheck className="w-4 h-4 text-green-400" />
                <span>DD/Bill Commission</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheck className="w-4 h-4 text-green-400" />
                <span>Minimum Members</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheck className="w-4 h-4 text-green-400" />
                <span>Minimum Balance</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheck className="w-4 h-4 text-green-400" />
                <span>Account Statement/ E-mail Statement</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheck className="w-4 h-4 text-green-400" />
                <span>NEFT/RTGS/IMPS</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheck className="w-4 h-4 text-green-400" />
                <span>Cash Handling Charges</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheck className="w-4 h-4 text-green-400" />
                <span>Cheque Book (ATM Card)</span>
              </div>
            </div>

            {/* Family illustration */}
            <div className="absolute bottom-4 right-4 opacity-20">
              <FaUsers className="w-20 h-20" />
            </div>
          </div>
        </div>

        {/* NDVS Gold Business Account */}
        <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300">
          <div className="bg-yellow-400 px-6 py-3">
            <h2 className="text-lg font-bold text-gray-800">NDVS Gold Business account</h2>
          </div>
          
          <div className="p-6 bg-white">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center">
                <img src={ndvs_logo} alt="" className="w-10 h-10 text-purple-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-purple-600">NDVS Bank</h3>
              </div>
            </div>

            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-yellow-600 ">NDVS</div>
              <div className="text-2xl font-semibold text-gray-600">Gold Account</div>
            </div>

            <div className="bg-purple-600 text-white px-4 py-6 rounded-lg mb-6">
              <div className="text-center">
                <div className="text-lg font-bold mb-2">NDVS BUSINESS GOLD ACCOUNT</div>
                <div className="bg-purple-500 px-4 py-2 rounded-full text-sm font-semibold">
                  NO HIDDEN CHARGES
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <FaCoins className="w-8 h-8 text-yellow-500" />
                <div className="text-3xl font-bold text-purple-600">Rs. 1 Lakh</div>
              </div>
            </div>

            <div className="text-sm text-gray-600 mb-4">
              <p>on your current account & become a gold account holder with NDVS</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-600 mb-2">Free of cost on following services</div>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div>1.	Instant Loan Approval</div>
                <div>2.	Minimum Document</div>
                <div>3. Higher Percentage Loan Sanction.</div>
                <div>4.	Minimum Interest Rate</div>
               
              </div>
            </div>
          </div>
        </div>

        {/* Forms and Declarations */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
          <div className="bg-yellow-400 px-6 py-3">
            <h2 className="text-lg font-bold text-gray-800">Highlights</h2>
          </div>
          
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer"
              onClick={()=>navigate('/imps-terms-conditions')}>
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <FaCreditCard className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700">IMPS Terms and Condition</span>
              </div>

              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer"
              onClick={()=>navigate('/inoperative-accounts')}>
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <FaFileAlt className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700" >Inoperative Account List</span>
              </div>

              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer"
              onClick={()=>navigate('/deaf-account-list')}>
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <FaReceipt className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700" >DEAF Account List</span>
              </div>

              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer"
               onClick={()=>navigate('/privacy-policy')}>
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <FaUserCheck className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700">Privacy Policy</span>
              </div>

              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <FaFileAlt className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700">ATM Application Form</span>
              </div>

              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <FaReceipt className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700">Saving Account Opening Form</span>
              </div>

              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer"
              onClick={()=>navigate('/ifsc-code')}>
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <FaShieldAlt className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700">IFSC Code</span>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer"
              onClick={()=>navigate('/banking-service/finance-statement')}>
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <FaShieldAlt className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700">Annual Report</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BankingLayout