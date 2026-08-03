import React from 'react';
import { TESTIMONIALS } from '../data/agencyData';
import { Star, MapPin, Quote, CheckCircle2 } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-slate-900 transition-colors relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#C8102E]">
            TRUSTED BY LEADERS
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] dark:text-white tracking-tight">
            Client Testimonials
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-300">
            Read what UK executives and founders say about partnering with Burst Digital.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#F7F9FC] dark:bg-slate-800/80 rounded-3xl p-8 border border-gray-200/80 dark:border-slate-700/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
            >
              {/* Quote Icon Background watermark */}
              <Quote className="w-16 h-16 text-blue-100 dark:text-slate-700/50 absolute top-6 right-6 pointer-events-none" />

              <div className="space-y-4 relative z-10">
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-2 text-xs font-bold text-gray-500 dark:text-gray-400">5.0 / 5.0</span>
                </div>

                {/* Content */}
                <p className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed italic">
                  &ldquo;{t.content}&rdquo;
                </p>
              </div>

              {/* Client Profile */}
              <div className="pt-6 mt-6 border-t border-gray-200/80 dark:border-slate-700/80 flex items-center gap-4 relative z-10">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#012169]"
                />
                <div>
                  <h4 className="font-heading text-base font-bold text-gray-900 dark:text-white">
                    {t.name}
                  </h4>
                  <p className="text-xs text-[#C8102E] font-semibold">
                    {t.role}, {t.company}
                  </p>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-[#012169]" />
                    {t.location} • <span className="text-emerald-600 font-bold">Verified Client</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
