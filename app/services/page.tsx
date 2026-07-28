import type { Metadata } from "next";
import { ServiceHeader } from "@/components/service-header";
import { ServiceProcess } from "@/components/service-process";
import { ServicesGrid } from "@/components/services-grid";
import { WarrantyService } from "@/components/warranty-service";
import { WhatWeService } from "@/components/what-we-service";

export const metadata: Metadata = {
  title: "E-Bike Repairs & Maintenance Services",
  description:
    "Expert maintenance, battery diagnostics, controller checks, and 6-month warranty servicing for Sleek E-Bikes and third-party electric motorcycles.",
  keywords: [
    "e-bike repair Nigeria",
    "electric bike maintenance",
    "e-bike battery testing",
    "electric motorcycle warranty service",
    "Sleek E-Bikes repair shop",
  ],
  openGraph: {
    title: "Electric Bike Maintenance & Repair Services | Sleek E-Bikes",
    description:
      "Keep your electric bike running smooth with expert diagnostics, OEM parts, and official warranty servicing.",
    url: "https://sleekebikes.com/services",
  },
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <main>
      <ServiceHeader />
      {/* <ServicesGrid></ServicesGrid> */}
      <ServiceProcess></ServiceProcess>
      <WhatWeService></WhatWeService>
      <WarrantyService></WarrantyService>
    </main>
  );
}
