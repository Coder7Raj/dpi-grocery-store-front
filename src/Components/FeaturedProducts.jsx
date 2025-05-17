import { Swiper, SwiperSlide } from "swiper/react";
import FeaturedItems from "../Pages/FeaturedItems";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function FeaturedProducts() {
  const items = [
    {
      id: 1,
      name: "Fresh Apples",
      category: "Fruits",
      price: 3.99,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtywKdongNUiZ8YexgVsgx4hOkSSONFea6eA&s",
    },
    {
      id: 2,
      name: "Organic Bananas",
      category: "Fruits",
      price: 1.49,
      image:
        "https://t4.ftcdn.net/jpg/02/35/42/23/360_F_235422372_f5WdBridmfhzRXzcMr5kKKZYfbJYoqvK.jpg",
    },
    {
      id: 3,
      name: "Whole Wheat Bread",
      category: "Bakery",
      price: 2.99,
      image:
        "http://t3.ftcdn.net/jpg/01/90/27/96/360_F_190279606_Pcge6K49YBMPiI26EEjDKxo8eVbrqYh6.jpg",
    },
    {
      id: 4,
      name: "Almond Milk",
      category: "Dairy",
      price: 4.99,
      image:
        "https://images.immediate.co.uk/production/volatile/sites/30/2017/01/Bunch-of-bananas-67e91d5.jpg?quality=90&resize=440,400",
    },
    {
      id: 5,
      name: "Cheddar Cheese",
      category: "Dairy",
      price: 5.49,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL9OQtcrVw008g09nazD3hsedG7PT8cYRlNg&s",
    },
    {
      id: 6,
      name: "Chicken Breast",
      category: "Meat",
      price: 7.99,
      image:
        "https://www.shutterstock.com/image-photo/fried-salmon-steak-cooked-green-600nw-2489026949.jpg",
    },
    {
      id: 7,
      name: "Salmon Fillet",
      category: "Seafood",
      price: 12.99,
      image:
        "https://www.foodiesfeed.com/wp-content/uploads/2023/04/strawberry-milk-splash.jpg",
    },
    {
      id: 8,
      name: "Olive Oil",
      category: "Pantry",
      price: 8.99,
      image:
        "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/air_fryer_steak_22807_16x9.jpg",
    },
    {
      id: 9,
      name: "Brown Rice",
      category: "Grains",
      price: 3.49,
      image:
        "https://www.tasteofhome.com/wp-content/uploads/2025/01/German-Meatballs_EXPS_TOHD24_4166_SarahTramonte_4.jpg?w=700",
    },
    {
      id: 10,
      name: "Peanut Butter",
      category: "Snacks",
      price: 4.29,
      image:
        "https://www.recipetineats.com/tachyon/2025/02/Devilled-eggs_8.jpg?resize=450%2C450",
    },
  ];

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
        <div className="relative w-full h-[300px] shadow-md hover:shadow-lg shadow-slate-300 bg-pink-200 rounded-md overflow-hidden">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/banner-1.png"
            alt=""
          />

          <div className="absolute left-0 top-0 h-full flex items-center pl-10 z-10">
            <div className="w-[45%] flex flex-col gap-4 p-6 rounded-lg">
              <h1 className="text-black text-2xl font-bold">
                Everyday fresh & clean with our products
              </h1>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
                Shop Now!
              </button>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="relative w-full h-[300px] shadow-md hover:shadow-lg shadow-slate-300 bg-pink-200 rounded-md overflow-hidden">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/banner-2.png"
            alt=""
          />

          <div className="absolute left-0 top-0 h-full flex items-center pl-10 z-10">
            <div className="w-[45%] flex flex-col gap-4 p-6 rounded-lg">
              <h1 className="text-black text-2xl font-bold">
                Make your Lunch Healthy and Easy
              </h1>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
                Shop Now!
              </button>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="relative w-full h-[300px] shadow-md hover:shadow-lg shadow-slate-300 bg-pink-200 rounded-md overflow-hidden">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/banner-3.png"
            alt=""
          />

          <div className="absolute left-0 top-0 h-full flex items-center pl-10 z-10">
            <div className="w-[45%] flex flex-col gap-4 p-6 rounded-lg">
              <h1 className="text-black text-2xl font-bold">
                The best Organic Prducts Online
              </h1>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
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
