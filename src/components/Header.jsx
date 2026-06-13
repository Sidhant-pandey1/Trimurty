import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Menu } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const categories = [
  { label: "HOME", id: "home" },
  { label: "COLLECTION", id: "collections" },
  { label: "ABOUT", id: "about" },
  { label: "CONTACT", id: "contact" }
];

export default function Navbar({ activeIndex, onCategoryClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    if (id === "about") {
      navigate("/about");
    } else if (id === "collections") {
      navigate("/collections");
    } else {
      if (location.pathname !== "/") {
        navigate("/", { state: { scrollTo: id } });
      } else {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const menuItems = [
    { label: "Home", id: "home" },
    { label: "Our Stores", id: "stores" },
    { label: "About Us", id: "about" },
    { label: "Collections", id: "collections" },
    { label: "Brands", id: "brands" },
    { label: "Shop By Occasion", id: "occasions" },
    { label: "Social Updates", id: "social" },
    { label: "Contact Us", id: "contact" }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Auto Moving Sale Bar */}
      <div className="bg-red-600 text-white py-1 overflow-hidden flex">
        <motion.div
          animate={{ x: "-100%" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap min-w-full flex-shrink-0"
        >
          {Array(20).fill("SALE").map((item, i) => (
            <span key={i} className="mx-8 text-[10px] font-bold uppercase tracking-widest">{item}</span>
          ))}
        </motion.div>
        <motion.div
          animate={{ x: "-100%" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap min-w-full flex-shrink-0"
        >
          {Array(20).fill("SALE").map((item, i) => (
            <span key={`dup-${i}`} className="mx-8 text-[10px] font-bold uppercase tracking-widest">{item}</span>
          ))}
        </motion.div>
      </div>

      {/* Brand Identity */}
      <div className="bg-[#104297] text-white p-4 flex justify-between items-center relative">
        <div className="relative">
          <Menu
            className="w-6 h-6 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />

          {/* Dropdown Menu */}
          {isMenuOpen && (
            <div className="absolute top-10 left-0 bg-white text-[#104297] rounded-xl shadow-2xl py-2 w-56 z-50 border border-gray-100 overflow-hidden origin-top-left animate-in fade-in zoom-in-95 duration-200">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-5 py-3 hover:bg-gray-50 text-xs font-bold uppercase tracking-widest border-b border-gray-50 last:border-0 hover:text-[#537ec5] transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="text-center">
          <h1 className="text-xl font-serif tracking-[0.2em] font-bold uppercase">Trimurti</h1>
          <p className="text-[8px] uppercase tracking-tighter opacity-80">A Complete Family Fashion & Wedding Store</p>
        </div>
        <Search className="w-6 h-6 cursor-pointer" />
      </div>

      {/* Category Nav */}
      <nav className="flex justify-around items-center border-b h-14 bg-white px-2 relative">
        {categories.map((cat) => {
          const getActiveItem = () => {
            if (location.pathname === "/collections") return "collections";
            if (location.pathname === "/about") return "about";
            if (location.pathname === "/") return "home";
            return "";
          };
          const isActive = getActiveItem() === cat.id;
          return (
            <div key={cat.id} className="relative flex flex-col items-center justify-center h-full w-full">
              <button
                onClick={() => scrollToSection(cat.id)}
                className={`text-[10px] tracking-widest outline-none cursor-pointer font-bold transition-colors duration-300 ${
                  isActive ? "text-[#104297]" : "text-slate-400 hover:text-[#104297]"
                }`}
              >
                {cat.label}
              </button>
            </div>
          );
        })}
      </nav>
    </header>
  );
}