import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark text-slate-300 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="col-span-1 md:col-span-2">
          <h2 className="font-heading text-2xl font-bold text-white mb-4">Amar<span className="text-primary">Dokan</span></h2>
          <p className="max-w-xs text-sm leading-relaxed">
            Fresh groceries delivered directly to your kitchen. We ensure quality products and fast delivery in every order.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/faq" className="hover:text-primary">FAQ</Link></li>
            <li><Link href="/terms" className="hover:text-primary">Terms & Conditions</Link></li>
            <li><Link href="/contact" className="hover:text-primary">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4">Newsletter</h4>
          <div className="flex mt-2">
            <input type="email" placeholder="Your email" className="bg-slate-700 px-3 py-2 rounded-l-md w-full outline-none text-white focus:ring-1 focus:ring-primary" />
            <button className="bg-primary text-white px-4 py-2 rounded-r-md">Join</button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-slate-700 text-center text-xs">
        © 2026 AmarDokan. All rights reserved.
      </div>
    </footer>
  );
}