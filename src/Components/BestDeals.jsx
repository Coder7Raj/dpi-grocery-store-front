import Marquee from "react-fast-marquee";
import Deals from "./Deals";

export default function BestDeals() {
  const items = [
    {
      id: 1,
      name: "Fresh Apples",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtywKdongNUiZ8YexgVsgx4hOkSSONFea6eA&s",
    },
    {
      id: 2,
      name: "Organic Bananas",
      image:
        "https://t4.ftcdn.net/jpg/02/35/42/23/360_F_235422372_f5WdBridmfhzRXzcMr5kKKZYfbJYoqvK.jpg",
    },
    {
      id: 3,
      name: "Whole Wheat Bread",
      image:
        "http://t3.ftcdn.net/jpg/01/90/27/96/360_F_190279606_Pcge6K49YBMPiI26EEjDKxo8eVbrqYh6.jpg",
    },
    {
      id: 4,
      name: "Almond Milk",
      image:
        "https://images.immediate.co.uk/production/volatile/sites/30/2017/01/Bunch-of-bananas-67e91d5.jpg?quality=90&resize=440,400",
    },
    {
      id: 5,
      name: "Cheddar Cheese",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL9OQtcrVw008g09nazD3hsedG7PT8cYRlNg&s",
    },
    {
      id: 6,
      name: "Chicken Breast",
      image:
        "https://www.shutterstock.com/image-photo/fried-salmon-steak-cooked-green-600nw-2489026949.jpg",
    },
    {
      id: 7,
      name: "Salmon Fillet",
      image:
        "https://www.foodiesfeed.com/wp-content/uploads/2023/04/strawberry-milk-splash.jpg",
    },
    {
      id: 8,
      name: "Olive Oil",
      image:
        "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/air_fryer_steak_22807_16x9.jpg",
    },
  ];

  return (
    <div className="mt-20 px-1">
      <h1 className="text-2xl md:text-3xl font-bold text-black mb-4">
        Our Top Item's
      </h1>

      <div className="md:flex items-center h-[400px]">
        {/* Left side with image and overlay */}
        <div className="relative h-full w-full md:w-[40%] lg:w-[35%]">
          <img
            className="h-full w-full object-cover rounded"
            src="https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/04/Cobb-Salad-main.jpg"
            alt="Top Deals"
          />
          <div className="h-full w-full flex flex-col text-center justify-center items-center absolute top-0 left-0 bg-slate-300 backdrop-blur-sm bg-opacity-30 text-opacity-90 font-semibold text-xl text-black space-y-4 rounded-md">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Asperiores iusto repellendus nostrum nesciunt fuga repellat.
            </p>
            <button className="bg-green-600 text-lg text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
              Shop Now!
            </button>
          </div>
        </div>

        {/* Right side with two marquees */}
        <div className="w-full md:w-[60%] lg:w-[65%] flex flex-col justify-between h-full space-y-4">
          {/* Top Marquee (Right direction) */}
          <Marquee pauseOnHover direction="right" speed={50} className="h-1/2">
            {items.map((item) => (
              <Deals key={item.id} item={item} />
            ))}
          </Marquee>

          {/* Bottom Marquee (Left direction) */}
          <Marquee pauseOnHover direction="left" speed={50} className="h-1/2">
            {items.map((item) => (
              <Deals key={item.id} item={item} />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
