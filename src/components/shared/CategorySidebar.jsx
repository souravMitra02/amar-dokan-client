"use client";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { 
  Menu, Apple, Baby, Brush, 
  Sparkles, Shirt, Home, PenTool, ToyBrick, Smartphone, UtensilsCrossed, ChevronRight 
} from "lucide-react";
import Link from "next/link";

const categories = [
  { name: "Ramadan", icon: <UtensilsCrossed className="w-5 h-5" />, href: "/category/ramadan" },
  { name: "Food", icon: <Apple className="w-5 h-5" />, href: "/category/food" },
  { name: "Baby Food & Care", icon: <Baby className="w-5 h-5" />, href: "/category/baby" },
  { name: "Home Cleaning", icon: <Brush className="w-5 h-5" />, href: "/category/cleaning" },
  { name: "Pet Care", icon: <Sparkles className="w-5 h-5" />, href: "/category/pet" },
  { name: "Beauty & Health", icon: <Sparkles className="w-5 h-5" />, href: "/category/beauty" },
  { name: "Fashion & Lifestyle", icon: <Shirt className="w-5 h-5" />, href: "/category/fashion" },
  { name: "Home & Kitchen", icon: <Home className="w-5 h-5" />, href: "/category/home" },
  { name: "Stationeries", icon: <PenTool className="w-5 h-5" />, href: "/category/stationery" },
  { name: "Toys & Sports", icon: <ToyBrick className="w-5 h-5" />, href: "/category/toys" },
  { name: "Gadget", icon: <Smartphone className="w-5 h-5" />, href: "/category/gadget" },
];

export default function CategorySidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="flex items-center gap-2 cursor-pointer outline-none group">
          {/* Mobile Trigger: Navbar-er uporero bar-er jonno */}
          <div className="md:hidden flex items-center justify-center text-white">
            <Menu className="w-7 h-7" />
          </div>
          
          {/* Desktop Trigger: Navbar-er nicer bar-er jonno */}
          <div className="hidden md:flex items-center gap-2 text-slate-800">
            <Menu className="w-5 h-5 group-hover:text-primary transition-colors" />
            <span className="font-bold text-sm uppercase tracking-tight group-hover:text-primary transition-colors">
              Shop By Category
            </span>
          </div>
        </button>
      </SheetTrigger>
      
      <SheetContent side="left" className="w-[85%] sm:w-[350px] p-0 border-none bg-white">
        {/* Screen readers-er jonno title (visually hidden) */}
        <SheetTitle className="sr-only">Category Navigation</SheetTitle>

        {/* Sidebar Header */}
        <div className="bg-primary p-5 flex items-center gap-3 text-white shadow-md">
          <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center font-black italic shadow-inner border border-white/10">
            A
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-xl font-black italic tracking-tighter uppercase leading-none">
              Amar<span className="text-yellow-400">Dokan</span>
            </span>
            <span className="text-[10px] font-medium opacity-80 tracking-widest uppercase mt-1">Online Grocery</span>
          </div>
        </div>

        {/* Category List */}
        <div className="py-4 px-2 flex flex-col gap-1 overflow-y-auto h-[calc(100vh-85px)] custom-scrollbar">
          {categories.map((cat, i) => (
            <Link 
              key={i} 
              href={cat.href} 
              className="flex items-center justify-between p-3.5 rounded-xl hover:bg-emerald-50 group transition-all duration-200"
            >
              <div className="flex items-center gap-4 font-semibold text-slate-700 text-[15px]">
                <span className="text-slate-400 group-hover:text-primary transition-all duration-300">
                  {cat.icon}
                </span>
                <span className="group-hover:text-emerald-900 transition-colors">{cat.name}</span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </Link>
          ))}

          {/* Help Section */}
          <div className="mt-8 p-4 bg-slate-50 rounded-2xl mx-2 border border-dashed border-slate-200 mb-6">
            <p className="text-[11px] text-slate-500 font-bold uppercase mb-2 px-1">Customer Support</p>
            <div className="flex items-center gap-3 text-sm font-black text-slate-700">
               <div className="p-2 bg-white rounded-full shadow-sm text-lg">📞</div>
               16444
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}