import { Link } from "react-router-dom";

export default function MegaDeals() {
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
      name: "Fried Chicken",
      category: "Fast Food",
      price: 7.99,
      description:
        "Crispy and juicy deep-fried chicken pieces seasoned with spices.",
      image: "https://i.postimg.cc/FHrf8KkB/Fried-Chicken.jpg",
    },
    {
      id: 7,
      name: "Veggie Wrap",
      category: "Fast Food",
      price: 5.5,
      description:
        "Whole wheat wrap filled with grilled veggies, hummus, and fresh greens.",
      image: "https://i.postimg.cc/7YDbJL9Z/wrap2-2000-1125.jpg",
    },
    {
      id: 8,
      name: "Pepperoni Pizza",
      category: "Fast Food",
      price: 9.25,
      description:
        "Thin crust pizza topped with mozzarella and spicy pepperoni slices.",
      image: "https://i.postimg.cc/52KtrSVX/Pepp-Pizza-600.jpg",
    },
    {
      id: 9,
      name: "Chicken Shawarma",
      category: "Fast Food",
      price: 6.75,
      description:
        "Spiced grilled chicken wrapped in pita bread with garlic sauce and veggies.",
      image: "https://i.postimg.cc/1XKmrpB5/Chicken-shawarma-4.jpg",
    },
    {
      id: 10,
      name: "Tacos",
      category: "Fast Food",
      price: 5.99,
      description:
        "Crunchy corn tortillas filled with beef, cheese, lettuce, and salsa.",
      image: "https://i.postimg.cc/bN3YG9dm/Beef-Tacos.jpg",
    },
    {
      id: 11,
      name: "Grilled Salmon",
      category: "Dinner",
      price: 12.99,
      description: "Tender grilled salmon fillet served with lemon and herbs.",
      image: "https://i.postimg.cc/hjWKFC3t/featured-grilled-salmon-recipe.jpg",
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
    },
    {
      id: 13,
      name: "Vegetable Stir Fry",
      category: "Lunch",
      price: 7.5,
      description: "Assorted vegetables sautéed with soy sauce and garlic.",
      image:
        "https://i.postimg.cc/Pq6FYN1s/Thai-Vegetable-Stir-Fry-with-Lime-and-Ginger-done.png",
    },
    {
      id: 14,
      name: "Paneer Butter Masala",
      category: "Dinner",
      price: 8.99,
      description:
        "Cottage cheese cubes in creamy tomato gravy with Indian spices.",
      image: "https://i.postimg.cc/mrT070qM/1-500x375.jpg",
    },
    {
      id: 15,
      name: "Greek Salad",
      category: "Salad",
      price: 6.75,
      description:
        "Fresh cucumbers, tomatoes, olives, and feta cheese in olive oil.",
      image:
        "https://i.postimg.cc/4xXg17Hm/20240905221054-pk-greek-salad-0214-min.jpg",
    },
    {
      id: 16,
      name: "Lentil Soup",
      category: "Lunch",
      price: 4.5,
      description:
        "Hearty soup made from lentils, vegetables, and mild spices.",
      image:
        "https://i.postimg.cc/cHtyJf25/Instant-Pot-Lentil-Soup-FI-1200.jpg",
    },
    {
      id: 17,
      name: "Chickpea Salad",
      category: "Salad",
      price: 5.5,
      description:
        "Chickpeas tossed with onions, tomatoes, cucumber, and lemon juice.",
      image:
        "https://i.postimg.cc/3rpQ5Cgk/Mediterranean-Chickpea-Salad-F-500x500.jpg",
    },
    {
      id: 18,
      name: "Mashed Potatoes",
      category: "Dinner",
      price: 3.99,
      description: "Creamy mashed potatoes with butter and a hint of garlic.",
      image:
        "https://i.postimg.cc/vZYJVJCn/10cs-thanksgiving2-potatoes2-bcpv-super-Jumbo.jpg",
    },
    {
      id: 19,
      name: "Grilled Veggie Bowl",
      category: "Lunch",
      price: 7.25,
      description:
        "Bowl filled with grilled seasonal vegetables, quinoa, and a tangy dressing.",
      image: "https://i.postimg.cc/PfbVQ6WQ/Roasted-Chickpea-Veggie-Bowl.jpg",
    },
    {
      id: 20,
      name: "Spinach Curry",
      category: "Dinner",
      price: 6.49,
      description:
        "Spiced spinach-based curry with herbs and garlic, served hot.",
      image: "https://i.postimg.cc/XYPsYtW4/chickpea-spinach-curry-2.jpg",
    },
  ];

  // Split the items
  const firstFive = items.slice(0, 5); // id 1-5
  const secondFive = items.slice(5, 10); // id 6-10
  const thirdFive = items.slice(10, 15); // id 11-15
  const fifthFive = items.slice(15, 20); // id 11-15

  return (
    <div className="mt-16 grid justify-center items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:px-8 gap-7 pt-[400px] md:pt-0 px-1">
      {/* First Section */}
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl text-black flex items-start justify-start font-bold mb-4">
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
              <div className="text-black">
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-600">${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Second Section */}
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl text-black text-start font-bold mb-4">
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
              <div className="text-black">
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-600">${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Third Section */}
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl text-black text-start font-bold mb-4">
          Best Products
        </h1>
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
              <div className="text-black">
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-600">${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Fourth Section */}
      <div className="lg:hidden flex flex-col justify-center items-center">
        <h1 className="text-2xl text-black text-start font-bold mb-4">
          Favorite Products
        </h1>
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
              <div className="text-black">
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
