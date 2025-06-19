import { useParams } from "react-router-dom";

export default function PropertyDetail() {
  const { id } = useParams();

  return (
    <div className="max-w-2xl mx-auto my-16 p-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold">Property Details – ID {id}</h1>
      <p className="mt-4 text-gray-700">
        This page will display the full information of the selected property.
      </p>
    </div>
  );
}
