import { motion } from 'framer-motion';

const images = [
  "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800",
  "https://images.unsplash.com/photo-1594932224828-b4b059bdb996?w=800",
  "https://images.unsplash.com/photo-1621112904887-419379ce6824?w=800",
  "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=800"
];

export default function HeroSlider({ activeIndex, setActiveIndex }) {
  const getCardStyle = (index) => {
    const diff = index - activeIndex;
    if (diff === 0) return { zIndex: 10, x: 0, scale: 1, opacity: 1, rotate: 0 };
    if (diff === 1 || diff === -3) return { zIndex: 5, x: 50, scale: 0.9, opacity: 0.6, rotate: 5 };
    if (diff === -1 || diff === 3) return { zIndex: 5, x: -50, scale: 0.9, opacity: 0.6, rotate: -5 };
    return { zIndex: 0, x: 0, scale: 0.8, opacity: 0 };
  };

  const handleSwipe = (dir) => {
    if (dir > 0) setActiveIndex((activeIndex + 1) % images.length);
    else setActiveIndex((activeIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative h-[480px] w-full flex items-center justify-center overflow-hidden bg-[#f8fafc] py-12">
      <div className="relative w-[80%] h-full">
        {images.map((img, i) => (
          <motion.div
            key={i}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(_, info) => {
              if (Math.abs(info.offset.x) > 60) handleSwipe(info.offset.x < 0 ? 1 : -1);
            }}
            animate={getCardStyle(i)}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute inset-0 rounded-[2.5rem] shadow-card border-[8px] border-white overflow-hidden cursor-grab active:cursor-grabbing"
          >
            <img src={img} className="w-full h-full object-cover pointer-events-none" alt="Collection" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}