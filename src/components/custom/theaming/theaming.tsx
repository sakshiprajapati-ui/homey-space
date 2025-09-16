'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Building2, Hotel, Sun, Moon } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// ✅ Shimmer effect
function Shimmer({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-flex overflow-hidden rounded-2xl">
      <span className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
      {children}
    </span>
  );
}

// ✅ Spotlight background
function SpotlightBG() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute left-1/2 top-[-20%] h-[60vh] w-[60vh] -translate-x-1/2 rounded-full bg-[#6EACDA]/20 blur-3xl" />
      <div className="absolute right-[10%] bottom-[-10%] h-[40vh] w-[40vh] rounded-full bg-[#03346E]/20 blur-3xl" />
      <div className="absolute left-[5%] top-[30%] h-40 w-40 rounded-full bg-[#021526]/40 blur-2xl" />
    </div>
  );
}

// ✅ Radiant border wrapper
function RadiantCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative rounded-2xl p-[2px] bg-gradient-to-r from-[#03346E] via-[#6EACDA] to-[#E2E2B6] animate-border shadow-[0_0_25px_rgba(255,255,255,0.1)]">
      <div className="rounded-2xl bg-[#E2E2B6]/90 dark:bg-[#021526]/90 backdrop-blur text-[#021526] dark:text-[#E2E2B6] h-full">
        {children}
      </div>
      <style jsx>{`
        .animate-border {
          background-size: 300% 300%;
          animation: moveGradient 6s linear infinite;
        }
        @keyframes moveGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}

const variants = [
  {
    title: "PG Living",
    description: "Affordable shared accommodations with meals and utilities included.",
    icon: <Home className="w-10 h-10 text-[#6EACDA]" />,
    category: "Budget",
  },
  {
    title: "Hostel Rooms",
    description: "Budget-friendly options for students and working professionals.",
    icon: <Building2 className="w-10 h-10 text-[#6EACDA]" />,
    category: "Economy",
  },
  {
    title: "Apartments",
    description: "Spacious private apartments with full independence and amenities.",
    icon: <Hotel className="w-10 h-10 text-[#6EACDA]" />,
    category: "Premium",
  },
  {
    title: "House",
    description: "Affordable shared accommodations with meals and utilities included.",
    icon: <Home className="w-10 h-10 text-[#6EACDA]" />,
    category: "Budget",
  },  
];

export default function ThemingPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const filteredVariants = variants.filter(v => {
    const matchesSearch = v.title.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "all" || v.category === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className={`relative min-h-screen px-6 py-12 transition-colors ${
      darkMode 
        ? "bg-gradient-to-br from-[#021526] via-[#03346E] to-black text-[#E2E2B6]" 
        : "bg-gradient-to-br from-[#E2E2B6] via-white to-[#6EACDA]/20 text-[#021526]"}`
    }>
      <SpotlightBG />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#6EACDA] to-[#E2E2B6]"
        >
          Theming for PG / Hostel / Apartment Variants
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-2xl mx-auto mb-12 text-[#03346E]/80 dark:text-[#E2E2B6]/70"
        >
          Explore different accommodation styles with unique themes, facilities, and experiences.
        </motion.p>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-12">
          <Input
            placeholder="Search variants..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:w-1/3"
          />

          <Select onValueChange={setFilter} defaultValue="all">
            <SelectTrigger className="w-full sm:w-40">
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="Budget">Budget</SelectItem>
              <SelectItem value="Economy">Economy</SelectItem>
              <SelectItem value="Premium">Premium</SelectItem>
            </SelectContent>
          </Select>

          <Button
            variant="outline"
            onClick={() => setDarkMode(!darkMode)}
            className="flex items-center gap-2 border-[#6EACDA] text-[#03346E] dark:text-[#E2E2B6] dark:border-[#6EACDA]"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            {darkMode ? "Light Mode" : "Dark Mode"}
          </Button>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {filteredVariants.map((variant, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
            >
              <RadiantCard>
                <Card className="rounded-2xl shadow-lg bg-transparent border-0">
                  <CardContent className="flex flex-col items-center p-6 space-y-4">
                    {variant.icon}
                    <h3 className="text-xl font-semibold text-[#03346E] dark:text-[#6EACDA]">
                      {variant.title}
                    </h3>
                    <p className="text-center text-[#021526]/80 dark:text-[#E2E2B6]/70">
                      {variant.description}
                    </p>
                    <Shimmer>
                      <Button className="mt-4 bg-gradient-to-r from-[#03346E] to-[#6EACDA] text-white hover:from-[#021526] hover:to-[#6EACDA] rounded-xl">
                        Explore
                      </Button>
                    </Shimmer>
                  </CardContent>
                </Card>
              </RadiantCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
