import TripCard from "./TripCard";

const FEATURED = [
  {
    title: "British Columbia",
    description: "Mountains, coastlines, and culture.",
    image: "/images/bc.jpg",
    link: "/at-home/bc",
  },
  {
    title: "Japan",
    description: "Temples, trains, and timeless traditions.",
    image: "/images/japan.jpg",
    link: "/abroad/japan",
  },
  {
    title: "California",
    description: "Beaches, road trips, and national parks.",
    image: "/images/us-ca.jpg",
    link: "/us/ca",
  },
];

export default function FeaturedGrid() {
  return (
    <section id="featured" className="py-16 max-w-7xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Featured Destinations</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURED.map((item) => (
          <TripCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}
