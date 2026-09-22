import Link from 'next/link';

interface LogoProps {
  variant?: 'full' | 'mark' | 'horizontal';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'responsive';
  className?: string;
  href?: string;
  forceDark?: boolean;
}

export default function Logo({
  variant = 'full',
  size = 'responsive',
  className = '',
  href = '/',
  forceDark = false,
}: LogoProps) {
  // Dimensions based on size
  const sizes = {
    sm: { icon: 'w-8 h-8', text: 'text-sm', sub: 'text-[7.5px]', gap: 'gap-2' },
    md: { icon: 'w-10 h-10', text: 'text-base sm:text-lg', sub: 'text-[8.5px] sm:text-[9.5px]', gap: 'gap-2.5 sm:gap-3' },
    lg: { icon: 'w-12 h-12 sm:w-14 sm:h-14', text: 'text-xl sm:text-2xl', sub: 'text-[10px] sm:text-[11px]', gap: 'gap-3 sm:gap-3.5' },
    xl: { icon: 'w-16 h-16 sm:w-20 sm:h-20', text: 'text-2xl sm:text-4xl', sub: 'text-[11px] sm:text-[13px]', gap: 'gap-3.5 sm:gap-4' },
    responsive: { icon: 'w-8 h-8 sm:w-10 sm:h-10', text: 'text-sm sm:text-lg', sub: 'text-[7.5px] sm:text-[9.5px]', gap: 'gap-2 sm:gap-3' },
  };

  const currentSize = sizes[size] || sizes.responsive;

  const LogoContent = (
    <div className={`inline-flex items-center ${currentSize.gap} group select-none`}>
      {/* Golden Framed Emblem Mark */}
      <div 
        className={`relative shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${currentSize.icon}`}
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_2px_10px_rgba(186,157,106,0.35)]"
        >
          <defs>
            {/* Linear Gold Gradient for Frames & Strokes */}
            <linearGradient id="goldSheen" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F9EED9" />
              <stop offset="25%" stopColor="#D8BE8A" />
              <stop offset="55%" stopColor="#BA9D6A" />
              <stop offset="85%" stopColor="#8C734B" />
              <stop offset="100%" stopColor="#B3935B" />
            </linearGradient>

            {/* Gradient for Emblem N */}
            <linearGradient id="goldLetter" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF4DE" />
              <stop offset="30%" stopColor="#E2C792" />
              <stop offset="60%" stopColor="#BA9D6A" />
              <stop offset="100%" stopColor="#7A6139" />
            </linearGradient>

            {/* Shadow Filter */}
            <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Luxury Geometric Outer Frame (Signature corner cutouts) */}
          {/* Top-Left & Bottom Corner Stroke */}
          <path
            d="M8 32 V10 H80"
            stroke="url(#goldSheen)"
            strokeWidth="3.5"
            strokeLinecap="square"
          />
          {/* Bottom-Right & Top Corner Stroke */}
          <path
            d="M92 68 V90 H20"
            stroke="url(#goldSheen)"
            strokeWidth="3.5"
            strokeLinecap="square"
          />

          {/* Left Vertical Short Accent Notch */}
          <line
            x1="8"
            y1="50"
            x2="8"
            y2="76"
            stroke="url(#goldSheen)"
            strokeWidth="3.5"
            strokeLinecap="square"
          />

          {/* Right Vertical Short Accent Notch */}
          <line
            x1="92"
            y1="24"
            x2="92"
            y2="50"
            stroke="url(#goldSheen)"
            strokeWidth="3.5"
            strokeLinecap="square"
          />

          {/* Center Stylized Serif 'N' */}
          <path
            d="M26 73 V27 L33 27 V73 H26 Z"
            fill="url(#goldLetter)"
          />
          <path
            d="M22 28 H37 V25 H22 V28 Z M22 75 H37 V72 H22 V75 Z"
            fill="url(#goldLetter)"
          />

          <path
            d="M67 73 V27 L74 27 V73 H67 Z"
            fill="url(#goldLetter)"
          />
          <path
            d="M63 28 H78 V25 H63 V28 Z M63 75 H78 V72 H63 V75 Z"
            fill="url(#goldLetter)"
          />

          {/* Elegant Diagonal Dynamic Ribbon Swash */}
          <path
            d="M32 27 C42 42, 54 58, 68 73 C58 58, 48 40, 36 27 Z"
            fill="url(#goldSheen)"
          />
          <path
            d="M29 33 C40 48, 55 64, 71 70 C56 63, 44 48, 33 33 Z"
            fill="url(#goldLetter)"
            opacity="0.9"
          />
        </svg>
      </div>

      {/* Typography: "NIKHAR" + "— SALON • KOTA —" */}
      {variant !== 'mark' && (
        <div className="flex flex-col justify-center">
          <div className="flex items-center">
            <span
              className={`font-serif-title tracking-[0.2em] font-normal leading-none ${
                forceDark
                  ? 'bg-gradient-to-r from-[#F9EED9] via-[#BA9D6A] to-[#C2A774] bg-clip-text text-transparent drop-shadow-sm'
                  : 'text-[#181A1C] dark:bg-gradient-to-r dark:from-[#F9EED9] dark:via-[#BA9D6A] dark:to-[#C2A774] dark:bg-clip-text dark:text-transparent drop-shadow-xs'
              } transition-colors duration-200 ${currentSize.text}`}
            >
              NIKHAR
            </span>
          </div>

          <div className="flex items-center gap-1 sm:gap-1.5 mt-0.5 sm:mt-1 opacity-95">
            <span className={`w-2 sm:w-3.5 h-[1px] bg-gradient-to-r from-transparent ${forceDark ? 'to-[#BA9D6A]' : 'to-[#8C734B] dark:to-[#BA9D6A]'}`} />
            <span
              className={`tracking-[0.25em] sm:tracking-[0.28em] font-semibold ${
                forceDark ? 'text-[#BA9D6A]' : 'text-[#8C734B] dark:text-[#BA9D6A]'
              } uppercase font-sans whitespace-nowrap transition-colors duration-200 ${currentSize.sub}`}
            >
              SALON • KOTA
            </span>
            <span className={`w-2 sm:w-3.5 h-[1px] bg-gradient-to-l from-transparent ${forceDark ? 'to-[#BA9D6A]' : 'to-[#8C734B] dark:to-[#BA9D6A]'}`} />
          </div>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className={`inline-block focus:outline-none shrink-0 ${className}`} aria-label="Nikhar Salon Kota Home">
        {LogoContent}
      </Link>
    );
  }

  return <div className={className}>{LogoContent}</div>;
}
