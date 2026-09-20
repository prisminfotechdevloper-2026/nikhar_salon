'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Sparkles, ShieldCheck, Waves, Zap, ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, SlidersHorizontal, Columns2 } from 'lucide-react';
import WhatsAppIcon from '@/components/common/WhatsAppIcon';
import AppointmentModal from '@/components/AppointmentModal';
import BeforeAfterSlider from '@/components/common/BeforeAfterSlider';

const TRANSFORMATIONS = [
  {
    id: 1,
    title: "Crown Baldness to Full Dense Volume",
    client: "Real Client Transformation",
    age: "Age: 31",
    duration: "Procedure: 55 Mins",
    specs: "100% Natural Human Hair • Breathable Micro-Base • Undetectable Frontal Hairline",
    desc: "Complete crown and top baldness restored with thick, natural dark brown hair styled with rich volume and blended with his natural beard.",
    beforeImg: "/images/client1-before.jpg",
    afterImg: "/images/client1-after.jpg",
    sideBySideImg: "/images/real-hair-patch-before-after-1.jpg",
    tags: ["Real Client Result", "100% Invisible Base", "Full Density Look"],
  },
  {
    id: 2,
    title: "Receding Hairline to Sleek Textured Fade",
    client: "Real Client Transformation",
    age: "Age: 27",
    duration: "Procedure: 50 Mins",
    specs: "Ultra-Thin Skin Membrane • Side Profile Taper Blend • Waterproof Bonding",
    desc: "Deep frontal recession and thinning transformed into a youthful, rich, high-volume modern pompadour with seamless side blending.",
    beforeImg: "/images/client2-before.jpg",
    afterImg: "/images/client2-after.jpg",
    sideBySideImg: "/images/real-hair-patch-before-after-2.jpg",
    tags: ["Youthful Profile", "Modern Spiky Fade", "Zero Detection"],
  },
  {
    id: 3,
    title: "Executive Gentleman Pompadour",
    client: "Client: Rohit S., Corporate Executive",
    age: "Age: 34",
    duration: "Procedure: 60 Mins",
    specs: "Custom Monofilament Base • Italian Razor Fade • Shower & Gym Ready",
    desc: "Advanced hair thinning transformed into a polished executive look with natural hairline graduation and healthy shine.",
    beforeImg: "/images/client3-before.jpg",
    afterImg: "/images/client3-after.jpg",
    sideBySideImg: "/images/hair-patch-transform-1.jpg",
    tags: ["Executive Polish", "Gym & Swim Ready", "Lifetime Styling"],
  },
  {
    id: 4,
    title: "Modern Sleek Taper & High Density",
    client: "Client: Vikram R., Architect",
    age: "Age: 35",
    duration: "Procedure: 60 Mins",
    specs: "Custom Monofilament Base • Italian Razor Taper • Water & Gym Friendly",
    desc: "Advanced bald patch coverage creating a sharp, handsome, commanding look ready for high-profile business meetings and daily styling.",
    beforeImg: "/images/client4-before.jpg",
    afterImg: "/images/client4-after.jpg",
    sideBySideImg: "/images/hair-patch-transform-3.jpg",
    tags: ["Zero Detection", "Shower & Gym Ready", "Lifetime Styling"],
  },
];

const FEATURES = [
  {
    icon: Sparkles,
    title: "100% Real Human Hair",
    desc: "Custom color, thickness & wave matching for natural movement, shine, and hair flexibility.",
  },
  {
    icon: ShieldCheck,
    title: "Undetectable Micro Base",
    desc: "Ultra-breathable micro-skin & Swiss lace that looks just like your natural scalp skin.",
  },
  {
    icon: Waves,
    title: "Gym, Shower & Swim Ready",
    desc: "Medical-grade hypoallergenic bonding lets you swim, workout, and wash hair with total freedom.",
  },
  {
    icon: Zap,
    title: "Instant 60-Min Results",
    desc: "Zero surgery, zero pain, zero side effects. Walk out looking 10 years younger in one session.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Scalp Mapping & Texture Match",
    desc: "Firoz Khan analyzes your scalp contours, hair density, texture, and natural color tone for an exact match.",
  },
  {
    step: "02",
    title: "Custom Micro-Skin Preparation",
    desc: "100% natural human hair system selected with ultra-breathable, porous micro-membrane.",
  },
  {
    step: "03",
    title: "Medical-Grade Gentle Bonding",
    desc: "Hypoallergenic, sweatproof, and waterproof bonding applied safely on the scalp.",
  },
  {
    step: "04",
    title: "Signature Styling & Fade Blend",
    desc: "Precision scissors and razor haircutting to seamlessly integrate the patch with your own natural hair.",
  },
];

export default function HairPatchSection() {
  const [activeTransform, setActiveTransform] = useState(0);
  const [viewMode, setViewMode] = useState<'split' | 'side-by-side'>('split');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const current = TRANSFORMATIONS[activeTransform];

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-[#F5F2ED] dark:bg-[#101214] border-b border-[#E5E0D8] dark:border-white/[0.08] relative overflow-hidden transition-colors duration-300">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-[#BA9D6A]/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/4 -right-32 h-96 w-96 rounded-full bg-[#25D366]/[0.04] blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 space-y-16 sm:space-y-20">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2">
            <div className="h-3 w-[2px] bg-[#BA9D6A]" />
            <span className="text-[10.5px] uppercase tracking-[0.25em] text-[#8C734B] dark:text-[#BA9D6A] font-bold font-sans">
              PRIMARY SALON SPECIALIZATION
            </span>
            <div className="h-3 w-[2px] bg-[#BA9D6A]" />
          </div>

          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-normal text-[#181A1C] dark:text-white leading-tight">
            Non-Surgical Hair Patch & <br className="hidden sm:block" />
            <span className="italic text-[#8C734B] dark:text-[#BA9D6A]">Hair Replacement in Kota</span>
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-[#555047] dark:text-[#A6A29A] leading-relaxed">
            Regain your signature look and commanding confidence. Specialized in 100% natural human hair systems crafted & styled personally by <strong>Firoz Khan</strong> with over 10 years of mastery.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 1. INTERACTIVE SPLIT-VIEW & BEFORE-AFTER SHOWCASE */}
        {/* ========================================================================= */}
        <div className="bg-white dark:bg-[#141619] border border-[#E5E0D8] dark:border-white/[0.09] rounded-2xl md:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl dark:shadow-2xl transition-colors">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Transformation Viewer (Split Slider or Side-by-Side) */}
            <div className="lg:col-span-7 space-y-4">
              {/* View Mode Toggle Switcher */}
              <div className="flex items-center justify-between gap-2 pb-1">
                <span className="text-[10.5px] uppercase font-bold tracking-wider text-[#7D776D] dark:text-[#A6A29A]">
                  Comparison Mode
                </span>
                <div className="inline-flex rounded-xl bg-[#FAF8F5] dark:bg-white/[0.05] p-1 border border-[#E5E0D8] dark:border-white/10">
                  <button
                    type="button"
                    onClick={() => setViewMode('split')}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      viewMode === 'split'
                        ? 'bg-[#BA9D6A] text-[#0E1012] shadow-xs'
                        : 'text-[#555047] dark:text-white/70 hover:text-[#181A1C] dark:hover:text-white'
                    }`}
                  >
                    <SlidersHorizontal size={13} />
                    <span>Split Slider</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewMode('side-by-side')}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      viewMode === 'side-by-side'
                        ? 'bg-[#BA9D6A] text-[#0E1012] shadow-xs'
                        : 'text-[#555047] dark:text-white/70 hover:text-[#181A1C] dark:hover:text-white'
                    }`}
                  >
                    <Columns2 size={13} />
                    <span>Side by Side</span>
                  </button>
                </div>
              </div>

              {/* View 1: Interactive Split-View Slider */}
              {viewMode === 'split' ? (
                <BeforeAfterSlider
                  beforeImage={current.beforeImg}
                  afterImage={current.afterImg}
                  beforeAlt={`${current.title} Before`}
                  afterAlt={`${current.title} After`}
                  beforeLabel="BEFORE"
                  afterLabel="AFTER (HAIR PATCH)"
                  aspectRatio="aspect-[4/3]"
                />
              ) : (
                /* View 2: Side-by-Side Dual View */
                <div className="relative aspect-[4/3] w-full rounded-2xl md:rounded-3xl overflow-hidden border border-[#E5E0D8] dark:border-white/[0.1] bg-[#181A1C] shadow-lg group">
                  <Image
                    src={current.sideBySideImg}
                    alt={current.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
                    priority
                  />
                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md border border-[#BA9D6A]/70 text-[#BA9D6A] px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-md">
                    ★ Real Client Result
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/85 backdrop-blur-md border border-white/20 text-white px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wider">
                    {current.duration}
                  </div>
                </div>
              )}

              {/* Slider Thumbnails / Selectors */}
              <div className="flex items-center justify-between gap-2 pt-2">
                <div className="flex gap-2 sm:gap-2.5 flex-wrap">
                  {TRANSFORMATIONS.map((t, idx) => (
                    <button
                      key={t.id}
                      onClick={() => setActiveTransform(idx)}
                      className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                        idx === activeTransform
                          ? 'bg-[#181A1C] dark:bg-white text-white dark:text-[#0E1012] shadow-md scale-102 font-bold'
                          : 'bg-[#FAF8F5] dark:bg-white/[0.05] text-[#555047] dark:text-[#A6A29A] hover:bg-[#EAE6DF] dark:hover:bg-white/[0.1] border border-[#E5E0D8] dark:border-white/10'
                      }`}
                    >
                      Case {idx + 1}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    onClick={() => setActiveTransform((prev) => (prev - 1 + TRANSFORMATIONS.length) % TRANSFORMATIONS.length)}
                    className="h-8 w-8 rounded-full border border-[#D9D4CB] dark:border-white/20 flex items-center justify-center text-[#181A1C] dark:text-white hover:border-[#BA9D6A] hover:text-[#BA9D6A] transition cursor-pointer"
                    aria-label="Previous Transformation"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={() => setActiveTransform((prev) => (prev + 1) % TRANSFORMATIONS.length)}
                    className="h-8 w-8 rounded-full border border-[#D9D4CB] dark:border-white/20 flex items-center justify-center text-[#181A1C] dark:text-white hover:border-[#BA9D6A] hover:text-[#BA9D6A] transition cursor-pointer"
                    aria-label="Next Transformation"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Transformation Story & Specs */}
            <div className="lg:col-span-5 space-y-5 text-left">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#8C734B] dark:text-[#BA9D6A] block mb-1">
                  TRANSFORMATION CASE #{current.id}
                </span>
                <h3 className="font-serif-title text-2xl sm:text-3xl text-[#181A1C] dark:text-white leading-tight">
                  {current.title}
                </h3>
                <p className="text-xs text-[#7D776D] dark:text-[#A6A29A] mt-1 font-medium">
                  {current.client} • {current.age}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#FAF8F5] dark:bg-white/[0.04] border border-[#E5E0D8] dark:border-white/[0.06] text-xs space-y-1.5">
                <div className="text-[10.5px] uppercase tracking-wider font-bold text-[#8C734B] dark:text-[#BA9D6A]">
                  Custom Hair System Specs
                </div>
                <p className="text-[#181A1C] dark:text-white/90 font-medium leading-relaxed">
                  {current.specs}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#555047] dark:text-[#A6A29A] leading-relaxed">
                {current.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                {current.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF8F5] dark:bg-white/[0.05] border border-[#E5E0D8] dark:border-white/10 text-[11px] font-semibold text-[#181A1C] dark:text-white"
                  >
                    <CheckCircle2 size={12} className="text-[#8C734B] dark:text-[#BA9D6A]" /> {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setIsBookingModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 gold-gradient text-[#0E1012] font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full shadow-md shadow-[#BA9D6A]/20 hover:scale-105 active:scale-95 transition cursor-pointer"
                >
                  <span>Book Consultation</span>
                  <ArrowRight size={14} />
                </button>

                <a
                  href={`https://wa.me/918239239249?text=${encodeURIComponent('Hello Firoz Khan ji! I want to consult regarding Hair Patch / Hair Replacement in Nikhar Salon Kota.')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center justify-center gap-2.5 border border-[#D9D4CB] dark:border-white/20 hover:border-[#BA9D6A] text-[#181A1C] dark:text-white px-5 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider transition hover:scale-105 shadow-xs"
                >
                  <WhatsAppIcon size={18} variant="authentic" />
                  <span className="group-hover:text-[#BA9D6A] transition-colors">WhatsApp Firoz Khan</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. THE 60-MINUTE CRAFTSMANSHIP & INSTALLATION SPOTLIGHT */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white dark:bg-[#141619] border border-[#E5E0D8] dark:border-white/[0.09] rounded-2xl md:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg">
          {/* Installation Image */}
          <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#E5E0D8] dark:border-white/[0.1] shadow-md group">
            <Image
              src="/images/real-hair-patch-installation.jpg"
              alt="Hair Patch Installation by Specialist"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-5">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#BA9D6A] font-bold">
                  PRECISION TECHNIQUE
                </span>
                <p className="text-white text-sm font-serif-title">
                  Micro-Skin System Application on Scalp
                </p>
              </div>
            </div>
          </div>

          {/* 4-Step Process */}
          <div className="lg:col-span-7 space-y-4 text-left">
            <div className="inline-flex items-center gap-2">
              <div className="h-3 w-[2px] bg-[#BA9D6A]" />
              <span className="text-[10.5px] uppercase tracking-[0.2em] text-[#8C734B] dark:text-[#BA9D6A] font-bold font-sans">
                HOW IT WORKS
              </span>
            </div>
            <h3 className="font-serif-title text-2xl sm:text-3xl text-[#181A1C] dark:text-white">
              The 60-Minute Transformation Process
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {PROCESS_STEPS.map((step, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#FAF8F5] dark:bg-white/[0.03] border border-[#E5E0D8] dark:border-white/[0.06] space-y-1.5"
                >
                  <div className="flex items-center gap-2 text-[#8C734B] dark:text-[#BA9D6A] font-serif-title font-bold text-base">
                    <span>{step.step}.</span>
                    <span className="text-xs font-sans text-[#181A1C] dark:text-white font-semibold">{step.title}</span>
                  </div>
                  <p className="text-[11.5px] text-[#555047] dark:text-[#A6A29A] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. FOUR PILLARS OF HAIR PATCH EXCELLENCE */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl md:rounded-3xl bg-white dark:bg-[#141619] border border-[#E5E0D8] dark:border-white/[0.08] hover:border-[#BA9D6A]/50 transition-all duration-300 shadow-xs hover:shadow-md space-y-3 text-left"
              >
                <div className="h-11 w-11 rounded-xl bg-[#BA9D6A]/10 border border-[#BA9D6A]/30 text-[#8C734B] dark:text-[#BA9D6A] flex items-center justify-center">
                  <Icon size={20} />
                </div>
                <h4 className="font-serif-title text-lg text-[#181A1C] dark:text-white">
                  {feat.title}
                </h4>
                <p className="text-xs text-[#555047] dark:text-[#A6A29A] leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Booking Modal */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in">
          <div className="relative w-full max-w-2xl">
            <AppointmentModal
              defaultService="Non-Surgical Hair Patch System"
              onClose={() => setIsBookingModalOpen(false)}
            />
          </div>
        </div>
      )}
    </section>
  );
}
