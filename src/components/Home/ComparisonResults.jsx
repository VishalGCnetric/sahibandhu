import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Modal Component
const Modal = ({ isOpen, onClose, bank }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
      className="fixed inset-0  bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50"


        initial={{ opacity: 10 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white rounded-lg p-8 max-w-md w-full text-center shadow-lg"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Thank You for Choosing {bank}!
          </h2>
          <p className="text-gray-600 mb-6">
            Our team will contact you shortly to proceed with your loan application.
          </p>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-yellow-600 text-black font-medium rounded hover:bg-yellow-500 transition duration-300"
          >
            Close
          </button>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

// Loan Card Component
const LoanCard = ({
  bank,
  logo,
  title,
  interestRate,
  ltv,
  processingFee,
  maxTenure,
  distance,
  goldConversionRate,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
      <div className="flex p-5 border-b border-gray-200">
        <div className=" bg-gray-100 flex items-center justify-center rounded-lg mr-5">
          {/* {logo} */}
          <img src={logo} alt="" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-1">{title}</h3>
          <p className="text-gray-600 mb-1">{bank}</p>
          <p className="text-gray-700 mb-1">
            Interest Rate:{" "}
            <span className="text-green-600 font-bold">{interestRate}</span>
          </p>
          <p className="text-gray-700">
            Distance:{" "}
            <span className="text-blue-600 font-bold">{distance}</span>
          </p>
        </div>
      </div>
      <div className="p-5 flex justify-between items-center">
        <div className="flex gap-6">
          <div className="text-center">
            <h4 className="text-sm text-gray-500 mb-1">Max LTV</h4>
            <p className="text-lg font-semibold text-gray-800">{ltv}</p>
          </div>
          <div className="text-center">
            <h4 className="text-sm text-gray-500 mb-1">Processing Fee</h4>
            <p className="text-lg font-semibold text-gray-800">
              {processingFee}
            </p>
          </div>
          <div className="text-center">
            <h4 className="text-sm text-gray-500 mb-1">Max Tenure</h4>
            <p className="text-lg font-semibold text-gray-800">{maxTenure}</p>
          </div>
          <div className="text-center">
            <h4 className="text-sm text-gray-500 mb-1">Gold Conversion Rate</h4>
            <p className="text-lg font-semibold text-gray-800">
              {goldConversionRate}
            </p>
          </div>
        </div>
        <button
          onClick={handleButtonClick}
          className="px-5 py-2 bg-yellow-600 text-black font-medium rounded hover:bg-yellow-500 transition duration-300"
        >
          {/* {distance === "Nearby" ? "Pledge Now" : "Get My Loan Now"} */}
          Get My Loan
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} bank={bank} />
    </div>
  );
};

// Comparison Results Component
const ComparisonResults = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const loans = [
    {
      bank: "DCB Bank",
      // logo: "SBI",
      title: "DCB Gold Loan",
      interestRate: "7.50% p.a.",
      ltv: "75%",
      processingFee: "0.5%",
      maxTenure: "36 months",
      distance: "Nearby",
      goldConversionRate: "₹4,800/g",
      logo:"https://sahibandhu.com/wp-content/uploads/2024/12/DCB.png"
    },
    {
      bank: "HDFC Bank",
      // logo: "HDFC",
      title: "HDFC Gold Loan",
      interestRate: "8.25% p.a.",
      ltv: "80%",
      processingFee: "Nil",
      maxTenure: "24 months",
      distance: "5 km away",
      goldConversionRate: "₹4,750/g",
      logo:"https://sahibandhu.com/wp-content/uploads/2024/12/HDFC.png"
    },
    {
      bank: "Muthoot Finance",
      // logo: "Muthoot",
      title: "Muthoot Gold Loan",
      interestRate: "9.00% p.a.",
      ltv: "85%",
      processingFee: "₹500",
      maxTenure: "12 months",
      distance: "10 km away",
      goldConversionRate: "₹4,700/g",
      logo:"https://sahibandhu.com/wp-content/uploads/2024/12/muthoot-finance.png"
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            Gold Loan Offers
          </h2>
          <p className="text-gray-600">
            Based on 50g of 22K gold and a loan amount of ₹2,00,000
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6">
          {loans.map((loan, index) => (
            <LoanCard key={index} {...loan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonResults;
