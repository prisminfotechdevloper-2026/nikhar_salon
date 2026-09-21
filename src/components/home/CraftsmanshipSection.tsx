'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  Play,
  Maximize2,
  ExternalLink,
  CheckCircle2,
  Flame,
  ArrowRight,
  Film,
  Sparkles,
} from 'lucide-react';
import VideoTourModal from '@/components/VideoTourModal';
import AppointmentModal from '@/components/AppointmentModal';

/* -------------------------------------------------------------------------- */
/* YOUTUBE ICON COMPONENT                                                     */
/* -------------------------------------------------------------------------- */

function YouTubeIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* CURATED VIDEOS FROM @nikharunisexsaloonkota                                */
/* -------------------------------------------------------------------------- */

export interface SalonVideo {
  id: string; // YouTube Video ID
  title: string;
  category: 'Hair Patch' | 'Makeover' | 'Styling' | 'Haircut';
  tag: string;
  views: string;
  duration: string;
  desc: string;
  highlights: string[];
}

const SALON_VIDEOS: SalonVideo[] = [
  {
    id: 'cxnnPeX4eVM',
    title: 'Non-Surgical Hair Patch & Micro-Skin Attachment',
    category: 'Hair Patch',
    tag: 'Hair Patch Restoration',
    views: '1.9K Views',
    duration: '0:58',
    desc: 'Live patient hair patch transformation with 100% natural human hair integration and Italian razor edge blending by Firoz Khan.',
    highlights: ['Natural Hairline Graduation', 'Medical Hypoallergenic Bonding', 'Sweat & Shower Proof'],
  },
  {
    id: '7KUB0CyceTw',
    title: 'Crown Baldness to Full Hair Volume Restoration',
    category: 'Hair Patch',
    tag: 'Crown Baldness Coverage',
    views: '1.9K Views',
    duration: '0:55',
    desc: 'Complete crown hair restoration with invisible Swiss lace micro-base, bespoke color matching, and custom scissor texturing.',
    highlights: ['100% Invisible Micro-Skin', 'Custom Crown Swirl Match', 'Instant 60-Min Results'],
  },
  {
    id: 'hKPB96VbZdo',
    title: 'Complete Executive Look Change & Grooming Makeover',
    category: 'Makeover',
    tag: 'Signature Transformation',
    views: '2.0K Views',
    duration: '0:45',
    desc: 'A complete head-turning transformation: precision scissor architectural cut, skin fade taper, and beard alignment for an executive aesthetic.',
    highlights: ['Signature Razor Taper', 'Sculpted Beard Contouring', 'Youthful High-Density Look'],
  },
  {
    id: 'QDtxfqVnNhI',
    title: 'Signature Curly Texture Perm & Modern Taper Fade',
    category: 'Styling',
    tag: 'Curly Perm & Texture',
    views: '2.2K Views',
    duration: '0:50',
    desc: 'Trending high-volume curly perm styling with natural hair bounce, temple taper fade, and hydrating botanical hair treatment.',
    highlights: ['Long-Lasting Curl Bounce', 'Botanical Safe Perm Solution', 'Effortless Daily Styling'],
  },
  {
    id: '81HHsItiLNk',
    title: 'Italian Razor Skin Fade & Textured Top Detailing',
    category: 'Haircut',
    tag: 'Master Barber Fade',
    views: '1.7K Views',
    duration: '0:48',
    desc: 'Sharp geometric hairline alignment, millimeter-precise skin fade graduation, and matte feather-textured top styling.',
    highlights: ['Zero-Gap Razor Detailing', 'Hot Towel Finish', 'Feather Textured Top'],
  },
  {
    id: 'Ap0i8H4yFVY',
    title: 'Unisex Salon Styling & Aesthetic Layered Haircut',
    category: 'Styling',
    tag: 'Unisex Salon Craft',
    views: '1.5K Views',
    duration: '0:52',
    desc: 'Flowing natural layers with movement, face-framing graduation, and rich healthy gloss crafted for premium salon clients in Kota.',
    highlights: ['Feathered Layering', 'Custom Face Contouring', 'High-Gloss Blowout'],
  },
];

const CATEGORIES = [
  'All Videos',
  'Hair Patch',
  'Makeover',
  'Styling',
  'Haircut',
] as const;

export default function CraftsmanshipSection() {
  const [activeVideoId, setActiveVideoId] = useState(SALON_VIDEOS[0].id);
  const [selectedCategory, setSelectedCategory] = useState<string>('All Videos');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const activeVideo = SALON_VIDEOS.find((v) => v.id === activeVideoId) || SALON_VIDEOS[0];

  const filteredVideos = selectedCategory === 'All Videos'
    ? SALON_VIDEOS
    : SALON_VIDEOS.filter((v) => v.category === selectedCategory);

  const handleSelectVideo = (id: string) => {
    setActiveVideoId(id);
    setIsPlaying(true); // Automatically begin playing selected video
  };

  return (
    <>
      <section className="relative overflow-hidden border-b border-[#E5E0D8] bg-[#F5F2ED] py-5 transition-colors duration-300 dark:border-white/[0.08] dark:bg-[#101214] sm:py-6 lg:py-7">
        {/* Subtle Ambient Glow */}
        <div className="pointer-events-none absolute -left-40 top-1/3 h-80 w-80 rounded-full bg-[#BA9D6A]/[0.08] blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-1/3 h-80 w-80 rounded-full bg-[#FF0000]/[0.04] blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 space-y-8 sm:space-y-10">
          {/* ========================================================================= */}
          {/* 1. LUXURY EDITORIAL HEADER (Cinematic Studio Theme)                       */}
          {/* ========================================================================= */}
          <div className="space-y-6">
            {/* Top Broadcast Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E5E0D8] pb-3.5 dark:border-white/[0.08]">
              <div className="flex items-center gap-2.5">
                 <span className="font-mono text-[10.5px] font-semibold tracking-[0.25em] text-[#8C734B] uppercase dark:text-[#BA9D6A]">
                  REC ● NIKHAR STUDIO REEL ARCHIVE
                </span>
                <span className="hidden sm:inline text-black/20 dark:text-white/20">•</span>
                <span className="hidden sm:inline font-mono text-[10px] text-[#7D776D] dark:text-[#A6A29A]">
                  KOTA SALON FLOOR • 4K DOCUMENTARY
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E5E0D8] bg-white/80 px-2.5 py-0.5 text-[10px] font-medium text-[#555047] backdrop-blur-xs dark:border-white/10 dark:bg-white/[0.04] dark:text-[#A6A29A]">
                  <YouTubeIcon className="h-3 w-3 text-red-500" />
                  <span>@nikharunisexsaloonkota</span>
                </span>
              </div>
            </div>

            {/* Main Editorial 2-Column Split */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-10 items-end">
              {/* Left Column: Title & Specialization */}
              <div className="lg:col-span-7 space-y-2.5 text-left">
                <div className="inline-flex items-center gap-2">
                  <div className="h-2.5 w-[2px] bg-[#BA9D6A]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#8C734B] dark:text-[#BA9D6A] font-sans">
                    CHAPTER 05 • CINEMATIC EXPERIENCE
                  </span>
                </div>

                <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-[42px] font-normal leading-[1.15] text-[#181A1C] dark:text-white">
                  Real Transformations &amp; Master Styling{' '}
                  <span className="italic font-serif text-[#8C734B] dark:text-[#BA9D6A]">
                    In Motion
                  </span>
                </h2>
              </div>

              {/* Right Column: Lead Description & Trust Pills */}
              <div className="lg:col-span-5 space-y-3 text-left">
                <p className="text-xs sm:text-[13px] leading-relaxed text-[#555047] dark:text-[#A6A29A] border-l-2 border-[#BA9D6A]/50 pl-3.5">
                  Raw, real, and unfiltered salon footage. Watch founder <strong>Firoz Khan</strong> craft undetectable hair patch attachments, precision fades, and confidence restorations.
                </p>

                {/* 3 Micro Trust Metrics */}
                <div className="flex flex-wrap items-center gap-2 pt-0.5">
                  <span className="inline-flex items-center gap-1 rounded-md bg-white px-2 py-0.5 text-[10px] font-semibold text-[#181A1C] shadow-2xs border border-[#E5E0D8] dark:border-white/10 dark:bg-white/[0.05] dark:text-white">
                    <CheckCircle2 size={11} className="text-[#8C734B] dark:text-[#BA9D6A]" />
                    <span>100% Unedited Footage</span>
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-md bg-white px-2 py-0.5 text-[10px] font-semibold text-[#181A1C] shadow-2xs border border-[#E5E0D8] dark:border-white/10 dark:bg-white/[0.05] dark:text-white">
                    <CheckCircle2 size={11} className="text-[#8C734B] dark:text-[#BA9D6A]" />
                    <span>Real Kota Patients</span>
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-md bg-white px-2 py-0.5 text-[10px] font-semibold text-[#181A1C] shadow-2xs border border-[#E5E0D8] dark:border-white/10 dark:bg-white/[0.05] dark:text-white">
                    <CheckCircle2 size={11} className="text-[#8C734B] dark:text-[#BA9D6A]" />
                    <span>60-Min Results</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Segmented Luxury Category Tab Track */}
            <div className="pt-2 flex items-center justify-start sm:justify-between flex-wrap gap-3">
              <div className="inline-flex flex-wrap p-1 rounded-xl sm:rounded-2xl bg-[#EBE5DB]/80 dark:bg-white/[0.04] border border-[#DDD5C7] dark:border-white/10 shadow-xs backdrop-blur-md gap-1">
                {CATEGORIES.map((cat) => {
                  const count = cat === 'All Videos'
                    ? SALON_VIDEOS.length
                    : SALON_VIDEOS.filter((v) => v.category === cat).length;
                  const active = selectedCategory === cat;

                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedCategory(cat)}
                      className={`inline-flex items-center gap-2 rounded-lg sm:rounded-xl px-3 sm:px-3.5 py-1.5 text-[11px] font-semibold transition-all cursor-pointer ${
                        active
                          ? 'bg-[#181A1C] text-white shadow-sm dark:bg-[#BA9D6A] dark:text-[#0E1012] font-bold scale-[1.02]'
                          : 'text-[#555047] hover:text-[#181A1C] hover:bg-white/60 dark:text-[#A6A29A] dark:hover:text-white dark:hover:bg-white/[0.06]'
                      }`}
                    >
                      {active && <span className="h-1.5 w-1.5 rounded-full bg-[#BA9D6A] dark:bg-[#0E1012]" />}
                      <span>{cat}</span>
                      <span className={`text-[9.5px] rounded-full px-1.5 py-0.2 font-mono ${
                        active
                          ? 'bg-white/20 dark:bg-black/20 text-current'
                          : 'bg-black/5 dark:bg-white/10 text-[#7D776D] dark:text-[#888]'
                      }`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="hidden sm:flex items-center gap-2 font-mono text-[10.5px] text-[#7D776D] dark:text-[#A6A29A]">
                <Film size={12} className="text-[#8C734B] dark:text-[#BA9D6A]" />
                <span>Showing {filteredVideos.length} of {SALON_VIDEOS.length} Showcase Reels</span>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* 2. MAIN CINEMA STAGE & INTERACTIVE PLAYLIST GRID                          */}
          {/* ========================================================================= */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8 items-start">
            {/* Left Column: Hero Cinema Player Stage (lg:col-span-7) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-[#E5E0D8] bg-black shadow-xl dark:border-white/[0.12] md:rounded-3xl">
                {isPlaying ? (
                  <iframe
                    className="h-full w-full object-contain"
                    src={`https://www.youtube-nocookie.com/embed/${activeVideo.id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                    title={activeVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : (
                  /* High-Resolution Poster Layer with Cinematic Overlay */
                  <div
                    onClick={() => setIsPlaying(true)}
                    className="group relative h-full w-full cursor-pointer select-none"
                    role="button"
                    tabIndex={0}
                    aria-label={`Play ${activeVideo.title}`}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setIsPlaying(true)}
                  >
                    <Image
                      src={`https://i.ytimg.com/vi/${activeVideo.id}/hqdefault.jpg`}
                      alt={activeVideo.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      priority
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Dark gradient vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30 transition-colors group-hover:via-black/30" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/75 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                        <span className="text-red-500">
                          <YouTubeIcon className="h-3.5 w-3.5" />
                        </span>
                        <span>Nikhar Studio</span>
                      </span>

                      <span className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-black/75 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#BA9D6A] backdrop-blur-md">
                        <Flame size={12} className="text-red-500" />
                        <span>{activeVideo.views}</span>
                      </span>
                    </div>

                    {/* Center Animated Gold Play Button */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                      <div className="relative flex items-center justify-center">
                        <span className="absolute h-16 w-16 rounded-full bg-[#BA9D6A]/35 animate-ping sm:h-20 sm:w-20" />
                        <div className="gold-gradient relative flex h-14 w-14 items-center justify-center rounded-full text-[#0E1012] shadow-2xl transition-transform duration-300 group-hover:scale-110 sm:h-16 sm:w-16">
                          <Play size={22} fill="currentColor" className="ml-1" />
                        </div>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/90 drop-shadow-md">
                        Click to Play Reel
                      </span>
                    </div>

                    {/* Bottom Info Bar Overlay */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white">
                      <div className="space-y-0.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#BA9D6A]">
                          {activeVideo.tag}
                        </span>
                        <h3 className="line-clamp-1 font-serif-title text-sm sm:text-base font-medium">
                          {activeVideo.title}
                        </h3>
                      </div>
                      <span className="rounded-md border border-white/20 bg-black/80 px-2 py-0.5 text-[10px] font-mono text-white/90 shrink-0">
                        {activeVideo.duration}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Video Story, Highlights & Action Bar */}
              <div className="rounded-2xl border border-[#E5E0D8] bg-white p-4 text-left shadow-md dark:border-white/[0.08] dark:bg-[#141619] sm:p-5 space-y-3.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E5E0D8] pb-3 dark:border-white/[0.08]">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C734B] dark:text-[#BA9D6A]">
                      {activeVideo.tag} • {activeVideo.views}
                    </span>
                    <h3 className="font-serif-title text-lg sm:text-xl text-[#181A1C] dark:text-white leading-snug">
                      {activeVideo.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(true)}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-[#D9D4CB] bg-[#FAF8F5] px-2.5 py-1.5 text-[11px] font-semibold text-[#181A1C] hover:border-[#BA9D6A] hover:text-[#8C734B] dark:border-white/15 dark:bg-white/[0.05] dark:text-white dark:hover:text-[#BA9D6A] transition cursor-pointer"
                      title="Expand to Fullscreen Theater"
                    >
                      <Maximize2 size={13} />
                      <span className="hidden sm:inline">Theater Mode</span>
                    </button>

                    <a
                      href={`https://youtube.com/watch?v=${activeVideo.id}`}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-[#D9D4CB] bg-[#FAF8F5] px-2.5 py-1.5 text-[11px] font-semibold text-[#181A1C] hover:border-[#BA9D6A] hover:text-[#8C734B] dark:border-white/15 dark:bg-white/[0.05] dark:text-white dark:hover:text-[#BA9D6A] transition"
                      title="Watch directly on YouTube"
                    >
                      <ExternalLink size={13} />
                      <span className="hidden sm:inline">YouTube</span>
                    </a>
                  </div>
                </div>

                <p className="text-xs leading-relaxed text-[#555047] dark:text-[#A6A29A]">
                  {activeVideo.desc}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {activeVideo.highlights.map((h) => (
                    <span
                      key={h}
                      className="inline-flex items-center gap-1 rounded-full border border-[#E5E0D8] bg-[#FAF8F5] px-2.5 py-0.5 text-[10px] font-medium text-[#181A1C] dark:border-white/10 dark:bg-white/[0.05] dark:text-white"
                    >
                      <CheckCircle2 size={11} className="text-[#8C734B] dark:text-[#BA9D6A]" />
                      <span>{h}</span>
                    </span>
                  ))}
                </div>

                {/* Direct Action Trigger */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-[#E5E0D8] dark:border-white/[0.08]">
                  <span className="text-[11px] text-[#7D776D] dark:text-[#A6A29A]">
                    Want to achieve this exact look with Firoz Khan?
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsBookingModalOpen(true)}
                    className="gold-gradient inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-[#0E1012] shadow-sm transition hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    <span>Book Transformation</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Curated 6-Video Playlist Selector Rail (lg:col-span-5) */}
            <div className="lg:col-span-5 space-y-3">
              <div className="flex items-center justify-between px-1">
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8C734B] dark:text-[#BA9D6A] inline-flex items-center gap-1.5">
                  <Film size={14} />
                  <span>CURATED REEL PLAYLIST</span>
                </span>
                <span className="text-[10.5px] font-semibold text-[#7D776D] dark:text-[#A6A29A]">
                  {filteredVideos.length} {filteredVideos.length === 1 ? 'Video' : 'Videos'}
                </span>
              </div>

              {/* Video Cards List */}
              <div className="space-y-2.5 max-h-[620px] overflow-y-auto pr-1">
                {filteredVideos.map((video, idx) => {
                  const isActive = video.id === activeVideoId;

                  return (
                    <div
                      key={video.id}
                      onClick={() => handleSelectVideo(video.id)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleSelectVideo(video.id)}
                      className={`group flex items-center gap-3 rounded-xl p-2.5 text-left transition-all duration-300 cursor-pointer ${
                        isActive
                          ? 'border-2 border-[#BA9D6A] bg-[#BA9D6A]/10 shadow-md dark:bg-[#BA9D6A]/15 ring-1 ring-[#BA9D6A]/40'
                          : 'border border-[#E5E0D8] bg-white hover:border-[#BA9D6A]/50 hover:bg-[#FAF8F5] dark:border-white/[0.08] dark:bg-[#141619] dark:hover:bg-white/[0.04]'
                      }`}
                    >
                      {/* Thumbnail Container */}
                      <div className="relative aspect-video h-18 sm:h-20 w-28 sm:w-32 shrink-0 overflow-hidden rounded-lg bg-black">
                        <Image
                          src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                          alt={video.title}
                          fill
                          sizes="120px"
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors" />

                        {/* Center Play or Playing Indicator */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          {isActive && isPlaying ? (
                            /* Animated Equalizer Wave */
                            <div className="flex items-end gap-0.5 h-4 px-2 py-1 rounded-full bg-black/80 backdrop-blur-xs">
                              <span className="w-0.5 bg-[#BA9D6A] h-3 animate-pulse" />
                              <span className="w-0.5 bg-[#BA9D6A] h-4 animate-bounce" />
                              <span className="w-0.5 bg-[#BA9D6A] h-2 animate-pulse" />
                            </div>
                          ) : (
                            <div className={`flex h-6 w-6 items-center justify-center rounded-full transition-transform group-hover:scale-110 ${
                              isActive ? 'bg-[#BA9D6A] text-[#0E1012]' : 'bg-black/70 text-white'
                            }`}>
                              <Play size={10} fill="currentColor" className="ml-0.5" />
                            </div>
                          )}
                        </div>

                        {/* Duration pill */}
                        <span className="absolute bottom-1 right-1 rounded bg-black/80 px-1.5 py-0.2 text-[9px] font-mono text-white/90">
                          {video.duration}
                        </span>
                      </div>

                      {/* Content Metadata */}
                      <div className="min-w-0 flex-1 space-y-1">
                        <div className="flex items-center justify-between gap-1">
                          <span className={`text-[9.5px] font-bold uppercase tracking-wider ${
                            isActive ? 'text-[#8C734B] dark:text-[#BA9D6A]' : 'text-[#7D776D] dark:text-[#A6A29A]'
                          }`}>
                            {video.tag}
                          </span>
                          {isActive && (
                            <span className="rounded-full bg-[#BA9D6A] px-2 py-0.2 text-[8.5px] font-bold uppercase tracking-wider text-[#0E1012]">
                              Playing
                            </span>
                          )}
                        </div>

                        <h4 className="line-clamp-2 text-xs font-semibold text-[#181A1C] dark:text-white leading-snug group-hover:text-[#8C734B] dark:group-hover:text-[#BA9D6A] transition-colors">
                          {video.title}
                        </h4>

                        <div className="flex items-center gap-2 text-[10px] text-[#7D776D] dark:text-[#A6A29A]">
                          <span className="inline-flex items-center gap-1 font-medium">
                            <Flame size={11} className="text-red-500" />
                            {video.views}
                          </span>
                          <span>•</span>
                          <span>Video #{idx + 1}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* 3. OFFICIAL YOUTUBE CHANNEL CTA BANNER                                    */}
          {/* ========================================================================= */}
          <div className="relative overflow-hidden rounded-2xl border border-[#E5E0D8] bg-gradient-to-r from-white via-[#FAF8F5] to-white p-4 dark:border-white/10 dark:from-[#141619] dark:via-[#181A1C] dark:to-[#141619] sm:p-6 shadow-md">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3.5 text-left">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-600 text-white shadow-lg shadow-red-600/20">
                  <YouTubeIcon className="h-6 w-6" />
                </div>
                <div className="space-y-0.5">
                  <div className="inline-flex items-center gap-2">
                    <h4 className="font-serif-title text-base sm:text-lg font-medium text-[#181A1C] dark:text-white">
                      Nikhar Unisex Saloon Kota
                    </h4>
                    <span className="rounded-full bg-red-500/15 px-2 py-0.5 text-[9.5px] font-bold text-red-600 dark:text-red-400">
                      Official Channel
                    </span>
                  </div>
                  <p className="text-[11.5px] text-[#555047] dark:text-[#A6A29A]">
                    Subscribe for daily hair patch installations, haircut masterclasses & styling tips.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto shrink-0">
                <a
                  href="https://youtube.com/@nikharunisexsaloonkota?si=33SamjrNAJU1Vyg2"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-red-600 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-red-600/25 transition hover:bg-red-700 hover:scale-105 active:scale-95"
                >
                  <YouTubeIcon className="h-4 w-4" />
                  <span>Subscribe on YouTube</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen Video Tour Modal */}
      <VideoTourModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoId={activeVideo.id}
        videoTitle={activeVideo.title}
      />

      {/* Consultation Booking Modal */}
      {isBookingModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={(e) => e.target === e.currentTarget && setIsBookingModalOpen(false)}
          className="animate-in fade-in fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/85 p-4 backdrop-blur-xl sm:p-6"
        >
          <div className="relative w-full max-w-2xl">
            <AppointmentModal
              defaultService={activeVideo.category === 'Hair Patch' ? 'Non-Surgical Hair Patch System' : 'Haircut & Styling'}
              onClose={() => setIsBookingModalOpen(false)}
            />
          </div>
        </div>
      )}
    </>
  );
}
