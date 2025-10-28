import React from "react";
import TripCard from "./TripCard";

export default function FeaturedGrid() {
  return (
    <section id="featured" className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Featured Trips</h2>

      {/* Canada */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">At Home (Canada)</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TripCard
            title="British Columbia"
            description="Hiking the Rockies and exploring Vancouver's food scene."
            image="/images/bc.jpg"
            link="/at-home/bc"
          />
          <TripCard
            title="Ontario"
            description="Toronto adventures and Niagara Falls getaways."
            image="/images/on.jpg"
            link="/at-home/on"
          />
          <TripCard
            title="Alberta"
            description="Banff National Park and the best mountain trails."
            image="/images/ab.jpg"
            link="/at-home/ab"
          />
        </div>
      </div>

      {/* US */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">US</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TripCard
            title="California"
            description="Road trip along the Pacific Coast Highway."
            image="/images/us-ca.jpg"
            link="/us/ca"
          />
          <TripCard
            title="Texas"
            description="BBQ, music, and museums across the Lone Star State."
            image="/images/us-tx.jpg"
            link="/us/tx"
          />
          <TripCard
            title="Hawaii"
            description="Beaches, volcanoes, and tropical paradise."
            image="/images/us-hi.jpg"
            link="/us/hi"
          />
        </div>
      </div>
    </section>
  );
}
