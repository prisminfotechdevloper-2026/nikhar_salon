'use client';

import Link from 'next/link';
import { Calendar, ArrowRight, Play } from 'lucide-react';

/**
 * Grid
 *  xl (≥1280): ribbon | story | stats | graphic
 *  lg (≥1024): story | stats | graphic
 *  < lg      : stacked
 *
 * Why this version is more robust than the previous one:
 *  - Headline size is tied to the STORY COLUMN width (container query units),
 *    so "Personal." can never run into the stats column at any viewport / zoom.
 *  - The arch is built with CSS (rounded-t-full + %-based insets) instead of a
 *    fixed-ratio SVG, so it scales with the column and never overlaps the text.
 *  - All small labels are whitespace-nowrap (no more "Our / Story" wrapping).
 */
export default function AboutHero() {
  const gold = '#C9A26A';

  return (
    <section
      id="story"
      className="relative overflow-hidden bg-[#F6F3EE] px-5 pt-20 pb-10 transition-colors duration-300 sm:px-8 md:pt-24 lg:px-10 lg:pb-14 xl:px-12 dark:bg-[#121417]"
    >
      {/* Decorative arc – bottom left */}
      <svg
        className="pointer-events-none absolute -bottom-32 -left-32 hidden h-72 w-72 text-[#BA9D6A]/30 lg:block dark:text-[#BA9D6A]/15"
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="100" cy="100" r="99" stroke="currentColor" strokeWidth="0.8" />
      </svg>

      <div className="relative z-10 mx-auto grid max-w-[1360px] grid-cols-1 gap-y-8 md:grid-cols-[minmax(150px,0.45fr)_minmax(0,1fr)] md:gap-x-6 lg:grid-cols-[minmax(0,1.45fr)_150px_minmax(0,1fr)] xl:grid-cols-[28px_minmax(0,1.5fr)_minmax(150px,0.36fr)_minmax(0,1fr)] xl:gap-x-8">
        {/* ───────────── 1. Vertical ribbon (xl only) ───────────── */}
        <div className="hidden select-none flex-col items-center gap-3 self-start xl:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-[#181A1C] dark:bg-white" />
          <span className="rotate-180 font-sans text-[10px] font-medium uppercase tracking-[0.3em] text-[#181A1C] [writing-mode:vertical-rl] dark:text-white">
            About / Nikhar
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#181A1C] dark:bg-white" />
          <span className="h-28 w-px bg-[#181A1C]/70 dark:bg-white/40" />
        </div>

        {/* Horizontal tag (below xl) */}
        <div className="col-span-full flex items-center gap-2 font-sans text-[10px] font-medium uppercase tracking-[0.25em] text-[#181A1C] xl:hidden dark:text-white">
          <span className="h-1.5 w-1.5 rounded-full bg-[#181A1C] dark:bg-white" />
          About / Nikhar
        </div>

        {/* ───────────── 2. Story ───────────── */}
        {/* containerType makes `cqw` units below relative to THIS column's width */}
        <div
          className="min-w-0 space-y-6 md:col-span-2 lg:col-span-1 lg:space-y-7 lg:self-center"
          style={{ containerType: 'inline-size' }}
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-4">
            <span className="whitespace-nowrap font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-[#181A1C] dark:text-white">
              More than a salon
            </span>
            <span className="h-px w-12 bg-[#181A1C]/25 sm:w-24 dark:bg-white/25" />
          </div>

          {/* Headline – scales with the column, never overflows */}
          <h1
            className="font-serif-title leading-[1.06] tracking-[-0.01em] text-[#181A1C] dark:text-white"
            style={{ fontSize: 'clamp(1.5rem, 9.6cqw, 4.5rem)', fontWeight: 500 }}
          >
            <span className="block whitespace-nowrap">Where Grooming</span>
            <span className="block whitespace-nowrap">
              Becomes{' '}
              <span className="font-serif font-normal italic text-[#C9A26A] dark:text-[#BA9D6A]">
                Personal.
              </span>
            </span>
          </h1>

          {/* Body */}
          <p className="max-w-[430px] font-sans text-[12.5px] leading-[1.9] text-[#3D3A34] sm:text-[13px] dark:text-[#A6A29A]">
            At Nikhar Salon, we believe grooming is not just about appearance,
            it&apos;s about confidence, self-care and expressing your unique
            style. Our expert team is here to help you look and feel your best,
            every single day.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-2">
            <Link
              href="/book-appointment"
              className="inline-flex items-center gap-3 whitespace-nowrap rounded-full bg-[linear-gradient(180deg,#E0BC88,#CFA56C)] px-7 py-3.5 font-sans text-[13px] font-semibold text-[#181A1C] shadow-[0_10px_22px_-10px_rgba(186,157,106,0.8)] transition-transform hover:scale-[1.03] active:scale-95"
            >
              <Calendar size={16} strokeWidth={1.8} />
              <span>Book Appointment</span>
              <ArrowRight size={15} strokeWidth={1.8} />
            </Link>

            <Link
              href="/services"
              className="group inline-flex items-center gap-3 whitespace-nowrap font-sans text-[13px] font-medium text-[#181A1C] dark:text-white"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#181A1C] dark:border-white/70">
                <Play
                  size={11}
                  className="ml-0.5 fill-[#181A1C] text-[#181A1C] dark:fill-white dark:text-white"
                />
              </span>
              <span className="inline-flex items-center gap-2 border-b border-[#C9A26A] pb-1 transition-colors group-hover:text-[#8C734B]">
                Explore Services
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </div>

        {/* ───────────── 3. Stats ───────────── */}
        <div className="flex flex-row justify-between gap-4 border-t border-[#E3DDD2] pt-6 md:flex-col md:justify-center md:gap-0 md:pr-2 lg:self-center lg:border-l lg:border-t-0 lg:py-2 lg:pl-6 xl:pl-8 dark:border-white/[0.1]">
          <Stat value="10+" label={<>Years<br />of Experience</>} />
          <Divider />
          <Stat value="500+" label={<>Happy<br />Clients</>} />
          <Divider />
          <Stat
            value={
              <span className="inline-flex items-center gap-2">
                5.0 <span className="text-lg text-[#C9A26A]">★</span>
              </span>
            }
            label={<>Average<br />Rating</>}
          />
        </div>

        {/* ───────────── 4. Graphic + index ───────────── */}
        <div className="relative flex min-h-[360px] gap-4 border-t border-[#E3DDD2] pt-6 sm:min-h-[400px] md:border-l md:pl-6 lg:border-t-0 lg:pt-0 xl:pl-8 dark:border-white/[0.1]">
          {/* Arch – pure CSS, scales with the column, fades out at the bottom */}
          <div
            aria-hidden="true"
            className="relative w-[54%] max-w-[240px] shrink-0 select-none"
            style={{
              WebkitMaskImage: 'linear-gradient(to bottom, #000 70%, transparent 100%)',
              maskImage: 'linear-gradient(to bottom, #000 70%, transparent 100%)',
            }}
          >
            {/* outer arch */}
            <div className="absolute inset-0 rounded-t-full border border-b-0 border-[#C9A26A]/80" />

            {/* centre axis + diamond */}
            <span className="absolute left-1/2 top-0 h-[19%] w-px -translate-x-1/2 bg-[#C9A26A]" />
            <span
              className="absolute left-1/2 top-[19%] h-4 w-2.5 -translate-x-1/2 -translate-y-1/2 bg-[#C9A26A]"
              style={{ clipPath: 'polygon(50% 0, 100% 50%, 50% 100%, 0 50%)' }}
            />

            {/* inner arch */}
            <div className="absolute inset-x-[19%] bottom-0 top-[19%] rounded-t-full border border-b-0 border-[#C9A26A]/80" />

            {/* scissors (blades up, rings down) */}
            <svg
              viewBox="0 0 76 94"
              fill="none"
              className="absolute left-1/2 top-[46%] w-[24%] min-w-[40px] max-w-[64px] -translate-x-1/2 -translate-y-1/2"
              stroke={gold}
              strokeWidth="1.7"
              strokeLinecap="round"
            >
              <path d="M12 2 L46 74" />
              <path d="M64 2 L30 74" />
              <circle cx="50" cy="82" r="9" />
              <circle cx="26" cy="82" r="9" />
            </svg>
          </div>

          {/* Text column */}
          <div className="flex min-w-0 flex-1 flex-col items-end gap-7 pb-20 sm:gap-8 sm:pb-24">
            <span className="block select-none whitespace-nowrap font-sans text-[8.5px] font-medium uppercase leading-[1.8] tracking-[0.16em] text-[#7D776D] sm:tracking-[0.22em] xl:text-[9px] dark:text-[#A6A29A]">
              Premium
              <br />
              Hair &amp; Beauty
              <br />
              Studio
            </span>

            <div className="flex flex-col items-end gap-5">
              <span className="select-none font-serif-title text-5xl font-light leading-none text-[#181A1C]/25 xl:text-6xl dark:text-white/25">
                01
              </span>

              <nav aria-label="About sections" className="flex flex-col items-start gap-3 font-sans">
                <IndexLink href="#story" n="01" label="Our Story" active />
                <IndexLink href="#founder" n="02" label="Our Values" />
                <IndexLink href="#team" n="03" label="Why Us" />
              </nav>
            </div>
          </div>

          {/* Script signature – pinned bottom-right, over the faded arch */}
          <div className="pointer-events-none absolute bottom-3 right-0 select-none">
            <div className="inline-block origin-bottom-right -rotate-[12deg]">
              <span className="block whitespace-nowrap font-script text-[24px] leading-[1.05] text-[#B8925A] xl:text-[28px] dark:text-[#BA9D6A]">
                Your Style,
              </span>
              <span className="relative block whitespace-nowrap font-script text-[24px] leading-[1.05] text-[#B8925A] xl:text-[28px] dark:text-[#BA9D6A]">
                Our Expertise
                <svg
                  className="absolute -bottom-2 left-0 h-2 w-full"
                  viewBox="0 0 100 8"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path d="M2 5 Q50 8 98 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────── helpers ───────────── */

function Stat({ value, label }: { value: React.ReactNode; label: React.ReactNode }) {
  return (
    <div className="space-y-1.5 md:py-6">
      <div className="font-serif-title text-[26px] font-medium leading-none text-[#181A1C] min-[380px]:text-3xl sm:text-[34px] lg:text-[36px] dark:text-white">
        {value}
      </div>
      <div className="whitespace-nowrap font-sans text-[11px] font-normal leading-snug text-[#8A847A] dark:text-[#A6A29A]">
        {label}
      </div>
    </div>
  );
}

function Divider() {
  return <div className="hidden h-px w-full max-w-32 bg-[#E3DDD2] md:block dark:bg-white/[0.1]" />;
}

function IndexLink({
  href,
  n,
  label,
  active = false,
}: {
  href: string;
  n: string;
  label: string;
  active?: boolean;
}) {
  return (
    <a
      href={href}
      aria-current={active ? 'true' : undefined}
      className={`grid grid-cols-[1.1rem_auto] items-center gap-2.5 whitespace-nowrap text-[10.5px] tracking-wide transition-colors ${
        active
          ? 'text-[#C9A26A]'
          : 'text-[#6F6A61] hover:text-[#8C734B] dark:text-[#A6A29A] dark:hover:text-[#BA9D6A]'
      }`}
    >
      <span className="font-mono text-[9px]">{n}</span>
      <span>{label}</span>
    </a>
  );
}