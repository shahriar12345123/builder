// src/components/Footer.jsx
import { FaFacebookF, FaYoutube, FaTwitter, FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">MyBank</h2>
          <p>Your trusted partner in digital banking.</p>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-blue-400 text-xl"><FaFacebookF /></a>
            <a href="#" className="hover:text-red-500 text-xl"><FaYoutube /></a>
            <a href="#" className="hover:text-blue-400 text-xl"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-400 text-xl"><FaTelegramPlane /></a>
          </div>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Services</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Personal Banking</a></li>
            <li><a href="#" className="hover:underline">Business Loans</a></li>
            <li><a href="#" className="hover:underline">Credit Cards</a></li>
            <li><a href="#" className="hover:underline">Mobile Banking</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Legal</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Use</a></li>
            <li><a href="#" className="hover:underline">Security</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © 2025 MyBank. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
