// "use client";

// import { Book, Menu, Sunset, Trees, Zap } from "lucide-react";

// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import { Button } from "@/components/ui/button";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu";
// import {
//   Sheet,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";
// import { cn } from "@/lib/utils";

// interface MenuItem {
//   title: string;
//   url: string;
//   description?: string;
//   icon?: React.ReactNode;
//   items?: MenuItem[];
// }

// interface Navbar1Props {
//   className?: string;
//   logo?: {
//     url: string;
//     src: string;
//     alt: string;
//     title: string;
//     className?: string;
//   };
//   menu?: MenuItem[];
//   auth?: {
//     login: {
//       title: string;
//       url: string;
//     };
//     signup: {
//       title: string;
//       url: string;
//     };
//   };
// }

// const Navbar1 = ({
//   logo = {
//     url: "https://www.shadcnblocks.com",
//     src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg",
//     alt: "logo",
//     title: "Shadcnblocks.com",
//   },
//   menu = [
//     { title: "Home", url: "/" },
//     // {
//     //   title: "Products",
//     //   url: "/",
//     //   items: [
//     //     {
//     //       title: "Blog",
//     //       description: "The latest industry news, updates, and info",
//     //       icon: <Book className="size-5 shrink-0" />,
//     //       url: "#",
//     //     },
//     //     {
//     //       title: "Company",
//     //       description: "Our mission is to innovate and empower the world",
//     //       icon: <Trees className="size-5 shrink-0" />,
//     //       url: "#",
//     //     },
//     //     {
//     //       title: "Careers",
//     //       description: "Browse job listing and discover our workspace",
//     //       icon: <Sunset className="size-5 shrink-0" />,
//     //       url: "#",
//     //     },
//     //     {
//     //       title: "Support",
//     //       description:
//     //         "Get in touch with our support team or visit our community forums",
//     //       icon: <Zap className="size-5 shrink-0" />,
//     //       url: "#",
//     //     },
//     //   ],
//     // },
//     // {
//     //   title: "Resources",
//     //   url: "#",
//     //   items: [
//     //     {
//     //       title: "Help Center",
//     //       description: "Get all the answers you need right here",
//     //       icon: <Zap className="size-5 shrink-0" />,
//     //       url: "#",
//     //     },
//     //     {
//     //       title: "Contact Us",
//     //       description: "We are here to help you with any questions you have",
//     //       icon: <Sunset className="size-5 shrink-0" />,
//     //       url: "#",
//     //     },
//     //     {
//     //       title: "Status",
//     //       description: "Check the current status of our services and APIs",
//     //       icon: <Trees className="size-5 shrink-0" />,
//     //       url: "#",
//     //     },
//     //     {
//     //       title: "Terms of Service",
//     //       description: "Our terms and conditions for using our services",
//     //       icon: <Book className="size-5 shrink-0" />,
//     //       url: "#",
//     //     },
//     //   ],
//     // },
//     {
//       title: "About",
//       url: "/about",
//     },
//     {
//       title: "Contact",
//       url: "/contact",
//     },
//   ],
//   auth = {
//     login: { title: "Login", url: "#" },
//     signup: { title: "Sign up", url: "#" },
//   },
//   className,
// }: Navbar1Props) => {
//   return (
//     <section className={cn("py-4", className)}>
//       <div className="container">
//         {/* Desktop Menu */}
//         <nav className="hidden items-center justify-between lg:flex">
//           <div className="flex items-center gap-6">
//             {/* Logo */}
//             <a href={logo.url} className="flex items-center gap-2">
//               <img
//                 src={logo.src}
//                 className="max-h-8 dark:invert"
//                 alt={logo.alt}
//               />
//               <span className="text-lg font-semibold tracking-tighter">
//                 {logo.title}
//               </span>
//             </a>
//             <div className="flex items-center">
//               <NavigationMenu>
//                 <NavigationMenuList>
//                   {menu.map((item) => renderMenuItem(item))}
//                 </NavigationMenuList>
//               </NavigationMenu>
//             </div>
//           </div>
//           <div className="flex gap-2">
//             <Button asChild variant="outline" size="sm">
//               <a href={auth.login.url}>{auth.login.title}</a>
//             </Button>
//             <Button asChild size="sm">
//               <a href={auth.signup.url}>{auth.signup.title}</a>
//             </Button>
//           </div>
//         </nav>

//         {/* Mobile Menu */}
//         <div className="block lg:hidden">
//           <div className="flex items-center justify-between">
//             {/* Logo */}
//             <a href={logo.url} className="flex items-center gap-2">
//               <img
//                 src={logo.src}
//                 className="max-h-8 dark:invert"
//                 alt={logo.alt}
//               />
//             </a>
//             <Sheet>
//               <SheetTrigger asChild>
//                 <Button variant="outline" size="icon">
//                   <Menu className="size-4" />
//                 </Button>
//               </SheetTrigger>
//               <SheetContent className="overflow-y-auto">
//                 <SheetHeader>
//                   <SheetTitle>
//                     <a href={logo.url} className="flex items-center gap-2">
//                       <img
//                         src={logo.src}
//                         className="max-h-8 dark:invert"
//                         alt={logo.alt}
//                       />
//                     </a>
//                   </SheetTitle>
//                 </SheetHeader>
//                 <div className="flex flex-col gap-6 p-4">
//                   <Accordion
//                     type="single"
//                     collapsible
//                     className="flex w-full flex-col gap-4"
//                   >
//                     {menu.map((item) => renderMobileMenuItem(item))}
//                   </Accordion>

//                   <div className="flex flex-col gap-3">
//                     <Button asChild variant="outline">
//                       <a href={auth.login.url}>{auth.login.title}</a>
//                     </Button>
//                     <Button asChild>
//                       <a href={auth.signup.url}>{auth.signup.title}</a>
//                     </Button>
//                   </div>
//                 </div>
//               </SheetContent>
//             </Sheet>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const renderMenuItem = (item: MenuItem) => {
//   if (item.items) {
//     return (
//       <NavigationMenuItem key={item.title}>
//         <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
//         <NavigationMenuContent className="bg-popover text-popover-foreground">
//           {item.items.map((subItem) => (
//             <NavigationMenuLink asChild key={subItem.title} className="w-80">
//               <SubMenuLink item={subItem} />
//             </NavigationMenuLink>
//           ))}
//         </NavigationMenuContent>
//       </NavigationMenuItem>
//     );
//   }

//   return (
//     <NavigationMenuItem key={item.title}>
//       <NavigationMenuLink
//         href={item.url}
//         className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground"
//       >
//         {item.title}
//       </NavigationMenuLink>
//     </NavigationMenuItem>
//   );
// };

// const renderMobileMenuItem = (item: MenuItem) => {
//   if (item.items) {
//     return (
//       <AccordionItem key={item.title} value={item.title} className="border-b-0">
//         <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
//           {item.title}
//         </AccordionTrigger>
//         <AccordionContent className="mt-2">
//           {item.items.map((subItem) => (
//             <SubMenuLink key={subItem.title} item={subItem} />
//           ))}
//         </AccordionContent>
//       </AccordionItem>
//     );
//   }

//   return (
//     <a key={item.title} href={item.url} className="text-md font-semibold">
//       {item.title}
//     </a>
//   );
// };

// const SubMenuLink = ({ item }: { item: MenuItem }) => {
//   return (
//     <a
//       className="flex min-w-80 flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground"
//       href={item.url}
//     >
//       <div className="text-foreground">{item.icon}</div>
//       <div>
//         <div className="text-sm font-semibold">{item.title}</div>
//         {item.description && (
//           <p className="text-sm leading-snug text-muted-foreground">
//             {item.description}
//           </p>
//         )}
//       </div>
//     </a>
//   );
// };

// export { Navbar1 };


// "use client";

// import { usePathname } from "next/navigation"; // 1. Import usePathname
// import { Book, Menu, Sunset, Trees, Zap } from "lucide-react";

// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import { Button } from "@/components/ui/button";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu";
// import {
//   Sheet,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";
// import { cn } from "@/lib/utils";

// interface MenuItem {
//   title: string;
//   url: string;
//   description?: string;
//   icon?: React.ReactNode;
//   items?: MenuItem[];
// }

// interface Navbar1Props {
//   className?: string;
//   logo?: {
//     url: string;
//     src: string;
//     alt: string;
//     title: string;
//     className?: string;
//   };
//   menu?: MenuItem[];
//   auth?: {
//     login: {
//       title: string;
//       url: string;
//     };
//     signup: {
//       title: string;
//       url: string;
//     };
//   };
// }

// const Navbar1 = ({
//   logo = {
//     url: "https://www.shadcnblocks.com",
//     src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg",
//     alt: "logo",
//     title: "Shadcnblocks.com",
//   },
//   menu = [
//     { title: "Home", url: "/" },
//     {
//       title: "About",
//       url: "/about",
//     },
//     {
//       title: "Contact",
//       url: "/contact",
//     },
//   ],
//   auth = {
//     login: { title: "Login", url: "#" },
//     signup: { title: "Sign up", url: "#" },
//   },
//   className,
// }: Navbar1Props) => {
//   const pathname = usePathname(); // 2. Get the current pathname

//   return (
//     <section className={cn("py-4 flex justify-center", className)}>
//       <div className="container">
//         {/* Desktop Menu */}
//         <nav className="hidden items-center justify-between lg:flex">
//           <div className="flex items-center gap-6">
//             {/* Logo */}
//             <a href={logo.url} className="flex items-center gap-2">
//               <img
//                 src={logo.src}
//                 className="max-h-8 dark:invert"
//                 alt={logo.alt}
//               />
//               <span className="text-lg font-semibold tracking-tighter">
//                 {logo.title}
//               </span>
//             </a>
//             <div className="flex items-center">
//               <NavigationMenu>
//                 <NavigationMenuList className="flex gap-2">
//                   {/* 3. Pass pathname into helper */}
//                   {menu.map((item) => renderMenuItem(item, pathname))}
//                 </NavigationMenuList>
//               </NavigationMenu>
//             </div>
//           </div>
//           <div className="flex gap-2">
//             <Button asChild variant="outline" size="lg">
//               <a href={auth.login.url}>{auth.login.title}</a>
//             </Button>
//             <Button asChild size="lg">
//               <a href={auth.signup.url}>{auth.signup.title}</a>
//             </Button>
//           </div>
//         </nav>

//         {/* Mobile Menu */}
//         <div className="block lg:hidden">
//           <div className="flex items-center justify-between">
//             {/* Logo */}
//             <a href={logo.url} className="flex items-center gap-2">
//               <img
//                 src={logo.src}
//                 className="max-h-8 dark:invert"
//                 alt={logo.alt}
//               />
//             </a>
//             <Sheet>
//               <SheetTrigger asChild>
//                 <Button variant="outline" size="icon">
//                   <Menu className="size-4" />
//                 </Button>
//               </SheetTrigger>
//               <SheetContent className="overflow-y-auto">
//                 <SheetHeader>
//                   <SheetTitle>
//                     <a href={logo.url} className="flex items-center gap-2">
//                       <img
//                         src={logo.src}
//                         className="max-h-8 dark:invert"
//                         alt={logo.alt}
//                       />
//                     </a>
//                   </SheetTitle>
//                 </SheetHeader>
//                 <div className="flex flex-col gap-6 p-4">
//                   <Accordion
//                     type="single"
//                     collapsible
//                     className="flex w-full flex-col gap-4"
//                   >
//                     {/* 4. Pass pathname into mobile helper */}
//                     {menu.map((item) => renderMobileMenuItem(item, pathname))}
//                   </Accordion>

//                   <div className="flex flex-col gap-3">
//                     <Button asChild variant="outline">
//                       <a href={auth.login.url}>{auth.login.title}</a>
//                     </Button>
//                     <Button asChild>
//                       <a href={auth.signup.url}>{auth.signup.title}</a>
//                     </Button>
//                   </div>
//                 </div>
//               </SheetContent>
//             </Sheet>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // 5. Updated desktop item renderer to handle active styling
// const renderMenuItem = (item: MenuItem, pathname: string) => {
//   if (item.items) {
//     // Optional check: see if any nested submenu link is currently active
//     const isSubmenuActive = item.items.some((subItem) => pathname === subItem.url);

//     return (
//       <NavigationMenuItem key={item.title}>
//         <NavigationMenuTrigger className={cn(isSubmenuActive && "text-primary font-semibold")}>
//           {item.title}
//         </NavigationMenuTrigger>
//         <NavigationMenuContent className="bg-popover text-popover-foreground">
//           {item.items.map((subItem) => (
//             <NavigationMenuLink asChild key={subItem.title} className="w-80">
//               <SubMenuLink item={subItem} isActive={pathname === subItem.url} />
//             </NavigationMenuLink>
//           ))}
//         </NavigationMenuContent>
//       </NavigationMenuItem>
//     );
//   }

//   const isActive = pathname === item.url;

//   return (
//     <NavigationMenuItem key={item.title}>
//       <NavigationMenuLink
//         href={item.url}
//         className={cn(
//           "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground",
//           isActive 
//             ? "bg-muted text-foreground font-semibold" // Active classes
//             : "bg-background text-muted-foreground"    // Inactive classes
//         )}
//       >
//         {item.title}
//       </NavigationMenuLink>
//     </NavigationMenuItem>
//   );
// };

// // 6. Updated mobile item renderer to handle active styling
// const renderMobileMenuItem = (item: MenuItem, pathname: string) => {
//   if (item.items) {
//     const isSubmenuActive = item.items.some((subItem) => pathname === subItem.url);
//     return (
//       <AccordionItem key={item.title} value={item.title} className="border-b-0">
//         <AccordionTrigger className={cn("text-md py-0 font-semibold hover:no-underline", isSubmenuActive && "text-primary")}>
//           {item.title}
//         </AccordionTrigger>
//         <AccordionContent className="mt-2">
//           {item.items.map((subItem) => (
//             <SubMenuLink key={subItem.title} item={subItem} isActive={pathname === subItem.url} />
//           ))}
//         </AccordionContent>
//       </AccordionItem>
//     );
//   }

//   const isActive = pathname === item.url;

//   return (
//     <a 
//       key={item.title} 
//       href={item.url} 
//       className={cn(
//         "text-md font-semibold transition-colors", 
//         isActive ? "text-primary" : "text-muted-foreground"
//       )}
//     >
//       {item.title}
//     </a>
//   );
// };

// // 7. Updated sub-menu utility component
// const SubMenuLink = ({ item, isActive }: { item: MenuItem; isActive?: boolean }) => {
//   return (
//     <a
//       className={cn(
//         "flex min-w-80 flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground",
//         isActive && "bg-muted"
//       )}
//       href={item.url}
//     >
//       <div className={cn("text-foreground", isActive && "text-primary")}>{item.icon}</div>
//       <div>
//         <div className="text-sm font-semibold">{item.title}</div>
//         {item.description && (
//           <p className="text-sm leading-snug text-muted-foreground">
//             {item.description}
//           </p>
//         )}
//       </div>
//     </a>
//   );
// };

// export { Navbar1 };

// "use client";

// import { usePathname } from "next/navigation";
// import { Menu } from "lucide-react";

// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import { Button } from "@/components/ui/button";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu";
// import {
//   Sheet,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";
// import { cn } from "@/lib/utils";

// interface MenuItem {
//   title: string;
//   url: string;
//   description?: string;
//   icon?: React.ReactNode;
//   items?: MenuItem[];
// }

// interface Navbar1Props {
//   className?: string;
//   logo?: {
//     url: string;
//     src: string;
//     alt: string;
//     title: string;
//     className?: string;
//   };
//   menu?: MenuItem[];
//   auth?: {
//     login: {
//       title: string;
//       url: string;
//     };
//     signup: {
//       title: string;
//       url: string;
//     };
//   };
// }

// const Navbar1 = ({
//   logo = {
//     url: "/",
//     src: "/tpm-icon.svg", // ← swap with real logo
//     alt: "Logo",
//     title: "The Presence Method",
//   },
//   menu = [
//     { title: "Home", url: "/" },
//     { title: "About", url: "/about" },
//     { title: "Contact", url: "/contact" },
//   ],
//   auth = {
//     login: { title: "Starter Guide", url: "https://selar.com/a0bj610m22" },
//     signup: { title: "Get In Touch", url: "/contact" },
//   },
//   className,
// }: Navbar1Props) => {
//   const pathname = usePathname();

//   return (
//     <section className={cn("py-4 flex justify-center", className)}>
//       <div className="container">
//         {/* Desktop Menu */}
//         <nav className="hidden items-center justify-between lg:flex">
//           <div className="flex items-center gap-12">
//             {/* Logo */}
//             <a href={logo.url} className="flex items-center gap-1">
//               <img
//                 src={logo.src}
//                 className="max-h-8 dark:invert"
//                 alt={logo.alt}
//               />
//               <span className="text-lg font-semibold tracking-tighter">
//                 {logo.title}
//               </span>
//             </a>
//             <div className="flex items-center">
//               <NavigationMenu>
//                 <NavigationMenuList className="flex gap-2">
//                   {menu.map((item) => renderMenuItem(item, pathname))}
//                 </NavigationMenuList>
//               </NavigationMenu>
//             </div>
//           </div>
//           <div className="flex gap-2">
//             <Button asChild variant="outline" size="lg">
//               <a href={auth.login.url}>{auth.login.title}</a>
//             </Button>
//             <Button asChild size="lg">
//               <a href={auth.signup.url}>{auth.signup.title}</a>
//             </Button>
//           </div>
//         </nav>

//         {/* Mobile Menu */}
//         <div className="block lg:hidden">
//           <div className="flex items-center justify-between">
//             <a href={logo.url} className="flex items-center gap-2">
//               <img
//                 src={logo.src}
//                 className="max-h-8 dark:invert"
//                 alt={logo.alt}
//               />
//               <span className="text-lg font-semibold tracking-tighter">
//                 {logo.title}
//               </span>
//             </a>
//             <Sheet>
//               <SheetTrigger asChild>
//                 <Button variant="outline" size="icon">
//                   <Menu className="size-4" />
//                 </Button>
//               </SheetTrigger>
//               <SheetContent className="overflow-y-auto">
//                 <SheetHeader>
//                   <SheetTitle>
//                     <a href={logo.url} className="flex items-center gap-2">
//                       <img
//                         src={logo.src}
//                         className="max-h-8 dark:invert"
//                         alt={logo.alt}
//                       />
//                     </a>
//                   </SheetTitle>
//                 </SheetHeader>
//                 <div className="flex flex-col gap-6 p-4">
//                   <Accordion
//                     type="single"
//                     collapsible
//                     className="flex w-full flex-col gap-4"
//                   >
//                     {menu.map((item) => renderMobileMenuItem(item, pathname))}
//                   </Accordion>
//                   <div className="flex flex-col gap-3">
//                     <Button asChild variant="outline">
//                       <a href={auth.login.url}>{auth.login.title}</a>
//                     </Button>
//                     <Button asChild>
//                       <a href={auth.signup.url}>{auth.signup.title}</a>
//                     </Button>
//                   </div>
//                 </div>
//               </SheetContent>
//             </Sheet>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const renderMenuItem = (item: MenuItem, pathname: string) => {
//   if (item.items) {
//     const isSubmenuActive = item.items.some((subItem) => pathname === subItem.url);
//     return (
//       <NavigationMenuItem key={item.title}>
//         <NavigationMenuTrigger className={cn(isSubmenuActive && "text-primary font-semibold")}>
//           {item.title}
//         </NavigationMenuTrigger>
//         <NavigationMenuContent className="bg-popover text-popover-foreground">
//           {item.items.map((subItem) => (
//             <NavigationMenuLink asChild key={subItem.title} className="w-80">
//               <SubMenuLink item={subItem} isActive={pathname === subItem.url} />
//             </NavigationMenuLink>
//           ))}
//         </NavigationMenuContent>
//       </NavigationMenuItem>
//     );
//   }

//   const isActive = pathname === item.url;

//   return (
//     <NavigationMenuItem key={item.title}>
//       <NavigationMenuLink
//         href={item.url}
//         className={cn(
//           "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground",
//           isActive
//             ? "bg-muted text-foreground font-semibold"
//             : "bg-background text-muted-foreground"
//         )}
//       >
//         {item.title}
//       </NavigationMenuLink>
//     </NavigationMenuItem>
//   );
// };

// const renderMobileMenuItem = (item: MenuItem, pathname: string) => {
//   if (item.items) {
//     const isSubmenuActive = item.items.some((subItem) => pathname === subItem.url);
//     return (
//       <AccordionItem key={item.title} value={item.title} className="border-b-0">
//         <AccordionTrigger className={cn("text-md py-0 font-semibold hover:no-underline", isSubmenuActive && "text-primary")}>
//           {item.title}
//         </AccordionTrigger>
//         <AccordionContent className="mt-2">
//           {item.items.map((subItem) => (
//             <SubMenuLink key={subItem.title} item={subItem} isActive={pathname === subItem.url} />
//           ))}
//         </AccordionContent>
//       </AccordionItem>
//     );
//   }

//   const isActive = pathname === item.url;

//   return (
//     <a
//       key={item.title}
//       href={item.url}
//       className={cn(
//         "text-md font-semibold transition-colors",
//         isActive ? "text-primary" : "text-muted-foreground"
//       )}
//     >
//       {item.title}
//     </a>
//   );
// };

// const SubMenuLink = ({ item, isActive }: { item: MenuItem; isActive?: boolean }) => {
//   return (
//     <a
//       className={cn(
//         "flex min-w-80 flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground",
//         isActive && "bg-muted"
//       )}
//       href={item.url}
//     >
//       <div className={cn("text-foreground", isActive && "text-primary")}>{item.icon}</div>
//       <div>
//         <div className="text-sm font-semibold">{item.title}</div>
//         {item.description && (
//           <p className="text-sm leading-snug text-muted-foreground">
//             {item.description}
//           </p>
//         )}
//       </div>
//     </a>
//   );
// };

// export { Navbar1 };

// "use client";

// import { usePathname } from "next/navigation";
// import { Menu } from "lucide-react";
// import { useState, useEffect } from "react"; // Added hooks for scroll tracking

// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import { Button } from "@/components/ui/button";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu";
// import {
//   Sheet,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";
// import { cn } from "@/lib/utils";

// interface MenuItem {
//   title: string;
//   url: string;
//   description?: string;
//   icon?: React.ReactNode;
//   items?: MenuItem[];
// }

// interface Navbar1Props {
//   className?: string;
//   logo?: {
//     url: string;
//     src: string;
//     alt: string;
//     title: string;
//     className?: string;
//   };
//   menu?: MenuItem[];
//   auth?: {
//     login: {
//       title: string;
//       url: string;
//     };
//     signup: {
//       title: string;
//       url: string;
//     };
//   };
// }

// const Navbar1 = ({
//   logo = {
//     url: "/",
//     src: "/logo.png",
//     alt: "Logo",
//     title: "The Presence Method",
//   },
//   menu = [
//     { title: "Home", url: "/" },
//     { title: "Services", url: "/services" },
//     { title: "Products", url: "/products" },
//     { title: "Contact", url: "/contact" },
//   ],
//   auth = {
//     login: { title: "Schedule a Test Ride", url: "#" },
//     signup: { title: "View Products", url: "/products" },
//   },
//   className,
// }: Navbar1Props) => {
//   const pathname = usePathname();

//   // Scroll visibility logic states
//   const [isVisible, setIsVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   useEffect(() => {
//     const controlNavbar = () => {
//       const currentScrollY = window.scrollY;

//       if (currentScrollY < 50) {
//         setIsVisible(true);
//       } else if (currentScrollY > lastScrollY) {
//         setIsVisible(false); // Scrolling down -> Hide
//       } else if (currentScrollY < lastScrollY) {
//         setIsVisible(true); // Scrolling up -> Show
//       }

//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener("scroll", controlNavbar, { passive: true });
//     return () => window.removeEventListener("scroll", controlNavbar);
//   }, [lastScrollY]);

//   return (
//     // <section 
//     //   className={cn(
//     //     "border py-4 flex justify-center fixed top-0 left-0 right-0 z-50 bg-background transition-transform duration-300 ease-in-out",
//     //     isVisible ? "translate-y-0" : "-translate-y-full",
//     //     className
//     //   )}
//     // >
//     <section 
//     className={cn(
//       "fixed top-0 left-0 right-0 z-50 h-16 md:h-20 bg-background/95 backdrop-blur-md flex items-center justify-center transition-transform duration-300 ease-in-out",
//       isVisible ? "translate-y-0" : "-translate-y-full",
//       className
//     )}
//   >
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Desktop Menu */}
//         <nav className="hidden items-center justify-between lg:flex">
//           <div className="flex items-center gap-12">
//             {/* Logo */}
//             <a href={logo.url} className="flex items-center gap-1">
//               <img
//                 src={logo.src}
//                 className="max-h-8"
//                 alt={logo.alt}
//               />
//               <span className="text-lg font-semibold tracking-tighter text-primary">
//                 {logo.title}
//               </span>
//             </a>
//             <div className="flex items-center">
//               <NavigationMenu>
//                 <NavigationMenuList className="flex gap-2">
//                   {menu.map((item) => renderMenuItem(item, pathname))}
//                 </NavigationMenuList>
//               </NavigationMenu>
//             </div>
//           </div>
//           <div className="flex gap-2">
//             <Button asChild variant="outline" size="lg">
//               <a href={auth.login.url}>{auth.login.title}</a>
//             </Button>
//             <Button asChild size="lg">
//               <a href={auth.signup.url}>{auth.signup.title}</a>
//             </Button>
//           </div>
//         </nav>

//         {/* Mobile Menu */}
//         <div className="block lg:hidden">
//           <div className="flex items-center justify-between">
//             <a href={logo.url} className="flex items-center gap-2">
//               <img
//                 src={logo.src}
//                 className="max-h-8"
//                 alt={logo.alt}
//               />
//               <span className="text-lg font-semibold tracking-tighter text-primary">
//                 {logo.title}
//               </span>
//             </a>
//             <Sheet>
//               <SheetTrigger asChild>
//                 <Button variant="outline" size="icon">
//                   <Menu className="size-4 text-primary" />
//                 </Button>
//               </SheetTrigger>
//               <SheetContent className="overflow-y-auto">
//                 <SheetHeader>
//                   <SheetTitle>
//                     <a href={logo.url} className="flex items-center gap-2">
//                       <img
//                         src={logo.src}
//                         className="max-h-8 dark:invert"
//                         alt={logo.alt}
//                       />
//                     </a>
//                   </SheetTitle>
//                 </SheetHeader>
//                 <div className="flex flex-col gap-6 p-4">
//                   <Accordion
//                     type="single"
//                     collapsible
//                     className="flex w-full flex-col gap-4"
//                   >
//                     {menu.map((item) => renderMobileMenuItem(item, pathname))}
//                   </Accordion>
//                   <div className="flex flex-col gap-3">
//                     <Button asChild variant="outline">
//                       <a href={auth.login.url}>{auth.login.title}</a>
//                     </Button>
//                     <Button asChild>
//                       <a href={auth.signup.url}>{auth.signup.title}</a>
//                     </Button>
//                   </div>
//                 </div>
//               </SheetContent>
//             </Sheet>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const renderMenuItem = (item: MenuItem, pathname: string) => {
//   if (item.items) {
//     const isSubmenuActive = item.items.some((subItem) => pathname === subItem.url);
//     return (
//       <NavigationMenuItem key={item.title}>
//         <NavigationMenuTrigger className={cn(isSubmenuActive && "text-primary font-semibold")}>
//           {item.title}
//         </NavigationMenuTrigger>
//         <NavigationMenuContent className="bg-popover text-popover-foreground">
//           {item.items.map((subItem) => (
//             <NavigationMenuLink asChild key={subItem.title} className="w-80">
//               <SubMenuLink item={subItem} isActive={pathname === subItem.url} />
//             </NavigationMenuLink>
//           ))}
//         </NavigationMenuContent>
//       </NavigationMenuItem>
//     );
//   }

//   const isActive = pathname === item.url;

//   return (
//     <NavigationMenuItem key={item.title}>
//       <NavigationMenuLink
//         href={item.url}
//         className={cn(
//           "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground",
//           isActive
//             ? "text-primary font-semibold relative after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:rounded-full after:bg-primary"
//             : "bg-background text-muted-foreground"
//         )}
//       >
//         {item.title}
//       </NavigationMenuLink>
//     </NavigationMenuItem>
//   );
// };

// const renderMobileMenuItem = (item: MenuItem, pathname: string) => {
//   if (item.items) {
//     const isSubmenuActive = item.items.some((subItem) => pathname === subItem.url);
//     return (
//       <AccordionItem key={item.title} value={item.title} className="border-b-0">
//         <AccordionTrigger className={cn("text-md py-0 font-semibold hover:no-underline", isSubmenuActive && "text-primary")}>
//           {item.title}
//         </AccordionTrigger>
//         <AccordionContent className="mt-2">
//           {item.items.map((subItem) => (
//             <SubMenuLink key={subItem.title} item={subItem} isActive={pathname === subItem.url} />
//           ))}
//         </AccordionContent>
//       </AccordionItem>
//     );
//   }

//   const isActive = pathname === item.url;

//   return (
//   <a  
//       key={item.title}
//       href={item.url}
//       className={cn(
//         "text-md font-semibold transition-colors",
//         isActive
//           ? "text-primary border-l-2 border-primary pl-3"
//           : "text-muted-foreground"
//       )}
//     >
//       {item.title}
//     </a>
//   );
// };

// const SubMenuLink = ({ item, isActive }: { item: MenuItem; isActive?: boolean }) => {
//   return (
//     <a
//       className={cn(
//         "flex min-w-80 flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground",
//         isActive && "bg-accent"
//       )}
//       href={item.url}
//     >
//       <div className={cn("text-foreground", isActive && "text-primary")}>{item.icon}</div>
//       <div>
//         <div className={cn("text-sm font-semibold", isActive && "text-primary")}>{item.title}</div>
//         {item.description && (
//           <p className="text-sm leading-snug text-muted-foreground">
//             {item.description}
//           </p>
//         )}
//       </div>
//     </a>
//   );
// };

// // const renderMenuItem = (item: MenuItem, pathname: string) => {
// //   if (item.items) {
// //     const isSubmenuActive = item.items.some((subItem) => pathname === subItem.url);
// //     return (
// //       <NavigationMenuItem key={item.title}>
// //         <NavigationMenuTrigger className={cn(isSubmenuActive && "text-primary font-semibold")}>
// //           {item.title}
// //         </NavigationMenuTrigger>
// //         <NavigationMenuContent className="bg-popover text-popover-foreground">
// //           {item.items.map((subItem) => (
// //             <NavigationMenuLink asChild key={subItem.title} className="w-80">
// //               <SubMenuLink item={subItem} isActive={pathname === subItem.url} />
// //             </NavigationMenuLink>
// //           ))}
// //         </NavigationMenuContent>
// //       </NavigationMenuItem>
// //     );
// //   }

// //   const isActive = pathname === item.url;

// //   return (
// //     <NavigationMenuItem key={item.title}>
// //       <NavigationMenuLink
// //         href={item.url}
// //         className={cn(
// //           "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground",
// //           isActive
// //             ? "bg-muted text-foreground font-semibold"
// //             : "bg-background text-muted-foreground"
// //         )}
// //       >
// //         {item.title}
// //       </NavigationMenuLink>
// //     </NavigationMenuItem>
// //   );
// // };

// // const renderMobileMenuItem = (item: MenuItem, pathname: string) => {
// //   if (item.items) {
// //     const isSubmenuActive = item.items.some((subItem) => pathname === subItem.url);
// //     return (
// //       <AccordionItem key={item.title} value={item.title} className="border-b-0">
// //         <AccordionTrigger className={cn("text-md py-0 font-semibold hover:no-underline", isSubmenuActive && "text-primary")}>
// //           {item.title}
// //         </AccordionTrigger>
// //         <AccordionContent className="mt-2">
// //           {item.items.map((subItem) => (
// //             <SubMenuLink key={subItem.title} item={subItem} isActive={pathname === subItem.url} />
// //           ))}
// //         </AccordionContent>
// //       </AccordionItem>
// //     );
// //   }

// //   const isActive = pathname === item.url;

// //   return (
// //     <a
// //       key={item.title}
// //       href={item.url}
// //       className={cn(
// //         "text-md font-semibold transition-colors",
// //         isActive ? "text-primary" : "text-muted-foreground"
// //       )}
// //     >
// //       {item.title}
// //     </a>
// //   );
// // };

// // const SubMenuLink = ({ item, isActive }: { item: MenuItem; isActive?: boolean }) => {
// //   return (
// //     <a
// //       className={cn(
// //         "flex min-w-80 flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground",
// //         isActive && "bg-muted"
// //       )}
// //       href={item.url}
// //     >
// //       <div className={cn("text-foreground", isActive && "text-primary")}>{item.icon}</div>
// //       <div>
// //         <div className="text-sm font-semibold">{item.title}</div>
// //         {item.description && (
// //           <p className="text-sm leading-snug text-muted-foreground">
// //             {item.description}
// //           </p>
// //         )}
// //       </div>
// //     </a>
// //   );
// // };

// export { Navbar1 };

"use client";

import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { GlobalTestRideModal } from "@/components/global-test-ride-modal";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  className?: string;
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
}

const Navbar1 = ({
  logo = {
    url: "/",
    src: "/logo.png",
    alt: "Logo",
    title: "VoltRide",
  },
  menu = [
    { title: "Home", url: "/" },
    { title: "Services", url: "/services" },
    { title: "Products", url: "/products" },
    { title: "Contact", url: "/contact" },
  ],
  className,
}: Navbar1Props) => {
  const pathname = usePathname();
  const [isTestRideOpen, setIsTestRideOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar, { passive: true });
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <>
      <section 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 h-16 md:h-20 bg-background/95 backdrop-blur-md flex items-center justify-center transition-transform duration-300 ease-in-out",
          isVisible ? "translate-y-0" : "-translate-y-full",
          className
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Menu */}
          <nav className="hidden items-center justify-between lg:flex">
            <div className="flex items-center gap-12">
              <a href={logo.url} className="flex items-center gap-1">
                <img src={logo.src} className="max-h-8" alt={logo.alt} />
                <span className="text-lg font-semibold tracking-tighter text-foreground">
                  {logo.title}
                </span>
              </a>
              <NavigationMenu>
                <NavigationMenuList className="flex gap-2">
                  {menu.map((item) => renderMenuItem(item, pathname))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="lg" onClick={() => setIsTestRideOpen(true)}>
                Schedule a Test Ride
              </Button>
              <Button asChild size="lg">
                <a href="/products">View Products</a>
              </Button>
            </div>
          </nav>

          {/* Mobile Menu */}
          <div className="block lg:hidden">
            <div className="flex items-center justify-between">
              <a href={logo.url} className="flex items-center gap-2">
                <img src={logo.src} className="max-h-8" alt={logo.alt} />
                <span className="text-lg font-semibold tracking-tighter text-foreground">
                  {logo.title}
                </span>
              </a>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="size-4 text-primary" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="overflow-y-auto">
                  <SheetHeader>
                    <SheetTitle>
                      <a href={logo.url} className="flex items-center gap-2">
                        <img src={logo.src} className="max-h-8 dark:invert" alt={logo.alt} />
                      </a>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col gap-6 p-4">
                    <Accordion type="single" collapsible className="flex w-full flex-col gap-4">
                      {menu.map((item) => renderMobileMenuItem(item, pathname))}
                    </Accordion>
                    <div className="flex flex-col gap-3">
                      <Button size="lg" variant="outline" onClick={() => setIsTestRideOpen(true)}>
                        Schedule a Test Ride
                      </Button>
                      <Button size="lg" asChild>
                        <a href="/products">View Products</a>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </section>

      {/* Global Test Ride Modal */}
      <GlobalTestRideModal open={isTestRideOpen} onOpenChange={setIsTestRideOpen} />
    </>
  );
};

const renderMenuItem = (item: MenuItem, pathname: string) => {
  const isActive = pathname === item.url;
  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className={cn(
          "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground",
          isActive ? "text-primary font-semibold relative after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:rounded-full after:bg-primary" : "bg-background text-muted-foreground"
        )}
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem, pathname: string) => {
  const isActive = pathname === item.url;
  return (
    <a  
      key={item.title}
      href={item.url}
      className={cn("text-md font-semibold transition-colors", isActive ? "text-primary border-l-2 border-primary pl-3" : "text-muted-foreground")}
    >
      {item.title}
    </a>
  );
};

export { Navbar1 };