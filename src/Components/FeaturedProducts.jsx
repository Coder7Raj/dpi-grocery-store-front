import { Swiper, SwiperSlide } from "swiper/react";
import FeaturedItems from "../Pages/FeaturedItems";

// Import Swiper styles
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function FeaturedProducts() {
  const navigate = useNavigate();
  //
  const items = [
    {
      id: 1,
      name: "Margherita Pizza",
      category: "Fast Food",
      price: 8.99,
      description:
        "Classic Italian pizza topped with fresh mozzarella, basil, and tomato sauce.",
      image: "https://i.postimg.cc/YC6kwNYr/Margherita-Pizza-HEADER.jpg",
    },
    {
      id: 2,
      name: "Cheeseburger",
      category: "Fast Food",
      price: 6.49,
      description:
        "Grilled beef patty with cheese, lettuce, tomato, and onion in a soft bun.",
      image: "https://i.postimg.cc/tCHpvmnS/Great-American-Burger.jpg",
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
    },
    {
      id: 4,
      name: "Hot Dog",
      category: "Fast Food",
      price: 4.0,
      description:
        "Grilled sausage in a soft bun, topped with ketchup and mustard.",
      image: "https://i.postimg.cc/5t8mg0hk/Cheeseburger-Hot-Dog2.jpg",
    },
    {
      id: 5,
      name: "French Fries",
      category: "Fast Food",
      price: 2.99,
      description: "Golden and crispy potato fries, lightly salted.",
      image: "https://i.postimg.cc/0QQbQX0d/french-fries.jpg",
    },
    {
      id: 6,
      name: "Grilled Salmon",
      category: "Dinner",
      price: 12.99,
      description: "Tender grilled salmon fillet served with lemon and herbs.",
      image: "https://i.postimg.cc/hjWKFC3t/featured-grilled-salmon-recipe.jpg",
    },
    {
      id: 7,
      name: "Caesar Salad",
      category: "Salad",
      price: 6.25,
      description:
        "Romaine lettuce with Caesar dressing, croutons, and parmesan cheese.",
      image:
        "https://i.postimg.cc/brLPtqYZ/NCG-Dennis-Becker-Classic-Caesar-Salad-715-x-477.jpg",
    },
    {
      id: 8,
      name: "Vegetable Stir Fry",
      category: "Lunch",
      price: 7.5,
      description: "Assorted vegetables sautéed with soy sauce and garlic.",
      image:
        "https://i.postimg.cc/Pq6FYN1s/Thai-Vegetable-Stir-Fry-with-Lime-and-Ginger-done.png",
    },
    {
      id: 9,
      name: "Paneer Butter Masala",
      category: "Dinner",
      price: 8.99,
      description:
        "Cottage cheese cubes in creamy tomato gravy with Indian spices.",
      image: "https://i.postimg.cc/mrT070qM/1-500x375.jpg",
    },
    {
      id: 10,
      name: "Greek Salad",
      category: "Salad",
      price: 6.75,
      description:
        "Fresh cucumbers, tomatoes, olives, and feta cheese in olive oil.",
      image:
        "https://i.postimg.cc/4xXg17Hm/20240905221054-pk-greek-salad-0214-min.jpg",
    },
  ];

  //
  const toAllProducts = () => {
    navigate("/all_products");
  };

  return (
    <div className="mt-10">
      <h1 className="text-2xl lg:text-3xl font-bold mb-2 text-black text-start">
        Our Featured Products
      </h1>

      <Swiper
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        spaceBetween={20}
        grabCursor={true}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper p-20"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <FeaturedItems item={item} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 px-1">
        {/*  */}
        <div className="relative w-full h-[300px] shadow-md hover:shadow-lg shadow-slate-300 rounded-md overflow-hidden">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="https://i.postimg.cc/YS5kYX6w/banner-1.png"
            alt="image 1"
          />

          <div className="absolute left-0 top-0 w-full h-full flex items-center">
            <div className="w-[45%] flex flex-col gap-4 pl-1 rounded-lg">
              <h1 className="text-black text-xl md:text-2xl font-bold">
                Everyday fresh & clean with our products
              </h1>
              <button
                onClick={toAllProducts}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
              >
                Shop Now!
              </button>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="relative w-full h-[300px] shadow-md hover:shadow-lg shadow-slate-300 rounded-md overflow-hidden">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="https://i.postimg.cc/43q4w4Tq/banner-2.png"
            alt="image 2"
          />

          <div className="absolute left-0 top-0 w-full h-full flex items-center">
            <div className="w-[45%] flex flex-col gap-4 pl-1 rounded-lg">
              <h1 className="text-black text-xl md:text-2xl font-bold">
                Make your Lunch Healthy and Easy
              </h1>
              <button
                onClick={toAllProducts}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
              >
                Shop Now!
              </button>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="hidden lg:flex relative w-full h-[300px] shadow-md hover:shadow-lg shadow-slate-300 rounded-md overflow-hidden">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="https://i.postimg.cc/4ybJJzhR/banner-3.png"
            alt="image 3"
          />

          <div className="absolute left-0 top-0 w-full h-full flex items-center">
            <div className="w-[45%] flex flex-col gap-4 pl-1 rounded-lg">
              <h1 className="text-black text-xl md:text-2xl font-bold">
                The best Organic Prducts Online
              </h1>
              <button
                onClick={toAllProducts}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
              >
                Shop Now!
              </button>
            </div>
          </div>
        </div>

        {/*  */}
      </div>
    </div>
  );
}
