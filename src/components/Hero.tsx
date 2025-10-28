import React from "react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          Adventures with Joey Seto
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Exploring the world one city, beach, and hidden gem at a time.
        </p>
        <a
          href="#featured"
          className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
        >
          Explore Trips
        </a>
      </div>
    </section>
  );
}
