'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Play, Check, Sparkles } from 'lucide-react';
import VideoTourModal from '@/components/VideoTourModal';

export default function CraftsmanshipSection() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <>
      <section className="py-5 sm:py-7 bg-[#141619] border-b border-white/[0.08] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2">
                <div className="h-3 w-[2px] bg-[#BA9D6A]" />
                <span className="text-[10.5px] font-semibold tracking-[0.25em] text-[#BA9D6A] uppercase">
                  THE CRAFTSMANSHIP
                </span>
              </div>

              <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-tight">
                More Than a Haircut. <br />
                <span className="italic text-[#BA9D6A]">A Ritual of Confidence.</span>
              </h2>

              <p className="text-xs sm:text-sm text-[#A6A29A] leading-relaxed">
                Step inside Nikhar Salon Kota, where bespoke barbering meets tranquil hospitality. Every session begins with a consultation on your facial structure, lifestyle, and hair texture to craft a signature silhouette.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs text-white/90">
                  <div className="h-5 w-5 rounded-full bg-[#BA9D6A]/20 border border-[#BA9D6A]/40 flex items-center justify-center text-[#BA9D6A]">
                    <Check size={12} />
                  </div>
                  <span>Traditional Italian hot towel & straight razor shaving</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-white/90">
                  <div className="h-5 w-5 rounded-full bg-[#BA9D6A]/20 border border-[#BA9D6A]/40 flex items-center justify-center text-[#BA9D6A]">
                    <Check size={12} />
                  </div>
                  <span>Organic botanical hair detox & scalp massage</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-white/90">
                  <div className="h-5 w-5 rounded-full bg-[#BA9D6A]/20 border border-[#BA9D6A]/40 flex items-center justify-center text-[#BA9D6A]">
                    <Check size={12} />
                  </div>
                  <span>Custom fade architecture & beard line detailing</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => setIsVideoModalOpen(true)}
                  className="inline-flex items-center gap-2.5 gold-gradient text-[#0E1012] font-bold text-xs tracking-wider uppercase px-6 py-3.5 rounded-full shadow-lg shadow-[#BA9D6A]/20 hover:scale-105 transition cursor-pointer"
                >
                  <Play size={14} fill="currentColor" /> Play Studio Tour Video
                </button>
              </div>
            </div>

            {/* Right Video / Visual Showcase Card */}
            <div className="lg:col-span-7">
              <div 
                onClick={() => setIsVideoModalOpen(true)}
                className="group relative aspect-[16/10] rounded-2xl md:rounded-3xl overflow-hidden border border-[#BA9D6A]/40 shadow-[0_20px_50px_rgba(0,0,0,0.6)] cursor-pointer"
              >
                <Image
                  src="/images/craft-experience.jpg"
                  alt="Nikhar Salon Craftsmanship"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />

                {/* Center Play Button Pulse */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative flex items-center justify-center">
                    <span className="absolute h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-[#BA9D6A]/30 animate-ping" />
                    <div className="relative h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-gradient-to-r from-[#C2A774] via-[#BA9D6A] to-[#B3935B] text-[#0E1012] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                      <Play size={22} fill="currentColor" className="ml-0.5" />
                    </div>
                  </div>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 flex items-center justify-between text-xs">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white font-medium">
                    <Sparkles size={12} className="text-[#BA9D6A]" /> The Nikhar Salon Experience
                  </span>
                  <span className="text-white/80 hidden sm:inline">Kota Studio • Rajasthan</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <VideoTourModal 
        isOpen={isVideoModalOpen} 
        onClose={() => setIsVideoModalOpen(false)} 
      />
    </>
  );
}
