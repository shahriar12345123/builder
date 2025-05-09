// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { FaCaretDown } from "react-icons/fa";

const Navbar = () => {
  const { user, logout, balance } = useContext(AuthContext);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      setShowDropdown(false);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-700">
        <Link to="/">MyBank</Link>
      </div>

      {/* Middle Menu */}
      <div className="space-x-4">
        <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
        <Link to="/bills" className="text-gray-700 hover:text-blue-600">Bills</Link>
        <Link to="/profile" className="text-gray-700 hover:text-blue-600">My Profile</Link>
      </div>

      {/* Right Side */}
      <div className="relative">
        {!user ? (
          <div className="space-x-4">
            <Link to="/login" className="text-blue-600">Login</Link>
            <Link to="/register" className="text-white bg-blue-600 px-3 py-1 rounded">Register</Link>
          </div>
        ) : (
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setShowDropdown(!showDropdown)}>
            <img
              src={user.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
              alt="profile"
              className="w-9 h-9 rounded-full border"
            />
            <FaCaretDown className="text-gray-600" />
            {showDropdown && (
              <div className="absolute right-0 mt-12 w-48 bg-white shadow-lg rounded-md py-2 z-50">
                <div className="px-4 py-2 text-gray-700 border-b">
                  Balance: <span className="font-semibold">{balance} BDT</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
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
