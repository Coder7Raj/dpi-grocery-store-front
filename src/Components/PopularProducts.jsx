import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { toast } from "react-toastify";
import PopularItems from "../Pages/PopularItems";

export default function PopularProducts() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("asc");

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
  return (
    <>
      <div className="mt-20 flex flex-col md:flex-row justify-center items-center gap-2 md:gap-0 my-6">
        {/* Search Input with Icon Button */}
        <div className="flex gap-1 px-2 w-auto">
          <div className="relative w-full max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search Products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-5 pr-12 py-2.5 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
            />
            <button
              onClick={handleSearch}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-green-500"
            >
              <FaSearch className="text-lg" />
            </button>
          </div>

          {/* Reset Button */}
          <button
            onClick={fetchAllProducts}
            className="md:w-auto bg-gray-200 text-gray-800 px-5 py-2.5 rounded-full shadow-sm hover:bg-gray-300 transition duration-200"
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
            className="border border-gray-300 rounded-full px-4 py-2 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
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
              <PopularItems key={item._id} item={item}></PopularItems>
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
