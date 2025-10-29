import Head from "next/head";
import Hero from "@/components/Hero";
import FeaturedTripsBanner from "@/components/FeaturedTripsBanner";
import FeaturedDealsBanner from "@/components/FeaturedDealsBanner";
import StoriesGrid from "@/components/StoriesGrid";

export default function Home() {
  const trips = [
    { id: 1, title: "Portaging", image: "/images/at-home-canada.JPG" },
    { id: 2, title: "Backpacking", image: "/images/ab.jpg" },
    { id: 3, title: "International travel", image: "/images/abroad-travel.jpg" },
    { id: 4, title: "Food", image: "/images/us-tx.jpg" },
    { id: 5, title: "Life", image: "/images/bc.jpg" },
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