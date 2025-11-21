"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface Trip {
  id: number;
  title: string;
  image: string;
}

interface FeaturedTripsBannerProps {
  trips: Trip[];
}

const FeaturedTripsBanner: React.FC<FeaturedTripsBannerProps> = ({ trips }) => {
  const router = useRouter();

  const handleClick = (trip: Trip) => {
    const slug = trip.title.toLowerCase().replace(/\s+/g, "-");
    router.push(`/explore?filter=${encodeURIComponent(trip.title)}`);
  };

  return (
    <div className="relative w-full py-12 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="flex justify-center gap-10 scrollbar-hide px-6">
        {trips.map((trip) => (
          <motion.div
            key={trip.id}
            className="flex-shrink-0 relative rounded-full cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 50, damping: 12 }}
            onClick={() => handleClick(trip)}
          >
            <img
              src={trip.image}
              alt={trip.title}
              className="w-[12vw] h-[12vw] object-cover rounded-full shadow-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center px-4">
              <span className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-full text-base font-semibold tracking-wide text-center block">
                {trip.title}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedTripsBanner;
