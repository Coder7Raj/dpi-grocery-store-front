import { Link } from "react-router-dom";

export default function MegaDeals() {
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
    {
      id: 9,
      name: "Organic Bananas",
      category: "Fruits",
      price: 1.49,
      description:
        "Naturally sweet and rich in potassium, great for smoothies.",
      image:
        "https://t4.ftcdn.net/jpg/02/35/42/23/360_F_235422372_f5WdBridmfhzRXzcMr5kKKZYfbJYoqvK.jpg",
    },
    {
      id: 10,
      name: "Whole Wheat Bread",
      category: "Bakery",
      price: 2.99,
      description: "Soft and fresh whole wheat bread for healthy sandwiches.",
      image:
        "http://t3.ftcdn.net/jpg/01/90/27/96/360_F_190279606_Pcge6K49YBMPiI26EEjDKxo8eVbrqYh6.jpg",
    },
    {
      id: 11,
      name: "Almond Milk",
      category: "Dairy",
      price: 4.99,
      description: "Delicious plant-based milk, dairy-free and nutritious.",
      image:
        "https://images.immediate.co.uk/production/volatile/sites/30/2017/01/Bunch-of-bananas-67e91d5.jpg?quality=90&resize=440,400",
    },
    {
      id: 12,
      name: "Cheddar Cheese",
      category: "Dairy",
      price: 5.49,
      description: "Rich and creamy cheddar cheese, perfect for any dish.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL9OQtcrVw008g09nazD3hsedG7PT8cYRlNg&s",
    },
    {
      id: 13,
      name: "Chicken Breast",
      category: "Meat",
      price: 7.99,
      description: "Lean and protein-rich chicken breast for healthy meals.",
      image:
        "https://www.shutterstock.com/image-photo/fried-salmon-steak-cooked-green-600nw-2489026949.jpg",
    },
    {
      id: 14,
      name: "Salmon Fillet",
      category: "Seafood",
      price: 12.99,
      description: "Fresh and flavorful salmon fillet, rich in omega-3.",
      image:
        "https://www.foodiesfeed.com/wp-content/uploads/2023/04/strawberry-milk-splash.jpg",
    },
    {
      id: 15,
      name: "Olive Oil",
      category: "Pantry",
      price: 8.99,
      description: "Extra virgin olive oil, ideal for cooking and dressings.",
      image:
        "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/air_fryer_steak_22807_16x9.jpg",
    },
    {
      id: 16,
      name: "Almond Milk",
      category: "Dairy",
      price: 4.99,
      description: "Delicious plant-based milk, dairy-free and nutritious.",
      image:
        "https://images.immediate.co.uk/production/volatile/sites/30/2017/01/Bunch-of-bananas-67e91d5.jpg?quality=90&resize=440,400",
    },
    {
      id: 17,
      name: "Cheddar Cheese",
      category: "Dairy",
      price: 5.49,
      description: "Rich and creamy cheddar cheese, perfect for any dish.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL9OQtcrVw008g09nazD3hsedG7PT8cYRlNg&s",
    },
    {
      id: 18,
      name: "Chicken Breast",
      category: "Meat",
      price: 7.99,
      description: "Lean and protein-rich chicken breast for healthy meals.",
      image:
        "https://www.shutterstock.com/image-photo/fried-salmon-steak-cooked-green-600nw-2489026949.jpg",
    },
    {
      id: 19,
      name: "Salmon Fillet",
      category: "Seafood",
      price: 12.99,
      description: "Fresh and flavorful salmon fillet, rich in omega-3.",
      image:
        "https://www.foodiesfeed.com/wp-content/uploads/2023/04/strawberry-milk-splash.jpg",
    },
    {
      id: 20,
      name: "Olive Oil",
      category: "Pantry",
      price: 8.99,
      description: "Extra virgin olive oil, ideal for cooking and dressings.",
      image:
        "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/air_fryer_steak_22807_16x9.jpg",
    },
  ];

  // Split the items
  const firstFive = items.slice(0, 5); // id 1-5
  const secondFive = items.slice(5, 10); // id 6-10
  const thirdFive = items.slice(10, 15); // id 11-15
  const fifthFive = items.slice(15, 20); // id 11-15

  return (
    <div className="mt-16 grid justify-center items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:px-8 gap-7 pt-[400px] md:pt-0 px-1">
      {/* First Section */}
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl flex items-start justify-start font-bold mb-4">
          Trending Products
        </h1>
        <div className="grid grid-cols-1 gap-4">
          {firstFive.map((item) => (
            <div
              key={item.id}
              className="w-[320px] flex justify-start items-center gap-2 shadow-md hover:shadow-xl bg-white rounded-md"
            >
              <Link to={"/all_products"}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-32 h-24 rounded-md object-cover border"
                />
              </Link>
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-600">${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Second Section */}
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl text-start font-bold mb-4">
          Top Selling Products
        </h1>
        <div className="grid grid-cols-1 gap-4">
          {secondFive.map((item) => (
            <div
              key={item.id}
              className="w-[320px] flex justify-start items-center gap-2 shadow-md hover:shadow-xl bg-white rounded-md"
            >
              <Link to={"/all_products"}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-32 h-24 rounded-md object-cover border"
                />
              </Link>
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-600">${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Third Section */}
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl text-start font-bold mb-4">Best Products</h1>
        <div className="grid grid-cols-1 gap-4">
          {thirdFive.map((item) => (
            <div
              key={item.id}
              className="w-[320px] flex justify-start items-center gap-2 shadow-md hover:shadow-xl bg-white rounded-md"
            >
              <Link to={"/all_products"}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-32 h-24 rounded-md object-cover border"
                />
              </Link>
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-600">${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Fourth Section */}
      <div className="lg:hidden xl:flex flex flex-col justify-center items-center">
        <h1 className="text-2xl text-start font-bold mb-4">Best Products</h1>
        <div className="grid grid-cols-1 gap-4">
          {fifthFive.map((item) => (
            <div
              key={item.id}
              className="w-[320px] flex justify-start items-center gap-2 shadow-md hover:shadow-xl bg-white rounded-md"
            >
              <Link to={"/all_products"}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-32 h-24 rounded-md object-cover border"
                />
              </Link>
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-600">${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
