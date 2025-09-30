import type { NextPage } from "next";
import Head from "next/head";
import TripCard from "@/components/TripCard";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Joey Seto - Travel Blog</title>
        <meta
          name="description"
          content="Follow Joey Seto on his travel adventures across Canada, the US, and abroad!"
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white h-screen flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          Adventures with Joey Seto
        </h1>
        <p className="text-xl md:text-2xl mb-6 max-w-2xl">
          Exploring the world one city, beach, and hidden gem at a time. Join me on my journeys across Canada, the US, and abroad!
        </p>
        <a
          href="#featured"
          className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-md shadow hover:bg-gray-100 transition-colors"
        >
          Explore Trips
        </a>
      </section>

      {/* Featured Trips */}
      <section id="featured" className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Featured Trips
        </h2>

        {/* At Home (Canada) */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-gray-700">At Home (Canada)</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TripCard
              title="British Columbia"
              description="Hiking the Rockies, exploring Vancouver's food scene, and discovering hidden coastal towns."
              image="/images/bc.jpg"
              link="/at-home/bc"
            />
            <TripCard
              title="Ontario"
              description="Toronto city adventures, Niagara Falls, and charming countryside escapes."
              image="/images/on.jpg"
              link="/at-home/on"
            />
            <TripCard
              title="Alberta"
              description="Banff National Park, mountain hikes, and unforgettable landscapes."
              image="/images/ab.jpg"
              link="/at-home/ab"
            />
          </div>
        </div>

        {/* US Trips */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-gray-700">US</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TripCard
              title="California"
              description="Road trip along the Pacific Coast Highway, wine tasting in Napa, and exploring San Francisco."
              image="/images/us-ca.jpg"
              link="/us/ca"
            />
            <TripCard
              title="Texas"
              description="Austin live music, Houston museums, and Texas BBQ food adventures."
              image="/images/us-tx.jpg"
              link="/us/tx"
            />
            <TripCard
              title="Hawaii"
              description="Surfing in Oahu, beaches in Maui, and relaxing in tropical paradise."
              image="/images/us-hi.jpg"
              link="/us/hi"
            />
          </div>
        </div>

        {/* Abroad */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-gray-700">Abroad</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TripCard
              title="Japan"
              description="Tokyo's bustling city life, Kyoto temples, and scenic countryside adventures."
              image="/images/japan.jpg"
              link="/abroad/japan"
            />
            <TripCard
              title="Indonesia"
              description="Bali beaches, volcanic landscapes, and cultural experiences across Java."
              image="/images/indonesia.jpg"
              link="/abroad/indonesia"
            />
            <TripCard
              title="Vietnam"
              description="Ha Long Bay cruises, Hanoi street food, and Mekong Delta adventures."
              image="/images/vietnam.jpg"
              link="/abroad/vietnam"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Joey</h2>
          <p className="text-gray-700 text-lg">
            Hi! I’m Joey Seto, a travel enthusiast exploring Canada, the US, and abroad. 
            I share stories, tips, and guides from my journeys—helping fellow travelers discover hidden gems and unforgettable experiences.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
