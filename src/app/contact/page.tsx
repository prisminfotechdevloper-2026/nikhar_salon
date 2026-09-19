import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import ContactForm from '@/components/contact/ContactForm';

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto space-y-16 sm:space-y-20 font-sans">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2">
          <div className="h-3 w-[2px] bg-[#BA9D6A]" />
          <span className="text-[10.5px] uppercase tracking-[0.25em] text-[#BA9D6A] font-semibold">
            GET IN TOUCH
          </span>
          <div className="h-3 w-[2px] bg-[#BA9D6A]" />
        </div>
        <h1 className="font-serif-title text-4xl sm:text-5xl lg:text-6xl font-normal text-white">
          Contact Nikhar Salon Kota
        </h1>
        <p className="text-[#A6A29A] text-xs sm:text-sm md:text-base leading-relaxed">
          Have a question about our signature hair and beard treatments, VIP packages, or wish to make an appointment? Our concierge team is ready to assist you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Contact Info Cards (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <div className="h-3 w-[2px] bg-[#BA9D6A]" />
              <span className="text-[10.5px] uppercase tracking-[0.2em] text-[#BA9D6A] font-semibold">
                DIRECT CHANNELS
              </span>
            </div>
            <h2 className="font-serif-title text-3xl text-white">Let&apos;s Connect</h2>
            <p className="text-xs sm:text-sm text-[#A6A29A] mt-1">
              Reach out directly by phone, WhatsApp, or visit our studio in Kota.
            </p>
          </div>

          <div className="space-y-4">
            {/* Phone & WhatsApp Card */}
            <div className="flex items-start gap-4 bg-[#141619] p-5 sm:p-6 rounded-2xl border border-white/[0.08] hover:border-[#BA9D6A]/50 transition">
              <div className="p-3 bg-[#BA9D6A]/10 text-[#BA9D6A] rounded-xl shrink-0 border border-[#BA9D6A]/30">
                <Phone size={22} />
              </div>
              <div className="space-y-1">
                <h4 className="text-[11px] uppercase text-[#A6A29A] font-semibold tracking-wider">Phone & WhatsApp</h4>
                <a href="tel:+918239239249" className="text-white font-serif-title text-xl block hover:text-[#BA9D6A] transition">
                  +91 82392 39249
                </a>
                <a
                  href="https://wa.me/918239239249"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-[#BA9D6A] inline-flex items-center gap-1.5 font-semibold hover:underline pt-0.5"
                >
                  <MessageCircle size={14} /> Open Direct WhatsApp
                </a>
              </div>
            </div>

            {/* Email Address */}
            <div className="flex items-start gap-4 bg-[#141619] p-5 sm:p-6 rounded-2xl border border-white/[0.08] hover:border-[#BA9D6A]/50 transition">
              <div className="p-3 bg-[#BA9D6A]/10 text-[#BA9D6A] rounded-xl shrink-0 border border-[#BA9D6A]/30">
                <Mail size={22} />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-[11px] uppercase text-[#A6A29A] font-semibold tracking-wider">Email Concierge</h4>
                <p className="text-white font-medium text-sm break-all">
                  contact.nikharsalon@gmail.com
                </p>
                <p className="text-[11px] text-[#A6A29A]">We respond within 24 hours</p>
              </div>
            </div>

            {/* Location Card */}
            <div className="flex items-start gap-4 bg-[#141619] p-5 sm:p-6 rounded-2xl border border-white/[0.08] hover:border-[#BA9D6A]/50 transition">
              <div className="p-3 bg-[#BA9D6A]/10 text-[#BA9D6A] rounded-xl shrink-0 border border-[#BA9D6A]/30">
                <MapPin size={22} />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-[11px] uppercase text-[#A6A29A] font-semibold tracking-wider">Studio Location</h4>
                <p className="text-white font-medium text-sm">Shop No. 12, 1st Floor, City Mall,</p>
                <p className="text-xs text-[#A6A29A]">Kota, Rajasthan - 324001</p>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="flex items-start gap-4 bg-[#141619] p-5 sm:p-6 rounded-2xl border border-white/[0.08] hover:border-[#BA9D6A]/50 transition">
              <div className="p-3 bg-[#BA9D6A]/10 text-[#BA9D6A] rounded-xl shrink-0 border border-[#BA9D6A]/30">
                <Clock size={22} />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-[11px] uppercase text-[#A6A29A] font-semibold tracking-wider">Salon Hours</h4>
                <p className="text-white font-medium text-sm">Mon - Sun: 9:00 AM – 10:00 PM</p>
                <p className="text-[11px] text-[#BA9D6A]">Open All 7 Days a Week</p>
              </div>
            </div>
          </div>
        </div>

        {/* Message Form (7 cols) */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>

      {/* Google Map Section */}
      <section className="bg-[#141619] border border-white/[0.08] rounded-2xl md:rounded-3xl p-6 sm:p-8 space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <div>
            <div className="inline-flex items-center gap-2">
              <div className="h-3 w-[2px] bg-[#BA9D6A]" />
              <span className="text-[10.5px] uppercase tracking-[0.2em] text-[#BA9D6A] font-semibold">
                SALON LOCATION
              </span>
            </div>
            <h3 className="font-serif-title text-2xl text-white">Visit Us in Kota, Rajasthan</h3>
          </div>
          <span className="text-xs text-[#A6A29A]">Shop No. 12, 1st Floor, City Mall</span>
        </div>

        <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-white/[0.08]">
          <iframe
            title="Nikhar Salon Location Kota"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115545.98147573426!2d75.7663242!3d25.1764654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f849f2b874533%3A0x89988a8f895c2e3!2sKota%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
}