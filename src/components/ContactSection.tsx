import React, { useState } from 'react';
import { AGENCY_INFO, SERVICE_CATEGORIES } from '../data/agencyData';
import { Mail, Phone, MessageSquare, MapPin, Send, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceRequired: SERVICE_CATEGORIES[0].title,
    budget: '£3,000 - £10,000',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900 transition-colors relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#C8102E]">
            START YOUR PROJECT
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] dark:text-white tracking-tight">
            Get In Touch With Us
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-300">
            Tell us about your project or request a free, non-binding quote. We respond within 2 business hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Details & Info Card */}
          <div className="lg:col-span-5 bg-[#012169] text-white rounded-3xl p-8 lg:p-10 space-y-8 shadow-2xl relative overflow-hidden">
            <div className="space-y-3">
              <span className="text-xs font-bold text-red-400 uppercase tracking-widest">
                UNITED KINGDOM HEADQUARTERS
              </span>
              <h3 className="font-heading text-2xl font-black text-white">
                Burst Digital Ltd
              </h3>
              <p className="text-xs text-blue-200 leading-relaxed">
                Our central London team is ready to consult on your digital strategy, web application, branding or accounting requirements.
              </p>
            </div>

            <div className="space-y-6 pt-4 border-t border-blue-900">
              
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-900/80 text-red-400 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] text-blue-300 uppercase font-bold block">Address</span>
                  <p className="text-sm font-medium text-white">{AGENCY_INFO.address}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-900/80 text-blue-300 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] text-blue-300 uppercase font-bold block">Phone</span>
                  <a href={`tel:${AGENCY_INFO.phone}`} className="text-sm font-bold text-white hover:text-red-300 transition-colors">
                    {AGENCY_INFO.phone}
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-900/80 text-emerald-400 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] text-blue-300 uppercase font-bold block">WhatsApp Support</span>
                  <a href={`https://wa.me/${AGENCY_INFO.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-emerald-300 hover:underline">
                    {AGENCY_INFO.whatsapp}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-900/80 text-amber-400 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] text-blue-300 uppercase font-bold block">Email</span>
                  <a href={`mailto:${AGENCY_INFO.email}`} className="text-sm font-bold text-white hover:text-red-300 transition-colors">
                    {AGENCY_INFO.email}
                  </a>
                </div>
              </div>

            </div>

            {/* Response SLA Badge */}
            <div className="bg-blue-950/80 rounded-2xl p-4 border border-blue-800 flex items-center gap-3">
              <Clock className="w-5 h-5 text-amber-400 flex-shrink-0" />
              <p className="text-xs text-blue-200">
                <strong className="text-white">UK Response SLA:</strong> Average response time is under 120 minutes during London business hours.
              </p>
            </div>
          </div>

          {/* Form Area */}
          <div className="lg:col-span-7 bg-[#F7F9FC] dark:bg-slate-800/80 rounded-3xl p-8 lg:p-10 border border-gray-200/80 dark:border-slate-700/80 shadow-md">
            {submitted ? (
              <div className="text-center py-12 space-y-4 animate-in zoom-in-95 duration-300">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-2xl font-black text-gray-900 dark:text-white">
                  Enquiry Received!
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 max-w-md mx-auto">
                  Thank you for reaching out to Burst Digital. A dedicated UK senior project director has received your requirements and will get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-[#012169] text-white px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider mt-4"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase">Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white dark:bg-slate-900 text-gray-900 dark:text-white text-xs rounded-xl px-4 py-3 border border-gray-200 dark:border-slate-700 focus:outline-none focus:border-[#012169]"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase">Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="john@company.co.uk"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white dark:bg-slate-900 text-gray-900 dark:text-white text-xs rounded-xl px-4 py-3 border border-gray-200 dark:border-slate-700 focus:outline-none focus:border-[#012169]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase">Phone *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+44 7123 456789"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white dark:bg-slate-900 text-gray-900 dark:text-white text-xs rounded-xl px-4 py-3 border border-gray-200 dark:border-slate-700 focus:outline-none focus:border-[#012169]"
                    />
                  </div>

                  {/* Company */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase">Company</label>
                    <input
                      type="text"
                      placeholder="Acme UK Ltd"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-white dark:bg-slate-900 text-gray-900 dark:text-white text-xs rounded-xl px-4 py-3 border border-gray-200 dark:border-slate-700 focus:outline-none focus:border-[#012169]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Service Required */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase">Service Required *</label>
                    <select
                      value={formData.serviceRequired}
                      onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                      className="w-full bg-white dark:bg-slate-900 text-gray-900 dark:text-white text-xs rounded-xl px-4 py-3 border border-gray-200 dark:border-slate-700 focus:outline-none focus:border-[#012169]"
                    >
                      {SERVICE_CATEGORIES.map(c => (
                        <option key={c.id} value={c.title}>{c.title}</option>
                      ))}
                    </select>
                  </div>

                  {/* Budget */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase">Estimated Budget *</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-white dark:bg-slate-900 text-gray-900 dark:text-white text-xs rounded-xl px-4 py-3 border border-gray-200 dark:border-slate-700 focus:outline-none focus:border-[#012169]"
                    >
                      <option value="Under £3,000">Under £3,000</option>
                      <option value="£3,000 - £10,000">£3,000 - £10,000</option>
                      <option value="£10,000 - £25,000">£10,000 - £25,000</option>
                      <option value="£25,000+">£25,000+ Enterprise</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase">Project Message *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Briefly describe your objectives, timeframe, or specific technology requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white dark:bg-slate-900 text-gray-900 dark:text-white text-xs rounded-xl p-4 border border-gray-200 dark:border-slate-700 focus:outline-none focus:border-[#012169]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#012169] hover:bg-blue-900 text-white font-bold py-4 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  Send Project Enquiry
                  <Send className="w-4 h-4 text-[#C8102E]" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
