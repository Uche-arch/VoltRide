import {
  Zap,
  Sparkles,
  ShieldCheck,
  Cpu,
  Mountain,
  BatteryCharging,
  PackagePlus,
  Leaf,
  Gauge,
  Sliders,
  PlugZap,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

interface FeatureIconListItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
  href?: string;
}
interface Button {
  text: string;
  url: string;
  icon?: React.ReactNode;
}
interface Buttons {
  primary?: Button;
  secondary?: Button;
}

interface FeatureIconListProps {
  heading: string;
  features?: FeatureIconListItem[];
  buttons?: Buttons;
  className?: string;
}

interface Feature43Props extends FeatureIconListProps {}
type Props = Partial<Feature43Props>;

const defaultProps: Feature43Props = {
  heading: "Engineered for Performance, Built for the Road",
  features: [
    {
      icon: <Zap className="size-6" />,
      title: "Instant Electric Power",
      description:
        "High-torque electric motors deliver smooth, instant acceleration up to 120 km/hr without gas or gear shifts.",
    },
    {
      icon: <Sparkles className="size-6" />,
      title: "Sleek Ergonomic Frame",
      description:
        "Heavy-duty frame construction built with crash guards for maximum durability, rider protection, and modern style.",
    },
    {
      icon: <ShieldCheck className="size-6" />,
      title: "All-Weather Safety & Control",
      description:
        "Precision disc brakes, tubeless tires, and bright lighting keep you completely safe and balanced in any condition.",
    },
    {
      icon: <Cpu className="size-6" />,
      title: "Waterproof Architecture",
      description:
        "Fully sealed, water-resistant electrical system allowing you to ride confidently through rain and wet weather.",
    },
    {
      icon: <Mountain className="size-6" />,
      title: "All-Terrain Capability",
      description:
        "Puncture-resistant tubeless tires and heavy-duty suspension glide easily over potholes, rough roads, and daily routes.",
    },
    {
      icon: <BatteryCharging className="size-6" />,
      title: "Extended-Range Battery",
      description:
        "High-capacity power system engineered to cover up to 100 km distance on a single full charge.",
    },
    {
      icon: <PackagePlus className="size-7" />,
      title: "Heavy-Duty Cargo Ready",
      description:
        "Built-in heavy-duty rear rack designed to carry extra cargo for daily deliveries and commercial haulage.",
    },
    {
      icon: <Leaf className="size-7" />,
      title: "Zero-Emission Commuting",
      description:
        "Bypass traffic, eliminate fuel expenses, and enjoy a clean electric ride for all your daily activities.",
    },
    {
      icon: <Gauge className="size-7" />,
      title: "Smart Display Console",
      description:
        "Monitor your speed, distance, and battery status at a glance with the high-visibility digital console.",
    },
    {
      icon: <Sliders className="size-7" />,
      title: "Permit Ready Ride",
      description:
        "Fully compliant with standard government permits, making it easy to ride anywhere across the country.",
    },
    {
      icon: <PlugZap className="size-7" />,
      title: "Ultra-Fast Charging",
      description:
        "Conveniently power up your battery from 0% to 100% in just 2 to 3 hours using standard charging setups.",
    },
    {
      icon: <Award className="size-6" />,
      title: "6-Month Warranty",
      description:
        "Ride with total peace of mind backed by a 6-month warranty covering motor, battery, frame, and electrical defects.",
    },
  ],
  buttons: {
    primary: {
      text: "View Products",
      url: "/products",
    },
  },
};

const MAX_FEATURES = 6;

const Feature43 = (props: Props) => {
  const { heading, buttons, features, className } = {
    ...defaultProps,
    ...props,
  };
  const items = (features ?? []).slice(0, MAX_FEATURES);

  return (
    <section
      className={cn("py-16 md:py-20 lg:py-24 flex justify-center", className)}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {heading && (
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty lg:text-5xl">
              {heading}
            </h2>
          </div>
        )}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {items.map((feature, i) => (
            <div key={i} className="flex flex-col">
              <div className="mb-5 flex size-16 items-center justify-center rounded-full bg-accent">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-medium">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
        {buttons?.primary?.url && (
          <div className="mt-16 flex justify-center">
            <Button size="lg" asChild>
              <a href={buttons.primary.url}>{buttons.primary.text}</a>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export { Feature43 };
