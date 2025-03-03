
// Step Component
const StepCard = ({ number, title, description, isLast }) => {
    return (
      <div className="flex-1 text-center px-5 relative">
        <div className="w-16 h-16 bg-yellow-500 text-white text-2xl font-bold flex items-center justify-center rounded-full mx-auto mb-5">
          {number}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
        <p className="text-gray-600">{description}</p>
        {!isLast && (
          <div className="hidden md:block absolute top-8 right-0 w-24 h-0.5 bg-yellow-500 -mr-12"></div>
        )}
      </div>
    );
  };
  
  // How It Works Section Component
  const HowItWorks = () => {
    const steps = [
      {
        number: 1,
        title: "Compare Offers",
        description: "Enter your details and compare gold loan offers from multiple banks."
      },
      {
        number: 2,
        title: "Choose & Apply",
        description: "Select the best offer and apply online with minimal documentation."
      },
      {
        number: 3,
        title: "Get Your Loan",
        description: "Visit the bank branch with your gold for verification and get your loan."
      }
    ];
  
    return (
      <section className="bg-yellow-50 py-16">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">How It Works</h2>
            <p className="text-gray-600">Three simple steps to get your gold loan</p>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-8 mt-12">
            {steps.map((step, index) => (
              <StepCard
                key={index}
                number={step.number}
                title={step.title}
                description={step.description}
                isLast={index === steps.length - 1}
              />
            ))}
          </div>
        </div>
      </section>
    );
  };
  export default HowItWorks;