// "use client";
// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import Image from 'next/image';

// // Ekhane banners gulo thakbe
// const bannerImages = [
//   { 
//     id: 1, 
//     url: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1400", 
//     tag: "Ramadan Offer",
//     title: "Fresh Fruits & Vegetables" 
//   },
//   { 
//     id: 2, 
//     url: "https://images.unsplash.com/photo-1506617564039-2f3b650ad755?w=1400", 
//     tag: "Big Sale",
//     title: "Daily Grocery Essentials" 
//   }
// ];

// export default function Hero() {
//   const [index, setIndex] = useState(0);

//   // Automatic slide change 4 second por por
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((prev) => (prev === bannerImages.length - 1 ? 0 : prev + 1));
//     }, 4000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="bg-[#f3f4f6] pt-4 md:pt-6">
//       <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-4">
        
//         {/* Main Banner Slider (9-columns) */}
//         <div className="lg:col-span-9 relative group overflow-hidden rounded-2xl bg-white h-[200px] md:h-[350px] lg:h-[420px]">
          
//           {bannerImages.map((banner, i) => (
//             <div
//               key={banner.id}
//               className={`absolute inset-0 transition-all duration-700 ease-in-out ${
//                 i === index ? "opacity-100 scale-100" : "opacity-0 scale-105"
//               }`}
//             >
//               <Image
//                 width={50}
//                 height={50}
//                 src={banner.url}
//                 alt={banner.title}
//                 className="w-full h-full object-cover"
//               />
//               {/* Image er upore text overlay */}
//               <div className="absolute inset-0 bg-black/20 flex items-center p-6 md:p-12">
//                 <div className="text-white max-w-sm">
//                   <span className="bg-secondary px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest">
//                     {banner.tag}
//                   </span>
//                   <h2 className="text-2xl md:text-5xl font-black italic mt-3 drop-shadow-md">
//                     {banner.title}
//                   </h2>
//                   <button className="mt-5 bg-yellow-branding text-dark px-6 py-2 rounded-lg font-bold text-sm hover:bg-yellow-500 transition-colors shadow-lg">
//                     Shop Now
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}

//           {/* Dots Indicator */}
//           <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
//             {bannerImages.map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => setIndex(i)}
//                 className={`h-2 rounded-full transition-all ${
//                   i === index ? "bg-white w-6" : "bg-white/50 w-2"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Side Banners (3-columns, Desktop only) */}
//         <div className="hidden lg:flex lg:col-span-3 flex-col gap-4 h-[420px]">
//           <div className="flex-1 rounded-2xl overflow-hidden relative group">
//             <Image width={50} height={50} src="https://images.unsplash.com/photo-1543083477-4f79cddbb0d5?w=500" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="offer1" />
//             <div className="absolute inset-0 bg-black/10 p-4 flex flex-col justify-end">
//               <p className="text-white font-black text-lg">Meat & Fish <br/><span className="text-yellow-400">Up to 20% Off</span></p>
//             </div>
//           </div>
//           <div className="flex-1 rounded-2xl overflow-hidden relative group">
//             <Image width={50} height={50} src="https://images.unsplash.com/photo-1608686209038-733f02157127?w=500" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="offer2" />
//             <div className="absolute inset-0 bg-black/10 p-4 flex flex-col justify-end">
//               <p className="text-white font-black text-lg">Baby Care <br/><span className="text-yellow-400">Best Price</span></p>
//             </div>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }