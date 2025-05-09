// src/components/Navbar.jsx
import { Link } from "react-router-dom";

const Navbar = () => {
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
      <div className="space-x-4">
        <Link to="/login" className="text-blue-600">Login</Link>
        <Link to="/register" className="text-white bg-blue-600 px-3 py-1 rounded">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
