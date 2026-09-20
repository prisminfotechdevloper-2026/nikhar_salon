import Image from 'next/image';
import { TEAM } from '@/data/team';

export default function AboutTeam() {
  return (
    <section>
      <div className="text-center mb-10 sm:mb-14 space-y-2">
        <div className="inline-flex items-center gap-2">
          <div className="h-3 w-[2px] bg-[#BA9D6A]" />
          <span className="text-[10.5px] uppercase tracking-[0.25em] text-[#8C734B] dark:text-[#BA9D6A] font-semibold font-sans">
            THE ARTISANS
          </span>
          <div className="h-3 w-[2px] bg-[#BA9D6A]" />
        </div>
        <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl text-[#181A1C] dark:text-white">
          Meet Our Master Stylists
        </h2>
        <p className="text-[#555047] dark:text-[#A6A29A] text-xs sm:text-sm max-w-lg mx-auto">
          Experienced professionals dedicated to refining your personal aesthetic with passion and technique.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {TEAM.map((member, i) => (
          <div 
            key={i} 
            className="bg-white dark:bg-[#141619] border border-[#E5E0D8] dark:border-white/[0.08] hover:border-[#BA9D6A]/60 rounded-2xl md:rounded-3xl overflow-hidden group transition-all duration-300 shadow-xs hover:shadow-md dark:shadow-sm"
          >
            <div className="relative h-64 w-full overflow-hidden bg-[#EAE6DF] dark:bg-[#181A1C]">
              <Image
                src={member.img}
                alt={member.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 dark:opacity-100 dark:from-[#141619]" />
              <span className="absolute top-3 left-3 bg-white/90 dark:bg-black/70 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[9.5px] font-semibold text-[#8C734B] dark:text-[#BA9D6A] border border-[#BA9D6A]/40 dark:border-white/10 uppercase tracking-wider">
                {member.exp}
              </span>
            </div>
            <div className="p-5 text-center space-y-1.5">
              <h3 className="font-serif-title text-xl text-[#181A1C] dark:text-white">{member.name}</h3>
              <p className="text-xs text-[#8C734B] dark:text-[#BA9D6A] font-semibold">{member.role}</p>
              <p className="text-[11px] text-[#555047] dark:text-[#A6A29A] pt-1 leading-snug">{member.speciality}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
