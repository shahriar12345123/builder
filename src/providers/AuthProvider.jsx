import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [balance, setBalance] = useState(25000); // Initial balance
  const [paidBills, setPaidBills] = useState([]); // Array of paid bill IDs

  const googleProvider = new GoogleAuthProvider();

  // Register User
  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login User
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google Login
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Logout User
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Update Profile (name and photo)
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // ✅ LocalStorage থেকে ব্যালেন্স এবং পেইড বিল লোড করো
  useEffect(() => {
    if (auth.currentUser?.email) {
      const savedData = JSON.parse(localStorage.getItem(auth.currentUser.email));
      if (savedData) {
        setBalance(savedData.balance);
        setPaidBills(savedData.paidBills || []);
      }
    }
  }, [user]);

  // ✅ ব্যালেন্স এবং পেইড বিল আপডেট ও localStorage তে সংরক্ষণ
  const updateUserData = (newBalance, newPaidBills) => {
    setBalance(newBalance);
    setPaidBills(newPaidBills);

    const userEmail = auth.currentUser?.email;
    if (userEmail) {
      localStorage.setItem(
        userEmail,
        JSON.stringify({
          balance: newBalance,
          paidBills: newPaidBills,
        })
      );
    }
  };

  // ✅ Auth state listener - onAuthStateChanged
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser); // If user is logged in, update user state
      } else {
        setUser(null); // If no user, reset user state
      }
      setLoading(false); // Set loading to false once the user state is set
    });

    // Cleanup the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  // Use this context in your components
  const authInfo = {
    user,
    loading,
    registerUser,
    loginUser,
    logout,
    googleLogin,
    updateUserProfile,
    balance,
    setBalance,
    paidBills,
    setPaidBills,
    updateUserData, // ✅ Added updateUserData to context
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
