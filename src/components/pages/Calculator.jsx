import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Bank Logos with placeholder paths
const BankLogos = {
  RBL: "https://sahibandhu.com/wp-content/uploads/2024/12/rbl.png",
  DCB: "https://sahibandhu.com/wp-content/uploads/2024/12/DCB.png", 
  AXIS: "https://banner2.cleanpng.com/20180531/oje/kisspng-axis-bank-loan-bank-account-payment-5b0f85cf6994e1.0246168515277439514325.jpg",
  HDFC: "https://sahibandhu.com/wp-content/uploads/2024/12/HDFC.png",
  ICICI: "https://sahibandhu.com/wp-content/uploads/2024/12/muthoot-finance.png",
  KBL: "https://sahibandhu.com/wp-content/uploads/2024/12/KBL.png",
  KOTAK: "https://sahibandhu.com/wp-content/uploads/2024/12/Kotak.png"
};

const Calculator = () => {
  // State Management
  const [activeTab, setActiveTab] = useState("loanAmount");
  const [goldWeight, setGoldWeight] = useState(100);
  const [goldPurity, setGoldPurity] = useState(22);
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(0.85);
  const [tenure, setTenure] = useState(9);
  const [selectedBank, setSelectedBank] = useState(null);
  const [expandedBank, setExpandedBank] = useState(null);
  // Constant Values
  const goldValuePerGram = 4900;
  const goldCaratValue = goldPurity / 24;

  // Bank Data
  const bankData = [
    {
      name: "RBL",
      logo: BankLogos.RBL,
      baseRate: 0.75,
      valueOfGold: 0.75,
      interestRate: 8.40,
      loanValue: "75%",
      nearestBranch: "1.5 Kms",
      minTenure: 6,
      maxTenure: 24,
      minLoanLimit: 100000,
      maxLoanLimit: 750000,
      dist: "4 Km", // Added Distance

      contactPerson: {
        name: "Raj Kumar",
        phone: "+91 9876543210",
        email: "rajesh.kumar@rbl.com"
      }
    },
    {
      name: "DCB",
      logo: BankLogos.DCB,
      baseRate: 0.80,
      valueOfGold: 0.78,
      interestRate: 8.35,
      loanValue: "78%",
      nearestBranch: "2 Kms",
      minTenure: 3,
      maxTenure: 36,
      minLoanLimit: 200000,
      maxLoanLimit: 1000000,
      contactPerson: {
        name: "Priya Sharma",
        phone: "+91 9988776655",
        email: "priya.sharma@dcb.com"
      }
    },
    {
      name: "AXIS",
      logo: BankLogos.AXIS,
      baseRate: 0.82,
      valueOfGold: 0.73,
      interestRate: 8.20,
      loanValue: "73%",
      nearestBranch: "3 Kms",
      minTenure: 6,
      maxTenure: 18,
      minLoanLimit: 150000,
      maxLoanLimit: 500000,
      contactPerson: {
        name: "Anil Gupta",
        phone: "+91 9112233445",
        email: "anil.gupta@axisbank.com"
      }
    },
    {
      name: "HDFC",
      logo: BankLogos.HDFC,
      baseRate: 0.90,
      valueOfGold: 0.80,
      interestRate: 9.00,
      loanValue: "80%",
      nearestBranch: "4 Kms",
      minTenure: 12,
      maxTenure: 36,
      minLoanLimit: 300000,
      maxLoanLimit: 1100000,
      contactPerson: {
        name: "Meera Patel",
        phone: "+91 9887766554",
        email: "meera.patel@hdfc.com"
      }
    },
    {
      name: "muthoot-finance",
      logo: BankLogos.ICICI,
      baseRate: 0.87,
      valueOfGold: 0.76,
      interestRate: 8.70,
      loanValue: "76%",
      nearestBranch: "2.5 Kms",
      minTenure: 6,
      maxTenure: 24,
      minLoanLimit: 250000,
      maxLoanLimit: 800000,
      contactPerson: {
        name: "Vikram Singh",
        phone: "+91 9665544332",
        email: "vikram.singh@muthootfinance.com"
      }
    },
    {
      name: "KBL",
      logo: BankLogos.KBL,
      baseRate: 0.79,
      valueOfGold: 0.72,
      interestRate: 7.90,
      loanValue: "72%",
      nearestBranch: "1 Km",
      minTenure: 3,
      maxTenure: 18,
      minLoanLimit: 100000,
      maxLoanLimit: 500000,
      contactPerson: {
        name: "Deepa Kumari",
        phone: "+91 9443322110",
        email: "deepa.kumari@kbl.com"
      }
    },
    {
      name: "KOTAK",
      logo: BankLogos.KOTAK,
      baseRate: 0.95,
      valueOfGold: 0.82,
      interestRate: 9.50,
      loanValue: "82%",
      nearestBranch: "5 Kms",
      minTenure: 12,
      maxTenure: 30,
      minLoanLimit: 500000,
      maxLoanLimit: 1000000,
      contactPerson: {
        name: "Rohan Mehta",
        phone: "+91 977665544",
        email: "rohan.mehta@kotak.com"
      }
    }
  ];

  // Loan Amount Calculation
  const calculatedLoanAmount =
    activeTab === "goldWeight"
      ? Math.round((goldWeight * goldCaratValue * goldValuePerGram) / 100) * 100
      : loanAmount;

  // Bank Filtering and Calculation Logic
  const filteredBanks = useMemo(() => {
    return bankData
      .filter(bank => 
        calculatedLoanAmount >= bank.minLoanLimit &&
        calculatedLoanAmount <= bank.maxLoanLimit
      )
      .map(bank => {
        const annualInterestRate = bank.interestRate / 100;
        const monthlyInterestRate = annualInterestRate / 12;
        
        const emi = Math.round(
          (calculatedLoanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, tenure)) /
          (Math.pow(1 + monthlyInterestRate, tenure) - 1)
        );
        
        const totalInterest = (emi * tenure) - calculatedLoanAmount;
        
        return {
          ...bank,
          loanAmount: calculatedLoanAmount,
          emi: emi,
          totalInterest: Math.round(totalInterest),
          goldRequired: ((calculatedLoanAmount) / (goldValuePerGram * goldCaratValue)).toFixed(2)
        };
      });
  }, [bankData, calculatedLoanAmount, tenure]);

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-[#0D3685] mb-4">
          Gold Loan Calculator
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Customize your gold loan parameters and compare offers from top banks
        </p>
      </div>

      {/* Input Section */}
      <div className="bg-white shadow-lg rounded-2xl p-6 mb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Loan Amount */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Loan Amount: ₹{loanAmount.toLocaleString()}
            </label>
            <input
              type="range"
              min="100000"
              max="1100000"
              step="100000"
              value={loanAmount}
              onChange={(e) => {
                setLoanAmount(Number(e.target.value));
                setActiveTab("loanAmount");
              }}
              className="w-full accent-[#0D3685]"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>₹1L</span>
              <span>₹5L</span>
              <span>₹11L</span>
            </div>
          </div>

          {/* Gold Weight */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Gold Weight: {goldWeight}g
            </label>
            <input
              type="range"
              min="10"
              max="200"
              step="10"
              value={goldWeight}
              onChange={(e) => {
                setGoldWeight(Number(e.target.value));
                setActiveTab("goldWeight");
              }}
              className="w-full accent-[#0D3685]"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>10g</span>
              <span>100g</span>
              <span>200g</span>
            </div>
          </div>

          {/* Gold Purity */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Gold Purity: {goldPurity}KT
            </label>
            <input
              type="range"
              min="18"
              max="24"
              step="2"
              value={goldPurity}
              onChange={(e) => setGoldPurity(Number(e.target.value))}
              className="w-full accent-[#0D3685]"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>18KT</span>
              <span>22KT</span>
              <span>24KT</span>
            </div>
          </div>

          {/* Tenure */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Loan Tenure: {tenure} Months
            </label>
            <input
              type="range"
              min="6"
              max="12"
              step="3"
              value={tenure}
              onChange={(e) => setTenure(Number(e.target.value))}
              className="w-full accent-[#0D3685]"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>6M</span>
              <span>9M</span>
              <span>12M</span>
            </div>
          </div>
        </div>
      </div>

      {/* Banks Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBanks.length > 0 ? (
          filteredBanks.map((bank) => (
<div 
  key={bank.name} 
  className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all hover:scale-105 relative"
>
  {/* Branch Distance Badge */}
  <div className="absolute top-20 right-1 bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full">
    {bank.nearestBranch} away
  </div>

  {/* Bank Header */}
  <div className="bg-[#0D3685] text-white p-4 flex items-center justify-between">
    <div className="flex items-center">
      <img 
        src={bank.logo} 
        alt={`${bank.name} Logo`} 
        className="h-12 w-auto mr-4 rounded-md"
      />
      <h3 className="text-lg font-bold">{bank.name}</h3>
    </div>
    <span className="text-green-300 font-semibold">
      {bank.interestRate}% p.a.
    </span>
  </div>

  {/* Bank Details */}
  <div className="p-6">
    <div className="grid grid-cols-2 gap-4 mb-6">
      <div>
        <p className="text-xs text-gray-500">Loan Amount</p>
        <p className="text-lg font-bold text-[#0D3685]">
          ₹{bank.loanAmount.toLocaleString()}
        </p>
      </div>
      <div>
        <p className="text-xs text-gray-500">Monthly EMI</p>
        <p className="text-lg font-bold text-green-600">
          ₹{bank.emi.toLocaleString()}
        </p>
      </div>
      <div>
        <p className="text-xs text-gray-500">Total Interest</p>
        <p className="text-lg font-bold text-red-600">
          ₹{bank.totalInterest.toLocaleString()}
        </p>
      </div>
      <div>
        <p className="text-xs text-gray-500">Gold Required</p>
        <p className="text-lg font-bold text-yellow-600">
          {bank.goldRequired}g
        </p>
      </div>
    </div>
    
    {/* Toggle Button for Additional Details */}
    <button
      onClick={() => setExpandedBank(expandedBank === bank.name ? null : bank.name)}
      className="w-full py-2 mb-4 border border-gray-300 rounded-lg flex items-center justify-center text-blue-700 hover:bg-blue-50 transition-colors"
    >
      <span>{expandedBank === bank.name ? "Hide Details" : "View More Details"}</span>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className={`h-4 w-4 ml-2 transition-transform ${expandedBank === bank.name ? "rotate-180" : ""}`} 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    {/* Expandable Additional Details */}
    {expandedBank === bank.name && (
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="border-t border-gray-200 pt-4 mb-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-3">Additional Details</h4>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            <div>
              <p className="text-xs text-gray-500">Loan Value</p>
              <p className="font-medium">{bank.loanValue}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Value of Gold</p>
              <p className="font-medium">{bank.valueOfGold * 100}%</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Base Rate</p>
              <p className="font-medium">{bank.baseRate * 100}%</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Min-Max Tenure</p>
              <p className="font-medium">{bank.minTenure}-{bank.maxTenure} months</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Loan Limits</p>
              <p className="font-medium">₹{(bank.minLoanLimit/100000).toFixed(1)}L-{(bank.maxLoanLimit/100000).toFixed(1)}L</p>
            </div>
            {bank.dist && (
              <div>
                <p className="text-xs text-gray-500">Distance</p>
                <p className="font-medium">{bank.dist}</p>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    )}

    <button
      onClick={() => setSelectedBank(bank)}
      className="w-full bg-[#0D3685] text-white py-3 rounded-lg hover:bg-blue-800 transition-colors"
    >
      Get Gold Loan
    </button>
  </div>
</div>
          ))
        ) : (
          <div className="col-span-full text-center py-12 bg-white rounded-2xl shadow-lg">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-16 w-16 mx-auto text-gray-400 mb-4"
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
            <p className="text-xl font-semibold text-gray-800 mb-2">
              No Matching Banks Found
            </p>
            <p className="text-gray-600">
              Adjust your loan parameters to find suitable options.
            </p>
          </div>
        )}
      </div>

      {/* KYC Modal */}
      {selectedBank && (
        <KYCWaitingModal 
          isOpen={!!selectedBank}
          onClose={() => setSelectedBank(null)}
          bankName={selectedBank.name}
          contactPerson={selectedBank.contactPerson}
        />
      )}
    </div>
  );
};



const KYCWaitingModal = ({
    isOpen,
    onClose,
    bankName,
    contactPerson,
    kycUrl = "http://ukycv2.universalcommerce.io/",
  }) => {
    const [showIframe, setShowIframe] = useState(false);
  
    if (!isOpen) return null;
  
    // Create mobile-friendly KYC URL based on the passed kycUrl prop
    const mobileKycUrl = new URL(kycUrl);
    mobileKycUrl.searchParams.append("viewport", "width=375,height=667,initial-scale=1");
  
    const handleProceedKYC = () => {
      setShowIframe(true);
    };
  
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className={`bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl transform transition-all`}
          >
            {!showIframe ? (
              <>
                <div className="text-center mb-6">
                  <h2 className="text-3xl font-bold text-blue-800 mb-2">
                    {bankName} Gold Loan
                  </h2>
                  <p className="text-gray-600">Application and Contact Details</p>
                </div>
  
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg mb-6 shadow-sm">
                  <div className="flex items-center mb-3">
                    <div className="bg-blue-100 p-2 rounded-full mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-800">
                        {contactPerson.name}
                      </h3>
                      <p className="text-gray-600 text-sm">Relationship Manager</p>
                    </div>
                  </div>
                </div>
  
                <div className="flex flex-col space-y-3">
                  <button
                    onClick={handleProceedKYC}
                    className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                  >
                    Proceed with KYC
                  </button>
                  <button
                    onClick={onClose}
                    className="w-full py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition duration-300"
                  >
                    Close
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold text-blue-800">
                    Complete Your KYC Process
                  </h2>
                  <button
                    onClick={() => setShowIframe(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
  
                <div className="border border-gray-300 rounded-lg overflow-hidden">
                  <iframe
                    key={mobileKycUrl.toString()}
                    src={`${mobileKycUrl.toString()}&cacheBust=${new Date().getTime()}`}
                    title="KYC Process"
                    className="w-full h-96 border-0 mx-auto bg-white"
                    style={{
                      width: "375px",
                      height: "667px",
                      maxHeight: "80vh",
                      display: "block",
                      margin: "0 auto",
                    }}
                    sandbox="allow-same-origin allow-scripts allow-forms"
                    scrolling="yes"
                  ></iframe>
                </div>
  
                <div className="mt-4 flex justify-end space-x-3">
                  <button
                    onClick={() => setShowIframe(false)}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition duration-300"
                  >
                    Back
                  </button>
                  <button
                    onClick={onClose}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
                  >
                    Close
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  };
  


export default Calculator;