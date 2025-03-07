import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaMoneyBillWave, FaPercentage, FaPiggyBank } from 'react-icons/fa';

const GoldLoanSlider = () => {
  const cards = [
    { 
      title: 'Instant Loan Approval', 
      desc: 'Get your gold loan approved instantly.', 
      icon: <FaMoneyBillWave className="text-3xl text-yellow-600" />,
      gradient: 'from-yellow-300 to-yellow-600' 
    },
    { 
      title: 'Low Interest Rates', 
      desc: 'Interest rates starting from 7.5% p.a.', 
      icon: <FaPercentage className="text-3xl text-yellow-600" />,
      gradient: 'from-pink-300 to-pink-600' 
    },
    { 
      title: 'Flexible Repayment', 
      desc: 'Choose repayment terms that suit you.', 
      icon: <FaPiggyBank className="text-3xl text-yellow-600" />,
      gradient: 'from-blue-300 to-blue-600' 
    },
    { 
      title: 'High Loan Amount', 
      desc: 'Up to 90% of your gold’s value.', 
      icon: <FaMoneyBillWave className="text-3xl text-yellow-600" />,
      gradient: 'from-green-300 to-green-600' 
    },
    { 
      title: 'Minimal Documentation', 
      desc: 'Quick processing with simple paperwork.', 
      icon: <FaPercentage className="text-3xl text-yellow-600" />,
      gradient: 'from-purple-300 to-purple-600' 
    },
    { 
      title: 'Secure Vault Storage', 
      desc: 'Your gold is safe with us.', 
      icon: <FaPiggyBank className="text-3xl text-yellow-600" />,
      gradient: 'from-red-300 to-red-600' 
    },
  ];

  return (
    <div className="bg-gray-50 py-6">
      <div className="max-w-full  mx-auto px-10">
        {/* <h2 className="text-3xl font-bold text-yellow-700 mb-8 text-center">Gold Loan Offers</h2> */}
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          modules={[ Pagination, Autoplay]}
          className="mySwiper"
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <div className={`bg-gradient-to-r ${card.gradient} text-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform h-56 duration-300`}>
                <div className="flex items-center mb-4 pt-8">
                  {card.icon}
                  <h3 className="text-xl font-semibold ml-3">{card.title}</h3>
                </div>
                <p className="text-sm mb-4">{card.desc}</p>
                <button className="bg-white text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold hover:bg-yellow-100 transition-colors">
                  Apply Now
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default GoldLoanSlider;
