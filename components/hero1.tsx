// import { ArrowRight, ArrowUpRight } from "lucide-react";

// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";

// interface Image {
//   src: string;
//   alt: string;
//   srcDark?: string;
// }
// interface Button {
//   text: string;
//   url: string;
//   icon?: React.ReactNode;
// }
// interface Buttons {
//   primary?: Button;
//   secondary?: Button;
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
// }

// interface Hero1Props extends HeroBasicProps {}
// type Props = Partial<Hero1Props>;

// const defaultProps: Hero1Props = {
//   badge: {
//     text: "Changelog v1.1",
//     announcement: "Check out our latest updates",
//   },
//   heading: "Blocks Built With Shadcn & Tailwind",
//   description:
//     "Finely crafted components built with React, Tailwind and shadcn/ui. Developers can copy and paste these blocks directly into their project.",
//   buttons: {
//     primary: {
//       text: "Browse Components",
//       url: "https://shadcnblocks.com",
//     },
//     secondary: {
//       text: "View GitHub",
//       url: "https://shadcnblocks.com",
//     },
//   },
//   image: {
//     src: "/hero-bike.png",
//     srcDark: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/saas-hero/saas-hero-1-16x9-dark.png",
//     alt: "Hero Image Placeholder",
//   },
// };

// const Hero1 = (props: Props) => {
//   const { badge, heading, description, buttons, image, className } = {
//     ...defaultProps,
//     ...props,
//   };

//   return (
//     <section className={cn("py-32", className)}>
//       <div className="container mx-auto">
//         <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
//           <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
//             {/* {badge && (
//               <Badge variant="outline">
//                 {badge.text}
//                 <ArrowUpRight className="size-4" />
//               </Badge>
//             )} */}
//             <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-pretty md:text-5xl lg:max-w-3xl lg:text-6xl">
//               {heading}
//             </h1>
//             <p className="max-w-5xl text-balance text-muted-foreground lg:text-xl">
//               {description}
//             </p>
//             <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
//               {buttons?.primary && (
//                 <Button asChild size="lg" className="w-full sm:w-auto">
//                   <a href={buttons.primary.url}>
//                     {buttons.primary.text}
//                     <ArrowRight className="size-4" />
//                   </a>
//                 </Button>
//               )}
//               {buttons?.secondary && (
//                 <Button
//                   asChild
//                   variant="outline"
//                   size="lg"
//                   className="w-full sm:w-auto"
//                 >
//                   <a href={buttons.secondary.url}>{buttons.secondary.text}</a>
//                 </Button>
//               )}
//             </div>
//           </div>
//           {image.srcDark ? (
//             <>
//               <img
//                 src={image.src}
//                 alt={image.alt}
//                 className="aspect-video w-full rounded-md border border-border object-cover object-top dark:hidden"
//               />
//               <img
//                 src={image.srcDark}
//                 alt={image.alt}
//                 className="hidden aspect-video w-full rounded-md border border-border object-cover object-top dark:block"
//               />
//             </>
//           ) : (
//             <img
//               src={image.src}
//               alt={image.alt}
//               className=" w-full rounded-md border border-border object-cover object-top"
//             />
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export { Hero1 };

// import { ArrowRight, ArrowUpRight } from "lucide-react";

// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";

// interface Image {
//   src: string;
//   alt: string;
//   srcDark?: string;
// }
// interface Button {
//   text: string;
//   url: string;
//   icon?: React.ReactNode;
// }
// interface Buttons {
//   primary?: Button;
//   secondary?: Button;
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
//   backgroundSlitSrc?: string; // Added optional prop for your slit image
// }

// interface Hero1Props extends HeroBasicProps {}
// type Props = Partial<Hero1Props>;

// const defaultProps: Hero1Props = {
//   badge: {
//     text: "Changelog v1.1",
//     announcement: "Check out our latest updates",
//   },
//   heading: "Blocks Built With Shadcn & Tailwind",
//   description:
//     "Finely crafted components built with React, Tailwind and shadcn/ui. Developers can copy and paste these blocks directly into their project.",
//   buttons: {
//     primary: {
//       text: "Browse Components",
//       url: "https://shadcnblocks.com",
//     },
//     secondary: {
//       text: "View GitHub",
//       url: "https://shadcnblocks.com",
//     },
//   },
//   image: {
//     src: "/hero-bike.png",
//     srcDark: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/saas-hero/saas-hero-1-16x9-dark.png",
//     alt: "Hero Image Placeholder",
//   },
//   backgroundSlitSrc: "/background-slit.png", // Default path to your background image
// };

// const Hero1 = (props: Props) => {
//   const { badge, heading, description, buttons, image, backgroundSlitSrc, className } = {
//     ...defaultProps,
//     ...props,
//   };

//   return (
//     // 1. ADDED: relative overflow-hidden to contain the background
//     <section className={cn("relative overflow-hidden py-32", className)}>

//       {/* 2. ADDED: Absolute background slit image locked to top right */}
//       {backgroundSlitSrc && (
//         <img
//           src={backgroundSlitSrc}
//           alt=""
//           aria-hidden="true"
//           className="pointer-events-none absolute top-0 right-0 h-full w-[50%] max-w-[700px] object-cover object-right-top z-0"
//         />
//       )}

//       {/* 3. ADDED: relative z-10 so content stays on top of the background */}
//       <div className="container relative z-10 mx-auto">
//         <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
//           <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
//             {/* {badge && (
//               <Badge variant="outline">
//                 {badge.text}
//                 <ArrowUpRight className="size-4" />
//               </Badge>
//             )} */}
//             <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-pretty md:text-5xl lg:max-w-3xl lg:text-6xl">
//               {heading}
//             </h1>
//             <p className="max-w-5xl text-balance text-muted-foreground lg:text-xl">
//               {description}
//             </p>
//             <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
//               {buttons?.primary && (
//                 <Button asChild size="lg" className="w-full sm:w-auto">
//                   <a href={buttons.primary.url}>
//                     {buttons.primary.text}
//                     <ArrowRight className="size-4" />
//                   </a>
//                 </Button>
//               )}
//               {buttons?.secondary && (
//                 <Button
//                   asChild
//                   variant="outline"
//                   size="lg"
//                   className="w-full sm:w-auto"
//                 >
//                   <a href={buttons.secondary.url}>{buttons.secondary.text}</a>
//                 </Button>
//               )}
//             </div>
//           </div>
//           {image.srcDark ? (
//             <>
//               <img
//                 src={image.src}
//                 alt={image.alt}
//                 className="aspect-video w-full rounded-md border border-border object-cover object-top dark:hidden"
//               />
//               <img
//                 src={image.srcDark}
//                 alt={image.alt}
//                 className="hidden aspect-video w-full rounded-md border border-border object-cover object-top dark:block"
//               />
//             </>
//           ) : (
//             <img
//               src={image.src}
//               alt={image.alt}
//               className="w-full rounded-md border border-border object-cover object-top"
//             />
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export { Hero1 };

// import { ArrowRight, ArrowUpRight } from "lucide-react";

// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";

// interface Image {
//   src: string;
//   alt: string;
//   srcDark?: string;
// }
// interface Button {
//   text: string;
//   url: string;
//   icon?: React.ReactNode;
// }
// interface Buttons {
//   primary?: Button;
//   secondary?: Button;
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
//   heading: "Blocks Built With Shadcn & Tailwind",
//   description:
//     "Finely crafted components built with React, Tailwind and shadcn/ui. Developers can copy and paste these blocks directly into their project.",
//   buttons: {
//     primary: {
//       text: "Browse Components",
//       url: "https://shadcnblocks.com",
//     },
//     secondary: {
//       text: "View GitHub",
//       url: "https://shadcnblocks.com",
//     },
//   },
//   image: {
//     src: "/hero-bike.png",
//     srcDark: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/saas-hero/saas-hero-1-16x9-dark.png",
//     alt: "Hero Image Placeholder",
//   },
//   backgroundSlitSrc: "/background-slit.png",
// };

// const Hero1 = (props: Props) => {
//   const { badge, heading, description, buttons, image, backgroundSlitSrc, className } = {
//     ...defaultProps,
//     ...props,
//   };

//   return (
//     <section className={cn("relative py-20 md:py-24 lg:py-26 flex justify-center", className)}>

//      {/* Background Slit */}
// {backgroundSlitSrc && (
//   <img
//     src={backgroundSlitSrc}
//     alt=""
//     aria-hidden="true"
//     className="hidden lg:block pointer-events-none absolute top-0 right-0 h-full w-[55%] max-w-[800px] object-cover object-right-top z-0"
//   />
// )}

//       <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">

//           {/* Left Text Column */}
//           <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
//             <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-pretty md:text-5xl lg:max-w-3xl lg:text-6xl">
//               {heading}
//             </h1>
//             <p className="max-w-5xl text-balance text-muted-foreground lg:text-xl">
//               {description}
//             </p>
//             <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
//               {buttons?.primary && (
//                 <Button asChild size="lg" className="w-full sm:w-auto">
//                   <a href={buttons.primary.url}>
//                     {buttons.primary.text}
//                     <ArrowRight className="size-4" />
//                   </a>
//                 </Button>
//               )}
//               {buttons?.secondary && (
//                 <Button
//                   asChild
//                   variant="outline"
//                   size="lg"
//                   className="w-full sm:w-auto"
//                 >
//                   <a href={buttons.secondary.url}>{buttons.secondary.text}</a>
//                 </Button>
//               )}
//             </div>
//           </div>

//           {/* Right Bike Column (Optimized styling) */}
//           {/* <div className="relative flex w-full items-center justify-center min-h-[350px] md:min-h-[500px] select-none">
//             <img
//               src={image.src}
//               alt={image.alt}
//               className="h-full max-h-[500px] w-auto object-contain object-bottom drop-shadow-[0_25px_35px_rgba(0,0,0,0.18)] transition-transform duration-500 hover:scale-105"
//             />
//           </div> */}
//           {/* Right Bike Column */}
// <div className="relative flex w-full items-center justify-center min-h-[260px] sm:min-h-[360px] md:min-h-[420px] lg:min-h-[500px] select-none">
//   <img
//     src={image.src}
//     alt={image.alt}
//     className="h-auto w-full max-w-[340px] sm:max-w-[480px] md:max-w-[560px] lg:max-w-none lg:max-h-[520px] object-contain object-center drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)] transition-transform duration-500 hover:scale-105"
//   />
// </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export { Hero1 };

"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatsBar } from "@/components/stats-bar";
import { cn } from "@/lib/utils";
import { useState } from "react";
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
    "Finely crafted electric bikes built with power, range and durability. Riders can explore further and commute effortlessly directly through any terrain.",  buttons: {
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
};

const Hero1 = (props: Props) => {
  const { heading, description, buttons, image, backgroundSlitSrc, className } =
    {
      ...defaultProps,
      ...props,
    };
  const [isTestRideOpen, setIsTestRideOpen] = useState(false);

  return (
    <>
      <section
        className={cn(
          "relative flex justify-center py-20 md:py-24 lg:py-26",
          className,
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

              {/* Buttons */}
              <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
                {buttons?.primary && (
                  <Button
                    asChild
                    size="lg"
                    className="w-full sm:w-auto "
                    onClick={() => setIsTestRideOpen(true)}
                  >
                    <a href={buttons.primary.url}>
                      {buttons.primary.text}
                      {/* <ArrowRight className="size-4" /> */}
                    </a>
                  </Button>
                )}
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
      <GlobalTestRideModal
        open={isTestRideOpen}
        onOpenChange={setIsTestRideOpen}
      />
    </>
  );
};

export { Hero1 };
