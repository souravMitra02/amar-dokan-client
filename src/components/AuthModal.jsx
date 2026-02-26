"use client";
import React from 'react';
import { signIn } from "next-auth/react";
import { FaGoogle } from "react-icons/fa6";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogTrigger 
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { User, Mail, Lock } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function AuthModal({ trigger }) {
  const handleGoogleLogin = () => {
    signIn("google", { callbackUrl: "/" });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] rounded-[2.5rem] p-8 border-none shadow-2xl">
        <DialogHeader className="flex flex-col items-center justify-center space-y-3">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-2">
            <User className="text-primary w-8 h-8" />
          </div>
          <DialogTitle className="text-2xl font-black text-center tracking-tight">Welcome Back!</DialogTitle>
          <DialogDescription className="text-center text-slate-500">
            Log in to your account or create a new one to continue.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          {/* Email/Password Fields */}
          <div className="space-y-4">
             <div className="relative">
                <Mail className="absolute left-3 top-3 text-slate-400" size={18} />
                <Input type="email" placeholder="Email Address" className="pl-10 h-12 rounded-xl focus-visible:ring-primary/20" />
             </div>
             <div className="relative">
                <Lock className="absolute left-3 top-3 text-slate-400" size={18} />
                <Input type="password" placeholder="Password" className="pl-10 h-12 rounded-xl focus-visible:ring-primary/20" />
             </div>
             <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12 rounded-xl transition-all active:scale-95">
                Sign In
             </Button>
          </div>

          <div className="relative my-2">
            <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-slate-100"></span></div>
            <div className="relative flex justify-center text-[10px] uppercase tracking-widest"><span className="bg-white px-4 text-slate-400 font-bold">Or continue with</span></div>
          </div>

          {/* Google Login Button */}
          <Button 
            variant="outline" 
            className="w-full h-12 border-2 border-slate-100 rounded-xl flex items-center gap-3 font-bold hover:bg-slate-50 transition-all active:scale-95"
            onClick={handleGoogleLogin}
          >
           <FaGoogle />
            Sign in with Google
          </Button>
        </div>

        <p className="text-center text-sm text-slate-500 mt-4">
          Don't have an account? <span className="text-primary font-bold cursor-pointer hover:underline underline-offset-4">Register Now</span>
        </p>
      </DialogContent>
    </Dialog>
  );
}