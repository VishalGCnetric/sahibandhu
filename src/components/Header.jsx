// import React, { useState } from "react";
// import { ChevronDown, Search, User } from "lucide-react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [blogDropdown, setBlogDropdown] = useState(false);
//   const [companyDropdown, setCompanyDropdown] = useState(false);
//   const [userDropdown, setUserDropdown] = useState(false);

//   // Handle outside clicks for dropdowns
//   const handleClickOutside = () => {
//     setBlogDropdown(false);
//     setCompanyDropdown(false);
//     setUserDropdown(false);
//   };

//   return (
//     <nav
//       className="flex items-center justify-between px-8 py-4 bg-white shadow relative"
//       onClick={handleClickOutside}
//     >
//       {/* Logo */}
//       <div className="flex items-center cursor-pointer">
//         <img src="https://sahibandhu.com/wp-content/themes/sahibandhu/images/logo.png" alt="Logo" className="h-auto  w-30 mr-2" />
//         {/* <span className="text-yellow-500 font-bold">Sahi</span>
//         <span className="text-blue-600 font-bold">Bandhu</span> */}
//       </div>

//       {/* Menu Items */}
//       <ul className="flex space-x-8">
//         <li>
//           <Link to="/" className="text-gray-800 hover:text-blue-600">
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link to="/transfer-gold-loan" className="text-gray-800 hover:text-blue-600">
//             Transfer Gold Loan
//           </Link>
//         </li>
//         <li>
//           <Link to="/calculator" className="text-blue-600 border-b-2 border-blue-600">
//             Calculator
//           </Link>
//         </li>
//         <li>
//           <Link to="/faqs" className="text-gray-800 hover:text-blue-600">
//             FAQs
//           </Link>
//         </li>
//         <li>
//           <Link to="/join-us" className="text-gray-800 hover:text-blue-600">
//             Join Us
//           </Link>
//         </li>

//         {/* Dropdown for Blog */}
//         <li className="relative">
//           <button
//             onClick={(e) => {
//               e.stopPropagation();
//               setBlogDropdown(!blogDropdown);
//               setCompanyDropdown(false);
//               setUserDropdown(false);
//             }}
//             className="flex items-center text-gray-800 hover:text-blue-600"
//           >
//             Blog <ChevronDown className="ml-1" size={16} />
//           </button>
//           {blogDropdown && (
//             <ul className="absolute left-0 mt-2 bg-white border rounded shadow-lg">
//               <li>
//                 <Link
//                   to="/blog/news"
//                   className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
//                 >
//                   News
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/blog/updates"
//                   className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
//                 >
//                   Updates
//                 </Link>
//               </li>
//             </ul>
//           )}
//         </li>

//         {/* Dropdown for Company */}
//         <li className="relative">
//           <button
//             onClick={(e) => {
//               e.stopPropagation();
//               setCompanyDropdown(!companyDropdown);
//               setBlogDropdown(false);
//               setUserDropdown(false);
//             }}
//             className="flex items-center text-gray-800 hover:text-blue-600"
//           >
//             Company <ChevronDown className="ml-1" size={16} />
//           </button>
//           {companyDropdown && (
//             <ul className="absolute left-0 mt-2 bg-white border rounded shadow-lg">
//               <li>
//                 <Link
//                   to="/company/about"
//                   className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
//                 >
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/company/contact"
//                   className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
//                 >
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           )}
//         </li>
//       </ul>

//       {/* Search and User Icon */}
//       <div className="flex items-center space-x-6 relative">
//         <Search
//           className="text-gray-800 cursor-pointer hover:text-blue-600"
//           size={20}
//         />

//         {/* User Icon with Dropdown */}
//         <div className="relative">
//           <User
//             className="text-gray-800 cursor-pointer hover:text-blue-600"
//             size={24}
//             onClick={(e) => {
//               e.stopPropagation();
//               setUserDropdown(!userDropdown);
//               setBlogDropdown(false);
//               setCompanyDropdown(false);
//             }}
//           />
//           {userDropdown && (
//             <ul className="absolute right-0 mt-2 bg-white border rounded shadow-lg w-40">
//               <li>
//                 <Link
//                   to="/profile"
//                   className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
//                 >
//                   Profile
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/login"
//                   className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
//                 >
//                   Login
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/logout"
//                   className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
//                 >
//                   Logout
//                 </Link>
//               </li>
//             </ul>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { FaUser, FaSearch, FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

// Login Modal Component
const LoginModal = ({ onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
      <h2 className="text-xl font-semibold mb-4">Login</h2>
      <input
        type="text"
        placeholder="Username"
        className="border w-full p-2 mb-3 rounded"
      />
      <input
        type="password"
        placeholder="Password"
        className="border w-full p-2 mb-3 rounded"
      />
      <button className="bg-blue-600 text-white py-2 px-4 rounded w-full mb-2">
        Login
      </button>
      <button
        className="text-red-500 w-full"
        onClick={onClose}
      >
        Cancel
      </button>
    </div>
  </div>
);

// Navbar Component
const Navbar = () => {
  const [auth, setAuth] = useState(false); // Authentication state
  const [showModal, setShowModal] = useState(false); // Modal state
  const [showDropdown, setShowDropdown] = useState(false); // Dropdown state

  const toggleAuth = () => setAuth(!auth);
  const handleLoginClick = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const toggleDropdown = () => setShowDropdown(!showDropdown);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-full px-4 mx-auto flex items-center justify-between py-2 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
        <img src="https://sahibandhu.com/wp-content/themes/sahibandhu/images/logo.png" alt="Logo" className="h-auto  w-30 mr-2" />
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-8 text-[#0D3685] font-semibold">
          {["Home", "Transfer Gold Loan", "Calculator", "FAQs", "Join Us"].map((link, index) => (
            <a
              key={index}
              href="#"
              className="hover:text-blue-600 transition relative group"
            >
              {link}
              {link === "Home" && (
                <div className="h-[2px] w-full bg-blue-600 absolute bottom-0 left-0"></div>
              )}
            </a>
          ))}
          <div className="relative group">
            <a
              href="#"
              className="hover:text-blue-600 transition flex items-center"
              onClick={(e) => e.preventDefault()}
            >
              Blog <FaChevronDown className="ml-1 text-sm" />
            </a>
            <div className="hidden group-hover:block absolute bg-white shadow-lg rounded-lg py-2 mt-2">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Blog 1</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Blog 2</a>
            </div>
          </div>
          <div className="relative group">
            <a
              href="#"
              className="hover:text-blue-600 transition flex items-center"
              onClick={(e) => e.preventDefault()}
            >
              Company <FaChevronDown className="ml-1 text-sm" />
            </a>
            <div className="hidden group-hover:block absolute bg-white shadow-lg rounded-lg py-2 mt-2">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">About Us</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Contact</a>
            </div>
          </div>
        </nav>

        {/* Icons on Right Side */}
        <div className="flex items-center space-x-6">
          {/* Search Icon */}
          <FaSearch className="text-gray-700 text-xl cursor-pointer hover:text-blue-600 transition" />

          {/* Person Icon with Dropdown or Modal */}
          <div className="relative">
            <button onClick={auth ? toggleDropdown : handleLoginClick}>
              <FaUser className="text-gray-700 text-xl cursor-pointer hover:text-blue-600 transition" />
            </button>

            {/* Dropdown for Authenticated Users */}
            {auth && showDropdown && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50"
              >
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Orders</li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={toggleAuth}
                  >
                    Logout
                  </li>
                </ul>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Login Modal */}
      <AnimatePresence>
        {showModal && <LoginModal onClose={handleCloseModal} />}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
