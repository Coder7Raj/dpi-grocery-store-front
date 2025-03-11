import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";
import Deals from "./Deals";

export default function BestDeals() {
  const items = [
    {
      id: 1,
      name: "Fresh Apples",
      category: "Fruits",
      price: 3.99,
      description: "Crisp and juicy apples, perfect for a healthy snack.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtywKdongNUiZ8YexgVsgx4hOkSSONFea6eA&s",
    },
    {
      id: 2,
      name: "Organic Bananas",
      category: "Fruits",
      price: 1.49,
      description:
        "Naturally sweet and rich in potassium, great for smoothies.",
      image:
        "https://t4.ftcdn.net/jpg/02/35/42/23/360_F_235422372_f5WdBridmfhzRXzcMr5kKKZYfbJYoqvK.jpg",
    },
    {
      id: 3,
      name: "Whole Wheat Bread",
      category: "Bakery",
      price: 2.99,
      description: "Soft and fresh whole wheat bread for healthy sandwiches.",
      image:
        "http://t3.ftcdn.net/jpg/01/90/27/96/360_F_190279606_Pcge6K49YBMPiI26EEjDKxo8eVbrqYh6.jpg",
    },
    {
      id: 4,
      name: "Almond Milk",
      category: "Dairy",
      price: 4.99,
      description: "Delicious plant-based milk, dairy-free and nutritious.",
      image:
        "https://images.immediate.co.uk/production/volatile/sites/30/2017/01/Bunch-of-bananas-67e91d5.jpg?quality=90&resize=440,400",
    },
    {
      id: 5,
      name: "Cheddar Cheese",
      category: "Dairy",
      price: 5.49,
      description: "Rich and creamy cheddar cheese, perfect for any dish.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL9OQtcrVw008g09nazD3hsedG7PT8cYRlNg&s",
    },
    {
      id: 6,
      name: "Chicken Breast",
      category: "Meat",
      price: 7.99,
      description: "Lean and protein-rich chicken breast for healthy meals.",
      image:
        "https://www.shutterstock.com/image-photo/fried-salmon-steak-cooked-green-600nw-2489026949.jpg",
    },
    {
      id: 7,
      name: "Salmon Fillet",
      category: "Seafood",
      price: 12.99,
      description: "Fresh and flavorful salmon fillet, rich in omega-3.",
      image:
        "https://www.foodiesfeed.com/wp-content/uploads/2023/04/strawberry-milk-splash.jpg",
    },
    {
      id: 8,
      name: "Olive Oil",
      category: "Pantry",
      price: 8.99,
      description: "Extra virgin olive oil, ideal for cooking and dressings.",
      image:
        "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/air_fryer_steak_22807_16x9.jpg",
    },
  ];
  return (
    <div className="mt-20 mb-4">
      <h1 className="text-3xl font-bold text-start text-white mb-10">
        Our Best Deals
      </h1>
      <div className="flex items-center justify-center">
        <div
          style={{
            backgroundImage:
              "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKdYN3R-BvNAN7YwhwvJUG_mIQbMAet2l2HkJcjVFXmPUFk2qYodlkM0JB1N3Oxi8ghSk&usqp=CAU')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="h-80 w-[25%] px-6 py-4 space-y-10"
        >
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
            iusto repellendus nostrum nesciunt fuga repellat.
          </p>
          <button className="btn">Shop Now!</button>
        </div>
        <div className="flex w-[75%] mx-20">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper h-[350px]"
          >
            {items?.map((item) => (
              <SwiperSlide key={item.id}>
                <Deals item={item}></Deals>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
