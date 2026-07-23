// import Image from "next/image";
// import { Card, CardContent } from "@/components/ui/card";
// import { Check, X } from "lucide-react";

// interface WarrantyServiceProps {
//   bikeImageSrc?: string;
// }

// export function WarrantyService({
//   bikeImageSrc = "/images/warranty-bike.png", // Replace with your image path
// }: WarrantyServiceProps) {
//   return (
//     <section className="py-16 md:py-20 lg:py-24 bg-white">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
//         {/* Section Heading & Description */}
//         <div className="mb-10 text-center">
//           <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl font-sans">
//             Warranty Service
//           </h2>
//           <p className="mt-3 text-base font-normal text-slate-600 sm:text-lg max-w-2xl mx-auto">
//             If your e-bike is under warranty, service is free for covered
//             issues.
//           </p>
//         </div>

//         {/* Main Outer Card Container */}
//         <Card className="border border-slate-200/80 shadow-sm rounded-[32px] bg-white overflow-hidden">
//           <CardContent className="p-0">
//             <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
//               {/* Bike Image Column (Left) */}
//               <div className="md:col-span-5 relative h-64 sm:h-80 md:h-full min-h-[280px] bg-slate-50/30 flex items-center justify-center overflow-hidden">
//                 <Image
//                   src={bikeImageSrc}
//                   alt="Warranty Covered E-Bike"
//                   fill
//                   className="object-contain object-left-bottom p-4"
//                   priority
//                 />
//               </div>

//               {/* Coverage Lists Grid (Right) */}
//               <div className="md:col-span-7 p-6 sm:p-10">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
//                   {/* What's Covered */}
//                   <div>
//                     <h3 className="text-2xl font-extrabold tracking-tight text-slate-900 mb-6 font-sans">
//                       What's Covered
//                     </h3>
//                     <ul className="space-y-3.5">
//                       {[
//                         "Manufacturing defects",
//                         "Motor and battery issues",
//                         "Electrical system problems",
//                         "Frame defects",
//                       ].map((item, idx) => (
//                         <li
//                           key={idx}
//                           className="flex items-center gap-3 text-slate-700 font-medium text-base"
//                         >
//                           <Check className="h-4 w-4 shrink-0 text-orange-500 stroke-[3]" />
//                           <span>{item}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   {/* What's Not Covered */}
//                   <div>
//                     <h3 className="text-2xl font-extrabold tracking-tight text-slate-900 mb-6 font-sans">
//                       What's Not Covered
//                     </h3>
//                     <ul className="space-y-3.5">
//                       {[
//                         "Normal wear items",
//                         "Damage from accidents",
//                         "Modifications or misuse",
//                         "Cosmetic damage",
//                       ].map((item, idx) => (
//                         <li
//                           key={idx}
//                           className="flex items-center gap-3 text-slate-700 font-medium text-base"
//                         >
//                           <X className="h-4 w-4 shrink-0 text-slate-900 stroke-[3]" />
//                           <span>{item}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </section>
//   );
// // }

// import Image from "next/image";
// import { Card, CardContent } from "@/components/ui/card";
// import { Check, X } from "lucide-react";

// interface WarrantyServiceProps {
//   bikeImageSrc?: string;
// }

// export function WarrantyService({
//   bikeImageSrc = "/bike3.jpeg",
// }: WarrantyServiceProps) {
//   return (
//     <section className="py-16 md:py-20 lg:py-24 bg-background">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
//         {/* Section Heading & Description */}
//         <div className="mb-10 text-center">
//           <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl font-sans">
//             Warranty Service
//           </h2>
//           <p className="mt-3 text-base font-normal text-muted-foreground sm:text-lg max-w-2xl mx-auto">
//             If your e-bike is under warranty, service is free for covered
//             issues.
//           </p>
//         </div>

//         {/* Main Outer Card Container */}
//         <Card className="p-3 border shadow-sm rounded-lg bg-card text-card-foreground overflow-hidden">
//           <CardContent className="p-0">
//             <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
//               {/* Bike Image Column (Left) */}
//               {/* <div className="md:col-span-5 relative h-64 sm:h-80 md:h-full min-h-[280px] bg-muted/30 flex items-center justify-center overflow-hidden">
//                 <Image
//                   src={bikeImageSrc}
//                   alt="Warranty Covered E-Bike"
//                   fill
//                   className="object-contain object-left-bottom p-4"
//                   priority
//                 />
//               </div> */}
//               {/* <div className="md:col-span-5 relative h-64 sm:h-80 md:h-full min-h-[280px] bg-muted/30 overflow-hidden">
//                 <Image
//                   src={bikeImageSrc}
//                   alt="Warranty Covered E-Bike"
//                   fill
//                   className="object-cover object-center"
//                   priority
//                 />
//               </div> */}
//               <div className="md:col-span-5 relative h-64 sm:h-80 md:h-full min-h-[280px] bg-muted/30 overflow-hidden rounded">
//                 <Image
//                   src={bikeImageSrc}
//                   alt="Warranty Covered E-Bike"
//                   fill
//                   className="scale-105 object-cover object-center transition-transform duration-300 hover:scale-100"
//                   priority
//                 />
//               </div>

//               {/* Coverage Lists Grid (Right) */}
//               <div className="md:col-span-7 p-6 sm:p-10">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
//                   {/* What's Covered */}
//                   <div>
//                     <h3 className="text-2xl font-extrabold tracking-tight text-foreground mb-6 font-sans">
//                       What's Covered
//                     </h3>
//                     <ul className="space-y-3.5">
//                       {[
//                         "Manufacturing defects",
//                         "Motor and battery issues",
//                         "Electrical system problems",
//                         "Frame defects",
//                       ].map((item, idx) => (
//                         <li
//                           key={idx}
//                           className="flex items-center gap-3 text-muted-foreground font-medium text-base"
//                         >
//                           <Check className="h-4 w-4 shrink-0 text-primary stroke-[3]" />
//                           <span className="text-foreground">{item}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   {/* What's Not Covered */}
//                   <div>
//                     <h3 className="text-2xl font-extrabold tracking-tight text-foreground mb-6 font-sans">
//                       What's Not Covered
//                     </h3>
//                     <ul className="space-y-3.5">
//                       {[
//                         "Normal wear items",
//                         "Damage from accidents",
//                         "Modifications or misuse",
//                         "Cosmetic damage",
//                       ].map((item, idx) => (
//                         <li
//                           key={idx}
//                           className="flex items-center gap-3 text-muted-foreground font-medium text-base"
//                         >
//                           <X className="h-4 w-4 shrink-0 text-muted-foreground stroke-[3]" />
//                           <span className="text-foreground">{item}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </section>
//   );
// }


import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Check, X } from "lucide-react";

interface WarrantyServiceProps {
  bikeImageSrc?: string;
}

export function WarrantyService({
  bikeImageSrc = "/bike3.jpeg",
}: WarrantyServiceProps) {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Heading & Description */}
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl font-sans">
            Warranty Coverage
          </h2>
          <p className="mt-3 text-base font-normal text-muted-foreground sm:text-lg max-w-2xl mx-auto">
            100% free service on all active factory warranty claims.
          </p>
        </div>

        {/* Main Outer Card Container */}
        <Card className="p-3 border shadow-sm rounded-lg bg-card text-card-foreground overflow-hidden">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* Bike Image Column (Left) */}
              <div className="md:col-span-5 relative h-64 sm:h-80 md:h-full min-h-[280px] bg-muted/30 overflow-hidden rounded">
                <Image
                  src={bikeImageSrc}
                  alt="Warranty Covered E-Bike"
                  fill
                  className="scale-105 object-cover object-center transition-transform duration-300 hover:scale-100"
                  priority
                />
              </div>

              {/* Coverage Lists Grid (Right) */}
              <div className="md:col-span-7 p-6 sm:p-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {/* What's Covered */}
                  <div>
                    <h3 className="text-2xl font-extrabold tracking-tight text-foreground mb-6 font-sans">
                      What's Covered
                    </h3>
                    <ul className="space-y-3.5">
                      {[
                        "Factory defects",
                        "Motor & battery failure",
                        "Electrical glitches",
                        "Frame structural integrity",
                      ].map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-3 text-muted-foreground font-medium text-base"
                        >
                          <Check className="h-4 w-4 shrink-0 text-primary stroke-[3]" />
                          <span className="text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* What's Not Covered */}
                  <div>
                    <h3 className="text-2xl font-extrabold tracking-tight text-foreground mb-6 font-sans">
                      What's Not Covered
                    </h3>
                    <ul className="space-y-3.5">
                      {[
                        "Tire & brake pad wear",
                        "Accidental impact damage",
                        "Unauthorized mods",
                        "Scratches & paint chips",
                      ].map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-3 text-muted-foreground font-medium text-base"
                        >
                          <X className="h-4 w-4 shrink-0 text-muted-foreground stroke-[3]" />
                          <span className="text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}