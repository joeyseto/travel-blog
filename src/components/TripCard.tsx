import Link from "next/link";

type TripCardProps = {
  title: string;
  description: string;
  image: string;
  link: string;
};

export default function TripCard({ title, description, image, link }: TripCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h4 className="text-xl font-semibold mb-2">{title}</h4>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link
          href={link}
          className="text-blue-600 font-semibold hover:underline"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
}
