import Head from "next/head";
import Hero from "../components/Hero";
import FeaturedTripsBanner from "@/components/FeaturedTripsBanner";
import StoriesGrid from "../components/StoriesGrid";

const trips = [
  { id: 1, title: "Portaging", image: "/images/at-home-canada.JPG" },
  { id: 2, title: "Backpacking", image: "/images/ab.jpg" },
  { id: 3, title: "International travel", image: "/images/abroad-travel.jpg" },
  { id: 4, title: "Food", image: "/images/us-tx.jpg" },
  { id: 5, title: "Life", image: "/images/bc.jpg" },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Joey Seto - Travel Blog</title>
        <meta
          name="description"
          content="Follow Joey Seto on his travel adventures across Canada, the US, and abroad!"
        />
      </Head>

      {/* Hero section */}
      <Hero />

      {/* Featured Trips banner */}
      <FeaturedTripsBanner trips={trips} />

      {/* Stories grid */}
      <StoriesGrid />
    </>
  );
}
