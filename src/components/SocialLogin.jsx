import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleLogin()
      .then((result) => {
        // console.log("Google user:", result.user);
        navigate("/"); // Redirect to home or dashboard
      })
      .catch((error) => {
        console.error("Google Login Error:", error);
      });
  };

  return (
    <button
      onClick={handleGoogleSignIn}
      className="w-full border rounded-md flex items-center justify-center gap-2 py-2 hover:bg-gray-50"
    >
      <FcGoogle />
      <span>Google</span>
    </button>
  );
};

export default SocialLogin;
