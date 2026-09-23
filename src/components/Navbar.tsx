'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Calendar } from 'lucide-react';
import Logo from '@/components/Logo';
import ThemeToggle from '@/components/ThemeToggle';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Transformations', href: '/transformations' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition duration-300 ${scrolled
          ? 'bg-[#0E1012]/95 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.5)] py-2 sm:py-2.5'
          : 'bg-[#0E1012]/85 backdrop-blur-md border-b border-white/[0.05] py-2.5 sm:py-3.5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-10 flex items-center justify-between">
        {/* Responsive Brand Logo (Fixed in Dark/Gold Mode) */}
        <Logo size="responsive" forceDark />

        {/* Desktop Navigation Links with Gold Underline Indicator (Permanent Dark Mode) */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-9 text-[11.5px] xl:text-[12px] font-medium tracking-[0.14em] uppercase" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`group relative py-1.5 transition-colors duration-200 ${isActive
                    ? 'text-white font-semibold'
                    : 'text-white/75 hover:text-white'
                  }`}
              >
                <span>{link.name}</span>
                {/* Gold Underline Bar */}
                <span
                  className={`absolute -bottom-0.5 left-0 right-0 h-[2px] bg-[#BA9D6A] rounded-full transition-[transform,opacity] duration-300 origin-left ${isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                    }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Header Actions */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Theme Toggle Button (Fixed Dark Mode Container Styling) */}
          <ThemeToggle forceDark />

          {/* Direct Call Button (Desktop & Tablet only - Hidden on mobile) */}
          <a
            href="tel:+919784711323"
            className="hidden sm:inline-flex group relative items-center justify-center gap-1.5 rounded-full border border-white/20 bg-white/[0.06] hover:bg-white/[0.14] hover:border-[#BA9D6A]/60 px-3.5 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-[11px] font-semibold tracking-[0.08em] text-white/90 uppercase transition duration-300 backdrop-blur-md cursor-pointer shadow-xs active:scale-95"
            aria-label="Direct Call: +91 97847 11323"
          >
            <Phone className="size-3.5 text-[#BA9D6A] group-hover:scale-110 transition-transform" />
            <span className="whitespace-nowrap">+91 97847 11323</span>
          </a>

          {/* Desktop & Tablet Book Slot CTA */}
          <Link
            href="/book-appointment"
            className="hidden sm:inline-flex group relative items-center justify-center gap-1.5 rounded-full bg-linear-to-r from-[#C2A774] via-[#BA9D6A] to-[#B3935B] hover:brightness-105 px-4 sm:px-5 py-1.5 sm:py-2 text-[10.5px] sm:text-[11.5px] font-semibold tracking-[0.1em] text-[#141619] uppercase transition duration-300 shadow-[0_2px_14px_rgba(186,157,106,0.25)] hover:shadow-[0_4px_22px_rgba(186,157,106,0.4)] active:scale-95 border border-[#E8D4B0]/40 cursor-pointer whitespace-nowrap"
          >
            <Calendar className="size-3.5 text-[#141619] shrink-0" />
            <span className="whitespace-nowrap">Book Slot</span>
          </Link>
        </div>
      </div>
    </header>
  );
}