import React from 'react';
import { FaCreditCard, FaCheckCircle } from 'react-icons/fa';

const GoldCreditCardBanner = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 text-white py-12 my-8 px-6 rounded-xl shadow-lg mx-4  px-20 max-w-full relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-transparent opacity-30 pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Get Your Gold Credit Card Now!</h2>
          <p className="text-lg mb-4">Enjoy exclusive benefits, rewards, and unmatched credit limits with our premium gold card.</p>
          <ul className="text-sm mb-6 space-y-2">
            <li className="flex items-center">
              <FaCheckCircle className="text-white mr-2" /> Zero Annual Fees for First Year
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-white mr-2" /> Upto 5% Cashback on Purchases
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-white mr-2" /> Airport Lounge Access
            </li>
          </ul>
          <button className="bg-white text-yellow-700 font-semibold py-2 px-6 rounded-full shadow-md hover:bg-yellow-100 transition-colors duration-300">
            Apply Now
          </button>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:justify-end">
          <FaCreditCard className="text-[200px] text-yellow-300 transform rotate-12 shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default GoldCreditCardBanner;
