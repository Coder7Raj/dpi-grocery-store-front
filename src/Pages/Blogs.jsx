import { useState } from "react";
import { FaHeart, FaShareAlt } from "react-icons/fa";

export default function Blogs() {
  const blogs = [
    {
      id: 1,
      title: "Top 10 Superfoods You Should Add to Your Diet",
      summary:
        "Discover the benefits of including these powerful foods in your daily meals.",
      full: "Superfoods like kale, berries, and chia seeds are loaded with nutrients. They boost immunity, support brain health, and more. Incorporate them in smoothies, salads, and snacks for a healthier lifestyle.",
      image:
        "https://domf5oio6qrcr.cloudfront.net/medialibrary/9545/conversions/healthy-superfoods-thumb.jpg",
      date: "April 15, 2025",
    },
    {
      id: 2,
      title: "The Health Benefits of Leafy Greens",
      summary:
        "Learn why vegetables like spinach, kale, and Swiss chard are must-haves in your diet.",
      full: "Leafy greens are rich in vitamins A, C, and K, as well as fiber and antioxidants. Regular consumption helps reduce the risk of heart disease and supports bone health.",
      image:
        "https://domf5oio6qrcr.cloudfront.net/medialibrary/5260/h0918g16207257581285.jpg",
      date: "March 12, 2025",
    },
    {
      id: 3,
      title: "Creative Ways to Cook with Broccoli",
      summary:
        "Transform this humble vegetable into tasty meals your whole family will love.",
      full: "Broccoli is a powerhouse of nutrients. Roast it, stir-fry with garlic, blend into soups, or add it to pasta for delicious and healthy options.",
      image:
        "https://www.soulfullymade.com/wp-content/uploads/2024/05/roasted-broccoli-recipe-sq-1-500x500.jpg",
      date: "May 1, 2025",
    },
    {
      id: 4,
      title: "Why You Should Eat More Root Vegetables",
      summary:
        "Carrots, beets, and sweet potatoes offer surprising health benefits.",
      full: "Root vegetables are packed with vitamins and minerals. They're excellent sources of fiber and help support digestion, boost energy, and improve skin health.",
      image:
        "https://restaurantclicks.com/wp-content/uploads/2022/10/Types-Of-Root-Vegetables.jpg",
      date: "February 22, 2025",
    },
    {
      id: 5,
      title: "Juicing for Better Health: Best Fruits & Veggies to Use",
      summary:
        "Fuel your body with fresh, nutrient-dense juices from your kitchen.",
      full: "Juicing carrots, cucumbers, beets, and leafy greens can improve digestion, detoxify your body, and provide a quick vitamin boost. Perfect for busy lifestyles.",
      image:
        "https://www.dietitianshreya.com/wp-content/uploads/2020/01/Fruite-Veg..jpg",
      date: "January 18, 2025",
    },
    {
      id: 6,
      title: "Eating Seasonal Vegetables: A Smart & Tasty Choice",
      summary:
        "Discover the advantages of eating what's in season throughout the year.",
      full: "Seasonal vegetables are fresher, more nutritious, and environmentally friendly. Learn which veggies to choose each season and how to prepare them.",
      image:
        "https://promisecare.com/wp-content/uploads/sites/44/2024/03/PromiseCare-benefits-of-eating-seasonal-produce.jpg",

      date: "March 28, 2025",
    },
    {
      id: 7,
      title: "The Truth About Organic vs. Non-Organic Produce",
      summary:
        "Are organic fruits and vegetables really better for your health?",
      full: "Organic produce contains fewer pesticides and is often fresher. While it's more expensive, it may offer benefits in terms of environmental sustainability and taste.",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/versus6-1-1559152957.jpg",
      date: "May 10, 2025",
    },
  ];

  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <div className="min-h-screen py-20 px-6">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-12">
        Groofi Blog
      </h1>
      {/*  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 mx-auto">
        {blogs?.map((blog) => (
          <div
            key={blog.id}
            className="max-w-sm rounded-lg bg-white shadow-md hover:shadow-xl transition duration-300 overflow-hidden border"
          >
            {/* Header */}
            <div className="flex items-center p-4">
              <div className="w-12 h-10 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-lg">
                R
              </div>
              <div className="ml-4">
                <h2 className="text-sm font-semibold">{blog.title}</h2>
                <p className="text-xs text-gray-500">{blog.date}</p>
              </div>
            </div>

            {/* Image */}
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />

            {/* Description */}
            <div className="p-4 text-sm text-gray-700">
              <p>{blog.summary}</p>
            </div>

            {/* Footer Actions */}
            <div className="flex items-center justify-between px-4 py-2 text-gray-600 space-x-4">
              <div className="flex items-center space-x-4">
                <FaHeart className="cursor-pointer hover:text-red-500" />
                <FaShareAlt className="cursor-pointer hover:text-blue-500" />
              </div>
              <div>
                <button
                  onClick={() => setSelectedBlog(blog)}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                >
                  Show More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/*  */}

      {/* Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white max-w-2xl w-full rounded-2xl p-6 relative shadow-2xl">
            <button
              onClick={() => setSelectedBlog(null)}
              className="absolute top-3 right-4 text-2xl text-gray-500 hover:text-red-500"
            >
              &times;
            </button>
            <img
              src={selectedBlog.image}
              alt={selectedBlog.title}
              className="w-full h-64 object-cover rounded-xl mb-4"
            />
            <h2 className="text-2xl font-bold text-green-700 mb-2">
              {selectedBlog.title}
            </h2>
            <p className="text-sm text-gray-500 mb-4">{selectedBlog.date}</p>
            <p className="text-gray-800 leading-relaxed">{selectedBlog.full}</p>
          </div>
        </div>
      )}
    </div>
  );
}
