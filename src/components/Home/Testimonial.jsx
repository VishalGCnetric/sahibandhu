
// Testimonial Component
const Testimonials = () => {
  return (
    <section className="bg-yellow-50 py-16">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">What Our Customers Say</h2>
          <p className="text-gray-600">Thousands of customers have found the best gold loan through SahibBandhu</p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="text-2xl text-yellow-500 mb-5">★★★★★</div>
            <p className="text-xl italic text-gray-600 mb-6">
              "I got a gold loan at 7.5% interest rate through SahibBandhu, which was 2% less than what my local bank offered. The process was smooth and quick."
            </p>
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                <img src="/api/placeholder/60/60" alt="Customer" />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-gray-800">Rajesh Kumar</h4>
                <p className="text-gray-500">Delhi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;