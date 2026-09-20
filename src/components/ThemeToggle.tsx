'use client';

import { useTheme } from '@/context/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export default function ThemeToggle({ className = '', showLabel = false }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={`h-9 w-9 rounded-full border border-[#D9D4CB] dark:border-white/15 bg-[#ECE8E1]/80 dark:bg-white/[0.06] ${className}`}
        aria-hidden="true"
      />
    );
  }

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`group relative inline-flex h-9 items-center justify-center gap-1.5 rounded-full border transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#BA9D6A]/50 active:scale-95 ${
        isDark
          ? 'border-white/15 bg-white/[0.06] hover:bg-white/[0.12] hover:border-[#BA9D6A]/60 text-white shadow-xs'
          : 'border-[#D9D4CB] bg-[#ECE8E1]/80 hover:bg-[#ECE8E1] hover:border-[#BA9D6A]/70 text-[#181A1C] shadow-xs'
      } ${showLabel ? 'px-3' : 'w-9'} ${className}`}
      aria-label={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
      title={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
    >
      <div className="relative flex items-center justify-center">
        {isDark ? (
          <Sun className="h-4 w-4 text-[#BA9D6A] transition-transform duration-500 rotate-0 hover:rotate-90 group-hover:scale-110" />
        ) : (
          <Moon className="h-4 w-4 text-[#8C734B] transition-transform duration-500 -rotate-12 hover:rotate-0 group-hover:scale-110" />
        )}
      </div>

      {showLabel && (
        <span className="text-[11px] font-semibold uppercase tracking-[0.08em] font-sans">
          {isDark ? 'Light' : 'Dark'}
        </span>
      )}
    </button>
  );
}
