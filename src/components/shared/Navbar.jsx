"use client";
import { useState } from "react";
import Link from "next/link";
import { Search, User, MoreVertical, Headset, Store, Truck } from "lucide-react";
import CategorySidebar from "./CategorySidebar";

export default function Navbar() {
  const [isActionMenuOpen, setIsActionMenuOpen] = useState(false);

  return (
    <header className="w-full font-sans sticky top-0 z-50 shadow-sm">
      <div className="bg-primary py-2 px-3 md:px-4">
        <div className="max-w-[1400px] mx-auto flex items-center gap-2 md:gap-4">
          <div className="flex items-center gap-1 md:gap-2 flex-shrink-0">
            <div className="md:hidden">
              <CategorySidebar /> 
            </div>
            <Link href="/" className="flex-shrink-0">
              <h1 className="text-white text-lg md:text-3xl font-black italic tracking-tighter leading-none">
                Amar<span className="text-yellow-400">Dokan</span>
              </h1>
            </Link>
          </div>
          <div className="hidden lg:flex items-center gap-2 text-white border border-white/60 bg-white/5 px-3 py-1.5 rounded-md cursor-pointer hover:bg-white/10 transition-all flex-shrink-0">
            <Truck  className="w-6 h-6 text-yellow-branding" />
            <div className="flex flex-col">
              <span className="text-[10px] leading-tight opacity-80 uppercase font-bold tracking-wider">Deliver to</span>
              <span className="text-[12px] leading-tight font-black whitespace-nowrap">Select Location</span>
            </div>
          </div>
          <div className="flex-grow flex mx-auto items-center  min-w-[120px] md:max-w-md ml-auto">
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full bg-white py-1.5 md:py-2.5 px-3 rounded-l-md outline-none text-[11px] md:text-sm"
            />
            <button className="bg-yellow-branding p-1.5 md:px-4 md:py-2.5 rounded-r-md flex-shrink-0">
              <Search className="w-4 h-4 md:w-5 md:h-5 text-dark" />
            </button>
          </div>
          <div className="flex items-center gap-1 md:gap-4 text-white flex-shrink-0">
            <div className="hidden md:flex items-center gap-4">
               <button className="text-sm font-bold border border-white/70 px-3 py-2 rounded hover:bg-white/10 uppercase">বাংলা</button>
               <button className="bg-white text-dark hover:rounded-full hover:cursor-pointer font-bold px-4 py-2 rounded flex items-center gap-2 text-sm shadow-sm">
                  <User className="w-5 h-5 text-primary" /> Sign in
               </button>
            </div>
            <div className="md:hidden flex items-center gap-1">
              <button className="p-1">
                <User className="w-5 h-5" />
              </button>
              <div className="relative">
                <button onClick={() => setIsActionMenuOpen(!isActionMenuOpen)} className="p-1">
                  <MoreVertical className="w-5 h-5" />
                </button>

                {isActionMenuOpen && (
                  <div className="absolute top-10 right-0 bg-white shadow-2xl rounded-lg py-2 w-48 text-dark border border-slate-100 z-[100] animate-in fade-in zoom-in duration-200">
                    <button className="lg:hidden w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-50 text-sm font-bold text-left border-b">
                      <Truck className="w-4 h-4 text-yellow-600" /> 
                      <div className="flex flex-col">
                        <span className="text-[10px] text-slate-500 uppercase">Deliver to</span>
                        <span className="text-slate-800">Select Location</span>
                      </div>
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-50 text-sm font-semibold text-left text-slate-700">
                      <Headset className="w-4 h-4 text-primary" /> Helpline
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-50 text-sm font-semibold border-t text-left text-slate-700 text-primary">
                      <Store className="w-4 h-4" /> Our Outlets
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="hidden md:block bg-white border-b py-2 px-4">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between text-[12px] font-bold text-slate-700">
          <div className="flex items-center gap-10">
            <CategorySidebar /> 
            <div className="flex items-center gap-6 uppercase tracking-tight">
              <Link href="#" className="hover:text-primary transition-colors">Ramadan Special</Link>
              <Link href="#" className="hover:text-primary transition-colors">Great Deals</Link>
              <Link href="#" className="hover:text-primary transition-colors">Stock & Save</Link>
              <Link href="#" className="hover:text-primary transition-colors">Our Outlets</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}