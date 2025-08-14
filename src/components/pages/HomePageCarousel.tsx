import React, { useEffect } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import carouselOne from '@assets/images/ho.jpg';
import carouselTwo from '@assets/images/ve.jpg';
import carouselThree from '@assets/images/edu.jpg';
import { MdKeyboardArrowRight, MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { FaHandHoldingUsd, FaUniversity, FaCoins } from "react-icons/fa";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const HomePageCarousel: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const loanProducts = [
    {
      title: t('accounts_and_deposits'), icon: <RiMoneyRupeeCircleFill className="text-2xl text-blue-600" />,
      link: '/banking-service/deposit-services'
    },
    { title: t('retail_msme_loan'), icon: <FaHandHoldingUsd className="text-2xl text-blue-600" />, link: '/interest-rates' },
    { title: t('gold_loan'), icon: <FaCoins className="text-2xl text-yellow-500" />, link: '/gold-loan' },
    { title: t('annual_reports'), icon: <FaUniversity className="text-2xl text-gray-600" />, link: '/banking-service/finance-statement' },
  ];

  const [sliderRef, sliderInstance] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 10, // Further reduced spacing for small screens
    },
  });

  // Auto-rotation effect
  useEffect(() => {
    if (!sliderInstance.current) return;

    let timeout: NodeJS.Timeout;
    let mouseOver = false;
    const autoplayInterval = 2000; // 2 seconds

    const startAutoPlay = () => {
      clearTimeout(timeout);
      if (!mouseOver) {
        timeout = setTimeout(() => {
          sliderInstance.current?.next();
          startAutoPlay();
        }, autoplayInterval);
      }
    };

    const handleMouseEnter = () => {
      mouseOver = true;
      clearTimeout(timeout);
    };

    const handleMouseLeave = () => {
      mouseOver = false;
      startAutoPlay();
    };

    const sliderContainer = sliderInstance.current.container;
    sliderContainer.addEventListener('mouseenter', handleMouseEnter);
    sliderContainer.addEventListener('mouseleave', handleMouseLeave);

    // Start autoplay immediately
    startAutoPlay();

    // Cleanup
    return () => {
      clearTimeout(timeout);
      sliderContainer.removeEventListener('mouseenter', handleMouseEnter);
      sliderContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [sliderInstance]);

  // Handle manual navigation
  const handlePrev = () => {
    sliderInstance.current?.prev();
  };

  const handleNext = () => {
    sliderInstance.current?.next();
  };

  return (
    <div className="space-y-2 mt-4 sm:mt-6">
      <div className="">
        <div className="flex flex-col lg:flex-row gap-4 items-start">
          <div className="w-full max-w-full">
            <div className="relative w-full group">
              <div className="relative overflow-hidden bg-blue-100 py-3 sm:py-4" style={{ marginTop: '-22px' }}>
                <div className="whitespace-nowrap">
                  <span className="inline-block animate-marquee pl-[100%] text-sm sm:text-base">
                    {t('marquee_notice')}
                  </span>
                </div>
              </div>
              <div ref={sliderRef} className="keen-slider w-full ">
                <div className="keen-slider__slide">
                  <img src={carouselOne} alt="carousel-1" className="w-full h-full object-contain rounded-lg" />
                </div>
                <div className="keen-slider__slide">
                  <img src={carouselTwo} alt="carousel-2" className="w-full h-full object-contain rounded-lg" />
                </div>
                <div className="keen-slider__slide">
                  <img src={carouselThree} alt="carousel-3" className="w-full h-full object-contain rounded-lg" />
                </div>
              </div>

              <button
                className="absolute top-1/2 left-1 sm:left-3 transform -translate-y-1/2 text-white bg-black bg-opacity-70 p-1.5 sm:p-2.5 rounded-full cursor-pointer hover:bg-opacity-100 transition-all duration-300 z-10"
                onClick={handlePrev}
                aria-label="Previous slide"
              >
                <MdArrowBackIos className="text-base sm:text-lg ml-0.5 sm:ml-1" />
              </button>
              <button
                className="absolute top-1/2 right-1 sm:right-3 transform -translate-y-1/2 text-white bg-black bg-opacity-70 p-1.5 sm:p-2.5 rounded-full cursor-pointer hover:bg-opacity-100 transition-all duration-300 z-10"
                onClick={handleNext}
                aria-label="Next slide"
              >
                <MdArrowForwardIos className="text-base sm:text-lg" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* New Marquee of loans */}

      <div className="relative overflow-hidden bg-blue-900 py-3">
        <div className="whitespace-nowrap">
          <span className="inline-block animate-marquee_for_another pl-[100%] text-white font-medium text-sm sm:text-base">
            <span className="mx-4 sm:mx-6 inline-flex items-center">
              <span className="text-yellow-300 mr-2">★</span>
              <span>{t('interest_rates_.deposit')}: <span className="font-bold">+1%</span></span>
            </span>
            <span className="mx-4 sm:mx-6 inline-flex items-center">
              <span className="text-yellow-300 mr-2">★</span>
              <span>{t('interest_rates_.working_capital')}: <span className="font-bold">9% to 11.50%</span></span>
            </span>
            <span className="mx-4 sm:mx-6 inline-flex items-center">
              <span className="text-yellow-300 mr-2">★</span>
              <span>{t('interest_rates_.loan_nsc')}: <span className="font-bold">11%</span></span>
            </span>
            <span className="mx-4 sm:mx-6 inline-flex items-center">
              <span className="text-yellow-300 mr-2">★</span>
              <span>{t('interest_rates_.agri_allied')}: <span className="font-bold">12%</span></span>
            </span>
            <span className="mx-4 sm:mx-6 inline-flex items-center">
              <span className="text-yellow-300 mr-2">★</span>
              <span>{t('interest_rates_.term_loan')}: <span className="font-bold">15%</span></span>
            </span>
            <span className="mx-4 sm:mx-6 inline-flex items-center">
              <span className="text-yellow-300 mr-2">★</span>
              <span>{t('interest_rates_.loan_shop_purchase')}: <span className="font-bold">12%</span></span>
            </span>
            <span className="mx-4 sm:mx-6 inline-flex items-center">
              <span className="text-yellow-300 mr-2">★</span>
              <span>{t('interest_rates_.education_loan')}: <span className="font-bold">10%</span></span>
            </span>
            <span className="mx-4 sm:mx-6 inline-flex items-center">
              <span className="text-yellow-300 mr-2">★</span>
              <span>{t('interest_rates_.home_loan_employee')}: <span className="font-bold">7%</span></span>
            </span>
            <span className="mx-4 sm:mx-6 inline-flex items-center">
              <span className="text-yellow-300 mr-2">★</span>
              <span>{t('interest_rates_.home_loan_share_holder')}: <span className="font-bold">13%</span></span>
            </span>
            <span className="mx-4 sm:mx-6 inline-flex items-center">
              <span className="text-yellow-300 mr-2">★</span>
              <span>{t('interest_rates_.gold_loan_marquess')}: <span className="font-bold">9.95%</span></span>
            </span>
            <span className="mx-4 sm:mx-6 inline-flex items-center">
              <span className="text-yellow-300 mr-2">★</span>
              <span>{t('interest_rates_.gold_mortgage_cash_credit')}: <span className="font-bold">9.95%</span></span>
            </span>
            <span className="mx-4 sm:mx-6 inline-flex items-center">
              <span className="text-yellow-300 mr-2">★</span>
              <span>{t('interest_rates_.Kalpvruksha_Vehicle_Loan')}: <span className="font-bold">10%</span></span>
            </span>
            <span className="mx-4 sm:mx-6 inline-flex items-center">
              <span className="text-yellow-300 mr-2">★</span>
              <span>{t('interest_rates_.Kalpvruksha_Housing_Loan')}: <span className="font-bold">8.50% to 9.50%</span></span>
            </span>
            <span className="mx-4 sm:mx-6 inline-flex items-center">
              <span className="text-yellow-300 mr-2">★</span>
              <span>{t('staff_loan_title')}: <span className="font-bold">7%</span></span>
            </span>
          </span>
        </div>
      </div>


      {/* <div className='bg-blue-900 py-8 sm:py-10'>
        <div className="mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {loanProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white cursor-pointer rounded-lg shadow-xl p-4 sm:p-6 py-10 sm:py-14 flex flex-col justify-between h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                onClick={() => navigate(product.link)}
              >
                <div className="mb-4 flex items-center gap-3">
                  {product.icon}
                  <p className="text-xl font-bold text-gray-800">{product.title}</p>
                </div>
                <div className="flex justify-between items-center">
                  <button
                    className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1 cursor-pointer text-sm sm:text-base"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(product.link);
                    }}
                  >
                    {t('view')} <MdKeyboardArrowRight className="text-lg sm:text-xl" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      <div className='bg-blue-900 py-8 sm:py-10'>
        <div className="mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {loanProducts.map((product, index) => {
              const gradients = [
                'from-blue-500 to-blue-600',
                'from-green-500 to-green-600',
                'from-amber-500 to-amber-600',
                'from-purple-500 to-purple-600'
              ];
              return (
                <div
                  key={index}
                  className={`bg-gradient-to-r ${gradients[index % gradients.length]} cursor-pointer rounded-xl shadow-lg p-4 sm:p-6 py-10 sm:py-14 flex flex-col justify-between h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
                  onClick={() => navigate(product.link)}
                >
                  <div className="mb-4 flex items-center gap-3">
                    {React.cloneElement(product.icon, { className: "text-2xl text-white" })}
                    <p className="text-xl font-bold text-white">{product.title}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <button
                      className="text-white/90 hover:text-white font-medium flex items-center gap-1 cursor-pointer text-sm sm:text-base"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(product.link);
                      }}
                    >
                      {t('view')} <MdKeyboardArrowRight className="text-lg sm:text-xl" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageCarousel;