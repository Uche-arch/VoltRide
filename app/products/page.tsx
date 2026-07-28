import type { Metadata } from "next";
import { BikeModelCarousel, BikeModel } from "@/components/bike-model-carousel";

export const metadata: Metadata = {
  title: "Electric Bikes & Motorcycles Lineup | Buy High-Performance E-Bikes",
  description:
    "Explore Sleek E-Bikes' performance lineup. Featuring 100km battery range, 120km/h top speed, 2-3 hour fast charging, and a 6-month factory warranty for ₦1,300,000.",
  keywords: [
    "buy electric bike Nigeria",
    "Sleek E-Bikes price",
    "electric motorcycle 100km range",
    "fast charge electric bike",
    "waterproof electric motorcycle",
    "cargo electric bike",
    "Sleek Utility Pro",
  ],
  openGraph: {
    title: "Electric Bikes & Motorcycles Lineup | Sleek E-Bikes",
    description:
      "Heavy-duty, waterproof electric motorcycles built for daily commuting and deliveries. 100km range, 120km/h speed, and 2-3 hour fast charge.",
    url: "https://sleekebikes.com/products",
  },
  alternates: {
    canonical: "/products",
  },
};

const BIKE_MODELS: BikeModel[] = [
  {
    id: "sleek-utility-pro",
    name: "Sleek Utility Pro",
    tagline:
      "Heavy-duty electric performance for daily activities and commercial deliveries.",
    price: "₦1,300,000",
    specs: {
      speed: "120 km/h",
      range: "100 km",
      chargeTime: "2-3 hrs",
      motor: "Electric Motor",
    },
    images: ["/bike1.jpeg", "/bike3.jpeg", "/bike4.jpeg"],
  },
  {
    id: "sleek-city-cruiser",
    name: "Sleek City Cruiser",
    tagline:
      "Waterproof, rain-ready urban commuter built for smooth daily rides.",
    price: "₦1,300,000",
    specs: {
      speed: "120 km/h",
      range: "100 km",
      chargeTime: "2-3 hrs",
      motor: "Electric Motor",
    },
    images: ["/bike2.jpeg", "/bike1.jpeg"],
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-background py-16 text-foreground">
      <div className="container mx-auto max-w-6xl space-y-12 px-4">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Engineered to Move You
          </h1>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">
            Explore our performance lineup and find the perfect electric
            motorcycle for your journey.
          </p>
        </div>

        {/* Carousel 1 */}
        <BikeModelCarousel model={BIKE_MODELS[0]} />

        {/* Carousel 2 */}
        <BikeModelCarousel model={BIKE_MODELS[1]} />
      </div>
    </main>
  );
}