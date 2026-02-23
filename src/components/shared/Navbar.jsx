"use client";
import Link from "next/link";
import { ShoppingCart, User } from "lucide-react"; 

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="font-heading text-2xl font-bold italic">
            Amar<span className="text-primary">Dokan</span>
          </Link>
          <div className="hidden md:flex space-x-8 font-medium">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <Link href="/shop" className="hover:text-primary transition-colors">Shop</Link>
            <Link href="/about" className="hover:text-primary transition-colors">About</Link>
          </div>
          <div className="flex items-center space-x-5">
            <Link href="/cart" className="relative hover:text-primary">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-secondary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">0</span>
            </Link>
            <div className="h-6 w-[1px] bg-slate-200"></div>
            <Link href="/login" className="text-dark font-semibold hover:text-primary">Login</Link>
            <Link href="/register" className="bg-primary text-white px-5 py-2 rounded-full font-semibold hover:bg-emerald-600 transition-all">
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}