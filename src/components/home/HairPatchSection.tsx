'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import {
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal,
  Columns2,
  ImageOff,
} from 'lucide-react';
import WhatsAppIcon from '@/components/common/WhatsAppIcon';
import AppointmentModal from '@/components/AppointmentModal';

/* -------------------------------------------------------------------------- */
/* DATA                                                                       */
/* -------------------------------------------------------------------------- */

interface Transformation {
  id: number;
  title: string;
  client: string;
  age: string;
  duration: string;
  specs: string;
  desc: string;
  beforeImg: string;
  afterImg: string;
  /** CSS object-position — controls which part of the photo stays in frame.
   *  Use 'center top' for head-heavy shots, 'center 20%' to show a bit more face, etc. */
  focusY: string;
  tags: string[];
}

const TRANSFORMATIONS: Transformation[] = [
  {
    id: 1,
    title: 'Executive Gentleman Pompadour',
    client: 'Client: Rohit S., Corporate Executive',
    age: 'Age: 34',
    duration: 'Procedure: 60 Mins',
    specs: 'Custom Monofilament Base • Italian Razor Fade • Shower & Gym Ready',
    desc: 'Advanced hair thinning transformed into a polished executive look with natural hairline graduation and healthy shine.',
    beforeImg: '/images/client3-head-before.jpg',
    afterImg: '/images/client3-head-after.jpg',
    focusY: 'center center',
    tags: ['Executive Polish', 'Gym & Swim Ready', 'Lifetime Styling'],
  },
  {
    id: 2,
    title: 'Modern Sleek Taper & High Density',
    client: 'Client: Vikram R., Architect',
    age: 'Age: 35',
    duration: 'Procedure: 60 Mins',
    specs: 'Custom Monofilament Base • Italian Razor Taper • Water & Gym Friendly',
    desc: 'Advanced bald patch coverage creating a sharp, handsome, commanding look ready for high-profile business meetings and daily styling.',
    beforeImg: '/images/client4-head-before.jpg',
    afterImg: '/images/client4-head-after.jpg',
    focusY: 'center center',
    tags: ['Zero Detection', 'Shower & Gym Ready', 'Lifetime Styling'],
  },
  {
    id: 3,
    title: 'Crown Baldness to Full Dense Volume',
    client: 'Real Client Transformation',
    age: 'Age: 31',
    duration: 'Procedure: 55 Mins',
    specs: '100% Natural Human Hair • Breathable Micro-Base • Undetectable Frontal Hairline',
    desc: 'Complete crown and top baldness restored with thick, natural dark brown hair styled with rich volume and blended with his natural beard.',
    beforeImg: '/images/client1-head-before.jpg',
    afterImg: '/images/client1-head-after.jpg',
    focusY: 'center center',
    tags: ['Real Client Result', '100% Invisible Base', 'Full Density Look'],
  },
  {
    id: 4,
    title: 'Receding Hairline to Sleek Textured Fade',
    client: 'Real Client Transformation',
    age: 'Age: 27',
    duration: 'Procedure: 50 Mins',
    specs: 'Ultra-Thin Skin Membrane • Side Profile Taper Blend • Waterproof Bonding',
    desc: 'Deep frontal recession and thinning transformed into a youthful, rich, high-volume modern pompadour with seamless side blending.',
    beforeImg: '/images/client2-head-before.jpg',
    afterImg: '/images/client2-head-after.jpg',
    focusY: 'center center',
    tags: ['Youthful Profile', 'Modern Spiky Fade', 'Zero Detection'],
  },
];

const FEATURES = [
  {
    title: '100% Real Human Hair',
    desc: 'Custom color, thickness & wave matching for natural movement, shine, and hair flexibility.',
  },
  {
    title: 'Undetectable Micro Base',
    desc: 'Ultra-breathable micro-skin & Swiss lace that looks just like your natural scalp skin.',
  },
  {
    title: 'Gym, Shower & Swim Ready',
    desc: 'Medical-grade hypoallergenic bonding lets you swim, workout, and wash hair with total freedom.',
  },
  {
    title: 'Instant 60-Min Results',
    desc: 'Zero surgery, zero pain, zero side effects. Walk out looking 10 years younger in one session.',
  },
];

/* -------------------------------------------------------------------------- */
/* SHARED IMAGE STYLES                                                        */
/* -------------------------------------------------------------------------- */

// Default fallback — each transformation overrides via its own focusY.
const DEFAULT_FOCUS = 'center 15%';
const IMAGE_SIZES = '(max-width: 640px) 92vw, (max-width: 1024px) 460px, 460px';

/* -------------------------------------------------------------------------- */
/* SAFE IMAGE (skeleton while loading + fallback if the file is missing)      */
/* -------------------------------------------------------------------------- */

function SafeImage({
  src,
  alt,
  focusY = DEFAULT_FOCUS,
  priority = false,
}: {
  src: string;
  alt: string;
  /** CSS object-position value, e.g. 'center 15%' */
  focusY?: string;
  priority?: boolean;
}) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  // Reset when the source changes (switching cases).
  useEffect(() => {
    setLoaded(false);
    setFailed(false);
  }, [src]);

  if (failed) {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-[#1E2124] text-white/50">
        <ImageOff size={22} />
        <span className="text-[10px] uppercase tracking-wider">Image unavailable</span>
      </div>
    );
  }

  return (
    <>
      {!loaded && <div className="absolute inset-0 animate-pulse bg-[#22262A]" />}
      <Image
        src={src}
        alt={alt}
        fill
        sizes={IMAGE_SIZES}
        priority={priority}
        draggable={false}
        unoptimized
        onLoad={() => setLoaded(true)}
        onError={() => setFailed(true)}
        className={`select-none object-cover transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ objectPosition: focusY }}
      />
    </>
  );
}

/* -------------------------------------------------------------------------- */
/* SLIDER (self-contained: pointer + touch + keyboard)                        */
/* -------------------------------------------------------------------------- */

function CompareSlider({
  beforeSrc,
  afterSrc,
  title,
  focusY = DEFAULT_FOCUS,
  priority,
}: {
  beforeSrc: string;
  afterSrc: string;
  title: string;
  focusY?: string;
  priority?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);
  const [pos, setPos] = useState(50);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.width === 0) return;
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, next)));
  }, []);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    draggingRef.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    updateFromClientX(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (draggingRef.current) updateFromClientX(e.clientX);
  };
  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    draggingRef.current = false;
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  };
  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') setPos((p) => Math.max(0, p - 5));
    if (e.key === 'ArrowRight') setPos((p) => Math.min(100, p + 5));
    if (e.key === 'Home') setPos(0);
    if (e.key === 'End') setPos(100);
  };

  return (
    <div
      ref={containerRef}
      role="slider"
      tabIndex={0}
      aria-label={`${title} before and after comparison`}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(pos)}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onKeyDown={onKeyDown}
      // touch-action: pan-y lets the page scroll vertically while dragging horizontally works.
      style={{ touchAction: 'pan-y' }}
      className="relative mx-auto aspect-square w-full max-w-[400px] cursor-ew-resize select-none overflow-hidden rounded-2xl border border-[#E5E0D8] bg-[#181A1C] shadow-lg outline-none focus-visible:ring-2 focus-visible:ring-[#BA9D6A] dark:border-white/[0.1] md:rounded-3xl"
    >
      {/* AFTER (base layer, always full) */}
      <div className="absolute inset-0">
        <SafeImage src={afterSrc} alt={`${title} after`} focusY={focusY} priority={priority} />
      </div>

      {/* BEFORE (top layer, clipped from the right) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <SafeImage src={beforeSrc} alt={`${title} before`} focusY={focusY} priority={priority} />
      </div>

      {/* Labels */}
      <span
        className={`pointer-events-none absolute left-2.5 top-2.5 rounded-full border border-white/20 bg-black/70 px-2.5 py-0.5 text-[9.5px] font-bold uppercase tracking-wider text-white backdrop-blur-md transition-opacity ${pos < 12 ? 'opacity-0' : 'opacity-100'}`}
      >
        Before
      </span>
      <span
        className={`pointer-events-none absolute right-2.5 top-2.5 rounded-full border border-[#BA9D6A]/70 bg-black/70 px-2.5 py-0.5 text-[9.5px] font-bold uppercase tracking-wider text-[#BA9D6A] backdrop-blur-md transition-opacity ${pos > 88 ? 'opacity-0' : 'opacity-100'}`}
      >
        After
      </span>

      {/* Divider + handle */}
      <div
        className="pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-white/90 shadow-[0_0_8px_rgba(0,0,0,0.5)]"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-[#BA9D6A] text-[#0E1012] shadow-lg">
          <ChevronLeft size={12} className="-mr-0.5" />
          <ChevronRight size={12} className="-ml-0.5" />
        </div>
      </div>

      <span className="pointer-events-none absolute bottom-2.5 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-3 py-1 text-[9.5px] font-medium tracking-wide text-white/80 backdrop-blur-md">
        Drag to compare
      </span>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* SIDE BY SIDE (uses the separate before/after files - no cropped combo img) */
/* -------------------------------------------------------------------------- */

function SideBySide({
  beforeSrc,
  afterSrc,
  title,
  duration,
  focusY = DEFAULT_FOCUS,
  priority,
}: {
  beforeSrc: string;
  afterSrc: string;
  title: string;
  duration: string;
  focusY?: string;
  priority?: boolean;
}) {
  return (
    <div className="mx-auto grid w-full max-w-[560px] grid-cols-2 gap-2 sm:gap-3">
      {[
        { src: beforeSrc, label: 'Before', gold: false },
        { src: afterSrc, label: 'After', gold: true },
      ].map(({ src, label, gold }) => (
        <div
          key={label}
          className="relative aspect-square overflow-hidden rounded-xl border border-[#E5E0D8] bg-[#181A1C] shadow-md dark:border-white/[0.1] sm:rounded-2xl"
        >
          <SafeImage src={src} alt={`${title} ${label.toLowerCase()}`} focusY={focusY} priority={priority} />
          <span
            className={`absolute left-2 top-2 rounded-full border bg-black/75 px-2.5 py-0.5 text-[9.5px] font-bold uppercase tracking-wider backdrop-blur-md ${
              gold ? 'border-[#BA9D6A]/70 text-[#BA9D6A]' : 'border-white/20 text-white'
            }`}
          >
            {label}
          </span>
          {gold && (
            <span className="absolute bottom-2 right-2 rounded-full border border-white/20 bg-black/80 px-2.5 py-0.5 text-[9.5px] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
              {duration}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* MAIN SECTION                                                               */
/* -------------------------------------------------------------------------- */

export default function HairPatchSection() {
  const [activeTransform, setActiveTransform] = useState(0);
  const [viewMode, setViewMode] = useState<'split' | 'side-by-side'>('split');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const current = TRANSFORMATIONS[activeTransform];
  const total = TRANSFORMATIONS.length;
  const next = TRANSFORMATIONS[(activeTransform + 1) % total];

  // Close modal on Escape + lock body scroll while open.
  useEffect(() => {
    if (!isBookingModalOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setIsBookingModalOpen(false);
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isBookingModalOpen]);

  const toggleBase =
    'inline-flex cursor-pointer items-center gap-1.5 rounded-md px-2.5 py-1 text-[11px] font-semibold transition-all';
  const toggleActive = 'bg-[#BA9D6A] text-[#0E1012] shadow-sm';
  const toggleIdle =
    'text-[#555047] hover:text-[#181A1C] dark:text-white/70 dark:hover:text-white';

  return (
    <section className="relative overflow-hidden border-b border-[#E5E0D8] bg-[#F5F2ED] py-10 transition-colors duration-300 dark:border-white/[0.08] dark:bg-[#101214] sm:py-12 lg:py-14">
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-[#BA9D6A]/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-72 w-72 rounded-full bg-[#25D366]/[0.04] blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl space-y-8 px-4 sm:space-y-10 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="mx-auto max-w-3xl space-y-2 text-center">
          <div className="inline-flex items-center gap-2">
            <div className="h-2.5 w-[2px] bg-[#BA9D6A]" />
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.22em] text-[#8C734B] dark:text-[#BA9D6A]">
              PRIMARY SALON SPECIALIZATION
            </span>
            <div className="h-2.5 w-[2px] bg-[#BA9D6A]" />
          </div>

          <h2 className="font-serif-title text-2xl font-normal leading-tight text-[#181A1C] dark:text-white sm:text-3xl lg:text-4xl">
            Non-Surgical Hair Patch &amp;{' '}
            <span className="italic text-[#8C734B] dark:text-[#BA9D6A]">Hair Replacement</span>
          </h2>

          <p className="mx-auto max-w-2xl text-xs leading-relaxed text-[#555047] dark:text-[#A6A29A] sm:text-[13px]">
            100% natural human hair systems crafted &amp; styled personally by{' '}
            <strong>Firoz Khan</strong>. Undetectable hairline, zero surgery, and 60-min instant
            transformation.
          </p>
        </div>

        {/* Showcase */}
        <div className="rounded-2xl border border-[#E5E0D8] bg-white p-4 shadow-lg transition-colors dark:border-white/[0.09] dark:bg-[#141619] dark:shadow-2xl sm:p-6 md:rounded-3xl lg:p-7">
          <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:gap-8">
            {/* LEFT: viewer */}
            <div className="min-w-0 space-y-3 lg:col-span-7">
              {/* Mode toggle */}
              <div className="mx-auto flex w-full max-w-[560px] items-center justify-between gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#7D776D] dark:text-[#A6A29A]">
                  Interactive Comparison
                </span>
                <div
                  role="tablist"
                  aria-label="Comparison view"
                  className="inline-flex rounded-lg border border-[#E5E0D8] bg-[#FAF8F5] p-0.5 dark:border-white/10 dark:bg-white/[0.05]"
                >
                  <button
                    type="button"
                    role="tab"
                    aria-selected={viewMode === 'split'}
                    onClick={() => setViewMode('split')}
                    className={`${toggleBase} ${viewMode === 'split' ? toggleActive : toggleIdle}`}
                  >
                    <SlidersHorizontal size={12} />
                    <span>Split Slider</span>
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={viewMode === 'side-by-side'}
                    onClick={() => setViewMode('side-by-side')}
                    className={`${toggleBase} ${viewMode === 'side-by-side' ? toggleActive : toggleIdle}`}
                  >
                    <Columns2 size={12} />
                    <span>Side by Side</span>
                  </button>
                </div>
              </div>

              {/* key => slider position resets when the case changes */}
              {viewMode === 'split' ? (
                <CompareSlider
                  key={current.id}
                  beforeSrc={current.beforeImg}
                  afterSrc={current.afterImg}
                  title={current.title}
                  focusY={current.focusY}
                  priority={activeTransform === 0}
                />
              ) : (
                <SideBySide
                  key={current.id}
                  beforeSrc={current.beforeImg}
                  afterSrc={current.afterImg}
                  title={current.title}
                  duration={current.duration}
                  focusY={current.focusY}
                  priority={activeTransform === 0}
                />
              )}

              {/* Warm the browser cache for the next case so switching feels instant */}
              <div className="pointer-events-none absolute h-0 w-0 overflow-hidden opacity-0" aria-hidden>
                <link rel="prefetch" href={next.beforeImg} as="image" />
                <link rel="prefetch" href={next.afterImg} as="image" />
              </div>

              {/* Case selector */}
              <div className="mx-auto flex w-full max-w-[560px] items-center justify-between gap-2 pt-1">
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {TRANSFORMATIONS.map((t, idx) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setActiveTransform(idx)}
                      aria-pressed={idx === activeTransform}
                      className={`cursor-pointer rounded-lg px-2.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider transition-all sm:px-3 ${
                        idx === activeTransform
                          ? 'bg-[#181A1C] font-bold text-white shadow-sm dark:bg-white dark:text-[#0E1012]'
                          : 'border border-[#E5E0D8] bg-[#FAF8F5] text-[#555047] hover:bg-[#EAE6DF] dark:border-white/10 dark:bg-white/[0.05] dark:text-[#A6A29A] dark:hover:bg-white/[0.1]'
                      }`}
                    >
                      Case {idx + 1}
                    </button>
                  ))}
                </div>

                <div className="flex shrink-0 items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => setActiveTransform((p) => (p - 1 + total) % total)}
                    className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-[#D9D4CB] text-[#181A1C] transition hover:border-[#BA9D6A] hover:text-[#BA9D6A] dark:border-white/20 dark:text-white"
                    aria-label="Previous transformation"
                  >
                    <ChevronLeft size={14} />
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTransform((p) => (p + 1) % total)}
                    className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-[#D9D4CB] text-[#181A1C] transition hover:border-[#BA9D6A] hover:text-[#BA9D6A] dark:border-white/20 dark:text-white"
                    aria-label="Next transformation"
                  >
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT: story */}
            <div className="space-y-3.5 text-left lg:col-span-5 lg:self-center">
              <div>
                <span className="mb-0.5 block text-[9.5px] font-bold uppercase tracking-[0.2em] text-[#8C734B] dark:text-[#BA9D6A]">
                  TRANSFORMATION #{current.id}
                </span>
                <h3 className="font-serif-title text-xl leading-snug text-[#181A1C] dark:text-white sm:text-2xl">
                  {current.title}
                </h3>
                <p className="mt-0.5 text-[11px] font-medium text-[#7D776D] dark:text-[#A6A29A]">
                  {current.client} • {current.age}
                </p>
              </div>

              <div className="space-y-1 rounded-xl border border-[#E5E0D8] bg-[#FAF8F5] p-3 text-xs dark:border-white/[0.06] dark:bg-white/[0.04]">
                <div className="text-[9.5px] font-bold uppercase tracking-wider text-[#8C734B] dark:text-[#BA9D6A]">
                  Custom Hair System Specs
                </div>
                <p className="text-[11.5px] font-medium leading-relaxed text-[#181A1C] dark:text-white/90">
                  {current.specs}
                </p>
              </div>

              <p className="text-xs leading-relaxed text-[#555047] dark:text-[#A6A29A]">
                {current.desc}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-0.5">
                {current.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 rounded-full border border-[#E5E0D8] bg-[#FAF8F5] px-2.5 py-0.5 text-[10.5px] font-semibold text-[#181A1C] dark:border-white/10 dark:bg-white/[0.05] dark:text-white"
                  >
                    <CheckCircle2 size={11} className="text-[#8C734B] dark:text-[#BA9D6A]" />
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={() => setIsBookingModalOpen(true)}
                  className="gold-gradient inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-full px-5 py-2.5 text-[11.5px] font-bold uppercase tracking-wider text-[#0E1012] shadow-md transition hover:scale-105 active:scale-95"
                >
                  <span>Book Consultation</span>
                  <ArrowRight size={13} />
                </button>

                <a
                  href={`https://wa.me/918239239249?text=${encodeURIComponent(
                    'Hello Firoz Khan ji! I want to consult regarding Hair Patch / Hair Replacement in Nikhar Salon Kota.'
                  )}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-[#D9D4CB] px-4 py-2.5 text-[11.5px] font-semibold uppercase tracking-wider text-[#181A1C] transition hover:scale-105 hover:border-[#BA9D6A] dark:border-white/20 dark:text-white"
                >
                  <WhatsAppIcon size={16} variant="authentic" />
                  <span className="transition-colors group-hover:text-[#BA9D6A]">
                    WhatsApp Firoz Khan
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Feature pillars */}
        <div className="grid grid-cols-2 gap-3.5 sm:gap-4 lg:grid-cols-4">
          {FEATURES.map(({ title, desc }) => (
            <div
              key={title}
              className="space-y-1.5 rounded-xl border border-[#E5E0D8] bg-white p-3.5 text-left shadow-sm transition-all duration-300 hover:border-[#BA9D6A]/50 dark:border-white/[0.08] dark:bg-[#141619] sm:rounded-2xl sm:p-4"
            >
              <h4 className="font-serif-title text-sm leading-snug text-[#181A1C] dark:text-white sm:text-base">
                {title}
              </h4>
              <p className="text-[10.5px] leading-relaxed text-[#555047] dark:text-[#A6A29A] sm:text-[11px]">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Booking modal */}
      {isBookingModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={(e) => e.target === e.currentTarget && setIsBookingModalOpen(false)}
          className="animate-in fade-in fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/85 p-4 backdrop-blur-xl sm:p-6"
        >
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