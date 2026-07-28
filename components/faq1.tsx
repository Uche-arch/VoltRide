import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  className?: string;
}

interface Faq1Props {
  heading?: string;
  items?: FaqItem[];
  className?: string;
}

const Faq1 = ({
  heading = "Frequently Asked Questions",
  items = [
    {
      id: "faq-1",
      question: "How far can I travel on a single battery charge?",
      answer:
        "Our electric motorcycles offer a range of up to 100 km on a single full charge, depending on road conditions, speed, and load weight.",
    },
    {
      id: "faq-2",
      question: "How long does it take to fully charge the battery?",
      answer:
        "A full charge takes just 2 to 3 hours from empty using standard electricity setups. You can easily charge it at home, in the shop, or at your office.",
    },
    {
      id: "faq-3",
      question: "Do I need a special permit or government license to ride?",
      answer:
        "Yes, operating these electric motorcycles requires a standard government permit. We provide all necessary documentation upon purchase to make registration straightforward.",
    },
    {
      id: "faq-4",
      question: "What kind of warranty comes with the electric bike?",
      answer:
        "Every ride comes backed by our 6-month comprehensive warranty. This covers major components including factory defects, motor, battery, frame, and electrical systems.",
    },
    {
      id: "faq-5",
      question: "Can I ride in heavy rain or wet conditions?",
      answer:
        "Yes! The electrical system and component housing are fully waterproof, making it completely safe to ride through heavy rain and wet roads.",
    },
    {
      id: "faq-6",
      question: "Can I test ride or get service locally?",
      answer:
        "Absolutely. You can visit our local office at Hospital Road by East (near Cherubim & Seraphim) for test rides, routine maintenance, parts, and battery servicing.",
    },
  ],
  className,
}: Faq1Props) => {
  return (
    <section
      className={cn("py-16 md:py-20 lg:py-24 justify-center flex", className)}
      id="faq"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className=" md:mb-11">
            <h1 className="mb-4 text-3xl font-semibold  md:text-4xl">
              {heading}
            </h1>
            <p className="text-muted-foreground lg:text-lg">
              Find answers to common questions about our e-bikes and
              performance.
            </p>
          </div>

          <Accordion type="single" collapsible className="mt-12">
            {items.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className=" hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export { Faq1 };
