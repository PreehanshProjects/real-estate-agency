import { FaUsers, FaClock, FaThumbsUp } from "react-icons/fa";

const infoData = [
  {
    icon: <FaUsers size={28} className="text-blue-600" />,
    title: "Experienced Team",
    description:
      "Our agents have years of experience in the Mauritius property market.",
  },
  {
    icon: <FaClock size={28} className="text-blue-600" />,
    title: "Fast Response",
    description:
      "We respond quickly to all inquiries ensuring you never miss an opportunity.",
  },
  {
    icon: <FaThumbsUp size={28} className="text-blue-600" />,
    title: "Customer Satisfaction",
    description:
      "We prioritize your needs and strive for complete satisfaction in every transaction.",
  },
];

export default function InfoRow() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {infoData.map(({ icon, title, description }) => (
        <div
          key={title}
          className="flex flex-col items-center text-center space-y-2 p-4 border rounded"
        >
          {icon}
          <h4 className="font-semibold">{title}</h4>
          <p className="text-gray-600">{description}</p>
        </div>
      ))}
    </section>
  );
}
