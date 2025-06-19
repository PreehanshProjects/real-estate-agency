/* eslint-disable no-unused-vars */
import { useState } from "react";
import { FaUser, FaEnvelope, FaPhoneAlt, FaCommentDots } from "react-icons/fa";
import HowToFindUs from "./HowToFindUs";

export default function Contact() {
  const [focused, setFocused] = useState(null);

  const inputs = [
    {
      name: "name",
      type: "text",
      label: "Name",
      icon: FaUser,
      placeholder: "Your Name",
    },
    {
      name: "email",
      type: "email",
      label: "Email",
      icon: FaEnvelope,
      placeholder: "you@example.com",
    },
    {
      name: "phone",
      type: "tel",
      label: "Phone",
      icon: FaPhoneAlt,
      placeholder: "+230 1234 5678 (optional)",
    },
  ];

  return (
    <>
      <div className="max-w-3xl mx-auto p-8 bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/30 my-16">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-8 text-center">
          Contact Us
        </h1>
        <p className="mb-10 text-center text-gray-700 text-lg max-w-xl mx-auto">
          Have questions or want to get in touch? Fill out the form below, and
          our team will get back to you promptly.
        </p>

        <form className="space-y-8">
          {inputs.map(({ name, type, label, icon: Icon, placeholder }) => (
            <div key={name} className="relative">
              <Icon
                className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors duration-300 ${
                  focused === name ? "text-blue-700" : "text-blue-400"
                }`}
                size={20}
              />
              <input
                id={name}
                name={name}
                type={type}
                placeholder=" "
                required={name !== "phone"}
                onFocus={() => setFocused(name)}
                onBlur={() => setFocused(null)}
                className="peer w-full pl-10 pr-3 py-3 bg-white/40 border border-white/50 rounded-xl shadow-inner text-gray-800 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition"
              />
              <label
                htmlFor={name}
                className="absolute left-10 top-1/2 -translate-y-1/2 text-gray-500 text-sm cursor-text peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1/2 peer-focus:text-blue-700 peer-focus:text-sm transition-all"
              >
                {label}
              </label>
            </div>
          ))}

          <div className="relative">
            <FaCommentDots
              className={`absolute left-3 top-3 transition-colors duration-300 ${
                focused === "message" ? "text-blue-700" : "text-blue-400"
              }`}
              size={20}
            />
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder=" "
              required
              onFocus={() => setFocused("message")}
              onBlur={() => setFocused(null)}
              className="peer w-full pl-10 pr-3 pt-3 pb-3 bg-white/40 border border-white/50 rounded-xl shadow-inner text-gray-800 placeholder-transparent resize-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition"
            />
            <label
              htmlFor="message"
              className="absolute left-10 top-3.5 text-gray-500 text-sm cursor-text peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-3.5 peer-focus:text-blue-700 peer-focus:text-sm transition-all"
            >
              Message
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-xl shadow-lg transition"
          >
            Send Message
          </button>
        </form>
      </div>
      <HowToFindUs />
    </>
  );
}
