"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  ShoppingBag,
  CreditCard,
} from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { sendToWhatsApp } from "@/lib/whatsapp";

export interface BikeModel {
  id: string;
  name: string;
  tagline: string;
  price: string;
  specs: {
    speed: string;
    range: string;
    chargeTime: string;
    motor: string;
  };
  images: string[];
}

interface BikeModelCarouselProps {
  model: BikeModel;
}

export function BikeModelCarousel({ model }: BikeModelCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTestRideOpen, setIsTestRideOpen] = useState(false);
  const [isOrderOpen, setIsOrderOpen] = useState(false);

  // Form States
  const [testRideForm, setTestRideForm] = useState({
    name: "",
    phone: "",
    date: "",
  });
  const [orderForm, setOrderForm] = useState({
    name: "",
    email: "",
    address: "",
  });

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % model.images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + model.images.length) % model.images.length,
    );
  };

  // Helper to format absolute URL for image sharing
  const getCurrentImageUrl = () => {
    const currentImgPath = model.images[currentIndex] || model.images[0];
    if (currentImgPath.startsWith("http")) return currentImgPath;
    return typeof window !== "undefined"
      ? `${window.location.origin}${currentImgPath}`
      : currentImgPath;
  };

  const handleTestRideSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendToWhatsApp({
      type: "MODEL_TEST_RIDE",
      data: {
        modelName: model.name,
        imageUrl: getCurrentImageUrl(),
        name: testRideForm.name,
        phone: testRideForm.phone,
        date: testRideForm.date,
      },
    });
    setIsTestRideOpen(false);
  };

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendToWhatsApp({
      type: "ORDER",
      data: {
        modelName: model.name,
        price: model.price,
        imageUrl: getCurrentImageUrl(),
        name: orderForm.name,
        email: orderForm.email,
        address: orderForm.address,
      },
    });
    setIsOrderOpen(false);
  };

  return (
    <div className="rounded-lg border bg-card text-card-foreground p-6 shadow-sm transition-all md:p-10">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
        {/* Left Column: Image Carousel */}
        <div className="flex flex-col items-center lg:col-span-7">
          <div className="group relative flex h-[320px] w-full items-center justify-center overflow-hidden rounded-2xl bg-muted/40 sm:h-[400px]">
            {/* <div className="relative h-full w-full p-6 transition-all duration-300">
              <Image
                src={model.images[currentIndex]}
                alt={`${model.name} view ${currentIndex + 1}`}
                fill
                className="object-contain drop-shadow-md"
                priority
              />
            </div> */}
            <div className="relative h-full w-full overflow-hidden transition-all duration-300">
              <Image
                src={model.images[currentIndex]}
                alt={`${model.name} view ${currentIndex + 1}`}
                fill
                className="object-cover drop-shadow-md"
                priority
              />
            </div>

            {model.images.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur-md shadow-md transition hover:bg-background"
                  aria-label="Previous Image"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur-md shadow-md transition hover:bg-background"
                  aria-label="Next Image"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}
          </div>

          {model.images.length > 1 && (
            <div className="mt-4 flex gap-2">
              {model.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    currentIndex === idx
                      ? "w-8 bg-primary"
                      : "w-2.5 bg-muted hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Specs & Actions */}
        <div className="flex h-full flex-col justify-between lg:col-span-5">
          <div>
            <div className="mb-3 inline-block rounded-full bg-accent px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-accent-foreground">
              E-Bike Series
            </div>
            <h3 className="text-3xl font-extrabold tracking-tight text-foreground">
              {model.name}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {model.tagline}
            </p>
            <div className="mt-4 text-3xl font-black text-foreground">
              {model.price}
            </div>

            <div className="my-6 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-border bg-muted/30 p-3">
                <span className="block text-xs font-medium text-muted-foreground">
                  Top Speed
                </span>
                <span className="text-base font-bold text-foreground">
                  {model.specs.speed}
                </span>
              </div>
              <div className="rounded-xl border border-border bg-muted/30 p-3">
                <span className="block text-xs font-medium text-muted-foreground">
                  Range
                </span>
                <span className="text-base font-bold text-foreground">
                  {model.specs.range}
                </span>
              </div>
              <div className="rounded-xl border border-border bg-muted/30 p-3">
                <span className="block text-xs font-medium text-muted-foreground">
                  Charge Time
                </span>
                <span className="text-base font-bold text-foreground">
                  {model.specs.chargeTime}
                </span>
              </div>
              <div className="rounded-xl border border-border bg-muted/30 p-3">
                <span className="block text-xs font-medium text-muted-foreground">
                  Motor
                </span>
                <span className="text-base font-bold text-foreground">
                  {model.specs.motor}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <Button
              // size="lg" variant="outline" className="flex-1"
              variant="outline"
              size="lg"
              className="w-full md:flex-1 font-semibold"
              onClick={() => setIsTestRideOpen(true)}
            >
              <Calendar className="h-4 w-4 mr-2" />
              Book Test Ride
            </Button>

            <Button
              // size="lg" className="flex-1"
              size="lg"
              className="w-full md:flex-1 font-semibold"
              onClick={() => setIsOrderOpen(true)}
            >
              <ShoppingBag className="h-4 w-4 mr-2" />
              Order Now
            </Button>
          </div>
        </div>
      </div>

      {/* --- SPECIFIC TEST RIDE MODAL --- */}
      <Dialog.Root open={isTestRideOpen} onOpenChange={setIsTestRideOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
          <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-border bg-card p-8 shadow-2xl text-card-foreground">
            <Dialog.Title className="text-2xl font-extrabold text-foreground">
              Schedule Test Ride
            </Dialog.Title>
            <Dialog.Description className="mt-1 text-sm text-muted-foreground">
              You are booking a test ride for the{" "}
              <strong className="text-foreground">{model.name}</strong>.
            </Dialog.Description>

            <form className="mt-6 space-y-4" onSubmit={handleTestRideSubmit}>
              <div>
                <label className="mb-1 block text-xs font-bold uppercase text-foreground">
                  Your Name
                </label>
                <Input
                  required
                  type="text"
                  placeholder="John Doe"
                  value={testRideForm.name}
                  onChange={(e) =>
                    setTestRideForm({ ...testRideForm, name: e.target.value })
                  }
                  className="h-11 w-full rounded-xl"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-bold uppercase text-foreground">
                  Phone Number
                </label>
                <Input
                  required
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={testRideForm.phone}
                  onChange={(e) =>
                    setTestRideForm({ ...testRideForm, phone: e.target.value })
                  }
                  className="h-11 w-full rounded-xl"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-bold uppercase text-foreground">
                  Preferred Date
                </label>
                <Input
                  required
                  type="date"
                  value={testRideForm.date}
                  onChange={(e) =>
                    setTestRideForm({ ...testRideForm, date: e.target.value })
                  }
                  className="h-11 w-full rounded-xl"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  size="lg"
                  type="button"
                  variant="outline"
                  className="flex-1"
                  onClick={() => setIsTestRideOpen(false)}
                >
                  Cancel
                </Button>
                <Button size="lg" type="submit" className="flex-1">
                  Book via WhatsApp
                </Button>
              </div>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      {/* --- ORDER NOW MODAL --- */}
      <Dialog.Root open={isOrderOpen} onOpenChange={setIsOrderOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
          <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-border bg-card p-8 shadow-2xl text-card-foreground">
            <Dialog.Title className="text-2xl font-extrabold text-foreground">
              Place Your Order
            </Dialog.Title>
            <Dialog.Description className="mt-1 text-sm text-muted-foreground">
              Ready to buy the{" "}
              <strong className="text-foreground">{model.name}</strong> for{" "}
              <strong className="text-foreground">{model.price}</strong>? Fill
              in your details below.
            </Dialog.Description>

            <form className="mt-6 space-y-4" onSubmit={handleOrderSubmit}>
              <div>
                <label className="mb-1 block text-xs font-bold uppercase text-foreground">
                  Full Name
                </label>
                <Input
                  required
                  type="text"
                  placeholder="John Doe"
                  value={orderForm.name}
                  onChange={(e) =>
                    setOrderForm({ ...orderForm, name: e.target.value })
                  }
                  className="h-11 w-full rounded-xl"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-bold uppercase text-foreground">
                  Email Address
                </label>
                <Input
                  required
                  type="email"
                  placeholder="john@example.com"
                  value={orderForm.email}
                  onChange={(e) =>
                    setOrderForm({ ...orderForm, email: e.target.value })
                  }
                  className="h-11 w-full rounded-xl"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-bold uppercase text-foreground">
                  Delivery Address
                </label>
                <Input
                  required
                  type="text"
                  placeholder="123 Main St, City, Country"
                  value={orderForm.address}
                  onChange={(e) =>
                    setOrderForm({ ...orderForm, address: e.target.value })
                  }
                  className="h-11 w-full rounded-xl"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  size="lg"
                  type="button"
                  variant="outline"
                  className="flex-1"
                  onClick={() => setIsOrderOpen(false)}
                >
                  Cancel
                </Button>
                <Button size="lg" type="submit" className="flex-1">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Order via WhatsApp
                </Button>
              </div>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
