import FlashSale from "@/components/FlashSale";
import Hero from "@/components/Hero";
import QuickCategories from "@/components/QuickCategories";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f3f4f6]">
      <Hero />
      <QuickCategories />
      {/* <FlashSale/> */}
    </main>
  );
}
