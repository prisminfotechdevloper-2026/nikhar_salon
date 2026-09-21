'use client';

import { useTheme } from '@/context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export default function ThemeToggle({ className = '', showLabel = false }: ThemeToggleProps) {
  const { toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`group relative inline-flex h-9 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.08] hover:bg-white/[0.16] hover:border-[#BA9D6A] transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#BA9D6A]/50 active:scale-95 text-white shadow-xs ${
        showLabel ? 'px-3.5' : 'w-9'
      } ${className}`}
      aria-label="Toggle Theme"
      title="Switch between Light and Dark mode"
    >
      <div className="relative flex items-center justify-center">
        {/* Sun icon: displayed in dark mode (click to switch to light) */}
        <Sun className="h-[18px] w-[18px] text-[#BA9D6A] hidden dark:block transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110" />
        {/* Moon icon: displayed in light mode (click to switch to dark) */}
        <Moon className="h-[18px] w-[18px] text-[#BA9D6A] block dark:hidden transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110" />
      </div>

      {showLabel && (
        <span className="text-[11px] font-semibold uppercase tracking-[0.08em] font-sans text-white/90">
          <span className="hidden dark:inline">Light</span>
          <span className="inline dark:hidden">Dark</span>
        </span>
      )}
    </button>
  );
}
