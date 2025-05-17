export default function FeaturedItems({ item }) {
  const { name, category, image } = item;

  return (
    <div className="h-60 flex flex-col justify-center items-center bg-sky-100 rounded-lg shadow-lg hover:shadow-xl shadow-slate-300">
      <img
        className="w-full h-40 object-cover rounded-md"
        src={image}
        alt={name}
      />
      <div className="text-center mt-2 flex-1">
        <p className="text-gray-600 text-sm">{category}</p>
        <h1 className="text-md lg:text-lg font-semibold">{name}</h1>
      </div>
    </div>
  );
}
