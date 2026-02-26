"use client";
import Image from 'next/image';
import React from 'react';

const quickLinks = [
  { id: 1, name: "Vegetables", img: "/vegetabless.png", color: "bg-green-50" },
  { id: 2, name: "Fruits", img: "/fruits.png", color: "bg-red-50" },
  { id: 3, name: "Meat", img: "/meat.png", color: "bg-orange-50" },
  { id: 4, name: "Fish", img: "/fish.png", color: "bg-blue-50" },
  { id: 5, name: "Spices & Masala", img: "/spicy.png", color: "bg-yellow-50" },
  { id: 6, name: "Beverages", img: "/coffee.png", color: "bg-blue-50" },
  { id: 7, name: "Pharmacy", img: "/Pharmacy.png", color: "bg-slate-50" },
  { id: 8, name: "Baby Care", img: "/pediatrics.png", color: "bg-blue-50" },
];

export default function QuickCategories() {
  return (
    <div className="bg-[#f3f4f6] pb-8 pt-2">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex overflow-x-auto gap-4 md:gap-6 py-4 scrollbar-hide snap-x snap-mandatory">
          
          {quickLinks.map((cat) => (
            <div 
              key={cat.id} 
              className="flex flex-col items-center gap-3 flex-shrink-0 cursor-pointer group snap-start"
            >
              <div className={`
                ${cat.color} 
                w-16 h-16 md:w-24 md:h-24 
                rounded-full flex items-center justify-center 
                p-3 md:p-5 
                shadow-sm border border-white 
                group-hover:shadow-lg group-hover:-translate-y-1.5 
                transition-all duration-300 ease-out
              `}>
                <Image
                  width={50}
                height={50}  
                  src={cat.img} 
                  alt={cat.name} 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-[10px] md:text-[13px] font-bold text-slate-600 text-center leading-tight max-w-[80px] md:max-w-none group-hover:text-primary transition-colors">
                {cat.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}