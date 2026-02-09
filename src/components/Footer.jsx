import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#002366] text-white pt-10 pb-6 px-6">
      {/* WhatsApp CTA */}
      <div className="text-center mb-10">
        <p className="text-sm mb-4">"Don't Forget to Join Our Whatsapp Channel"<br/>By clicking on the icon below [cite: 61]</p>
        <button className="bg-green-500 p-3 rounded-full hover:bg-green-600 transition-colors">
          <MessageCircle className="w-8 h-8" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        {/* Products Column */}
        <div>
          <h3 className="font-bold border-b border-blue-400 pb-2 mb-4 uppercase">Products [cite: 63]</h3>
          <ul className="space-y-2 opacity-80">
            <li>Sarees [cite: 64]</li>
            <li>Mens Wear [cite: 65]</li>
            <li>Womens Wear [cite: 66]</li>
            <li>Kids Wear [cite: 67]</li>
            <li>Wedding Collection [cite: 68]</li>
          </ul>
        </div>

        {/* Company Column */}
        <div>
          <h3 className="font-bold border-b border-blue-400 pb-2 mb-4 uppercase">Our Company [cite: 71]</h3>
          <ul className="space-y-2 opacity-80">
            <li>About Us [cite: 72]</li>
            <li>Our Stores [cite: 73]</li>
            <li>Returns & Exchanges [cite: 74]</li>
            <li>Feedback Form [cite: 75]</li>
            <li>Careers [cite: 76]</li>
          </ul>
        </div>

        {/* Contact Details Column */}
        <div>
          <h3 className="font-bold border-b border-blue-400 pb-2 mb-4 uppercase">Contact Details [cite: 77]</h3>
          <div className="space-y-3 opacity-80">
            <div className="flex gap-2">
              <MapPin className="w-4 h-4 shrink-0" />
              <p>Trimurti, Near Jaganath Temple, Main Road, Kesinga - 766012 [cite: 78, 79, 80]</p>
            </div>
            <div className="flex gap-2">
              <Phone className="w-4 h-4" />
              <p>+91 89849 64822 [cite: 82]</p>
            </div>
            <div className="flex gap-2">
              <Mail className="w-4 h-4" />
              <p>contact@trimurticloth.in [cite: 83]</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-blue-800 text-center text-[10px] opacity-60 uppercase tracking-widest">
        All rights reserved by Trimurti 2025-26 
      </div>
    </footer>
  );
}