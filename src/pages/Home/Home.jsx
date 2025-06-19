import PropertyCards from "./PropertyCards";
import Expertise from "./Expertise";
import ContactForm from "./ContactForm";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-10 space-y-16">
      <PropertyCards />
      <Expertise />
      <section className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-4">
            We help you buy or sell your property quickly
          </h2>
          <p>
            Engage with our professional real estate agents to sell, buy or rent
            your house, land, apartment, building or villa in Mauritius.
          </p>
          <p className="mt-2">
            Whatever the type of properties you are trying to buy, rent or sell,
            we are here to help you throughout your journey.
          </p>
        </div>
        <ContactForm />
      </section>
    </main>
  );
}
