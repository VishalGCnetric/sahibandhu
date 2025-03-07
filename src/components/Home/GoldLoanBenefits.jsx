import { motion } from "framer-motion";

const GoldLoanBenefits = () => {
  const benefits = [
    {
      title: "Trusted by Millions",
      description:
        "Over 5 million customers have availed gold loans with us.",
      icon: "🎉",
      borderColor: "border-indigo-500",
    },
    {
      title: "50+ Branches",
      description:
        "Convenient locations across the country for easy access.",
      icon: "📍",
      borderColor: "border-blue-500",
    },
    {
      title: "Low Interest Rates",
      description:
        "Attractive rates to help you get the best value for your gold.",
      icon: "💰",
      borderColor: "border-green-500",
    },
    {
      title: "Quick Processing",
      description:
        "Fast approvals and disbursals to meet your urgent needs.",
      icon: "⚡",
      borderColor: "border-yellow-500",
    },
  ];

  return (
    <div className="flex flex-col items-center py-16 bg-gray-50">
      {/* <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Why Choose Us for Your <span className="text-yellow-600">Gold Loan</span>?
      </h2> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-full">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`p-4 bg-white rounded-lg shadow-md border-l-4 ${benefit.borderColor}`}
          >
            <div className="flex items-start">
              <span className="text-3xl mr-3">{benefit.icon}</span>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GoldLoanBenefits;
