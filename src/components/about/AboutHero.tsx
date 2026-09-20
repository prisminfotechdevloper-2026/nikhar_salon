import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function AboutHero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
      <div className="lg:col-span-6 space-y-5">
        <div className="inline-flex items-center gap-2">
          <div className="h-3 w-[2px] bg-[#BA9D6A]" />
          <span className="text-[10.5px] uppercase tracking-[0.25em] text-[#8C734B] dark:text-[#BA9D6A] font-semibold font-sans">
            OUR HERITAGE & VISION
          </span>
          <div className="h-3 w-[2px] bg-[#BA9D6A]" />
        </div>

        <h1 className="font-serif-title text-4xl sm:text-5xl lg:text-6xl text-[#181A1C] dark:text-white leading-[1.1] font-normal">
          A Legacy of Refinement <br />
          <span className="italic text-[#8C734B] dark:text-[#BA9D6A]">in Kota, Rajasthan.</span>
        </h1>

        <p className="text-[#555047] dark:text-[#A6A29A] text-xs sm:text-sm md:text-base leading-relaxed">
          Nikhar Salon was founded with a clear, elevated vision: to provide discerning gentlemen in Kota a sanctuary where precision grooming meets warm, world-class hospitality.
        </p>

        <p className="text-[#555047] dark:text-[#A6A29A] text-xs sm:text-sm leading-relaxed">
          Every barber in our studio is trained in traditional scissors-over-comb techniques, Italian razor glide, and modern facial aesthetics. We don&apos;t just cut hair — we sculpt personal confidence.
        </p>

        <div className="pt-3 flex flex-wrap gap-4">
          <Link
            href="/book-appointment"
            className="inline-flex items-center gap-2 gold-gradient text-[#0E1012] font-bold text-xs tracking-wider uppercase px-7 py-3.5 rounded-full shadow-md shadow-[#BA9D6A]/20 hover:scale-105 transition"
          >
            Reserve Your Slot <ArrowRight size={15} />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 border border-[#D9D4CB] dark:border-white/20 text-[#181A1C] dark:text-white hover:border-[#BA9D6A] hover:text-[#8C734B] dark:hover:text-[#BA9D6A] px-6 py-3.5 rounded-full text-xs uppercase tracking-wider transition shadow-2xs"
          >
            Explore Services Menu
          </Link>
        </div>
      </div>

      {/* Story Visual Frame */}
      <div className="lg:col-span-6">
        <div className="relative h-80 sm:h-[420px] rounded-2xl md:rounded-3xl overflow-hidden border border-[#E5E0D8] dark:border-[#BA9D6A]/30 shadow-xl dark:shadow-2xl">
          <Image
            src="/images/salon-interior.jpg"
            alt="Nikhar Salon Kota Interior"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
          
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs">
            <span className="bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-white font-medium">
              Kota Salon Studio • Rajasthan
            </span>
            <span className="text-[#BA9D6A] font-semibold">Est. 2014</span>
          </div>
        </div>
      </div>
    </section>
  );
}
