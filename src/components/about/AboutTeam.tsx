'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  ArrowRight,
  Calendar,
  BadgeCheck,
  CheckCircle2,
  ShieldCheck,
  Users,
} from 'lucide-react';
import { TEAM } from '@/data/team';
import AppointmentModal from '@/components/AppointmentModal';

export default function AboutTeam() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStylist, setSelectedStylist] = useState<string>('Any Available Master Stylist');
  const [selectedService, setSelectedService] = useState<string>('Haircut & Styling');

  const handleOpenBooking = (stylistName: string, serviceName?: string) => {
    setSelectedStylist(stylistName);
    if (serviceName) setSelectedService(serviceName);
    setIsModalOpen(true);
  };

  return (
    <section className="space-y-8 sm:space-y-10">
      {/* ========================================================================= */}
      {/* 1. LUXURY EDITORIAL 2-COLUMN SPLIT HEADER (Amaia Style)                   */}
      {/* ========================================================================= */}
      <div className="space-y-1 sm:space-y-6">
        {/* Top Live Metadata Strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E5E0D8] pb-3 text-left dark:border-white/[0.08]">
          <div className="flex items-center gap-2.5">
             <span className="font-mono text-[10px] sm:text-[10.5px] font-bold uppercase tracking-[0.22em] text-[#8C734B] dark:text-[#BA9D6A]">
              NIKHAR SALON FLOOR • RESIDENT CRAFTSMEN
            </span>
            <span className="hidden sm:inline text-black/20 dark:text-white/20">•</span>
            <span className="hidden sm:inline font-mono text-[10px] text-[#7D776D] dark:text-[#A6A29A]">
              4 CERTIFIED MASTER SPECIALISTS
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E5E0D8] bg-white/80 px-2.5 py-0.5 text-[10px] font-medium text-[#555047] backdrop-blur-xs dark:border-white/10 dark:bg-white/[0.04] dark:text-[#A6A29A]">
              <BadgeCheck size={13} className="text-[#8C734B] dark:text-[#BA9D6A]" />
              <span>Certified Precision Artisans</span>
            </span>
          </div>
        </div>

        {/* Main Editorial 2-Column Split */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-10 items-end text-left">
          {/* Left Column: Title & Subtitle */}
          <div className="lg:col-span-7 space-y-2 text-left">
            <div className="inline-flex items-center gap-2">
              <div className="h-2.5 w-[2px] bg-[#BA9D6A]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#8C734B] dark:text-[#BA9D6A] font-sans">
                THE ARTISANS OF NIKHAR SALON
              </span>
            </div>

            <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-[42px] font-normal leading-[1.15] text-[#181A1C] dark:text-white">
              Meet Our Master Stylists &amp;{' '}
              <span className="italic font-serif text-[#8C734B] dark:text-[#BA9D6A]">
                Hair Artisans
              </span>
            </h2>
          </div>

          {/* Right Column: Lead Description & Trust Badges */}
          <div className="lg:col-span-5 space-y-3 text-left">
            <p className="text-xs sm:text-[13px] leading-relaxed text-[#555047] dark:text-[#A6A29A] border-l-2 border-[#BA9D6A]/50 pl-3.5">
              The craftsmen dedicated to refining your personal aesthetic with passion, surgical-grade precision, and confidential care. Reserve directly with your preferred master specialist.
            </p>

            {/* Micro Trust Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-0.5">
              <span className="inline-flex items-center gap-1 rounded-md bg-white px-2 py-0.5 text-[10px] font-semibold text-[#181A1C] shadow-2xs border border-[#E5E0D8] dark:border-white/10 dark:bg-white/[0.05] dark:text-white">
                <CheckCircle2 size={11} className="text-[#8C734B] dark:text-[#BA9D6A]" />
                <span>Direct Chair Booking</span>
              </span>
              <span className="inline-flex items-center gap-1 rounded-md bg-white px-2 py-0.5 text-[10px] font-semibold text-[#181A1C] shadow-2xs border border-[#E5E0D8] dark:border-white/10 dark:bg-white/[0.05] dark:text-white">
                <ShieldCheck size={11} className="text-[#8C734B] dark:text-[#BA9D6A]" />
                <span>Autoclave Sanitized Tools</span>
              </span>
              <span className="inline-flex items-center gap-1 rounded-md bg-white px-2 py-0.5 text-[10px] font-semibold text-[#181A1C] shadow-2xs border border-[#E5E0D8] dark:border-white/10 dark:bg-white/[0.05] dark:text-white">
                <Users size={11} className="text-[#8C734B] dark:text-[#BA9D6A]" />
                <span>1-on-1 VIP Attention</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Stylists 4-Column Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {TEAM.map((member) => (
          <div
            key={member.id}
            className="group flex flex-col justify-between overflow-hidden rounded-2xl md:rounded-3xl border border-[#E5E0D8] bg-white transition-all duration-300 hover:border-[#BA9D6A]/60 hover:shadow-xl dark:border-white/[0.08] dark:bg-[#141619] shadow-xs"
          >
            {/* Clean Portrait Photo */}
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#181A1C]">
              <Image
                src={member.img}
                alt={`${member.name} - ${member.role}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Subtle Bottom Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
            </div>

            {/* Card Content Body: Clean, Editorial & Balanced */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2.5">
                {/* Stylist Name & Role Header */}
                <div>
                  <h3 className="font-serif-title text-xl sm:text-[22px] font-medium text-[#181A1C] dark:text-white leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-[10.5px] uppercase tracking-wider font-semibold text-[#8C734B] dark:text-[#BA9D6A] pt-1">
                    {member.role}
                  </p>
                </div>

                {/* Speciality Description */}
                <p className="text-xs leading-relaxed text-[#555047] dark:text-[#A6A29A]">
                  {member.speciality}
                </p>

                {/* Signature Skills Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {member.skills?.slice(0, 2).map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 rounded-full border border-[#E5E0D8] bg-[#FAF8F5] px-2.5 py-1 text-[10px] font-medium text-[#555047] dark:border-white/10 dark:bg-white/[0.04] dark:text-white/80"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#BA9D6A]" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Book Chair Action */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => handleOpenBooking(member.name, member.id === 'firoz-khan' ? 'Non-Surgical Hair Patch System' : 'Haircut & Styling')}
                  className="gold-gradient inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-2.5 text-[11px] font-bold uppercase tracking-wider text-[#0E1012] shadow-xs hover:brightness-105 transition active:scale-95 cursor-pointer"
                >
                  <Calendar size={13} />
                  <span>Book with {member.name.split(' ')[0]}</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Appointment Modal */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={(e) => e.target === e.currentTarget && setIsModalOpen(false)}
          className="animate-in fade-in fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/85 p-4 backdrop-blur-xl sm:p-6"
        >
          <div className="relative w-full max-w-2xl">
            <AppointmentModal
              defaultService={selectedService}
              defaultStylist={selectedStylist}
              onClose={() => setIsModalOpen(false)}
            />
          </div>
        </div>
      )}
    </section>
  );
}
