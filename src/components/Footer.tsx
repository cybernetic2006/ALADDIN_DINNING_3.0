import { Link } from 'wouter';
import { Star, MapPin, Phone, Clock, Facebook, Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1E1E1E] text-white/90 pt-16 pb-8 font-poppins relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group inline-flex">
              <Star className="w-6 h-6 text-secondary" />
              <span className="font-playfair text-3xl font-bold tracking-wide text-white">
                Aladdin
              </span>
            </Link>
            <p className="text-white/60 leading-relaxed text-sm max-w-sm">
              Where every meal becomes a memory. Serving Asansol's finest biryani and Indian cuisine with warmth, tradition, and a touch of magic.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/aladdinmatkabiriyani" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-[#1877F2] hover:border-[#1877F2] transition-colors text-white">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/aladdin9196/?hl=en" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-[#E1306C] hover:border-[#E1306C] transition-colors text-white">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://wa.me/918967832009?text=Hi%2C+I%27d+like+to+place+an+order" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-[#25D366] hover:border-[#25D366] transition-colors text-white">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links & Hours */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-playfair text-lg font-semibold mb-6 text-white border-b border-white/10 pb-2">Quick Links</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/" className="hover:text-secondary transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:text-secondary transition-colors">Our Story</Link></li>
                <li><Link href="/menu" className="hover:text-secondary transition-colors">Explore Menu</Link></li>
                <li><Link href="/gallery" className="hover:text-secondary transition-colors">Gallery</Link></li>
                <li><Link href="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-playfair text-lg font-semibold mb-6 text-white border-b border-white/10 pb-2">Hours</h4>
              <ul className="space-y-3 text-sm text-white/60">
                <li className="flex justify-between"><span>Mon:</span> <span className="text-secondary">Closed</span></li>
                <li className="flex justify-between"><span>Tue-Sat:</span> <span>7PM - 10:30PM</span></li>
                <li className="flex justify-between"><span>Sun:</span> <span className="text-secondary">24 Hours</span></li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-6 text-white border-b border-white/10 pb-2">Find Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-white/60">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span>MXFR+HXR, Mohishila Colony,<br />Ushagram, Asansol,<br />West Bengal 713303</span>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:8967832009" className="hover:text-secondary transition-colors">8967832009</a>
                  <a href="tel:7001399671" className="hover:text-secondary transition-colors">7001399671</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-secondary/50 to-transparent my-8" />

        {/* Copyright */}
        <div className="text-center text-sm text-white/40">
          <p>© {new Date().getFullYear()} Aladdin Restaurant. All rights reserved.</p>
        </div>
      </div>
      
      {/* Decorative large logo watermark */}
      <div className="absolute -bottom-20 -right-20 text-[200px] font-playfair font-bold text-white/[0.02] select-none pointer-events-none">
        Aladdin
      </div>
    </footer>
  );
}
