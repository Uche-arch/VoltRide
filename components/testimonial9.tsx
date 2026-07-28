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
  heading: "Loved by Riders Across Nigeria",
  description:
    "Real feedback from everyday riders who cut down fuel costs, beat traffic, and made their daily travel effortless.",
  testimonials: [
    {
      id: "1",
      name: "Chuka",
      username: "chuka_rides",
      date: "2026-03-12",
      role: "Daily Rider",
      avatar:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/avatars/avatar3.jpg",
      content:
        "omoh boss I really love this bike The fact that it's eletric is so amazing just charge and ride omo it saves me from a lot of stress boss, since I de use am no issues at all Tanks my boss",
      link: "#",
      icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/testimonials/social-network-icons/x-icon.svg",
    },
    {
      id: "2",
      name: "Emeka Okonkwo",
      username: "emeka_logistics",
      date: "2026-03-10",
      role: "Delivery Agent",
      avatar:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/avatars/avatar7.jpg",
      content:
        "Abeg no fuel money stress again! The heavy-duty rear rack carry all my delivery market without issues. Battery de last well for full day work, just 2 hours charge and I don ready again.",
      link: "#",
      icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/testimonials/social-network-icons/linkedin-icon.svg",
    },
    {
      id: "3",
      name: "Blessing Adebayo",
      username: "blessing_a",
      date: "2026-03-08",
      role: "Business Owner",
      avatar:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/avatars/avatar12.jpg",
      content:
        "Switching to an electric motorcycle is the best financial decision I've made this year. I travel up to 100 km on a full charge and charge time takes under 3 hours. Super reliable!",
      link: "#",
      icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/testimonials/social-network-icons/x-icon.svg",
    },
    {
      id: "4",
      name: "Tunde Bakare",
      username: "tunde_b",
      date: "2026-03-05",
      role: "City Commuter",
      avatar:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/avatars/avatar18.jpg",
      content:
        "Omo heavy rain beat me yesterday, I think say bike go spoil. Pure lies! The waterproof build is 100% solid, and the tubeless tires balanced nicely on wet roads. Excellent quality.",
      link: "#",
      icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/testimonials/social-network-icons/instagram-icon.svg",
    },
    {
      id: "5",
      name: "Aisha Ibrahim",
      username: "aisha_i",
      date: "2026-03-01",
      role: "Daily Rider",
      avatar:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/avatars/avatar22.jpg",
      content:
        "The speed is super impressive—easily hits up to 120 km/h on the main road. The crash guards give me that extra confidence, and knowing there's a 6-month warranty brings total peace of mind.",
      link: "#",
      icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/testimonials/social-network-icons/linkedin-icon.svg",
    },
    {
      id: "6",
      name: "Femi Danjuma",
      username: "femi_d",
      date: "2026-02-28",
      role: "Bike Owner",
      avatar:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/avatars/avatar25.jpg",
      content:
        "Boss man setup de top tier! No engine noise, no exhaust smoke, no constant mechanic runs. You just charge am, ride, and save money every single day. I highly recommend Sleek E-Bikes.",
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
                        {/* <Avatar className="size-9 rounded-full ring-1 ring-input">
                          <AvatarImage
                            src={testimonial.avatar}
                            alt={testimonial.name}
                          />
                        </Avatar> */}
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
