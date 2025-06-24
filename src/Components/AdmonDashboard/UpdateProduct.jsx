import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function UpdateProduct() {
  const navigate = useNavigate();
  const {
    product: { _id, title, description, price, image, category, stock },
  } = useLoaderData();

  // product update function
  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedProduct = {
      title: e.target.title.value,
      category: e.target.category.value,
      image: e.target.image.value,
      price: e.target.price.value,
      description: e.target.description.value,
      stock: e.target.stock.value,
    };

    try {
      const result = await Swal.fire({
        title: "Save changes?",
        showDenyButton: true,
        confirmButtonText: "Save",
        denyButtonText: "Don't save",
      });

      if (result.isConfirmed) {
        const response = await fetch(
          `https://dpi-grocery-store-backend-1.onrender.com/api/product/update/${_id}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedProduct),
          }
        );

        const data = await response.json();
        if (response.ok && data.product) {
          const result = await Swal.fire(
            "Saved!",
            "Your product has been updated.",
            "success"
          );

          if (result.isConfirmed) {
            navigate("/admin_profile/manage_products");
          }
        } else {
          Swal.fire("Info", "No changes were made.", "info");
        }
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    } catch (error) {
      console.error("Error updating product:", error);
      Swal.fire(
        "Error!",
        "Failed to update the product. Try again later.",
        "error"
      );
    }
  };
  return (
    <>
      <div className="max-w-xl mx-auto mt-10 p-8 bg-white rounded-2xl shadow-lg border border-gray-200">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">
          Update Product
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="title"
            placeholder="Product Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            defaultValue={title || ""}
          />
          <input
            name="category"
            placeholder="Category"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            defaultValue={category || ""}
          />
          <input
            name="price"
            placeholder="Price"
            type="number"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            defaultValue={price || ""}
          />
          <textarea
            name="description"
            placeholder="Description"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            defaultValue={description || ""}
          />
          <input
            name="image"
            placeholder="Image URL"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            defaultValue={image || ""}
          />
          <input
            name="stock"
            placeholder="Max Quantity"
            type="number"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            defaultValue={stock || ""}
          />

          <div className="flex justify-between pt-4">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition"
            >
              Back
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
            >
              Update Product
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
