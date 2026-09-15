'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MapPin, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#080808]/95 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        {/* Salon Brand Logo */}
        <Link href="/" className="flex items-center gap-2 sm:gap-3 shrink-0">
          <div className="w-8 h-8 sm:w-10 sm:h-10 border border-[#e4a863] flex items-center justify-center font-serif-luxury text-[#e4a863] font-bold text-base sm:text-xl">
            N
          </div>
          <div>
            <span className="font-serif-luxury text-sm sm:text-lg tracking-[0.18em] sm:tracking-[0.2em] font-bold text-white block leading-none">
              NIKHAR
            </span>
            <span className="text-[8px] sm:text-[9px] tracking-[0.25em] text-[#e4a863] block mt-0.5 uppercase font-medium">
              Salon • Kota
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.18em] font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`transition ${
                pathname === link.href
                  ? 'text-[#e4a863] font-semibold'
                  : 'text-zinc-300 hover:text-[#e4a863]'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* City & Appointment CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden lg:flex items-center gap-1.5 text-xs text-zinc-400">
            <MapPin size={15} className="text-[#e4a863]" />
            <span>Kota, Rajasthan</span>
          </div>

          <Link
            href="/book-appointment"
            className="gold-gradient text-black font-semibold text-[10px] sm:text-xs tracking-wider uppercase px-3 sm:px-5 py-2 sm:py-2.5 rounded-full transition transform hover:scale-105 shadow-md shadow-[#e4a863]/20 whitespace-nowrap"
          >
            <span className="inline sm:hidden">Book Now</span>
            <span className="hidden sm:inline">Book Appointment</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-zinc-300 hover:text-white p-1"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#0e0e11] border-b border-zinc-800 px-6 py-4 space-y-3 text-sm uppercase tracking-wider font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block py-2 ${
                pathname === link.href ? 'text-[#e4a863]' : 'text-zinc-300 hover:text-[#e4a863]'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}