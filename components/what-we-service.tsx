// import { Card, CardContent } from "@/components/ui/card"
// import { Check } from "lucide-react"

// export function WhatWeService() {
//   return (
//     <section className="py-16 md:py-20 lg:py-24 bg-[#FAF6F0]">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
//         {/* Section Heading */}
//         <h2 className="mb-10 text-center text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl font-sans">
//           What We Service
//         </h2>

//         {/* Main Comparison Card */}
//         <Card className="border-0 shadow-sm rounded-[32px] bg-white overflow-hidden">
//           <CardContent className="p-8 sm:p-12">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative">
//               {/* Left Column: Our E-Bikes */}
//               <div className="flex flex-col justify-start">
//                 <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 mb-3 font-sans">
//                   Our E-Bikes
//                 </h3>
//                 <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
//                   Full service and warranty work on all E-Bike models. Priority service for warranty customers.
//                 </p>
//                 <ul className="space-y-3">
//                   {[
//                     "All models covered",
//                     "Warranty Service",
//                     "Software updates",
//                     "Parts in stock",
//                   ].map((item, idx) => (
//                     <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium text-base">
//                       <Check className="h-4 w-4 shrink-0 text-orange-500 stroke-[3]" />
//                       <span>{item}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Vertical Divider (Desktop Only) */}
//               <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-slate-100 -translate-x-1/2" />

//               {/* Right Column: Other E-Bike Brands */}
//               <div className="flex flex-col justify-start pt-6 md:pt-0 border-t border-slate-100 md:border-t-0">
//                 <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 mb-3 font-sans">
//                   Other E-Bike Brands
//                 </h3>
//                 <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
//                   We service most e-bike brands. Call ahead to confirm we can work on your specific model.
//                 </p>
//                 <ul className="space-y-3">
//                   {[
//                     "Electrical diagnostics",
//                     "Battery testing",
//                     "General maintenance",
//                     "Parts sourcing",
//                   ].map((item, idx) => (
//                     <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium text-base">
//                       <Check className="h-4 w-4 shrink-0 text-orange-500 stroke-[3]" />
//                       <span>{item}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </section>
//   )
// }

// import { Card, CardContent } from "@/components/ui/card";
// import { Check } from "lucide-react";
// import { Button } from "./ui/button";
// import Link from "next/link";

// export function WhatWeService() {
//   return (
//     <section className="py-16 md:py-20 lg:py-24 bg-muted/30">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
//         <h2 className="mb-10 text-center text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl font-sans">
//           What We Service
//         </h2>

//         <Card className="border shadow-sm rounded-lg bg-card text-card-foreground overflow-hidden">
//           <CardContent className="p-8 sm:p-12">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative">
//               {/* Left Column */}
//               <div className="flex flex-col justify-start">
//                 <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground mb-3 font-sans">
//                   Our E-Bikes
//                 </h3>
//                 <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
//                   Full service and warranty work on all E-Bike models. Priority
//                   service for warranty customers.
//                 </p>
//                 <ul className="space-y-3">
//                   {[
//                     "All models covered",
//                     "Warranty Service",
//                     "Software updates",
//                     "Parts in stock",
//                   ].map((item, idx) => (
//                     <li
//                       key={idx}
//                       className="flex items-center gap-3 text-foreground font-medium text-base"
//                     >
//                       <Check className="h-4 w-4 shrink-0 text-primary stroke-[3]" />
//                       <span>{item}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Vertical Divider */}
//               <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-border -translate-x-1/2" />

//               {/* Right Column */}
//               <div className="flex flex-col justify-start pt-6 md:pt-0 border-t border-border md:border-t-0">
//                 <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground mb-3 font-sans">
//                   Other E-Bike Brands
//                 </h3>
//                 <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
//                   We service most e-bike brands. Call ahead to confirm we can
//                   work on your specific model.
//                 </p>
//                 <ul className="space-y-3">
//                   {[
//                     "Electrical diagnostics",
//                     "Battery testing",
//                     "General maintenance",
//                     "Parts sourcing",
//                   ].map((item, idx) => (
//                     <li
//                       key={idx}
//                       className="flex items-center gap-3 text-foreground font-medium text-base"
//                     >
//                       <Check className="h-4 w-4 shrink-0 text-primary stroke-[3]" />
//                       <span>{item}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//         <div className="mt-12 flex justify-center">
//           <Button size="lg" asChild>
//             <Link href="/contact">Book a Service</Link>
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// }


import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export function WhatWeService() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <h2 className="mb-10 text-center text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl font-sans">
          Supported Models & Service Compatibility
        </h2>

        <Card className=" shadow-sm rounded-lg bg-card text-card-foreground overflow-hidden">
          <CardContent className="p-8 sm:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative">
              {/* Left Column */}
              <div className="flex flex-col justify-start">
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground mb-3 font-sans">
                  VoltRide Models
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
                  Comprehensive factory maintenance, official warranty coverage, and priority turnaround times for all VoltRide owners.
                </p>
                <ul className="space-y-3">
                  {[
                    "Full factory warranty support",
                    "Official OEM replacement parts in stock",
                    "Firmware & controller software updates",
                    "Priority turnaround for registered owners",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-foreground font-medium text-base"
                    >
                      <Check className="h-4 w-4 shrink-0 text-primary stroke-[3]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Vertical Divider */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-border -translate-x-1/2" />

              {/* Right Column */}
              <div className="flex flex-col justify-start pt-6 md:pt-0 border-t border-border md:border-t-0">
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground mb-3 font-sans">
                  Major E-Bike Brands
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
                  Expert mechanical care and electrical diagnostics for most third-party e-bike brands and custom builds.
                </p>
                <ul className="space-y-3">
                  {[
                    "Multi-brand electrical & motor diagnostics",
                    "Battery health testing & troubleshooting",
                    "Mechanical tune-ups & brake overhauls",
                    "Custom component & accessory sourcing",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-foreground font-medium text-base"
                    >
                      <Check className="h-4 w-4 shrink-0 text-primary stroke-[3]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="mt-12 flex justify-center">
          <Button size="lg" asChild>
            <Link href="/contact">Book a Service</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}