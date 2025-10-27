import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[80vh] md:h-[88vh]">
      <Image
        src="/images/hero-travel.jpg"
        alt="Hero"
        fill
        className="object-cover brightness-75"
        priority
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight max-w-4xl">
          Adventures with Joey Seto
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl text-gray-100/90">
          Real stories, practical guides, and photos from Canada, the US, and abroad.
        </p>
        <a
          href="#featured"
          className="mt-8 inline-block bg-white text-gray-900 px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-100 transition"
        >
          Explore Trips
        </a>
      </div>
    </section>
  );
}
