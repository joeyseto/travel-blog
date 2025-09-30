import type { NextPage } from "next";
import Head from "next/head";
import TripCard from "@/components/TripCard";

const BC: NextPage = () => {
  return (
    <>
      <Head>
        <title>British Columbia - Joey Seto Travel</title>
        <meta
          name="description"
          content="Explore British Columbia with Joey Seto. Hiking, cities, and hidden gems in Canada."
        />
      </Head>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">British Columbia</h1>
        <p className="text-gray-700 text-lg mb-8 text-center">
          Explore British Columbia's stunning landscapes, vibrant cities, and coastal gems with Joey Seto.
        </p>

        {/* Example nested trips in BC */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TripCard
            title="Vancouver"
            description="Urban adventures, food scene, and nearby mountains."
            image="/images/bc-vancouver.jpg"
            link="/at-home/bc/vancouver"
          />
          <TripCard
            title="Whistler"
            description="Skiing, mountain biking, and alpine landscapes."
            image="/images/bc-whistler.jpg"
            link="/at-home/bc/whistler"
          />
          <TripCard
            title="Tofino"
            description="Surfing, beaches, and rainforest hikes."
            image="/images/bc-tofino.jpg"
            link="/at-home/bc/tofino"
          />
        </div>
      </section>
    </>
  );
};

export default BC;
