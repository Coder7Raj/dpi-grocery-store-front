import { useState } from "react";

export default function AboutUs() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");

  const openModal = (src) => {
    setModalImageSrc(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImageSrc("");
  };

  return (
    <div className="text-gray-800">
      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white p-4 rounded-lg shadow-lg max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={modalImageSrc}
              alt="Groofi enlarged"
              className="w-full rounded-lg"
            />
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4 text-green-700">About Groofi</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Welcome to <span className="font-semibold">Groofi</span> – your go-to
          destination for fresh groceries and delicious food delivered with love
          and care.
        </p>
      </section>

      {/* Our Story */}
      <section className="py-12 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <img
          src="https://i.postimg.cc/J0B5tbv8/g-p-1.jpg"
          alt="Groofi team"
          className="w-full rounded-2xl shadow-lg cursor-pointer"
          onClick={() => openModal("https://i.postimg.cc/J0B5tbv8/g-p-1.jpg")}
        />
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-green-600">
            Our Story
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Groofi was born from a passion for fresh, local produce and
            delicious home-style food. We believe shopping for essentials should
            be simple, reliable, and enjoyable. That’s why we built Groofi –
            combining tech with a love for good food to deliver right to your
            doorstep.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-12 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-green-700">
            Our Mission
          </h2>
          <p className="max-w-2xl mx-auto text-gray-700">
            To make fresh groceries and quality food accessible to every home –
            quickly, safely, and sustainably.
          </p>
        </div>
        <img
          className="w-full rounded-2xl shadow-lg cursor-pointer"
          src="https://i.postimg.cc/YSqV0s3w/g-p-2.jpg"
          alt="GrooFi team"
          onClick={() => openModal("https://i.postimg.cc/YSqV0s3w/g-p-2.jpg")}
        />
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center text-green-700">
          Why Choose Groofi?
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
          {[
            {
              icon: "🛒",
              title: "Fresh Daily Picks",
              desc: "Handpicked produce and essentials, restocked every morning.",
            },
            {
              icon: "🚚",
              title: "Fast Delivery",
              desc: "Get your orders delivered on-time, every time.",
            },
            {
              icon: "💚",
              title: "Sustainably Sourced",
              desc: "We partner with local farmers and suppliers.",
            },
          ].map(({ icon, title, desc }, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition"
            >
              <div className="text-4xl mb-3">{icon}</div>
              <h3 className="text-xl font-semibold text-green-600 mb-2">
                {title}
              </h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Quote */}
      <section className="py-8 px-6 text-center">
        <p className="italic text-green-700 text-lg">
          "At Groofi, we don't just deliver food - we deliver joy and
          freshness."
        </p>
      </section>
    </div>
  );
}
