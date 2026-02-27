"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ShoppingCart, Eye } from "lucide-react";

export default function ProductDisplay() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/all`);
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div className="text-center py-10 font-bold">Loading Products...</div>;

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-8">
      <h2 className="text-2xl font-black text-dark mb-6 uppercase italic">
        Our <span className="text-primary">Products</span>
      </h2>

      {products.length === 0 ? (
        <p className="text-center text-gray-500">No products found.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <div 
              key={product._id} 
              className="group bg-white border border-slate-100 rounded-2xl p-3 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <div className="relative w-full h-40 md:h-48 mb-3 overflow-hidden rounded-xl bg-slate-50">
                      <Image
                          width={50}
                          height={50}
                  src={product.image || "https://via.placeholder.com/200"}
                  alt={product.name}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2 flex flex-col gap-2 translate-x-12 group-hover:translate-x-0 transition-transform duration-300">
                  <button className="bg-white p-2 rounded-full shadow-md text-primary hover:bg-primary hover:text-white transition-colors">
                    <Eye size={18} />
                  </button>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] text-slate-400 font-bold uppercase">{product.category}</p>
                <h3 className="text-sm font-bold text-dark truncate line-clamp-1">{product.name}</h3>
                
                <div className="flex items-center justify-between pt-2">
                  <div className="flex flex-col">
                    <span className="text-lg font-black text-primary">৳{product.price}</span>
                    {product.oldPrice && (
                      <span className="text-[10px] text-slate-400 line-through">৳{product.oldPrice}</span>
                    )}
                  </div>
                  
                  <button className="bg-yellow-branding p-2.5 rounded-lg text-dark hover:bg-dark hover:text-white transition-all active:scale-90 shadow-sm">
                    <ShoppingCart size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}