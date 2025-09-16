"use client";

import ApartmentCard from "@/components/custom/apartmentcard/Apartmentcard";

type Apartment = {
  image: string;
  title: string;
  location: string;
  price: number;
};

export default function ApartmentsSection() {
  const apartments: Apartment[] = [
    { image: "/images/apartment.jpg", title: "Modern 2BHK Apartment", location: "Bangalore, KA", price: 25000 },
    { image: "/images/buildings.jpg", title: "Luxury Studio Flat", location: "Lucknow, UP", price: 8500 },
    { image: "/images/house-model.jpg", title: "Cozy Family Home", location: "Delhi, UP", price: 6700 },
    { image: "/images/livingroom.jpg", title: "Penthouse Suite", location: "Mumbai, MP", price: 56000 },
  ];

  return (
    <section className="relative max-w-6xl mx-auto py-12 px-4 sm:py-16 sm:px-6 md:px-8 overflow-hidden rounded-2xl transform scale-90">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#021526] via-[#03346E]/40 to-[#6EACDA]/30 animate-sectionGradient"></div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-4 sm:mb-6 tracking-tight text-[#E2E2B6]">
          Featured Apartments
        </h2>
        <p className="text-base sm:text-lg text-center text-[#6EACDA] mb-8 sm:mb-12">
          Find your perfect home with curated listings
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {apartments.map((apt, idx) => (
            <ApartmentCard key={idx} {...apt} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-sectionGradient {
          background-size: 300% 300%;
          animation: moveSectionGradient 12s ease infinite;
        }

        @keyframes moveSectionGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
}
