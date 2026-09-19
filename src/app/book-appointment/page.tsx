import AppointmentModal from '@/components/AppointmentModal';
import { Star, ShieldCheck, Clock, Sparkles, MapPin, Phone } from 'lucide-react';

export default function BookAppointmentPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto space-y-12 font-sans">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2">
          <div className="h-3 w-[2px] bg-[#BA9D6A]" />
          <span className="text-[10.5px] uppercase tracking-[0.25em] text-[#BA9D6A] font-semibold">
            RESERVATION STUDIO
          </span>
          <div className="h-3 w-[2px] bg-[#BA9D6A]" />
        </div>
        <h1 className="font-serif-title text-4xl sm:text-5xl lg:text-6xl font-normal text-white">
          Reserve Your Slot
        </h1>
        <p className="text-[#A6A29A] text-xs sm:text-sm md:text-base leading-relaxed">
          Secure your priority time with our master barbers. Instant confirmation dispatched directly to your WhatsApp.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Main Appointment Wizard Form (7 cols) */}
        <div className="lg:col-span-8">
          <AppointmentModal />
        </div>

        {/* Info & Assurance Sidebar (4 cols) */}
        <aside className="lg:col-span-4 bg-[#141619] border border-white/[0.08] rounded-2xl md:rounded-3xl p-6 sm:p-8 space-y-6 lg:sticky lg:top-28">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <Sparkles size={15} className="text-[#BA9D6A]" />
              <span className="text-[10.5px] uppercase tracking-[0.2em] text-[#BA9D6A] font-semibold">
                VIP SALON ASSURANCE
              </span>
            </div>
            <h3 className="font-serif-title text-2xl text-white">What You Can Expect</h3>
          </div>

          <div className="space-y-3.5 text-xs text-[#A6A29A]">
            <div className="flex items-start gap-3">
              <ShieldCheck size={16} className="text-[#BA9D6A] shrink-0 mt-0.5" />
              <span>Zero waiting time for confirmed online reservations.</span>
            </div>
            <div className="flex items-start gap-3">
              <Clock size={16} className="text-[#BA9D6A] shrink-0 mt-0.5" />
              <span>Timings: Mon - Sun, 9:00 AM – 10:00 PM (All 7 Days).</span>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={16} className="text-[#BA9D6A] shrink-0 mt-0.5" />
              <span>Shop No. 12, 1st Floor, City Mall, Kota, Rajasthan.</span>
            </div>
          </div>

          {/* Testimonial Quote */}
          <div className="border-t border-white/[0.08] pt-6 space-y-3">
            <div className="flex gap-1 text-[#BA9D6A]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>
            <blockquote className="text-xs sm:text-[13px] text-white/90 italic leading-relaxed font-serif-title">
              &ldquo;Nikhar Salon gave me the sharpest fade cut and beard shaping. The online booking and zero waiting was super convenient!&rdquo;
            </blockquote>
            <p className="text-[11px] text-[#BA9D6A] font-medium">— Aman Yadav, Kota Client</p>
          </div>

          {/* Emergency Direct Call Box */}
          <div className="border-t border-white/[0.08] pt-6">
            <p className="text-[11px] text-[#A6A29A] mb-2">Need an urgent slot or running late?</p>
            <a
              href="tel:+918239239249"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-white/15 bg-white/[0.05] hover:border-[#BA9D6A] text-xs font-semibold text-white uppercase tracking-wider transition"
            >
              <Phone size={13} className="text-[#BA9D6A]" /> Call Concierge: +91 82392 39249
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}