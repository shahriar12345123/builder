import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 border rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">My Profile</h2>

      <div className="flex flex-col items-center gap-4">
        <img
          src={user?.photoURL}
          alt="User"
          className="w-24 h-24 rounded-full border"
        />
        <h3 className="text-xl font-semibold">{user?.displayName || "No Name"}</h3>
        <p className="text-gray-600">{user?.email}</p>

        <button
          onClick={() => navigate("/update-profile")}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
