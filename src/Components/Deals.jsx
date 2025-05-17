// export default function Deals({ item }) {
//   const { name, image } = item;
//   return (
//     <div className="flex h-full">
//       <img className="w-64 object-cover" src={image} alt={name} />
//       <h1 className="text-green-600 bg-white bg-opacity-50 p-2 rounded">
//         {name}
//       </h1>
//     </div>
//   );
// }
// Deals.jsx
export default function Deals({ item }) {
  const { name, image } = item;
  return (
    <div className="flex flex-col items-center mx-4">
      <img
        className="w-32 h-32 object-cover rounded-md"
        src={image}
        alt={name}
      />
      <h1 className="text-green-600 bg-white bg-opacity-50 p-1 mt-2 rounded text-center">
        {name}
      </h1>
    </div>
  );
}
