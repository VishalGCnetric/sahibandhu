// Header Component
const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-full mx-auto px-5 py-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-3xl font-bold text-gray-800">
          Sahi<span className="text-yellow-500">Bandhu</span>
        </div>
        <nav className="flex gap-6 my-4 md:my-0">
          <a href="#" className="text-gray-800 font-medium hover:text-yellow-600">Home</a>
          <a href="#" className="text-gray-800 font-medium hover:text-yellow-600">Gold Loans</a>
          <a href="#" className="text-gray-800 font-medium hover:text-yellow-600">Banks</a>
          <a href="#" className="text-gray-800 font-medium hover:text-yellow-600">About Us</a>
          <a href="#" className="text-gray-800 font-medium hover:text-yellow-600">Contact</a>
        </nav>
        <div className="flex gap-4">
          <button className="px-5 py-2 rounded border border-yellow-500 bg-yellow-500 text-black font-medium hover:bg-yellow-500 hover:text-black transition duration-300">
            Login
          </button>
          <button className="px-5 py-2 rounded bg-yellow-600 text-black font-medium hover:bg-yellow-800 transition duration-300">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;