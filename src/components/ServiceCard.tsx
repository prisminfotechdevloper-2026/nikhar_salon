import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Service } from '@/data/services';

interface ServiceCardProps {
  service: Service;
  tag?: string;
  priority?: boolean;
}

export default function ServiceCard({ service, tag, priority = false }: ServiceCardProps) {
  return (
    <article className="group relative flex flex-col justify-between bg-white dark:bg-[#141619] border border-[#E5E0D8] dark:border-white/[0.08] hover:border-[#BA9D6A]/60 rounded-2xl md:rounded-3xl overflow-hidden transition duration-300 shadow-xs hover:shadow-md dark:shadow-sm dark:hover:shadow-[0_12px_30px_rgba(0,0,0,0.5)]">
      {/* Service Image Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#EAE6DF] dark:bg-[#181A1C]">
        <Image
          src={service.img}
          alt={service.title}
          fill
          priority={priority}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-black/20 opacity-60 dark:from-[#141619] dark:via-black/20 dark:to-black/30 dark:opacity-100" />
      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 gap-4">
        <div className="space-y-2">
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="font-serif-title text-xl sm:text-[22px] font-normal text-[#181A1C] dark:text-white group-hover:text-[#8C734B] dark:group-hover:text-[#BA9D6A] transition-colors duration-200 leading-snug">
              {service.title}
            </h3>
            {service.price !== 'Varies' && (
              <span className="font-serif-title text-lg sm:text-xl text-[#8C734B] dark:text-[#BA9D6A] font-medium shrink-0">
                {service.price}
              </span>
            )}
          </div>
          <p className="text-xs sm:text-[13px] text-[#555047] dark:text-[#A6A29A] font-normal leading-relaxed line-clamp-2">
            {service.desc}
          </p>
        </div>

        {/* Card Action Row */}
        <div className="pt-3 border-t border-[#EAE5DC] dark:border-white/[0.08] flex items-center justify-between">
          <Link
            href={`/book-appointment?service=${encodeURIComponent(service.title)}`}
            className="inline-flex items-center justify-between w-full text-[11px] sm:text-xs font-semibold tracking-[0.16em] text-[#7D776D] dark:text-[#C2A774] group-hover:text-[#181A1C] dark:group-hover:text-white uppercase transition-colors"
          >
            <span>Book Slot for Service</span>
            <div className="size-7 rounded-full border border-[#E2DDD4] bg-[#FAF8F5] text-[#8C734B] dark:border-white/15 dark:bg-white/[0.05] dark:text-[#BA9D6A] flex items-center justify-center group-hover:border-[#BA9D6A] group-hover:bg-[#BA9D6A]/15 dark:group-hover:bg-[#BA9D6A]/20 transition-colors duration-300">
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </Link>
        </div>
      </div>
    </article>
  );
}