import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-zinc-950">
      {/* Background image */}
      <div className="absolute inset-0 opacity-70">
        <img
          src="/images/bc.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
         
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-white mb-2 leading-none">
            Becoming Backcountry.<br />
            
          </h1>
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px w-16 bg-white/50"></div>
            <p className="text-lg md:text-xl text-gray-300 font-light">
              The only guide you need to explore one step, paddle, or bite at a time
            </p>
            <div className="h-px w-16 bg-white/50"></div>
          </div>
          <Link href="/explore">
            <motion.div
              className="inline-block px-12 py-5 border-2 border-white text-white font-bold tracking-widest hover:bg-white hover:text-black transition-all duration-300 uppercase text-sm cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}