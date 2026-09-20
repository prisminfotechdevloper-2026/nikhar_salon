import Link from 'next/link';
import WhatsAppIcon from '@/components/common/WhatsAppIcon';

export default function HomeCtaSection() {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-[#FAF8F5] to-[#F5F2ED] dark:from-[#0E1012] dark:to-[#0A0C0E] relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="rounded-2xl md:rounded-3xl border border-[#BA9D6A]/40 bg-white dark:bg-[#141619] p-8 sm:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl dark:shadow-2xl transition-colors duration-300">
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <div className="inline-flex items-center gap-2">
              <div className="h-3 w-[2px] bg-[#BA9D6A]" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C734B] dark:text-[#BA9D6A] font-semibold font-sans">
                INSTANT WHATSAPP BOOKING
              </span>
            </div>
            <h3 className="font-serif-title text-2xl sm:text-4xl text-[#181A1C] dark:text-white">
              Ready to Upgrade Your Signature Look?
            </h3>
            <p className="text-xs sm:text-sm text-[#555047] dark:text-[#A6A29A]">
              Reserve your priority slot at Nikhar Salon Kota. Open Monday to Sunday, 9:00 AM to 10:00 PM.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <Link
              href="/book-appointment"
              className="gold-gradient text-[#0E1012] text-xs font-bold uppercase tracking-[0.12em] px-7 py-3.5 rounded-full text-center shadow-md shadow-[#BA9D6A]/30 hover:scale-105 transition"
            >
              Book Online Slot
            </Link>
            <a
              href="https://wa.me/918239239249?text=Hello%20Nikhar%20Salon!%20I%20want%20to%20book%20an%20appointment."
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 border border-[#D9D4CB] dark:border-white/20 bg-[#FAF8F5] dark:bg-white/[0.05] hover:border-[#BA9D6A] text-[#181A1C] dark:text-white px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 hover:scale-105 shadow-xs"
            >
              <WhatsAppIcon size={18} variant="authentic" />
              <span className="group-hover:text-[#BA9D6A] transition-colors">WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
