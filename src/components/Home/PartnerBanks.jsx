

// Partner Banks Section Component
const PartnerBanks = () => {
    const banks = ["SBI", "HDFC", "ICICI", "Axis", "Muthoot", "Manappuram"];
  
    return (
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Our Partner Banks</h2>
            <p className="text-gray-600">We collaborate with top banks in India to bring you the best gold loan offers</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {banks.map((bank, index) => (
              <div key={index} className="w-36 h-20 bg-gray-100 flex items-center justify-center rounded-lg">
                {bank}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  export default PartnerBanks