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
    budget: '£3,000 - £10,000',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
              Our UK team at 100 Bishopsgate, London has received your specs. A senior project manager will email you a tailored estimate within 2 business hours.
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
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="font-bold text-gray-700 dark:text-gray-300 uppercase block mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-50 dark:bg-slate-800 text-gray-900 dark:text-white rounded-xl px-3.5 py-2.5 border border-gray-200 dark:border-slate-700 focus:outline-none focus:border-[#012169]"
                />
              </div>

              <div>
                <label className="font-bold text-gray-700 dark:text-gray-300 uppercase block mb-1">Business Email *</label>
                <input
                  type="email"
                  required
                  placeholder="sarah@company.co.uk"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-50 dark:bg-slate-800 text-gray-900 dark:text-white rounded-xl px-3.5 py-2.5 border border-gray-200 dark:border-slate-700 focus:outline-none focus:border-[#012169]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="font-bold text-gray-700 dark:text-gray-300 uppercase block mb-1">UK Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+44 20 7946 0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-slate-50 dark:bg-slate-800 text-gray-900 dark:text-white rounded-xl px-3.5 py-2.5 border border-gray-200 dark:border-slate-700 focus:outline-none focus:border-[#012169]"
                />
              </div>

              <div>
                <label className="font-bold text-gray-700 dark:text-gray-300 uppercase block mb-1">Service Division *</label>
                <select
                  value={formData.serviceRequired}
                  onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                  className="w-full bg-slate-50 dark:bg-slate-800 text-gray-900 dark:text-white rounded-xl px-3.5 py-2.5 border border-gray-200 dark:border-slate-700 focus:outline-none focus:border-[#012169]"
                >
                  {SERVICE_CATEGORIES.map(c => (
                    <option key={c.id} value={c.title}>{c.title}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="font-bold text-gray-700 dark:text-gray-300 uppercase block mb-1">Target Budget Range *</label>
              <select
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full bg-slate-50 dark:bg-slate-800 text-gray-900 dark:text-white rounded-xl px-3.5 py-2.5 border border-gray-200 dark:border-slate-700 focus:outline-none focus:border-[#012169]"
              >
                <option value="Under £3,000">Under £3,000 (Startup Starter)</option>
                <option value="£3,000 - £10,000">£3,000 - £10,000 (Professional Growth)</option>
                <option value="£10,000 - £25,000">£10,000 - £25,000 (Custom Engineering)</option>
                <option value="£25,000+">£25,000+ (Enterprise Transformation)</option>
              </select>
            </div>

            <div>
              <label className="font-bold text-gray-700 dark:text-gray-300 uppercase block mb-1">Project Details / Goals *</label>
              <textarea
                rows={3}
                required
                placeholder="Share your goals, timeline or tech stack preferences..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-slate-50 dark:bg-slate-800 text-gray-900 dark:text-white rounded-xl p-3 border border-gray-200 dark:border-slate-700 focus:outline-none focus:border-[#012169]"
              ></textarea>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-[#012169] hover:bg-blue-900 text-white font-bold py-3.5 rounded-xl uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                Submit Quote Request
                <Send className="w-4 h-4 text-[#C8102E]" />
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
