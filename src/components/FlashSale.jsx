"use client";
import React, { useState, useEffect } from 'react';
import { ShoppingCart, ChevronRight, Zap } from 'lucide-react';
import Image from 'next/image';

export default function FlashSale() {
  // টাইমার স্টেট: ৫ ঘণ্টা ৪৫ মিনিট থেকে শুরু হবে
  const [timeLeft, setTimeLeft] = useState({ hours: 5, minutes: 45, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // স্যাম্পল প্রোডাক্ট ডেটা
  const saleProducts = [
    { id: 1, name: "Fresh Red Tomato", price: 40, oldPrice: 60, img: "/vegetabless.png", off: "30%" },
    { id: 2, name: "Premium Beef Meat", price: 720, oldPrice: 800, img: "/meat.png", off: "10%" },
    { id: 3, name: "Fresh Hilsha Fish", price: 1200, oldPrice: 1500, img: "/fish.png", off: "20%" },
    { id: 4, name: "Organic Honey 500g", price: 450, oldPrice: 550, img: "/spicy.png", off: "15%" },
    { id: 5, name: "Coke 2L Bottle", price: 100, oldPrice: 120, img: "/coffee.png", off: "16%" },
  ];

  return (
    <section className="bg-[#f3f4f6] pb-12">
      <div className="max-w-[1400px] mx-auto px-4">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between bg-white p-5 rounded-t-[2rem] border-b border-slate-100">
          <div className="flex items-center gap-4 md:gap-8">
            <h2 className="flex items-center gap-2 text-2xl md:text-3xl font-black text-red-600 italic uppercase">
              <Zap className="fill-red-600" /> Flash Sale
            </h2>
            
            {/* Countdown UI */}
            <div className="flex items-center gap-2 bg-red-50 px-3 py-1.5 rounded-xl border border-red-100">
              <span className="text-[10px] font-bold text-red-400 uppercase hidden md:block">Ends In:</span>
              <div className="flex items-center gap-1 font-mono font-bold text-red-600">
                <span className="bg-red-600 text-white px-2 py-0.5 rounded text-sm">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span>:</span>
                <span className="bg-red-600 text-white px-2 py-0.5 rounded text-sm">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span>:</span>
                <span className="bg-red-600 text-white px-2 py-0.5 rounded text-sm">{String(timeLeft.seconds).padStart(2, '0')}</span>
              </div>
            </div>
          </div>
          
          <button className="hidden md:flex items-center gap-1 text-primary font-bold hover:underline mt-4 md:mt-0">
            View All Offers <ChevronRight size={18} />
          </button>
        </div>

        {/* Products Horizontal Scroll Area */}
        <div className="bg-white p-5 rounded-b-[2rem] flex overflow-x-auto gap-4 scrollbar-hide snap-x">
          {saleProducts.map((pd) => (
            <div key={pd.id} className="min-w-[180px] md:min-w-[240px] bg-white border border-slate-100 rounded-3xl p-4 relative group hover:shadow-xl transition-all snap-start">
              
              {/* Off Badge */}
              <div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-black px-2 py-1 rounded-lg z-10 shadow-lg">
                {pd.off} OFF
              </div>

              {/* Product Image */}
              <div className="h-32 md:h-44 flex items-center justify-center mb-4 bg-slate-50 rounded-2xl p-4">
                <img 
                  src={pd.img} 
                  alt={pd.name} 
                  className="max-h-full object-contain group-hover:scale-110 transition-transform duration-500" 
                />
              </div>

              {/* Product Info */}
              <h3 className="text-sm md:text-base font-bold text-slate-800 line-clamp-1 mb-1">{pd.name}</h3>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg md:text-xl font-black text-slate-900">৳{pd.price}</span>
                <span className="text-xs text-slate-400 line-through">৳{pd.oldPrice}</span>
              </div>

              {/* Add Button */}
              <button className="w-full bg-primary/10 text-primary hover:bg-primary hover:text-white py-2.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all">
                <ShoppingCart size={18} /> Add to Cart
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}