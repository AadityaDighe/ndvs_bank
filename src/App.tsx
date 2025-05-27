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
          </Route>
        </Routes>
      </Router>
    </div>
  )
}


export default App