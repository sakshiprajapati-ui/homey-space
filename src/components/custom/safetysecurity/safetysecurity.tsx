"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ShieldCheck,
  Camera,
  BellRing,
  Lock,
  FileCheck,
  Users,
  PhoneCall,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Shimmer for buttons
function Shimmer({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-flex overflow-hidden rounded-2xl">
      <span className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
      {children}
    </span>
  );
}

// Radiant Border Wrapper with theme colors
function RadiantCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative rounded-2xl p-[2px] bg-gradient-to-r from-[#021526] via-[#03346E] to-[#6EACDA] animate-border shadow-[0_0_25px_rgba(255,255,255,0.15)]">
      <div className="rounded-2xl bg-white/90 backdrop-blur text-gray-900 h-full">
        {children}
      </div>
      <style jsx>{`
        .animate-border {
          background-size: 300% 300%;
          animation: moveGradient 6s linear infinite;
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
      `}</style>
    </div>
  );
}

const features = [
  {
    icon: ShieldCheck,
    title: "Verified Listings",
    desc: "Every PG/Hostel/Apartment is identity-checked and manually reviewed.",
  },
  {
    icon: Camera,
    title: "CCTV & Access Logs",
    desc: "Listings highlight on-premise cameras and gated entries where available.",
  },
  {
    icon: BellRing,
    title: "Emergency Support",
    desc: "Quick-contact for guards/wardens and in-app SOS links.",
  },
  {
    icon: Lock,
    title: "Secure Payments",
    desc: "PCI-compliant checkout with refundable deposits tracked in-app.",
  },
  {
    icon: FileCheck,
    title: "Digital Agreements",
    desc: "E-sign rental terms with timestamped audit trails.",
  },
  {
    icon: Users,
    title: "Background Checks",
    desc: "Optional KYC for tenants and hosts to build trust.",
  },
];

export default function SafetySecuritySection({
  variant = "default",
}: {
  variant?: "pg" | "hostel" | "apartment" | "default";
}) {
  const variantText = {
    pg: "Our PGs are checked for warden availability, food hygiene, and sharing facilities.",
    hostel:
      "Hostels are reviewed for student safety, curfew policies, and study environments.",
    apartment:
      "Apartments highlight gated communities, family-friendly spaces, and maintenance.",
    default:
      "We combine verification, on-ground checks, and secure technology to make your PG/Hostel/Apartment search stress-free.",
  };

  return (
    <RadiantCard>
      {/* Section background with your palette */}
      <section className="relative mx-auto max-w-7xl scroll-mt-24 rounded-3xl p-6 md:p-10 bg-gradient-to-tr from-[#021526] via-[#03346E] to-[#6EACDA]">
        {/* Header */}
        <div className="mb-8 flex flex-col items-start gap-3 md:mb-12 md:flex-row md:items-center md:justify-between">
          <div>
            <Badge
              variant="secondary"
              className="mb-3 rounded-full bg-white/30 text-white backdrop-blur"
            >
              Safety & Security
            </Badge>
            <h2 className="text-2xl font-semibold tracking-tight md:text-4xl text-white drop-shadow">
              Live safer with verified homes & trusted hosts
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-white/90 md:text-base">
              {variantText[variant]}
            </p>
          </div>

          <div className="flex gap-2">
            <Shimmer>
              <Button
                asChild
                className="rounded-2xl bg-[#6EACDA] text-[#021526] hover:bg-[#E2E2B6]"
              >
                <Link href="/safety-policy">View Safety Policy</Link>
              </Button>
            </Shimmer>
            <Button
              asChild
              variant="outline"
              className="rounded-2xl bg-white/20 text-white border-white/40"
            >
              <Link href="/contact">
                <PhoneCall className="mr-2 h-4 w-4" /> 24/7 Helpline
              </Link>
            </Button>
          </div>
        </div>

        {/* Trust Bar */}
        <div className="mb-10 grid grid-cols-2 gap-3">
          {[
            { label: "Verified Homes", value: "12k+" },
            { label: "Host Checks", value: "8k+" },
            { label: "Cities", value: "140+" },
            { label: "Avg. Rating", value: "4.7/5" },
          ].map((item) => (
            <RadiantCard key={item.label}>
              <div className="text-center p-4">
                <div className="text-xl font-bold md:text-2xl text-[#03346E]">
                  {item.value}
                </div>
                <div className="text-xs text-gray-700 md:text-sm">
                  {item.label}
                </div>
              </div>
            </RadiantCard>
          ))}
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
            >
              <RadiantCard>
                <Card className="group h-full rounded-2xl border-0 shadow-sm bg-transparent">
                  <CardHeader className="flex flex-row items-center gap-3">
                    <div className="rounded-xl bg-[#E2E2B6]/80 p-2 text-[#021526]">
                      <f.icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-base md:text-lg text-[#03346E]">
                      {f.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-700">{f.desc}</p>
                  </CardContent>
                </Card>
              </RadiantCard>
            </motion.div>
          ))}
        </div>
      </section>
    </RadiantCard>
  );
}
