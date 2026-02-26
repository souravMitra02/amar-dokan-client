"use client";
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const bannerImages = [
  { 
    id: 1, 
    url: "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
    tag: "Ramadan Offer",
    title: "Fresh Fruits & Vegetables" 
  },
  { 
    id: 2, 
    url: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
    tag: "Big Sale",
    title: "Daily Grocery Essentials" 
  }
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === bannerImages.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#f3f4f6] pt-4 md:pt-6">
      <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-4">
        
        {/* Main Banner */}
        <div className="lg:col-span-9 relative group overflow-hidden rounded-2xl bg-white h-[200px] md:h-[350px] lg:h-[420px]">
          {bannerImages.map((banner, i) => (
            <div
              key={banner.id}
              className={`absolute inset-0 transition-all duration-700 ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image 
                width={50}
                height={50}
                src={banner.url}
                alt={banner.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center p-6 md:p-12">
                <div className="text-white max-w-sm">
                  <span className="bg-secondary px-3 py-1 rounded text-[10px] font-bold uppercase">{banner.tag}</span>
                  <h2 className="text-2xl md:text-5xl font-black italic mt-3 leading-tight">{banner.title}</h2>
                  <button className="mt-5 bg-yellow-branding text-dark px-6 py-2 rounded-lg font-bold text-sm shadow-lg">Shop Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Side Banners (Using standard img) */}
        <div className="hidden lg:flex lg:col-span-3 flex-col gap-4 h-[420px]">
          <div className="flex-1 rounded-2xl overflow-hidden relative">
            <Image width={50} height={50} src="https://images.pexels.com/photos/5648110/pexels-photo-5648110.jpeg?auto=compress&cs=tinysrgb&w=600" className="w-full h-full object-cover" alt="side" />
            <div className="absolute inset-0 bg-black/20 p-4 flex flex-col justify-end">
              <p className="text-white font-black text-lg">Fresh Meat <br/><span className="text-yellow-400">Save 20%</span></p>
            </div>
          </div>
          <div className="flex-1 rounded-2xl overflow-hidden relative">
            <Image width={50} height={50} src="https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg?auto=compress&cs=tinysrgb&w=600" className="w-full h-full object-cover" alt="side" />
            <div className="absolute inset-0 bg-black/20 p-4 flex flex-col justify-end">
              <p className="text-white font-black text-lg">Healthy Drinks <br/><span className="text-yellow-400">Big Deals</span></p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}