"use client";
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { FaGoogle } from "react-icons/fa6";
import Swal from 'sweetalert2';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogTrigger 
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { User, Mail, Lock, Phone, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AuthModal({ trigger }) {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { 
    register, 
    handleSubmit, 
    reset, 
    formState: { errors } 
  } = useForm();

  const handleGoogleLogin = () => {
    signIn("google", { callbackUrl: "/" });
  };

  const onSubmit = async (data) => {
    setIsLoading(true);
    
    try {
      if (isLogin) {
        // --- LOGIN LOGIC ---
        const result = await signIn("credentials", {
          email: data.email,
          password: data.password,
          redirect: false,
        });

        if (result?.error) {
          Swal.fire({
            icon: 'error',
            title: 'Login Failed',
            text: 'Invalid email or password. Please try again.',
            confirmButtonColor: '#1e293b',
          });
        } else {
          setIsOpen(false); 
          Swal.fire({
            icon: 'success',
            title: 'Welcome Back!',
            text: 'Logged in successfully.',
            timer: 2000,
            showConfirmButton: false
          });
          reset();
        }
      } else {
        const res = await fetch("http://localhost:5000/api/auth/register", { 
  method: "POST",
  headers: { 
    "Content-Type": "application/json" 
  },
  body: JSON.stringify(data),
});

        const resData = await res.json();

        if (res.ok) {
          Swal.fire({
            icon: 'success',
            title: 'Account Created!',
            text: 'Registration successful. You can now log in.',
            confirmButtonColor: '#1e293b',
          }).then((result) => {
            if (result.isConfirmed || result.isDismissed) {
              setIsLogin(true);
              reset();
            }
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Registration Failed',
            text: resData.message || 'Something went wrong on the server.',
            confirmButtonColor: '#ef4444',
          });
        }
      }
    } catch (error) {
      console.error("Auth Error:", error);
      Swal.fire({
        icon: 'error',
        title: 'Server Connection Failed',
        text: 'Make sure your backend server is running and CORS is enabled.',
        confirmButtonColor: '#ef4444',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(val) => {setIsOpen(val); reset(); setIsLogin(true);}}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-[425px] rounded-[2.5rem] p-8 border-none shadow-2xl max-h-[95vh] overflow-y-auto">
        <DialogHeader className="flex flex-col items-center justify-center space-y-2">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-2">
            <User className="text-primary w-8 h-8" />
          </div>
          <DialogTitle className="text-2xl font-black text-center tracking-tight text-slate-800">
            {isLogin ? "Welcome Back!" : "Join AmarDokan"}
          </DialogTitle>
          <DialogDescription className="text-center text-slate-500">
            {isLogin ? "Enter your details to log in." : "Sign up to start your shopping journey."}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
          <div className="space-y-3">
            {!isLogin && (
              <>
                <div className="relative">
                  <User className="absolute left-3 top-3 text-slate-400" size={18} />
                  <Input 
                    {...register("name", { required: "Name is required" })}
                    placeholder="Full Name" 
                    className={`pl-10 h-12 rounded-xl focus-visible:ring-primary/20 ${errors.name ? 'border-red-500' : 'border-slate-100'}`} 
                  />
                </div>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 text-slate-400" size={18} />
                  <Input 
                    {...register("number", { required: "Phone number is required" })}
                    placeholder="Phone Number" 
                    className={`pl-10 h-12 rounded-xl focus-visible:ring-primary/20 ${errors.number ? 'border-red-500' : 'border-slate-100'}`} 
                  />
                </div>
              </>
            )}

            <div className="relative">
              <Mail className="absolute left-3 top-3 text-slate-400" size={18} />
              <Input 
                {...register("email", { 
                  required: "Email is required",
                  pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
                })}
                type="email" 
                placeholder="Email Address" 
                className={`pl-10 h-12 rounded-xl focus-visible:ring-primary/20 ${errors.email ? 'border-red-500' : 'border-slate-100'}`} 
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-3 text-slate-400" size={18} />
              <Input 
                {...register("password", { 
                  required: "Password is required", 
                  minLength: { value: 6, message: "At least 6 characters" } 
                })}
                type="password" 
                placeholder="Password" 
                className={`pl-10 h-12 rounded-xl focus-visible:ring-primary/20 ${errors.password ? 'border-red-500' : 'border-slate-100'}`} 
              />
              {errors.password && <p className="text-[10px] text-red-500 mt-1 ml-1">{errors.password.message}</p>}
            </div>

            <Button disabled={isLoading} type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12 rounded-xl transition-all active:scale-95 shadow-lg shadow-primary/20">
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <Loader2 className="animate-spin w-4 h-4" /> Processing...
                </div>
              ) : (isLogin ? "Sign In" : "Create Account")}
            </Button>
          </div>

          <div className="relative my-2">
            <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-slate-100"></span></div>
            <div className="relative flex justify-center text-[10px] uppercase tracking-widest">
              <span className="bg-white px-4 text-slate-400 font-bold">Or continue with</span>
            </div>
          </div>

          <Button 
            type="button"
            variant="outline" 
            className="w-full h-12 border-2 border-slate-100 rounded-xl flex items-center justify-center gap-3 font-bold hover:bg-slate-50 transition-all active:scale-95"
            onClick={handleGoogleLogin}
          >
            <FaGoogle className="text-red-500" />
            Sign in with Google
          </Button>
        </form>

        <p className="text-center text-sm text-slate-500 mt-2">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span 
            onClick={() => setIsLogin(!isLogin)}
            className="text-primary font-bold cursor-pointer hover:underline underline-offset-4 ml-1"
          >
            {isLogin ? "Register Now" : "Login Now"}
          </span>
        </p>
      </DialogContent>
    </Dialog>
  );
}