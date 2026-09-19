import React from 'react';

interface SectionHeaderProps {
  subtitle?: string;
  title: string | React.ReactNode;
  description?: string;
  align?: 'center' | 'left';
  className?: string;
}

export default function SectionHeader({
  subtitle,
  title,
  description,
  align = 'center',
  className = '',
}: SectionHeaderProps) {
  const isCenter = align === 'center';

  return (
    <div
      className={`space-y-3 ${isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'} ${className}`}
    >
      {subtitle && (
        <div className={`inline-flex items-center gap-2 ${isCenter ? 'justify-center' : ''}`}>
          <div className="h-3 w-[2px] bg-[#BA9D6A]" />
          <span className="text-[10.5px] uppercase tracking-[0.25em] text-[#BA9D6A] font-semibold">
            {subtitle}
          </span>
          {isCenter && <div className="h-3 w-[2px] bg-[#BA9D6A]" />}
        </div>
      )}

      <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-[1.15]">
        {title}
      </h2>

      {description && (
        <p className="text-[#A6A29A] text-xs sm:text-sm md:text-base leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
