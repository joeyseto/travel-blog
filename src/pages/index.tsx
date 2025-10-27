import Head from "next/head";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedGrid from "@/components/FeaturedGrid";
import StoriesGrid from "@/components/StoriesGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Joey Seto — Travel</title>
        <meta name="description" content="Travel stories, guides, and photos by Joey Seto." />
      </Head>

      <Navbar />
      <main>
        <Hero />
        <FeaturedGrid />
        <StoriesGrid />
      </main>
      <Footer />
    </>
  );
}
