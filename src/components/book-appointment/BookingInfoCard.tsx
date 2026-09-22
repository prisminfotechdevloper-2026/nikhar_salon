import Image from 'next/image';
import { Clock, MapPin, Phone, Award, CheckCircle2, Coffee } from 'lucide-react';
import WhatsAppIcon from '@/components/common/WhatsAppIcon';

export default function BookingInfoCard() {
  return (
    <div className="space-y-4">
      {/* Salon Director Profile Card (Firoz Khan) */}
      <div className="bg-white dark:bg-[#121417] border border-[#E5E0D8] dark:border-white/[0.08] rounded-2xl sm:rounded-3xl p-5 shadow-[0_10px_35px_rgba(0,0,0,0.05)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.6)] space-y-3.5 relative overflow-hidden group">
        <div className="pointer-events-none absolute -top-12 -right-12 w-28 h-28 rounded-full bg-[#BA9D6A]/10 blur-2xl group-hover:bg-[#BA9D6A]/20 transition-colors duration-300" />
        
        <div className="flex items-center gap-3.5">
          <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#BA9D6A] bg-neutral-900 shrink-0 shadow-sm">
            <Image
              src="/images/owner/firoz-khan.png"
              alt="Firoz Khan Master Salon Director"
              fill
              sizes="56px"
              className="object-cover object-top"
            />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h4 className="font-serif-title font-bold text-base text-[#181A1C] dark:text-white">Firoz Khan</h4>
              <span className="px-2 py-0.5 rounded-full bg-[#BA9D6A]/20 text-[#8C734B] dark:text-[#C2A774] text-[9.5px] font-bold">FOUNDER</span>
            </div>
            <p className="text-xs text-[#8C734B] dark:text-[#C2A774] font-medium">Hair Patch Master Specialist</p>
          </div>
        </div>

        <p className="text-xs text-[#555047] dark:text-[#A6A29A] leading-relaxed">
          Book personal consultations for non-surgical hair replacement systems, natural hairline restorations, and bespoke hair designs.
        </p>

        <div className="pt-3 border-t border-[#E5E0D8] dark:border-white/[0.06] flex items-center justify-between text-xs text-[#8C734B] dark:text-[#C2A774] font-semibold">
          <span>12+ Years Experience</span>
          <span>1,200+ Hair Systems</span>
        </div>
      </div>

      {/* Salon Commitment & VIP Perks */}
      <div className="bg-white dark:bg-[#121417] border border-[#E5E0D8] dark:border-white/[0.08] rounded-2xl sm:rounded-3xl p-5 shadow-[0_10px_35px_rgba(0,0,0,0.05)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.6)] space-y-3.5">
        <div className="flex items-center justify-between border-b border-[#E5E0D8] dark:border-white/[0.06] pb-2.5">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#8C734B] dark:text-[#C2A774] font-bold">
            WHY BOOK ONLINE
          </span>
          <span className="text-[10.5px] text-[#7D776D] dark:text-neutral-400 font-medium">VIP Protocol</span>
        </div>

        <div className="space-y-3 text-xs text-[#555047] dark:text-[#A6A29A]">
          <div className="flex items-start gap-2.5">
            <CheckCircle2 size={15} className="text-[#8C734B] dark:text-[#C2A774] shrink-0 mt-0.5" />
            <span className="text-[#181A1C] dark:text-[#FAF8F5]">
              <strong>Zero Waiting Guarantee:</strong> Your chair is reserved and prepared before you arrive.
            </span>
          </div>
          <div className="flex items-start gap-2.5">
            <Award size={15} className="text-[#8C734B] dark:text-[#C2A774] shrink-0 mt-0.5" />
            <span>
              <strong>Master Artisans Only:</strong> Experienced barbers with 5 to 12+ years expertise.
            </span>
          </div>
          <div className="flex items-start gap-2.5">
            <Coffee size={15} className="text-[#8C734B] dark:text-[#C2A774] shrink-0 mt-0.5" />
            <span>
              <strong>Complimentary Refreshment:</strong> Enjoy freshly brewed espresso or artisanal tea.
            </span>
          </div>
          <div className="flex items-start gap-2.5">
            <Clock size={15} className="text-[#8C734B] dark:text-[#C2A774] shrink-0 mt-0.5" />
            <span>
              <strong>Hours:</strong> Mon – Sun, 9:00 AM – 10:00 PM (All 7 Days Open).
            </span>
          </div>
          <div className="flex items-start gap-2.5">
            <MapPin size={15} className="text-[#8C734B] dark:text-[#C2A774] shrink-0 mt-0.5" />
            <span>
              <strong>Location:</strong> Shop No. 9, Vigyan Nagar, Kota, Rajasthan - 324005.
            </span>
          </div>
        </div>
      </div>

      {/* Emergency Concierge & Direct Contact */}
      <div className="bg-[#FAF8F5] dark:bg-[#15171B] border border-[#E5E0D8] dark:border-white/[0.08] rounded-2xl p-4 space-y-2.5">
        <p className="text-xs text-[#555047] dark:text-[#A6A29A] text-center">
          Need an urgent customized slot or instant query?
        </p>
        <div className="grid grid-cols-2 gap-2.5">
          <a
            href="tel:+919784711323"
            className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-[#D9D4CB] dark:border-white/15 bg-white dark:bg-white/[0.04] hover:border-[#BA9D6A] text-xs font-semibold text-[#181A1C] dark:text-white transition shadow-2xs active:scale-95"
          >
            <Phone size={13} className="text-[#8C734B] dark:text-[#C2A774]" /> Call Salon
          </a>
          <a
            href="https://wa.me/919784711323?text=Hello%20Nikhar%20Salon!%20I%20have%20an%20urgent%20appointment%20query."
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-xs font-semibold text-[#181A1C] dark:text-white transition active:scale-95"
          >
            <WhatsAppIcon size={14} variant="authentic" /> WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
