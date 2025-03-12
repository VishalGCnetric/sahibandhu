import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Expanded Bank Logos
const BankLogos = {
  RBL: "https://sahibandhu.com/wp-content/uploads/2024/12/rbl.png",
  DCB: "https://sahibandhu.com/wp-content/uploads/2024/12/DCB.png", 
  AXIS: "https://banner2.cleanpng.com/20180531/oje/kisspng-axis-bank-loan-bank-account-payment-5b0f85cf6994e1.0246168515277439514325.jpg",
  HDFC: "https://sahibandhu.com/wp-content/uploads/2024/12/HDFC.png",
  ICICI: "https://sahibandhu.com/wp-content/uploads/2024/12/muthoot-finance.png",
  KBL: "https://sahibandhu.com/wp-content/uploads/2024/12/KBL.png",
  KOTAK: "https://sahibandhu.com/wp-content/uploads/2024/12/Kotak.png"
};

const LoanCalculator = () => {
  const [activeTab, setActiveTab] = useState("loanAmount");
  const [goldWeight, setGoldWeight] = useState(100);
  const [goldPurity, setGoldPurity] = useState(20);
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(0.9);
  const [tenure, setTenure] = useState(6);
  const [selectedBank, setSelectedBank] = useState(null);
  const [minInterestRate, setMinInterestRate] = useState(0);
  const [maxInterestRate, setMaxInterestRate] = useState(10);
  const [minTenure, setMinTenure] = useState(1);
  const [maxTenure, setMaxTenure] = useState(36);
  const [minLoanLimit, setMinLoanLimit] = useState(100000);
  const [maxLoanLimit, setMaxLoanLimit] = useState(1100000);

  const goldValuePerGram = 4900;
  const goldCaratValue = goldPurity / 24;

  const calculatedLoanAmount =
    activeTab === "goldWeight"
      ? Math.round((goldWeight * goldCaratValue * goldValuePerGram) / 100) * 100
      : loanAmount;

  const monthlyInterest = Math.round((calculatedLoanAmount * interestRate) / 100);
  const totalInterest = monthlyInterest * tenure;
  const goldRequired = ((loanAmount) / (goldValuePerGram * goldCaratValue)).toFixed(0);

  // Expanded Bank Data with Loan Limits
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

  // Calculate Bank Details
  const calculateBankDetails = (bank) => {
    const bankLoanAmount = Math.round((calculatedLoanAmount * (bank.baseRate / 0.75)) / 100) * 100;
    const bankMonthlyInterest = Math.round((bankLoanAmount * bank.baseRate) / 100);
    const bankTotalInterest = bankMonthlyInterest * tenure;
    const bankGoldRequired = ((bankLoanAmount) / (goldValuePerGram * goldCaratValue)).toFixed(0);
    const annualInterestRate = bank.interestRate / 100;
    const monthlyInterestRate = annualInterestRate / 12;
    const emi = Math.round(
      (bankLoanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, tenure)) /
      (Math.pow(1 + monthlyInterestRate, tenure) - 1)
    );
    return {
      ...bank,
      loanAmount: bankLoanAmount,
      monthlyInterest: bankMonthlyInterest,
      totalInterest: bankTotalInterest,
      goldRequired: bankGoldRequired,
      emi: emi,
    };
  };

  // Filtered Bank Data
  const filteredBanks = useMemo(() => {
    return bankData
      .filter(bank => 
        bank.interestRate  <= interestRate*10 && 
        tenure >= bank.minTenure && 
        tenure <= bank.maxTenure &&
        calculatedLoanAmount >= bank.minLoanLimit &&
        calculatedLoanAmount <= bank.maxLoanLimit
      )
      .map(calculateBankDetails);
  }, [bankData, minInterestRate, maxInterestRate, tenure, calculatedLoanAmount, minLoanLimit, maxLoanLimit]);

  return (
    <>
     
      <div className="flex flex-col gap-2 md:flex-row items-center md:items-start  mb-8 justify-center p-2 bg-gradient-to-br from-[#1A4B84] to-[#2C6CB0] shadow-lg ">
        
        <div className="rounded-xl p-4 w-full bg-white md:w-1/2 mt-10">
        <div className="flex gap-2 rounded-lg p-1 mb-6  px-4 pb-4  border-b-2">
        <button
          onClick={() => setActiveTab("loanAmount")}
          className={`flex-1 py-2 text-lg font-medium rounded-lg ${
            activeTab === "loanAmount"
              ? "bg-white shadow text-blue-800 border-2"
              : "text-gray-600 border-1"
          }`}
        >
          Loan Amount
        </button>
        <button
          onClick={() => setActiveTab("goldWeight")}
          className={`flex-1 py-2 text-lg font-medium rounded-lg ${
            activeTab === "goldWeight"
              ? "bg-white border-2 shadow text-blue-800"
              : "text-gray-600 border-1"
          }`}
        >
          Gold Weight
        </button>
      </div>
          {activeTab === "loanAmount" && (
            <>
              <div className="mb-6">
                <label className="font-semibold">
                  Required Loan Amount: ₹{loanAmount.toLocaleString()}
                </label>
                <input
                  type="range"
                  min="100000"
                  max="1100000"
                  step="100000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full accent-blue-800"
                />
                <div className="flex justify-between text-sm text-gray-600 mb-4">
                  <span>₹1L</span>
                  <span>₹3L</span>
                  <span>₹5L</span>
                  <span>₹7L</span>
                  <span>₹9L</span>
                  <span>₹11L</span>
                </div>
              </div>
            </>
          )}

          {activeTab === "goldWeight" && (
            <>
              <div className="mb-6">
                <label className="font-semibold">Gold Weight: {goldWeight}g</label>
                <input
                  type="range"
                  min="10"
                  max="200"
                  step="10"
                  value={goldWeight}
                  onChange={(e) => setGoldWeight(Number(e.target.value))}
                  className="w-full accent-blue-800"
                />
                <div className="flex justify-between text-sm text-gray-600 mb-4">
                  <span>10g</span>
                  <span>50g</span>
                  <span>100g</span>
                  <span>150g</span>
                  <span>200g</span>
                </div>

                <label className="font-semibold">Gold Purity: {goldPurity}KT</label>
                <input
                  type="range"
                  min="18"
                  max="24"
                  step="2"
                  value={goldPurity}
                  onChange={(e) => setGoldPurity(Number(e.target.value))}
                  className="w-full accent-blue-800"
                />
                <div className="flex justify-between text-sm text-gray-600 mb-4">
                  <span>18KT</span>
                  <span>20KT</span>
                  <span>22KT</span>
                  <span>24KT</span>
                </div>
              </div>
            </>
          )}

          <label className="font-semibold">
            Interest Rate (per month): {interestRate}%
          </label>
          <input
            type="range"
            min="0.75"
            max="1.00"
            step="0.05"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full accent-blue-800"
          />
          <div className="flex justify-between text-sm text-gray-600 mb-4">
            <span>0.75%</span>
            <span>0.80%</span>
            <span>0.85%</span>
            <span>0.90%</span>
            <span>0.95%</span>
            <span>1.00%</span>
            {/* <span>1.05%</span>
            <span>1.1%</span>
            <span>1.15%</span>
            <span>1.20%</span>
            <span>1.25%</span> */}


          </div>

          <label className="font-semibold">Tenure (months): {tenure} Month</label>
          <input
            type="range"
            min="6"
            max="12"
            step="3"
            value={tenure}
            onChange={(e) => setTenure(Number(e.target.value))}
            className="w-full accent-blue-800"
          />
          <div className="flex justify-between text-sm text-gray-600 mb-6">
            <span>6</span>
            <span>9</span>
            <span>12</span>
          </div>
        </div>
   
 {/* Bank Results Section */}
 <div className="bg-gradient-to-br from-[#1A4B84] to-[#2C6CB0] py-10 rounded-xl p-6 w-full shadow-2xl">
        <div className="overflow-x-auto">
          {filteredBanks.length > 0 ? (
            <table className="w-full text-left border-separate border-spacing-0 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-[#0D3685] to-[#1A4B84] text-white">
                  <th className="p-3 first:rounded-tl-xl last:rounded-tr-xl">Bank</th>
                  <th className="p-3">Loan Amt</th>
                  <th className="p-3">Interest %</th>
                  {/* <th className="p-3">Monthly Int</th> */}
                  <th className="p-3">Total Int</th>
                  <th className="p-3">Gold Wt</th>
                  <th className="p-3">Tenure</th>
                  <th className="p-3">EMI</th>
                  <th className="p-3">Distance</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredBanks.map((bank, index) => (
                  <tr 
                    key={bank.name} 
                    className={`
                      ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} 
                      hover:bg-blue-50 transition-colors duration-200
                      border-b border-gray-200
                    `}
                  >
                    <td className="p-3 flex items-center">
                      <img 
                        src={bank.logo} 
                        alt={`${bank.name} Logo`} 
                        className="h-10 w-auto inline-block mr-3 rounded-md shadow-sm"
                      />
                      {/* <span className="font-semibold text-gray-800">{bank.name}</span> */}
                    </td>
                    <td className="p-3 text-gray-700 font-medium">
                      ₹{bank.loanAmount.toLocaleString()}
                    </td>
                    <td className="p-3 text-green-600 font-bold">{bank.interestRate}%</td>
                    {/* <td className="p-3 text-gray-700">₹{bank.monthlyInterest.toLocaleString()}</td> */}
                    <td className="p-3 text-gray-700">₹{bank.totalInterest.toLocaleString()}</td>
                    <td className="p-3 text-blue-600 font-semibold">{bank.goldRequired}g</td>
                    <td className="p-3 text-gray-700">{tenure} M</td>
                    <td className="p-3 text-indigo-600 font-bold">₹{bank.emi.toLocaleString()}</td>
                    <td className="p-3 text-gray-600">{bank.nearestBranch}</td>
                    <td className="p-3">
                      <button 
                        onClick={() => setSelectedBank(bank)}
                        className="bg-gradient-to-r from-[#0D3685] to-[#1A4B84] text-white px-2 py-2 text-xs rounded-lg 
                        hover:from-[#1A4B84] hover:to-[#0D3685] 
                        transition-all duration-300 
                        transform hover:scale-105 
                        shadow-md hover:shadow-lg"
                      >
                        Get Gold Loan
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="bg-white text-center p-10 rounded-xl shadow-lg">
              <p className="text-2xl font-bold text-gray-800 mb-4">
                No Banks Available
              </p>
              <p className="text-gray-600 text-lg">
                Please adjust your search criteria. No banks match your current 
                loan amount, interest rate, and tenure requirements.
              </p>
            </div>
          )}
        </div>
      </div>
</div>
      {/* KYC Waiting Modal */}
      <KYCWaitingModal 
        isOpen={!!selectedBank}
        onClose={() => setSelectedBank(null)}
        bankName={selectedBank?.name}
        contactPerson={selectedBank?.contactPerson}
      />
    </>
  );
};

export default LoanCalculator;
// KYC Waiting Modal (Previous implementation remains the same)



const KYCWaitingModal = ({ isOpen, onClose, bankName, contactPerson, kycUrl="https://ukycv2o1.universalcommerce.io/consent#" }) => {
  const [showIframe, setShowIframe] = useState(false);
  
  if (!isOpen) return null;

  // Add mobile viewport parameters to the KYC URL
  const mobileKycUrl = new URL(kycUrl);
  
  // Add viewport parameters to force mobile view
  mobileKycUrl.searchParams.append('viewport', 'width=375,height=667,initial-scale=1');
  
  // Some sites check for mobile user agent
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
          className={`bg-white rounded-2xl p-8 ${showIframe ? 'max-w-md' : 'max-w-md'} w-full shadow-2xl transform transition-all`}
        >
          {!showIframe ? (
            <>
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-[#0D3685] mb-2">
                  {bankName} Gold Loan
                </h2>
                <p className="text-gray-600">Application and Contact Details</p>
              </div>

              <div className="bg-blue-50 border-l-4 border-[#0D3685] p-4 rounded-lg mb-6 shadow-sm">
                <div className="flex items-center mb-3">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#0D3685]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#0D3685]">{contactPerson.name}</h3>
                    <p className="text-gray-600 text-sm">Relationship Manager</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#0D3685]" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.042 11.042 0 005.44 5.44l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.22 18 2 12.78 2 6V3z" />
                    </svg>
                    <span className="text-gray-700">{contactPerson.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#0D3685]" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span className="text-gray-700">{contactPerson.email}</span>
                  </div>
                </div>
              </div>

              <div className="text-center mb-6">
                <p className="text-gray-600 italic">
                  "Our team will contact you shortly to process your gold loan application MeanWhile proceed with kyc."
                </p>
              </div>

              <div className="flex flex-col space-y-3">
                <button
                  onClick={handleProceedKYC}
                  className="w-full py-3 bg-[#0D3685] text-white rounded-lg hover:bg-indigo-950 
                  transition duration-300 ease-in-out transform hover:scale-102 
                  flex items-center justify-center space-x-2 shadow-md"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Proceed with KYC</span>
                </button>

                <button
                  onClick={onClose}
                  className="w-full py-3 bg-gray-200 text-gray-700 rounded-lg 
                  hover:bg-gray-300 transition duration-300 ease-in-out 
                  transform hover:scale-102 shadow-sm"
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
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="border border-gray-300 rounded-lg overflow-hidden">
                {/* Mobile-sized iframe with device frame styling */}
                <div className="bg-gray-800 pt-3 px-2 rounded-t-lg">
                  <div className="w-16 h-1 bg-gray-600 rounded-full mx-auto mb-1"></div>
                </div>
                <iframe
                  src={mobileKycUrl.toString()}
                  title="KYC Process"
                  className="w-full h-96 border-0 mx-auto bg-white"
                  style={{
                    width: '375px',  // Standard mobile width
                    height: '667px', // Standard mobile height
                    maxHeight: '70vh',
                    display: 'block',
                    margin: '0 auto'
                  }}
                  sandbox="allow-same-origin allow-scripts allow-forms"
                  scrolling="yes"
                ></iframe>
              </div>

              <div className="mt-4 flex justify-end space-x-3">
                {/* <button
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
                </button> */}
              </div>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};


