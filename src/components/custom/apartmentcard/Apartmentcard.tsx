"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type ApartmentCardProps = {
  image: string;
  title: string;
  location: string;
  price: number;
};

export default function ApartmentCard({ image, title, location, price }: ApartmentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="relative rounded-2xl overflow-hidden group transform scale-80" 
      // <-- scale-80 reduces size by 20% on all screens
    >
      {/* Radiant animated border */}
      <div className="absolute inset-0 rounded-2xl p-[6px] bg-gradient-to-r from-[#021526] via-[#03346E] to-[#6EACDA] animate-border animate-pulseGlow"></div>

      {/* Card content */}
      <div className="relative bg-gradient-to-br from-[#021526] via-[#021526] to-[#03346E] rounded-2xl shadow-2xl overflow-hidden">
        <div className="relative w-full h-56">
          <Image src={image} alt={title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#021526]/80 via-[#021526]/40 to-transparent"></div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-[#E2E2B6]">{title}</h3>
          <p className="text-sm text-[#6EACDA]">{location}</p>
          <p className="text-[#6EACDA] font-bold mt-2">₹ {price} / month</p>
        </div>
      </div>

      <style jsx>{`
        .animate-border {
          background-size: 300% 300%;
          animation: moveGradient 6s linear infinite;
        }

        .animate-pulseGlow {
          filter: blur(8px);
          opacity: 0.85;
          animation: moveGradient 6s linear infinite, pulseGlow 4s ease-in-out infinite;
        }

        @keyframes moveGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes pulseGlow {
          0%, 100% { filter: blur(6px); opacity: 0.7; }
          50% { filter: blur(12px); opacity: 1; }
        }
      `}</style>
    </motion.div>
  );
}
