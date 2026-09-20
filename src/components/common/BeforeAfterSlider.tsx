'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { ChevronsLeftRight, Sparkles } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
  aspectRatio?: string;
  initialPosition?: number;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt = "Before Hair Patch",
  afterAlt = "After Hair Patch Transformation",
  beforeLabel = "BEFORE",
  afterLabel = "AFTER (HAIR PATCH)",
  className = "",
  aspectRatio = "aspect-[4/3]",
  initialPosition = 50,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Update position based on pointer event (mouse or touch)
  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const width = rect.width;
    const percentage = Math.max(0, Math.min(100, (x / width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    handleMove(e.clientX);
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    try {
      (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
    } catch {
      // ignore
    }
  };

  // Keyboard navigation accessibility
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === 'ArrowRight') {
      setSliderPosition((prev) => Math.min(100, prev + 5));
    }
  };

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="slider"
      aria-valuenow={Math.round(sliderPosition)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Before and After transformation split slider"
      className={`group relative w-full select-none overflow-hidden rounded-2xl md:rounded-3xl border border-[#E5E0D8] dark:border-white/[0.12] bg-[#141619] shadow-xl cursor-ew-resize focus:outline-none focus:ring-2 focus:ring-[#BA9D6A] ${aspectRatio} ${className}`}
    >
      {/* 1. AFTER Image (Base Layer - Full Width) */}
      <div className="absolute inset-0 h-full w-full">
        <Image
          src={afterImage}
          alt={afterAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover object-center pointer-events-none"
          priority
        />
        {/* Subtle Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* 2. BEFORE Image (Clipped Overlay Layer) */}
      <div
        className="absolute inset-0 h-full w-full overflow-hidden pointer-events-none"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      >
        <Image
          src={beforeImage}
          alt={beforeAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover object-center pointer-events-none"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* 3. Static Labels */}
      {/* BEFORE Badge */}
      <div
        className="pointer-events-none absolute top-3 left-3 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-opacity duration-300 shadow-md"
        style={{ opacity: sliderPosition < 15 ? 0 : 1 }}
      >
        <span>{beforeLabel}</span>
      </div>

      {/* AFTER Badge */}
      <div
        className="pointer-events-none absolute top-3 right-3 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#BA9D6A] text-[#0E1012] text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-opacity duration-300 shadow-md"
        style={{ opacity: sliderPosition > 85 ? 0 : 1 }}
      >
        <Sparkles size={11} className="fill-current" />
        <span>{afterLabel}</span>
      </div>

      {/* 4. Interactive Vertical Split Line & Handle */}
      <div
        className="pointer-events-none absolute inset-y-0 z-30 w-[3px] bg-gradient-to-b from-[#BA9D6A]/40 via-[#BA9D6A] to-[#BA9D6A]/40 shadow-[0_0_12px_rgba(186,157,106,0.8)]"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        {/* Circular Metallic Handle in Center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-gradient-to-tr from-[#C2A774] via-[#BA9D6A] to-[#B3935B] text-[#0E1012] shadow-[0_4px_20px_rgba(0,0,0,0.6),0_0_15px_rgba(186,157,106,0.6)] border-2 border-white group-hover:scale-110 active:scale-95 transition-transform">
          <ChevronsLeftRight size={18} className="stroke-[2.5]" />
        </div>
      </div>

      {/* 5. Bottom Drag Hint (fades out when interacted) */}
      <div className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 z-20 px-3.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-white/90 text-[10px] font-semibold uppercase tracking-widest opacity-85 group-hover:opacity-100 transition-opacity">
        ↔ Drag Split Slider
      </div>
    </div>
  );
}
