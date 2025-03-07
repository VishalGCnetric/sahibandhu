import React from "react";
import { FaRupeeSign, FaUsers, FaMapMarkerAlt, FaTrophy, FaUniversity, FaMapPin } from "react-icons/fa";

const StatsSection = () => {
  const stats = [
    {
      value: "Rs 15,000+ Cr",
      label: "Worth of loans disbursed",
      icon: <FaRupeeSign className="text-purple-600 text-3xl mb-2" />,
      color: "text-purple-600",
    },
    {
      value: "3,80,000+",
      label: "Happy customers",
      icon: <FaUsers className="text-teal-600 text-3xl mb-2" />,
      color: "text-teal-600",
    },
    {
      value: "640+",
      label: "Districts covered",
      icon: <FaMapMarkerAlt className="text-blue-600 text-3xl mb-2" />,
      color: "text-blue-600",
    },
    {
      value: "#1",
      label: "Largest network in the country",
      icon: <FaTrophy className="text-orange-500 text-3xl mb-2" />,
      color: "text-orange-500",
    },
    {
      value: "9,780+",
      label: "Bank branches covered",
      icon: <FaUniversity className="text-green-600 text-3xl mb-2" />,
      color: "text-green-600",
    },
    {
      value: "12,450+",
      label: "PIN codes covered",
      icon: <FaMapPin className="text-purple-600 text-3xl mb-2" />,
      color: "text-purple-600",
    },
  ];

  return (
    <div className=" py-4">
      <div className="max-w-full mx-auto text-center mb-8">
        {/* <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
          What makes Sahibandhu Best Gold Loan Platform?
        </h2> */}
      </div>
      <div className="flex flex-wrap justify-center gap-6 px-2">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 w-[225px] text-center transform transition-transform hover:scale-105"
          >
            <div className="ml-18">
            {stat.icon}</div>
            <h3 className={`text-xl font-bold ${stat.color} mb-2`}>{stat.value}</h3>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
