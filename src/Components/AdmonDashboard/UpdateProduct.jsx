import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";

export default function UpdateProduct() {
  const { state } = useLocation(); // 👈 Get passed item
  const { id } = useParams();

  const [formData, setFormData] = useState({
    name: state?.name || "",
    category: state?.category || "",
    price: state?.price || "",
    description: state?.description || "",
    image: state?.image || "",
    maxQuantity: state?.maxQuantity || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated data:", formData); // replace this with real update logic
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Update Product (ID: {id})</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Product Name"
          className="w-full p-2 border rounded"
        />
        <input
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Category"
          className="w-full p-2 border rounded"
        />
        <input
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
          type="number"
          className="w-full p-2 border rounded"
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full p-2 border rounded"
        />
        <input
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full p-2 border rounded"
        />
        <input
          name="maxQuantity"
          value={formData.maxQuantity}
          onChange={handleChange}
          placeholder="Max Quantity"
          type="number"
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Update Product
        </button>
      </form>
    </div>
  );
}
