import React from "react";
import Head from "next/head";
import Link from "next/link";

interface BlogPostTemplateProps {
  title: string;
  date: string;
  location: string;
  heroImage: string;
  tags: string[];
  children: React.ReactNode;
}

export default function BlogPostTemplate({
  title,
  date,
  location,
  heroImage,
  tags,
  children,
}: BlogPostTemplateProps) {
  return (
    <>
      <Head>
        <title>{title} - Joey Seto</title>
        <meta name="description" content={title} />
      </Head>

      <article className="bg-white">
        {/* Hero Image */}
        <div className="relative h-[60vh] w-full">
          <img
            src={heroImage}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

          {/* Title overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 lg:p-16">
            <div className="max-w-4xl mx-auto">
              <div className="text-white/80 text-sm mb-2 flex items-center gap-4">
                <span>📍 {location}</span>
                <span>•</span>
                <span>📅 {date}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                {title}
              </h1>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto px-6 py-12">
          {/* Tags */}
          <div className="flex gap-2 mb-8 flex-wrap">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Article content */}
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            {children}
          </div>

          {/* Back to home */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition"
            >
              ← Back to all stories
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}