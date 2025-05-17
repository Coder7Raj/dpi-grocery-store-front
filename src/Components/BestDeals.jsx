// import Marquee from "react-fast-marquee";
// import Deals from "./Deals";

// export default function BestDeals() {
//   const items = [
//     {
//       id: 1,
//       name: "Fresh Apples",
//       image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtywKdongNUiZ8YexgVsgx4hOkSSONFea6eA&s",
//     },
//     {
//       id: 2,
//       name: "Organic Bananas",
//       image:
//         "https://t4.ftcdn.net/jpg/02/35/42/23/360_F_235422372_f5WdBridmfhzRXzcMr5kKKZYfbJYoqvK.jpg",
//     },
//     {
//       id: 3,
//       name: "Whole Wheat Bread",
//       image:
//         "http://t3.ftcdn.net/jpg/01/90/27/96/360_F_190279606_Pcge6K49YBMPiI26EEjDKxo8eVbrqYh6.jpg",
//     },
//     {
//       id: 4,
//       name: "Almond Milk",
//       image:
//         "https://images.immediate.co.uk/production/volatile/sites/30/2017/01/Bunch-of-bananas-67e91d5.jpg?quality=90&resize=440,400",
//     },
//     {
//       id: 5,
//       name: "Cheddar Cheese",
//       image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL9OQtcrVw008g09nazD3hsedG7PT8cYRlNg&s",
//     },
//     {
//       id: 6,
//       name: "Chicken Breast",
//       image:
//         "https://www.shutterstock.com/image-photo/fried-salmon-steak-cooked-green-600nw-2489026949.jpg",
//     },
//     {
//       id: 7,
//       name: "Salmon Fillet",
//       image:
//         "https://www.foodiesfeed.com/wp-content/uploads/2023/04/strawberry-milk-splash.jpg",
//     },
//     {
//       id: 8,
//       name: "Olive Oil",
//       image:
//         "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/air_fryer_steak_22807_16x9.jpg",
//     },
//   ];
//   return (
//     <div className="mt-20 pb-96 md:pb-0 lg:pb-0 px-1">
//       <h1 className="text-3xl font-bold text-start text-white mb-10">
//         Our Top Item's
//       </h1>
//       <div className="md:flex lg:flex items-center h-[400px]">
//         <div className="relative h-full w-full md:w-[70%] lg:w-[60%] lg:flex space-y-10">
//           <img
//             className="h-full w-full"
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKdYN3R-BvNAN7YwhwvJUG_mIQbMAet2l2HkJcjVFXmPUFk2qYodlkM0JB1N3Oxi8ghSk&usqp=CAU"
//             alt=""
//           />
//           <div className="absolute top-20 left-20 bg-slate-400 bg-opacity-30 text-opacity-50 flex-col space-y-10 rounded-md">
//             <p className="text-black">
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//               Asperiores iusto repellendus nostrum nesciunt fuga repellat.
//             </p>
//             <button className="btn">Shop 4 Now!</button>
//           </div>
//         </div>
//         <div className="flex h-full w-full mx-1">
//           <Marquee>
//             {items?.map((item) => (
//               <Deals item={item}></Deals>
//             ))}
//           </Marquee>
//         </div>
//       </div>
//     </div>
//   );
// }
// BestDeals.jsx
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
    <div className="mt-20 px-4">
      <h1 className="text-3xl font-bold text-black mb-10">Our Top Item's</h1>

      <div className="md:flex items-center h-[400px] gap-4">
        {/* Left side with image and overlay */}
        <div className="relative h-full w-full md:w-[30%]">
          <img
            className="h-full w-full object-cover rounded"
            src="https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/04/Cobb-Salad-main.jpg"
            alt="Top Deals"
          />
          <div className="absolute top-20 left-10 bg-slate-400 bg-opacity-30 text-opacity-90 text-black p-6 space-y-4 rounded-md max-w-md">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Asperiores iusto repellendus nostrum nesciunt fuga repellat.
            </p>
            <button className="btn btn-primary">Shop Now!</button>
          </div>
        </div>

        {/* Right side with two marquees */}
        <div className="w-full md:w-[70%] flex flex-col justify-between h-full space-y-4">
          {/* Top Marquee (Right direction) */}
          <Marquee direction="right" speed={50} className="h-1/2">
            {items.map((item) => (
              <Deals key={item.id} item={item} />
            ))}
          </Marquee>

          {/* Bottom Marquee (Left direction) */}
          <Marquee direction="left" speed={50} className="h-1/2">
            {items.map((item) => (
              <Deals key={item.id} item={item} />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
