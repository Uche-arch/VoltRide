// import Image from "next/image"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Calendar, Check, Gauge, MapPin, ShoppingCart, Zap } from "lucide-react"

// interface BikeCardProps {
//   title: string
//   bestFor: string
//   imageSrc: string
//   tags: string[]
//   specs: {
//     range: string
//     battery: string
//     topSpeed: string
//   }
//   features: string[]
//   onOrderClick?: () => void
//   onTestRideClick?: () => void
// }

// export function BikeCard({
//   title,
//   bestFor,
//   imageSrc,
//   tags,
//   specs,
//   features,
//   onOrderClick,
//   onTestRideClick,
// }: BikeCardProps) {
//   return (
//     <Card className="w-full max-w-[600px] border shadow-sm transition-all hover:shadow-md">
//       <CardContent className="px-6 py-6">
//         {/* Bike Image */}
//         <div className="relative mb-6 aspect-[2/1] w-full overflow-hidden rounded-lg">
//           <Image
//             src={imageSrc}
//             alt={title}
//             fill
//             className="object-contain transition-transform duration-300 hover:scale-105"
//           />
//         </div>

//         {/* Subtitle / Best For */}
//         <p className="mb-1 text-sm font-semibold text-orange-600">
//           Best for: {bestFor}
//         </p>

//         {/* Title */}
//         <h3 className="mb-3 text-2xl font-bold tracking-tight text-slate-900">
//           {title}
//         </h3>

//         {/* Tags */}
//         <div className="mb-6 flex flex-wrap gap-2">
//           {tags.map((tag) => (
//             <Badge
//               key={tag}
//               variant="secondary"
//               className="rounded-full bg-slate-100 font-normal text-slate-700 hover:bg-slate-100"
//             >
//               {tag}
//             </Badge>
//           ))}
//         </div>

//         {/* Spec Boxes Grid */}
//         <div className="mb-6 grid grid-cols-3 gap-2 text-center">
//           {/* Range */}
//           <div className="flex flex-col items-center justify-center rounded-xl border bg-slate-50/50 p-2.5">
//             <MapPin className="mb-1 h-5 w-5 text-slate-600" />
//             <span className="text-base font-bold text-slate-900">{specs.range}</span>
//             <span className="text-xs text-slate-500">Range</span>
//           </div>

//           {/* Battery */}
//           <div className="flex flex-col items-center justify-center rounded-xl border bg-slate-50/50 p-2.5">
//             <Zap className="mb-1 h-5 w-5 text-slate-600" />
//             <span className="text-base font-bold text-slate-900">{specs.battery}</span>
//             <span className="text-xs text-slate-500">Battery</span>
//           </div>

//           {/* Speed */}
//           <div className="flex flex-col items-center justify-center rounded-xl border bg-slate-50/50 p-2.5">
//             <Gauge className="mb-1 h-5 w-5 text-slate-600" />
//             <span className="text-base font-bold text-slate-900">{specs.topSpeed}</span>
//             <span className="text-xs text-slate-500">Top Speed</span>
//           </div>
//         </div>

//         {/* Feature List */}
//         <ul className="mb-6 space-y-2 text-sm text-slate-700">
//           {features.map((feature, idx) => (
//             <li key={idx} className="flex items-start gap-2">
//               <Check className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" />
//               <span>{feature}</span>
//             </li>
//           ))}
//         </ul>

//         {/* Action Buttons */}
//         <div className="flex flex-col gap-3 sm:flex-row">
//           <Button
//             className="flex-1 bg-orange-600 font-semibold hover:bg-orange-700"
//             onClick={onOrderClick}
//           >
//             <ShoppingCart className="mr-2 h-4 w-4" />
//             Order Now
//           </Button>
//           <Button
//             variant="outline"
//             className="flex-1 font-semibold border-slate-300 hover:bg-slate-50"
//             onClick={onTestRideClick}
//           >
//             <Calendar className="mr-2 h-4 w-4 text-slate-600" />
//             Book Test Ride
//           </Button>
//         </div>
//       </CardContent>
//     </Card>
//   )
// }

// "use client"

// import { useState } from "react"
// import Image from "next/image"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Calendar, Check, Gauge, MapPin, ShoppingCart, Zap, CreditCard } from "lucide-react"
// import * as Dialog from "@radix-ui/react-dialog"
// import { sendToWhatsApp } from "@/lib/whatsapp"

// interface BikeCardProps {
//   title: string
//   price?: string
//   bestFor: string
//   imageSrc: string
//   tags: string[]
//   specs: {
//     range: string
//     battery: string
//     topSpeed: string
//   }
//   features: string[]
// }

// export function BikeCard({
//   title,
//   price = "$1,899",
//   bestFor,
//   imageSrc,
//   tags,
//   specs,
//   features,
// }: BikeCardProps) {
//   const [isOrderOpen, setIsOrderOpen] = useState(false)
//   const [isTestRideOpen, setIsTestRideOpen] = useState(false)

//   // Form states
//   const [orderForm, setOrderForm] = useState({ name: "", email: "", address: "" })
//   const [testRideForm, setTestRideForm] = useState({ name: "", phone: "", date: "" })

//   const getFullImageUrl = (src: string) => {
//     if (src.startsWith("http")) return src
//     return typeof window !== "undefined" ? `${window.location.origin}${src}` : src
//   }

//   const handleOrderSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     sendToWhatsApp({
//       type: "ORDER",
//       data: {
//         modelName: title,
//         price,
//         imageUrl: getFullImageUrl(imageSrc),
//         name: orderForm.name,
//         email: orderForm.email,
//         address: orderForm.address,
//       },
//     })
//     setIsOrderOpen(false)
//   }

//   const handleTestRideSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     sendToWhatsApp({
//       type: "MODEL_TEST_RIDE",
//       data: {
//         modelName: title,
//         imageUrl: getFullImageUrl(imageSrc),
//         name: testRideForm.name,
//         phone: testRideForm.phone,
//         date: testRideForm.date,
//       },
//     })
//     setIsTestRideOpen(false)
//   }

//   return (
//     <>
//       <Card className="w-full max-w-[600px] border shadow-sm transition-all hover:shadow-md">
//         <CardContent className="px-6 py-6">
//           <div className="relative mb-6 aspect-[2/1] w-full overflow-hidden rounded-lg">
//             <Image
//               src={imageSrc}
//               alt={title}
//               fill
//               className="object-contain transition-transform duration-300 hover:scale-105"
//             />
//           </div>

//           <p className="mb-1 text-sm font-semibold text-orange-600">Best for: {bestFor}</p>
//           <h3 className="mb-3 text-2xl font-bold tracking-tight text-slate-900">{title}</h3>

//           <div className="mb-6 flex flex-wrap gap-2">
//             {tags.map((tag) => (
//               <Badge key={tag} variant="secondary" className="rounded-full bg-slate-100 font-normal text-slate-700">
//                 {tag}
//               </Badge>
//             ))}
//           </div>

//           <div className="mb-6 grid grid-cols-3 gap-2 text-center">
//             <div className="flex flex-col items-center justify-center rounded-xl border bg-slate-50/50 p-2.5">
//               <MapPin className="mb-1 h-5 w-5 text-slate-600" />
//               <span className="text-base font-bold text-slate-900">{specs.range}</span>
//               <span className="text-xs text-slate-500">Range</span>
//             </div>
//             <div className="flex flex-col items-center justify-center rounded-xl border bg-slate-50/50 p-2.5">
//               <Zap className="mb-1 h-5 w-5 text-slate-600" />
//               <span className="text-base font-bold text-slate-900">{specs.battery}</span>
//               <span className="text-xs text-slate-500">Battery</span>
//             </div>
//             <div className="flex flex-col items-center justify-center rounded-xl border bg-slate-50/50 p-2.5">
//               <Gauge className="mb-1 h-5 w-5 text-slate-600" />
//               <span className="text-base font-bold text-slate-900">{specs.topSpeed}</span>
//               <span className="text-xs text-slate-500">Top Speed</span>
//             </div>
//           </div>

//           <ul className="mb-6 space-y-2 text-sm text-slate-700">
//             {features.map((feature, idx) => (
//               <li key={idx} className="flex items-start gap-2">
//                 <Check className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" />
//                 <span>{feature}</span>
//               </li>
//             ))}
//           </ul>

//           <div className="flex flex-col gap-3 sm:flex-row">
//             <Button className="flex-1 bg-orange-600 font-semibold hover:bg-orange-700" onClick={() => setIsOrderOpen(true)}>
//               <ShoppingCart className="mr-2 h-4 w-4" />
//               Order Now
//             </Button>
//             <Button variant="outline" className="flex-1 font-semibold border-slate-300 hover:bg-slate-50" onClick={() => setIsTestRideOpen(true)}>
//               <Calendar className="mr-2 h-4 w-4 text-slate-600" />
//               Book Test Ride
//             </Button>
//           </div>
//         </CardContent>
//       </Card>

//       {/* Order Dialog */}
//       <Dialog.Root open={isOrderOpen} onOpenChange={setIsOrderOpen}>
//         <Dialog.Portal>
//           <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
//           <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-slate-100 bg-white p-8 shadow-2xl">
//             <Dialog.Title className="text-2xl font-extrabold text-slate-900">Order {title}</Dialog.Title>
//             <Dialog.Description className="mt-1 text-sm text-slate-500">Price: {price}. Fill out your details below.</Dialog.Description>
//             <form className="mt-6 space-y-4" onSubmit={handleOrderSubmit}>
//               <div>
//                 <label className="mb-1 block text-xs font-bold uppercase text-slate-700">Full Name</label>
//                 <input required type="text" placeholder="John Doe" value={orderForm.name} onChange={(e) => setOrderForm({ ...orderForm, name: e.target.value })} className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
//               </div>
//               <div>
//                 <label className="mb-1 block text-xs font-bold uppercase text-slate-700">Email Address</label>
//                 <input required type="email" placeholder="john@example.com" value={orderForm.email} onChange={(e) => setOrderForm({ ...orderForm, email: e.target.value })} className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
//               </div>
//               <div>
//                 <label className="mb-1 block text-xs font-bold uppercase text-slate-700">Delivery Address</label>
//                 <input required type="text" placeholder="123 Main St, City, Country" value={orderForm.address} onChange={(e) => setOrderForm({ ...orderForm, address: e.target.value })} className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
//               </div>
//               <div className="flex gap-3 pt-4">
//                 <Button type="button" variant="outline" className="flex-1" onClick={() => setIsOrderOpen(false)}>Cancel</Button>
//                 <Button type="submit" className="flex-1 bg-orange-500 hover:bg-orange-600 text-white"><CreditCard className="mr-2 h-4 w-4" /> Send Order via WhatsApp</Button>
//               </div>
//             </form>
//           </Dialog.Content>
//         </Dialog.Portal>
//       </Dialog.Root>

//       {/* Model Test Ride Dialog */}
//       <Dialog.Root open={isTestRideOpen} onOpenChange={setIsTestRideOpen}>
//         <Dialog.Portal>
//           <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
//           <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-slate-100 bg-white p-8 shadow-2xl">
//             <Dialog.Title className="text-2xl font-extrabold text-slate-900">Book Test Ride: {title}</Dialog.Title>
//             <Dialog.Description className="mt-1 text-sm text-slate-500">Select a date to test ride this specific bike.</Dialog.Description>
//             <form className="mt-6 space-y-4" onSubmit={handleTestRideSubmit}>
//               <div>
//                 <label className="mb-1 block text-xs font-bold uppercase text-slate-700">Full Name</label>
//                 <input required type="text" placeholder="John Doe" value={testRideForm.name} onChange={(e) => setTestRideForm({ ...testRideForm, name: e.target.value })} className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
//               </div>
//               <div>
//                 <label className="mb-1 block text-xs font-bold uppercase text-slate-700">Phone Number</label>
//                 <input required type="tel" placeholder="+1 (555) 000-0000" value={testRideForm.phone} onChange={(e) => setTestRideForm({ ...testRideForm, phone: e.target.value })} className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
//               </div>
//               <div>
//                 <label className="mb-1 block text-xs font-bold uppercase text-slate-700">Preferred Date</label>
//                 <input required type="date" value={testRideForm.date} onChange={(e) => setTestRideForm({ ...testRideForm, date: e.target.value })} className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
//               </div>
//               <div className="flex gap-3 pt-4">
//                 <Button type="button" variant="outline" className="flex-1" onClick={() => setIsTestRideOpen(false)}>Cancel</Button>
//                 <Button type="submit" className="flex-1 bg-orange-500 hover:bg-orange-600 text-white"><Calendar className="mr-2 h-4 w-4" /> Book via WhatsApp</Button>
//               </div>
//             </form>
//           </Dialog.Content>
//         </Dialog.Portal>
//       </Dialog.Root>
//     </>
//   )
// }

"use client";

import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Calendar,
  Check,
  Gauge,
  MapPin,
  ShoppingCart,
  Zap,
  CreditCard,
} from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { sendToWhatsApp } from "@/lib/whatsapp";

interface BikeCardProps {
  title: string;
  price?: string;
  bestFor: string;
  imageSrc: string;
  tags: string[];
  specs: {
    range: string;
    battery: string;
    topSpeed: string;
  };
  features: string[];
}

export function BikeCard({
  title,
  price = "$1,899",
  bestFor,
  imageSrc,
  tags,
  specs,
  features,
}: BikeCardProps) {
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [isTestRideOpen, setIsTestRideOpen] = useState(false);

  // Form states
  const [orderForm, setOrderForm] = useState({
    name: "",
    email: "",
    address: "",
  });
  const [testRideForm, setTestRideForm] = useState({
    name: "",
    phone: "",
    date: "",
  });

  const getFullImageUrl = (src: string) => {
    if (src.startsWith("http")) return src;
    return typeof window !== "undefined"
      ? `${window.location.origin}${src}`
      : src;
  };

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendToWhatsApp({
      type: "ORDER",
      data: {
        modelName: title,
        price,
        imageUrl: getFullImageUrl(imageSrc),
        name: orderForm.name,
        email: orderForm.email,
        address: orderForm.address,
      },
    });
    setIsOrderOpen(false);
  };

  const handleTestRideSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendToWhatsApp({
      type: "MODEL_TEST_RIDE",
      data: {
        modelName: title,
        imageUrl: getFullImageUrl(imageSrc),
        name: testRideForm.name,
        phone: testRideForm.phone,
        date: testRideForm.date,
      },
    });
    setIsTestRideOpen(false);
  };

  return (
    <>
      <Card className="p-0 rounded-lg w-full max-w-[600px] bg-card text-card-foreground shadow-sm transition-all hover:shadow-md">
        <CardContent className="px-6 py-6">
          {/* <div 
          className="relative mb-6 aspect-[2/1] w-full overflow-hidden rounded-lg bg-muted/40"
          >
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div> */}
          {/* <div className="relative mb-6 aspect-square w-full overflow-hidden rounded-lg bg-muted/40">
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div> */}
          <div className="relative mb-6 aspect-square w-full overflow-hidden rounded-lg bg-muted/40">
  <Image
    src={imageSrc}
    alt={title}
    fill
    className="scale-105 object-cover transition-transform duration-300 hover:scale-100"
  />
</div>

          <p className="mb-1 text-sm font-semibold text-primary">
            Best for: {bestFor}
          </p>
          <h3 className="mb-3 text-2xl font-bold tracking-tight text-foreground">
            {title}
          </h3>

          <div className="mb-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="rounded-full font-normal"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <div className="mb-6 grid grid-cols-3 gap-2 text-center">
            <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-muted/30 p-2.5">
              <MapPin className="mb-1 h-5 w-5 text-muted-foreground" />
              <span className="text-base font-bold text-foreground">
                {specs.range}
              </span>
              <span className="text-xs text-muted-foreground">Range</span>
            </div>
            <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-muted/30 p-2.5">
              <Zap className="mb-1 h-5 w-5 text-muted-foreground" />
              <span className="text-base font-bold text-foreground">
                {specs.battery}
              </span>
              <span className="text-xs text-muted-foreground">Battery</span>
            </div>
            <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-muted/30 p-2.5">
              <Gauge className="mb-1 h-5 w-5 text-muted-foreground" />
              <span className="text-base font-bold text-foreground">
                {specs.topSpeed}
              </span>
              <span className="text-xs text-muted-foreground">Top Speed</span>
            </div>
          </div>

          <ul className="mb-6 space-y-2 text-sm text-foreground">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* <div className="flex flex-col gap-3 sm:flex-row">
            <Button
            size="lg"
              // className="flex-1 font-semibold"
              onClick={() => setIsOrderOpen(true)}
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Order Now
            </Button>
            <Button
            size="lg"
              variant="outline"
              // className="flex-1 font-semibold"
              onClick={() => setIsTestRideOpen(true)}
            >
              <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
              Book Test Ride
            </Button>
          </div> */}
          <div className="flex w-full flex-col gap-3 sm:flex-row">
  <Button
    size="lg"
    className="w-full md:flex-1 font-semibold"
    onClick={() => setIsOrderOpen(true)}
  >
    <ShoppingCart className="mr-2 h-4 w-4" />
    Order Now
  </Button>
  <Button
    size="lg"
    variant="outline"
    className="w-full md:flex-1 font-semibold"
    onClick={() => setIsTestRideOpen(true)}
  >
    <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
    Book Test Ride
  </Button>
</div>
        </CardContent>
      </Card>

      {/* Order Dialog */}
      <Dialog.Root open={isOrderOpen} onOpenChange={setIsOrderOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
          <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-border bg-card p-8 shadow-2xl text-card-foreground">
            <Dialog.Title className="text-2xl font-extrabold text-foreground">
              Order {title}
            </Dialog.Title>
            <Dialog.Description className="mt-1 text-sm text-muted-foreground">
              Price: {price}. Fill out your details below.
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
                <Button size="lg"  type="submit" className="flex-1">
                  <CreditCard className="mr-2 h-4 w-4" /> Send Order via
                  WhatsApp
                </Button>
              </div>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      {/* Model Test Ride Dialog */}
      <Dialog.Root open={isTestRideOpen} onOpenChange={setIsTestRideOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
          <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-border bg-card p-8 shadow-2xl text-card-foreground">
            <Dialog.Title className="text-2xl font-extrabold text-foreground">
              Book Test Ride: {title}
            </Dialog.Title>
            <Dialog.Description className="mt-1 text-sm text-muted-foreground">
              Select a date to test ride this specific bike.
            </Dialog.Description>
            <form className="mt-6 space-y-4" onSubmit={handleTestRideSubmit}>
              <div>
                <label className="mb-1 block text-xs font-bold uppercase text-foreground">
                  Full Name
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
                <Button size="lg"  type="submit" className="flex-1">
                  <Calendar className="mr-2 h-4 w-4" /> Book via WhatsApp
                </Button>
              </div>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
