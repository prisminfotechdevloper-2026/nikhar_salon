import Link from 'next/link';
import { Check } from 'lucide-react';
import { VIP_PASSES } from '@/data/home';

export default function VipMembershipsSection() {
  return (
    <section className="py-5 sm:py-7 bg-[#0E1012] border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-2">
          <div className="inline-flex items-center gap-2">
            <div className="h-3 w-[2px] bg-[#BA9D6A]" />
            <span className="text-[10.5px] font-semibold tracking-[0.25em] text-[#BA9D6A] uppercase">
              EXCLUSIVE MEMBERSHIP
            </span>
            <div className="h-3 w-[2px] bg-[#BA9D6A]" />
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-tight">
            Nikhar Gentlemen&apos;s Club
          </h2>
          <p className="text-xs sm:text-sm text-[#A6A29A]">
            Join our VIP Grooming Club for unlimited styling sessions, zero waiting queues, and bespoke care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {VIP_PASSES.map((plan, i) => (
            <div
              key={i}
              className={`relative flex flex-col justify-between rounded-2xl md:rounded-3xl p-6 sm:p-8 transition-all duration-300 ${
                plan.featured
                  ? 'bg-[#181A1C] border-2 border-[#BA9D6A] shadow-[0_16px_40px_rgba(186,157,106,0.25)] scale-[1.02]'
                  : 'bg-[#141619] border border-white/[0.08] hover:border-[#BA9D6A]/50'
              }`}
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#BA9D6A] bg-[#BA9D6A]/10 px-2.5 py-1 rounded-full border border-[#BA9D6A]/30">
                    {plan.badge}
                  </span>
                </div>

                <h3 className="font-serif-title text-2xl text-white mb-2">{plan.title}</h3>
                <div className="flex items-baseline gap-1.5 mb-6">
                  <span className="font-serif-title text-3xl sm:text-4xl text-[#BA9D6A] font-medium">
                    {plan.price}
                  </span>
                  <span className="text-xs text-[#A6A29A]">/ {plan.period}</span>
                </div>

                <div className="space-y-3 border-t border-white/[0.08] pt-6 mb-8 text-xs text-white/90">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <Check size={14} className="text-[#BA9D6A] shrink-0 mt-0.5" />
                      <span className="leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/book-appointment"
                className={`w-full text-center py-3 sm:py-3.5 rounded-xl text-xs font-bold uppercase tracking-[0.12em] transition-all ${
                  plan.featured
                    ? 'gold-gradient text-[#0E1012] shadow-md shadow-[#BA9D6A]/30 hover:brightness-105'
                    : 'border border-white/20 text-white hover:border-[#BA9D6A] hover:text-[#BA9D6A]'
                }`}
              >
                Join Membership
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
