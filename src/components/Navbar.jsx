import { Link } from "react-router-dom";
import { useContext, useState, useEffect, useRef } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { HiMenuAlt3 } from "react-icons/hi";
import banklogo from "../assets/org/Bank.png"; 

const Navbar = () => {
  const { user, logout, balance } = useContext(AuthContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogout = async () => {
    try {
      await logout();
      setShowDropdown(false);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-700 flex gap-1 items-center">
      <img src={banklogo} alt="MyBank Logo" className="w-10 h-10 object-contain" />
      <span className="text-2xl font-bold text-blue-700">MyBank</span>
      </div>

      {/* Middle Menu */}
      <div className="space-x-4 hidden md:flex">
        <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
        <Link to="/bills" className="text-gray-700 hover:text-blue-600">Bills</Link>
        <Link to="/my-profile" className="text-gray-700 hover:text-blue-600">My Profile</Link>
      </div>

      {/* Right Side */}
      <div className="relative" ref={dropdownRef}>
        {!user ? (
          <div className="space-x-4">
            <Link to="/login" className="text-blue-600">Login</Link>
            <Link to="/register" className="text-white bg-blue-600 px-3 py-1 rounded">Register</Link>
          </div>
        ) : (
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <img
              src={user.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
              alt="profile"
              className="w-9 h-9 rounded-full border hidden md:block"
            />

            <HiMenuAlt3 className="text-gray-600 lg:hidden  " />
            {showDropdown && (
              <div className="absolute right-0 mt-12 md:w-48 w-56 bg-white shadow-lg rounded-md py-2 z-50">
                <div className="px-4 py-2 text-gray-700 border-b text-sm">
                  Balance: <span className="font-semibold">{balance} BDT</span>
                </div>


                <Link
                  to="/"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm md:hidden"
                  onClick={() => setShowDropdown(false)}
                >
                  Home



                </Link>



                <Link
                  to="/my-profile"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm md:hidden"
                  onClick={() => setShowDropdown(false)}
                >
                  My Profile



                </Link>

                <Link
                  to="/bills"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm md:hidden"
                  onClick={() => setShowDropdown(false)}
                >
                  Bills



                </Link>




                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500 text-sm"
                >
                  Log Out
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
