// import {
//   FaFacebook,
//   FaGithub,
//   FaInstagram,
//   FaLinkedin,
//   FaTwitter,
// } from "react-icons/fa";

// import { cn } from "@/lib/utils";

// interface FooterLink {
//   name: string;
//   href: string;
// }
// interface FooterSection {
//   title: string;
//   links: FooterLink[];
// }
// interface FooterLogo {
//   url: string;
//   src: string;
//   alt: string;
//   title: string;
// }

// interface FooterBasicProps {
//   logo?: FooterLogo;
//   description?: string;
//   sections?: FooterSection[];
//   copyright?: string;
//   legalLinks?: FooterLink[];
//   className?: string;
// }

// interface Footer2Props extends FooterBasicProps {
//   logoClassName?: string;
// }
// type Props = Partial<Footer2Props>;

// const defaultProps: Footer2Props = {
//   logo: {
//     url: "https://www.shadcnblocks.com",
//     src: "/images/logo/shadcnblocks-logo-word.svg",
//     alt: "logo",
//     title: "Shadcnblocks.com",
//   },
//   description: "Finely crafted blocks built with Shadcn UI.",
//   sections: [
//     {
//       title: "Product",
//       links: [
//         { name: "Overview", href: "#" },
//         { name: "Pricing", href: "#" },
//         { name: "Marketplace", href: "#" },
//         { name: "Features", href: "#" },
//         { name: "Integrations", href: "#" },
//       ],
//     },
//     {
//       title: "Company",
//       links: [
//         { name: "About", href: "#" },
//         { name: "Team", href: "#" },
//         { name: "Blog", href: "#" },
//         { name: "Careers", href: "#" },
//         { name: "Contact", href: "#" },
//       ],
//     },
//     {
//       title: "Support",
//       links: [
//         { name: "Help center", href: "#" },
//         { name: "Documentation", href: "#" },
//         { name: "Status", href: "#" },
//         { name: "Community", href: "#" },
//       ],
//     },
//     {
//       title: "Resources",
//       links: [
//         { name: "Guides", href: "#" },
//         { name: "Templates", href: "#" },
//         { name: "Sales", href: "#" },
//         { name: "Advertise", href: "#" },
//       ],
//     },
//   ],
//   copyright: "© 2024 Shadcnblocks.com. All rights reserved.",
//   legalLinks: [
//     { name: "Terms and Conditions", href: "#" },
//     { name: "Privacy Policy", href: "#" },
//   ],
// };

// const MAX_SECTIONS = 4;

// const Footer2 = (props: Props) => {
//   const { logo, description, sections, copyright, legalLinks, className } = {
//     ...defaultProps,
//     ...props,
//   };

//   const visibleSections = (sections ?? []).slice(0, MAX_SECTIONS);

//   return (
//     <section className={cn("py-16 md:py-20 lg:py-24 flex justify-center", className)}>
//       <div className="container mx-auto">
//         <footer>
//           <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
//             <div className="col-span-2 mb-8 lg:mb-0">
//               <div className="flex items-center lg:justify-start">
//                 <a href={logo?.url}>
//                   <img
//                     src={logo?.src}
//                     alt={logo?.alt}
//                     title={logo?.title}
//                     className="h-7 dark:invert"
//                   />
//                 </a>
//               </div>
//               <p className="mt-4 text-sm font-medium text-muted-foreground">
//                 {description}
//               </p>
//             </div>
//             {visibleSections.map((section, sectionIdx) => (
//               <div key={sectionIdx}>
//                 <h3 className="mb-4 text-sm font-semibold tracking-tight">
//                   {section.title}
//                 </h3>
//                 <ul className="space-y-4 text-sm text-muted-foreground">
//                   {section.links.map((link, linkIdx) => (
//                     <li
//                       key={linkIdx}
//                       className="font-medium hover:text-primary"
//                     >
//                       <a href={link.href}>{link.name}</a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//           <div className="mt-8 flex flex-col justify-between gap-4 border-t border-border pt-8 text-xs font-medium text-muted-foreground md:flex-row md:items-center">
//             <p>{copyright}</p>
//             <ul className="flex gap-4">
//               {legalLinks?.map((link, linkIdx) => (
//                 <li key={linkIdx} className="underline hover:text-primary">
//                   <a href={link.href}>{link.name}</a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </footer>
//       </div>
//     </section>
//   );
// };

// export { Footer2 };

// import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
// import { cn } from "@/lib/utils";

// interface FooterLink {
//   name: string;
//   href: string;
// }
// interface FooterSection {
//   title: string;
//   links: FooterLink[];
// }
// interface FooterLogo {
//   url: string;
//   src: string;
//   alt: string;
//   title: string;
// }

// interface FooterBasicProps {
//   logo?: FooterLogo;
//   description?: string;
//   sections?: FooterSection[];
//   copyright?: string;
//   legalLinks?: FooterLink[];
//   className?: string;
// }

// interface Footer2Props extends FooterBasicProps {
//   logoClassName?: string;
// }
// type Props = Partial<Footer2Props>;

// const defaultProps: Footer2Props = {
//   logo : {
//     url: "/",
//     src: "/logo.png", // ← swap with real logo file
//     alt: "The Presence Method",
//     title: "The Presence Method",
//   },
//   description:
//     "A presence-based productivity system for high-functioning adults. Clarity first. Execution follows.",
//   sections: [
//     {
//       title: "Quick Links",
//       links: [
//         { name: "Home", href: "/" },
//         { name: "About", href: "/about" },
//         { name: "The Pillars", href: "/#method" },
//         { name: "FAQ", href: "/contact#faq" },
//       ],
//     },
//     {
//       title: "Products",
//       links: [
//         { name: "Starter Guide", href: "https://selar.com/a0bj610m22" },
//         { name: "Clarity in Chaos", href: "" },
//         // { name: "Daily Presence Planner", href: "#planner" },
//         // { name: "Habit Reset", href: "#habit-reset" },
//       ],
//     },
//     // {
//     //   title: "Connect",
//     //   links: [
//     //     { name: "Contact", href: "/contact" },
//     //     { name: "Instagram", href: "#" }, // ← swap with real Instagram URL
//     //     { name: "LinkedIn", href: "#" },  // ← swap with real LinkedIn URL
//     //   ],
//     // },
//   ],
//   copyright: `© ${new Date().getFullYear()} The Presence Method. All rights reserved.`,
//   legalLinks: [
//     { name: "Privacy Policy", href: "#" },
//     { name: "Terms & Conditions", href: "#" },
//   ],
// };

// const MAX_SECTIONS = 4;

// const Footer2 = (props: Props) => {
//   const { logo, description, sections, copyright, legalLinks, className } = {
//     ...defaultProps,
//     ...props,
//   };

//   const visibleSections = (sections ?? []).slice(0, MAX_SECTIONS);

//   return (
//     <section
//       className={cn("py-16 md:py-20 lg:py-24 flex justify-center", className)}
//     >
//       <div className="container mx-auto">
//         <footer>
//           <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
//             <div className="col-span-2 mb-8 lg:mb-0">
//               <div className="flex items-center lg:justify-start">
//                 <a href={logo.url} className="flex items-center gap-1">
//                   <img src={logo.src} className="max-h-8" alt={logo.alt} />
//                   <span className="text-lg font-semibold tracking-tighter text-primary">
//                     {logo.title}
//                   </span>
//                 </a>
//               </div>
//               <p className="mt-4 text-sm font-medium text-muted-foreground">
//                 {description}
//               </p>
//               <div className="mt-4 flex items-center gap-4">
//                 <a
//                   href="https://www.instagram.com/victoria.presencemethod?igsh=dXd0M3F2ZXhjYWRi"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label="Instagram"
//                   className="text-muted-foreground transition-colors hover:text-primary"
//                 >
//                   <FaInstagram className="size-5" />
//                 </a>
//                 <a
//                   href="https://www.facebook.com/riasuenterprise"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label="LinkedIn"
//                   className="text-muted-foreground transition-colors hover:text-primary"
//                 >
//                   <FaFacebook className="size-5" />
//                 </a>
//               </div>
//             </div>
//             {visibleSections.map((section, sectionIdx) => (
//               <div key={sectionIdx}>
//                 <h3 className="mb-4 text-sm font-semibold tracking-tight">
//                   {section.title}
//                 </h3>
//                 <ul className="space-y-4 text-sm text-muted-foreground">
//                   {section.links.map((link, linkIdx) => (
//                     <li
//                       key={linkIdx}
//                       className="font-medium hover:text-primary"
//                     >
//                       <a href={link.href}>{link.name}</a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>

//           <div className="mt-8 flex flex-col justify-between gap-4 border-t border-border pt-8 text-xs font-medium text-muted-foreground md:flex-row md:items-center">
//             <p>{copyright}</p>
//             <ul className="flex gap-4">
//               {legalLinks?.map((link, linkIdx) => (
//                 <li key={linkIdx} className="underline hover:text-primary">
//                   <a href={link.href}>{link.name} </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </footer>
//       </div>
//     </section>
//   );
// };

// export { Footer2 };


// import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
// import { cn } from "@/lib/utils";

// interface FooterLink {
//   name: string;
//   href: string;
// }
// interface FooterSection {
//   title: string;
//   links: FooterLink[];
// }
// interface FooterLogo {
//   url: string;
//   src: string;
//   alt: string;
//   title: string;
// }

// interface FooterBasicProps {
//   logo?: FooterLogo;
//   description?: string;
//   sections?: FooterSection[];
//   copyright?: string;
//   legalLinks?: FooterLink[];
//   className?: string;
// }

// interface Footer2Props extends FooterBasicProps {
//   logoClassName?: string;
// }
// type Props = Partial<Footer2Props>;

// const defaultProps: Footer2Props = {
//   logo: {
//     url: "/",
//     src: "/logo.png",
//     alt: "The Presence Method",
//     title: "The Presence Method",
//   },
//   description:
//     "A presence-based productivity system for high-functioning adults. Clarity first. Execution follows.",
//   sections: [
//     {
//       title: "Quick Links",
//       links: [
//         { name: "Home", href: "/" },
//         { name: "About", href: "/about" },
//         { name: "The Pillars", href: "/#method" },
//         { name: "FAQ", href: "/contact#faq" },
//       ],
//     },
//     {
//       title: "Products",
//       links: [
//         { name: "View Products", href: "/products" },
//         { name: "Schedule a Test Ride", href: "#" },
//       ],
//     },
//   ],
//   copyright: `© ${new Date().getFullYear()} The Presence Method. All rights reserved.`,
//   legalLinks: [
//     { name: "Privacy Policy", href: "#" },
//     { name: "Terms & Conditions", href: "#" },
//   ],
// };

// const MAX_SECTIONS = 4;

// const Footer2 = (props: Props) => {
//   // Safe destructuring: guarantee 'logo' is never undefined
//   const logo = props.logo ?? defaultProps.logo!;
//   const description = props.description ?? defaultProps.description;
//   const sections = props.sections ?? defaultProps.sections;
//   const copyright = props.copyright ?? defaultProps.copyright;
//   const legalLinks = props.legalLinks ?? defaultProps.legalLinks;
//   const className = props.className ?? defaultProps.className;

//   const visibleSections = (sections ?? []).slice(0, MAX_SECTIONS);

//   return (
//     <section
//       className={cn("py-16 md:py-20 lg:py-24 flex justify-center", className)}
//     >
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <footer>
//           <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
//             <div className="col-span-2 mb-8 lg:mb-0">
//               <div className="flex items-center lg:justify-start">
//                 <a href={logo.url} className="flex items-center gap-1">
//                   <img src={logo.src} className="max-h-8" alt={logo.alt} />
//                   <span className="text-lg font-semibold tracking-tighter text-primary">
//                     {logo.title}
//                   </span>
//                 </a>
//               </div>
//               <p className="mt-4 text-sm font-medium text-muted-foreground">
//                 {description}
//               </p>
//               <div className="mt-4 flex items-center gap-4">
//                 <a
//                   href="https://www.instagram.com/victoria.presencemethod?igsh=dXd0M3F2ZXhjYWRi"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label="Instagram"
//                   className="text-muted-foreground transition-colors hover:text-primary"
//                 >
//                   <FaInstagram className="size-5" />
//                 </a>
//                 <a
//                   href="https://www.facebook.com/riasuenterprise"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label="Facebook"
//                   className="text-muted-foreground transition-colors hover:text-primary"
//                 >
//                   <FaFacebook className="size-5" />
//                 </a>
//               </div>
//             </div>
//             {visibleSections.map((section, sectionIdx) => (
//               <div key={sectionIdx}>
//                 <h3 className="mb-4 text-sm font-semibold tracking-tight">
//                   {section.title}
//                 </h3>
//                 <ul className="space-y-4 text-sm text-muted-foreground">
//                   {section.links.map((link, linkIdx) => (
//                     <li
//                       key={linkIdx}
//                       className="font-medium hover:text-primary"
//                     >
//                       <a href={link.href}>{link.name}</a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>

//           <div className="mt-8 flex flex-col justify-between gap-4 border-t border-border pt-8 text-xs font-medium text-muted-foreground md:flex-row md:items-center">
//             <p>{copyright}</p>
//             <ul className="flex gap-4">
//               {legalLinks?.map((link, linkIdx) => (
//                 <li key={linkIdx} className="underline hover:text-primary">
//                   <a href={link.href}>{link.name} </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </footer>
//       </div>
//     </section>
//   );
// };

// export { Footer2 };

// "use client"

// import { useState } from "react";
// import { FaFacebook, FaInstagram } from "react-icons/fa";
// import { cn } from "@/lib/utils";
// import { GlobalTestRideModal } from "@/components/global-test-ride-modal";

// const Footer2 = () => {
//   const [isTestRideOpen, setIsTestRideOpen] = useState(false);

//   return (
//     <>
//       <section className="py-16 md:py-20 lg:py-24 flex justify-center">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <footer>
//             <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
//               <div className="col-span-2 mb-8 lg:mb-0">
//                 <div className="flex items-center lg:justify-start">
//                   <a href="/" className="flex items-center gap-1">
//                     <img src="/logo.png" className="max-h-8" alt="The Presence Method" />
//                     <span className="text-lg font-semibold tracking-tighter text-foreground">
//                       VoltRide
//                     </span>
//                   </a>
//                 </div>
//                 <p className="mt-4 text-sm font-medium text-muted-foreground">
//                   A presence-based productivity system for high-functioning adults. Clarity first. Execution follows.
//                 </p>
//                 <div className="mt-4 flex items-center gap-4">
//                   <a href="https://www.instagram.com/victoria.presencemethod?igsh=dXd0M3F2ZXhjYWRi" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
//                     <FaInstagram className="size-5" />
//                   </a>
//                   <a href="https://www.facebook.com/riasuenterprise" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
//                     <FaFacebook className="size-5" />
//                   </a>
//                 </div>
//               </div>

//               <div>
//                 <h3 className="mb-4 text-sm font-semibold tracking-tight">Quick Links</h3>
//                 <ul className="space-y-4 text-sm text-muted-foreground font-medium">
//                   <li><a href="/" className="hover:text-primary">Home</a></li>
//                   <li><a href="/about" className="hover:text-primary">About</a></li>
//                   <li><a href="/#method" className="hover:text-primary">The Pillars</a></li>
//                   <li><a href="/contact#faq" className="hover:text-primary">FAQ</a></li>
//                 </ul>
//               </div>

//               <div>
//                 <h3 className="mb-4 text-sm font-semibold tracking-tight">Products</h3>
//                 <ul className="space-y-4 text-sm text-muted-foreground font-medium">
//                   <li><a href="/products" className="hover:text-primary">View Products</a></li>
//                   <li>
//                     <button onClick={() => setIsTestRideOpen(true)} className="hover:text-primary text-left">
//                       Schedule a Test Ride
//                     </button>
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             <div className="mt-8 flex flex-col justify-between gap-4 border-t border-border pt-8 text-xs font-medium text-muted-foreground md:flex-row md:items-center">
//               <p>© {new Date().getFullYear()} The Presence Method. All rights reserved.</p>
//             </div>
//           </footer>
//         </div>
//       </section>

//       <GlobalTestRideModal open={isTestRideOpen} onOpenChange={setIsTestRideOpen} />
//     </>
//   );
// };

// export { Footer2 };


"use client"

import { useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { GlobalTestRideModal } from "@/components/global-test-ride-modal";

const Footer2 = () => {
  const [isTestRideOpen, setIsTestRideOpen] = useState(false);

  return (
    <>
      <section className="py-16 md:py-20 lg:py-24 flex justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <footer>
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
              <div className="col-span-2 mb-8 lg:mb-0">
                <div className="flex items-center lg:justify-start">
                  <a href="/" className="flex items-center gap-2">
                    <img src="/logo.png" className="max-h-8" alt="VoltRide Logo" />
                    <span className="text-lg font-semibold tracking-tighter text-foreground">
                      VoltRide
                    </span>
                  </a>
                </div>
                <p className="mt-4 text-sm font-medium text-muted-foreground max-w-sm">
                  Engineered for performance, comfort, and sustainable travel. Experience the next generation of electric mobility.
                </p>
                <div className="mt-4 flex items-center gap-4">
                  <a 
                    href="https://www.instagram.com/victoria.presencemethod?igsh=dXd0M3F2ZXhjYWRi" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <FaInstagram className="size-5" />
                  </a>
                  <a 
                    href="https://www.facebook.com/riasuenterprise" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <FaFacebook className="size-5" />
                  </a>
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-sm font-semibold tracking-tight text-foreground">Quick Links</h3>
                <ul className="space-y-3 text-sm text-muted-foreground font-medium">
                  <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
                  <li><a href="/products" className="hover:text-primary transition-colors">Our Products</a></li>
                  <li><a href="/services" className="hover:text-primary transition-colors">Services & Repairs</a></li>
                  <li><a href="/contact" className="hover:text-primary transition-colors">Contact & FAQ</a></li>
                </ul>
              </div>

              <div>
                <h3 className="mb-4 text-sm font-semibold tracking-tight text-foreground">Products & Rides</h3>
                <ul className="space-y-3 text-sm text-muted-foreground font-medium">
                  <li><a href="/products" className="hover:text-primary transition-colors">E-Bike Models</a></li>
                  <li>
                    <button 
                      onClick={() => setIsTestRideOpen(true)} 
                      className="hover:text-primary transition-colors text-left"
                    >
                      Book a Test Ride
                    </button>
                  </li>
                  <li><a href="/contact" className="hover:text-primary transition-colors">Warranty & Support</a></li>
                </ul>
              </div>
            </div>

            <div className="mt-12 flex flex-col justify-between gap-4 border-t border-border pt-8 text-xs font-medium text-muted-foreground md:flex-row md:items-center">
              <p>© {new Date().getFullYear()} VoltRide. All rights reserved.</p>
              {/* <div className="flex gap-6">
                <a href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
                <a href="/terms" className="hover:text-primary transition-colors">Terms of Service</a>
              </div> */}
            </div>
          </footer>
        </div>
      </section>

      <GlobalTestRideModal open={isTestRideOpen} onOpenChange={setIsTestRideOpen} />
    </>
  );
};

export { Footer2 };