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
      "Schedule a convenient time online or bring your electric bike straight to our service center.",
    badgeVariant: "primary",
  },
  {
    number: "02",
    title: "Comprehensive Inspection",
    description:
      "Our technicians perform a multi-point electrical and mechanical diagnostic with a clear upfront quote.",
    badgeVariant: "secondary",
  },
  {
    number: "03",
    title: "Precision Repair",
    description:
      "Certified specialists service your ride using quality parts, controller checks, and rigorous testing.",
    badgeVariant: "primary",
  },
  {
    number: "04",
    title: "Quality Check & Pick Up",
    description:
      "Take a quick test ride when you pick up to ensure your bike feels brand new before hitting the road.",
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
