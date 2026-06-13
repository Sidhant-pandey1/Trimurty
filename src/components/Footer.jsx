import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { MessageCircle, Phone, Mail, MapPin, X, RefreshCw, Clock, Ban, ShieldAlert, Tag, Scale, Shirt, Receipt, Shield, Database, Bell, FileText } from 'lucide-react';
import { FacebookIcon, InstagramIcon, XIcon, PinterestIcon, LinkedinIcon, YoutubeIcon } from './SocialIcons';


export default function Footer() {
  const [isReturnModalOpen, setIsReturnModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navigateToCategory = (catId) => {
    navigate("/collections", { state: { selectedCategory: catId } });
  };

  return (
    <footer className="bg-[#104297] text-white pt-20 pb-10 px-6 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#104297] to-[#0f3460] opacity-100 z-0"></div>
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
            className="inline-flex items-center gap-3 bg-[#537ec5] hover:bg-white hover:text-[#104297] text-white px-8 py-4 rounded-full transition-all duration-300 shadow-xl shadow-[#000000]/30 group font-medium tracking-wider"
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
              <a href="https://www.facebook.com/trimurtifashions" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#1877F2] transition-all duration-300 hover:scale-110" aria-label="Facebook"><FacebookIcon className="w-5 h-5" /></a>
              <a href="https://www.instagram.com/trimurtifashions" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#E1306C] transition-all duration-300 hover:scale-110" aria-label="Instagram"><InstagramIcon className="w-5 h-5" /></a>
              <a href="https://x.com/trimurtifashion" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-all duration-300 hover:scale-110" aria-label="X (Twitter)"><XIcon className="w-5 h-5" /></a>
              <a href="https://www.pinterest.com/trimurtifashions/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#BD081C] transition-all duration-300 hover:scale-110" aria-label="Pinterest"><PinterestIcon className="w-5 h-5" /></a>
              <a href="https://www.linkedin.com/company/trimurtifashions/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#0077B5] transition-all duration-300 hover:scale-110" aria-label="LinkedIn"><LinkedinIcon className="w-5 h-5" /></a>
              <a href="https://www.youtube.com/@trimurtifashions" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#FF0000] transition-all duration-300 hover:scale-110" aria-label="YouTube"><YoutubeIcon className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-[#537ec5] uppercase tracking-wider">Collections</h3>
            <ul className="space-y-3 text-blue-100/80 font-light">
              <li><button onClick={() => navigateToCategory('sarees')} className="hover:text-white hover:translate-x-1 transition-all text-left">Sarees</button></li>
              <li><button onClick={() => navigateToCategory('mens-wear')} className="hover:text-white hover:translate-x-1 transition-all text-left">Mens Wear</button></li>
              <li><button onClick={() => navigateToCategory('ladies-wear')} className="hover:text-white hover:translate-x-1 transition-all text-left">Womens Wear</button></li>
              <li><button onClick={() => navigateToCategory('kids-wear')} className="hover:text-white hover:translate-x-1 transition-all text-left">Kids Wear</button></li>
              <li><button onClick={() => navigateToCategory('wedding-collection')} className="hover:text-white hover:translate-x-1 transition-all text-left">Wedding Collection</button></li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-[#537ec5] uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3 text-blue-100/80 font-light">
              <li><button onClick={() => scrollToSection('home')} className="hover:text-white hover:translate-x-1 transition-all text-left">Home</button></li>
              <li><button onClick={() => scrollToSection('stores')} className="hover:text-white hover:translate-x-1 transition-all text-left">Our Stores</button></li>
              <li><button onClick={() => scrollToSection('brands')} className="hover:text-white hover:translate-x-1 transition-all text-left">Premium Brands</button></li>
              <li><button onClick={() => scrollToSection('occasions')} className="hover:text-white hover:translate-x-1 transition-all text-left">Shop by Occasion</button></li>
              <li><a href="https://forms.gle/Pqi44rt1zxjZDFQ79" target="_blank" rel="noopener noreferrer" className="block hover:text-white hover:translate-x-1 transition-all text-left">Feedback Form</a></li>
              <li><a href="https://forms.gle/o3JZup64RmftXutU9" target="_blank" rel="noopener noreferrer" className="block hover:text-white hover:translate-x-1 transition-all text-left">Careers | Join Our Team</a></li>
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
            <button
              onClick={() => setIsReturnModalOpen(true)}
              className="hover:text-white cursor-pointer transition-colors uppercase tracking-widest outline-none"
            >
              Returns & Exchanges
            </button>
            <button
              onClick={() => setIsPrivacyModalOpen(true)}
              className="hover:text-white cursor-pointer transition-colors uppercase tracking-widest outline-none"
            >
              Privacy Policy
            </button>
          </div>
        </div>
      </div>

      {/* Return & Exchange Policy Modal */}
      <AnimatePresence>
        {isReturnModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsReturnModalOpen(false)}
              className="absolute inset-0 bg-[#104297]/60 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', duration: 0.4 }}
              className="bg-white text-gray-800 rounded-3xl w-full max-w-2xl max-h-[85vh] overflow-hidden shadow-2xl relative z-10 flex flex-col border border-white/20"
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gradient-to-r from-[#104297] to-[#0f3460] text-white">
                <div>
                  <h3 className="text-xl font-serif font-bold tracking-wide">Returns & Exchanges Policy</h3>
                  <p className="text-[10px] text-blue-200 uppercase tracking-widest mt-1">Trimurti Cloth Store</p>
                </div>
                <button
                  onClick={() => setIsReturnModalOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  {/* 1. 7-Day Exchange */}
                  <div className="flex gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="p-3 bg-blue-50 text-[#104297] rounded-xl shrink-0 h-fit">
                      <RefreshCw className="w-5.5 h-5.5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#104297] mb-1">7-Day Exchange Window</h4>
                      <p className="text-xs text-gray-600 font-light leading-relaxed">Exchange within 7 days in the same condition, with the original bill & price tag intact.</p>
                    </div>
                  </div>

                  {/* 2. Timing */}
                  <div className="flex gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="p-3 bg-blue-50 text-[#104297] rounded-xl shrink-0 h-fit">
                      <Clock className="w-5.5 h-5.5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#104297] mb-1">Exchange Timings</h4>
                      <p className="text-xs text-gray-600 font-light leading-relaxed">Exchanges are accepted between 11:00 AM and 03:00 PM only.</p>
                    </div>
                  </div>

                  {/* 3. No Refund */}
                  <div className="flex gap-4 p-4 rounded-2xl bg-red-50/50 border border-red-100 hover:shadow-md transition-shadow">
                    <div className="p-3 bg-red-50 text-red-600 rounded-xl shrink-0 h-fit">
                      <Ban className="w-5.5 h-5.5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-red-800 mb-1">No Cash Refunds</h4>
                      <p className="text-xs text-gray-600 font-light leading-relaxed">No cash refunds will be issued under any circumstances.</p>
                    </div>
                  </div>

                  {/* 4. Excluded Categories */}
                  <div className="flex gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="p-3 bg-blue-50 text-[#104297] rounded-xl shrink-0 h-fit">
                      <Shirt className="w-5.5 h-5.5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#104297] mb-1">Excluded Categories</h4>
                      <p className="text-xs text-gray-600 font-light leading-relaxed">No exchange is allowed on handloom items, innerwear, or accessories.</p>
                    </div>
                  </div>

                  {/* 5. Sale Items */}
                  <div className="flex gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="p-3 bg-blue-50 text-[#104297] rounded-xl shrink-0 h-fit">
                      <Tag className="w-5.5 h-5.5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#104297] mb-1">Sale & Offers</h4>
                      <p className="text-xs text-gray-600 font-light leading-relaxed">Items purchased on sale or promotional offers are not eligible for exchange.</p>
                    </div>
                  </div>

                  {/* 6. No Guarantee */}
                  <div className="flex gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="p-3 bg-blue-50 text-[#104297] rounded-xl shrink-0 h-fit">
                      <ShieldAlert className="w-5.5 h-5.5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#104297] mb-1">Color & Quality</h4>
                      <p className="text-xs text-gray-600 font-light leading-relaxed">No guarantee on item color fastness or material quality.</p>
                    </div>
                  </div>

                  {/* 7. Inclusive of Taxes */}
                  <div className="flex gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="p-3 bg-blue-50 text-[#104297] rounded-xl shrink-0 h-fit">
                      <Receipt className="w-5.5 h-5.5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#104297] mb-1">Inclusive Pricing</h4>
                      <p className="text-xs text-gray-600 font-light leading-relaxed">All billing and prices are inclusive of applicable taxes.</p>
                    </div>
                  </div>

                  {/* 8. Jurisdiction */}
                  <div className="flex gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="p-3 bg-blue-50 text-[#104297] rounded-xl shrink-0 h-fit">
                      <Scale className="w-5.5 h-5.5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#104297] mb-1">Jurisdiction</h4>
                      <p className="text-xs text-gray-600 font-light leading-relaxed">All exchanges are subject to the jurisdiction of the respective store only.</p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Footer */}
              <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-end">
                <button
                  onClick={() => setIsReturnModalOpen(false)}
                  className="px-6 py-2.5 bg-[#104297] hover:bg-[#0f3460] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Privacy Policy Modal */}
      <AnimatePresence>
        {isPrivacyModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPrivacyModalOpen(false)}
              className="absolute inset-0 bg-[#104297]/60 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', duration: 0.4 }}
              className="bg-white text-gray-800 rounded-3xl w-full max-w-2xl max-h-[85vh] overflow-hidden shadow-2xl relative z-10 flex flex-col border border-white/20"
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gradient-to-r from-[#104297] to-[#0f3460] text-white">
                <div>
                  <h3 className="text-xl font-serif font-bold tracking-wide">Privacy Policy</h3>
                  <p className="text-[10px] text-blue-200 uppercase tracking-widest mt-1">Trimurti Cloth Store</p>
                </div>
                <button
                  onClick={() => setIsPrivacyModalOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto space-y-4 md:space-y-6 text-sm text-gray-600 font-light">
                <p className="leading-relaxed">
                  At Trimurti Cloth Store, we value your privacy and are committed to protecting your personal information. This policy outlines how we handle your data.
                </p>

                <div className="grid grid-cols-1 gap-4 mt-2">

                  {/* 1. Information Collection */}
                  <div className="flex gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                    <div className="p-3 bg-blue-50 text-[#104297] rounded-xl shrink-0 h-fit">
                      <Database className="w-5.5 h-5.5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#104297] mb-1">Information Collection</h4>
                      <p className="text-xs leading-relaxed">We collect basic customer information (such as name and contact number) during billing to process transactions, manage orders, and facilitate customer service.</p>
                    </div>
                  </div>

                  {/* 2. Data Security & Protection */}
                  <div className="flex gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                    <div className="p-3 bg-blue-50 text-[#104297] rounded-xl shrink-0 h-fit">
                      <Shield className="w-5.5 h-5.5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#104297] mb-1">Data Protection</h4>
                      <p className="text-xs leading-relaxed">Your data is stored securely. We do not sell, rent, or trade your personal information to third parties for marketing purposes.</p>
                    </div>
                  </div>

                  {/* 3. Communication Channel updates */}
                  <div className="flex gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                    <div className="p-3 bg-blue-50 text-[#104297] rounded-xl shrink-0 h-fit">
                      <Bell className="w-5.5 h-5.5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#104297] mb-1">Updates & Announcements</h4>
                      <p className="text-xs leading-relaxed">If you opt in, we may send you notifications, new arrival alerts, or promotional offers via WhatsApp. You can opt out of these updates at any time.</p>
                    </div>
                  </div>

                  {/* 4. Policy Updates */}
                  <div className="flex gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                    <div className="p-3 bg-blue-50 text-[#104297] rounded-xl shrink-0 h-fit">
                      <FileText className="w-5.5 h-5.5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#104297] mb-1">Policy Changes</h4>
                      <p className="text-xs leading-relaxed">We reserve the right to update our privacy policy as store practices evolve. All changes will be updated directly on this platform.</p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Footer */}
              <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-end">
                <button
                  onClick={() => setIsPrivacyModalOpen(false)}
                  className="px-6 py-2.5 bg-[#104297] hover:bg-[#0f3460] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
}