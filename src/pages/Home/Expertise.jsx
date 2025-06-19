import { FaChartLine, FaHandshake, FaMapMarkerAlt } from "react-icons/fa";

const expertiseItems = [
  {
    icon: <FaChartLine size={32} className="mx-auto text-blue-600" />,
    title: "Strong Market Knowledge",
    description:
      "Whether you are selling or buying a property in Mauritius, we can advise you of current market trends and introduce you to neighbourhoods that best suit your lifestyle.",
  },
  {
    icon: <FaHandshake size={32} className="mx-auto text-blue-600" />,
    title: "Trusted Negotiators",
    description:
      "We work closely with buyers and sellers to ensure the best deals through transparent negotiations.",
  },
  {
    icon: <FaMapMarkerAlt size={32} className="mx-auto text-blue-600" />,
    title: "Local Expertise",
    description:
      "Our deep knowledge of local communities helps you find the perfect property in the right location.",
  },
];

export default function Expertise() {
  return (
    <section className="space-y-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Our Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {expertiseItems.map(({ icon, title, description }) => (
          <div key={title} className="text-center p-4 border rounded shadow-sm">
            {icon}
            <h3 className="mt-4 text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-gray-600">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
