import Link from 'next/link';
import { Phone, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050506] border-t border-zinc-800/80 pt-12 sm:pt-16 pb-28 sm:pb-12 px-4 sm:px-6 text-zinc-400">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10">
        {/* Brand Info */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 border border-[#e4a863] flex items-center justify-center font-serif-luxury text-[#e4a863] font-bold text-base">
              N
            </div>
            <span className="font-serif-luxury font-bold tracking-[0.2em] text-white text-base sm:text-lg">
              NIKHAR SALON
            </span>
          </div>
          <p className="text-xs leading-relaxed text-zinc-400">
            Kota&apos;s premier men&apos;s salon offering precision haircuts, tailored beard grooming, signature facials, and luxury spa treatments.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xs uppercase tracking-widest text-[#e4a863] font-semibold mb-3 sm:mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2 text-xs">
            <li><Link href="/" className="hover:text-[#e4a863] transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-[#e4a863] transition">About Us</Link></li>
            <li><Link href="/services" className="hover:text-[#e4a863] transition">Services</Link></li>
            <li><Link href="/gallery" className="hover:text-[#e4a863] transition">Gallery</Link></li>
            <li><Link href="/contact" className="hover:text-[#e4a863] transition">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xs uppercase tracking-widest text-[#e4a863] font-semibold mb-3 sm:mb-4">
            Contact Us
          </h4>
          <div className="space-y-2.5 text-xs">
            <p className="flex items-center gap-2 text-zinc-300">
              <Phone size={14} className="text-[#e4a863] shrink-0" />
              <a href="tel:+918239239249" className="hover:text-[#e4a863] transition">
                +91 82392 39249
              </a>
            </p>
            <p className="flex items-start gap-2 text-zinc-300">
              <MapPin size={14} className="text-[#e4a863] shrink-0 mt-0.5" />
              <span>Shop 12, 1st Floor, City Mall, Kota</span>
            </p>
            <p className="flex items-center gap-2 text-zinc-300">
              <Clock size={14} className="text-[#e4a863] shrink-0" />
              <span>9:00 AM – 10:00 PM (All Days)</span>
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-xs uppercase tracking-widest text-[#e4a863] font-semibold mb-3">
            Follow Us
          </h4>
          <div className="flex gap-4 mb-4 text-zinc-400">
            {/* Instagram */}
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#e4a863] transition" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
            {/* Facebook */}
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-[#e4a863] transition" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            {/* YouTube */}
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-[#e4a863] transition" aria-label="YouTube">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
                <polygon points="10 15 15 12 10 9 10 15"/>
              </svg>
            </a>
          </div>
          <p className="font-script text-2xl sm:text-3xl text-[#e4a863]">Stay Connected</p>
          <p className="text-[11px] text-zinc-500 mt-0.5">Because you deserve the best.</p>
        </div>
      </div>

      {/* Copyright Line */}
      <div className="border-t border-zinc-900 pt-6 text-center text-[11px] sm:text-xs text-zinc-600">
        © 2026 Nikhar Salon. All Rights Reserved. | Kota, Rajasthan
      </div>
    </footer>
  );
}