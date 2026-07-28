import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { cn } from "@/lib/utils";

interface Contact7Props {
  title?: string;
  description?: string;
  emailLabel?: string;
  emailDescription?: string;
  email?: string;
  officeLabel?: string;
  officeDescription?: string;
  officeAddress?: string;
  phoneLabel?: string;
  phoneDescription?: string;
  phone?: string;
  chatLabel?: string;
  chatDescription?: string;
  chatLink?: string;
  className?: string;
}

const Contact7 = ({
  title = "Contact Us",
  description = "Have questions about our electric bikes, test rides, or warranty services? Reach out through any of the channels below.",
  emailLabel = "Email",
  emailDescription = "We respond to all inquiries within 24 hours.",
  email = "nwankerenduuzodinma@gmail.com",
  officeLabel = "Showroom & Office",
  officeDescription = "Visit us to view our lineup and take a test ride.",
  officeAddress = "Hospital Road by East, close to Cherubim and Seraphim Church",
  phoneLabel = "Phone",
  phoneDescription = "Mon - Sat: 8:00 AM - 6:00 PM",
  phone = "08148362220",
  chatLabel = "WhatsApp Support",
  chatDescription = "Chat with our team directly for instant support.",
  chatLink = "https://wa.me/2348148362220",
  className,
}: Contact7Props) => {
  return (
    <section
      className={cn("py-16 md:py-20 lg:py-24 flex justify-center", className)}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14">
            {/* <h1 className="mb-4 text-4xl font-medium tracking-tight md:text-5xl">
              {title}
            </h1> */}
            <p className="text-muted-foreground">{description}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl bg-muted/50 p-8">
              <Mail className="mb-4 size-5 text-muted-foreground" />
              <p className="mb-1 font-medium">{emailLabel}</p>
              <p className="mb-4 text-sm text-muted-foreground">
                {emailDescription}
              </p>
              <a href={`mailto:${email}`} className="hover:underline">
                {email}
              </a>
            </div>
            <div className="rounded-xl bg-muted/50 p-8">
              <MapPin className="mb-4 size-5 text-muted-foreground" />
              <p className="mb-1 font-medium">{officeLabel}</p>
              <p className="mb-4 text-sm text-muted-foreground">
                {officeDescription}
              </p>
              <a href="#" className="hover:underline">
                {officeAddress}
              </a>
            </div>
            <div className="rounded-xl bg-muted/50 p-8">
              <Phone className="mb-4 size-5 text-muted-foreground" />
              <p className="mb-1 font-medium">{phoneLabel}</p>
              <p className="mb-4 text-sm text-muted-foreground">
                {phoneDescription}
              </p>
              <a href={`tel:${phone}`} className="hover:underline">
                {phone}
              </a>
            </div>
            <div className="rounded-xl bg-muted/50 p-8">
              <MessageCircle className="mb-4 size-5 text-muted-foreground" />
              <p className="mb-1 font-medium">{chatLabel}</p>
              <p className="mb-4 text-sm text-muted-foreground">
                {chatDescription}
              </p>
              <a
                href={chatLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Start WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Contact7 };
