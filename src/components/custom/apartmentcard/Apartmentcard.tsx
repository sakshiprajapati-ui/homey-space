"use client";
import Image from "next/image";
import { motion } from "framer-motion";

type ApartmentCardProps = {
  image: string;
  title: string;
  location: string;
  price: number;
};

export default function ApartmentCard({
  image,
  title,
  location,
  price,
}: ApartmentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="relative rounded-2xl overflow-hidden group"
    >
      {/* Radiant Animated Border */}
      <div className="absolute inset-0 rounded-2xl p-[3px] bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-border animate-pulseGlow"></div>

      {/* Card with dark gradient background */}
      <div className="relative rounded-2xl bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 shadow-2xl overflow-hidden">
        {/* Image */}
        <div className="relative w-full h-56 rounded-t-2xl overflow-hidden">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="text-sm text-gray-300">{location}</p>
          <p className="text-sky-400 font-bold mt-2">₹ {price} / month</p>
        </div>
      </div>

      {/* Styles for gradient animation + glow */}
      <style jsx>{`
        .animate-border {
          background-size: 300% 300%;
          animation: moveGradient 6s linear infinite;
        }

        .animate-pulseGlow {
          filter: blur(6px);
          opacity: 0.85;
          animation: moveGradient 6s linear infinite, pulseGlow 4s ease-in-out infinite;
        }

        @keyframes moveGradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes pulseGlow {
          0%,
          100% {
            filter: blur(6px);
            opacity: 0.7;
          }
          50% {
            filter: blur(12px);
            opacity: 1;
          }
        }
      `}</style>
    </motion.div>
  );
}
