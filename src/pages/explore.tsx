"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Head from "next/head";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { storiesData } from "@/data/storiesData";

const categories = ["All", "Adventure", "Food", "Culture", "International", "Nature", "Backpacking", "Portaging"];

export default function StoriesExplorer() {
  const searchParams = useSearchParams();
  const filter = searchParams.get("filter");

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("recent");

  // If filter exists in URL, prefill search bar or category
  useEffect(() => {
    if (filter) {
      // If the filter matches a category, select it
      if (categories.includes(filter)) {
        setSelectedCategory(filter);
      } else {
        // Otherwise, treat it as a search term
        setSearchQuery(filter);
      }
    }
  }, [filter]);

  // Filter stories based on category and search
  const filteredStories = storiesData.filter((story) => {
    const matchesCategory =
      selectedCategory === "All" || story.tags.includes(selectedCategory);
    const matchesSearch =
      story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort stories
  const sortedStories = [...filteredStories].sort((a, b) => {
    if (sortBy === "recent") {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else if (sortBy === "oldest") {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    } else if (sortBy === "title") {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });

  return (
    <>
      <Head>
        <title>All Stories - Joey Seto</title>
        <meta name="description" content="Browse all travel stories and adventures" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        {/* Header Section */}
        <div className="bg-zinc-900 text-white py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">All Stories</h1>
            <p className="text-xl text-gray-300">
              Read about my adventures from around the world
            </p>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="sticky top-16 bg-white shadow-md z-40 py-6 px-6">
          <div className="max-w-7xl mx-auto space-y-4">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-black text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search and Sort */}
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Search stories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              >
                <option value="recent">Most Recent</option>
                <option value="oldest">Oldest First</option>
                <option value="title">A-Z</option>
              </select>
            </div>

            {/* Results Count */}
            <p className="text-gray-600 text-sm">
              Showing {sortedStories.length} {sortedStories.length === 1 ? "story" : "stories"}
            </p>
          </div>
        </div>

        {/* Stories Grid */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <AnimatePresence mode="wait">
            {sortedStories.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-20"
              >
                <p className="text-2xl text-gray-500">No stories found</p>
                <p className="text-gray-400 mt-2">Try adjusting your filters or search query</p>
              </motion.div>
            ) : (
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {sortedStories.map((story, index) => (
                  <motion.div
                    key={story.slug}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link href={`/stories/${story.slug}`}>
                      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group h-full flex flex-col">
                        {/* Image */}
                        <div className="relative h-56 overflow-hidden">
                          <img
                            src={story.image}
                            alt={story.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute top-4 right-4">
                            <span className="bg-black/70 text-white px-3 py-1 rounded-full text-xs font-semibold">
                              {story.location}
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 flex-1 flex flex-col">
                          <div className="flex flex-wrap gap-2 mb-3">
                            {story.tags.slice(0, 2).map((tag) => (
                              <span
                                key={tag}
                                className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                            {story.title}
                          </h3>
                          <p className="text-gray-600 mb-4 flex-1">{story.excerpt}</p>
                          <div className="flex items-center justify-between text-sm text-gray-500">
                            <span>{new Date(story.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                            <span className="text-blue-600 font-semibold group-hover:underline">
                              Read Story →
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}