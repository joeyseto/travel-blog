import React from "react";
import { motion } from "framer-motion";

interface Trip {
  id: number;
  title: string;
  image: string;
}

interface FeaturedTripsBannerProps {
  trips: Trip[];
}

const FeaturedTripsBanner: React.FC<FeaturedTripsBannerProps> = ({ trips }) => {
  return (
    <div className="relative w-full overflow-hidden py-6 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="flex justify-center gap-10 overflow-x-auto scrollbar-hide px-6">
        {trips.map((trip) => (
          <motion.div
            key={trip.id}
            className="flex-shrink-0 relative rounded-full cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 50, damping: 12 }}
          >
            <img
              src={trip.image}
              alt={trip.title}
              className="w-[15vw] h-[15vw] object-cover rounded-full shadow-lg"
            />
            {/* Overlay title */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-full text-base font-semibold tracking-wide">
                {trip.title}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedTripsBanner;
