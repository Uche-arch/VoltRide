// "use client";

// import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

// import { Avatar, AvatarImage } from "@/components/ui/avatar";
// import { Card } from "@/components/ui/card";

// import { cn } from "@/lib/utils";

// interface TestimonialBasicGridItem {
//   id?: string;
//   name: string;
//   avatar: string;
//   content: string;
//   role?: string;
//   username?: string;
//   date?: string;
//   link?: string;
//   icon?: string;
// }

// interface TestimonialBasicGridProps {
//   heading: string;
//   description: string;
//   testimonials: TestimonialBasicGridItem[];
//   className?: string;
// }

// interface Testimonial9Props extends TestimonialBasicGridProps {}
// type Props = Partial<Testimonial9Props>;

// const defaultProps: Testimonial9Props = {
//   heading: "The Impact of Presence",
//   description:
//     "Observations and feedback from independent professionals who implemented our core focus frameworks during our early testing phases.",
//   testimonials: [
//     {
//       id: "1",
//       name: "Elena Rostova",
//       username: "elenar",
//       date: "2026-03-12",
//       role: "Operations Director",
//       avatar:
//         "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/avatars/avatar3.jpg",
//       content:
//         "Implementing the focus boundaries radically altered my afternoon fatigue. I stopped reacting to every single incoming notification block and actually regained deep mental space to execute key strategic work.",
//       link: "#",
//       icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/testimonials/social-network-icons/x-icon.svg",
//     },
//     {
//       id: "2",
//       name: "Julian Vance",
//       username: "julianv",
//       date: "2026-03-10",
//       role: "Software Founder",
//       avatar:
//         "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/avatars/avatar7.jpg",
//       content:
//         "The Daily Presence Planner completely replaced my chaotic system of keeping fifty open tabs as a task tracker. It's not a fuzzy journaling habit; it's a cold, functional structure for intentional execution.",
//       link: "#",
//       icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/testimonials/social-network-icons/linkedin-icon.svg",
//     },
//     {
//       id: "3",
//       name: "Dr. Amara Okafor",
//       username: "amara_dr",
//       date: "2026-03-08",
//       role: "Clinical Lead",
//       avatar:
//         "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/avatars/avatar12.jpg",
//       content:
//         "As someone managing high-stress healthcare schedules, the emotional regulation protocols gave me a reliable mechanism to calm my nervous system before making critical executive decisions under pressure.",
//       link: "#",
//       icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/testimonials/social-network-icons/x-icon.svg",
//     },
//     {
//       id: "4",
//       name: "Thomas Wright",
//       username: "twright",
//       date: "2026-03-05",
//       role: "Creative Director",
//       avatar:
//         "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/avatars/avatar18.jpg",
//       content:
//         "I was deeply skeptical about another workflow framework, but the focus on attention architecture instead of rigid time-blocking works beautifully for complex creative sprints.",
//       link: "#",
//       icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/testimonials/social-network-icons/instagram-icon.svg",
//     },
//     {
//       id: "5",
//       name: "Chloe Mercer",
//       username: "chloem",
//       date: "2026-03-01",
//       role: "Financial Analyst",
//       avatar:
//         "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/avatars/avatar22.jpg",
//       content:
//         "The Digital Clarity Framework finally solved my cognitive overload. It helped me map out clean technical and environmental boundaries that protected my mind from constant pinging.",
//       link: "#",
//       icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/testimonials/social-network-icons/linkedin-icon.svg",
//     },
//     {
//       id: "6",
//       name: "Marcus Sterling",
//       username: "msterling",
//       date: "2026-02-28",
//       role: "Venture Partner",
//       avatar:
//         "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/avatars/avatar25.jpg",
//       content:
//         "Sustainable routines require system mechanics, not raw motivation. This approach treats lifestyle design exactly like engineering architecture, and that is why it works.",
//       link: "#",
//       icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/testimonials/social-network-icons/x-icon.svg",
//     },
//   ],
// };

// const Testimonial9 = (props: Props) => {
//   const { heading, description, testimonials, className } = {
//     ...defaultProps,
//     ...props,
//   };

//   const list = testimonials.slice(0, 6);

//   return (
//     <section
//       className={cn("py-16 md:py-20 lg:py-24 flex justify-center", className)}
//     >
//       <div className="container mx-auto">
//         <div className="flex flex-col items-center gap-6">
//           <h2 className="text-center text-3xl font-semibold lg:text-5xl">
//             {heading}
//           </h2>
//           <p className="text-muted-foreground lg:text-lg">{description}</p>
//         </div>
//         <div className="mt-14 w-full">
//           <ResponsiveMasonry
//             columnsCountBreakPoints={{ 350: 1, 768: 2, 1024: 3 }}
//           >
//             <Masonry gutter="20px" columnsCount={3}>
//               {list.map((testimonial, idx) => {
//                 return (
//                   <Card key={idx} className="p-5">
//                     <div className="flex justify-between">
//                       <div className="flex gap-4 leading-5">
//                         <Avatar className="size-9 rounded-full ring-1 ring-input">
//                           <AvatarImage
//                             src={testimonial.avatar}
//                             alt={testimonial.name}
//                           />
//                         </Avatar>
//                         <div className="text-sm">
//                           <p className="font-medium">{testimonial.name}</p>
//                           <p className="text-muted-foreground">
//                             {testimonial.role}
//                           </p>
//                         </div>
//                       </div>
//                       {testimonial.icon ? (
//                         <a href={testimonial.link ?? "#"}>
//                           <img
//                             alt="Testimonial source"
//                             src={testimonial.icon}
//                             className="size-4 dark:invert"
//                           />
//                         </a>
//                       ) : null}
//                     </div>
//                     <div className="mt-2 leading-7 text-muted-foreground">
//                       <q>{testimonial.content}</q>
//                     </div>
//                   </Card>
//                 );
//               })}
//             </Masonry>
//           </ResponsiveMasonry>
//         </div>
//       </div>
//     </section>
//   );
// };

// export { Testimonial9 };


"use client";

import { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface TestimonialBasicGridItem {
  id?: string;
  name: string;
  avatar: string;
  content: string;
  role?: string;
  username?: string;
  date?: string;
  link?: string;
  icon?: string;
}

interface TestimonialBasicGridProps {
  heading: string;
  description: string;
  testimonials: TestimonialBasicGridItem[];
  className?: string;
}

interface Testimonial9Props extends TestimonialBasicGridProps {}
type Props = Partial<Testimonial9Props>;

const defaultProps: Testimonial9Props = {
  heading: "Loved by Daily Commuters & Weekend Explorers",
  description:
    "Real stories and feedback from riders who transformed their daily travel, ditched traffic jams, and reclaimed their ride.",
  testimonials: [
    {
      id: "1",
      name: "Elena Rostova",
      username: "elenar_rides",
      date: "2026-03-12",
      role: "Daily Commuter",
      avatar:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/avatars/avatar3.jpg",
      content:
        "Swapping my daily car commute for the Metro Speed 500 completely eliminated my rush-hour stress. I arrive at the office energized, sweat-free, and saving over $200 a month on parking and gas.",
      link: "#",
      icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/testimonials/social-network-icons/x-icon.svg",
    },
    {
      id: "2",
      name: "Julian Vance",
      username: "julian_vance",
      date: "2026-03-10",
      role: "Cargo Bike Owner",
      avatar:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/avatars/avatar7.jpg",
      content:
        "The Cargo Plus 750 is an absolute game-changer for parent life. Dropping off two kids at school and grabbing groceries on the way home used to be a chore—now it’s the best part of our morning.",
      link: "#",
      icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/testimonials/social-network-icons/linkedin-icon.svg",
    },
    {
      id: "3",
      name: "Dr. Amara Okafor",
      username: "amara_cycles",
      date: "2026-03-08",
      role: "Weekend Cyclist",
      avatar:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/avatars/avatar12.jpg",
      content:
        "The pedal assist on steep hills is unbelievably smooth. The torque sensor responds naturally to how hard I pedal—it feels like having super-human legs on long 40-mile weekend rides.",
      link: "#",
      icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/testimonials/social-network-icons/x-icon.svg",
    },
    {
      id: "4",
      name: "Thomas Wright",
      username: "twright_outdoors",
      date: "2026-03-05",
      role: "Trail Rider",
      avatar:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/avatars/avatar18.jpg",
      content:
        "Build quality is top-notch. The hydraulic disc brakes give total control on quick downhill descents, and the suspension handles rough gravel and potholes with ease. Worth every single penny.",
      link: "#",
      icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/testimonials/social-network-icons/instagram-icon.svg",
    },
    {
      id: "5",
      name: "Chloe Mercer",
      username: "chloem_urban",
      date: "2026-03-01",
      role: "City Commuter",
      avatar:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/avatars/avatar22.jpg",
      content:
        "I was worried about charging and battery life, but I easily get 50+ miles on a single charge. Charging the removable battery right at my desk during work is so simple.",
      link: "#",
      icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/testimonials/social-network-icons/linkedin-icon.svg",
    },
    {
      id: "6",
      name: "Marcus Sterling",
      username: "msterling_tech",
      date: "2026-02-28",
      role: "E-Bike Enthusiast",
      avatar:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/avatars/avatar25.jpg",
      content:
        "The integrated lighting system, clear display console, and solid frame geometry make this feel like a luxury vehicle. Hands down the best transportation purchase I’ve made in years.",
      link: "#",
      icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/testimonials/social-network-icons/x-icon.svg",
    },
  ],
};

const Testimonial9 = (props: Props) => {
  const { heading, description, testimonials, className } = {
    ...defaultProps,
    ...props,
  };

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const list = testimonials.slice(0, 6);

  return (
    <section
      className={cn("py-16 md:py-20 lg:py-24 flex justify-center", className)}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-center text-3xl font-semibold lg:text-5xl">
            {heading}
          </h2>
          <p className="text-muted-foreground lg:text-lg">{description}</p>
        </div>
        <div className="mt-14 w-full">
          {isMounted && (
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 768: 2, 1024: 3 }}
            >
              <Masonry gutter="20px" columnsCount={3}>
                {list.map((testimonial, idx) => (
                  <Card key={idx} className="p-5">
                    <div className="flex justify-between">
                      <div className="flex gap-4 leading-5">
                        <Avatar className="size-9 rounded-full ring-1 ring-input">
                          <AvatarImage
                            src={testimonial.avatar}
                            alt={testimonial.name}
                          />
                        </Avatar>
                        <div className="text-sm">
                          <p className="font-medium">{testimonial.name}</p>
                          <p className="text-muted-foreground">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                      {/* {testimonial.icon ? (
                        <a href={testimonial.link ?? "#"}>
                          <img
                            alt="Testimonial source"
                            src={testimonial.icon}
                            className="size-4 dark:invert"
                          />
                        </a>
                      ) : null} */}
                    </div>
                    <div className="mt-2 leading-7 text-muted-foreground">
                      <q>{testimonial.content}</q>
                    </div>
                  </Card>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          )}
        </div>
      </div>
    </section>
  );
};

export { Testimonial9 };