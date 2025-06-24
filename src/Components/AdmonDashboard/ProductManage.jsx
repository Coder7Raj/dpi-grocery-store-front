import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoFastFoodSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export default function ProductManage() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("asc");

  // fetching data from DB to show the products
  useEffect(() => {
    fetch("http://localhost:5000/api/product/all", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        // console.log("STATUS:", res.status);
        return res.json();
      })
      .then((data) => {
        // console.log("DATA RECEIVED:", data);
        setProducts(data.products);
      })
      .catch((err) => console.log("FETCH ERROR:", err.message));
  }, []);

  // delete function for products delete
  const handleDelete = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure you want to delete this product?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it",
        cancelButtonText: "Cancel",
      });

      if (result.isConfirmed) {
        const response = await fetch(
          `http://localhost:5000/api/product/delete/${id}`,
          {
            method: "DELETE",
          }
        );

        const data = await response.json();

        if (response.ok && data.message === "Product deleted successfully") {
          toast.success(data.message);
          const remainingProducts = products.filter(
            (product) => product._id !== id
          );
          setProducts(remainingProducts);
        } else {
          toast.error(data.message || "Failed to delete product");
        }
      } else {
        await Swal.fire("Cancelled", "Product was not deleted.", "info");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error("Something went wrong. Try again.");
    }
  };

  // description show in modal function
  const handleShowDescription = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  // modal close function
  const closeModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  // Function to fetch all products
  const fetchAllProducts = () => {
    setLoading(true);
    fetch(`http://localhost:5000/api/product/all`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products || []);
        setSearch("");
      })
      .catch((err) => console.log(err.message))
      .finally(() => setLoading(false));
  };

  // Load products initially
  useEffect(() => {
    fetchAllProducts();
  }, []);

  // Search handler for products
  const handleSearch = () => {
    if (!search.trim()) {
      toast.error("Please enter a name to search.");
      return;
    }

    fetch(`http://localhost:5000/api/product/search?q=${search}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          setProducts(data);
        } else {
          setProducts([]);
        }
      })
      .catch((err) => {
        console.log(err.message);
        toast.error("Failed to search users");
      });
  };

  // Filter by price for products

  const handleFilter = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/product/sort?order=${sortOrder}`
      );
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    handleFilter();
  }, [sortOrder]);

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-0 my-6">
        {/* Search Input with Icon Button */}
        <div className="flex gap-1 px-2 w-auto">
          <div className="relative w-64">
            <input
              type="text"
              placeholder="Search by name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border border-gray-300 rounded px-4 py-2 w-full pr-10 focus:outline-none focus:ring focus:ring-green-300"
            />
            <button
              onClick={handleSearch}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 pl-4 border-l-2 rounded-md border-green-700 text-green-500 hover:text-green-600"
            >
              <FaSearch />
            </button>
          </div>

          {/* Reset Button */}
          <button
            onClick={fetchAllProducts}
            className="md:w-auto bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Reset
          </button>
        </div>
        {/* Filter by Price */}
        <div className="flex gap-2 mt-2 md:mt-0 md:ml-4 items-center">
          <select
            value={sortOrder}
            onChange={(e) => {
              setSortOrder(e.target.value);
              handleFilter();
            }}
            className="border border-gray-300 outline-none rounded px-3 py-2"
          >
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
        </div>
      </div>
      <div className="overflow-x-auto bg-white rounded-xl shadow-lg border border-gray-200 mt-6">
        <table className="min-w-full text-sm md:text-base table-auto">
          <thead className="bg-gray-100 text-gray-700 uppercase text-left">
            <tr>
              <th className="px-6 py-4">Title</th>
              <th className="px-6 py-4">Stock</th>
              <th className="px-6 py-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="3" className="text-center py-6 text-green-500">
                  <span className="loading loading-bars loading-lg"></span>
                </td>
              </tr>
            ) : products.length > 0 ? (
              products.map((item) => (
                <tr
                  key={item._id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="px-1 py-4">
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12 bg-gray-200 flex items-center justify-center overflow-hidden">
                          {item.image ? (
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <IoFastFoodSharp className="text-gray-500 text-2xl flex w-full items-center justify-center self-center mt-3" />
                          )}
                        </div>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">
                          {item?.title?.split(" ")[0]}
                        </div>
                        <div className="text-xs text-gray-500">
                          {item.category} <br />
                          Price:${item.price}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className="px-2 py-4 font-mono text-gray-800">
                    {item.stock}
                  </td>

                  <td className="px-1 py-4 text-center">
                    <div className="flex flex-col md:flex-row justify-center gap-2">
                      <button
                        onClick={() => handleShowDescription(item)}
                        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
                      >
                        Details
                      </button>
                      <Link
                        to={`/admin_profile/update_product/${item._id}`}
                        className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition"
                      >
                        Update
                      </Link>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center py-6 text-gray-500">
                  No products to display.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full shadow-lg">
            <h2 className="text-xl font-bold mb-2">{selectedItem.title}</h2>

            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              className="w-full h-48 object-cover rounded mb-4"
            />

            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Category:</span>{" "}
              {selectedItem.category}
            </p>

            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Price:</span> $
              {selectedItem.price}
            </p>

            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Stock:</span> {selectedItem.stock}
            </p>

            <p className="text-gray-700 mb-4">{selectedItem.description}</p>

            <button
              onClick={closeModal}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
