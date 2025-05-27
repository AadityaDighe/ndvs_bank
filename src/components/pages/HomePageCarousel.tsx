import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import carouselOne from '@assets/images/slider_image.jpg';
import carouselTwo from '@assets/images/slider_image_two.jpg';
import carouselThree from '@assets/images/slider_test.jpg';
import { MdKeyboardArrowRight, MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { FaHandHoldingUsd, FaUniversity, FaCoins } from "react-icons/fa";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const HomePageCarousel: React.FC = () => {
  const { t } = useTranslation();

  const loanProducts = [
    { title: t('accounts_and_deposits'), icon: <RiMoneyRupeeCircleFill className="text-2xl text-blue-600" />, link: '/account-and-deposit' },
    { title: t('Retail_and_MSME_Loan'), icon: <FaHandHoldingUsd className="text-2xl text-blue-600" />, link: '/interest-rates' },
    { title: t('gold_loan'), icon: <FaCoins className="text-2xl text-yellow-500" />, link: '/gold-loan' },
    { title: t('annual_reports'), icon: <FaUniversity className="text-2xl text-gray-600" />, link: '/banking-service/finance-statement' },
  ];

  const navigate = useNavigate();

  const [sliderRef, sliderInstance] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 30,
    },
    created: (slider) => {
      let timeout: ReturnType<typeof setTimeout>;
      let mouseOver = false;

      function clearNextTimeout() {
        clearTimeout(timeout);
      }

      function nextTimeout() {
        clearTimeout(timeout);
        if (!mouseOver) {
          timeout = setTimeout(() => {
            slider.next();
          }, 5000);
        }
      }

      slider.on("created", () => {
        slider.container.addEventListener("mouseover", () => {
          mouseOver = true;
          clearNextTimeout();
        });
        slider.container.addEventListener("mouseout", () => {
          mouseOver = false;
          nextTimeout();
        });
        nextTimeout();
      });

      slider.on("dragStarted", clearNextTimeout);
      slider.on("animationEnded", nextTimeout);
      slider.on("updated", nextTimeout);
    }
  });

  return (
    <div className="space-y-18 mt-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-4 items-start">
          <div className="w-full">
            <div className="relative w-full group">
              <div className="relative overflow-hidden bg-blue-100 py-2">
                <div className="whitespace-nowrap">
                  <span className="inline-block animate-marquee pl-[100%]">
                    {t('marquee_notice')}
                  </span>
                </div>
              </div>
              <div ref={sliderRef} className="keen-slider h-full mt-6">
                <div className="keen-slider__slide">
                  <img src={carouselOne} alt="carousel-1" className="w-full h-full object-cover rounded-lg" />
                </div>
                <div className="keen-slider__slide">
                  <img src={carouselTwo} alt="carousel-2" className="w-full h-full object-cover rounded-lg" />
                </div>
                <div className="keen-slider__slide">
                  <img src={carouselThree} alt="carousel-3" className="w-full h-full object-cover rounded-lg" />
                </div>
              </div>

              {sliderInstance && (
                <>
                  <button
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-70 p-3 rounded-full cursor-pointer hover:bg-opacity-100 transition-all duration-300 z-10"
                    onClick={() => sliderInstance.current?.prev()}
                    aria-label="Previous slide"
                  >
                    <MdArrowBackIos className="text-xl ml-1" />
                  </button>
                  <button
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-70 p-3 rounded-full cursor-pointer hover:bg-opacity-100 transition-all duration-300 z-10"
                    onClick={() => sliderInstance.current?.next()}
                    aria-label="Next slide"
                  >
                    <MdArrowForwardIos className="text-xl" />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className='bg-blue-900 py-10'>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {loanProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white cursor-pointer rounded-lg shadow-xl p-6 py-14 flex flex-col justify-between h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                onClick={() => navigate(product.link)}
              >
                <div className="mb-4 flex items-center gap-3">
                  {product.icon}
                  <p className="text-lg font-semibold text-gray-800">{product.title}</p>
                </div>

                <div className="flex justify-between items-center">
                  <button
                    className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(product.link);
                    }}
                  >
                    {t('view')} <MdKeyboardArrowRight className="text-xl" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageCarousel;