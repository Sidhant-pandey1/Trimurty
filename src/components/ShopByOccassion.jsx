import weddingImg from '../assets/wedding.png';
import festivalImg from '../assets/festival.png';
import vacationImg from '../assets/vacation.png';
import partyImg from '../assets/party.png';

const occasions = [
  { name: "Wedding", img: weddingImg },
  { name: "Festival", img: festivalImg },
  { name: "Vacation", img: vacationImg },
  { name: "Party", img: partyImg },
];

export default function ShopByOccasion() {
  return (
    <section className="py-12 px-6 bg-white">
      <h2 className="text-2xl font-serif text-[--brand-blue] mb-8 uppercase tracking-[0.2em] text-center font-bold">
        Shop By Occasion
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {occasions.map((occ) => (
          <div key={occ.name} className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
            <img src={occ.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={occ.name} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center pb-8 opacity-90 group-hover:opacity-100 transition-opacity">
              <span className="text-white font-serif font-bold text-xl uppercase tracking-widest drop-shadow-md border-b-2 border-transparent group-hover:border-white pb-1 transition-all">{occ.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}