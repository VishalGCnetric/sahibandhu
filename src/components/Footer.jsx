// Footer Component
const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white pt-16 pb-6">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            <div>
              <h3 className="text-xl font-bold text-yellow-500 mb-5">SahibBandhu</h3>
              <p className="mb-6">
                India's leading gold loan comparison portal. We help you find the best gold loan offers from top banks and financial institutions.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-yellow-500 transition duration-300">
                  F
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-yellow-500 transition duration-300">
                  T
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-yellow-500 transition duration-300">
                  I
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-yellow-500 transition duration-300">
                  L
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-yellow-500 mb-5">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Gold Loans</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Partner Banks</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-yellow-500 mb-5">Policies</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Terms & Conditions</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Refund Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Sitemap</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-yellow-500 mb-5">Contact Us</h3>
              <ul className="space-y-3">
                <li className="text-gray-300">Email: info@sahibbandhu.com</li>
                <li className="text-gray-300">Phone: +91 1234567890</li>
                <li className="text-gray-300">Address: New Delhi, India</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 mt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
            &copy; 2025 SahibBandhu. All rights reserved.
          </div>
        </div>
      </footer>
    );
  };
  export default Footer;