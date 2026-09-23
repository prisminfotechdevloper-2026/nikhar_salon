'use client';

import { useTheme } from '@/context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
  forceDark?: boolean;
}

export default function ThemeToggle({
  className = '',
  showLabel = false,
  forceDark = false,
}: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`group relative inline-flex h-9 items-center justify-center gap-2 rounded-full transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#BA9D6A]/50 active:scale-95 shadow-xs ${
        forceDark
          ? 'border border-white/20 bg-white/[0.08] hover:bg-white/[0.16] hover:border-[#BA9D6A] text-white'
          : 'border border-[#D9D4CB] dark:border-white/20 bg-[#FAF8F5]/80 dark:bg-white/[0.08] hover:bg-[#BA9D6A]/10 dark:hover:bg-white/[0.16] hover:border-[#BA9D6A] text-[#181A1C] dark:text-white'
      } ${
        showLabel ? 'px-3.5' : 'w-9'
      } ${className}`}
      aria-label="Toggle Theme"
      title={theme === 'dark' ? 'Switch to Light mode' : 'Switch to Dark mode'}
    >
      <div className="relative flex items-center justify-center">
        {/* Sun icon: displayed in dark mode (click to switch to light) */}
        <Sun className="size-[18px] text-[#BA9D6A] hidden dark:block transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110" />
        {/* Moon icon: displayed in light mode (click to switch to dark) */}
        <Moon className="size-[18px] text-[#BA9D6A] block dark:hidden transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110" />
      </div>

      {showLabel && (
        <span className={`text-[11px] font-semibold uppercase tracking-[0.08em] font-sans ${forceDark ? 'text-white/90' : 'text-[#181A1C] dark:text-white/90'}`}>
          <span className="hidden dark:inline">Light</span>
          <span className="dark:hidden">Dark</span>
        </span>
      )}
    </button>
  );
}
