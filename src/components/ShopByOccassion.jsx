const occasions = [
  { name: "Wedding", img: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=500" },
  { name: "Festival", img: "https://images.unsplash.com/photo-1514849302-984523450cf4?w=500" },
  { name: "Vacation", img: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=500" },
  { name: "Party", img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500" },
];

export default function ShopByOccasion() {
  return (
    <section className="py-12 px-6 bg-white">
      <h2 className="text-2xl font-serif text-[--brand-blue] mb-8 uppercase tracking-[0.2em] text-center font-bold">
        Shop By Occasion
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {occasions.map((occ) => (
          <div key={occ.name} className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-md group">
            <img src={occ.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={occ.name} />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="text-white font-bold text-lg uppercase tracking-widest">{occ.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}