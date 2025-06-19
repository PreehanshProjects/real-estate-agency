import {
  FaChartLine,
  FaHandshake,
  FaMapMarkerAlt,
  FaUsers,
  FaClock,
  FaThumbsUp,
} from "react-icons/fa";

const expertiseItems = [
  {
    icon: <FaChartLine size={40} className="text-blue-600" />,
    title: "Strong Market Knowledge",
    description:
      "We help you understand real estate trends in Mauritius and guide you to neighborhoods that align with your lifestyle and investment goals.",
  },
  {
    icon: <FaHandshake size={40} className="text-blue-600" />,
    title: "Trusted Negotiators",
    description:
      "Our team ensures fair, transparent negotiations, working closely with both buyers and sellers for successful deals.",
  },
  {
    icon: <FaMapMarkerAlt size={40} className="text-blue-600" />,
    title: "Local Expertise",
    description:
      "With deep roots in Mauritian communities, we’ll help you find a property that feels like home in all the right places.",
  },
  {
    icon: <FaUsers size={32} className="text-blue-600" />,
    title: "Experienced Team",
    description:
      "Our agents bring years of proven experience in Mauritius's real estate market.",
  },
  {
    icon: <FaClock size={32} className="text-blue-600" />,
    title: "Fast Response",
    description:
      "Get quick and timely updates so you never miss out on key opportunities.",
  },
  {
    icon: <FaThumbsUp size={32} className="text-blue-600" />,
    title: "Customer Satisfaction",
    description:
      "Your satisfaction is our top priority, from first contact to final deal.",
  },
];

export default function Expertise() {
  return (
    <section className="pt-16 pb-16 bg-gray-50">
      {" "}
      {/* Remove bottom padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          {" "}
          {/* Reduce mb */}
          Why Choose Us
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {expertiseItems.map(({ icon, title, description }) => (
            <div
              key={title}
              className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-blue-100 rounded-full mb-4">
                {icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
              <p className="mt-3 text-gray-600 text-sm">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
