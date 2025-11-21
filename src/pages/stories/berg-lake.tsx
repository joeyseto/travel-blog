import BlogPostTemplate from "@/components/BlogPostTemplate";

export default function BergLakeStory() {
  return (
    <BlogPostTemplate
      title="Backpacking to Berg Lake"
      date="August 22, 2025"
      location="Mount Robson Provincial Park, BC"
      heroImage="/images/bc.jpg"
      tags={["Trip Report", "Backpacking", "Mountains", "Adventure", "Canada"]}
    >
      <div className="text-center py-20 space-y-6">
        <div className="text-6xl">✍️</div>
        <h2 className="text-3xl font-bold text-gray-800">
          Content Coming Soon
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          I'm currently writing about my epic four day backpacking trip to Berg Lake. 
          This story will include a trip report, photos and lessons learned from hiking 
          to one of the most beautiful placesin the Canadian Rockies.
        </p>
        <p className="text-sm text-gray-500 italic">
          Expected publication: Coming soon
        </p>
      </div>
    </BlogPostTemplate>
  );
}