import type { Metadata } from "next";
import { Feature43 } from "@/components/feature43";
import { Hero1 } from "@/components/hero1";
import { BikeCard } from "@/components/bike-card";
import { Testimonial9 } from "@/components/testimonial9";
import { Faq1 } from "@/components/faq1";

export const metadata: Metadata = {
  title: "Sleek E-Bikes | High-Performance Electric Motorcycles & Maintenance",
  description:
    "Discover Nigeria's premier high-performance electric bikes. Save on fuel with 100km battery range, 120km/h top speed, 2-3 hour fast charge, and official warranty servicing.",
  keywords: [
    "Sleek E-Bikes",
    "electric bikes Nigeria",
    "electric motorcycle Lagos",
    "buy e-bike Nigeria",
    "delivery electric motorcycle",
    "fuel-saving motorcycles",
    "e-bike repair shop",
  ],
  openGraph: {
    title: "Sleek E-Bikes | High-Performance Electric Motorcycles",
    description:
      "Cut fuel costs completely. High-speed, heavy-duty electric motorcycles built for smooth commuting and commercial deliveries with full warranty support.",
    url: "https://sleekebikes.vercel.app/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sleek Utility Pro Electric Motorcycle",
      },
    ],
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <Hero1 />
      <Feature43 />
      <div className="py-16 md:py-20 lg:py-24">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="mb-10 text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Our Top Picks
            </span>
            <h2 className="mt-1 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Tested and Trusted.
            </h2>
            <p className="mt-3 text-base text-muted-foreground sm:text-lg">
              Carefully selected for performance, reliability, and everyday
              riding.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 justify-items-center lg:justify-items-stretch max-w-5xl mx-auto">
            {/* CARD 1: UTILITY & DELIVERIES */}
            <BikeCard
              title="Sleek Utility Pro"
              bestFor="Deliveries & Heavy Hauling"
              imageSrc="/bike4.jpeg"
              tags={["Heavy Duty", "120 km/h", "Permit Ready"]}
              specs={{
                range: "100 km",
                battery: "Fast Charge",
                topSpeed: "120 km/h",
              }}
              features={[
                "Heavy-duty rear cargo rack for commercial hauling.",
                "Reinforced crash guards for maximum frame protection.",
                "Precision front disc brakes and tubeless tires.",
              ]}
            />

            {/* CARD 2: DAILY COMMUTER */}
            <BikeCard
              title="Sleek City Cruiser"
              bestFor="Daily Activities & Commuting"
              imageSrc="/bike2.jpeg"
              tags={["Waterproof", "100 km Range", "6-Mo Warranty"]}
              specs={{
                range: "100 km",
                battery: "2-3 hr Charge",
                topSpeed: "120 km/h",
              }}
              features={[
                "Fully waterproof design for riding safely in the rain.",
                "Ultra-fast charging from 0% to 100% in 2 to 3 hours.",
                "Back-to-back coverage with a full 6-month warranty.",
              ]}
            />
          </div>
        </div>
      </div>
      <Testimonial9 />
      <Faq1 />
    </>
  );
}