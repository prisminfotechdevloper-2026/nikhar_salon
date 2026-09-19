import Image from 'next/image';
import { TEAM } from '@/data/team';

export default function AboutTeam() {
  return (
    <section>
      <div className="text-center mb-10 sm:mb-14 space-y-2">
        <div className="inline-flex items-center gap-2">
          <div className="h-3 w-[2px] bg-[#BA9D6A]" />
          <span className="text-[10.5px] uppercase tracking-[0.25em] text-[#BA9D6A] font-semibold">
            THE ARTISANS
          </span>
          <div className="h-3 w-[2px] bg-[#BA9D6A]" />
        </div>
        <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl text-white">
          Meet Our Master Stylists
        </h2>
        <p className="text-[#A6A29A] text-xs sm:text-sm max-w-lg mx-auto">
          Experienced professionals dedicated to refining your personal aesthetic with passion and technique.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {TEAM.map((member, i) => (
          <div 
            key={i} 
            className="bg-[#141619] border border-white/[0.08] hover:border-[#BA9D6A]/60 rounded-2xl md:rounded-3xl overflow-hidden group transition-all duration-300 shadow-sm"
          >
            <div className="relative h-64 w-full overflow-hidden bg-[#181A1C]">
              <Image
                src={member.img}
                alt={member.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141619] via-transparent to-transparent" />
              <span className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[9.5px] font-semibold text-[#BA9D6A] border border-white/10 uppercase tracking-wider">
                {member.exp}
              </span>
            </div>
            <div className="p-5 text-center space-y-1.5">
              <h3 className="font-serif-title text-xl text-white">{member.name}</h3>
              <p className="text-xs text-[#BA9D6A] font-medium">{member.role}</p>
              <p className="text-[11px] text-[#A6A29A] pt-1 leading-snug">{member.speciality}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
