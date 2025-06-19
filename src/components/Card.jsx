export default function Card({ image, title, listings }) {
  return (
    <div className="mb-10 overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg transition-transform transform hover:scale-105 duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6 text-center">
        <h3 className="mb-2 text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600">{listings} Listings</p>
        <a
          href="#"
          className="mt-4 inline-block rounded-full border border-gray-300 px-5 py-2 text-sm font-medium text-gray-700 transition hover:border-blue-600 hover:bg-blue-600 hover:text-white"
        >
          View Listings
        </a>
      </div>
    </div>
  );
}
