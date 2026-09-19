'use client';

import { useState } from 'react';
import { servicesData } from '@/data/services';
import ServiceCard from '@/components/ServiceCard';

const CATEGORIES = [
  { id: 'All', label: 'All Services' },
  { id: 'Haircut', label: 'Haircuts & Styling' },
  { id: 'Beard', label: 'Beard & Shave' },
  { id: 'Facial', label: 'Skin & Facials' },
  { id: 'Spa', label: 'Hair Spa & Keratin' },
];

const TAGS = ['SIGNATURE', 'ROYAL CRAFT', 'EXECUTIVE', 'SPA THERAPY', 'CLASSIC', 'PREMIUM'];

export default function ServicesFilterGrid() {
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
    <div className="space-y-12">
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
        {filtered.map((s, index) => (
          <ServiceCard 
            key={s.id} 
            service={s} 
            tag={TAGS[index % TAGS.length]} 
          />
        ))}
      </div>
    </div>
  );
}
