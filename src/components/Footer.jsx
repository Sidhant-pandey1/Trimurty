import { MessageCircle, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#002366] text-white pt-20 pb-10 px-6 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#002366] to-[#0f3460] opacity-100 z-0"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#537ec5] rounded-full filter blur-[128px] opacity-20 z-0"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#537ec5] rounded-full filter blur-[128px] opacity-10 z-0"></div>

      <div className="container mx-auto relative z-10">
        {/* WhatsApp CTA */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4 tracking-wide">Join Our Exclusive Community</h2>
          <p className="text-blue-200 mb-8 font-light tracking-wide max-w-lg mx-auto">
            Get the latest updates, offers, and trends directly on your WhatsApp.
          </p>
          <a 
            href="https://whatsapp.com/channel/0029Vb7Ekw9Fcow1POe7Ta0p" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-3 bg-[#537ec5] hover:bg-white hover:text-[#002366] text-white px-8 py-4 rounded-full transition-all duration-300 shadow-xl shadow-[#000000]/30 group font-medium tracking-wider"
          >
            <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Join WhatsApp Channel</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-sm border-t border-white/10 pt-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-serif font-bold uppercase tracking-widest mb-2">Trimurti</h3>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#537ec5]">Est. 1998</p>
            </div>
            <p className="text-blue-200/80 leading-relaxed font-light">
              A complete family fashion and wedding store defining elegance for over two decades.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/trimurtifashions" target="_blank" rel="noopener noreferrer" className="hover:text-[#537ec5] transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="https://www.instagram.com/trimurtifashions" target="_blank" rel="noopener noreferrer" className="hover:text-[#537ec5] transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="https://x.com/trimurtifashion" target="_blank" rel="noopener noreferrer" className="hover:text-[#537ec5] transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-[#537ec5] uppercase tracking-wider">Collections</h3>
            <ul className="space-y-3 text-blue-100/80 font-light">
              <li><button onClick={() => scrollToSection('collections')} className="hover:text-white hover:translate-x-1 transition-all">Sarees</button></li>
              <li><button onClick={() => scrollToSection('collections')} className="hover:text-white hover:translate-x-1 transition-all">Mens Wear</button></li>
              <li><button onClick={() => scrollToSection('collections')} className="hover:text-white hover:translate-x-1 transition-all">Womens Wear</button></li>
              <li><button onClick={() => scrollToSection('collections')} className="hover:text-white hover:translate-x-1 transition-all">Kids Wear</button></li>
              <li><button onClick={() => scrollToSection('collections')} className="hover:text-white hover:translate-x-1 transition-all">Wedding Collection</button></li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-[#537ec5] uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3 text-blue-100/80 font-light">
              <li><button onClick={() => scrollToSection('home')} className="hover:text-white hover:translate-x-1 transition-all">Home</button></li>
              <li><button onClick={() => scrollToSection('stores')} className="hover:text-white hover:translate-x-1 transition-all">Our Stores</button></li>
              <li><button onClick={() => scrollToSection('brands')} className="hover:text-white hover:translate-x-1 transition-all">Premium Brands</button></li>
              <li><button onClick={() => scrollToSection('occasions')} className="hover:text-white hover:translate-x-1 transition-all">Shop by Occasion</button></li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-[#537ec5] uppercase tracking-wider">Contact</h3>
            <div className="space-y-4 text-blue-100/80 font-light">
              <a href="https://maps.app.goo.gl/nCVmxjkLAij8DhU87" target="_blank" rel="noopener noreferrer" className="flex gap-3 items-start group">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5 text-[#537ec5] group-hover:text-white transition-colors" />
                <span className="group-hover:text-white transition-colors">Trimurti, Near Jagannath Temple, Main Road, Kesinga - 766012</span>
              </a>
              <a href="tel:+918984964822" className="flex gap-3 items-center group">
                <Phone className="w-5 h-5 text-[#537ec5] group-hover:text-white transition-colors" />
                <span className="group-hover:text-white transition-colors">+91 89849 64822</span>
              </a>
              <a href="mailto:contact@trimurticloth.in" className="flex gap-3 items-center group">
                <Mail className="w-5 h-5 text-[#537ec5] group-hover:text-white transition-colors" />
                <span className="group-hover:text-white transition-colors">contact@trimurticloth.in</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-blue-200/60 uppercase tracking-widest">
          <p>© 2025-26 Trimurti Cloth Store. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}