import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

export default function HomeCtaSection() {
  return (
    <section className="py-5 sm:py-7 bg-gradient-to-b from-[#0E1012] to-[#0A0C0E] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="rounded-2xl md:rounded-3xl border border-[#BA9D6A]/40 bg-[#141619] p-8 sm:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <div className="inline-flex items-center gap-2">
              <div className="h-3 w-[2px] bg-[#BA9D6A]" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#BA9D6A] font-semibold">
                INSTANT WHATSAPP BOOKING
              </span>
            </div>
            <h3 className="font-serif-title text-2xl sm:text-4xl text-white">
              Ready to Upgrade Your Signature Look?
            </h3>
            <p className="text-xs sm:text-sm text-[#A6A29A]">
              Reserve your priority slot at Nikhar Salon Kota. Open Monday to Sunday, 9:00 AM to 10:00 PM.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <Link
              href="/book-appointment"
              className="gold-gradient text-[#0E1012] text-xs font-bold uppercase tracking-[0.12em] px-7 py-3.5 rounded-full text-center shadow-lg shadow-[#BA9D6A]/30 hover:scale-105 transition"
            >
              Book Online Slot
            </Link>
            <a
              href="https://wa.me/918239239249?text=Hello%20Nikhar%20Salon!%20I%20want%20to%20book%20an%20appointment."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-[#BA9D6A]/50 bg-white/[0.05] hover:bg-[#BA9D6A]/15 text-white px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider transition"
            >
              <MessageCircle size={16} className="text-[#BA9D6A]" /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
