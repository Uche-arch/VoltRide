// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import { cn } from "@/lib/utils";

// interface FaqItem {
//   id: string;
//   question: string;
//   answer: string;
//   className?: string;
// }

// interface Faq1Props {
//   heading?: string;
//   items?: FaqItem[];
//   className?: string;
// }

// const Faq1 = ({
//   heading = "Frequently Asked Questions",
//   items = [
//     {
//       id: "faq-1",
//       question: "Who is this framework designed for?",
//       answer:
//         "The Presence Method is structured specifically for high-functioning professionals, executives, and founders who face severe digital distraction and heavy cognitive overload. It is engineered for those who require intense focus to handle high-stakes execution.",
//     },
//     {
//       id: "faq-2",
//       question: "How is this different from typical time-management or productivity apps?",
//       answer:
//         "Most frameworks treat productivity as an emotional problem or suggest a new software tool to track tasks. We treat focus as an architecture. We do not focus on fuzzy time-blocking; we focus on nervous system regulation, setting rigid technical focus boundaries, and building sustainable energy systems.",
//     },
//     {
//       id: "faq-3",
//       question: "What is the expected timeline to see a structural change in my daily routine?",
//       answer:
//         "Initial focus boundaries and tactical digital adjustments can clear immediate cognitive clutter within the first 48 hours. Deep lifestyle habits and sustainable daily planning architectures generally take 3 to 4 weeks of strict structural implementation to become entirely automatic.",
//     },
//     {
//       id: "faq-4",
//       question: "Is there custom configuration or personal advisory available?",
//       answer:
//         "Yes. While our core toolkits and guides provide a self-directed foundational setup, we take on a limited number of custom workflow audits and strategic system consultations for qualified enterprise leaders and founders each quarter.",
//     },
//     {
//       id: "faq-5",
//       question: "What does the upcoming Focus & Follow-Through Toolkit include?",
//       answer:
//         "Our flagship toolkit is a comprehensive system featuring advanced personal architecture blueprints, specialized performance tracking protocols, nervous system stabilization guides, and custom layout frameworks to build a completely distraction-free workspace.",
//     },
//   ],
//   className,
// }: Faq1Props) => {
//   return (
//     <section className={cn("py-16 md:py-20 lg:py-24 flex justify-center", className)}>
//       <div className="container">
//         <div className="mx-auto max-w-5xl">
//           <h1 className="mb-4 text-3xl font-semibold md:mb-11 md:text-4xl">
//             {heading}
//           </h1>
//           <Accordion type="single" collapsible>
//             {items.map((item, index) => (
//               <AccordionItem key={index} value={`item-${index}`}>
//                 <AccordionTrigger className="font-semibold hover:no-underline">
//                   {item.question}
//                 </AccordionTrigger>
//                 <AccordionContent className="text-muted-foreground">
//                   {item.answer}
//                 </AccordionContent>
//               </AccordionItem>
//             ))}
//           </Accordion>
//         </div>
//       </div>
//     </section>
//   );
// };

// export { Faq1 };

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
        "Depending on the model, terrain, rider weight, and pedal-assist level used, our e-bikes typically offer a range of 45 to 60+ miles on a full charge. Utilizing Eco mode on flat roads maximizes battery distance.",
    },
    {
      id: "faq-2",
      question: "How long does it take to fully charge the battery?",
      answer:
        "A full charge takes approximately 3.5 to 4.5 hours from empty using the included fast charger. The battery is easily removable, allowing you to plug it into any standard household wall outlet at home or in the office.",
    },
    {
      id: "faq-3",
      question: "Do I need a special license, registration, or insurance to ride?",
      answer:
        "In most regions, our Class 1, 2, and 3 e-bikes do not require a driver's license, registration, or license plate to operate. They adhere to standard bicycle traffic laws, meaning you can ride them on roads, designated bike lanes, and paved trails.",
    },
    {
      id: "faq-4",
      question: "What kind of warranty comes with the e-bike?",
      answer:
        "Every e-bike comes backed by our 2-year comprehensive factory warranty. This covers major components including the frame, motor, battery, display console, and electronic wiring against manufacturing defects.",
    },
    {
      id: "faq-5",
      question: "Can I ride in the rain or clean my e-bike with water?",
      answer:
        "Yes! All electrical components—including the motor, battery housing, and display—are IPX6 water-resistant, making them fully safe for riding in rainy weather. You can wipe down the frame with a damp cloth, though high-pressure jet washing should be avoided.",
    },
    {
      id: "faq-6",
      question: "Can I test ride a bike or get it serviced locally?",
      answer:
        "Absolutely. You can schedule a free test ride directly through our website or book a service appointment at our local workshop for routine tune-ups, tire swaps, and battery health checks.",
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
          <p className="text-muted-foreground lg:text-lg">Find answers to common questions about our e-bikes and performance.</p>
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