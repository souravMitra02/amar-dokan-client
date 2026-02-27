"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { 
  Package, Users, ShoppingCart, DollarSign, 
  Plus, LayoutDashboard, Settings, LogOut, Search 
} from "lucide-react";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, Cell, PieChart, Pie 
} from 'recharts';

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    if (status === "loading") return;
    if (!session || session.user.role !== "admin") {
      router.replace("/");
    } else {
      setAuthorized(true);
    }
  }, [status, session, router]);

  if (!mounted || status === "loading" || !authorized) {
    return (
      <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary"></div>
        <h1 className="text-black text-lg md:text-3xl font-black italic tracking-tighter leading-none">
                Amar<span className="text-yellow-400">Dokan</span>
              </h1>
      </div>
    );
  }
  const categoryData = [
    { name: 'Fruits', value: 400 },
    { name: 'Vegetables', value: 300 },
    { name: 'Dairy', value: 300 },
    { name: 'Grocery', value: 200 },
    { name: 'Snacks', value: 278 },
  ];
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  return (
    <div className="flex min-h-screen bg-[#f8fafc]">
      <aside className="w-64 bg-[#1e293b] text-slate-300 flex flex-col sticky top-0 h-screen">
        <div className="p-6">
          <h2 className="text-white text-xl font-bold italic tracking-tighter">
            Amar<span className="text-yellow-400">Dokan</span> Admin
          </h2>
        </div>
        
        <nav className="flex-1 px-4 space-y-2">
          <NavItem icon={<LayoutDashboard size={20}/>} label="Dashboard" active />
          <NavItem icon={<Package size={20}/>} label="Products" />
          <NavItem icon={<ShoppingCart size={20}/>} label="Orders" />
          <NavItem icon={<Users size={20}/>} label="Customers" />
          <NavItem icon={<Settings size={20}/>} label="Settings" />
        </nav>

        <div className="p-4 border-t border-slate-700">
          <button className="flex items-center gap-3 w-full p-3 hover:bg-red-500/10 hover:text-red-500 rounded-lg transition-colors">
            <LogOut size={20}/> Logout
          </button>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto">
        <header className="bg-white border-b sticky top-0 z-10 p-4 flex justify-between items-center shadow-sm">
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18}/>
            <input 
              type="text" 
              placeholder="Search analytics..." 
              className="w-full pl-10 pr-4 py-2 bg-slate-100 rounded-md outline-none text-sm"
            />
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-slate-600">Welcome, {session?.user?.name}</span>
            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
              {session?.user?.name?.charAt(0)}
            </div>
          </div>
        </header>

        <div className="p-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h1 className="text-2xl font-bold text-slate-800">Business Overview</h1>
              <p className="text-slate-500">Track your store performance and sales analytics.</p>
            </div>
            <button className="bg-primary text-white px-5 py-2.5 rounded-lg flex items-center gap-2 font-semibold shadow-md hover:opacity-90 transition-all active:scale-95">
              <Plus size={20} /> Add Product
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <StatCard icon={<DollarSign color="#10b981"/>} title="Total Revenue" value="৳ 1,28,450" detail="+12% from last month" />
            <StatCard icon={<Package color="#3b82f6"/>} title="Active Products" value="142" detail="5 out of stock" />
            <StatCard icon={<ShoppingCart color="#f59e0b"/>} title="Monthly Orders" value="850" detail="+5% growth" />
            <StatCard icon={<Users color="#8b5cf6"/>} title="Total Customers" value="2,450" detail="24 new today" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="font-bold text-slate-700 mb-6 uppercase text-xs tracking-widest">Inventory Status</h3>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={categoryData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Tooltip cursor={{fill: '#f8fafc'}} />
                    <Bar dataKey="value" fill="#1e293b" radius={[6, 6, 0, 0]} barSize={40} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Pie Chart */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="font-bold text-slate-700 mb-6 uppercase text-xs tracking-widest">Sales by Category</h3>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={categoryData}
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}


function NavItem({ icon, label, active = false }) {
  return (
    <div className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all ${active ? 'bg-primary text-white shadow-lg' : 'hover:bg-white/5'}`}>
      {icon}
      <span className="font-medium">{label}</span>
    </div>
  );
}

function StatCard({ icon, title, value, detail }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-slate-50 rounded-xl">{icon}</div>
      </div>
      <p className="text-slate-500 text-sm font-medium">{title}</p>
      <h3 className="text-2xl font-bold text-slate-800 mt-1">{value}</h3>
      <p className="text-[11px] text-green-600 mt-2 font-bold">{detail}</p>
    </div>
  );
}