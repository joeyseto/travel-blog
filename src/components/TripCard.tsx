import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  image: string;
  link: string;
};

export default function TripCard({ title, description, image, link }: Props) {
  return (
    <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
      <div className="relative w-full h-48 md:h-56">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-600 mb-3">{description}</p>
        <Link href={link} className="text-blue-600 font-medium hover:underline">
          Read More →
        </Link>
      </div>
    </article>
  );
}
