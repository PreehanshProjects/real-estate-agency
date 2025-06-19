import Card from "../../components/Card";

const properties = [
  { title: "Apartments", image: "/images/apartments.jpg", listings: 24 },
  {
    title: "Commercial Buildings",
    image: "/images/commercial.jpg",
    listings: 12,
  },
  { title: "Villas", image: "/images/villas.jpg", listings: 9 },
  { title: "Residential Land", image: "/images/land.jpg", listings: 7 },
  { title: "Houses", image: "/images/houses.jpg", listings: 15 },
];

export default function PropertyCards() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Explore Properties</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 overflow-x-auto scroll-smooth scrollbar-hide">
        {properties.map(({ title, image, listings }) => (
          <Card key={title} title={title} image={image} listings={listings} />
        ))}
      </div>
    </section>
  );
}
