import { useState } from "react";
import { FaUser, FaEnvelope, FaPhoneAlt, FaCommentDots } from "react-icons/fa";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [focusedInput, setFocusedInput] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFocus = (name) => {
    setFocusedInput(name);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const inputs = [
    { icon: FaUser, name: "name", type: "text", placeholder: "Your Name" },
    {
      icon: FaEnvelope,
      name: "email",
      type: "email",
      placeholder: "Email Address",
    },
    {
      icon: FaPhoneAlt,
      name: "phone",
      type: "tel",
      placeholder: "Phone Number (optional)",
    },
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/20 backdrop-blur-md p-8 rounded-3xl shadow-2xl w-full max-w-md sticky top-10 self-start space-y-6 border border-white/30"
    >
      <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">
        Get in Touch
      </h3>

      {/* Inputs */}
      {inputs.map(({ icon: Icon, name, type, placeholder }) => (
        <div key={name} className="relative">
          <Icon
            className={`absolute left-3 top-3.5 transition-colors duration-300 ${
              focusedInput === name ? "text-blue-700" : "text-blue-500"
            }`}
          />
          <input
            type={type}
            name={name}
            value={formData[name]}
            onChange={handleChange}
            placeholder={placeholder}
            required={name !== "phone"}
            onFocus={() => handleFocus(name)}
            onBlur={handleBlur}
            className="pl-10 pr-4 py-2 w-full rounded-xl bg-white/40 text-gray-800 placeholder-gray-500 shadow-inner border border-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-sm transition"
          />
        </div>
      ))}

      {/* Message */}
      <div className="relative">
        <FaCommentDots
          className={`absolute left-3 top-3 transition-colors duration-300 ${
            focusedInput === "message" ? "text-blue-700" : "text-blue-500"
          }`}
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          placeholder="Your Message"
          onFocus={() => handleFocus("message")}
          onBlur={handleBlur}
          className="pl-10 pr-4 pt-2 pb-2 w-full rounded-xl bg-white/40 text-gray-800 placeholder-gray-500 shadow-inner border border-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-sm transition resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition font-semibold shadow-md"
      >
        Send Message
      </button>
    </form>
  );
}
