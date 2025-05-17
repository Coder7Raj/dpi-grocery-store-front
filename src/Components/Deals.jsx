export default function Deals({ item }) {
  const { name, image } = item;
  return (
    <div className="flex relative h-full">
      <img
        className="w-full md:w-[90%] lg:w-[80%] h-full"
        src={image}
        alt={name}
      />
      <h1 className="absolute top-0 left-0 text-green-600 bg-white bg-opacity-50 p-2 rounded">
        {name}
      </h1>
    </div>
  );
}
