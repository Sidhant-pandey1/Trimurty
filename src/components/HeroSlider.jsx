import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import heroImage from '../assets/New Trimurti Lucky Draw Wall flex 8x4.jpg.jpeg';

const images = [
  "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1594932224828-b4b059bdb996?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1621112904887-419379ce6824?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=2000&auto=format&fit=crop"
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
};

export default function HeroSlider({ activeIndex, setActiveIndex }) {
  /*
  const [direction, setDirection] = useState(0);
  const [prevIndex, setPrevIndex] = useState(activeIndex);

  useEffect(() => {
    if (activeIndex !== prevIndex) {
      if (activeIndex > prevIndex) {
        setDirection(1);
      } else if (activeIndex === 0 && prevIndex === images.length - 1) {
        setDirection(1); // Wrap around forward
      } else if (activeIndex === images.length - 1 && prevIndex === 0) {
        setDirection(-1); // Wrap around backward
      } else {
        setDirection(-1);
      }
      setPrevIndex(activeIndex);
    }
  }, [activeIndex, prevIndex]);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    if (newDirection === 1) {
      setActiveIndex((activeIndex + 1) % images.length);
    } else {
      setActiveIndex((activeIndex - 1 + images.length) % images.length);
    }
  };
  */

  return (
    <div className="relative w-full overflow-hidden bg-white">
      <img 
        src={heroImage} 
        className="w-full h-auto md:h-screen object-contain md:object-cover block" 
        alt="Hero Banner" 
      />

      {/*
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={activeIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="absolute inset-0 w-full h-full"
        >
          <div className="absolute inset-0 bg-black/20 z-10" /> 
          <img 
            src={images[activeIndex]} 
            className="w-full h-full object-cover" 
            alt="Hero" 
          />
        </motion.div>
      </AnimatePresence>

      <button 
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all"
        onClick={() => paginate(-1)}
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button 
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all"
        onClick={() => paginate(1)}
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-20">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > activeIndex ? 1 : -1);
              setActiveIndex(i);
            }}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === activeIndex ? "w-12 bg-white" : "w-6 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
      */}
    </div>
  );
}