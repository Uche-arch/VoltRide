


import Image from "next/image"
import Link from "next/link"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface ContactHeaderProps {
  title?: string
  description?: string
  breadcrumbs?: BreadcrumbItem[]
  bikeImageSrc?: string
}

export function ContactHeader({
  title = "We’re Here to Support Your Ride",
  description = "Have questions about our Sleek E-Bikes, want to schedule a test ride, or need to book a maintenance or 6-month warranty service? Reach out to our team—we're ready to help you get moving.",
  breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Contact" },
  ],
  bikeImageSrc = "/background-slit.png",
}: ContactHeaderProps) {
  return (
    <section className="relative w-full overflow-hidden bg-background py-20 md:py-24 lg:py-26 border-b border-border">
      {/* Main Content Center Container */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        {/* Main Title */}
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl font-sans">
          {title}
        </h1>

        {/* Subtitle / Description */}
        <p className="mt-4 text-base font-normal text-muted-foreground sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
      </div>

      {/* Bike Image Attached to Right Edge */}
      <div className="absolute right-0 bottom-0 top-0 hidden lg:flex items-center justify-end w-1/3 pointer-events-none">
        <div className="relative h-full w-full max-w-[480px]">
          <Image
            src={bikeImageSrc}
            alt="Contact Us"
            fill
            className="object-contain object-right-bottom"
            priority
          />
        </div>
      </div>
    </section>
  )
}