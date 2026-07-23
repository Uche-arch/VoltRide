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
      "High-torque brushless motors deliver smooth, whisper-quiet acceleration the second you hit the pedals.",
  },
  {
    icon: <Sparkles className="size-6" />,
    title: "Sleek Ergonomic Frame",
    description:
      "Lightweight, aircraft-grade aluminum frames engineered for maximum comfort, durability, and modern style.",
  },
  {
    icon: <ShieldCheck className="size-6" />,
    title: "All-Weather Safety & Control",
    description:
      "Precision hydraulic disc brakes and high-lumen integrated LED lights keep you safe in any condition.",
  },
  {
    icon: <Cpu className="size-6" />,
    title: "Smart Assist Sensing",
    description:
      "Intelligent torque sensors measure your pedal input in real time to deliver a natural, effortless assist.",
  },
  {
    icon: <Mountain className="size-6" />,
    title: "All-Terrain Capability",
    description:
      "Puncture-resistant tires and custom front suspension glide over steep hills, city potholes, and rough trails.",
  },
  {
    icon: <BatteryCharging className="size-6" />,
    title: "Extended-Range Battery",
    description:
      "Removable high-capacity lithium cells engineered to take you up to 60+ miles on a single charge.",
  },
  {
    icon: <PackagePlus className="size-7" />,
    title: "Modular Cargo Ready",
    description:
      "Integrated mounting points let you easily attach panniers, rear racks, and child seats for any trip.",
  },
  {
    icon: <Leaf className="size-7" />,
    title: "Zero-Emission Commuting",
    description:
      "Bypass morning traffic, cut your carbon footprint, and eliminate gas costs without breaking a sweat.",
  },
  {
    icon: <Gauge className="size-7" />,
    title: "Smart Display Console",
    description:
      "Monitor your speed, trip range, battery percentage, and assist level at a single high-visibility glance.",
  },
  {
    icon: <Sliders className="size-7" />,
    title: "Dynamic Ride Modes",
    description:
      "Switch on the fly between Eco, Tour, and Sport modes to tune power output to your exact route.",
  },
  {
    icon: <PlugZap className="size-7" />,
    title: "Fast Portable Charging",
    description:
      "Pop out the lightweight battery and fully recharge in under 4 hours using any standard wall outlet.",
  },
  {
    icon: <Award className="size-6" />,
    title: "Comprehensive Warranty",
    description:
      "Ride with absolute confidence knowing your motor, frame, and battery are backed by full factory warranty.",
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
