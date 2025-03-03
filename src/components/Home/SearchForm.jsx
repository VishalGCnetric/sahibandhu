import { useState } from "react";

// Search Form Component
const  SearchForm = ()=>  {
    const [formData, setFormData] = useState({
      goldWeight: '',
      goldPurity: '',
      loanAmount: '',
      loanTerm: ''
    });
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
      // Handle form submission logic here
    };
  
    return (
      <section className="max-w-4xl mx-auto -mt-10 relative z-10 px-5">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Compare Gold Loan Offers</h2>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-5 mb-5">
              <div className="flex-1">
                <label htmlFor="goldWeight" className="block text-gray-800 font-medium mb-2">
                  Gold Weight (grams)
                </label>
                <input
                  type="number"
                  id="goldWeight"
                  placeholder="Enter gold weight"
                  className="w-full p-3 border border-gray-300 rounded text-base"
                  value={formData.goldWeight}
                  onChange={handleChange}
                />
              </div>
              <div className="flex-1">
                <label htmlFor="goldPurity" className="block text-gray-800 font-medium mb-2">
                  Gold Purity
                </label>
                <select
                  id="goldPurity"
                  className="w-full p-3 border border-gray-300 rounded text-base"
                  value={formData.goldPurity}
                  onChange={handleChange}
                >
                  <option value="">Select purity</option>
                  <option value="24K">24K (99.9% Pure Gold)</option>
                  <option value="22K">22K (91.6% Pure Gold)</option>
                  <option value="18K">18K (75% Pure Gold)</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-5 mb-6">
              <div className="flex-1">
                <label htmlFor="loanAmount" className="block text-gray-800 font-medium mb-2">
                  Loan Amount (₹)
                </label>
                <input
                  type="number"
                  id="loanAmount"
                  placeholder="Enter loan amount"
                  className="w-full p-3 border border-gray-300 rounded text-base"
                  value={formData.loanAmount}
                  onChange={handleChange}
                />
              </div>
              <div className="flex-1">
                <label htmlFor="loanTerm" className="block text-gray-800 font-medium mb-2">
                  Loan Term
                </label>
                <select
                  id="loanTerm"
                  className="w-full p-3 border border-gray-300 rounded text-base"
                  value={formData.loanTerm}
                  onChange={handleChange}
                >
                  <option value="">Select term</option>
                  <option value="3">3 months</option>
                  <option value="6">6 months</option>
                  <option value="12">12 months</option>
                  <option value="24">24 months</option>
                  <option value="36">36 months</option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-yellow-500 text-white text-lg font-semibold rounded hover:bg-yellow-600 transition duration-300"
            >
              Find Best Offers
            </button>
          </form>
        </div>
      </section>
    );
  };
  export default  SearchForm