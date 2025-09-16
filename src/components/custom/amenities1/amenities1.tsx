"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Home, Building2, Hotel, House } from "lucide-react";

// Animated Gradient Background
function ShimmerBG() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#021526] via-[#03346E]/40 to-[#6EACDA]/30 animate-sectionGradient" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.06),transparent_60%)]" />
      <style jsx>{`
        .animate-sectionGradient {
          background-size: 300% 300%;
          animation: moveSectionGradient 14s ease infinite;
        }

        @keyframes moveSectionGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}

const categories = [
  {
    type: "PG",
    icon: <Home className="w-10 h-10 text-[#6EACDA] animate-pulseGlow" />,
    amenities: ["Shared Rooms", "Wi-Fi", "Meals Included", "Housekeeping", "Study Area"],
  },
  {
    type: "Hostel",
    icon: <Building2 className="w-10 h-10 text-[#6EACDA] animate-pulseGlow" />,
    amenities: ["Dorm Rooms", "Common Kitchen", "Wi-Fi", "Laundry Service", "Recreational Area"],
  },
  {
    type: "Apartment",
    icon: <Hotel className="w-10 h-10 text-[#6EACDA] animate-pulseGlow" />,
    amenities: ["Private Rooms", "Kitchen", "Parking", "Air Conditioning", "24/7 Security"],
  },
  {
    type: "House",
    icon: <House className="w-10 h-10 text-[#6EACDA] animate-pulseGlow" />,
    amenities: ["Entire Property", "Garden", "Garage", "Furnished Rooms", "Pet Friendly"],
  },
];

export default function AmenitiesPage() {
  return (
    <div className="relative min-h-screen px-6 py-16 text-[#E2E2B6]">
      <ShimmerBG />

      {/* Responsive scaling container */}
      <div className="max-w-6xl mx-auto transform scale-95 sm:scale-92 md:scale-90">
        <div className="text-center">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6EACDA] via-[#03346E] to-[#E2E2B6] bg-clip-text text-transparent drop-shadow-lg"
          >
            Amenities for PG / Hostel / Apartment / House
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-[#6EACDA] max-w-2xl mx-auto mb-12"
          >
            Discover the key amenities available across different accommodation types.
          </motion.p>
        </div>

        {/* Amenity Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
            >
              <Card className="rounded-2xl bg-[#021526]/70 backdrop-blur-xl border border-[#03346E]/40 shadow-lg hover:border-[#6EACDA] hover:shadow-[#6EACDA]/20 transition">
                <CardContent className="flex flex-col items-center p-6 space-y-4">
                  {cat.icon}
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-[#6EACDA] to-[#E2E2B6] bg-clip-text text-transparent">
                    {cat.type}
                  </h3>
                  <ul className="text-[#E2E2B6]/80 space-y-2">
                    {cat.amenities.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#E2E2B6]" /> {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-pulseGlow {
          animation: pulseGlow 4s ease-in-out infinite;
        }

        @keyframes pulseGlow {
          0%, 100% {
            filter: drop-shadow(0 0 2px #03346E) drop-shadow(0 0 4px #6EACDA);
            opacity: 0.85;
          }
          50% {
            filter: drop-shadow(0 0 6px #03346E) drop-shadow(0 0 12px #6EACDA);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
