import Link from 'next/link';
import { Phone, MapPin, Clock, Mail } from 'lucide-react';
import Logo from '@/components/Logo';
import ThemeToggle from '@/components/ThemeToggle';
import WhatsAppIcon from '@/components/common/WhatsAppIcon';

export default function Footer() {
  return (
    <footer className="bg-[#0A0C0E] border-t border-white/[0.08] pt-14 sm:pt-20 pb-28 sm:pb-14 px-4 sm:px-6 lg:px-12 text-[#9E9B95] font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-14">
        {/* Brand Column (5 cols) */}
        <div className="lg:col-span-4 space-y-4">
          <Logo size="lg" forceDark />
          <p className="text-xs sm:text-[13px] leading-relaxed text-[#9E9B95] max-w-sm pt-2">
            Kota&apos;s premier destination for luxury men&apos;s grooming. Precision haircutting, bespoke beard sculpting, rejuvenating skincare, and VIP salon hospitality.
          </p>
          <div className="flex items-center gap-4 pt-2">
            <a
              href="https://wa.me/919784711323"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#BA9D6A] hover:text-[#C2A774] transition-colors"
            >
              <WhatsAppIcon size={16} variant="authentic" /> Chat on WhatsApp
            </a>
            <ThemeToggle showLabel forceDark />
          </div>
        </div>

        {/* Quick Navigation (2 cols) */}
        <div className="lg:col-span-2">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-3 w-[2px] bg-[#BA9D6A]" />
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-white font-semibold">
              Explore
            </h4>
          </div>
          <ul className="space-y-2.5 text-xs tracking-wider uppercase">
            <li>
              <Link href="/" className="hover:text-[#BA9D6A] transition-colors duration-200">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#BA9D6A] transition-colors duration-200">Our Story</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-[#BA9D6A] transition-colors duration-200">Services Menu</Link>
            </li>
            <li>
              <Link href="/transformations" className="hover:text-[#BA9D6A] transition-colors duration-200">Transformations</Link>
            </li>
            <li>
              <Link href="/book-appointment" className="hover:text-[#C2A774] transition-colors duration-200 text-[#BA9D6A] font-semibold">Book Slot</Link>
            </li>
          </ul>
        </div>

        {/* Services Highlight (3 cols) */}
        <div className="lg:col-span-3">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-3 w-[2px] bg-[#BA9D6A]" />
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-white font-semibold">
              Signature Craft
            </h4>
          </div>
          <ul className="space-y-2 text-xs text-[#8A8680]">
            <li className="flex items-center justify-between py-1 border-b border-white/[0.04]">
              <span>Executive Haircut & Fade</span>
              <span className="text-[#BA9D6A] font-semibold">₹350</span>
            </li>
            <li className="flex items-center justify-between py-1 border-b border-white/[0.04]">
              <span>Royal Beard Sculpting</span>
              <span className="text-[#BA9D6A] font-semibold">₹200</span>
            </li>
            <li className="flex items-center justify-between py-1 border-b border-white/[0.04]">
              <span>Charcoal Detox Facial</span>
              <span className="text-[#BA9D6A] font-semibold">₹800</span>
            </li>
            <li className="flex items-center justify-between py-1 border-b border-white/[0.04]">
              <span>Keratin Hair Spa Therapy</span>
              <span className="text-[#BA9D6A] font-semibold">₹950</span>
            </li>
          </ul>
        </div>

        {/* Visit & Contact (3 cols) */}
        <div className="lg:col-span-3 space-y-3.5">
          <div className="inline-flex items-center gap-2 mb-1">
            <div className="h-3 w-[2px] bg-[#BA9D6A]" />
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-white font-semibold">
              Kota Salon Studio
            </h4>
          </div>

          <div className="space-y-2.5 text-xs">
            <p className="flex items-start gap-2.5 text-white/90">
              <MapPin size={15} className="text-[#BA9D6A] shrink-0 mt-0.5" />
              <span>Shop Number 9, Old Police Station, Vigyan Nagar, Kota, Rajasthan - 324005</span>
            </p>
            <p className="flex items-center gap-2.5 text-white/90">
              <Phone size={15} className="text-[#BA9D6A] shrink-0" />
              <a href="tel:+919784711323" className="hover:text-[#BA9D6A] transition">
                +91 97847 11323
              </a>
            </p>
            <p className="flex items-center gap-2.5 text-white/90">
              <Mail size={15} className="text-[#BA9D6A] shrink-0" />
              <a href="mailto:Fk055163@gmail.com" className="hover:text-[#BA9D6A] transition">
                Fk055163@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-2.5 text-white/90">
              <Clock size={15} className="text-[#BA9D6A] shrink-0" />
              <span>Mon - Sun: 9:00 AM – 10:00 PM</span>
            </p>
          </div>

          <div className="pt-2 flex gap-3 text-white/70">
            <a
              href="https://www.instagram.com/nikhar__mens_parlour?stkn=Z3FmZmwyaG9tb3do&utm_source=qr"
              target="_blank"
              rel="noreferrer"
              className="size-8 rounded-full border border-white/10 bg-white/[0.05] hover:border-[#BA9D6A] hover:text-[#BA9D6A] flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
            <a
              href="https://youtube.com/@nikharunisexsaloonkota?si=33SamjrNAJU1Vyg2"
              target="_blank"
              rel="noreferrer"
              className="size-8 rounded-full border border-white/10 bg-white/[0.05] hover:border-[#BA9D6A] hover:text-[#BA9D6A] flex items-center justify-center transition-colors"
              aria-label="YouTube"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
                <polygon points="10 15 15 12 10 9 10 15"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/[0.08] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] sm:text-xs text-[#736F67]">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 sm:gap-2 text-center sm:text-left">
          <span>© 2026 Nikhar Salon Kota.</span>
          <span className="hidden sm:inline text-white/20">•</span>
          <span className="text-[#8A8680]">
            Design by <span className="text-[#BA9D6A] font-medium">Prism Infotech Solution</span>
          </span>
        </div>
        <div className="flex items-center gap-5 sm:gap-6">
          <Link href="/about" className="hover:text-white transition">About</Link>
          <Link href="/services" className="hover:text-white transition">Services</Link>
          <Link href="/transformations" className="hover:text-white transition">Transformations</Link>
          <Link href="/contact" className="hover:text-white transition">Contact</Link>
          <span className="text-[#BA9D6A] font-medium hidden md:inline">Made for Excellence</span>
        </div>
      </div>
    </footer>
  );
}