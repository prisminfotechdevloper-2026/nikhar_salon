'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, X, ZoomIn, MessageCircle } from 'lucide-react';
import { galleryData, GalleryImage } from '@/data/gallery';

const CATEGORIES = [
  'All',
  'Haircuts & Styling',
  'Beard Grooming',
  'Facials',
  'Hair Treatments',
  'Salon Ambience',
];

export default function GalleryPage() {
  const [activeCat, setActiveCat] = useState('All');
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);

  const filtered = activeCat === 'All'
    ? galleryData
    : galleryData.filter((img) => img.category === activeCat);

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto space-y-16 font-sans">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2">
          <div className="h-3 w-[2px] bg-[#BA9D6A]" />
          <span className="text-[10.5px] uppercase tracking-[0.25em] text-[#BA9D6A] font-semibold">
            THE LOOKBOOK
          </span>
          <div className="h-3 w-[2px] bg-[#BA9D6A]" />
        </div>
        <h1 className="font-serif-title text-4xl sm:text-5xl lg:text-6xl font-normal text-white">
          Moments of Style & Craft
        </h1>
        <p className="text-[#A6A29A] text-xs sm:text-sm md:text-base leading-relaxed">
          A visual showcase into Nikhar Salon Kota — featuring real client transformations, precision beard architecture, and our tranquil luxury studio ambiance.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCat(cat)}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              activeCat === cat
                ? 'bg-[#BA9D6A] text-[#0E1012] shadow-md shadow-[#BA9D6A]/20'
                : 'border border-white/10 bg-white/[0.04] text-white/75 hover:border-[#BA9D6A]/50 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filtered.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveImage(item)}
            className="group relative aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden border border-white/[0.08] hover:border-[#BA9D6A]/60 bg-[#141619] shadow-md cursor-pointer transition-all duration-300"
          >
            <Image
              src={item.imgUrl}
              alt={item.altText}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
              <div className="flex justify-end">
                <div className="h-8 w-8 rounded-full bg-black/60 border border-white/20 text-[#BA9D6A] flex items-center justify-center">
                  <ZoomIn size={16} />
                </div>
              </div>
              <div>
                <span className="text-[10px] tracking-[0.25em] text-[#BA9D6A] font-semibold uppercase block">
                  {item.category}
                </span>
                <p className="text-white font-serif-title text-xl mt-1">{item.altText}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div 
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-xl animate-in fade-in"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-[#141619] border border-[#BA9D6A]/40 rounded-2xl overflow-hidden shadow-2xl"
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-20 h-9 w-9 rounded-full bg-black/70 border border-white/20 text-white flex items-center justify-center hover:text-[#BA9D6A]"
              aria-label="Close lightbox"
            >
              <X size={18} />
            </button>

            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black">
              <Image
                src={activeImage.imgUrl}
                alt={activeImage.altText}
                fill
                className="object-contain"
              />
            </div>

            <div className="p-5 bg-[#0E1012] border-t border-white/[0.08] flex items-center justify-between">
              <div>
                <span className="text-[10.5px] uppercase tracking-[0.2em] text-[#BA9D6A] font-semibold">
                  {activeImage.category}
                </span>
                <h4 className="font-serif-title text-xl text-white mt-0.5">{activeImage.altText}</h4>
              </div>

              <Link
                href="/book-appointment"
                onClick={() => setActiveImage(null)}
                className="gold-gradient text-[#0E1012] font-bold text-xs tracking-wider uppercase px-5 py-2.5 rounded-full"
              >
                Get This Style
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <div className="border border-[#BA9D6A]/30 bg-[#141619] rounded-2xl md:rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-xl">
        <span className="text-[10.5px] uppercase tracking-[0.25em] text-[#BA9D6A] font-semibold block">
          READY FOR YOUR TRANSFORMATION?
        </span>
        <h3 className="font-serif-title text-3xl sm:text-4xl text-white">
          Experience the Nikhar Craft in Person
        </h3>
        <div className="pt-3">
          <Link
            href="/book-appointment"
            className="inline-flex items-center gap-2 gold-gradient text-[#0E1012] font-bold text-xs tracking-wider uppercase px-8 py-3.5 rounded-full shadow-lg shadow-[#BA9D6A]/20 hover:scale-105 transition"
          >
            Book Appointment Now <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}