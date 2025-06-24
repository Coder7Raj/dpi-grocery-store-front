import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Products from "./Products";

export default function AllProducts() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("asc");

  // Function to fetch all products
  const fetchAllProducts = () => {
    setLoading(true);
    fetch(`https://dpi-grocery-store-backend-1.onrender.com/api/product/all`)
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

    fetch(
      `https://dpi-grocery-store-backend-1.onrender.com/api/product/search?q=${search}`
    )
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
        `https://dpi-grocery-store-backend-1.onrender.com/api/product/sort?order=${sortOrder}`
      );
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-0 mb-6 pt-24">
        {/* Search Input with Icon Button */}
        <div className="flex gap-1 px-2 w-auto">
          <div className="relative w-64">
            <input
              type="text"
              placeholder="Search by name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border border-gray-300 rounded px-4 py-2 w-full pr-10 focus:outline-none focus:ring focus:ring-blue-300"
            />
            <button
              onClick={handleSearch}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-500 hover:text-blue-600"
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
            <option value="desc">Price: Low to High</option>
            <option value="asc">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="mb-4">
        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:px-1 px-2">
          {loading ? (
            <div className="col-span-full flex justify-center items-center min-h-[200px]">
              <span className="loading loading-bars loading-lg text-green-500"></span>
            </div>
          ) : products?.length > 0 ? (
            products?.map((item) => (
              <Products key={item._id} item={item}></Products>
            ))
          ) : (
            <p className="text-center col-span-full text-green-600">
              No items found.
            </p>
          )}
        </div>
      </div>
    </>
  );
}
