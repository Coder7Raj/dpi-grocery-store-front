import { useEffect, useState } from "react";
import { IoFastFoodSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function ProductManage() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [showFormModal, setShowFormModal] = useState(false);
  const [isBroken, setIsBroken] = useState(true);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // open form function
  const openFormModal = () => {
    setShowFormModal(true);
  };

  // close form function
  const closeFormModal = () => {
    setShowFormModal(false);
  };

  //

  // products add function for to save in DB
  const handleAddProduct = (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const category = e.target.category.value;
    const price = e.target.price.value;
    const image = e.target.image.value;
    const description = e.target.description.value;
    const stock = e.target.stock.value;

    // console.log(name, category, price, image, description, maxQuantity);

    const productData = {
      title,
      description,
      price,
      image,
      category,
      stock,
    };
    // add product to database

    fetch("http://localhost:5000/api/product/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to add car");
        }
        return res.json();
      })
      .then((data) => {
        if (data.product && data.product._id) {
          toast.success("Product added");
          e.target.reset();
        }
      })
      .catch((error) => {
        console.error("Error adding car:", error);
      });

    //
    // Close modal
    closeFormModal();
  };
  //

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
  //

  // delete function for products delete
  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/api/product/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Product deleted successfully") {
          toast.success(data.message);
          const remainingProducts = products.filter(
            (product) => product._id !== id
          );
          setProducts(remainingProducts);
        } else {
          toast.error(data.message || "Failed to delete product");
        }
      })
      .catch((err) => console.log(err.message));
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

  //
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

  return (
    <>
      <section className="flex gap-2 mx-4 my-6">
        <h1>Add Product:</h1>
        <button
          onClick={openFormModal}
          className="btn btn-primary btn-outline mb-16"
        >
          Add Product
        </button>
      </section>
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
          onClick={fetchAllProducts}
          className="w-72 flex items-center justify-center md:w-auto ml-2 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Reset
        </button>
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
                <td colSpan="3" className="text-center py-6 text-blue-500">
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
                          {!isBroken && item.image ? (
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover"
                              onError={() => setIsBroken(false)}
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
                          {item.category}
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
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
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

      {/*  */}
      {/* form modal */}
      {showFormModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Add New Product</h2>
            <form onSubmit={handleAddProduct}>
              <input
                type="text"
                name="title"
                placeholder="Name"
                className="w-full mb-2 p-2 border rounded"
              />
              <input
                type="text"
                name="category"
                placeholder="Category"
                className="w-full mb-2 p-2 border rounded"
              />
              <input
                type="number"
                name="price"
                placeholder="Price"
                className="w-full mb-2 p-2 border rounded"
              />
              <input
                type="url"
                name="image"
                placeholder="Image URL"
                className="w-full mb-2 p-2 border rounded"
              />
              <textarea
                name="description"
                placeholder="Description"
                className="w-full mb-2 p-2 border rounded"
              ></textarea>
              <input
                type="number"
                name="stock"
                placeholder="Max stock"
                className="w-full mb-4 p-2 border rounded"
              />
              {/*  */}
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  Add
                </button>
                <button
                  onClick={closeFormModal}
                  className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
