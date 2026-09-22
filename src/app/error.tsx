'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertCircle, RefreshCw, Home } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log unexpected client error to monitoring if configured
    console.error('Next.js Client Runtime Error:', error);
  }, [error]);

  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center bg-[#FAF8F5] dark:bg-[#0E1012] text-[#181A1C] dark:text-[#FAF8F5] px-4 py-16 text-center font-sans transition-colors duration-300">
      <div className="max-w-md space-y-5 p-8 rounded-3xl bg-white dark:bg-[#141619] border border-[#BA9D6A]/30 shadow-xl">
        <div className="w-12 h-12 rounded-2xl bg-[#BA9D6A]/10 text-[#8C734B] dark:text-[#BA9D6A] mx-auto flex items-center justify-center">
          <AlertCircle size={26} />
        </div>

        <div className="space-y-1.5">
          <span className="text-[10.5px] uppercase tracking-[0.25em] text-[#8C734B] dark:text-[#BA9D6A] font-semibold">
            EXPERIENCING AN UNEXPECTED MOMENT
          </span>
          <h2 className="font-serif-title text-2xl sm:text-3xl text-[#181A1C] dark:text-white">
            Something Went Wrong
          </h2>
          <p className="text-xs text-[#555047] dark:text-[#A6A29A] leading-relaxed">
            We apologize for the interruption. You can reload the page or return to our luxury salon homepage.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            type="button"
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 gold-gradient text-[#0E1012] font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-full shadow-md hover:brightness-105 active:scale-95 transition cursor-pointer"
          >
            <RefreshCw size={14} /> Try Again
          </button>
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-[#D9D4CB] dark:border-white/20 text-[#181A1C] dark:text-white hover:border-[#BA9D6A] px-5 py-3 rounded-full text-xs uppercase tracking-wider transition hover:scale-105"
          >
            <Home size={14} /> Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
