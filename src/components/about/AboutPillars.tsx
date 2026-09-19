import { Scissors, Sparkles, ShieldCheck, Heart } from 'lucide-react';

export default function AboutPillars() {
  return (
    <section className="bg-[#141619] border border-white/[0.08] rounded-2xl md:rounded-3xl p-8 sm:p-12">
      <div className="text-center mb-10 sm:mb-12 space-y-2">
        <div className="inline-flex items-center gap-2">
          <div className="h-3 w-[2px] bg-[#BA9D6A]" />
          <span className="text-[10.5px] uppercase tracking-[0.25em] text-[#BA9D6A] font-semibold">
            THE EXCELLENCE STANDARDS
          </span>
          <div className="h-3 w-[2px] bg-[#BA9D6A]" />
        </div>
        <h2 className="font-serif-title text-3xl sm:text-4xl text-white">Why Kota Trusts Nikhar Salon</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        <div className="bg-[#181A1C] border border-white/[0.06] p-6 rounded-2xl space-y-3 hover:border-[#BA9D6A]/40 transition">
          <div className="h-10 w-10 rounded-xl bg-[#BA9D6A]/10 text-[#BA9D6A] flex items-center justify-center">
            <Scissors size={20} />
          </div>
          <h4 className="font-serif-title text-xl text-white">Master Artisans</h4>
          <p className="text-xs text-[#A6A29A] leading-relaxed">
            Stylists trained with 5 to 10+ years of dedicated men&apos;s grooming experience.
          </p>
        </div>

        <div className="bg-[#181A1C] border border-white/[0.06] p-6 rounded-2xl space-y-3 hover:border-[#BA9D6A]/40 transition">
          <div className="h-10 w-10 rounded-xl bg-[#BA9D6A]/10 text-[#BA9D6A] flex items-center justify-center">
            <Sparkles size={20} />
          </div>
          <h4 className="font-serif-title text-xl text-white">Premium Products</h4>
          <p className="text-xs text-[#A6A29A] leading-relaxed">
            We exclusively use dermatologically approved organic serums, balms, and toners.
          </p>
        </div>

        <div className="bg-[#181A1C] border border-white/[0.06] p-6 rounded-2xl space-y-3 hover:border-[#BA9D6A]/40 transition">
          <div className="h-10 w-10 rounded-xl bg-[#BA9D6A]/10 text-[#BA9D6A] flex items-center justify-center">
            <ShieldCheck size={20} />
          </div>
          <h4 className="font-serif-title text-xl text-white">100% Sanitized</h4>
          <p className="text-xs text-[#A6A29A] leading-relaxed">
            Hospital-grade autoclave sterilization for every blade, scissor, and styling tool.
          </p>
        </div>

        <div className="bg-[#181A1C] border border-white/[0.06] p-6 rounded-2xl space-y-3 hover:border-[#BA9D6A]/40 transition">
          <div className="h-10 w-10 rounded-xl bg-[#BA9D6A]/10 text-[#BA9D6A] flex items-center justify-center">
            <Heart size={20} />
          </div>
          <h4 className="font-serif-title text-xl text-white">VIP Hospitality</h4>
          <p className="text-xs text-[#A6A29A] leading-relaxed">
            Complimentary refreshments, personalized consultation, and zero-rush care.
          </p>
        </div>
      </div>
    </section>
  );
}
