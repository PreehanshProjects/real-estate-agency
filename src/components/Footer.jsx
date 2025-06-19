import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Agency Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">RealEstateCo</h2>
          <p className="text-sm">
            Helping you buy, sell, rent or develop your property with expertise
            and care in Mauritius.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Property Sales</li>
            <li>Rentals</li>
            <li>Construction</li>
            <li>Project Development</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <p className="text-sm">Email: info@RealEstateCo.mu</p>
          <p className="text-sm">Phone: +230 123 4567</p>
          <p className="text-sm">Location: Mauritius</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-blue-700 pt-4 text-center text-sm text-gray-300">
        &copy; {new Date().getFullYear()} RealEstateCo. All rights reserved.
      </div>
    </footer>
  );
}
