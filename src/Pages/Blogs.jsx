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
        "https://static.vecteezy.com/system/resources/thumbnails/049/584/608/small_2x/happy-young-business-team-in-formalwear-looking-at-camera-while-standing-on-beige-background-photo.jpg",
      date: "April 15, 2025",
    },
    {
      id: 2,
      title: "How to Keep Your Vegetables Fresher for Longer",
      summary:
        "Simple storage hacks that help reduce waste and keep your veggies crisp.",
      full: "Store leafy greens with paper towels, keep tomatoes at room temperature, and don’t mix fruits with veggies to reduce spoilage gases. These habits make a big difference in preserving freshness.",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/049/584/608/small_2x/happy-young-business-team-in-formalwear-looking-at-camera-while-standing-on-beige-background-photo.jpg",
      date: "April 10, 2025",
    },
    {
      id: 3,
      title: "Why Local Produce Is Better for You and the Planet",
      summary:
        "Learn how buying local supports your health and your community.",
      full: "Local produce travels less, retains more nutrients, and supports community farmers. It reduces your carbon footprint and ensures seasonal freshness. Choosing local is a win for you and the planet.",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/049/584/608/small_2x/happy-young-business-team-in-formalwear-looking-at-camera-while-standing-on-beige-background-photo.jpg",
      date: "April 5, 2025",
    },
    {
      id: 4,
      title: "5 Quick and Healthy Breakfast Ideas",
      summary: "Busy mornings? Try these easy, nutritious breakfast options.",
      full: "Avocado toast, overnight oats, smoothies, Greek yogurt with fruit, and boiled eggs with toast are fast, healthy, and delicious. Start your day energized and ready to go!",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/049/584/608/small_2x/happy-young-business-team-in-formalwear-looking-at-camera-while-standing-on-beige-background-photo.jpg",
      date: "March 29, 2025",
    },
    {
      id: 5,
      title: "The Science Behind Grocery Expiration Dates",
      summary:
        "Understand 'Best Before' and 'Use By' labels to reduce food waste.",
      full: "‘Best Before’ labels mean quality may decline after the date, while ‘Use By’ indicates food safety. Knowing the difference helps you reduce waste and shop smarter.",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/049/584/608/small_2x/happy-young-business-team-in-formalwear-looking-at-camera-while-standing-on-beige-background-photo.jpg",
      date: "March 20, 2025",
    },
    {
      id: 6,
      title: "The Science Behind Grocery Expiration Dates",
      summary:
        "Understand 'Best Before' and 'Use By' labels to reduce food waste.",
      full: "‘Best Before’ labels mean quality may decline after the date, while ‘Use By’ indicates food safety. Knowing the difference helps you reduce waste and shop smarter.",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/049/584/608/small_2x/happy-young-business-team-in-formalwear-looking-at-camera-while-standing-on-beige-background-photo.jpg",
      date: "March 20, 2025",
    },
    {
      id: 7,
      title: "The Science Behind Grocery Expiration Dates",
      summary:
        "Understand 'Best Before' and 'Use By' labels to reduce food waste.",
      full: "‘Best Before’ labels mean quality may decline after the date, while ‘Use By’ indicates food safety. Knowing the difference helps you reduce waste and shop smarter.",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/049/584/608/small_2x/happy-young-business-team-in-formalwear-looking-at-camera-while-standing-on-beige-background-photo.jpg",
      date: "March 20, 2025",
    },
  ];

  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <div className="min-h-screen py-16 px-6">
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
