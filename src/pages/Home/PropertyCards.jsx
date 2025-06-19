// src/pages/Home/PropertyCards.jsx

import Card from "../../components/Card";

const properties = [
  { title: "Apartments", image: "/images/Appartments.jpg", listings: 24 },
  {
    title: "Commercial Buildings",
    image: "/images/CommercialBuilding.jpg",
    listings: 12,
  },
  { title: "Villas", image: "/images/Villas.jpg", listings: 9 },
  {
    title: "Residential Land",
    image: "/images/ResidentialLand.jpg",
    listings: 7,
  },
  { title: "Houses", image: "/images/House.jpg", listings: 15 },
];

export default function PropertyCards() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Explore Properties
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {properties.map(({ title, image, listings }) => (
            <Card key={title} title={title} image={image} listings={listings} />
          ))}
        </div>
      </div>
    </section>
  );
}
