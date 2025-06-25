import { toast } from "react-toastify";

export default function AddProducts() {
  const handleAddProduct = (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const category = e.target.category.value;
    const price = parseFloat(e.target.price.value);
    const image = e.target.image.value;
    const description = e.target.description.value;
    const stock = parseInt(e.target.stock.value);

    const productData = {
      title,
      description,
      price,
      image,
      category,
      stock,
    };

    fetch("https://dpi-grocery-store-backend.vercel.app/api/product/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to add product");
        }
        return res.json();
      })
      .then((data) => {
        if (data.product && data.product._id) {
          toast.success("✅ Product added successfully!");
          e.target.reset();
        }
      })
      .catch((error) => {
        console.error("Error adding product:", error);
        toast.error("❌ Failed to add product!");
      });
  };

  return (
    <div className="flex items-center justify-center my-6 md:my-10 px-0 md:px-4">
      <div className="bg-white shadow-md rounded-2xl p-8 w-full max-w-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Add New Product
        </h2>
        <form onSubmit={handleAddProduct} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Product Title"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            step="0.01"
            required
          />
          <input
            type="url"
            name="image"
            placeholder="Image URL"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            rows="3"
            required
          ></textarea>
          <input
            type="number"
            name="stock"
            placeholder="Stock Quantity"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <div className="flex justify-end space-x-4 pt-4">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg transition duration-200"
            >
              Add Product
            </button>
            <button
              type="button"
              className="bg-gray-400 hover:bg-gray-500 text-white px-5 py-2 rounded-lg transition duration-200"
              onClick={(e) => {
                toast.info("Cancelled");
                e.target.closest("form").reset();
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
