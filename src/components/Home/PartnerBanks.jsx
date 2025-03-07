import React from "react";

// Partner Banks Section Component
const PartnerBanks = () => {
  const banks = [
    { name: "SBI", logo: "https://sahibandhu.com/wp-content/uploads/2024/12/HDFC.png" },
    { name: "HDFC", logo: "https://sahibandhu.com/wp-content/uploads/2024/12/rbl.png" },
    { name: "ICICI", logo: "https://sahibandhu.com/wp-content/uploads/2024/12/DCB.png" },
    { name: "Axis", logo: "https://sahibandhu.com/wp-content/uploads/2024/12/Kotak.png" },
    { name: "Muthoot", logo: "https://sahibandhu.com/wp-content/uploads/2024/12/muthoot-finance.png" },
    { name: "Manappuram", logo: "https://sahibandhu.com/wp-content/uploads/2024/12/KBL.png" },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-full mx-auto px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {banks.map((bank, index) => (
            <div
              key={index}
              className="w-[80%] h-auto bg-gray-100 flex items-center justify-center rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              <img
                src={bank.logo}
                alt={`${bank.name} logo`}
                className="h-auto w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerBanks;
