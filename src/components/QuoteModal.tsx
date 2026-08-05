import React, { useState } from 'react';
import { SERVICE_CATEGORIES } from '../data/agencyData';
import { X, Send, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceRequired: SERVICE_CATEGORIES[0].title,
    budget: '£100 - £500',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData_submit = new FormData();
      formData_submit.append('name', formData.name);
      formData_submit.append('email', formData.email);
      formData_submit.append('phone', formData.phone);
      formData_submit.append('company', formData.company);
      formData_submit.append('service', formData.serviceRequired);
      formData_submit.append('budget', formData.budget);
      formData_submit.append('message', formData.message);
      formData_submit.append('_captcha', 'false');
      formData_submit.append('_next', 'https://theburstdigital.co.uk');

      await fetch('https://formsubmit.co/Ross@theburstdigital.co.uk', {
        method: 'POST',
        body: formData_submit,
        redirect: 'follow'
      });

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        serviceRequired: SERVICE_CATEGORIES[0].title,
        budget: '£100 - £500',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative border border-gray-200 dark:border-slate-800 space-y-6 max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-slate-800">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#C8102E] flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              100% FREE NO-OBLIGATION QUOTE
            </span>
            <h3 className="font-heading text-2xl font-black text-[#012169] dark:text-white mt-0.5">
              Request Your Project Quote
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="text-center py-8 space-y-4 animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-heading text-2xl font-black text-gray-900 dark:text-white">
              Quote Request Sent!
            </h4>
            <p className="text-xs text-gray-600 dark:text-gray-300 max-w-sm mx-auto leading-relaxed">
              Our UK team in Fleet, Hampshire has received your specs. A senior project manager will email you a tailored estimate within 2 business hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="bg-[#012169] text-white px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider"
            >
              Done & Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase">Name *</label>
                <input
                  type="text"
                  required
                  placeholder="John Smith"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white dark:bg-slate-900 text-gray-900 dark:text-white text-base rounded-xl px-4 py-3 border border-gray-200 dark:border-slate-700 focus:outline-none focus:border-[#012169] focus:ring-2 focus:ring-[#012169]/30 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase">Email *</label>
                <input
                  type="email"
                  required
                  placeholder="john@company.co.uk"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white dark:bg-slate-900 text-gray-900 dark:text-white text-base rounded-xl px-4 py-3 border border-gray-200 dark:border-slate-700 focus:outline-none focus:border-[#012169] focus:ring-2 focus:ring-[#012169]/30 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase">Phone *</label>
                <input
                  type="tel"
                  required
                  placeholder="+44 7123 456789"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-white dark:bg-slate-900 text-gray-900 dark:text-white text-base rounded-xl px-4 py-3 border border-gray-200 dark:border-slate-700 focus:outline-none focus:border-[#012169] focus:ring-2 focus:ring-[#012169]/30 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase">Service *</label>
                <select
                  value={formData.serviceRequired}
                  onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                  className="w-full bg-white dark:bg-slate-900 text-gray-900 dark:text-white text-base rounded-xl px-4 py-3 border border-gray-200 dark:border-slate-700 focus:outline-none focus:border-[#012169] focus:ring-2 focus:ring-[#012169]/30 transition-colors"
                >
                  {SERVICE_CATEGORIES.map(c => (
                    <option key={c.id} value={c.title}>{c.title}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase">Estimated Budget *</label>
              <select
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full bg-white dark:bg-slate-900 text-gray-900 dark:text-white text-base rounded-xl px-4 py-3 border border-gray-200 dark:border-slate-700 focus:outline-none focus:border-[#012169] focus:ring-2 focus:ring-[#012169]/30 transition-colors"
              >
                <option value="£100 - £500">£100 - £500</option>
                <option value="£500 - £1,000">£500 - £1,000</option>
                <option value="£1,000 - £3,000">£1,000 - £3,000</option>
                <option value="£3,000 - £10,000">£3,000 - £10,000</option>
                <option value="£10,000 - £25,000">£10,000 - £25,000</option>
                <option value="£25,000+">£25,000+ Enterprise</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase">Project Message *</label>
              <textarea
                rows={4}
                required
                placeholder="Briefly describe your objectives, timeframe, or specific technology requirements..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-white dark:bg-slate-900 text-gray-900 dark:text-white text-base rounded-xl p-4 border border-gray-200 dark:border-slate-700 focus:outline-none focus:border-[#012169] focus:ring-2 focus:ring-[#012169]/30 transition-colors"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#012169] hover:bg-blue-900 disabled:bg-gray-400 text-white font-bold py-4 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              {loading ? 'Sending...' : 'Submit Quote Request'}
              <Send className="w-4 h-4 text-[#C8102E]" />
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
