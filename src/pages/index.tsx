import Head from "next/head";
import Hero from "@/components/Hero";
import FeaturedTripsBanner from "@/components/FeaturedTripsBanner";
import StoriesGrid from "@/components/StoriesGrid";
import Comments from "@/components/Comments";

export default function Home() {
  const trips = [
    
    { id: 1, title: "Backpacking", image: "/images/ab.jpg" },
    { id: 2, title: "Portaging", image: "/images/at-home-canada.JPG" },
    { id: 3, title: "Food", image: "/images/us-tx.jpg" },
    { id: 4, title: "International", image: "/images/abroad-travel.jpg" },

  ];

  return (
    <>
      <Head>
        <title>Joey Seto - Travel Blog</title>
      </Head>
      <Hero />
      <FeaturedTripsBanner trips={trips} />
      <StoriesGrid />
    </>
  );
}