import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import AuthProvider from "@/components/AuthProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata = {
  title: "AmarDokan | Fresh Grocery",
  description: "E-commerce for fresh products",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} font-sans bg-background text-dark`}>
        <AuthProvider>
        <Navbar></Navbar>
          {children}
        </AuthProvider>
        <Footer></Footer>
      </body>
    </html>
  );
}