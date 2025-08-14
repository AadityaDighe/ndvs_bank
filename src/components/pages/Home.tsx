// import { useEffect, useState } from "react";
// import { FaTimes } from "react-icons/fa";
// import HomePageCarousel from "./HomePageCarousel";
// import LoanCalculator from "./LoanCalculator";
// import Spotlight from "./Spotlight";
// import DigitalBankingServices from "./DigitalBankingServices ";
// import cyber_awareness1 from "@assets/images/cyber_awareness1.png";
// import cyber_awareness2 from "@assets/images/cyber_awareness2.png";
// import BankingLayout from "./BankingLayout";
// import FD from "./FD";
// import Repayment from "./Repayment";

// const Home = () => {
//   const [showBackground, setShowBackground] = useState(true);
//   const [showForeground, setShowForeground] = useState(true);

//   const closeForeground = () => setShowForeground(false);
//   const closeBackground = () => setShowBackground(false);

//   useEffect(() => {
//     if (showBackground || showForeground) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, [showBackground, showForeground]);

//   useEffect(() => {
//     const handleEscKey = (e: KeyboardEvent) => {
//       if (e.key === 'Escape') {
//         if (showForeground) {
//           closeForeground();
//         } else if (showBackground) {
//           closeBackground();
//         }
//       }
//     };
//     if (showBackground || showForeground) {
//       document.addEventListener('keydown', handleEscKey);
//     }
//     return () => {
//       document.removeEventListener('keydown', handleEscKey);
//     };
//   }, [showBackground, showForeground]);

//   return (
//     <div>
//       {/* Background Image Modal */}
//       {showBackground && (
//         <div
//           className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center"
//           onClick={closeBackground}
//         >
//           <div className="relative w-full h-full">
//             {/* Close Button for Background */}
//             <button
//               onClick={closeBackground}
//               className="absolute top-4 right-4 z-10 bg-white hover:bg-gray-100 text-gray-600 hover:text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
//               aria-label="Close background"
//             >
//               <FaTimes className="w-5 h-5" />
//             </button>
//             <img
//               src={cyber_awareness1}
//               alt="Cyber Awareness Background"
//               className="w-full h-full object-contain"
//             />
//           </div>
//         </div>
//       )}

//       {/* Foreground Image Modal */}
//       {showForeground && (
//         <div
//           className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black bg-opacity-70"
//           onClick={closeForeground}
//         >
//           <div
//             className="relative bg-transparent rounded-xl w-full max-w-4xl"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Close Button for Foreground */}
//             <button
//               onClick={closeForeground}
//               className="absolute -top-4 right-40 z-10 bg-white hover:bg-gray-100 text-gray-600 hover:text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
//               aria-label="Close foreground"
//             >
//               <FaTimes className="w-5 h-5" />
//             </button>

//             {/* Foreground Image */}
//             <img
//               src={cyber_awareness2}
//               alt="Cyber Awareness Foreground"
//               className="w-full max-h-[90vh] object-contain rounded-lg shadow-xl"
//             />
//           </div>
//         </div>
//       )}

//       {/* Main Page Content */}
//       <div className={(showBackground || showForeground) ? 'filter blur-sm' : ''}>
//         <HomePageCarousel />
//         <BankingLayout />
//         <DigitalBankingServices />
//         <Spotlight />


//         <p className="text-center text-4xl font-bold bg-gray-300 py-6">Calculators</p>
//         <LoanCalculator />
//         <Repayment />
//         <FD />
//       </div>
//     </div>
//   );
// };

// export default Home;














import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import HomePageCarousel from "./HomePageCarousel";
import LoanCalculator from "./LoanCalculator";
import Spotlight from "./Spotlight";
import DigitalBankingServices from "./DigitalBankingServices ";
import cyber_awareness1 from "@assets/images/cyber_awareness1.png";
import cyber_awareness2 from "@assets/images/cyber_awareness2.png";
import BankingLayout from "./BankingLayout";
// import FD from "./FD";
// import Repayment from "./Repayment";

const Home = () => {
  const [showBackground, setShowBackground] = useState(false);
  const [showForeground, setShowForeground] = useState(false);

  useEffect(() => {
    // Check if the user has seen the modals before
    const hasSeenModals = sessionStorage.getItem('hasSeenModals');
    
    if (!hasSeenModals) {
      setShowBackground(true);
      // Mark that the user has seen the modals
      sessionStorage.setItem('hasSeenModals', 'true');
    }
  }, []);

  const closeForeground = () => setShowForeground(false);
  const closeBackground = () => {
    setShowBackground(false);
    // Show foreground modal after background is closed
    setShowForeground(true);
  };

  useEffect(() => {
    if (showBackground || showForeground) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showBackground, showForeground]);

  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (showForeground) {
          closeForeground();
        } else if (showBackground) {
          closeBackground();
        }
      }
    };
    if (showBackground || showForeground) {
      document.addEventListener('keydown', handleEscKey);
    }
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [showBackground, showForeground]);

  return (
    <div>
      {/* Background Image Modal */}
      {showBackground && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center"
          onClick={closeBackground}
        >
          <div className="relative w-full h-full">
            {/* Close Button for Background */}
            <button
              onClick={closeBackground}
              className="absolute top-4 right-4 z-10 bg-white hover:bg-gray-100 text-gray-600 hover:text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
              aria-label="Close background"
            >
              <FaTimes className="w-5 h-5" />
            </button>
            <img
              src={cyber_awareness1}
              alt="Cyber Awareness Background"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}

      {/* Foreground Image Modal */}
      {showForeground && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black bg-opacity-70"
          onClick={closeForeground}
        >
          <div
            className="relative bg-transparent rounded-xl w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button for Foreground */}
            <button
              onClick={closeForeground}
              className="absolute -top-4 right-40 z-10 bg-white hover:bg-gray-100 text-gray-600 hover:text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
              aria-label="Close foreground"
            >
              <FaTimes className="w-5 h-5" />
            </button>

            {/* Foreground Image */}
            <img
              src={cyber_awareness2}
              alt="Cyber Awareness Foreground"
              className="w-full max-h-[90vh] object-contain rounded-lg shadow-xl"
            />
          </div>
        </div>
      )}

      {/* Main Page Content */}
      <div className={(showBackground || showForeground) ? 'filter blur-sm' : ''}>
        <HomePageCarousel />
        <BankingLayout />
        <DigitalBankingServices />
        <Spotlight />

        <p className="text-center text-4xl font-bold bg-gray-300 py-6">Calculators</p>
        <LoanCalculator />
        {/* <Repayment />
        <FD /> */}
      </div>
    </div>
  );
};

export default Home;