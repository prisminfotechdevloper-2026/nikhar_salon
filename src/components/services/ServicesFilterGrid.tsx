'use client';

import { useState } from 'react';
import { servicesData } from '@/data/services';
import ServiceCard from '@/components/ServiceCard';

const CATEGORIES = [
  { id: 'All', label: 'All Offerings' },
  { id: 'HairPatch', label: 'Hair Patch & Systems (Primary)' },
  { id: 'Haircut', label: 'Haircuts & Styling' },
  { id: 'Beard', label: 'Beard & Shave' },
  { id: 'Facial', label: 'Skin & Facials' },
  { id: 'Spa', label: 'Hair Spa & Keratin' },
];

const TAGS = ['PRIMARY SERVICE', 'ROYAL CRAFT', 'EXECUTIVE', 'SPA THERAPY', 'CLASSIC', 'PREMIUM'];

export default function ServicesFilterGrid() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? servicesData
    : servicesData.filter((s) => {
        if (activeCategory === 'HairPatch') return s.category === 'hair-patch' || s.title.includes('Hair Patch');
        if (activeCategory === 'Haircut') return s.category === 'hair' || s.title.includes('Haircut');
        if (activeCategory === 'Beard') return s.category === 'beard' || s.title.includes('Beard') || s.title.includes('Shave');
        if (activeCategory === 'Facial') return s.category === 'skin' || s.title.includes('Facial');
        if (activeCategory === 'Spa') return s.category === 'spa' || s.title.includes('Spa') || s.title.includes('Treatment');
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
                ? 'bg-[#BA9D6A] text-[#0E1012] shadow-sm'
                : 'border border-[#D9D4CB] dark:border-white/10 bg-[#ECE8E1]/80 dark:bg-white/[0.04] text-[#555047] dark:text-white/75 hover:border-[#BA9D6A]/50 hover:text-[#181A1C] dark:hover:text-white'
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
