import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../components/SocialLogin";

const Register = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    const isValid = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password);
    if (!isValid) {
      return setError(
        "Password must be at least 6 characters with uppercase and lowercase letters."
      );
    }

    console.log(name, email, photo, password);
    // Firebase registration logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-2">Create an account</h2>
        <p className="text-center text-gray-600 mb-6">
          Enter your information to create an account
        </p>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>

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
            <label className="block text-sm font-medium mb-1">Photo URL <span className="text-gray-400">(optional)</span></label>
            <input
              type="text"
              name="photo"
              placeholder="https://example.com/photo.jpg"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
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
            Register
          </button>
        </form>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-500 text-sm">OR CONTINUE WITH</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <SocialLogin />

        <p className="mt-4 text-sm text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
