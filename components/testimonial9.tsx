// components/Testimonials.tsx
"use client";

import { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Star, MessageSquarePlus } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LeaveReviewModal } from "@/components/LeaveReviewModal";

interface TestimonialItem {
  id?: string;
  _id?: string;
  name: string;
  content: string;
  role?: string;
  rating?: number;
}

const defaultTestimonials: TestimonialItem[] = [
  {
    name: "Chuka",
    role: "Daily Rider",
    rating: 5,
    content:
      "omoh boss I really love this bike The fact that it's eletric is so amazing just charge and ride omo it saves me from a lot of stress boss, since I de use am no issues at all Tanks my boss",
  },
  {
    name: "Emeka Okonkwo",
    role: "Delivery Agent",
    rating: 5,
    content:
      "Abeg no fuel money stress again! The heavy-duty rear rack carry all my delivery market without issues. Battery de last well for full day work, just 2 hours charge and I don ready again.",
  },
  {
    name: "Blessing Adebayo",
    role: "Business Owner",
    rating: 5,
    content:
      "Switching to an electric motorcycle is the best financial decision I've made this year. I travel up to 100 km on a full charge and charge time takes under 3 hours. Super reliable!",
  },
];

export function Testimonial9() {
  const [isMounted, setIsMounted] = useState(false);
  const [reviews, setReviews] = useState<TestimonialItem[]>(defaultTestimonials);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchApprovedReviews = async () => {
    try {
      const res = await fetch("/api/reviews");
      const data = await res.json();
      
      if (data.success && data.data.length > 0) {
        const fetchedReviews: TestimonialItem[] = data.data;
        
        // Combine real reviews with default fallbacks
        // New DB reviews come first; defaults fill in the remaining slots up to max capacity
        const combined = [
          ...fetchedReviews,
          ...defaultTestimonials.slice(fetchedReviews.length),
        ];

        setReviews(combined);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    setIsMounted(true);
    fetchApprovedReviews();
  }, []);

  return (
    <section className="py-16 md:py-20 lg:py-24 flex justify-center bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-center text-3xl font-semibold lg:text-5xl text-foreground">
            Loved by Riders Across Nigeria
          </h2>
          <p className="text-muted-foreground lg:text-lg max-w-2xl text-center">
            Real feedback from everyday riders who cut down fuel costs, beat traffic, and made their daily travel effortless.
          </p>
          <Button
            size="lg"
            onClick={() => setIsModalOpen(true)}
            className="mt-2 rounded-lg font-bold flex items-center gap-2"
          >
            {/* <MessageSquarePlus className="h-5 w-5" /> */}
            Leave a Review
          </Button>
        </div>

        <div className="mt-14 w-full">
          {isMounted && (
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 768: 2, 1024: 3 }}
            >
              <Masonry gutter="20px">
                {reviews.map((testimonial, idx) => (
                  <Card 
                    key={testimonial._id || idx} 
                    className="w-full p-5 bg-card border-border shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex justify-between items-start gap-2">
                        <div className="text-sm">
                          <p className="font-medium text-foreground">{testimonial.name}</p>
                          <p className="text-muted-foreground text-xs">
                            {testimonial.role || "Rider"}
                          </p>
                        </div>
                        {/* Star Rating Display */}
                        <div className="flex gap-0.5 shrink-0">
                          {[...Array(testimonial.rating || 5)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 fill-amber-400 text-amber-400"
                            />
                          ))}
                        </div>
                      </div>
                      <div className="mt-3 leading-7 text-muted-foreground">
                        <q>{testimonial.content}</q>
                      </div>
                    </div>
                  </Card>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          )}
        </div>

        <LeaveReviewModal
          open={isModalOpen}
          onOpenChange={setIsModalOpen}
          onSuccess={fetchApprovedReviews}
        />
      </div>
    </section>
  );
}