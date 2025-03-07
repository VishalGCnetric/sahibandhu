import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const GoldLoanSlider = () => {
  const cards = [
    {
      id: 1,
      title: "Get ₹5,000/month loan",
      subTitle: "Up to ₹5 Lakh instantly!",
      interest: "Low interest starting at 7%",
      charges: "No hidden charges",
      img: "https://www.shutterstock.com/image-photo/gold-mortgage-loan-260nw-664109545.jpg", // Replace with your own images
    },
    {
      id: 2,
      title: "Gold Loan in 5 mins",
      subTitle: "Instant Approval",
      interest: "Secure and Reliable",
      charges: "Minimal Documentation",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoAW7GUQHvg6EaGFxt1HA5PISWRMAX75dTDw&s",
    },
    {
      id: 3,
      title: "Flexible Repayment Options",
      subTitle: "Best Rates Guaranteed",
      interest: "EMI Starting ₹500",
      charges: "No Prepayment Penalty",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxMlBtCS7LnG1zYtAVMykF7oCleaT7Y2DQAPhXGGVOkoNRlT03DmZAV0fkKVucarcfMgQ&usqp=CAU",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-between  p-8 rounded-xl shadow-md mx-auto max-w-full my-4">
      {/* Left Side: Text and Icons */}
      <div className="md:w-1/3 mb-8 md:mb-0">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Find the <span className="text-[#E9BC2D]">Best Gold Loan</span> for You
        </h2>
        <p className="text-gray-500 mb-6">
          20+ lenders offering the best rates
        </p>
        <div className="flex gap-8">
          <div className="flex items-center text-[#E9BC2D]">
            <span className="text-2xl mr-2">🏦</span>
            <div>
              <p className="font-medium">Lowest interest rates</p>
            </div>
          </div>
          <div className="flex items-center text-[#E9BC2D]">
            <span className="text-2xl mr-2">⚡</span>
            <div>
              <p className="font-medium">Instant approval & disbursal</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side: Slider with Cards */}
      <div className="relative md:w-1/2">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className="rounded-xl "
        >
          {cards.map((card) => (
            <SwiperSlide key={card.id}>
              <div
                className="bg-cover bg-center p-6 rounded-xl text-white relative"
                style={{
                  backgroundImage: `url(${card.img})`,
                  backgroundSize: "cover",       // Ensures the image covers the entire area without distortion
                  backgroundPosition: "center",  // Centers the image within the container
                  backgroundRepeat: "no-repeat", // Prevents the image from repeating
                  borderRadius: "12px",          // Adds rounded corners for a smooth look
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)", // Slightly darker shadow for depth
                  overflow: "hidden",            // Clips any overflowing content (if needed)
                  transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth hover effects
                  cursor: "pointer",             // Indicates clickable elements
                }}
                
              >
                <div className=" bg-opacity-40 p-4 rounded-xl">
                  <p className="text-xs mb-2">*T&C apply. Approval subject to verification.</p>
                  <h3 className="text-2xl  font-bold mb-2">{card.title}</h3>
                  <h4 className="text-xl font-semibold text-green-400 mb-4">
                    {card.subTitle}
                  </h4>
                  <div className="mb-6">
                    <span className="bg-yellow-100 text-yellow-800 py-1 px-3 rounded-full text-sm mr-2">
                      {card.interest}
                    </span>
                    <span className="bg-yellow-100 text-yellow-800 py-1 px-3 rounded-full text-sm">
                      {card.charges}
                    </span>
                  </div>
                  <button className="bg-[#E9BC2D] text-white py-2 px-6 rounded-lg hover:bg-yellow-700 transition duration-300">
                    View offers
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Dots for carousel-like effect */}
        {/* <div className="flex justify-center items-center mt-4 space-x-2">
          <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
          <span className="w-2 h-2 bg-yellow-600 rounded-full"></span>
          <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
        </div> */}
      </div>
    </div>
  );
};

export default GoldLoanSlider;
