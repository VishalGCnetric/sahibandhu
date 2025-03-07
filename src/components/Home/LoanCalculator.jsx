import React, { useState } from "react";

const LoanCalculator = () => {
  const [activeTab, setActiveTab] = useState("loanAmount");
  const [goldWeight, setGoldWeight] = useState(100);
  const [goldPurity, setGoldPurity] = useState(20);
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(0.75);
  const [tenure, setTenure] = useState(6);

  const goldValuePerGram = 4900;
  const goldCaratValue = goldPurity / 24; // Carat value calculation

  const calculatedLoanAmount =
    activeTab === "goldWeight"
      ? Math.round((goldWeight * goldCaratValue * goldValuePerGram) / 100) * 100
      : loanAmount;

  const monthlyInterest = Math.round((calculatedLoanAmount * interestRate) / 100);
  const totalInterest = monthlyInterest * tenure;

  // Updated Gold Required Calculation
  const goldRequired = ((loanAmount) / (goldValuePerGram * goldCaratValue)).toFixed(0);

  return (<>
  <div className="flex gap-2 rounded-lg p-1 mb-6 w-1/2 px-32">
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
    <div className="flex flex-col gap-10 md:flex-row items-center md:items-start justify-center p-6 bg-gray-100  gap-6 shadow-lg">
      {/* Left Side: Inputs */}
      
      <div className=" rounded-xl  p-2 w-full md:w-1/2">
        {/* <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Smart Gold Loan Calculator
        </h2> */}
        

        {/* Show Loan Amount Inputs Only When Active */}
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

        {/* Show Gold Weight Inputs Only When Active */}
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

        {/* Interest Rate and Tenure Inputs - Always Visible */}
        <label className="font-semibold">
          Interest Rate (per month): {interestRate}%
        </label>
        <input
          type="range"
          min="0.75"
          max="1.25"
          step="0.05"
          value={interestRate}
          onChange={(e) => setInterestRate(Number(e.target.value))}
          className="w-full accent-blue-800"
        />
        <div className="flex justify-between text-sm text-gray-600 mb-4">
          <span>0.75%</span>
          <span>0.80%</span>
          <span>0.90%</span>
          <span>1.08%</span>
          <span>1.25%</span>
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

      {/* Right Side: Results */}
      {/* Right Side: Results */}
{/* <div className="bg-blue-800 text-white rounded-xl p-6 w-full md:w-1/3 shadow-lg text-center">
  {activeTab === "loanAmount" ? (
    <>
      <p className="text-lg font-semibold mt-3">Gold Weight Required</p>
      <p className="text-2xl font-bold">
        {((loanAmount * 100) / (goldCaratValue * goldValuePerGram)).toFixed(2)}g
      </p>
    </>
  ) : (
    <>
      <p className="text-lg font-semibold mt-3">Loan Amount</p>
      <p className="text-2xl font-bold">₹{calculatedLoanAmount.toLocaleString()}</p>
    </>
  )}

  <p className="text-lg font-semibold mt-3">Your Monthly Interest Amount</p>
  <p className="text-xl font-bold">₹{monthlyInterest.toLocaleString()}</p>

  <p className="text-lg font-semibold mt-3">Total Interest Amount</p>
  <p className="text-xl font-bold">₹{totalInterest.toLocaleString()}</p>

  <button className="bg-white text-blue-800 font-semibold rounded-lg px-6 py-2 mt-6 border border-blue-800 hover:bg-blue-700 hover:text-white transition">
    Apply Now
  </button>
</div> */}
 <div className="bg-[#0D3685] text-white py-10 rounded-xl p-6 w-full md:w-1/3 shadow-lg text-center">
        {activeTab === "loanAmount" ? (
          <div className="border-b-1 pb-4">
            <p className="text-lg font-semibold mt-3">Gold Weight Required</p>
            <p className="text-2xl font-bold">{goldRequired}gram</p>
          </div>
        ) : (
          <div className="border-b-1 pb-4" >
            <p className="text-lg font-semibold mt-3">Loan Amount</p>
            <p className="text-2xl font-bold">₹{calculatedLoanAmount.toLocaleString()}</p>
          </div>
        )}
<div className="border-b-1 pb-4" >
        <p className="text-lg font-semibold mt-3">Your Monthly Interest Amount</p>
        <p className="text-xl font-bold">₹{monthlyInterest.toLocaleString()}</p>
        </div> < div className="border-b-1 pb-4" >
        <p className="text-lg font-semibold mt-3">Total Interest Amount</p>
        <p className="text-xl font-bold">₹{totalInterest.toLocaleString()}</p>
        </div>
        <button className="text-white text-blue-800 font-semibold rounded-lg px-6 py-2 mt-6 border border-white hover:bg-white hover:text-black w-1/2 transition">
          Apply Now
        </button>
      </div>
    </div></>
  );
};

export default LoanCalculator;
