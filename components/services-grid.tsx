import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Zap, ShoppingBag, Check } from "lucide-react";

interface ServiceOption {
  id: string;
  title: string;
  icon: React.ReactNode;
  features: string[];
  startingPrice: string;
}

export const serviceData: ServiceOption[] = [
  {
    id: "general",
    title: "Essential Tune-Up",
    icon: <Wrench className="h-6 w-6 text-primary" />,
    features: [
      "Precision brake adjustment & pad inspection",
      "Full drivetrain cleaning & gear index tuning",
      "Tire pressure check & tube inspection",
      "Chain lubrication & tensioning",
      "Comprehensive multi-point safety check",
    ],
    startingPrice: "$50",
  },
  {
    id: "ebike",
    title: "Complete Electrical & Motor Diagnostic",
    icon: <Zap className="h-6 w-6 text-primary" />,
    features: [
      "Full battery capacity & health diagnostics",
      "Motor performance & torque testing",
      "Display console & controller firmware updates",
      "Wiring harness & connector waterproofing check",
    ],
    startingPrice: "$75",
  },
  {
    id: "parts",
    title: "Upgrades, Parts & Custom Builds",
    icon: <ShoppingBag className="h-6 w-6 text-primary" />,
    features: [
      "OEM replacement battery & charger sourcing",
      "Smart display & throttle upgrades",
      "Cargo rack, fender & light kit installation",
      "Heavy-duty tire & flat-protection swaps",
      "Custom component retrofitting",
    ],
    startingPrice: "$95",
  },
];
export function ServicesGrid() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {serviceData.map((service) => (
            <Card
              key={service.id}
              className="border shadow-sm rounded-lg transition-all duration-300 bg-card text-card-foreground"
            >
              <CardContent className="p-8 flex flex-col justify-between h-full">
                <div>
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-border bg-muted/50">
                    {service.icon}
                  </div>

                  <h3 className="mb-6 text-2xl font-extrabold tracking-tight text-foreground font-sans">
                    {service.title}
                  </h3>

                  <ul className="mb-8 space-y-3">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-muted-foreground font-medium text-base"
                      >
                        <Check className="h-4 w-4 shrink-0 text-primary stroke-[3]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <p className="text-sm font-medium text-muted-foreground mb-1">
                    Starting at:
                  </p>
                  <p className="text-4xl font-extrabold text-primary tracking-tight">
                    {service.startingPrice}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
