import type { Metadata } from "next";
import { ContactHeader } from "@/components/contact-header";
import { Contact7 } from "@/components/contact7";
import { SendMessage } from "@/components/send-message";

export const metadata: Metadata = {
  title: "Contact Us & Showroom Location",
  description:
    "Get in touch with Sleek E-Bikes. Visit our showroom at Hospital Road by East, call us at 08148362220, or send a direct WhatsApp message to schedule a test ride or service.",
  keywords: [
    "Sleek E-Bikes contact number",
    "electric bike showroom Hospital Road",
    "buy electric motorcycle WhatsApp",
    "Sleek E-Bikes customer support",
    "test ride electric bike Nigeria",
  ],
  openGraph: {
    title: "Contact Sleek E-Bikes | Showroom & WhatsApp Support",
    description:
      "Visit our showroom or chat with us on WhatsApp to inquire about prices, schedule a test ride, or book maintenance.",
    url: "https://sleekebikes.vercel.app/contact",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main>
      <ContactHeader />
      <Contact7 />
      <SendMessage />
    </main>
  );
}
