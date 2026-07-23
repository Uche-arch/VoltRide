import { Feature43 } from "@/components/feature43";
import { Hero1 } from "@/components/hero1";
import { BikeCard } from "@/components/bike-card";
import { Testimonial9 } from "@/components/testimonial9";
import { Faq1 } from "@/components/faq1";

export default function Home() {
  return (
    <>
      <Hero1></Hero1>
      <Feature43></Feature43>
      <div className="py-16 md:py-20 lg:py-24">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          {/* <div className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-orange-600">
            Our Top 3 Picks
          </span>
          <h2 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Tested and Trusted.
          </h2>
          <p className="mt-3 text-base text-slate-600 sm:text-lg">
            Carefully selected for performance, reliability, and everyday
            riding.
          </p>
        </div> */}
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
          {/* <div className="flex-col items-center md:flex-row md:justify-center gap-6"> */}
          {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto"> */}
          {/* <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:items-stretch gap-6 lg:gap-8"> */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 justify-items-center lg:justify-items-stretch max-w-5xl mx-auto">
            {/* <BikeCard
            title="Cargo Plus 750"
            bestFor="Kids & Groceries"
            imageSrc="/bike4.jpeg" // replace with your image path
            tags={["Class 1/2", "28 mph", "Cadence Sensor"]}
            specs={{
              range: "60 mi",
              battery: "800 Wh",
              topSpeed: "30 km/h",
            }}
            features={[
              "Longtail rack fully ready.",
              "Dual high-capacity battery option.",
              "Heavy-duty kickstand included.",
            ]}
          />
          <BikeCard
            title="Cargo Plus 750"
            bestFor="Kids & Groceries"
            imageSrc="/bike2.jpeg" // replace with your image path
            tags={["Class 1/2", "28 mph", "Cadence Sensor"]}
            specs={{
              range: "60 mi",
              battery: "800 Wh",
              topSpeed: "30 km/h",
            }}
            features={[
              "Longtail rack fully ready.",
              "Dual high-capacity battery option.",
              "Heavy-duty kickstand included.",
            ]}
          /> */}
            {/* CARD 1: CARGO & FAMILY */}
            <BikeCard
              title="Cargo Plus 750"
              bestFor="Family & Heavy Hauling"
              imageSrc="/bike4.jpeg"
              tags={["Class 2", "20 mph", "Torque Sensor"]}
              specs={{
                range: "60 mi",
                battery: "800 Wh",
                topSpeed: "20 mph", // ~32 km/h
              }}
              features={[
                "Reinforced longtail rear rack included.",
                "Dual-battery compatible for double the range.",
                "Heavy-duty dual-leg kickstand for easy loading.",
              ]}
            />

            {/* CARD 2: URBAN COMMUTER */}
            <BikeCard
              title="Metro Speed 500"
              bestFor="Daily City Commuting"
              imageSrc="/bike2.jpeg"
              tags={["Class 3", "28 mph", "Cadence Sensor"]}
              specs={{
                range: "45 mi",
                battery: "620 Wh",
                topSpeed: "28 mph", // ~45 km/h
              }}
              features={[
                "Integrated front & rear high-lumen safety lights.",
                "Puncture-resistant Kevlar city tires.",
                "Whisper-quiet belt drive for low maintenance.",
              ]}
            />
          </div>
        </div>
      </div>
      <Testimonial9></Testimonial9>
      <Faq1></Faq1>
    </>
  );
}
