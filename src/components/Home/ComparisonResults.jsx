import { useState } from "react";

// Loan Card Component
const LoanCard = ({ bank, logo, title, interestRate, ltv, processingFee, maxTenure }) => {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="flex p-5 border-b border-gray-200">
          <div className="w-20 h-20 bg-gray-100 flex items-center justify-center rounded-lg mr-5">
            {logo}
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-1">{title}</h3>
            <p className="text-gray-600 mb-1">{bank}</p>
            <p className="text-gray-700">
              Interest Rate: <span className="text-green-600 font-bold">{interestRate}</span>
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
              <p className="text-lg font-semibold text-gray-800">{processingFee}</p>
            </div>
            <div className="text-center">
              <h4 className="text-sm text-gray-500 mb-1">Max Tenure</h4>
              <p className="text-lg font-semibold text-gray-800">{maxTenure}</p>
            </div>
          </div>
          <button className="px-5 py-2 bg-yellow-600 text-black font-medium rounded hover:bg-yellow-600 transition duration-300">
            Apply Now
          </button>
        </div>
      </div>
    );
  };
  
  // Comparison Results Component
  const ComparisonResults = () => {
    const [activeFilter, setActiveFilter] = useState("all");
    
    const loans = [
      {
        bank: "State Bank of India",
        logo: "SBI",
        title: "SBI Gold Loan",
        interestRate: "7.50% p.a.",
        ltv: "75%",
        processingFee: "0.5%",
        maxTenure: "36 months"
      },
      {
        bank: "HDFC Bank",
        logo: "HDFC",
        title: "HDFC Gold Loan",
        interestRate: "8.25% p.a.",
        ltv: "80%",
        processingFee: "Nil",
        maxTenure: "24 months"
      },
      {
        bank: "Muthoot Finance",
        logo: "Muthoot",
        title: "Muthoot Gold Loan",
        interestRate: "9.00% p.a.",
        ltv: "85%",
        processingFee: "₹500",
        maxTenure: "12 months"
      }
    ];
  
    return (
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Gold Loan Offers</h2>
            <p className="text-gray-600">Based on 50g of 22K gold and a loan amount of ₹2,00,000</p>
          </div>
          <div className="flex gap-4 mb-8">
            {["all", "lowest", "highest", "longest"].map((filter) => (
              <button
                key={filter}
                className={`px-4 py-2 rounded ${
                  activeFilter === filter
                    ? "bg-yellow-500 text-white"
                    : "bg-white border border-gray-300"
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter === "all"
                  ? "All Banks"
                  : filter === "lowest"
                  ? "Lowest Interest"
                  : filter === "highest"
                  ? "Highest LTV"
                  : "Longest Tenure"}
              </button>
            ))}
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