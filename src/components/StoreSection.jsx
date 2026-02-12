import storeVideo from '../assets/Store video kesinga_20260208_200928178.mp4';

export default function StoreSection() {
  return (
    <section className="py-12 px-6 bg-white text-center">
      <h2 className="text-2xl font-serif text-[#002366] mb-8 uppercase tracking-widest">Our Stores</h2>
      <div className="w-full aspect-video bg-gray-200 rounded-3xl overflow-hidden shadow-inner mb-8 border border-gray-100">
        <video 
          src={storeVideo} 
          className="w-full h-full object-cover" 
          autoPlay 
          loop 
          muted 
          playsInline
        />
      </div>
      <div className="grid grid-cols-1 gap-4">
        <a href="https://maps.app.goo.gl/nCVmxjkLAij8DhU87" target="_blank" rel="noopener noreferrer" className="bg-[#002366] text-white py-5 rounded-2xl font-bold shadow-lg uppercase tracking-widest active:scale-95 transition-transform">
          Kesinga <span className="block text-[9px] font-normal opacity-70 mt-1">Near Jagannath Temple</span>
        </a>
        <a href="https://maps.app.goo.gl/2ak39pd1bY72KnbU9" target="_blank" rel="noopener noreferrer" className="bg-[#002366] text-white py-5 rounded-2xl font-bold shadow-lg uppercase tracking-widest active:scale-95 transition-transform">
          Bhawanipatna <span className="block text-[9px] font-normal opacity-70 mt-1">Store Location</span>
        </a>
      </div>
    </section>
  );
}