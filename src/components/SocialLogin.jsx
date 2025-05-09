import { FcGoogle } from "react-icons/fc";


const SocialLogin = () => {
  return (
    <button className="w-full border rounded-md flex items-center justify-center gap-2 py-2 hover:bg-gray-50">
      <FcGoogle />
      <span>Google</span>
    </button>
  );
};

export default SocialLogin;
