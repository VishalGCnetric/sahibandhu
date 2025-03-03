const Features = () => {
    const featuresList = [
      {
        icon: "💰",
        title: "Best Rates Guaranteed",
        description: "Compare offers from 20+ banks and choose the one with the lowest interest rate."
      },
      {
        icon: "⚡",
        title: "Quick Disbursal",
        description: "Get your loan approved within 1 hour and disbursed within 24 hours."
      },
      {
        icon: "🔒",
        title: "Safe & Secure",
        description: "Your gold is stored in secure bank vaults with full insurance coverage."
      }
    ];
  
    return (
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Why Choose SahibBandhu</h2>
            <p className="text-gray-600">We make gold loan comparison simple, fast, and hassle-free</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuresList.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>
    );
  };

  export default Features;
// Feature Card Component
const FeatureCard = ({ icon, title, description }) => {
    return (
      <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition-transform duration-300 hover:-translate-y-2 text-center">
        <div className="text-5xl text-yellow-500 mb-5">{icon}</div>
        <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  };