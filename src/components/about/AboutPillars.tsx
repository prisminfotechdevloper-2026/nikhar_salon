import { Scissors, Award, ShieldCheck, Heart } from 'lucide-react';

export default function AboutPillars() {
  return (
    <section className="bg-white dark:bg-[#141619] border border-[#E5E0D8] dark:border-white/[0.08] rounded-2xl md:rounded-3xl p-8 sm:p-12 shadow-xs transition-colors duration-300">
      <div className="text-center mb-10 sm:mb-12 space-y-2">
        <div className="inline-flex items-center gap-2">
          <div className="h-3 w-[2px] bg-[#BA9D6A]" />
          <span className="text-[10.5px] uppercase tracking-[0.25em] text-[#8C734B] dark:text-[#BA9D6A] font-semibold font-sans">
            THE EXCELLENCE STANDARDS
          </span>
          <div className="h-3 w-[2px] bg-[#BA9D6A]" />
        </div>
        <h2 className="font-serif-title text-3xl sm:text-4xl text-[#181A1C] dark:text-white">Why Kota Trusts Nikhar Salon</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        <div className="bg-[#F5F2ED] dark:bg-[#181A1C] border border-[#E5E0D8] dark:border-white/[0.06] p-6 rounded-2xl space-y-3 hover:border-[#BA9D6A]/50 transition">
          <div className="size-10 rounded-xl bg-[#BA9D6A]/10 text-[#8C734B] dark:text-[#BA9D6A] flex items-center justify-center">
            <Scissors size={20} />
          </div>
          <h4 className="font-serif-title text-xl text-[#181A1C] dark:text-white">Master Artisans</h4>
          <p className="text-xs text-[#555047] dark:text-[#A6A29A] leading-relaxed">
            Stylists trained with 5 to 10+ years of dedicated men&apos;s grooming experience.
          </p>
        </div>

        <div className="bg-[#F5F2ED] dark:bg-[#181A1C] border border-[#E5E0D8] dark:border-white/[0.06] p-6 rounded-2xl space-y-3 hover:border-[#BA9D6A]/50 transition">
          <div className="size-10 rounded-xl bg-[#BA9D6A]/10 text-[#8C734B] dark:text-[#BA9D6A] flex items-center justify-center">
            <Award size={20} />
          </div>
          <h4 className="font-serif-title text-xl text-[#181A1C] dark:text-white">Premium Products</h4>
          <p className="text-xs text-[#555047] dark:text-[#A6A29A] leading-relaxed">
            We exclusively use dermatologically approved organic serums, balms, and toners.
          </p>
        </div>

        <div className="bg-[#F5F2ED] dark:bg-[#181A1C] border border-[#E5E0D8] dark:border-white/[0.06] p-6 rounded-2xl space-y-3 hover:border-[#BA9D6A]/50 transition">
          <div className="size-10 rounded-xl bg-[#BA9D6A]/10 text-[#8C734B] dark:text-[#BA9D6A] flex items-center justify-center">
            <ShieldCheck size={20} />
          </div>
          <h4 className="font-serif-title text-xl text-[#181A1C] dark:text-white">100% Sanitized</h4>
          <p className="text-xs text-[#555047] dark:text-[#A6A29A] leading-relaxed">
            Hospital-grade autoclave sterilization for every blade, scissor, and styling tool.
          </p>
        </div>

        <div className="bg-[#F5F2ED] dark:bg-[#181A1C] border border-[#E5E0D8] dark:border-white/[0.06] p-6 rounded-2xl space-y-3 hover:border-[#BA9D6A]/50 transition">
          <div className="size-10 rounded-xl bg-[#BA9D6A]/10 text-[#8C734B] dark:text-[#BA9D6A] flex items-center justify-center">
            <Heart size={20} />
          </div>
          <h4 className="font-serif-title text-xl text-[#181A1C] dark:text-white">VIP Hospitality</h4>
          <p className="text-xs text-[#555047] dark:text-[#A6A29A] leading-relaxed">
            Complimentary refreshments, personalized consultation, and zero-rush care.
          </p>
        </div>
      </div>
    </section>
  );
}
