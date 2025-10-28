import React from "react";

export default function StoriesGrid() {
  const stories = [
    {
      title: "Chasing Sunsets in Bali",
      image: "/images/bali.jpg",
      excerpt: "The best beach spots and quiet escapes in Bali.",
      link: "/stories/bali",
    },
    {
      title: "Exploring Tokyo by Train",
      image: "/images/tokyo.jpg",
      excerpt: "Navigating Japan's rail system like a local.",
      link: "/stories/tokyo",
    },
    {
      title: "Hidden Cafes of Vancouver",
      image: "/images/vancouver.jpg",
      excerpt: "Discover cozy, must-visit coffee spots downtown.",
      link: "/stories/vancouver",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Recent Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, i) => (
            <div key={i} className="bg-white shadow rounded-lg overflow-hidden hover:shadow-md transition">
              <img src={story.image} alt={story.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{story.title}</h3>
                <p className="text-gray-600 mb-4">{story.excerpt}</p>
                <a href={story.link} className="text-blue-600 font-semibold hover:underline">
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
