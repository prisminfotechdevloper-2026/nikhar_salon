'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { servicesData } from '@/data/services';
import ServiceCard from '@/components/ServiceCard';

const CATEGORIES = ['All', 'Haircut', 'Beard', 'Facial', 'Spa'];
const TAGS = ['SIGNATURE', 'ROYAL CRAFT', 'EXECUTIVE', 'SPA THERAPY', 'CLASSIC', 'PREMIUM'];

export default function HomeServicesSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredServices = selectedCategory === 'All' 
    ? servicesData 
    : servicesData.filter(s => {
        if (selectedCategory === 'Haircut') return s.title.includes('Haircut');
        if (selectedCategory === 'Beard') return s.title.includes('Beard') || s.title.includes('Shave');
        if (selectedCategory === 'Facial') return s.title.includes('Facial');
        if (selectedCategory === 'Spa') return s.title.includes('Treatment') || s.title.includes('Products');
        return true;
      });

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-[#FAF8F5] dark:bg-[#0E1012] relative overflow-hidden border-b border-[#E5E0D8] dark:border-white/[0.08] transition-colors duration-300">
      {/* Subtle Ambient Gold Glow */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-[#BA9D6A]/[0.06] blur-[160px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2">
              <div className="h-3 w-[2px] bg-[#BA9D6A]" />
              <span className="text-[10.5px] font-semibold tracking-[0.25em] text-[#8C734B] dark:text-[#BA9D6A] uppercase font-sans">
                CURATED SERVICES
              </span>
            </div>
            <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl text-[#181A1C] dark:text-white font-normal leading-tight">
              Signature Grooming & Therapies
            </h2>
            <p className="text-xs sm:text-sm text-[#555047] dark:text-[#A6A29A] leading-relaxed">
              Handcrafted cuts, razor sculpts, skin glow facials, and hair restoration therapies tailored exclusively for modern gentlemen.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#BA9D6A] text-[#0E1012] shadow-sm'
                    : 'border border-[#D9D4CB] dark:border-white/10 bg-[#ECE8E1]/80 dark:bg-white/[0.04] text-[#555047] dark:text-white/75 hover:border-[#BA9D6A]/50 hover:text-[#181A1C] dark:hover:text-white'
                }`}
              >
                {cat === 'All' ? 'All Offerings' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              tag={TAGS[index % TAGS.length]} 
            />
          ))}
        </div>

        {/* View All Services Footer */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-[#BA9D6A]/50 bg-white dark:bg-white/[0.04] hover:bg-[#BA9D6A]/15 hover:border-[#BA9D6A] px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#8C734B] dark:text-[#C2A774] transition-all shadow-2xs"
          >
            <span>Explore Complete Grooming Menu</span>
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
