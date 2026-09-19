import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import GalleryGrid from '@/components/gallery/GalleryGrid';

export default function GalleryPage() {
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

      {/* Interactive Gallery Lookbook Grid & Lightbox */}
      <GalleryGrid />

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