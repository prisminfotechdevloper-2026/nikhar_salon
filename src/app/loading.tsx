export default function Loading() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-[#FAF8F5] dark:bg-[#0E1012] transition-colors duration-300 px-4">
      <div className="relative flex items-center justify-center">
        {/* Outer Gold Ring */}
        <div className="size-16 rounded-full border-2 border-[#BA9D6A]/30 border-t-[#BA9D6A] animate-spin" />
        {/* Inner Emblem Mark */}
        <div className="absolute size-8 rounded-full bg-[#BA9D6A]/10 flex items-center justify-center text-[#BA9D6A] font-serif-title font-bold text-sm">
          N
        </div>
      </div>
      <p className="mt-4 font-sans text-xs uppercase tracking-[0.25em] text-[#8C734B] dark:text-[#BA9D6A] font-semibold">
        Nikhar Salon Kota
      </p>
    </div>
  );
}
