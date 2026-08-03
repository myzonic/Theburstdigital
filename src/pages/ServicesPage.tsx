import React, { useState } from 'react';
import { PageRoute } from '../types';
import { SERVICE_CATEGORIES } from '../data/agencyData';
import { Globe, ArrowRight, CheckCircle2, Sparkles, Search } from 'lucide-react';

interface ServicesPageProps {
  onSelectCategory: (slug: string) => void;
  onNavigate: (route: PageRoute) => void;
  onOpenQuoteModal: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onSelectCategory, onNavigate, onOpenQuoteModal }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="py-16 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#012169] dark:text-blue-300">
            <span>🇬🇧</span>
            <span>UK FULL-SERVICE DIGITAL DIVISIONS</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-black text-[#111827] dark:text-white tracking-tight">
            Our Digital Services & Capabilities
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-300">
            End-to-end digital expertise under one roof. Every division is powered by senior UK specialists.
          </p>

          {/* Search Bar */}
          <div className="pt-2 max-w-md mx-auto relative">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search all services (e.g. Next.js, SEO, Bookkeeping, App)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white dark:bg-slate-900 text-gray-900 dark:text-white text-xs rounded-xl pl-10 pr-4 py-3 border border-gray-200 dark:border-slate-800 focus:outline-none focus:border-[#012169]"
            />
          </div>
        </div>

        {/* Divisions List */}
        <div className="space-y-12">
          {SERVICE_CATEGORIES.map((cat) => {
            const matchingItems = cat.items.filter(item => 
              item.toLowerCase().includes(searchTerm.toLowerCase())
            );

            if (searchTerm && matchingItems.length === 0) return null;

            return (
              <div key={cat.id} className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-gray-200/80 dark:border-slate-800 shadow-md space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-100 dark:border-slate-800">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-[#C8102E] uppercase tracking-wider block">Division #{cat.id}</span>
                    <h2 className="font-heading text-2xl font-black text-[#012169] dark:text-white">
                      {cat.title}
                    </h2>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{cat.shortDesc}</p>
                  </div>

                  <button
                    onClick={() => {
                      onSelectCategory(cat.slug);
                      onNavigate('service-detail');
                    }}
                    className="bg-[#012169] hover:bg-blue-900 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-colors flex items-center gap-1.5 self-start sm:self-auto"
                  >
                    View Division Detail
                    <ArrowRight className="w-3.5 h-3.5 text-[#C8102E]" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {matchingItems.map((item, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        onSelectCategory(cat.slug);
                        onNavigate('service-detail');
                      }}
                      className="bg-slate-50 dark:bg-slate-800/60 p-3.5 rounded-xl border border-gray-200/80 dark:border-slate-700/80 hover:border-[#012169] dark:hover:border-blue-400 transition-colors cursor-pointer flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#C8102E] flex-shrink-0" />
                        <span className="text-xs font-medium text-gray-800 dark:text-gray-200 group-hover:text-[#012169] dark:group-hover:text-blue-300">
                          {item}
                        </span>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#C8102E] transform group-hover:translate-x-1 transition-all" />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
