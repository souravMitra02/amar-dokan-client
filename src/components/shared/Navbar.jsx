"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, User, MoreVertical, Headset, Store, Truck, ShoppingBag, Heart, MapPin, LogOut, RotateCcw, ChevronDown } from "lucide-react";
import CategorySidebar from "./CategorySidebar";
import AuthModal from "../AuthModal";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// --- Custom Skeleton Loader ---
const NavbarSkeleton = () => (
  <header className="w-full bg-primary py-3 px-4 shadow-sm">
    <div className="max-w-[1400px] mx-auto flex items-center justify-between animate-pulse">
      <div className="h-8 w-36 bg-white/20 rounded-md"></div>
      <div className="flex-grow max-w-md mx-10 hidden md:block h-10 bg-white/10 rounded-md"></div>
      <div className="h-10 w-28 bg-white/20 rounded-md"></div>
    </div>
  </header>
);

export default function Navbar() {
  const [isActionMenuOpen, setIsActionMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { data: session } = useSession();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <NavbarSkeleton />;

  return (
    <header className="w-full font-sans sticky top-0 z-50 shadow-sm">
      <div className="bg-primary py-2 px-3 md:px-4">
        <div className="max-w-[1400px] mx-auto flex items-center gap-2 md:gap-4">
          
          {/* 1. Logo Section */}
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

          {/* 2. Delivery Section (Desktop Only) */}
          <div className="hidden lg:flex items-center gap-2 text-white border border-white/60 bg-white/5 px-3 py-1.5 rounded-md cursor-pointer hover:bg-white/10 flex-shrink-0">
            <Truck className="w-6 h-6 text-yellow-branding" />
            <div className="flex flex-col">
              <span className="text-[10px] opacity-80 uppercase font-bold">Deliver to</span>
              <span className="text-[12px] font-black">Select Location</span>
            </div>
          </div>

          {/* 3. Search Bar */}
          <div className="flex-grow flex mx-auto items-center min-w-[120px] md:max-w-md ml-auto">
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-white py-1.5 md:py-2.5 px-3 rounded-l-md outline-none text-[11px] md:text-sm"
            />
            <button className="bg-yellow-branding p-1.5 md:px-4 md:py-2.5 rounded-r-md">
              <Search className="w-4 h-4 md:w-5 md:h-5 text-dark" />
            </button>
          </div>

          {/* 4. Action Icons Section */}
          <div className="flex items-center gap-1 md:gap-4 text-white flex-shrink-0">
            
            {/* --- DESKTOP VIEW --- */}
            <div className="hidden md:flex items-center gap-4">
              <button className="text-sm font-bold border border-white/70 px-3 py-2 rounded hover:bg-white/10 uppercase">বাংলা</button>
              {session ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="bg-white text-dark font-bold px-4 py-2 rounded-lg flex items-center gap-2 text-sm shadow-sm border border-slate-100 outline-none transition-all hover:bg-slate-50 active:scale-95">
  <span className="relative flex h-2.5 w-2.5">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>

    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
  </span>
  <span className="max-w-[80px] truncate tracking-tight">
    {session.user.name.split(" ")[0]}
  </span>

  <ChevronDown size={14} className="ml-1 text-slate-400" />
</button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 mt-2 rounded-md bg-white z-[100]">
                    <DropdownMenuLabel className="text-center border-b p-3">Hello, {session.user.name.split(" ")[0]}</DropdownMenuLabel>
                    <DropdownMenuItem className="p-3 cursor-pointer"><ShoppingBag className="mr-2 w-4 h-4" /> Order History</DropdownMenuItem>
                    <DropdownMenuItem className="p-3 cursor-pointer"><Heart className="mr-2 w-4 h-4" /> Wishlist</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => signOut()} className="p-3 cursor-pointer text-red-600 font-bold"><LogOut className="mr-2 w-4 h-4" /> Logout</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <AuthModal trigger={
                  <button className="bg-white text-dark font-bold px-4 py-2 rounded flex items-center gap-2 text-sm hover:bg-slate-100 transition-all">
                    <User className="w-5 h-5 text-primary" /> Sign in
                  </button>
                } />
              )}
            </div>

            {/* --- MOBILE VIEW (আপনার এই অংশটি দরকার ছিল) --- */}
            <div className="md:hidden flex items-center gap-2">
              {session ? (
 
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="p-1 outline-none">
                      {session.user.image ? (
                        <Image src={session.user.image} alt="User" width={24} height={24} className="rounded-full border border-white/50" />
                      ) : (
                        <User className="w-6 h-6" />
                      )}
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-48 mt-2 mr-2 rounded-xl z-[100]">
                    <DropdownMenuItem className="p-3 font-bold">{session.user.name}</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="p-3"><ShoppingBag className="mr-2 w-4 h-4" /> Orders</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => signOut()} className="p-3 text-red-600 font-bold"><LogOut className="mr-2 w-4 h-4" /> Logout</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <AuthModal trigger={
                  <button className="p-1">
                    <User className="w-6 h-6" />
                  </button>
                } />
              )}
              <div className="relative">
                <button onClick={() => setIsActionMenuOpen(!isActionMenuOpen)} className="p-1">
                  <MoreVertical className="w-6 h-6" />
                </button>
                {isActionMenuOpen && (
                   <div className="absolute top-10 right-0 bg-white shadow-2xl rounded-lg py-2 w-44 text-dark border z-[100] animate-in fade-in zoom-in duration-200">
                    <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-50 text-sm font-semibold border-b"><Truck className="w-4 h-4 text-primary" /> Track Order</button>
                    <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-50 text-sm font-semibold"><Headset className="w-4 h-4 text-primary" /> Helpline</button>
                   </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Secondary Navbar (Desktop Only) */}
      <div className="hidden md:block bg-white border-b py-2 px-4">
        <div className="max-w-[1400px] mx-auto flex items-center gap-10">
          <CategorySidebar />
          <div className="flex items-center gap-6 text-[12px] font-bold text-slate-700 uppercase">
            <Link href="#" className="hover:text-primary transition-colors">Ramadan Special</Link>
            <Link href="#" className="hover:text-primary transition-colors">Great Deals</Link>
            <Link href="#" className="hover:text-primary transition-colors">Our Outlets</Link>
          </div>
        </div>
      </div>
    </header>
  );
}