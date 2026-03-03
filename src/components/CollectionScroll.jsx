import { motion } from 'framer-motion';
import sarees from "../assets/Sarees.png"
import men from "../assets/MensWear.png"
import kids from "../assets/KidsWear.png"
import Women from "../assets/WomenWear.png"

const collections = [
  { id: 1, name: "Designer Sarees", price: "₹499", img: sarees },
  { id: 2, name: "Mens Ethnic", price: "₹799", img: men },
  { id: 3, name: "Kids Fashion", price: "₹299", img: kids },
  { id: 4, name: "Bridal Lehengas", price: "₹1999", img: Women },
];

export default function CollectionScroll() {
  return (
    <section className="py-10 bg-white overflow-hidden">
      <h2 className="text-xl font-serif text-[--brand-blue] px-6 mb-6 uppercase tracking-[0.2em] text-center font-bold">
        Our Collections
      </h2>
      
      <div className="flex gap-6 px-6 overflow-x-auto no-scrollbar">
        {collections.map((item) => (
          <div key={item.id} className="min-w-[300px] bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100">
            <div className="h-[400px] overflow-hidden">
              <img src={item.img} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" alt={item.name} />
            </div>
            
            {/* Auto-moving text with price */}
            <div className="bg-[--brand-blue] text-white p-4 overflow-hidden relative">
              <motion.p 
                animate={{ x: [200, -200] }}
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                className="whitespace-nowrap font-bold uppercase tracking-widest text-sm"
              >
                {item.name} • Starting @ {item.price} • {item.name} • Starting @ {item.price}
              </motion.p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}