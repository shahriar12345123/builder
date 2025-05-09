import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    // এখানে লোডিং অবস্থায় একটি মেসেজ বা স্পিনার দেখানো হচ্ছে
    return <div className="text-center mt-10">Loading...</div>;
  }

  // ইউজার যদি লগইন না থাকে, তবে তাকে লগইন পেজে পাঠাবে
  if (!user) {
    return <Navigate to="/login" />;
  }

  // ইউজার যদি লগইন থাকে, তাহলে শিশু কম্পোনেন্টটি রেন্ডার হবে
  return children;
};

export default PrivateRoute;
