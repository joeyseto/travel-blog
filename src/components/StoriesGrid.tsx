import Image from "next/image";
import Link from "next/link";

const STORIES = [
  { title: "Exploring Kyoto’s Hidden Shrines", img: "/images/kyoto.jpg", href: "/stories/kyoto" },
  { title: "The Coastal Magic of Tofino", img: "/images/tofino.jpg", href: "/stories/tofino" },
  { title: "A Weekend in San Francisco", img: "/images/sf.jpg", href: "/stories/sf" },
];

export default function StoriesGrid() {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Latest Stories</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {STORIES.map((s) => (
            <article key={s.title} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
              <div className="relative w-full h-56">
                <Image src={s.img} alt={s.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <Link href={s.href} className="text-blue-600 font-medium hover:underline">
                  Read Story →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
