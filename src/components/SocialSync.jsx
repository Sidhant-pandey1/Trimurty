import { Facebook, Linkedin, Instagram } from 'lucide-react';

export default function SocialSync() {
  return (
    <section className="py-8 bg-gray-100 px-4">
      <div className="text-center mb-6">
        <h2 className="text-[#002366] font-bold text-lg leading-tight">
          Follow us to Get Regular Updates About <br />
          <span className="text-blue-600 font-serif italic">Latest Trends & Offers</span>
        </h2>
      </div>

      {/* Instagram Video Placeholder */}
      <div className="bg-white p-4 rounded-xl shadow-inner border-2 border-dashed border-gray-300 mb-8">
        <div className="aspect-[9/16] max-w-[300px] mx-auto bg-gray-200 rounded-lg flex flex-col items-center justify-center text-center p-6">
          <Instagram className="w-12 h-12 text-pink-600 mb-4" />
          <p className="text-xs text-gray-500 italic">
            Instagram post sync: Videos uploaded regularly via insta link
          </p>
        </div>
      </div>

      {/* Social Logos */}
      <div className="flex justify-center gap-8 py-4 grayscale opacity-70">
        <Facebook className="w-8 h-8 cursor-pointer hover:text-blue-600 hover:grayscale-0 transition-all" />
        <Linkedin className="w-8 h-8 cursor-pointer hover:text-blue-700 hover:grayscale-0 transition-all" />
        <div className="font-bold text-xl cursor-pointer hover:text-orange-600 hover:grayscale-0">fOX</div>
      </div>
    </section>
  );
}