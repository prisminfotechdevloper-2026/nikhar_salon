import Image from 'next/image';
import {
  Phone,
  MapPin,
  BadgeCheck,
  ArrowRight,
  ExternalLink,
  Award,
  Crown,
  HeartHandshake,
  Scissors,
} from 'lucide-react';
import Link from 'next/link';
import WhatsAppIcon from '@/components/common/WhatsAppIcon';

/* -------------------------------------------------------------------------- */
/* SOCIAL ICONS                                                               */
/* -------------------------------------------------------------------------- */

function InstagramIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function YouTubeIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* MAIN COMPONENT                                                             */
/* -------------------------------------------------------------------------- */

export default function OwnerProfileSection() {
  return (
    <>
      <section id="founder" className="relative overflow-hidden rounded-3xl border border-[#E5E0D8] bg-white p-6 transition-colors duration-300 dark:border-white/[0.08] dark:bg-[#121417] sm:p-4 lg:px-10 lg:py-2 shadow-sm dark:shadow-2xl">
        {/* Subtle Ambient Gold Glow */}
        <div className="pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-[#BA9D6A]/[0.08] blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-1/4 h-72 w-72 rounded-full bg-[#BA9D6A]/[0.05] blur-3xl" />

        <div className="relative z-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10 items-start">
          {/* ========================================================================= */}
          {/* LEFT COLUMN: Large Portrait Photo + Monogram + Personal Quote             */}
          {/* ========================================================================= */}
          <div className="lg:col-span-5 space-y-4">
            {/* Portrait Card */}
            <div className="group relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] w-full overflow-hidden rounded-2xl border border-[#E5E0D8] bg-[#181A1C] shadow-lg dark:border-white/10 md:rounded-3xl">
              <Image
                src="/images/owner/firoz-khan-clean.png"
                alt="Firoz Khan - Owner & Founder of Nikhar Unisex Saloon Kota"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Top Subtle Luxury Signature / Watermark */}
              <div className="absolute top-4 left-4 sm:top-5 sm:left-5">
                <span className="font-serif-title text-xl sm:text-2xl italic font-normal tracking-wide text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                  Firoz Khan
                </span>
              </div>

              {/* Bottom Anchored Identity Pill (Matching Reference) */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 rounded-2xl border border-white/20 bg-black/85 p-3.5 sm:p-4 text-white backdrop-blur-xl shadow-2xl">
                <div className="flex items-center justify-between gap-3">
                  <div className="space-y-0.5 min-w-0">
                    <span className="block text-[9.5px] font-bold uppercase tracking-[0.2em] text-[#BA9D6A]">
                      FOUNDER & MASTER STYLIST
                    </span>
                    <h3 className="font-serif-title text-sm sm:text-base font-medium text-white truncate">
                      Nikhar Unisex Saloon Kota
                    </h3>
                    <p className="text-[10.5px] sm:text-[11px] text-white/70 truncate">
                      Specialist in Non-Surgical Hair Systems &amp; Luxury Barbering
                    </p>
                  </div>

                  {/* Monogram Emblem Seal */}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#BA9D6A]/60 bg-gradient-to-br from-[#1E2124] to-[#0E1012] shadow-inner">
                    <span className="font-serif-title text-base font-bold text-[#BA9D6A] tracking-tighter">
                      FK
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Quote Card (Matching Reference) */}
            <div className="rounded-2xl border border-[#E5E0D8] bg-[#FAF8F5] p-4 text-left dark:border-white/[0.08] dark:bg-[#17191C] sm:p-5 space-y-2 shadow-2xs">
              <span className="font-serif text-3xl font-bold text-[#BA9D6A] leading-none block">
                “
              </span>
              <p className="font-serif italic text-xs sm:text-[13px] leading-relaxed text-[#181A1C] dark:text-white/90">
                I believe true grooming is not just about changing a hairstyle — it is about restoring a person&apos;s inner confidence. Every hair patch and styling session at Nikhar Salon is personal, precise, and completely undetectable.
              </p>
              <div className="flex items-center justify-between pt-2 border-t border-[#E5E0D8] dark:border-white/[0.08] text-[10.5px]">
                <span className="font-bold tracking-wider text-[#181A1C] uppercase dark:text-white">
                  FIROZ KHAN
                </span>
                <span className="text-[#8C734B] dark:text-[#BA9D6A] font-semibold">
                  12+ Years Mastery
                </span>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: Bio, Philosophy Callout, Pillars, Contacts & CTAs           */}
          {/* ========================================================================= */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-4.5 text-left">
            {/* Header Identity Row */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-[#E5E0D8] pb-4 dark:border-white/[0.08]">
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-2">
                  <div className="h-2.5 w-[2px] bg-[#BA9D6A]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#8C734B] dark:text-[#BA9D6A] font-sans">
                    NIKHAR UNISEX SALOON • FOUNDER &amp; VISIONARY
                  </span>
                </div>
                <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-[42px] font-normal leading-tight text-[#181A1C] dark:text-white">
                  Firoz Khan
                </h2>
                <p className="text-xs sm:text-[13px] font-medium text-[#8C734B] dark:text-[#BA9D6A]">
                  Founder, Master Barber &amp; Non-Surgical Hair Replacement Specialist
                </p>
              </div>

              {/* Slogan */}
              <div className="text-left sm:text-right shrink-0 pt-1">
                <span className="font-serif text-xs sm:text-sm text-[#7D776D] dark:text-[#A6A29A] block">
                  More than a Haircut.
                </span>
                <span className="font-serif italic text-sm sm:text-base text-[#8C734B] dark:text-[#BA9D6A] font-medium">
                  Lasting Confidence.
                </span>
              </div>
            </div>

            {/* Narrative Paragraph */}
            <p className="text-xs sm:text-[13.5px] leading-relaxed text-[#555047] dark:text-[#A6A29A]">
              I am Firoz Khan, founder and lead hair artisan at <strong>Nikhar Unisex Saloon Kota</strong>. With over a decade of dedicated craftsmanship in modern hair architecture, Italian razor fade blending, and advanced non-surgical hair replacement systems, I operate with a deep personal commitment to precision, transparency, and individual hospitality.
            </p>

            {/* Feature Callout Box (Matching Reference "We are not a traditional agency") */}
            <div className="rounded-2xl border border-[#BA9D6A]/30 bg-[#FAF8F5] p-4 text-left dark:border-[#BA9D6A]/20 dark:bg-white/[0.03] sm:p-4.5">
              <div className="flex items-start gap-3.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#BA9D6A]/15 text-[#8C734B] dark:text-[#BA9D6A]">
                  <Scissors size={18} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif-title text-sm sm:text-base font-semibold text-[#181A1C] dark:text-white">
                    We are not a high-volume assembly line salon
                  </h4>
                  <p className="text-xs leading-relaxed text-[#555047] dark:text-[#A6A29A]">
                    We work with dedicated 1-on-1 attention, devoting the necessary time, private scalp contour analysis, and care to each individual client. We have deep specialization in custom monofilament hair patch systems, breathable lace membranes, and razor fade integration that looks 100% natural and undetectable in everyday life.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-[13px] leading-relaxed text-[#555047] dark:text-[#A6A29A]">
              Our flagship studio in Vigyan Nagar, Kota welcomes guests from across Rajasthan seeking authentic hair restoration and bespoke executive grooming, ensuring you receive honest, technically grounded, and completely confidential guidance at every stage.
            </p>

            {/* 4 Core Micro-Pillars (Matching Reference 4 Columns) */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-3.5">
              <div className="rounded-xl border border-[#E5E0D8] bg-[#FAF8F5] p-3 text-center dark:border-white/[0.08] dark:bg-[#17191C] space-y-1">
                <Crown size={15} className="mx-auto text-[#8C734B] dark:text-[#BA9D6A]" />
                <h5 className="text-[11px] font-bold text-[#181A1C] dark:text-white">Personalized Service</h5>
                <p className="text-[9.5px] text-[#7D776D] dark:text-[#A6A29A]">1-on-1 Private Chair</p>
              </div>

              <div className="rounded-xl border border-[#E5E0D8] bg-[#FAF8F5] p-3 text-center dark:border-white/[0.08] dark:bg-[#17191C] space-y-1">
                <Award size={15} className="mx-auto text-[#8C734B] dark:text-[#BA9D6A]" />
                <h5 className="text-[11px] font-bold text-[#181A1C] dark:text-white">12+ Years Mastery</h5>
                <p className="text-[9.5px] text-[#7D776D] dark:text-[#A6A29A]">Kota Studio Heritage</p>
              </div>

              <div className="rounded-xl border border-[#E5E0D8] bg-[#FAF8F5] p-3 text-center dark:border-white/[0.08] dark:bg-[#17191C] space-y-1">
                <BadgeCheck size={16} className="mx-auto text-[#8C734B] dark:text-[#BA9D6A]" />
                <h5 className="text-[11px] font-bold text-[#181A1C] dark:text-white">100% Real Hair</h5>
                <p className="text-[9.5px] text-[#7D776D] dark:text-[#A6A29A]">Undetectable Base</p>
              </div>

              <div className="rounded-xl border border-[#E5E0D8] bg-[#FAF8F5] p-3 text-center dark:border-white/[0.08] dark:bg-[#17191C] space-y-1">
                <HeartHandshake size={15} className="mx-auto text-[#8C734B] dark:text-[#BA9D6A]" />
                <h5 className="text-[11px] font-bold text-[#181A1C] dark:text-white">Trust &amp; Privacy</h5>
                <p className="text-[9.5px] text-[#7D776D] dark:text-[#A6A29A]">Discreet Consultation</p>
              </div>
            </div>

            {/* 2x2 Contact / Social Cards Grid (Matching Reference Exactly) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Card 1: Direct Calling Phone */}
              <a
                href="tel:+919784711323"
                className="group flex items-center gap-3 rounded-2xl border border-[#E5E0D8] bg-[#FAF8F5] p-3 transition hover:border-[#BA9D6A] dark:border-white/[0.08] dark:bg-[#17191C] dark:hover:border-[#BA9D6A]"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-[#8C734B] shadow-xs dark:bg-white/[0.06] dark:text-[#BA9D6A] group-hover:bg-[#BA9D6A] group-hover:text-[#0E1012] transition-colors">
                  <Phone size={15} />
                </div>
                <div className="min-w-0">
                  <span className="block text-xs font-bold text-[#181A1C] dark:text-white group-hover:text-[#8C734B] dark:group-hover:text-[#BA9D6A] transition-colors">
                    +91 97847 11323
                  </span>
                  <span className="text-[10px] text-[#7D776D] dark:text-[#A6A29A]">
                    Direct Mobile Call
                  </span>
                </div>
              </a>

              {/* Card 2: Instant WhatsApp */}
              <a
                href={`https://wa.me/919784711323?text=${encodeURIComponent(
                  'Hello Firoz Khan ji! I want to book a personal consultation for Hair Patch / Salon Services at Nikhar Salon Kota.'
                )}`}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex items-center gap-3 rounded-2xl border border-[#E5E0D8] bg-[#FAF8F5] p-3 transition hover:border-[#BA9D6A] dark:border-white/[0.08] dark:bg-[#17191C] dark:hover:border-[#BA9D6A]"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-[#25D366] shadow-xs dark:bg-white/[0.06] transition-transform group-hover:scale-105">
                  <WhatsAppIcon size={17} variant="authentic" />
                </div>
                <div className="min-w-0">
                  <span className="block text-xs font-bold text-[#181A1C] dark:text-white group-hover:text-[#8C734B] dark:group-hover:text-[#BA9D6A] transition-colors">
                    +91 97847 11323
                  </span>
                  <span className="text-[10px] text-[#7D776D] dark:text-[#A6A29A]">
                    Instant WhatsApp Chat
                  </span>
                </div>
              </a>

              {/* Card 3: Address */}
              <div className="flex items-center gap-3 rounded-2xl border border-[#E5E0D8] bg-[#FAF8F5] p-3 dark:border-white/[0.08] dark:bg-[#17191C]">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-[#8C734B] shadow-xs dark:bg-white/[0.06] dark:text-[#BA9D6A]">
                  <MapPin size={15} />
                </div>
                <div className="min-w-0">
                  <span className="block text-xs font-bold text-[#181A1C] dark:text-white truncate">
                    Vigyan Nagar, Kota, Rajasthan
                  </span>
                  <span className="text-[10px] text-[#7D776D] dark:text-[#A6A29A] truncate block">
                    Shop No. 9, Old Police Station Ke Samne
                  </span>
                </div>
              </div>

              {/* Card 4: Instagram & YouTube Social Channels */}
              <div className="flex items-center justify-between rounded-2xl border border-[#E5E0D8] bg-[#FAF8F5] p-3 dark:border-white/[0.08] dark:bg-[#17191C]">
                <div className="flex items-center gap-2">
                  <a
                    href="https://www.instagram.com/nikhar__mens_parlour?stkn=Z3FmZmwyaG9tb3do&utm_source=qr"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-[#E4405F] shadow-xs dark:bg-white/[0.06] hover:scale-110 transition-transform"
                    title="Follow on Instagram"
                  >
                    <InstagramIcon className="h-4.5 w-4.5" />
                  </a>

                  <a
                    href="https://youtube.com/@nikharunisexsaloonkota?si=33SamjrNAJU1Vyg2"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-red-600 shadow-xs dark:bg-white/[0.06] hover:scale-110 transition-transform"
                    title="Subscribe on YouTube"
                  >
                    <YouTubeIcon className="h-4.5 w-4.5" />
                  </a>
                </div>

                <div className="text-right min-w-0">
                  <span className="block text-xs font-bold text-[#181A1C] dark:text-white truncate">
                    Official Socials
                  </span>
                  <span className="text-[10px] text-[#7D776D] dark:text-[#A6A29A] block truncate">
                    @nikhar__mens_parlour
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Action CTAs - Guaranteed Single Row on Desktop */}
            <div className="pt-1 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-3.5 sm:flex-nowrap">
              <Link
                href={`/book-appointment?stylist=${encodeURIComponent('Firoz Khan (Owner)')}&service=${encodeURIComponent('Non-Surgical Hair Patch System')}`}
                className="gold-gradient inline-flex items-center justify-center gap-2 rounded-full px-5 sm:px-6 py-2.5 sm:py-3 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#0E1012] shadow-md transition hover:scale-[1.02] active:scale-95 cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>
                  Book Consultation <span className="inline lg:hidden xl:inline">with Firoz Khan</span>
                </span>
                <ArrowRight size={14} className="shrink-0" />
              </Link>

              <a
                href="https://youtube.com/@nikharunisexsaloonkota?si=33SamjrNAJU1Vyg2"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D9D4CB] px-4 sm:px-5 py-2.5 sm:py-3 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#181A1C] transition hover:border-[#BA9D6A] hover:text-[#8C734B] dark:border-white/20 dark:text-white dark:hover:text-[#BA9D6A] whitespace-nowrap shrink-0"
              >
                <YouTubeIcon className="h-4 w-4 text-red-500 shrink-0" />
                <span>Watch on YouTube</span>
                <ExternalLink size={13} className="shrink-0" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
