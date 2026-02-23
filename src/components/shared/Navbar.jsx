"use client";
import Link from "next/link";
import { ShoppingCart, Phone, MapPin, ChevronDown, Search } from "lucide-react";
import CategorySidebar from "./CategorySidebar";

export default function Navbar() {
  return (
    <header className="w-full shadow-sm">
      {/* 1. TOP UTILITY BAR - Premium Dark Look */}
      <div className="bg-dark text-slate-300 text-[12px] py-1.5 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center font-sans">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 hover:text-white cursor-pointer transition-all">
              <Phone className="w-3.5 h-3.5 text-primary" /> <span className="font-bold">16444</span>
            </span>
            <span className="hidden sm:flex items-center gap-1.5 border-l border-slate-600 pl-6">
              <MapPin className="w-3.5 h-3.5 text-primary" /> Delivery to: <span className="text-white font-medium">Dhaka, Bangladesh</span>
            </span>
          </div>
          <div className="flex items-center gap-5">
            <button className="hover:text-primary">Track Order</button>
            <button className="flex items-center gap-1 border-l border-slate-600 pl-5 hover:text-white">
              English <ChevronDown className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAV - Chaldal/Shwapno Inspired */}
      <nav className="bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-4 md:gap-10">
          {/* Brand */}
          <Link href="/" className="font-heading text-3xl font-extrabold italic flex-shrink-0">
            Amar<span className="text-primary">Dokan</span>
          </Link>

          {/* Search Box - Rounded Pill Style */}
          <div className="hidden md:flex flex-grow relative group">
            <input 
              type="text" 
              placeholder="What are you looking for today?" 
              className="w-full bg-slate-50 border border-slate-200 rounded-full py-3 px-6 pr-14 focus:bg-white focus:ring-2 focus:ring-emerald-100 focus:border-primary outline-none transition-all text-sm"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary p-2.5 rounded-full text-white hover:bg-emerald-600 transition-all shadow-md">
              <Search className="w-4 h-4" />
            </button>
          </div>

          {/* User Actions */}
          <div className="flex items-center gap-3 sm:gap-6">
            <button className="hidden sm:block text-slate-700 font-bold hover:text-primary transition-all">Login</button>
            <div className="hidden sm:block h-5 w-[1px] bg-slate-200"></div>
            
            <Link href="/cart" className="relative p-2.5 bg-emerald-50 rounded-full text-primary hover:bg-primary hover:text-white transition-all shadow-sm">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-secondary text-white text-[10px] font-black px-1.5 py-0.5 rounded-full border-2 border-white">
                0
              </span>
            </Link>
          </div>
        </div>

        {/* 3. SUB NAV - Category List */}
        <div className="bg-white border-t border-slate-50 py-2.5 overflow-x-auto no-scrollbar">
          <div className="max-w-7xl mx-auto px-4 flex items-center gap-10 text-[13px] font-bold text-slate-500">
            <CategorySidebar />
            
            <div className="flex items-center gap-8">
              <Link href="#" className="hover:text-primary transition-colors whitespace-nowrap">Flash Sales</Link>
              <Link href="#" className="hover:text-primary transition-colors whitespace-nowrap">New Arrivals</Link>
              <Link href="#" className="hover:text-primary transition-colors whitespace-nowrap">Offers</Link>
              <Link href="#" className="hover:text-primary transition-colors whitespace-nowrap text-secondary italic">Special Deals ✨</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}