import Image from "next/image";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface ServiceHeaderProps {
  title?: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
  bikeImageSrc?: string;
}

export function ServiceHeader({
  title = "Electric Motorcycle Service & Repairs",
  description = "Keep your ride running at peak performance. From routine tune-ups and battery diagnostics to complex electrical and mechanical repairs, our technicians service both our models and third-party electric bikes.",
  bikeImageSrc = "/background-slit.png",
}: ServiceHeaderProps) {
  return (
    <section className="relative w-full overflow-hidden bg-background py-20 md:py-24 lg:py-26 border-b border-border">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl font-sans">
          {title}
        </h1>

        <p className="mt-4 text-base font-normal text-muted-foreground sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
      </div>

      <div className="absolute right-0 bottom-0 top-0 hidden lg:flex items-center justify-end w-1/3 pointer-events-none">
        <div className="relative h-full w-full max-w-[480px]">
          <Image
            src={bikeImageSrc}
            alt="E-Bike Service"
            fill
            className="object-contain object-right-bottom"
            priority
          />
        </div>
      </div>
    </section>
  );
}
