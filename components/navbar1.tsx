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
    alt: "Sleek E-Bikes Logo",
    title: "Sleek E-Bikes",
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
          className,
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
              <Button
                variant="outline"
                size="lg"
                onClick={() => setIsTestRideOpen(true)}
              >
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
                        <img
                          src={logo.src}
                          className="max-h-8 dark:invert"
                          alt={logo.alt}
                        />
                      </a>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col gap-6 p-4">
                    <Accordion
                      type="single"
                      collapsible
                      className="flex w-full flex-col gap-4"
                    >
                      {menu.map((item) => renderMobileMenuItem(item, pathname))}
                    </Accordion>
                    <div className="flex flex-col gap-3">
                      <Button
                        size="lg"
                        variant="outline"
                        onClick={() => setIsTestRideOpen(true)}
                      >
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
      <GlobalTestRideModal
        open={isTestRideOpen}
        onOpenChange={setIsTestRideOpen}
      />
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
          isActive
            ? "text-primary font-semibold relative after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:rounded-full after:bg-primary"
            : "bg-background text-muted-foreground",
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
      className={cn(
        "text-md font-semibold transition-colors",
        isActive
          ? "text-primary border-l-2 border-primary pl-3"
          : "text-muted-foreground",
      )}
    >
      {item.title}
    </a>
  );
};

export { Navbar1 };
