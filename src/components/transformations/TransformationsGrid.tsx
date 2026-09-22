'use client';

import { useState } from 'react';
import { CASE_STUDIES, CaseStudy } from '@/data/transformations';
import CaseStudyCard from './CaseStudyCard';
import { SlidersHorizontal } from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: 'All Case Studies' },
  { id: 'hair-patch', label: 'Hair Patch Systems' },
  { id: 'beard', label: 'Beard Sculpting' },
  { id: 'skin', label: 'Skin & Facials' },
  { id: 'spa', label: 'Hair Spa & Botox' },
];

export default function TransformationsGrid() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredStudies = selectedCategory === 'all'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((item) => item.category === selectedCategory);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#FAF8F5] dark:bg-[#0E1012] border-b border-[#E5E0D8] dark:border-white/[0.08] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Filter Navigation Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 sm:mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#7D776D] dark:text-white/60">
            <SlidersHorizontal size={14} className="text-[#BA9D6A]" />
            <span>Filter Case Studies:</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => {
              const count = cat.id === 'all'
                ? CASE_STUDIES.length
                : CASE_STUDIES.filter((c) => c.category === cat.id).length;

              const isSelected = selectedCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-[#BA9D6A] text-[#0E1012] font-bold shadow-xs'
                      : 'border border-[#D9D4CB] dark:border-white/10 bg-white dark:bg-white/[0.04] text-[#555047] dark:text-white/70 hover:border-[#BA9D6A]/50 hover:text-[#181A1C] dark:hover:text-white'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`inline-flex items-center justify-center text-[10px] h-4 min-w-4 px-1 rounded-full ${
                      isSelected
                        ? 'bg-[#0E1012]/15 text-[#0E1012]'
                        : 'bg-black/5 dark:bg-white/10 text-[#7D776D] dark:text-white/60'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter Feedback */}
        <div className="mb-6 flex items-center justify-between text-xs text-[#7D776D] dark:text-white/50 border-b border-[#E5E0D8] dark:border-white/[0.06] pb-3">
          <span>
            Showing <strong className="text-[#181A1C] dark:text-white">{filteredStudies.length}</strong> verified transformation stories
          </span>
          <span className="hidden sm:inline-block text-[#8C734B] dark:text-[#BA9D6A] font-medium">
            100% Unedited Salon Results
          </span>
        </div>

        {/* 2-Column Grid for Rich Detailed Case Studies */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {filteredStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
          ))}
        </div>
      </div>
    </section>
  );
}
