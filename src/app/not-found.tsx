import Link from 'next/link';
import { Home, Scissors } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-[#FAF8F5] dark:bg-[#0E1012] text-[#181A1C] dark:text-[#FAF8F5] px-4 py-20 text-center font-sans transition-colors duration-300">
      <div className="max-w-lg space-y-6">
        <div className="inline-flex items-center gap-2">
          <div className="h-3 w-[2px] bg-[#BA9D6A]" />
          <span className="text-[10.5px] uppercase tracking-[0.25em] text-[#8C734B] dark:text-[#BA9D6A] font-semibold">
            ERROR 404 • PAGE NOT FOUND
          </span>
          <div className="h-3 w-[2px] bg-[#BA9D6A]" />
        </div>

        <h1 className="font-serif-title text-4xl sm:text-6xl text-[#181A1C] dark:text-white font-normal">
          The Grooming Path Diverged
        </h1>

        <p className="text-xs sm:text-sm text-[#555047] dark:text-[#A6A29A] max-w-md mx-auto leading-relaxed">
          The page you are looking for has moved, been archived, or does not exist. Explore our signature grooming services or reserve your chair.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 gold-gradient text-[#0E1012] font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full shadow-md hover:brightness-105 active:scale-95 transition"
          >
            <Home size={14} /> Back to Homepage
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 border border-[#D9D4CB] dark:border-white/20 text-[#181A1C] dark:text-white hover:border-[#BA9D6A] px-6 py-3.5 rounded-full text-xs uppercase tracking-wider transition hover:scale-105"
          >
            <Scissors size={14} /> View Services
          </Link>
          <Link
            href="/book-appointment"
            className="inline-flex items-center gap-2 border border-[#BA9D6A]/50 bg-[#BA9D6A]/10 text-[#8C734B] dark:text-[#BA9D6A] hover:bg-[#BA9D6A]/20 px-6 py-3.5 rounded-full text-xs uppercase tracking-wider transition"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </div>
  );
}
