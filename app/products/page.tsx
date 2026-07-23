// // import { BikeModelCarousel, BikeModel } from "@/components/bike-model-carousel"
// import { BikeModelCarousel, BikeModel } from "@/components/bike-model-carousel"

// const BIKE_MODELS: BikeModel[] = [
//   {
//     id: "city-cruiser-v1",
//     name: "Urban Cruiser Pro",
//     tagline: "Designed for smooth, effortless daily city commutes.",
//     price: "$1,899",
//     specs: {
//       speed: "45 km/h",
//       range: "75 km",
//       chargeTime: "3.5 hrs",
//       motor: "750W Hub",
//     },
//     variants: [
//       { id: "black", colorName: "Matte Black", colorHex: "#1a1a1a", imageSrc: "/hero-bike.png" },
//       { id: "silver", colorName: "Starlight Silver", colorHex: "#e2e8f0", imageSrc: "/hero-bike.png" },
//       { id: "orange", colorName: "Sunset Orange", colorHex: "#f97316", imageSrc: "/hero-bike.png" },
//     ],
//   },
//   {
//     id: "all-terrain-x",
//     name: "All-Terrain Explorer",
//     tagline: "Built to conquer rugged off-road trails and steep inclines.",
//     price: "$2,499",
//     specs: {
//       speed: "55 km/h",
//       range: "100 km",
//       chargeTime: "4.0 hrs",
//       motor: "1000W Mid-Drive",
//     },
//     variants: [
//       { id: "green", colorName: "Forest Green", colorHex: "#15803d", imageSrc: "/hero-bike.png" },
//       { id: "dark", colorName: "Stealth Gray", colorHex: "#334155", imageSrc: "/hero-bike.png" },
//     ],
//   },
// ]

// export default function ProductsPage() {
//   return (
//     <main className="min-h-screen bg-[#FAF6F0] py-16">
//       <div className="container mx-auto max-w-6xl px-4 space-y-12">
        
//         {/* Page Header */}
//         <div className="text-center max-w-2xl mx-auto">
//           <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
//             Our E-Bike Lineup
//           </h1>
//           <p className="mt-3 text-slate-600 text-base sm:text-lg">
//             Choose your model and select your favorite color variant.
//           </p>
//         </div>

//         {/* Carousel 1: Model 1 */}
//         <BikeModelCarousel model={BIKE_MODELS[0]} />

//         {/* Carousel 2: Model 2 */}
//         <BikeModelCarousel model={BIKE_MODELS[1]} />

//       </div>
//     </main>
//   )
// }

// import { BikeModelCarousel, BikeModel } from "@/components/bike-model-carousel"

// const BIKE_MODELS: BikeModel[] = [
//   {
//     id: "city-cruiser-v1",
//     name: "Urban Cruiser Pro",
//     tagline: "Designed for smooth, effortless daily city commutes.",
//     price: "$1,899",
//     specs: {
//       speed: "45 km/h",
//       range: "75 km",
//       chargeTime: "3.5 hrs",
//       motor: "750W Hub",
//     },
//     images: [
//       "/images/bikes/cruiser-1.png",
//       "/images/bikes/cruiser-2.png",
//       "/images/bikes/cruiser-3.png",
//     ],
//   },
//   {
//     id: "all-terrain-x",
//     name: "All-Terrain Explorer",
//     tagline: "Built to conquer rugged off-road trails and steep inclines.",
//     price: "$2,499",
//     specs: {
//       speed: "55 km/h",
//       range: "100 km",
//       chargeTime: "4.0 hrs",
//       motor: "1000W Mid-Drive",
//     },
//     images: [
//       "/images/bikes/explorer-1.png",
//       "/images/bikes/explorer-2.png",
//     ],
//   },
// ]

// export default function ProductsPage() {
//   return (
//     <main className="min-h-screen bg-[#FAF6F0] py-16">
//       <div className="container mx-auto max-w-6xl space-y-12 px-4">
        
//         {/* Header */}
//         <div className="mx-auto max-w-2xl text-center">
//           <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
//             Our E-Bike Lineup
//           </h1>
//           <p className="mt-3 text-base text-slate-600 sm:text-lg">
//             Explore our models and swipe through the views to choose your ride.
//           </p>
//         </div>

//         {/* Carousel 1 */}
//         <BikeModelCarousel model={BIKE_MODELS[0]} />

//         {/* Carousel 2 */}
//         <BikeModelCarousel model={BIKE_MODELS[1]} />

//       </div>
//     </main>
//   )
// }


import { BikeModelCarousel, BikeModel } from "@/components/bike-model-carousel"

const BIKE_MODELS: BikeModel[] = [
  {
    id: "city-cruiser-v1",
    name: "Urban Cruiser Pro",
    tagline: "Effortless daily city commutes.",
    price: "$1,899",
    specs: {
      speed: "28 mph",
      range: "45 mi",
      chargeTime: "3.5 hrs",
      motor: "750W Hub",
    },
    images: [
      "/bike1.jpeg",
      "/bike3.jpeg",
      "/bike4.jpeg",
    ],
  },
  {
    id: "all-terrain-x",
    name: "All-Terrain Explorer",
    tagline: "Built for rugged trails and steep hills.",
    price: "$2,499",
    specs: {
      speed: "28 mph",
      range: "60 mi",
      chargeTime: "4.0 hrs",
      motor: "1000W Mid-Drive",
    },
    images: [
      "/bike2.jpeg",
      "/bike1.jpeg",
    ],
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-background py-16 text-foreground">
      <div className="container mx-auto max-w-6xl space-y-12 px-4">
        
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
  <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
    Engineered to Move You
  </h1>
  <p className="mt-3 text-base text-muted-foreground sm:text-lg">
    Explore our performance lineup and find the perfect ride for your journey.
  </p>
</div>

        {/* Carousel 1 */}
        <BikeModelCarousel model={BIKE_MODELS[0]} />

        {/* Carousel 2 */}
        <BikeModelCarousel model={BIKE_MODELS[1]} />

      </div>
    </main>
  )
}