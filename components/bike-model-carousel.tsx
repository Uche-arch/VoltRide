// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import {
//   ChevronLeft,
//   ChevronRight,
//   Calendar,
//   ShoppingBag,
//   Check,
// } from "lucide-react";
// import * as Dialog from "@radix-ui/react-dialog";
// import { Button } from "./ui/button";

// // --- TYPES ---
// export interface BikeVariant {
//   id: string;
//   colorName: string;
//   colorHex: string;
//   imageSrc: string;
// }

// export interface BikeModel {
//   id: string;
//   name: string;
//   tagline: string;
//   price: string;
//   specs: {
//     speed: string;
//     range: string;
//     chargeTime: string;
//     motor: string;
//   };
//   variants: BikeVariant[];
// }

// interface ProductCarouselSectionProps {
//   model: BikeModel;
// }

// // --- SINGLE MODEL CAROUSEL COMPONENT ---
// export function BikeModelCarousel({ model }: ProductCarouselSectionProps) {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isTestRideOpen, setIsTestRideOpen] = useState(false);

//   const activeVariant = model.variants[currentIndex];

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % model.variants.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex(
//       (prev) => (prev - 1 + model.variants.length) % model.variants.length,
//     );
//   };

//   return (
//     <div className="rounded-[32px] border border-slate-200/80 bg-white p-6 md:p-10 shadow-sm transition-all">
//       <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
//         {/* Left Column: Interactive Carousel Display */}
//         <div className="lg:col-span-7 flex flex-col items-center">
//           <div className="relative w-full h-[320px] sm:h-[400px] flex items-center justify-center bg-slate-50/50 rounded-2xl overflow-hidden group">
//             {/* Main Bike Image */}
//             <div className="relative w-full h-full p-6 transition-all duration-300">
//               <Image
//                 src={activeVariant.imageSrc}
//                 alt={`${model.name} in ${activeVariant.colorName}`}
//                 fill
//                 className="object-contain drop-shadow-md"
//                 priority
//               />
//             </div>

//             {/* Carousel Controls */}
//             {model.variants.length > 1 && (
//               <>
//                 <button
//                   onClick={prevSlide}
//                   className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/80 backdrop-blur-md shadow-md flex items-center justify-center text-slate-800 hover:bg-white transition"
//                   aria-label="Previous Color"
//                 >
//                   <ChevronLeft className="h-5 w-5" />
//                 </button>

//                 <button
//                   onClick={nextSlide}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/80 backdrop-blur-md shadow-md flex items-center justify-center text-slate-800 hover:bg-white transition"
//                   aria-label="Next Color"
//                 >
//                   <ChevronRight className="h-5 w-5" />
//                 </button>
//               </>
//             )}
//           </div>

//           {/* Color Selector Dots/Swatches */}
//           <div className="flex items-center gap-3 mt-6">
//             <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
//               Color:{" "}
//               <span className="text-slate-900 font-bold">
//                 {activeVariant.colorName}
//               </span>
//             </span>
//             <div className="flex gap-2 ml-2">
//               {model.variants.map((variant, idx) => (
//                 <button
//                   key={variant.id}
//                   onClick={() => setCurrentIndex(idx)}
//                   className={`h-7 w-7 rounded-full border-2 transition-all flex items-center justify-center ${
//                     currentIndex === idx
//                       ? "border-orange-500 scale-110 shadow-sm"
//                       : "border-transparent opacity-70 hover:opacity-100"
//                   }`}
//                   style={{ backgroundColor: variant.colorHex }}
//                   title={variant.colorName}
//                 >
//                   {currentIndex === idx && (
//                     <Check
//                       className={`h-3.5 w-3.5 ${variant.colorHex.toLowerCase() === "#ffffff" ? "text-slate-900" : "text-white"}`}
//                     />
//                   )}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Right Column: Model Specs & Persistent CTAs */}
//         <div className="lg:col-span-5 flex flex-col justify-between h-full">
//           <div>
//             <div className="inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-extrabold text-orange-600 uppercase tracking-wider mb-3">
//               Premium E-Bike
//             </div>
//             <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">
//               {model.name}
//             </h3>
//             <p className="text-slate-500 mt-1 text-sm">{model.tagline}</p>
//             <div className="mt-4 text-3xl font-black text-slate-900">
//               {model.price}
//             </div>

//             {/* Quick Specs Grid */}
//             <div className="grid grid-cols-2 gap-3 my-6">
//               <div className="p-3 bg-slate-50 rounded-xl">
//                 <span className="block text-xs text-slate-400 font-medium">
//                   Top Speed
//                 </span>
//                 <span className="text-base font-bold text-slate-800">
//                   {model.specs.speed}
//                 </span>
//               </div>
//               <div className="p-3 bg-slate-50 rounded-xl">
//                 <span className="block text-xs text-slate-400 font-medium">
//                   Range
//                 </span>
//                 <span className="text-base font-bold text-slate-800">
//                   {model.specs.range}
//                 </span>
//               </div>
//               <div className="p-3 bg-slate-50 rounded-xl">
//                 <span className="block text-xs text-slate-400 font-medium">
//                   Charge Time
//                 </span>
//                 <span className="text-base font-bold text-slate-800">
//                   {model.specs.chargeTime}
//                 </span>
//               </div>
//               <div className="p-3 bg-slate-50 rounded-xl">
//                 <span className="block text-xs text-slate-400 font-medium">
//                   Motor
//                 </span>
//                 <span className="text-base font-bold text-slate-800">
//                   {model.specs.motor}
//                 </span>
//               </div>
//             </div>
//           </div>

//   {/* Action Buttons (Present on every slide) */}
//   <div className="flex flex-col sm:flex-row gap-3 pt-2">
//     {/* Book Test Ride Trigger */}
//     {/* <button

//       className="flex-1 h-12 rounded-full border-2 border-slate-900 text-slate-900 font-bold hover:bg-slate-900 hover:text-white transition flex items-center justify-center gap-2 text-sm"
//     >

//     </button> */}

//     <Button  size="lg" onClick={() => setIsTestRideOpen(true)}>
//       <Calendar className="h-4 w-4" />
//       Book Test Ride
//       {/* <a href={auth.signup.url}>{auth.signup.title}</a> */}
//     </Button>

//     {/* Order Button */}

//     <Button  size="lg">
//       {/* <a
//         href={`/checkout?model=${model.id}&color=${activeVariant.id}`}
//         // className="flex-1 h-12 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-600 transition flex items-center justify-center gap-2 text-sm shadow-md"
//       > */}
//         <ShoppingBag className="h-4 w-4" />
//         Order Now
//       {/* </a> */}
//       {/* <a href={auth.signup.url}>{auth.signup.title}</a> */}
//     </Button>
//   </div>
//         </div>
//       </div>

//       {/* --- RADIX TEST RIDE MODAL --- */}
//       <Dialog.Root open={isTestRideOpen} onOpenChange={setIsTestRideOpen}>
//         <Dialog.Portal>
//           <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 animate-fade-in" />
//           <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-3xl p-8 max-w-md w-full z-50 shadow-2xl border border-slate-100">
//             <Dialog.Title className="text-2xl font-extrabold text-slate-900">
//               Schedule Test Ride
//             </Dialog.Title>
//             <Dialog.Description className="text-sm text-slate-500 mt-1">
//               You are booking a test ride for the{" "}
//               <strong className="text-slate-800">{model.name}</strong> (
//               {activeVariant.colorName}).
//             </Dialog.Description>

//             <form
//               className="mt-6 space-y-4"
//               onSubmit={(e) => {
//                 e.preventDefault();
//                 setIsTestRideOpen(false);
//               }}
//             >
//               <div>
//                 <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
//                   Your Name
//                 </label>
//                 <input
//                   required
//                   type="text"
//                   placeholder="John Doe"
//                   className="w-full h-11 px-4 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
//                   Phone Number
//                 </label>
//                 <input
//                   required
//                   type="tel"
//                   placeholder="+1 (555) 000-0000"
//                   className="w-full h-11 px-4 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
//                   Preferred Date
//                 </label>
//                 <input
//                   required
//                   type="date"
//                   className="w-full h-11 px-4 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
//                 />
//               </div>

//               <div className="flex gap-3 pt-4">
//                 <button
//                   type="button"
//                   onClick={() => setIsTestRideOpen(false)}
//                   className="flex-1 h-11 rounded-full border border-slate-200 text-slate-600 font-bold text-sm hover:bg-slate-50 transition"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="flex-1 h-11 rounded-full bg-orange-500 text-white font-bold text-sm hover:bg-orange-600 transition shadow-md"
//                 >
//                   Confirm Booking
//                 </button>
//               </div>
//             </form>
//           </Dialog.Content>
//         </Dialog.Portal>
//       </Dialog.Root>
//     </div>
//   );
// }

// "use client"

// import { useState } from "react"
// import Image from "next/image"
// import { ChevronLeft, ChevronRight, Calendar, ShoppingBag } from "lucide-react"
// import * as Dialog from "@radix-ui/react-dialog"
// import { Button } from "./ui/button"

// export interface BikeModel {
//   id: string
//   name: string
//   tagline: string
//   price: string
//   specs: {
//     speed: string
//     range: string
//     chargeTime: string
//     motor: string
//   }
//   images: string[] // Array of image URLs/paths
// }

// interface BikeModelCarouselProps {
//   model: BikeModel
// }

// export function BikeModelCarousel({ model }: BikeModelCarouselProps) {
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [isTestRideOpen, setIsTestRideOpen] = useState(false)

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % model.images.length)
//   }

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev - 1 + model.images.length) % model.images.length)
//   }

//   return (
//     <div className="rounded-[32px] border border-slate-200/80 bg-white p-6 shadow-sm transition-all md:p-10">
//       <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">

//         {/* Left Column: Pure Image Carousel */}
//         <div className="flex flex-col items-center lg:col-span-7">
//           <div className="group relative flex h-[320px] w-full items-center justify-center overflow-hidden rounded-2xl bg-slate-50/50 sm:h-[400px]">
//             {/* Main Bike Image */}
//             <div className="relative h-full w-full p-6 transition-all duration-300">
//               <Image
//                 src={model.images[currentIndex]}
//                 alt={`${model.name} view ${currentIndex + 1}`}
//                 fill
//                 className="object-contain drop-shadow-md"
//                 priority
//               />
//             </div>

//             {/* Carousel Arrow Controls */}
//             {model.images.length > 1 && (
//               <>
//                 <button
//                   onClick={prevSlide}
//                   className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-slate-800 backdrop-blur-md shadow-md transition hover:bg-white"
//                   aria-label="Previous Image"
//                 >
//                   <ChevronLeft className="h-5 w-5" />
//                 </button>

//                 <button
//                   onClick={nextSlide}
//                   className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-slate-800 backdrop-blur-md shadow-md transition hover:bg-white"
//                   aria-label="Next Image"
//                 >
//                   <ChevronRight className="h-5 w-5" />
//                 </button>
//               </>
//             )}
//           </div>

//           {/* Simple Thumbnail / Slide Indicators */}
//           {model.images.length > 1 && (
//             <div className="mt-4 flex gap-2">
//               {model.images.map((_, idx) => (
//                 <button
//                   key={idx}
//                   onClick={() => setCurrentIndex(idx)}
//                   className={`h-2.5 rounded-full transition-all ${
//                     currentIndex === idx
//                       ? "w-8 bg-orange-500"
//                       : "w-2.5 bg-slate-300 hover:bg-slate-400"
//                   }`}
//                   aria-label={`Go to slide ${idx + 1}`}
//                 />
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Right Column: Model Specs & CTAs */}
//         <div className="flex h-full flex-col justify-between lg:col-span-5">
//           <div>
//             <div className="mb-3 inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-orange-600">
//               E-Bike Series
//             </div>
//             <h3 className="text-3xl font-extrabold tracking-tight text-slate-900">{model.name}</h3>
//             <p className="mt-1 text-sm text-slate-500">{model.tagline}</p>
//             <div className="mt-4 text-3xl font-black text-slate-900">{model.price}</div>

//             {/* Quick Specs Grid */}
//             <div className="my-6 grid grid-cols-2 gap-3">
//               <div className="rounded-xl bg-slate-50 p-3">
//                 <span className="block text-xs font-medium text-slate-400">Top Speed</span>
//                 <span className="text-base font-bold text-slate-800">{model.specs.speed}</span>
//               </div>
//               <div className="rounded-xl bg-slate-50 p-3">
//                 <span className="block text-xs font-medium text-slate-400">Range</span>
//                 <span className="text-base font-bold text-slate-800">{model.specs.range}</span>
//               </div>
//               <div className="rounded-xl bg-slate-50 p-3">
//                 <span className="block text-xs font-medium text-slate-400">Charge Time</span>
//                 <span className="text-base font-bold text-slate-800">{model.specs.chargeTime}</span>
//               </div>
//               <div className="rounded-xl bg-slate-50 p-3">
//                 <span className="block text-xs font-medium text-slate-400">Motor</span>
//                 <span className="text-base font-bold text-slate-800">{model.specs.motor}</span>
//               </div>
//             </div>
//           </div>

//           {/* Action Buttons */}
//           {/* <div className="flex flex-col gap-3 pt-2 sm:flex-row">
//             <button
//               onClick={() => setIsTestRideOpen(true)}
//               className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full border-2 border-slate-900 text-sm font-bold text-slate-900 transition hover:bg-slate-900 hover:text-white"
//             >
//               <Calendar className="h-4 w-4" />
//               Book Test Ride
//             </button>

//             <a
//               href={`/checkout?model=${model.id}&imageIndex=${currentIndex}`}
//               className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-orange-500 text-sm font-bold text-white shadow-md transition hover:bg-orange-600"
//             >
//               <ShoppingBag className="h-4 w-4" />
//               Order Now
//             </a>
//           </div> */}
//                     {/* Action Buttons (Present on every slide) */}
//           <div className="flex flex-col sm:flex-row gap-3 pt-2">
//             {/* Book Test Ride Trigger */}
//             {/* <button

//               className="flex-1 h-12 rounded-full border-2 border-slate-900 text-slate-900 font-bold hover:bg-slate-900 hover:text-white transition flex items-center justify-center gap-2 text-sm"
//             >

//             </button> */}

//             <Button  size="lg" onClick={() => setIsTestRideOpen(true)}>
//               <Calendar className="h-4 w-4" />
//               Book Test Ride
//               {/* <a href={auth.signup.url}>{auth.signup.title}</a> */}
//             </Button>

//             {/* Order Button */}

//             <Button  size="lg">
//               {/* <a
//                 href={`/checkout?model=${model.id}&color=${activeVariant.id}`}
//                 // className="flex-1 h-12 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-600 transition flex items-center justify-center gap-2 text-sm shadow-md"
//               > */}
//                 <ShoppingBag className="h-4 w-4" />
//                 Order Now
//               {/* </a> */}
//               {/* <a href={auth.signup.url}>{auth.signup.title}</a> */}
//             </Button>
//           </div>
//         </div>

//       </div>

//       {/* --- RADIX TEST RIDE MODAL --- */}
//       <Dialog.Root open={isTestRideOpen} onOpenChange={setIsTestRideOpen}>
//         <Dialog.Portal>
//           <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
//           <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-slate-100 bg-white p-8 shadow-2xl">
//             <Dialog.Title className="text-2xl font-extrabold text-slate-900">
//               Schedule Test Ride
//             </Dialog.Title>
//             <Dialog.Description className="mt-1 text-sm text-slate-500">
//               You are booking a test ride for the <strong className="text-slate-800">{model.name}</strong>.
//             </Dialog.Description>

//             <form className="mt-6 space-y-4" onSubmit={(e) => { e.preventDefault(); setIsTestRideOpen(false); }}>
//               <div>
//                 <label className="mb-1 block text-xs font-bold uppercase text-slate-700">Your Name</label>
//                 <input required type="text" placeholder="John Doe" className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
//               </div>
//               <div>
//                 <label className="mb-1 block text-xs font-bold uppercase text-slate-700">Phone Number</label>
//                 <input required type="tel" placeholder="+1 (555) 000-0000" className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
//               </div>
//               <div>
//                 <label className="mb-1 block text-xs font-bold uppercase text-slate-700">Preferred Date</label>
//                 <input required type="date" className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
//               </div>

//               <div className="flex gap-3 pt-4">
//                 <Button
//                   type="button"
//                   onClick={() => setIsTestRideOpen(false)}
//                 //   className="h-11 flex-1 rounded-full border border-slate-200 text-sm font-bold text-slate-600 transition hover:bg-slate-50"
//                 >
//                   Cancel
//                 </Button>
//                 <Button
//                   type="submit"
//                 //   className="h-11 flex-1 rounded-full bg-orange-500 text-sm font-bold text-white shadow-md transition hover:bg-orange-600"
//                 >
//                   Confirm Booking
//                 </Button>
//               </div>
//             </form>
//           </Dialog.Content>
//         </Dialog.Portal>
//       </Dialog.Root>
//     </div>
//   )
// }

// "use client"

// import { useState } from "react"
// import Image from "next/image"
// import { ChevronLeft, ChevronRight, Calendar, ShoppingBag, CreditCard } from "lucide-react"
// import * as Dialog from "@radix-ui/react-dialog"
// import { Button } from "./ui/button"

// export interface BikeModel {
//   id: string
//   name: string
//   tagline: string
//   price: string
//   specs: {
//     speed: string
//     range: string
//     chargeTime: string
//     motor: string
//   }
//   images: string[] // Array of image URLs/paths
// }

// interface BikeModelCarouselProps {
//   model: BikeModel
// }

// export function BikeModelCarousel({ model }: BikeModelCarouselProps) {
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [isTestRideOpen, setIsTestRideOpen] = useState(false)
//   const [isOrderOpen, setIsOrderOpen] = useState(false)

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % model.images.length)
//   }

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev - 1 + model.images.length) % model.images.length)
//   }

//   return (
//     <div className="rounded-[32px] border border-slate-200/80 bg-white p-6 shadow-sm transition-all md:p-10">
//       <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">

//         {/* Left Column: Pure Image Carousel */}
//         <div className="flex flex-col items-center lg:col-span-7">
//           <div className="group relative flex h-[320px] w-full items-center justify-center overflow-hidden rounded-2xl bg-slate-50/50 sm:h-[400px]">
//             {/* Main Bike Image */}
//             <div className="relative h-full w-full p-6 transition-all duration-300">
//               <Image
//                 src={model.images[currentIndex]}
//                 alt={`${model.name} view ${currentIndex + 1}`}
//                 fill
//                 className="object-contain drop-shadow-md"
//                 priority
//               />
//             </div>

//             {/* Carousel Arrow Controls */}
//             {model.images.length > 1 && (
//               <>
//                 <button
//                   onClick={prevSlide}
//                   className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-slate-800 backdrop-blur-md shadow-md transition hover:bg-white"
//                   aria-label="Previous Image"
//                 >
//                   <ChevronLeft className="h-5 w-5" />
//                 </button>

//                 <button
//                   onClick={nextSlide}
//                   className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-slate-800 backdrop-blur-md shadow-md transition hover:bg-white"
//                   aria-label="Next Image"
//                 >
//                   <ChevronRight className="h-5 w-5" />
//                 </button>
//               </>
//             )}
//           </div>

//           {/* Simple Thumbnail / Slide Indicators */}
//           {model.images.length > 1 && (
//             <div className="mt-4 flex gap-2">
//               {model.images.map((_, idx) => (
//                 <button
//                   key={idx}
//                   onClick={() => setCurrentIndex(idx)}
//                   className={`h-2.5 rounded-full transition-all ${
//                     currentIndex === idx
//                       ? "w-8 bg-orange-500"
//                       : "w-2.5 bg-slate-300 hover:bg-slate-400"
//                   }`}
//                   aria-label={`Go to slide ${idx + 1}`}
//                 />
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Right Column: Model Specs & CTAs */}
//         <div className="flex h-full flex-col justify-between lg:col-span-5">
//           <div>
//             <div className="mb-3 inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-orange-600">
//               E-Bike Series
//             </div>
//             <h3 className="text-3xl font-extrabold tracking-tight text-slate-900">{model.name}</h3>
//             <p className="mt-1 text-sm text-slate-500">{model.tagline}</p>
//             <div className="mt-4 text-3xl font-black text-slate-900">{model.price}</div>

//             {/* Quick Specs Grid */}
//             <div className="my-6 grid grid-cols-2 gap-3">
//               <div className="rounded-xl bg-slate-50 p-3">
//                 <span className="block text-xs font-medium text-slate-400">Top Speed</span>
//                 <span className="text-base font-bold text-slate-800">{model.specs.speed}</span>
//               </div>
//               <div className="rounded-xl bg-slate-50 p-3">
//                 <span className="block text-xs font-medium text-slate-400">Range</span>
//                 <span className="text-base font-bold text-slate-800">{model.specs.range}</span>
//               </div>
//               <div className="rounded-xl bg-slate-50 p-3">
//                 <span className="block text-xs font-medium text-slate-400">Charge Time</span>
//                 <span className="text-base font-bold text-slate-800">{model.specs.chargeTime}</span>
//               </div>
//               <div className="rounded-xl bg-slate-50 p-3">
//                 <span className="block text-xs font-medium text-slate-400">Motor</span>
//                 <span className="text-base font-bold text-slate-800">{model.specs.motor}</span>
//               </div>
//             </div>
//           </div>

//           {/* Action Buttons */}
//           <div className="flex flex-col gap-3 pt-2 sm:flex-row">
//             <Button size="lg" variant="outline" className="flex-1" onClick={() => setIsTestRideOpen(true)}>
//               <Calendar className="h-4 w-4 mr-2" />
//               Book Test Ride
//             </Button>

//             <Button size="lg" className="flex-1 bg-orange-500 hover:bg-orange-600 text-white" onClick={() => setIsOrderOpen(true)}>
//               <ShoppingBag className="h-4 w-4 mr-2" />
//               Order Now
//             </Button>
//           </div>
//         </div>

//       </div>

//       {/* --- RADIX TEST RIDE MODAL --- */}
//       <Dialog.Root open={isTestRideOpen} onOpenChange={setIsTestRideOpen}>
//         <Dialog.Portal>
//           <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
//           <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-slate-100 bg-white p-8 shadow-2xl">
//             <Dialog.Title className="text-2xl font-extrabold text-slate-900">
//               Schedule Test Ride
//             </Dialog.Title>
//             <Dialog.Description className="mt-1 text-sm text-slate-500">
//               You are booking a test ride for the <strong className="text-slate-800">{model.name}</strong>.
//             </Dialog.Description>

//             <form className="mt-6 space-y-4" onSubmit={(e) => { e.preventDefault(); setIsTestRideOpen(false); }}>
//               <div>
//                 <label className="mb-1 block text-xs font-bold uppercase text-slate-700">Your Name</label>
//                 <input required type="text" placeholder="John Doe" className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
//               </div>
//               <div>
//                 <label className="mb-1 block text-xs font-bold uppercase text-slate-700">Phone Number</label>
//                 <input required type="tel" placeholder="+1 (555) 000-0000" className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
//               </div>
//               <div>
//                 <label className="mb-1 block text-xs font-bold uppercase text-slate-700">Preferred Date</label>
//                 <input required type="date" className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
//               </div>

//               <div className="flex gap-3 pt-4">
//                 <Button
//                   type="button"
//                   variant="outline"
//                   className="flex-1"
//                   onClick={() => setIsTestRideOpen(false)}
//                 >
//                   Cancel
//                 </Button>
//                 <Button
//                   type="submit"
//                   className="flex-1 bg-orange-500 hover:bg-orange-600 text-white"
//                 >
//                   Confirm Booking
//                 </Button>
//               </div>
//             </form>
//           </Dialog.Content>
//         </Dialog.Portal>
//       </Dialog.Root>

//       {/* --- RADIX ORDER NOW MODAL --- */}
//       <Dialog.Root open={isOrderOpen} onOpenChange={setIsOrderOpen}>
//         <Dialog.Portal>
//           <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
//           <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-slate-100 bg-white p-8 shadow-2xl">
//             <Dialog.Title className="text-2xl font-extrabold text-slate-900">
//               Place Your Order
//             </Dialog.Title>
//             <Dialog.Description className="mt-1 text-sm text-slate-500">
//               Ready to buy the <strong className="text-slate-800">{model.name}</strong> for <strong className="text-slate-900">{model.price}</strong>? Fill in your details below.
//             </Dialog.Description>

//             <form className="mt-6 space-y-4" onSubmit={(e) => { e.preventDefault(); setIsOrderOpen(false); }}>
//               <div>
//                 <label className="mb-1 block text-xs font-bold uppercase text-slate-700">Full Name</label>
//                 <input required type="text" placeholder="John Doe" className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
//               </div>
//               <div>
//                 <label className="mb-1 block text-xs font-bold uppercase text-slate-700">Email Address</label>
//                 <input required type="email" placeholder="john@example.com" className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
//               </div>
//               <div>
//                 <label className="mb-1 block text-xs font-bold uppercase text-slate-700">Delivery Address</label>
//                 <input required type="text" placeholder="123 Main St, City, Country" className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
//               </div>

//               <div className="flex gap-3 pt-4">
//                 <Button
//                   type="button"
//                   variant="outline"
//                   className="flex-1"
//                   onClick={() => setIsOrderOpen(false)}
//                 >
//                   Cancel
//                 </Button>
//                 <Button
//                   type="submit"
//                   className="flex-1 bg-orange-500 hover:bg-orange-600 text-white"
//                 >
//                   <CreditCard className="h-4 w-4 mr-2" />
//                   Proceed to Checkout
//                 </Button>
//               </div>
//             </form>
//           </Dialog.Content>
//         </Dialog.Portal>
//       </Dialog.Root>

//     </div>
//   )
// }

// "use client"

// import { useState } from "react"
// import Image from "next/image"
// import { ChevronLeft, ChevronRight, Calendar, ShoppingBag, CreditCard } from "lucide-react"
// import * as Dialog from "@radix-ui/react-dialog"
// import { Button } from "./ui/button"
// import { sendToWhatsApp } from "@/lib/whatsapp"

// export interface BikeModel {
//   id: string
//   name: string
//   tagline: string
//   price: string
//   specs: {
//     speed: string
//     range: string
//     chargeTime: string
//     motor: string
//   }
//   images: string[]
// }

// interface BikeModelCarouselProps {
//   model: BikeModel
// }

// export function BikeModelCarousel({ model }: BikeModelCarouselProps) {
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [isTestRideOpen, setIsTestRideOpen] = useState(false)
//   const [isOrderOpen, setIsOrderOpen] = useState(false)

//   // Form States
//   const [testRideForm, setTestRideForm] = useState({ name: "", phone: "", date: "" })
//   const [orderForm, setOrderForm] = useState({ name: "", email: "", address: "" })

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % model.images.length)
//   }

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev - 1 + model.images.length) % model.images.length)
//   }

//   // Helper to format absolute URL for image sharing
//   const getCurrentImageUrl = () => {
//     const currentImgPath = model.images[currentIndex] || model.images[0]
//     if (currentImgPath.startsWith("http")) return currentImgPath
//     return typeof window !== "undefined" ? `${window.location.origin}${currentImgPath}` : currentImgPath
//   }

//   const handleTestRideSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     sendToWhatsApp({
//       type: "MODEL_TEST_RIDE",
//       data: {
//         modelName: model.name,
//         imageUrl: getCurrentImageUrl(),
//         name: testRideForm.name,
//         phone: testRideForm.phone,
//         date: testRideForm.date,
//       },
//     })
//     setIsTestRideOpen(false)
//   }

//   const handleOrderSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     sendToWhatsApp({
//       type: "ORDER",
//       data: {
//         modelName: model.name,
//         price: model.price,
//         imageUrl: getCurrentImageUrl(),
//         name: orderForm.name,
//         email: orderForm.email,
//         address: orderForm.address,
//       },
//     })
//     setIsOrderOpen(false)
//   }

//   return (
//     <div className="rounded-[32px] border border-slate-200/80 bg-white p-6 shadow-sm transition-all md:p-10">
//       <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">

//         {/* Left Column: Image Carousel */}
//         <div className="flex flex-col items-center lg:col-span-7">
//           <div className="group relative flex h-[320px] w-full items-center justify-center overflow-hidden rounded-2xl bg-slate-50/50 sm:h-[400px]">
//             <div className="relative h-full w-full p-6 transition-all duration-300">
//               <Image
//                 src={model.images[currentIndex]}
//                 alt={`${model.name} view ${currentIndex + 1}`}
//                 fill
//                 className="object-contain drop-shadow-md"
//                 priority
//               />
//             </div>

//             {model.images.length > 1 && (
//               <>
//                 <button
//                   onClick={prevSlide}
//                   className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-slate-800 backdrop-blur-md shadow-md transition hover:bg-white"
//                   aria-label="Previous Image"
//                 >
//                   <ChevronLeft className="h-5 w-5" />
//                 </button>

//                 <button
//                   onClick={nextSlide}
//                   className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-slate-800 backdrop-blur-md shadow-md transition hover:bg-white"
//                   aria-label="Next Image"
//                 >
//                   <ChevronRight className="h-5 w-5" />
//                 </button>
//               </>
//             )}
//           </div>

//           {model.images.length > 1 && (
//             <div className="mt-4 flex gap-2">
//               {model.images.map((_, idx) => (
//                 <button
//                   key={idx}
//                   onClick={() => setCurrentIndex(idx)}
//                   className={`h-2.5 rounded-full transition-all ${
//                     currentIndex === idx
//                       ? "w-8 bg-orange-500"
//                       : "w-2.5 bg-slate-300 hover:bg-slate-400"
//                   }`}
//                   aria-label={`Go to slide ${idx + 1}`}
//                 />
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Right Column: Specs & Actions */}
//         <div className="flex h-full flex-col justify-between lg:col-span-5">
//           <div>
//             <div className="mb-3 inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-orange-600">
//               E-Bike Series
//             </div>
//             <h3 className="text-3xl font-extrabold tracking-tight text-slate-900">{model.name}</h3>
//             <p className="mt-1 text-sm text-slate-500">{model.tagline}</p>
//             <div className="mt-4 text-3xl font-black text-slate-900">{model.price}</div>

//             <div className="my-6 grid grid-cols-2 gap-3">
//               <div className="rounded-xl bg-slate-50 p-3">
//                 <span className="block text-xs font-medium text-slate-400">Top Speed</span>
//                 <span className="text-base font-bold text-slate-800">{model.specs.speed}</span>
//               </div>
//               <div className="rounded-xl bg-slate-50 p-3">
//                 <span className="block text-xs font-medium text-slate-400">Range</span>
//                 <span className="text-base font-bold text-slate-800">{model.specs.range}</span>
//               </div>
//               <div className="rounded-xl bg-slate-50 p-3">
//                 <span className="block text-xs font-medium text-slate-400">Charge Time</span>
//                 <span className="text-base font-bold text-slate-800">{model.specs.chargeTime}</span>
//               </div>
//               <div className="rounded-xl bg-slate-50 p-3">
//                 <span className="block text-xs font-medium text-slate-400">Motor</span>
//                 <span className="text-base font-bold text-slate-800">{model.specs.motor}</span>
//               </div>
//             </div>
//           </div>

//           <div className="flex flex-col gap-3 pt-2 sm:flex-row">
//             <Button size="lg" variant="outline" className="flex-1" onClick={() => setIsTestRideOpen(true)}>
//               <Calendar className="h-4 w-4 mr-2" />
//               Book Test Ride
//             </Button>

//             <Button size="lg" className="flex-1 bg-orange-500 hover:bg-orange-600 text-white" onClick={() => setIsOrderOpen(true)}>
//               <ShoppingBag className="h-4 w-4 mr-2" />
//               Order Now
//             </Button>
//           </div>
//         </div>

//       </div>

//       {/* --- SPECIFIC TEST RIDE MODAL --- */}
//       <Dialog.Root open={isTestRideOpen} onOpenChange={setIsTestRideOpen}>
//         <Dialog.Portal>
//           <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
//           <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-slate-100 bg-white p-8 shadow-2xl">
//             <Dialog.Title className="text-2xl font-extrabold text-slate-900">
//               Schedule Test Ride
//             </Dialog.Title>
//             <Dialog.Description className="mt-1 text-sm text-slate-500">
//               You are booking a test ride for the <strong className="text-slate-800">{model.name}</strong>.
//             </Dialog.Description>

//             <form className="mt-6 space-y-4" onSubmit={handleTestRideSubmit}>
//               <div>
//                 <label className="mb-1 block text-xs font-bold uppercase text-slate-700">Your Name</label>
//                 <input
//                   required
//                   type="text"
//                   placeholder="John Doe"
//                   value={testRideForm.name}
//                   onChange={(e) => setTestRideForm({ ...testRideForm, name: e.target.value })}
//                   className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
//                 />
//               </div>
//               <div>
//                 <label className="mb-1 block text-xs font-bold uppercase text-slate-700">Phone Number</label>
//                 <input
//                   required
//                   type="tel"
//                   placeholder="+1 (555) 000-0000"
//                   value={testRideForm.phone}
//                   onChange={(e) => setTestRideForm({ ...testRideForm, phone: e.target.value })}
//                   className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
//                 />
//               </div>
//               <div>
//                 <label className="mb-1 block text-xs font-bold uppercase text-slate-700">Preferred Date</label>
//                 <input
//                   required
//                   type="date"
//                   value={testRideForm.date}
//                   onChange={(e) => setTestRideForm({ ...testRideForm, date: e.target.value })}
//                   className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
//                 />
//               </div>

//               <div className="flex gap-3 pt-4">
//                 <Button type="button" variant="outline" className="flex-1" onClick={() => setIsTestRideOpen(false)}>
//                   Cancel
//                 </Button>
//                 <Button type="submit" className="flex-1 bg-orange-500 hover:bg-orange-600 text-white">
//                   Book via WhatsApp
//                 </Button>
//               </div>
//             </form>
//           </Dialog.Content>
//         </Dialog.Portal>
//       </Dialog.Root>

//       {/* --- ORDER NOW MODAL --- */}
//       <Dialog.Root open={isOrderOpen} onOpenChange={setIsOrderOpen}>
//         <Dialog.Portal>
//           <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
//           <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-slate-100 bg-white p-8 shadow-2xl">
//             <Dialog.Title className="text-2xl font-extrabold text-slate-900">
//               Place Your Order
//             </Dialog.Title>
//             <Dialog.Description className="mt-1 text-sm text-slate-500">
//               Ready to buy the <strong className="text-slate-800">{model.name}</strong> for <strong className="text-slate-900">{model.price}</strong>? Fill in your details below.
//             </Dialog.Description>

//             <form className="mt-6 space-y-4" onSubmit={handleOrderSubmit}>
//               <div>
//                 <label className="mb-1 block text-xs font-bold uppercase text-slate-700">Full Name</label>
//                 <input
//                   required
//                   type="text"
//                   placeholder="John Doe"
//                   value={orderForm.name}
//                   onChange={(e) => setOrderForm({ ...orderForm, name: e.target.value })}
//                   className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
//                 />
//               </div>
//               <div>
//                 <label className="mb-1 block text-xs font-bold uppercase text-slate-700">Email Address</label>
//                 <input
//                   required
//                   type="email"
//                   placeholder="john@example.com"
//                   value={orderForm.email}
//                   onChange={(e) => setOrderForm({ ...orderForm, email: e.target.value })}
//                   className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
//                 />
//               </div>
//               <div>
//                 <label className="mb-1 block text-xs font-bold uppercase text-slate-700">Delivery Address</label>
//                 <input
//                   required
//                   type="text"
//                   placeholder="123 Main St, City, Country"
//                   value={orderForm.address}
//                   onChange={(e) => setOrderForm({ ...orderForm, address: e.target.value })}
//                   className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
//                 />
//               </div>

//               <div className="flex gap-3 pt-4">
//                 <Button type="button" variant="outline" className="flex-1" onClick={() => setIsOrderOpen(false)}>
//                   Cancel
//                 </Button>
//                 <Button type="submit" className="flex-1 bg-orange-500 hover:bg-orange-600 text-white">
//                   <CreditCard className="h-4 w-4 mr-2" />
//                   Order via WhatsApp
//                 </Button>
//               </div>
//             </form>
//           </Dialog.Content>
//         </Dialog.Portal>
//       </Dialog.Root>

//     </div>
//   )
// }

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
                <Button size="lg"  type="submit" className="flex-1">
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
                <Button size="lg"  type="submit" className="flex-1">
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
