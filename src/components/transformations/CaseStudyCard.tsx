'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CaseStudy } from '@/data/transformations';
import { Star, Clock, User, Calendar, Quote, CheckCircle2 } from 'lucide-react';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  const [activeView, setActiveView] = useState<'both' | 'before' | 'after'>('both');

  return (
    <>
      <article className="rounded-2xl sm:rounded-3xl bg-white dark:bg-[#121416] border border-[#E5E0D8] dark:border-white/[0.08] overflow-hidden shadow-2xs hover:shadow-xl transition-[border-color,box-shadow] duration-300 flex flex-col justify-between">
        <div>
          {/* Visual Showcase (Before & After Image Display) */}
          <div className="relative bg-[#ECE8E1] dark:bg-[#0A0C0E] border-b border-[#E5E0D8] dark:border-white/[0.08] p-3 sm:p-4">
            {/* View Switcher Controls (Mobile & Desktop) */}
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.18em] uppercase text-[#8C734B] dark:text-[#BA9D6A]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#BA9D6A]" />
                {caseStudy.categoryLabel}
              </span>

              <div className="inline-flex rounded-lg bg-white dark:bg-white/[0.06] p-0.5 border border-[#D9D4CB] dark:border-white/10 text-[10px] font-semibold uppercase tracking-wider">
                <button
                  type="button"
                  onClick={() => setActiveView('both')}
                  className={`px-2 py-0.5 rounded cursor-pointer transition-colors ${
                    activeView === 'both'
                      ? 'bg-[#BA9D6A] text-[#0E1012] font-bold'
                      : 'text-[#7D776D] dark:text-white/60 hover:text-black dark:hover:text-white'
                  }`}
                >
                  Both
                </button>
                <button
                  type="button"
                  onClick={() => setActiveView('before')}
                  className={`px-2 py-0.5 rounded cursor-pointer transition-colors ${
                    activeView === 'before'
                      ? 'bg-[#BA9D6A] text-[#0E1012] font-bold'
                      : 'text-[#7D776D] dark:text-white/60 hover:text-black dark:hover:text-white'
                  }`}
                >
                  Before
                </button>
                <button
                  type="button"
                  onClick={() => setActiveView('after')}
                  className={`px-2 py-0.5 rounded cursor-pointer transition-colors ${
                    activeView === 'after'
                      ? 'bg-[#BA9D6A] text-[#0E1012] font-bold'
                      : 'text-[#7D776D] dark:text-white/60 hover:text-black dark:hover:text-white'
                  }`}
                >
                  After
                </button>
              </div>
            </div>

            {/* Images Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              {/* Before Frame */}
              {(activeView === 'both' || activeView === 'before') && (
                <div
                  className={`relative rounded-xl overflow-hidden bg-[#181A1C] aspect-[3/4] sm:aspect-[4/5] group ${
                    activeView === 'before' ? 'sm:col-span-2 aspect-square sm:aspect-[16/11] max-h-[420px]' : ''
                  }`}
                >
                  <Image
                    src={caseStudy.beforeImg}
                    alt={`${caseStudy.title} - Before transformation`}
                    fill
                    style={{ objectPosition: caseStudy.focusY || 'center top' }}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Bottom Before Badge (Clears top hair patch area completely) */}
                  <div className="absolute bottom-2.5 left-2.5 z-10">
                    <span className="px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-white font-mono text-[9.5px] uppercase font-bold tracking-wider border border-white/20 shadow-md">
                      Before
                    </span>
                  </div>
                </div>
              )}

              {/* After Frame */}
              {(activeView === 'both' || activeView === 'after') && (
                <div
                  className={`relative rounded-xl overflow-hidden bg-[#181A1C] aspect-[3/4] sm:aspect-[4/5] group ${
                    activeView === 'after' ? 'sm:col-span-2 aspect-square sm:aspect-[16/11] max-h-[420px]' : ''
                  }`}
                >
                  <Image
                    src={caseStudy.afterImg}
                    alt={`${caseStudy.title} - After transformation`}
                    fill
                    style={{ objectPosition: caseStudy.focusY || 'center top' }}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Bottom After Result Badge + Duration (Clears top hair patch area completely) */}
                  <div className="absolute bottom-2.5 left-2.5 z-10 flex items-center gap-1.5">
                    <span className="px-2.5 py-1 rounded-md bg-[#BA9D6A] text-[#0E1012] font-mono text-[9.5px] uppercase font-bold tracking-wider shadow-md">
                      After Result
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-md text-white/90 text-[9px] font-sans font-medium flex items-center gap-1 border border-white/15 shadow-md">
                      <Clock size={10} className="text-[#BA9D6A]" /> {caseStudy.duration}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Case Study Metadata & Story */}
          <div className="p-4 sm:p-6 space-y-4">
            {/* Client Pill Strip */}
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs border-b border-[#E5E0D8] dark:border-white/[0.06] pb-3">
              <div className="flex items-center gap-2">
                <div className="h-7 w-7 rounded-full bg-[#BA9D6A]/15 border border-[#BA9D6A]/30 flex items-center justify-center text-[#8C734B] dark:text-[#BA9D6A] font-semibold text-[11px]">
                  {caseStudy.client.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#181A1C] dark:text-white">
                    {caseStudy.client.name}, {caseStudy.client.age}
                  </h4>
                  <p className="text-[10px] text-[#7D776D] dark:text-white/50">
                    {caseStudy.client.occupation} • {caseStudy.client.location}
                  </p>
                </div>
              </div>

              {/* 5-Star Rating */}
              <div className="flex items-center gap-0.5 text-[#BA9D6A]">
                {[...Array(caseStudy.rating)].map((_, i) => (
                  <Star key={i} size={13} fill="currentColor" />
                ))}
              </div>
            </div>

            {/* Case Title */}
            <h3 className="font-serif-title text-lg sm:text-xl font-normal text-[#181A1C] dark:text-white leading-snug">
              {caseStudy.title}
            </h3>

            {/* Problem & Solution Accordion Cards */}
            <div className="space-y-2.5 text-xs">
              <div className="p-3 rounded-xl bg-[#F5F2ED] dark:bg-white/[0.03] border border-[#E5E0D8] dark:border-white/[0.05]">
                <span className="block text-[9.5px] font-bold uppercase tracking-wider text-[#A65E2E] dark:text-[#D98244] mb-1">
                  The Client Concern:
                </span>
                <p className="text-[#555047] dark:text-white/70 leading-relaxed">
                  {caseStudy.concern}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-[#F0EBE1] dark:bg-white/[0.05] border border-[#BA9D6A]/25">
                <span className="block text-[9.5px] font-bold uppercase tracking-wider text-[#8C734B] dark:text-[#BA9D6A] mb-1">
                  Nikhar Bespoke Solution:
                </span>
                <p className="text-[#181A1C] dark:text-white/90 leading-relaxed font-medium">
                  {caseStudy.solution}
                </p>
              </div>
            </div>

            {/* Stylist & Key Benefits */}
            <div className="space-y-2 pt-1 text-xs">
              <div className="flex items-center gap-1.5 text-[11px] text-[#7D776D] dark:text-white/60">
                <User size={12} className="text-[#BA9D6A]" />
                <span>Lead Stylist: <strong className="text-[#181A1C] dark:text-white font-medium">{caseStudy.stylist}</strong></span>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {caseStudy.keyBenefits.map((benefit) => (
                  <span
                    key={benefit}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-medium bg-[#ECE8E1] dark:bg-white/[0.06] text-[#555047] dark:text-white/80"
                  >
                    <CheckCircle2 size={11} className="text-[#BA9D6A]" /> {benefit}
                  </span>
                ))}
              </div>
            </div>

            {/* Testimonial Quote */}
            <div className="relative pt-2 pl-3 border-l-2 border-[#BA9D6A] italic text-xs text-[#555047] dark:text-white/80 leading-relaxed">
              <Quote size={12} className="text-[#BA9D6A] absolute -left-1.5 -top-1 opacity-60" />
              &ldquo;{caseStudy.testimonial}&rdquo;
            </div>
          </div>
        </div>

        {/* Card Footer Action */}
        <div className="p-4 sm:p-6 pt-0 mt-2">
          <Link
            href={`/book-appointment?service=${encodeURIComponent(
              caseStudy.category === 'hair-patch' ? 'Non-Surgical Hair Patch System' : caseStudy.title
            )}&stylist=${encodeURIComponent(
              caseStudy.stylist.includes('Firoz Khan') ? 'Firoz Khan (Owner)' : caseStudy.stylist.split(' (')[0]
            )}`}
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#C2A774] via-[#BA9D6A] to-[#B3935B] hover:brightness-105 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0E1012] transition-[filter,transform] cursor-pointer shadow-sm active:scale-98"
          >
            <span>Book Similar Transformation</span>
            <Calendar size={13} className="shrink-0" />
          </Link>
        </div>
      </article>
    </>
  );
}
