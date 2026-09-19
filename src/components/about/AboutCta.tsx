import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function AboutCta() {
  return (
    <section className="border border-[#BA9D6A]/30 bg-gradient-to-r from-[#141619] via-[#181A1C] to-[#141619] rounded-2xl md:rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-xl">
      <span className="text-[10.5px] uppercase tracking-[0.25em] text-[#BA9D6A] font-semibold block">
        EXPERIENCE THE DIFFERENCE
      </span>
      <h3 className="font-serif-title text-3xl sm:text-4xl text-white">
        Book Your Appointment at Nikhar Salon Kota
      </h3>
      <p className="text-xs sm:text-sm text-[#A6A29A] max-w-lg mx-auto">
        Shop No. 12, 1st Floor, City Mall, Kota, Rajasthan. Open all 7 days from 9:00 AM to 10:00 PM.
      </p>
      <div className="pt-3">
        <Link
          href="/book-appointment"
          className="inline-flex items-center gap-2 gold-gradient text-[#0E1012] font-bold text-xs tracking-wider uppercase px-8 py-3.5 rounded-full shadow-lg shadow-[#BA9D6A]/20 hover:scale-105 transition"
        >
          Reserve Your Experience <ArrowRight size={15} />
        </Link>
      </div>
    </section>
  );
}
