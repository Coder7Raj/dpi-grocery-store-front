import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProductManage() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const items = [
    {
      id: 1,
      name: "Margherita Pizza",
      category: "Fast Food",
      price: 8.99,
      description:
        "Classic Italian pizza topped with fresh mozzarella, basil, and tomato sauce.",
      image: "https://i.postimg.cc/YC6kwNYr/Margherita-Pizza-HEADER.jpg",
      maxQuantity: 13,
    },
    {
      id: 2,
      name: "Cheeseburger",
      category: "Fast Food",
      price: 6.49,
      description:
        "Grilled beef patty with cheese, lettuce, tomato, and onion in a soft bun.",
      image: "https://i.postimg.cc/tCHpvmnS/Great-American-Burger.jpg",
      maxQuantity: 14,
    },
    {
      id: 3,
      name: "Chicken Nuggets",
      category: "Fast Food",
      price: 5.25,
      description:
        "Crispy breaded chicken bites served with your choice of dipping sauce.",
      image:
        "https://i.postimg.cc/65Hb48Kr/20240130210635-frozen-chicken-nuggets.jpg",
      maxQuantity: 12,
    },
    {
      id: 4,
      name: "Hot Dog",
      category: "Fast Food",
      price: 4.0,
      description:
        "Grilled sausage in a soft bun, topped with ketchup and mustard.",
      image: "https://i.postimg.cc/5t8mg0hk/Cheeseburger-Hot-Dog2.jpg",
      maxQuantity: 10,
    },
    {
      id: 5,
      name: "French Fries",
      category: "Fast Food",
      price: 2.99,
      description: "Golden and crispy potato fries, lightly salted.",
      image: "https://i.postimg.cc/0QQbQX0d/french-fries.jpg",
      maxQuantity: 15,
    },
    {
      id: 6,
      name: "Fried Chicken",
      category: "Fast Food",
      price: 7.99,
      description:
        "Crispy and juicy deep-fried chicken pieces seasoned with spices.",
      image: "https://i.postimg.cc/FHrf8KkB/Fried-Chicken.jpg",
      maxQuantity: 12,
    },
    {
      id: 7,
      name: "Veggie Wrap",
      category: "Fast Food",
      price: 5.5,
      description:
        "Whole wheat wrap filled with grilled veggies, hummus, and fresh greens.",
      image: "https://i.postimg.cc/7YDbJL9Z/wrap2-2000-1125.jpg",
      maxQuantity: 11,
    },
    {
      id: 8,
      name: "Pepperoni Pizza",
      category: "Fast Food",
      price: 9.25,
      description:
        "Thin crust pizza topped with mozzarella and spicy pepperoni slices.",
      image: "https://i.postimg.cc/52KtrSVX/Pepp-Pizza-600.jpg",
      maxQuantity: 14,
    },
    {
      id: 9,
      name: "Chicken Shawarma",
      category: "Fast Food",
      price: 6.75,
      description:
        "Spiced grilled chicken wrapped in pita bread with garlic sauce and veggies.",
      image: "https://i.postimg.cc/1XKmrpB5/Chicken-shawarma-4.jpg",
      maxQuantity: 10,
    },
    {
      id: 10,
      name: "Tacos",
      category: "Fast Food",
      price: 5.99,
      description:
        "Crunchy corn tortillas filled with beef, cheese, lettuce, and salsa.",
      image: "https://i.postimg.cc/bN3YG9dm/Beef-Tacos.jpg",
      maxQuantity: 13,
    },
    {
      id: 11,
      name: "Grilled Salmon",
      category: "Dinner",
      price: 12.99,
      description: "Tender grilled salmon fillet served with lemon and herbs.",
      image: "https://i.postimg.cc/hjWKFC3t/featured-grilled-salmon-recipe.jpg",
      maxQuantity: 11,
    },
    {
      id: 12,
      name: "Caesar Salad",
      category: "Salad",
      price: 6.25,
      description:
        "Romaine lettuce with Caesar dressing, croutons, and parmesan cheese.",
      image:
        "https://i.postimg.cc/brLPtqYZ/NCG-Dennis-Becker-Classic-Caesar-Salad-715-x-477.jpg",
      maxQuantity: 15,
    },
    {
      id: 13,
      name: "Vegetable Stir Fry",
      category: "Lunch",
      price: 7.5,
      description: "Assorted vegetables sautéed with soy sauce and garlic.",
      image:
        "https://i.postimg.cc/Pq6FYN1s/Thai-Vegetable-Stir-Fry-with-Lime-and-Ginger-done.png",
      maxQuantity: 13,
    },
  ];

  const handleUpdate = (item) => {
    navigate(`/update_product/${item.id}`, { state: item });
  };

  const handleDelete = (id) => {
    console.log("Delete clicked for ID:", id);
  };

  const handleShowDescription = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items?.map((item) => (
          <div
            key={item.id}
            className="flex flex-col bg-white gap-2 shadow-md shadow-slate-300 hover:shadow-xl rounded-md"
          >
            <div className="h-full w-full rounded-md self-center pb-4">
              <img
                className="h-60 rounded-md w-full object-cover object-center"
                src={item.image}
                alt={item.name}
              />
            </div>
            <div className="p-4 text-black flex-1">
              <p className="text-sm text-green-500">{item.name}</p>
              <p className="text-md font-semibold line-clamp-2">
                {item.description}
              </p>
            </div>
            <div className="px-4 pb-4 flex flex-col gap-2">
              <button
                onClick={() => handleShowDescription(item)}
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
              >
                Description
              </button>
              <div className="flex gap-2">
                <button
                  onClick={() => handleUpdate(item)}
                  className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 transition"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Modal */}
      {showModal && selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full shadow-lg">
            <h2 className="text-xl font-bold mb-2">{selectedItem.name}</h2>
            <p className="mb-4 text-gray-700">{selectedItem.description}</p>
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
