import { motion } from 'framer-motion';

const brands = [
  "KILLER", "MUFTI", "ALLEN SOLLY", "BEING HUMAN", "LEVIS", "USPA", 
  "PEPE", "WRANGLER", "PUMA", "ADIDAS", "NIKE", "JACK & JONES",
  "RAYMOND", "BLACKBERRYS", "LOUIS PHILIPPE", "VAN HEUSEN", "PETER ENGLAND",
  "SPYKAR", "LEE", "REEBOK", "MANYAVAR", "ETHNIX", "INTEGRITI", "LAWMAN"
];

// Split brands into 4 columns for the grid
const column1 = brands.slice(0, 6);
const column2 = brands.slice(6, 12);
const column3 = brands.slice(12, 18);
const column4 = brands.slice(18, 24);

const BrandColumn = ({ items, direction = "up", speed = 20 }) => {
  return (
    <div className="relative h-full overflow-hidden w-full">
      <motion.div
        initial={{ y: direction === "up" ? 0 : -600 }}
        animate={{ y: direction === "up" ? -600 : 0 }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        className="flex flex-col gap-4 py-4"
      >
        {[...items, ...items, ...items, ...items].map((brand, i) => (
          <div key={i} className="h-24 w-full bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center p-2 text-center border border-white/10 hover:bg-white/20 transition-colors">
            <span className="text-white/80 font-bold text-xs tracking-wider">{brand}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function BrandGrid() {
  return (
    <section className="py-16 bg-[#002366] overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-white text-center font-serif text-2xl uppercase tracking-[0.3em] mb-12">
          <span className="border-b-2 border-white/30 pb-4">Our Premium Brands</span>
        </h2>
        
        <div className="h-[500px] grid grid-cols-2 md:grid-cols-4 gap-4 overflow-hidden mask-vertical-fade">
          <BrandColumn items={column1} direction="up" speed={25} />
          <BrandColumn items={column2} direction="down" speed={30} />
          <BrandColumn items={column3} direction="up" speed={22} />
          <BrandColumn items={column4} direction="down" speed={28} />
        </div>
      </div>

      <style jsx>{`
        .mask-vertical-fade {
          mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </section>
  );
}