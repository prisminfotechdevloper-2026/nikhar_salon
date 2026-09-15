import Image from 'next/image';
import Link from 'next/link';
import { Clock, ArrowRight } from 'lucide-react';
import type { Service } from '@/data/services';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-[#121214] border border-zinc-800/90 rounded-2xl overflow-hidden hover:border-gold/50 transition duration-300 group">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={service.img}
          alt={service.title}
          fill
          className="object-cover group-hover:scale-105 transition duration-500"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-transparent" />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-serif-luxury text-lg font-semibold text-white">{service.title}</h3>
          {service.price !== "Varies" && <span className="text-gold text-xs font-bold">{service.price}</span>}
        </div>
        <p className="text-xs text-zinc-400 leading-relaxed mb-4">{service.desc}</p>
        <div className="flex justify-between items-center border-t border-zinc-800 pt-4">
          {service.time !== "N/A" && (
            <p className="text-xs text-zinc-500 flex items-center gap-1.5">
              <Clock size={12} /> {service.time}
            </p>
          )}
          <Link
            href="/book-appointment"
            className="text-gold text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-1.5 hover:gap-2.5 transition-all"
          >
            Book Slot <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </div>
  );
}