export default function Card({ title, image, listings }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-60 flex-shrink-0">
      <img src={image} alt={title} className="h-40 w-full object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{listings} listings</p>
      </div>
    </div>
  );
}
