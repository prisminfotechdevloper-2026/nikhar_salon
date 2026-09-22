import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import { MessageCircle, ShieldCheck } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#0E1012] text-[#181A1C] dark:text-[#FAF8F5] transition-colors duration-300">
      {/* Ultra-Luxury Contact Hero matching UI Design */}
      <ContactHero />

      {/* Main Content Area: Message Form + VIP Concierge Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-24 space-y-16 sm:space-y-20 font-sans">
        
        {/* Form + Concierge Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Direct Inquiries & VIP Hospitality Assurance (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <div className="h-3 w-[2px] bg-[#BA9D6A]" />
                <span className="text-[10.5px] uppercase tracking-[0.25em] text-[#8C734B] dark:text-[#BA9D6A] font-semibold font-sans">
                  DIRECT CONCIERGE
                </span>
              </div>
              <h2 className="font-serif-title text-3xl sm:text-4xl text-[#181A1C] dark:text-white">
                Send Us A Message
              </h2>
              <p className="text-xs sm:text-sm text-[#555047] dark:text-[#A6A29A] mt-1.5 leading-relaxed">
                Fill out the reservation query form and our master salon director will get back to you immediately via WhatsApp.
              </p>
            </div>

            <div className="space-y-4">
              {/* WhatsApp Direct Action Card */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#141619] border border-[#E5E0D8] dark:border-white/[0.08] space-y-3 shadow-xs hover:border-[#BA9D6A]/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-[#BA9D6A]/10 text-[#8C734B] dark:text-[#BA9D6A] rounded-xl border border-[#BA9D6A]/30">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-[#181A1C] dark:text-white">Instant WhatsApp Connect</h4>
                    <p className="text-[11px] text-[#7D776D] dark:text-[#A6A29A]">Fastest response time for appointments</p>
                  </div>
                </div>
                <a
                  href="https://wa.me/919784711323?text=Hello%20Nikhar%20Salon!%20I%20have%20an%20inquiry."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 gold-gradient text-[#0E1012] font-bold text-xs uppercase tracking-wider py-3 rounded-xl shadow-xs hover:brightness-105 transition cursor-pointer"
                >
                  <MessageCircle size={15} /> Chat on WhatsApp (+91 97847 11323)
                </a>
              </div>

              {/* VIP Salon Assurance Box */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#F5F2ED] dark:bg-[#181A1C] border border-[#E5E0D8] dark:border-white/[0.08] space-y-3.5">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={18} className="text-[#8C734B] dark:text-[#BA9D6A]" />
                  <span className="text-xs uppercase font-bold tracking-wider text-[#181A1C] dark:text-white">
                    Nikhar VIP Standards
                  </span>
                </div>
                <ul className="text-xs text-[#555047] dark:text-[#A6A29A] space-y-2 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8C734B] dark:text-[#BA9D6A] font-bold">•</span>
                    <span>100% Medical-grade sanitized tools & single-use disposables.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8C734B] dark:text-[#BA9D6A] font-bold">•</span>
                    <span>Private Hair Patch Consultation suite with Firoz Khan.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8C734B] dark:text-[#BA9D6A] font-bold">•</span>
                    <span>Complimentary signature beverage & premium VIP lounge seating.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>

        {/* Google Map & Studio Directions Section */}
        <section className="bg-white dark:bg-[#141619] border border-[#E5E0D8] dark:border-white/[0.08] rounded-2xl md:rounded-3xl p-6 sm:p-8 space-y-4 shadow-xs transition-colors">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div>
              <div className="inline-flex items-center gap-2">
                <div className="h-3 w-[2px] bg-[#BA9D6A]" />
                <span className="text-[10.5px] uppercase tracking-[0.25em] text-[#8C734B] dark:text-[#BA9D6A] font-semibold font-sans">
                  SALON LOCATION & DIRECTIONS
                </span>
              </div>
              <h3 className="font-serif-title text-2xl sm:text-3xl text-[#181A1C] dark:text-white">
                Visit Us in Vigyan Nagar, Kota
              </h3>
            </div>
            <a
              href="https://maps.google.com/?q=Nikhar+Salon+Vigyan+Nagar+Kota"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold text-[#8C734B] dark:text-[#BA9D6A] hover:underline"
            >
              Open in Google Maps App →
            </a>
          </div>

          <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-[#E5E0D8] dark:border-white/[0.08]">
            <iframe
              title="Nikhar Salon Location Vigyan Nagar Kota"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14441.576885361254!2d75.8366472!3d25.1328965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f84d6a695b263%3A0xe5433a0b59b3c37d!2sVigyan%20Nagar%2C%20Kota%2C%20Rajasthan%20324005!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              className="border-0 w-full h-full dark:invert-[0.9] dark:hue-rotate-180"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              sandbox="allow-scripts allow-popups"
            />
          </div>
        </section>
      </div>
    </div>
  );
}