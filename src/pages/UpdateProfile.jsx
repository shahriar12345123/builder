import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");
  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await updateProfile(user, {
        displayName: name,
        photoURL: photo,
      });

      alert("Profile Updated Successfully!");
      navigate("/my-profile");
    } catch (error) {
      console.error("Update Error:", error.message);
      alert("Failed to update profile.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">Update Profile</h2>

      <form onSubmit={handleUpdate} className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold">Name</label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Photo URL</label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
