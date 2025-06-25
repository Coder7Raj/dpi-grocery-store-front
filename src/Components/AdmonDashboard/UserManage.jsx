import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export default function UserManage() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Function to fetch all users
  const fetchAllUsers = () => {
    setLoading(true);
    fetch(`https://dpi-grocery-store-backend.vercel.app/api/user/alluser`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setSearch("");
      })
      .catch((err) => console.log(err.message))
      .finally(() => setLoading(false));
  };

  // Load users initially
  useEffect(() => {
    fetchAllUsers();
  }, []);

  // Search handler
  const handleSearch = () => {
    if (!search.trim()) {
      toast.error("Please enter a name to search.");
      return;
    }

    fetch(
      `https://dpi-grocery-store-backend.vercel.app/api/user/search?search=${search}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          setUsers(data);
        } else {
          setUsers([]);
        }
      })
      .catch((err) => {
        console.log(err.message);
        toast.error("Failed to search users");
      });
  };

  // Delete user function for admin
  const deleteUser = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure you want to delete this user?",
        icon: "warning",
        showDenyButton: true,
        confirmButtonText: "Yes, delete",
        denyButtonText: "Cancel",
      });

      if (result.isConfirmed) {
        const response = await fetch(
          `https://dpi-grocery-store-backend.vercel.app/api/user/${id}`,
          {
            method: "DELETE",
          }
        );

        const data = await response.json();

        if (response.ok && data.user) {
          await Swal.fire(
            "Deleted!",
            "User has been deleted successfully.",
            "success"
          );

          // Update UI after deletion
          const remainingUsers = users.filter((user) => user._id !== id);
          setUsers(remainingUsers);
          navigate("/admin_profile");
        } else {
          Swal.fire("Error", data.message || "Failed to delete user", "error");
        }
      } else if (result.isDenied) {
        Swal.fire("Cancelled", "User was not deleted.", "info");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      Swal.fire("Error!", "Failed to delete user. Try again later.", "error");
    }
  };

  return (
    <div className="py-4 max-w-6xl mx-auto">
      {/* Search UI */}
      <div className="flex flex-col md:flex-row justify-center items-center mb-6">
        <div className="flex gap-2 mb-2 md:m-0">
          <input
            type="text"
            placeholder="Search by name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 w-64 focus:outline-none focus:ring focus:ring-blue-300"
          />
          <button
            onClick={handleSearch}
            className="ml-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Search
          </button>
        </div>
        <button
          onClick={fetchAllUsers}
          className="w-72 flex items-center justify-center md:w-auto ml-2 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Reset
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="table table-zebra w-full text-sm md:text-base">
          <thead className="bg-gray-100 text-gray-700 uppercase text-left">
            <tr>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="3" className="text-center py-6 text-blue-500">
                  <span className="loading loading-bars loading-lg"></span>
                </td>
              </tr>
            ) : users.length > 0 ? (
              users.map((user) => (
                <tr key={user._id}>
                  <td className="px-1">
                    <div className="flex items-center gap-1">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12 bg-gray-200 flex items-center justify-center overflow-hidden">
                          {user?.image ? (
                            <img
                              src={user.image}
                              alt={user.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <FaUser className="text-gray-500 text-2xl flex w-full items-center justify-center self-center mt-2" />
                          )}
                        </div>
                      </div>
                      <div>
                        <div className="font-semibold">
                          {user?.name?.split(" ")[0]}
                        </div>
                        <div className="text-sm text-gray-500">
                          {user.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-1">
                    <button
                      onClick={() => deleteUser(user._id)}
                      className="btn btn-sm bg-red-500 text-white hover:bg-red-600 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center py-4 text-gray-500">
                  No users to display.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
