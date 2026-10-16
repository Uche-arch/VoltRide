// "use client";

// import { ArrowRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { StatsBar } from "@/components/stats-bar";
// import { cn } from "@/lib/utils";
// import { useState } from "react";
// import { GlobalTestRideModal } from "@/components/global-test-ride-modal";

// interface Image {
//   src: string;
//   alt: string;
//   srcDark?: string;
// }
// interface ButtonType {
//   text: string;
//   url: string;
//   icon?: React.ReactNode;
// }
// interface Buttons {
//   primary?: ButtonType;
//   secondary?: ButtonType;
// }
// interface Badge {
//   text: string;
//   announcement?: string;
//   url?: string;
// }

// interface HeroBasicProps {
//   badge?: Badge;
//   heading: string;
//   description: string;
//   buttons?: Buttons;
//   image: Image;
//   className?: string;
//   backgroundSlitSrc?: string;
// }

// interface Hero1Props extends HeroBasicProps {}
// type Props = Partial<Hero1Props>;

// const defaultProps: Hero1Props = {
//   badge: {
//     text: "Changelog v1.1",
//     announcement: "Check out our latest updates",
//   },
//   heading: "Built For Speed & Performance",
//   description:
//     "Finely crafted electric bikes built with power, range and durability. Riders can explore further and commute effortlessly directly through any terrain.",
//   buttons: {
//     primary: {
//       text: "Schedule a Test Ride",
//       url: "#",
//     },
//     secondary: {
//       text: "View Products",
//       url: "/products",
//     },
//   },
//   image: {
//     src: "/hero-bike.png",
//     srcDark:
//       "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/saas-hero/saas-hero-1-16x9-dark.png",
//     alt: "Hero Image Placeholder",
//   },
//   backgroundSlitSrc: "/background-slit.png",
// };

// const Hero1 = (props: Props) => {
//   const { heading, description, buttons, image, backgroundSlitSrc, className } =
//     {
//       ...defaultProps,
//       ...props,
//     };
//   const [isTestRideOpen, setIsTestRideOpen] = useState(false);

//   return (
//     <>
//       <section
//         className={cn(
//           "relative flex justify-center py-20 md:py-24 lg:py-26",
//           className,
//         )}
//       >
//         {/* Background Slit */}
//         {backgroundSlitSrc && (
//           <img
//             src={backgroundSlitSrc}
//             alt=""
//             aria-hidden="true"
//             className="pointer-events-none absolute right-0 top-0 z-0 hidden h-full w-[55%] max-w-[800px] object-cover object-right-top lg:block"
//           />
//         )}

//         <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
//             {/* Left Text Column */}
//             <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
//               <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-pretty md:text-5xl lg:max-w-3xl lg:text-6xl">
//                 {heading}
//               </h1>
//               <p className="max-w-5xl text-balance text-muted-foreground lg:text-xl">
//                 {description}
//               </p>

//               {/* Buttons */}
//               <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
//                 {buttons?.primary && (
//                   <Button
//                     asChild
//                     size="lg"
//                     className="w-full sm:w-auto "
//                     onClick={() => setIsTestRideOpen(true)}
//                   >
//                     <a href={buttons.primary.url}>
//                       {buttons.primary.text}
//                       {/* <ArrowRight className="size-4" /> */}
//                     </a>
//                   </Button>
//                 )}
//                 {buttons?.secondary && (
//                   <Button
//                     asChild
//                     variant="outline"
//                     size="lg"
//                     className="w-full sm:w-auto"
//                   >
//                     <a href={buttons.secondary.url}>{buttons.secondary.text}</a>
//                   </Button>
//                 )}
//               </div>

//               {/* Reusable Glassy Stats Bar Component */}
//               <div className="mt-2 w-full">
//                 <StatsBar />
//               </div>
//             </div>

//             {/* Right Bike Column */}
//             <div className="relative flex min-h-[260px] w-full select-none items-center justify-center sm:min-h-[360px] md:min-h-[420px] lg:min-h-[500px]">
//               <img
//                 src={image.src}
//                 alt={image.alt}
//                 className="h-auto w-full max-w-[340px] object-contain object-center drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)] transition-transform duration-500 hover:scale-105 sm:max-w-[480px] md:max-w-[560px] lg:max-h-[520px] lg:max-w-none"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//       <GlobalTestRideModal
//         open={isTestRideOpen}
//         onOpenChange={setIsTestRideOpen}
//       />
//     </>
//   );
// };

// export { Hero1 };


"use client";

import { useState } from "react";
import { ArrowRight, Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatsBar } from "@/components/stats-bar";
import { cn } from "@/lib/utils";
import { GlobalTestRideModal } from "@/components/global-test-ride-modal";

interface Image {
  src: string;
  alt: string;
  srcDark?: string;
}
interface ButtonType {
  text: string;
  url: string;
  icon?: React.ReactNode;
}
interface Buttons {
  primary?: ButtonType;
  secondary?: ButtonType;
}
interface Badge {
  text: string;
  announcement?: string;
  url?: string;
}

interface HeroBasicProps {
  badge?: Badge;
  heading: string;
  description: string;
  buttons?: Buttons;
  image: Image;
  className?: string;
  backgroundSlitSrc?: string;
  videoSrc?: string; // Added video path prop
}

interface Hero1Props extends HeroBasicProps {}
type Props = Partial<Hero1Props>;

const defaultProps: Hero1Props = {
  badge: {
    text: "Changelog v1.1",
    announcement: "Check out our latest updates",
  },
  heading: "Built For Speed & Performance",
  description:
    "Finely crafted electric bikes built with power, range and durability. Riders can explore further and commute effortlessly directly through any terrain.",
  buttons: {
    primary: {
      text: "Schedule a Test Ride",
      url: "#",
    },
    secondary: {
      text: "View Products",
      url: "/products",
    },
  },
  image: {
    src: "/hero-bike.png",
    srcDark:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/saas-hero/saas-hero-1-16x9-dark.png",
    alt: "Hero Image Placeholder",
  },
  backgroundSlitSrc: "/background-slit.png",
  videoSrc: "/bike-showcase.mp4", // Place your CapCut video inside /public/videos/bike-showcase.mp4
};

const Hero1 = (props: Props) => {
  const {
    heading,
    description,
    buttons,
    image,
    backgroundSlitSrc,
    videoSrc,
    className,
  } = {
    ...defaultProps,
    ...props,
  };

  const [isTestRideOpen, setIsTestRideOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section
        className={cn(
          "relative flex justify-center py-20 md:py-24 lg:py-26",
          className
        )}
      >
        {/* Background Slit */}
        {backgroundSlitSrc && (
          <img
            src={backgroundSlitSrc}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 z-0 hidden h-full w-[55%] max-w-[800px] object-cover object-right-top lg:block"
          />
        )}

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left Text Column */}
            <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
              <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-pretty md:text-5xl lg:max-w-3xl lg:text-6xl">
                {heading}
              </h1>
              <p className="max-w-5xl text-balance text-muted-foreground lg:text-xl">
                {description}
              </p>

              {/* Action Buttons Group */}
              <div className="flex w-full flex-col justify-center gap-3 sm:flex-row sm:flex-wrap lg:justify-start">
                {/* Primary CTA */}
                {buttons?.primary && (
                  <Button
                    size="lg"
                    className="w-full sm:w-auto"
                    onClick={() => setIsTestRideOpen(true)}
                  >
                    {buttons.primary.text}
                  </Button>
                )}

                {/* Secondary CTA */}
                {buttons?.secondary && (
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <a href={buttons.secondary.url}>{buttons.secondary.text}</a>
                  </Button>
                )}

                {/* Video Showcase Button */}
                <Button
                  variant="ghost"
                  size="lg"
                  onClick={() => setIsVideoOpen(true)}
                  className="w-full sm:w-auto gap-2 text-foreground hover:bg-accent hover:text-accent-foreground"
                >
                  <div className="flex size-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Play className="size-3 fill-current" />
                  </div>
                  <span>Watch Showcase</span>
                </Button>
              </div>

              {/* Reusable Glassy Stats Bar Component */}
              <div className="mt-2 w-full">
                <StatsBar />
              </div>
            </div>

            {/* Right Bike Column */}
            <div className="relative flex min-h-[260px] w-full select-none items-center justify-center sm:min-h-[360px] md:min-h-[420px] lg:min-h-[500px]">
              <img
                src={image.src}
                alt={image.alt}
                className="h-auto w-full max-w-[340px] object-contain object-center drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)] transition-transform duration-500 hover:scale-105 sm:max-w-[480px] md:max-w-[560px] lg:max-h-[520px] lg:max-w-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Global Test Ride Modal */}
      <GlobalTestRideModal
        open={isTestRideOpen}
        onOpenChange={setIsTestRideOpen}
      />

      {/* 9:16 Vertical Video Showcase Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md animate-in fade-in duration-200">
          {/* Overlay click to close */}
          <div
            className="absolute inset-0 z-0"
            onClick={() => setIsVideoOpen(false)}
          />

          <div className="relative z-10 w-full max-w-xs sm:max-w-sm overflow-hidden rounded-3xl border border-white/20 bg-black shadow-2xl">
            {/* Close Floating Button */}
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute right-3 top-3 z-20 flex size-9 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition-colors hover:bg-black/90"
              aria-label="Close video"
            >
              <X className="size-5" />
            </button>

            {/* 9:16 Vertical Aspect Ratio Box */}
            <div className="relative aspect-[9/16] w-full bg-black">
              <video
                src={videoSrc}
                controls
                autoPlay
                playsInline
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export { Hero1 };