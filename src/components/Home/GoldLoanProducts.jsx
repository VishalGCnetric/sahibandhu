import React from 'react';

const GoldLoanProducts = () => {
  const products = [
    {
      title: 'SahiMax',
      subtitle: 'Monthly Interest',
      description: 'Pay interest of your jewel loan monthly and the principal amount at loan closure.',
      label: 'Popular Choice',
      icon: '💎',  // Replace with your own icons if needed
    },
    {
      title: 'SahiDelight',
      subtitle: 'Single Repayment',
      description: 'Pay the interest on your jewel loan and principal amount at the time of loan closure.',
      label: 'Best for Short Term',
      icon: '💰',
    },
    {
      title: 'SahiFlexi',
      subtitle: 'Overdraft on Gold',
      description: 'Overdraft facility against your gold jewellery—pay monthly interest based on usage and settle the principal amount at loan closure.',
      label: 'Flexible Option',
      icon: '🏦',
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      {/* <h2 className="text-center text-blue-900 text-3xl font-bold mb-8">Gold Loan Options</h2> */}
      <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 relative hover:shadow-xl transition-shadow duration-300"
          >
            {/* Label at the top */}
            <div className="absolute -top-3 left-3 bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
              {product.label}
            </div>

            {/* Icon */}
            <div className="flex justify-center mb-4">
              <span className="text-4xl">{product.icon}</span>
            </div>

            {/* Title and Description */}
            <h3 className="text-lg font-bold text-center text-blue-800 mb-2">{product.title}</h3>
            <p className="text-center text-sm text-blue-600 mb-4">{product.subtitle}</p>
            <p className="text-gray-600 text-center">{product.description}</p>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-8">
        <button className="text-blue-700 border border-blue-700 rounded-full px-6 py-2 hover:bg-blue-100 transition-colors duration-300">
          View all products
        </button>
      </div>
    </div>
  );
};

export default GoldLoanProducts;
