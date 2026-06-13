import { FacebookIcon, InstagramIcon, XIcon, PinterestIcon, LinkedinIcon, YoutubeIcon } from './SocialIcons';
import instaVideo from '../assets/instaVideo.mp4';

export default function SocialSync() {
  return (
    <section className="py-8 bg-gray-100 px-4">
      <div className="text-center mb-6">
        <h2 className="text-[#104297] font-bold text-lg leading-tight">
          Follow us to Get Regular Updates About <br />
          <span className="text-blue-600 font-serif italic">Latest Trends & Offers</span>
        </h2>
      </div>

      {/* Instagram Video */}
      <div className="bg-white p-4 rounded-xl shadow-inner border-2 border-gray-100 mb-8 max-w-[350px] mx-auto">
        <div className="aspect-[9/16] w-full bg-gray-900 rounded-lg overflow-hidden flex flex-col items-center justify-center text-center relative shadow-lg">
          <video 
            src={instaVideo} 
            className="w-full h-full object-cover"
            autoPlay 
            loop 
            muted 
            playsInline
          />
        </div>
      </div>

      {/* Social Logos */}
      <div className="flex justify-center gap-8 py-4 opacity-80 flex-wrap items-center">
        <a href="https://www.facebook.com/trimurtifashions" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FacebookIcon className="w-6 h-6 cursor-pointer text-[#104297]/40 hover:text-[#1877F2] transition-all duration-300 hover:scale-110" />
        </a>
        <a href="https://www.instagram.com/trimurtifashions" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <InstagramIcon className="w-6 h-6 cursor-pointer text-[#104297]/40 hover:text-[#E1306C] transition-all duration-300 hover:scale-110" />
        </a>
        <a href="https://x.com/trimurtifashion" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
          <XIcon className="w-6 h-6 cursor-pointer text-[#104297]/40 hover:text-[#000000] transition-all duration-300 hover:scale-110" />
        </a>
        <a href="https://www.pinterest.com/trimurtifashions/" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
          <PinterestIcon className="w-6 h-6 cursor-pointer text-[#104297]/40 hover:text-[#BD081C] transition-all duration-300 hover:scale-110" />
        </a>
        <a href="https://www.linkedin.com/company/trimurtifashions/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <LinkedinIcon className="w-6 h-6 cursor-pointer text-[#104297]/40 hover:text-[#0077B5] transition-all duration-300 hover:scale-110" />
        </a>
        <a href="https://www.youtube.com/@trimurtifashions" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <YoutubeIcon className="w-6 h-6 cursor-pointer text-[#104297]/40 hover:text-[#FF0000] transition-all duration-300 hover:scale-110" />
        </a>
      </div>
    </section>
  );
}