// import { Card, CardContent } from "@/components/ui/card"

// interface ProcessStep {
//   number: string
//   title: string
//   description: string
//   badgeVariant: "orange" | "black"
// }

// const steps: ProcessStep[] = [
//   {
//     number: "01",
//     title: "Drop Off",
//     description: "Bring your bike to our service center for a professional diagnosis.",
//     badgeVariant: "orange",
//   },
//   {
//     number: "02",
//     title: "Diagnosis",
//     description: "We assess the issue and provide a detailed service quote.",
//     badgeVariant: "black",
//   },
//   {
//     number: "03",
//     title: "Repair",
//     description: "Our certified technicians perform expert repairs and maintenance.",
//     badgeVariant: "orange",
//   },
//   {
//     number: "04",
//     title: "Pick Up",
//     description: "Test ride your bike before you leave to ensure everything feels perfect.",
//     badgeVariant: "black",
//   },
// ]

// export function ServiceProcess() {
//   return (
//     <section className="py-16 md:py-20 lg:py-24 bg-white">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
//         {/* Section Heading & Subtext */}
//         <div className="mb-12 text-center">
//           <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl font-sans">
//             How Our <br className="hidden sm:inline" />
//             Service Process Works
//           </h2>
//           <p className="mt-4 text-base font-normal text-slate-600 sm:text-lg max-w-2xl mx-auto">
//             Professional service and trusted care designed to keep you safe on the road.
//           </p>
//         </div>

//         {/* 4-Step Cards Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {steps.map((step) => (
//             <Card
//               key={step.number}
//               className="border-slate-100 shadow-sm rounded-3xl transition-all duration-300 hover:shadow-md bg-white text-center"
//             >
//               <CardContent className="p-8 flex flex-col items-center justify-start h-full">
//                 {/* Number Badge (Alternating Colors) */}
//                 <div
//                   className={`mb-6 flex h-16 w-16 items-center justify-center rounded-full text-xl font-bold text-white shadow-xs ${
//                     step.badgeVariant === "orange"
//                       ? "bg-orange-500"
//                       : "bg-black"
//                   }`}
//                 >
//                   {step.number}
//                 </div>

//                 {/* Step Title */}
//                 <h3 className="mb-3 text-2xl font-extrabold tracking-tight text-slate-900 font-sans">
//                   {step.title}
//                 </h3>

//                 {/* Step Description */}
//                 <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
//                   {step.description}
//                 </p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "./ui/button";
import Link from "next/link";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  badgeVariant: "primary" | "secondary";
}

const steps: ProcessStep[] = [
  {
    number: "01",
    title: "Book or Drop Off",
    description:
      "Schedule a convenient time online or bring your e-bike straight to our service center.",
    badgeVariant: "primary",
  },
  {
    number: "02",
    title: "Comprehensive Inspection",
    description:
      "Our technicians perform a multi-point digital and mechanical diagnostic with a clear upfront quote.",
    badgeVariant: "secondary",
  },
  {
    number: "03",
    title: "Precision Repair",
    description:
      "Certified specialists service your bike using OEM parts, factory firmware updates, and rigorous testing.",
    badgeVariant: "primary",
  },
  {
    number: "04",
    title: "Quality Check & Pick Up",
    description:
      "Take a quick test ride when you pick up to ensure your bike feels brand new before hit the road.",
    badgeVariant: "secondary",
  },
];

export function ServiceProcess() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl font-sans">
            How Our <br className="hidden sm:inline" />
            Service Process Works
          </h2>
          <p className="mt-4 text-base font-normal text-muted-foreground sm:text-lg max-w-2xl mx-auto">
            Professional service and trusted care designed to keep you safe on
            the road.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <Card
              key={step.number}
              className="border shadow-sm rounded-lg transition-all duration-300 bg-card text-card-foreground text-center"
            >
              <CardContent className="p-8 flex flex-col items-center justify-start h-full">
                <div
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-full text-xl font-bold ${
                    step.badgeVariant === "primary"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  {step.number}
                </div>

                <h3 className="mb-3 text-2xl font-extrabold tracking-tight text-foreground font-sans">
                  {step.title}
                </h3>

                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Button size="lg" asChild>
            <Link href="/contact">Book a Service</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
