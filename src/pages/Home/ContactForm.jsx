import { useState } from "react";
import { FaUser, FaEnvelope, FaPhoneAlt, FaCommentDots } from "react-icons/fa";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md sticky top-10 self-start space-y-6"
    >
      <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">
        Get in Touch
      </h3>

      {/* Name */}
      <div className="relative">
        <FaUser className="absolute top-3.5 left-3 text-gray-400" />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="pl-10 pr-4 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
      </div>

      {/* Email */}
      <div className="relative">
        <FaEnvelope className="absolute top-3.5 left-3 text-gray-400" />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          required
          className="pl-10 pr-4 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
      </div>

      {/* Phone */}
      <div className="relative">
        <FaPhoneAlt className="absolute top-3.5 left-3 text-gray-400" />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number (optional)"
          className="pl-10 pr-4 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
      </div>

      {/* Message */}
      <div className="relative">
        <FaCommentDots className="absolute top-3 left-3 text-gray-400" />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows={4}
          className="pl-10 pr-4 pt-2 w-full border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
      >
        Send Message
      </button>
    </form>
  );
}
