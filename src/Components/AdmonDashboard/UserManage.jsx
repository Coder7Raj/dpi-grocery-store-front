import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { toast } from "react-toastify";

export default function UserManage() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  // Function to fetch all users
  const fetchAllUsers = () => {
    fetch(`http://localhost:5000/api/user/alluser`)
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err.message));
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

    fetch(`http://localhost:5000/api/user/search?search=${search}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          setUsers(data);
        } else {
          setUsers([]);
          toast.info("No users found");
        }
      })
      .catch((err) => {
        console.log(err.message);
        toast.error("Failed to search users");
      });
  };

  // Delete user
  const deleteUser = (id) => {
    fetch(`http://localhost:5000/api/user/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "User deleted successfully") {
          toast.success(data.message);
          const remainingUsers = users.filter((user) => user._id !== id);
          setUsers(remainingUsers);
        } else {
          toast.error(data.message || "Failed to delete user");
        }
      })
      .catch((err) => console.log(err.message));
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
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th>Name</th>
              <th>Balance</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
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
                            <FaUser className="text-gray-500 text-3xl flex w-full items-center justify-center self-center" />
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

                  <td className="font-mono text-gray-800 px-1">
                    {user.walletBalance}
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
