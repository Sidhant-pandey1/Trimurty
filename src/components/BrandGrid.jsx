import { motion } from 'framer-motion';

const brands = ["KILLER", "MUFTI", "ALLEN SOLLY", "BEING HUMAN", "LEVIS", "USPA", "PEPE", "WRANGLER", "PUMA", "ADIDAS", "NIKE", "JACK & JONES"];

export default function BrandGrid() {
  return (
    <section className="py-12 bg-[#002366] overflow-hidden">
      <h2 className="text-white text-center font-serif text-xl uppercase tracking-[0.2em] mb-8">Brands Available</h2>
      <div className="h-[450px] px-4 overflow-hidden relative">
        <motion.div 
          animate={{ y: [0, -600] }} 
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="grid grid-cols-3 gap-3"
        >
          {[...brands, ...brands, ...brands].map((brand, i) => (
            <div key={i} className="aspect-square bg-white rounded-2xl flex flex-col items-center justify-center p-3 text-center shadow-md">
              <span className="text-[#002366] font-black text-[10px] leading-tight">{brand}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}