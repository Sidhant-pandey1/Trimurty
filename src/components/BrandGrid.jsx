import { motion } from 'framer-motion';

const brands = [
  "KILLER", "MUFTI", "ALLEN SOLLY", "BEING HUMAN", "LEVIS", "USPA", 
  "PEPE", "WRANGLER", "PUMA", "ADIDAS", "NIKE", "JACK & JONES",
  "RAYMOND", "BLACKBERRYS", "LOUIS PHILIPPE", "VAN HEUSEN", "PETER ENGLAND",
  "SPYKAR", "LEE", "REEBOK", "MANYAVAR", "ETHNIX", "INTEGRITI", "LAWMAN"
];

// Split brands for desktop (4 columns)
const desktopCol1 = brands.slice(0, 6);
const desktopCol2 = brands.slice(6, 12);
const desktopCol3 = brands.slice(12, 18);
const desktopCol4 = brands.slice(18, 24);

// Split brands for mobile (2 columns)
const mobileCol1 = brands.slice(0, 12);
const mobileCol2 = brands.slice(12, 24);

const BrandColumn = ({ items, direction = "up", speed = 20 }) => {
  return (
    <div className="relative h-full overflow-hidden w-full">
      <motion.div
        initial={{ y: direction === "up" ? 0 : -1200 }} // Increased start pos/range for safety
        animate={{ y: direction === "up" ? -1200 : 0 }} // Deeper scroll for longer lists
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        className="flex flex-col gap-4 py-4"
      >
        {/* Repeating items 4 times to ensure seamless loop especially for longer mobile lists */}
        {[...items, ...items, ...items, ...items].map((brand, i) => (
          <div key={i} className="h-24 w-full bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center p-2 text-center border border-white/10 hover:bg-white/20 transition-colors shrink-0">
             <span className="text-white/80 font-bold text-xs tracking-wider">{brand}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}; // Adjusted logic to handle variable lengths better if needed, but standard logic should hold if speed/distance matches height. The fixed height animation approach is a bit rigid, assuming height. 
// A better infinite marquee: translate -50% if we duplicate list once to 2x height.
// Current implementation uses y: -600. 6 items * (24h + 4gap = 28rem approx? No 24 = 6rem. 100px. 600px total). 
// 12 items = 1200px. So mobile needs -1200 loop. Desktop needs -600 loop.
// Dynamic height Calculation would be better but keeping it simple with props or fixed values.

export default function BrandGrid() {
  return (
    <section className="py-16 bg-[#002366] overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-white text-center font-serif text-2xl uppercase tracking-[0.3em] mb-12">
          <span className="border-b-2 border-white/30 pb-4">Our Premium Brands</span>
        </h2>
        
        <div className="h-[400px] md:h-[500px] grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 overflow-hidden mask-vertical-fade">
          {/* Desktop Layout */}
          <div className="hidden md:block"><BrandColumn items={desktopCol1} direction="up" speed={25} /></div>
          <div className="hidden md:block"><BrandColumn items={desktopCol2} direction="down" speed={30} /></div>
          <div className="hidden md:block"><BrandColumn items={desktopCol3} direction="up" speed={22} /></div>
          <div className="hidden md:block"><BrandColumn items={desktopCol4} direction="down" speed={28} /></div>

          {/* Mobile Layout */}
          <div className="block md:hidden"><BrandColumn items={mobileCol1} direction="up" speed={40} /></div>
          <div className="block md:hidden"><BrandColumn items={mobileCol2} direction="down" speed={45} /></div>
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