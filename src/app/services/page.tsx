'use client';

import { useState } from 'react';
import { servicesData } from '@/data/services';
import ServiceCard from '@/components/ServiceCard';
import Link from 'next/link';
import { Sparkles, ArrowRight, MessageCircle } from 'lucide-react';

const CATEGORIES = [
  { id: 'All', label: 'All Services' },
  { id: 'Haircut', label: 'Haircuts & Styling' },
  { id: 'Beard', label: 'Beard & Shave' },
  { id: 'Facial', label: 'Skin & Facials' },
  { id: 'Spa', label: 'Hair Spa & Keratin' },
];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? servicesData
    : servicesData.filter((s) => {
        if (activeCategory === 'Haircut') return s.title.includes('Haircut');
        if (activeCategory === 'Beard') return s.title.includes('Beard') || s.title.includes('Shave');
        if (activeCategory === 'Facial') return s.title.includes('Facial');
        if (activeCategory === 'Spa') return s.title.includes('Treatment') || s.title.includes('Products');
        return true;
      });

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto space-y-16 font-sans">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2">
          <div className="h-3 w-[2px] bg-[#BA9D6A]" />
          <span className="text-[10.5px] uppercase tracking-[0.25em] text-[#BA9D6A] font-semibold">
            THE GROOMING MENU
          </span>
          <div className="h-3 w-[2px] bg-[#BA9D6A]" />
        </div>
        <h1 className="font-serif-title text-4xl sm:text-5xl lg:text-6xl font-normal text-white">
          Our Complete Services
        </h1>
        <p className="text-[#A6A29A] text-xs sm:text-sm md:text-base leading-relaxed">
          From signature fade haircuts and hot razor sculpting to revitalizing charcoal facials and keratin hair spa therapies, explore all bespoke offerings at Kota&apos;s premier salon.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap justify-center gap-2.5">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              activeCategory === cat.id
                ? 'bg-[#BA9D6A] text-[#0E1012] shadow-md shadow-[#BA9D6A]/20'
                : 'border border-white/10 bg-white/[0.04] text-white/75 hover:border-[#BA9D6A]/50 hover:text-white'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filtered.map((s, index) => {
          const tags = ['SIGNATURE', 'ROYAL CRAFT', 'EXECUTIVE', 'SPA THERAPY', 'CLASSIC', 'PREMIUM'];
          return (
            <ServiceCard 
              key={s.id} 
              service={s} 
              tag={tags[index % tags.length]} 
            />
          );
        })}
      </div>

      {/* Bottom Booking Touchpoint */}
      <div className="border border-[#BA9D6A]/30 bg-[#141619] rounded-2xl md:rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-xl">
        <div className="inline-flex items-center gap-2">
          <Sparkles size={16} className="text-[#BA9D6A]" />
          <span className="text-xs uppercase tracking-[0.2em] text-[#BA9D6A] font-semibold">
            BESPOKE APPOINTMENTS
          </span>
        </div>
        <h2 className="font-serif-title text-3xl sm:text-4xl text-white">
          Need a Custom Combination or Groom Package?
        </h2>
        <p className="text-xs sm:text-sm text-[#A6A29A] max-w-lg mx-auto">
          Connect directly with our salon manager on WhatsApp for personalized packages, wedding groom combos, or special requests.
        </p>
        <div className="pt-3 flex flex-wrap justify-center gap-4">
          <Link
            href="/book-appointment"
            className="gold-gradient text-[#0E1012] font-bold text-xs tracking-wider uppercase px-7 py-3.5 rounded-full shadow-lg hover:scale-105 transition"
          >
            Reserve Your Slot Now
          </Link>
          <a
            href="https://wa.me/918239239249?text=Hello%20Nikhar%20Salon!%20I%20would%20like%20to%20know%20about%20groom%20packages."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-white/20 text-white hover:border-[#BA9D6A] px-6 py-3.5 rounded-full text-xs uppercase tracking-wider transition"
          >
            <MessageCircle size={15} className="text-[#BA9D6A]" /> Inquire on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}