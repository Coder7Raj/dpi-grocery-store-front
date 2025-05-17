export default function Deals({ item }) {
  const { name, image } = item;
  return (
    <div className="flex flex-col items-center mr-4">
      <img
        className="w-32 h-32 object-cover rounded-md"
        src={image}
        alt={name}
      />
      <h1 className="text-green-600 bg-white bg-opacity-25 p-1 mt-2 rounded text-center">
        {name}
      </h1>
    </div>
  );
}
