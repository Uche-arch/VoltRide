// import Image from "next/image"
// import Link from "next/link"

// interface BreadcrumbItem {
//   label: string
//   href?: string
// }

// interface ServiceHeaderProps {
//   title?: string
//   description?: string
//   breadcrumbs?: BreadcrumbItem[]
//   bikeImageSrc?: string
// }

// // export function ServiceHeader({
// //   title = "Service & Repairs",
// //   description = "Expert e-bike service and repairs with same-day availability. We proudly service most major e-bike brands.",
// //   breadcrumbs = [
// //     { label: "Home", href: "/" },
// //     { label: "Pages", href: "/pages" },
// //     { label: "Services" },
// //   ],
// //   bikeImageSrc = "/images/header-bike.png", // Replace with your image path
// // }: ServiceHeaderProps) {
// //   return (
// //     <section className="relative w-full overflow-hidden bg-[#FAF6F0] py-20 md:py-24 lg:py-26">
// //       {/* Decorative Geometric Icon (Left) */}

// //       {/* Main Content Center Container */}
// //       <div className="container relative z-10 mx-auto mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
// //         {/* Main Title */}
// //         <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl font-sans">
// //           {title}
// //         </h1>

// //         {/* Subtitle / Description */}
// //         <p className="mt-4 text-base font-normal text-slate-700 sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
// //           {description}
// //         </p>

// //         {/* Breadcrumb Navigation Pill */}
// //         {/* <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-medium shadow-sm border border-slate-100">
// //           {breadcrumbs.map((item, index) => {
// //             const isLast = index === breadcrumbs.length - 1
// //             const isFirst = index === 0

// //             return (
// //               <div key={index} className="flex items-center gap-2">
// //                 {item.href && !isLast ? (
// //                   <Link
// //                     href={item.href}
// //                     className={
// //                       isFirst
// //                         ? "text-orange-500 hover:text-orange-600 font-semibold"
// //                         : "text-slate-900 hover:text-orange-500"
// //                     }
// //                   >
// //                     {item.label}
// //                   </Link>
// //                 ) : (
// //                   <span className="text-slate-900 font-semibold">
// //                     {item.label}
// //                   </span>
// //                 )}

// //                 {!isLast && <span className="text-slate-400">/</span>}
// //               </div>
// //             )
// //           })}
// //         </div> */}
// //       </div>

// //       {/* Bike Image Attached to Right Edge */}
// //       <div className="absolute right-0 bottom-0 top-0 hidden lg:flex items-center justify-end w-1/3 pointer-events-none">
// //         <div className="relative h-full w-full max-w-[480px]">
// //           <Image
// //             src={bikeImageSrc}
// //             alt="E-Bike Service"
// //             fill
// //             className="object-contain object-right-bottom"
// //             priority
// //           />
// //         </div>
// //       </div>
// //     </section>
// //   )
// export function ServiceHeader({
//   title = "Service & Repairs",
//   description = "Expert e-bike service and repairs with same-day availability. We proudly service most major e-bike brands.",
//   bikeImageSrc = "/images/header-bike.png",
// }: ServiceHeaderProps) {
//   return (
//     <section className="relative w-full overflow-hidden bg-background py-20 md:py-24 lg:py-26 border-b border-border">
//       <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
//         <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl font-sans">
//           {title}
//         </h1>

//         <p className="mt-4 text-base font-normal text-muted-foreground sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
//           {description}
//         </p>
//       </div>

//       <div className="absolute right-0 bottom-0 top-0 hidden lg:flex items-center justify-end w-1/3 pointer-events-none">
//         <div className="relative h-full w-full max-w-[480px]">
//           <Image
//             src={bikeImageSrc}
//             alt="E-Bike Service"
//             fill
//             className="object-contain object-right-bottom"
//             priority
//           />
//         </div>
//       </div>
//     </section>
//   )
// }

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
  title = "Premium E-Bike Service & Repairs",
  description = "Keep your ride running at peak performance. From routine tune-ups and battery diagnostics to complex repairs, our certified technicians offer same-day service for most major e-bike brands.",
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
