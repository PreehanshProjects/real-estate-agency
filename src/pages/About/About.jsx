export default function About() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">
          About Us — RealEstateCo Properties
        </h1>

        {/* Intro Paragraph */}
        <p className="text-lg text-gray-700 leading-7 mb-8">
          At <strong>RealEstateCo Properties</strong>, we are more than a real
          estate agency — we are your trusted partners in one of life’s most
          important decisions. With over 20 years of experience in the Mauritius
          property market, we have built a reputation grounded in transparency,
          reliability, and genuine client care. Whether you’re buying, selling,
          renting, or investing, we are here to guide you with confidence and
          care.
        </p>

        {/* Values Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Philosophy
            </h2>
            <p className="text-gray-600 leading-7">
              We believe real estate is about people, not just properties. Our
              team takes the time to understand your vision and lifestyle,
              working hand-in-hand with you through every stage — from finding
              the right land to handing over the keys to your dream home.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-gray-600 leading-7">
              We operate with sincerity, dedication, and a deep understanding of
              the Mauritian market. From property sales and rentals to full
              project development, our all-in-one service model ensures a
              smooth, personalized experience — always.
            </p>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">
            Our Core Services
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Sale of land, houses, apartments, and luxury villas</li>
            <li>Long-term and short-term property rentals</li>
            <li>Property development – including new morcellements</li>
            <li>Construction of custom homes and luxury residences</li>
            <li>IRS / RES / PDS projects for foreign investors</li>
            <li>Renovation and enhancement of existing properties</li>
          </ul>
        </div>

        {/* Highlight Box */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-12">
          <h3 className="text-xl font-semibold text-blue-700 mb-3">
            Full Support — Every Step of the Way
          </h3>
          <p className="text-gray-700 leading-7">
            From helping you secure a bank loan to assisting with architectural
            plans and project management, we are with you all the way. At
            RealEstateCo Properties, we don’t just close deals — we build
            long-term relationships.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            {/* Icon */}
            <div className="text-blue-600 text-4xl mb-3">💼</div>
            <h4 className="font-semibold text-lg text-gray-800">
              Trusted Expertise
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              A seasoned team with over two decades of market insight and
              professional experience.
            </p>
          </div>
          <div className="text-center">
            <div className="text-blue-600 text-4xl mb-3">🏠</div>
            <h4 className="font-semibold text-lg text-gray-800">
              Full-Service Solutions
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              From land purchase to construction and handover — we manage it
              all.
            </p>
          </div>
          <div className="text-center">
            <div className="text-blue-600 text-4xl mb-3">🤝</div>
            <h4 className="font-semibold text-lg text-gray-800">
              Client-First Approach
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              We treat every client like family and every project like our own.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
