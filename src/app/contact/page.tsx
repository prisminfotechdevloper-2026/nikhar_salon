'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

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
      `*New Inquiry from Website - Nikhar Salon*\n\n` +
      `👤 Name: ${formData.name}\n` +
      `📞 Phone: ${formData.phone}\n` +
      `📧 Email: ${formData.email || 'N/A'}\n` +
      `✂️ Service: ${formData.service || 'Not specified'}\n` +
      `💬 Message: ${formData.message}`
    );
    window.open(`https://wa.me/918239239249?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen py-16 px-6 max-w-7xl mx-auto space-y-20">
      {/* Header */}
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-gold font-semibold mb-2">GET IN TOUCH</p>
        <h1 className="text-4xl md:text-5xl font-serif-luxury font-bold text-white">Contact Nikhar Salon</h1>
        <p className="text-zinc-400 text-sm mt-3 max-w-md mx-auto">
          Have a question, need an appointment, or want to know more about our services? We are always here to help.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Contact Info Column */}
        <div className="space-y-8">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">CONTACT INFORMATION</p>
            <h2 className="text-3xl font-serif-luxury font-bold text-white mt-1">Let's Talk</h2>
            <p className="text-zinc-400 text-sm mt-2">
              Reach out to us through any of the following methods. We are ready to assist you.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4 bg-[#121214] p-5 rounded-xl border border-zinc-800">
              <div className="p-3 bg-gold/10 text-gold rounded-lg shrink-0">
                <Phone size={22} />
              </div>
              <div>
                <h4 className="text-xs uppercase text-zinc-400 font-semibold tracking-wider">Phone & WhatsApp</h4>
                <p className="text-white font-medium text-base mt-1">+91 8239239249</p>
                <a
                  href="https://wa.me/918239239249"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-gold inline-flex items-center gap-1 mt-1 hover:underline"
                >
                  <MessageCircle size={14} /> Direct WhatsApp Chat
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-[#121214] p-5 rounded-xl border border-zinc-800">
              <div className="p-3 bg-gold/10 text-gold rounded-lg shrink-0">
                <Mail size={22} />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-xs uppercase text-zinc-400 font-semibold tracking-wider">Email Address</h4>
                <p className="text-white font-medium text-sm sm:text-base mt-1 break-all">
                  contact.prisminfotech@gmail.com
                </p>
                <p className="text-xs text-zinc-500 mt-0.5">We reply within 24 hours</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-[#121214] p-5 rounded-xl border border-zinc-800">
              <div className="p-3 bg-gold/10 text-gold rounded-lg shrink-0">
                <MapPin size={22} />
              </div>
              <div>
                <h4 className="text-xs uppercase text-zinc-400 font-semibold tracking-wider">Salon Location</h4>
                <p className="text-white font-medium text-sm mt-1">Shop No. 12, 1st Floor, City Mall,</p>
                <p className="text-xs text-zinc-400">Kota, Rajasthan - 324001</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-[#121214] p-5 rounded-xl border border-zinc-800">
              <div className="p-3 bg-gold/10 text-gold rounded-lg shrink-0">
                <Clock size={22} />
              </div>
              <div>
                <h4 className="text-xs uppercase text-zinc-400 font-semibold tracking-wider">Working Hours</h4>
                <p className="text-white font-medium text-sm mt-1">Mon - Sun: 9:00 AM - 10:00 PM</p>
                <p className="text-xs text-zinc-500">Open all 7 days</p>
              </div>
            </div>
          </div>
        </div>

        {/* Message Form */}
        <div className="bg-[#121214] border border-zinc-800 p-8 rounded-2xl">
          <p className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">SEND US A MESSAGE</p>
          <h2 className="text-2xl font-serif-luxury font-bold text-white mt-1 mb-6">We'd Love to Hear from You</h2>

          {sent ? (
            <div className="text-center py-10">
              <h4 className="text-xl font-serif-luxury text-gold font-bold">Message Sent!</h4>
              <p className="text-zinc-400 text-xs mt-2">Thank you, we have received your inquiry and will connect with you shortly.</p>
              <button
                onClick={() => setSent(false)}
                className="mt-6 border border-zinc-700 text-xs uppercase px-5 py-2 rounded-full text-zinc-300"
              >
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs uppercase text-zinc-400 tracking-wider block mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Ishaan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#18181b] border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold text-white"
                />
              </div>

              <div>
                <label className="text-xs uppercase text-zinc-400 tracking-wider block mb-1">Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 8239239249"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#18181b] border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold text-white"
                />
              </div>

              <div>
                <label className="text-xs uppercase text-zinc-400 tracking-wider block mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="contact.prisminfotech@gmail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#18181b] border border-zinc-800 rounded-xl px-3.5 py-3 text-xs sm:text-sm placeholder:text-[11px] sm:placeholder:text-sm placeholder:text-zinc-500 focus:outline-none focus:border-gold text-white"
                />
              </div>

              <div>
                <label className="text-xs uppercase text-zinc-400 tracking-wider block mb-1">Service Interested In</label>
                <div className="relative">
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-[#18181b] border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold text-white appearance-none cursor-pointer pr-10"
                  >
                    <option value="" disabled className="bg-[#18181b] text-zinc-500">
                      Select a service...
                    </option>
                    <option value="Haircut & Styling" className="bg-[#18181b] text-white">Haircut & Styling</option>
                    <option value="Beard Grooming" className="bg-[#18181b] text-white">Beard Grooming</option>
                    <option value="Facial Care" className="bg-[#18181b] text-white">Facial Care</option>
                    <option value="Hair Treatment" className="bg-[#18181b] text-white">Hair Treatment</option>
                    <option value="Hot Towel Shave" className="bg-[#18181b] text-white">Hot Towel Shave</option>
                    <option value="Complete Package" className="bg-[#18181b] text-white">Complete Package</option>
                  </select>

                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-zinc-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label className="text-xs uppercase text-zinc-400 tracking-wider block mb-1">Your Message *</label>
                <textarea
                  rows={4}
                  required
                  placeholder="How can we assist you?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#18181b] border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold text-white resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full gold-gradient text-black py-3.5 rounded-xl font-semibold uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-lg shadow-gold/20 hover:opacity-95 transition"
              >
                <Send size={15} /> Send Message via WhatsApp
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Google Map Section */}
      <section className="bg-[#121214] border border-zinc-800 rounded-2xl p-6">
        <div className="mb-4">
          <p className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">FIND US</p>
          <h3 className="text-2xl font-serif-luxury font-bold text-white">Our Location in Kota</h3>
        </div>
        <div className="w-full h-80 rounded-xl overflow-hidden border border-zinc-800">
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