"use client";

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
                    <img
                      src="/logo.png"
                      className="max-h-8"
                      alt="VoltRide Logo"
                    />
                    <span className="text-lg font-semibold tracking-tighter text-foreground">
                      Sleek E-Bikes
                    </span>
                  </a>
                </div>
                <p className="mt-4 text-sm font-medium text-muted-foreground max-w-sm">
                  Engineered for performance, comfort, and sustainable travel.
                  Experience the next generation of electric mobility.
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
                <h3 className="mb-4 text-sm font-semibold tracking-tight text-foreground">
                  Quick Links
                </h3>
                <ul className="space-y-3 text-sm text-muted-foreground font-medium">
                  <li>
                    <a
                      href="/"
                      className="hover:text-primary transition-colors"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="/products"
                      className="hover:text-primary transition-colors"
                    >
                      Our Products
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services"
                      className="hover:text-primary transition-colors"
                    >
                      Services & Repairs
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className="hover:text-primary transition-colors"
                    >
                      Contact & FAQ
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-4 text-sm font-semibold tracking-tight text-foreground">
                  Products & Rides
                </h3>
                <ul className="space-y-3 text-sm text-muted-foreground font-medium">
                  <li>
                    <a
                      href="/products"
                      className="hover:text-primary transition-colors"
                    >
                      E-Bike Models
                    </a>
                  </li>
                  <li>
                    <button
                      onClick={() => setIsTestRideOpen(true)}
                      className="hover:text-primary transition-colors text-left"
                    >
                      Book a Test Ride
                    </button>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className="hover:text-primary transition-colors"
                    >
                      Warranty & Support
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 flex flex-col justify-between gap-4 border-t border-border pt-8 text-xs font-medium text-muted-foreground md:flex-row md:items-center">
              <p>
                © {new Date().getFullYear()} Sleek E-Bikes. All rights reserved.
              </p>
              {/* <div className="flex gap-6">
                <a href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
                <a href="/terms" className="hover:text-primary transition-colors">Terms of Service</a>
              </div> */}
            </div>
          </footer>
        </div>
      </section>

      <GlobalTestRideModal
        open={isTestRideOpen}
        onOpenChange={setIsTestRideOpen}
      />
    </>
  );
};

export { Footer2 };
