import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import SocialLogin from "../components/SocialLogin";

const Login = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { loginUser } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((res) => {
        console.log("Login Success", res.user);
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        setError("Login failed. Check credentials.");
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-2">Login</h2>
        <p className="text-center text-gray-600 mb-6">
          Enter your email and password to login to your account
        </p>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="m@example.com"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-sm font-medium">Password</label>
              <Link to="#" className="text-sm text-blue-500 hover:underline">
                Forgot password?
              </Link>
            </div>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 rounded-md transition duration-200"
          >
            Login
          </button>
        </form>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-500 text-sm">OR CONTINUE WITH</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <SocialLogin />

        <p className="mt-4 text-sm text-center">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
