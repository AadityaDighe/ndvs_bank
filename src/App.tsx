import BankingServices from "./components/pages/BankingServices"
import Home from "./components/pages/Home"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Management from "./components/pages/Management"
import ContactUs from "./components/pages/ContactUs"
import AboutUs from "./components/pages/AboutUs"
import Activities from "./components/pages/Activities"
import Tender from "./components/pages/Tender"
import InterestRates from "./components/pages/InterestRates"
import Schemes from "./components/pages/Schemes"
import IfscCode from "./components/pages/IfscCode"
import PrivacyPolicy from "./components/pages/PrivacyPolicy"
import BankHoliday from "./components/pages/BankHoliday"
import Tds from "./components/pages/Tds"
import ServiceCharges from "./components/pages/ServiceCharges"
import ImpsTermsConditions from "./components/pages/ImpsTermsConditions"
import LockerServices from "./components/pages/LockerService"
import SavingsAccount from "./components/pages/SavingsAccount"
import CurrentAccount from "./components/pages/CurrentAccount"
import DepositAccount from "./components/pages/DepositAccount"
import LoanServices from "./components/pages/LoanServices"
import ServiceDetailPage from "./components/pages/ServiceDetailPage"
import RTGS from "./components/pages/RTGS"
import Services from "./components/pages/Services"
import LoanSkim from "./components/pages/LoanSkim"
import Deposits from "./components/pages/Deposits"
import Download from "./components/pages/Download"
import Branches from "./components/pages/Branches"
import Layout from "./components/pages/Layout"
import InoperativeAccount from "./components/pages/InoperativeAccount"
import Deaf from "./components/pages/Deaf"
import AnnualReport from "./components/pages/AnuualReport"
import GoldLoan from "./components/pages/GoldLoan"
import Finance from "./components/pages/Finance"
import RegularService from "./components/RegularService"
import DigitalBankingServices from "./components/pages/DigitalBankingServices "
import DepositAdvances from "./components/pages/LoanServices/DepositAdvances"
import NationalSavingCertificate from "./components/pages/LoanServices/NationalSavingCertificate"
import GoldMortgageLoan from "./components/pages/LoanServices/GoldMortgageLoan"
import VehicleLoan from "./components/pages/LoanServices/VehicleLoan"
import BusinessMachineryLoan from "./components/pages/LoanServices/BusinessMachineryLoan"
import LoanShopShed from "./components/pages/LoanServices/LoanShopShed"
import SmallBusinessLoan from "./components/pages/LoanServices/SmallBusinessLoan"
import HypothecationLoan from "./components/pages/LoanServices/HypothecationLoan"
import HypothecationCashCreditLoan from "./components/pages/LoanServices/HypothecationCashCreditLoan"
import LoanForConstruction from "./components/pages/LoanServices/LoanForConstruction"
import InstallmentCashCreditLoan from "./components/pages/LoanServices/InstallmentCashCreditLoan"
import StaffLoan from "./components/pages/LoanServices/StaffLoan"
import HousingEmployeesLoan from "./components/pages/LoanServices/HousingEmployeesLoan"
import AgriculturalLoan from "./components/pages/LoanServices/AgriculturalLoan"
// import VehicleLoanBClassMembers from "./components/pages/LoanServices/VehicleLoanBClassMembers"
import GoldMortgageCashCredit from "./components/pages/LoanServices/GoldMortgageCashCredit"
import HousingLoanMerchants from "./components/pages/LoanServices/HousingLoanMerchants"
import EducationalLoan from "./components/pages/LoanServices/EducationalLoan"
import HomeLoanShareHolders from "./components/pages/LoanServices/HomeLoanShareHolders"
import MobileBanking from "./components/pages/MobileBanking"
import ATM from "./components/pages/ATM"
import SMSBanking from "./components/pages/SMSBanking"
import PersonalizedQRCode from "./components/pages/Personalizedqr"
import UPI from "./components/pages/UPI"
import NoticePage from "./components/pages/NoticePage"
import TenderPage from "./components/pages/TenderPage"
// import BankHeader from "./components/pages/BankHeader"

const App = () => {
  return (
    <div>
      {/* Production */}
      {/* <Router basename="/ndvs"> */}

      {/* development */}
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/banking-service" element={<BankingServices />} />
            <Route path="/loan-service" element={<LoanSkim />} />
            <Route path="/service" element={<Services />} />
            <Route path="/digital-banking-services" element={<DigitalBankingServices />} />
            <Route path="/regular-services" element={<RegularService />} />
            <Route path="/banking-service/locker-services" element={<LockerServices />} />
            <Route path="/banking-service/saving-services" element={<SavingsAccount />} />
            <Route path="/banking-service/current-services" element={<CurrentAccount />} />
            <Route path="/banking-service/deposit-services" element={<DepositAccount />} />
            <Route path="/banking-service/loan-services" element={<LoanServices />} />
            <Route path="/banking-service/rtgs" element={<RTGS />} />
            <Route path="/digital-service" element={<ServiceDetailPage />} />
            <Route path="/management" element={<Management />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/activities-social" element={<Activities />} />
            <Route path="/tender-notice" element={<Tender />} />
            <Route path="/notice" element={<NoticePage />} />
            <Route path="/tender" element={<TenderPage />} />
            <Route path="/interest-rates" element={<InterestRates />} />
            <Route path="/schemes" element={<Schemes />} />
            <Route path="/ifsc-code" element={<IfscCode />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/bank-holidays" element={<BankHoliday />} />
            <Route path="/tds-information" element={<Tds />} />
            <Route path="/service-charges" element={<ServiceCharges />} />
            <Route path="/imps-terms-conditions" element={<ImpsTermsConditions />} />
            <Route path="/account-and-deposit" element={<Deposits />} />
            <Route path="/download" element={<Download />} />
            <Route path="/branches" element={<Branches />} />
            <Route path="/inoperative-accounts" element={<InoperativeAccount />} />
            <Route path="/deaf-account-list" element={<Deaf />} />
            <Route path="/annual-report" element={<AnnualReport />} />
            <Route path="/gold-loan" element={<GoldLoan />} />
            <Route path="/banking-service/finance-statement" element={<Finance />} />

            <Route path="/deposit-advances" element={<DepositAdvances />} />
            <Route path="/national-saving-certificate" element={<NationalSavingCertificate />} />
            <Route path="/gold-mortgage-loan" element={<GoldMortgageLoan />} />
            <Route path="/Vehicle-loan" element={<VehicleLoan />} />
            <Route path="/buisness-machinary-loan" element={<BusinessMachineryLoan />} />
            <Route path="/loan-shop-shed" element={<LoanShopShed />} />
            <Route path="/small-business-loan" element={<SmallBusinessLoan />} />
            <Route path="/hypothecation-loan" element={<HypothecationLoan />} />
            <Route path="/hypothecation-cash-credit-loan" element={<HypothecationCashCreditLoan />} />
            <Route path="/construction-loan" element={<LoanForConstruction />} />
            <Route path="/educational-loan" element={<EducationalLoan />} />
            <Route path="/installment-loan" element={<InstallmentCashCreditLoan />} />
            <Route path="/staff-loan" element={<StaffLoan />} />
            <Route path="/housing-employees-loan" element={<HousingEmployeesLoan />} />
            <Route path="/housing-loan-share-holders" element={<HomeLoanShareHolders />} />
            <Route path="/agricultural-loan" element={<AgriculturalLoan />} />
            {/* <Route path="/vehicle-loan-class-members" element={<VehicleLoanBClassMembers />} /> */}
            <Route path="/gold-morgage-cash-credit" element={<GoldMortgageCashCredit />} />
            <Route path="/housing-loan-merchant" element={<HousingLoanMerchants />} />
            
            <Route path="/mobile-banking" element={<MobileBanking />} />
            <Route path="/atm-services" element={<ATM />} />
            <Route path="/sms-banking" element={<SMSBanking />} />
            <Route path="/personalized-qr" element={<PersonalizedQRCode />} />
            <Route path="/upi" element={<UPI />} />




            {/* <Route path="/bankheader" element={<BankHeader />} /> */}
          </Route>
        </Routes>
      </Router>
    </div>
  )
}


export default App