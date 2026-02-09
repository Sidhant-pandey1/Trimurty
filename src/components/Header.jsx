import { motion } from 'framer-motion';
import { Search, Menu } from 'lucide-react';

const categories = ["SAREES", "MEN", "WOMEN", "KIDS"];

export default function Navbar({ activeIndex, onCategoryClick }) {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Auto Moving Sale Bar */}
      <div className="bg-red-600 text-white py-1 overflow-hidden whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, -1000] }} 
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }} 
          className="inline-block text-[10px] font-bold uppercase tracking-widest"
        >
          SALE SALE SALE SALE SALE SALE SALE SALE SALE SALE SALE SALE SALE SALE
        </motion.div>
      </div>

      {/* Brand Identity */}
      <div className="bg-[#002366] text-white p-4 flex justify-between items-center">
        <Menu className="w-6 h-6 cursor-pointer" />
        <div className="text-center">
          <h1 className="text-xl font-serif tracking-[0.2em] font-bold uppercase">Trimurti</h1>
          <p className="text-[8px] uppercase tracking-tighter opacity-80">A Complete Family Fashion & Wedding Store</p>
        </div>
        <Search className="w-6 h-6 cursor-pointer" />
      </div>

      {/* Category Nav with Zoom Sync */}
      <nav className="flex justify-around items-center border-b h-14 bg-white px-2 relative">
        {categories.map((cat, i) => (
          <div key={cat} className="relative flex flex-col items-center justify-center h-full w-full">
            <motion.button
              onClick={() => onCategoryClick(i)}
              animate={{ 
                scale: activeIndex === i ? 1.25 : 1, 
                color: activeIndex === i ? "#002366" : "#94a3b8",
                fontWeight: activeIndex === i ? "700" : "500" 
              }}
              className="text-[10px] tracking-widest outline-none cursor-pointer"
            >
              {cat}
            </motion.button>
            {activeIndex === i && (
              <motion.div layoutId="navline" className="absolute bottom-0 w-1/2 h-0.5 bg-[#002366]" />
            )}
          </div>
        ))}
      </nav>
    </header>
  );
}