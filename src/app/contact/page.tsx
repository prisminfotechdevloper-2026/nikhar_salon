'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Sparkles } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);

    // Direct WhatsApp send
    const text = encodeURIComponent(
      `*🌟 NEW INQUIRY - NIKHAR SALON KOTA 🌟*\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📱 *Phone:* ${formData.phone}\n` +
      `📧 *Email:* ${formData.email || 'N/A'}\n` +
      `✂️ *Service Interested:* ${formData.service || 'General Inquiry'}\n` +
      `💬 *Message:* ${formData.message}\n\n` +
      `_Sent via Nikhar Salon Contact Page_`
    );
    window.open(`https://wa.me/918239239249?text=${text}`, '_blank');
  };

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
        <div className="lg:col-span-7 bg-[#141619] border border-white/[0.09] p-6 sm:p-10 rounded-2xl md:rounded-3xl shadow-xl">
          <div className="mb-6 space-y-1">
            <div className="inline-flex items-center gap-2">
              <div className="h-3 w-[2px] bg-[#BA9D6A]" />
              <span className="text-[10.5px] uppercase tracking-[0.2em] text-[#BA9D6A] font-semibold">
                SEND AN INQUIRY
              </span>
            </div>
            <h2 className="font-serif-title text-2xl sm:text-3xl text-white">We&apos;d Love to Hear From You</h2>
          </div>

          {sent ? (
            <div className="text-center py-12 space-y-3">
              <div className="h-14 w-14 rounded-full bg-[#BA9D6A]/20 text-[#BA9D6A] flex items-center justify-center mx-auto">
                <Sparkles size={28} />
              </div>
              <h4 className="font-serif-title text-2xl text-white">Inquiry Transmitted!</h4>
              <p className="text-xs sm:text-sm text-[#A6A29A] max-w-sm mx-auto">
                Thank you! Your message has been prepared for our salon WhatsApp concierge.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => setSent(false)}
                  className="border border-white/20 text-xs uppercase tracking-wider px-6 py-2.5 rounded-full text-white hover:border-[#BA9D6A]"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] uppercase text-[#A6A29A] tracking-wider block mb-1 font-semibold">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ishan Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#181A1C] border border-white/[0.1] rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-[#BA9D6A] text-white"
                  />
                </div>

                <div>
                  <label className="text-[11px] uppercase text-[#A6A29A] tracking-wider block mb-1 font-semibold">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 8239239249"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#181A1C] border border-white/[0.1] rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-[#BA9D6A] text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] uppercase text-[#A6A29A] tracking-wider block mb-1 font-semibold">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#181A1C] border border-white/[0.1] rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-[#BA9D6A] text-white"
                  />
                </div>

                <div>
                  <label className="text-[11px] uppercase text-[#A6A29A] tracking-wider block mb-1 font-semibold">
                    Service of Interest
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-[#181A1C] border border-white/[0.1] rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-[#BA9D6A] text-white cursor-pointer"
                  >
                    <option value="">Select a service...</option>
                    <option value="Haircut & Styling">Haircut & Styling</option>
                    <option value="Beard Sculpting">Beard Sculpting</option>
                    <option value="Facial Care">Facial Care</option>
                    <option value="Hair Spa & Keratin">Hair Spa & Keratin</option>
                    <option value="VIP Royal Combo">VIP Royal Combo</option>
                    <option value="Groom Wedding Package">Groom Wedding Package</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[11px] uppercase text-[#A6A29A] tracking-wider block mb-1 font-semibold">
                  Your Message or Special Request *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us about your requirements, wedding date, or preferred stylist..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#181A1C] border border-white/[0.1] rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-[#BA9D6A] text-white resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full gold-gradient text-[#0E1012] py-3.5 rounded-xl font-bold uppercase tracking-[0.12em] text-xs flex items-center justify-center gap-2 shadow-lg shadow-[#BA9D6A]/20 hover:brightness-105 transition"
              >
                <Send size={15} /> Send Message via WhatsApp
              </button>
            </form>
          )}
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