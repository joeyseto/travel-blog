import { storiesData } from "@/data/storiesData";

export default function StoriesGrid() {
  // Get only the 3 most recent stories
  const recentStories = storiesData.slice(0, 3);

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Recent Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentStories.map((story) => (
            <div key={story.slug} className="bg-white shadow rounded-lg overflow-hidden hover:shadow-md transition">
              <img src={story.image} alt={story.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{story.title}</h3>
                <p className="text-gray-600 mb-4">{story.excerpt}</p>
                <a href={`/stories/${story.slug}`} className="text-blue-600 font-semibold hover:underline">
                  Read Story →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}