"use client";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Apple, Fish, Beef, Coffee, IceCream, Milk, Carrot } from "lucide-react";
import Link from "next/link";

const categories = [
  { name: "Fruits & Vegetables", icon: <Carrot className="w-5 h-5" />, href: "/category/vegetables" },
  { name: "Meat & Fish", icon: <Fish className="w-5 h-5" />, href: "/category/meat-fish" },
  { name: "Beverages", icon: <Coffee className="w-5 h-5" />, href: "/category/beverages" },
  { name: "Dairy & Eggs", icon: <Milk className="w-5 h-5" />, href: "/category/dairy" },
  { name: "Frozen Foods", icon: <IceCream className="w-5 h-5" />, href: "/category/frozen" },
  { name: "Snacks", icon: <Apple className="w-5 h-5" />, href: "/category/snacks" },
];

export default function CategorySidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="flex items-center gap-2 text-primary font-bold cursor-pointer hover:opacity-80 transition-all">
          <Menu className="w-5 h-5" /> All Categories
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <SheetHeader className="border-b pb-4">
          <SheetTitle className="font-heading text-2xl text-primary italic">AmarDokan</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-2 mt-6">
          {categories.map((cat, index) => (
            <Link 
              key={index} 
              href={cat.href}
              className="flex items-center gap-4 p-3 rounded-lg hover:bg-emerald-50 hover:text-primary transition-all font-medium text-slate-700"
            >
              <span className="p-2 bg-slate-100 rounded-md group-hover:bg-white text-primary">
                {cat.icon}
              </span>
              {cat.name}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}