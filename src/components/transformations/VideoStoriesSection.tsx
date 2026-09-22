'use client';

import { useState } from 'react';
import Image from 'next/image';
import { VIDEO_STORIES, VideoStory } from '@/data/transformations';
import { Play, Eye, Clock, Film, CheckCircle2 } from 'lucide-react';
import VideoTourModal from '@/components/VideoTourModal';

export default function VideoStoriesSection() {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  return (
    <>
      <section className="py-12 sm:py-16 lg:py-20 bg-[#F5F2ED] dark:bg-[#0A0C0E] border-b border-[#E5E0D8] dark:border-white/[0.08] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2">
                <div className="h-3 w-[2px] bg-[#BA9D6A]" />
                <span className="text-[10.5px] font-semibold tracking-[0.25em] text-[#8C734B] dark:text-[#BA9D6A] uppercase font-sans">
                  VERIFIED VIDEO REVIEWS & CLIPS
                </span>
              </div>
              <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl text-[#181A1C] dark:text-white font-normal leading-tight">
                Live Studio Recordings & Reels
              </h2>
              <p className="text-xs sm:text-sm text-[#555047] dark:text-[#A6A29A] leading-relaxed">
                Watch real clients in the styling chair at our Vigyan Nagar studio — from live micro-skin hair patch attachments to razor taper fades.
              </p>
            </div>

            <div className="hidden sm:flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8C734B] dark:text-[#BA9D6A]">
              <Film size={15} />
              <span>@nikharunisexsaloonkota</span>
            </div>
          </div>

          {/* 4 Video Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {VIDEO_STORIES.map((video) => (
              <div
                key={video.id}
                className="group relative rounded-2xl overflow-hidden bg-white dark:bg-[#121416] border border-[#E5E0D8] dark:border-white/[0.08] shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Video Thumbnail with Play Button */}
                <div
                  onClick={() => setActiveVideoId(video.id)}
                  className="relative aspect-[4/3] w-full overflow-hidden bg-black cursor-pointer"
                >
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    style={{ objectPosition: 'center top' }}
                    className="object-cover group-hover:scale-108 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />

                  {/* Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-12 w-12 rounded-full bg-[#BA9D6A] group-hover:scale-110 group-hover:brightness-110 transition-all duration-300 flex items-center justify-center shadow-lg text-[#0E1012] pl-0.5">
                      <Play size={20} fill="currentColor" />
                    </div>
                  </div>

                  {/* Badges Overlay */}
                  <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between text-[10px] font-semibold">
                    <span className="px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-md text-[#BA9D6A] border border-white/10 uppercase tracking-wider">
                      {video.category}
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-md text-white/90 flex items-center gap-1 font-mono">
                      <Clock size={10} /> {video.duration}
                    </span>
                  </div>

                  {/* Views Strip */}
                  <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1 text-[10.5px] font-medium text-white/90">
                    <Eye size={12} className="text-[#BA9D6A]" />
                    <span>{video.views}</span>
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-4 space-y-2.5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xs sm:text-[13px] font-bold text-[#181A1C] dark:text-white leading-snug line-clamp-2">
                      {video.title}
                    </h3>
                    <p className="text-[11px] text-[#7D776D] dark:text-white/50 mt-1">
                      By {video.stylist}
                    </p>
                  </div>

                  <div className="space-y-1 pt-1 border-t border-[#E5E0D8] dark:border-white/[0.06]">
                    {video.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-[10px] text-[#555047] dark:text-white/70">
                        <CheckCircle2 size={11} className="text-[#BA9D6A] shrink-0" />
                        <span className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal Player */}
      <VideoTourModal
        isOpen={activeVideoId !== null}
        onClose={() => setActiveVideoId(null)}
        videoId={activeVideoId || ''}
      />
    </>
  );
}
