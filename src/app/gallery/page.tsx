import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { galleryData } from '@/data/gallery';

export default function GalleryPage() {
  return (
    <div className="min-h-screen py-16 px-6 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-gold font-semibold mb-2">OUR GALLERY</p>
        <h1 className="text-4xl md:text-5xl font-serif-luxury font-bold text-white">
          Moments of Style & Confidence
        </h1>
        <p className="text-zinc-400 text-sm mt-3 max-w-lg mx-auto">
          A glimpse into our world — where grooming meets confidence. Explore real customer cuts, beard stylings, and salon interior.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {galleryData.map((item) => (
          <div
            key={item.id}
            className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-xl"
          >
            <Image
              src={item.imgUrl}
              alt={item.altText}
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-5">
              <span className="text-[10px] tracking-[0.25em] text-gold font-semibold uppercase">
                {item.category}
              </span>
              <p className="text-white text-sm font-medium mt-0.5">{item.altText}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="bg-[#121214] border border-zinc-800 rounded-2xl p-10 text-center space-y-4">
        <p className="font-script text-3xl md:text-4xl text-gold">Because You Deserve The Best</p>
        <h3 className="text-2xl font-serif-luxury font-bold text-white">Ready to Get Your Own Look?</h3>
        <div className="pt-2">
          <Link
            href="/book-appointment"
            className="inline-flex items-center gap-2 gold-gradient text-black font-semibold text-xs tracking-wider uppercase px-7 py-3.5 rounded-full shadow-lg shadow-gold/20 hover:scale-105 transition"
          >
            Book Appointment Now <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}