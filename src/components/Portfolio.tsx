import React, { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../data/agencyData';
import { PortfolioItem } from '../types';
import { ExternalLink, Sparkles, MapPin, Tag, X } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeModalItem, setActiveModalItem] = useState<PortfolioItem | null>(null);

  const categories = ['All', 'Websites', 'Ecommerce', 'Mobile Apps', 'Branding', 'Graphic Design', 'Publishing', 'Video Editing'];

  const filteredItems = selectedFilter === 'All'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => item.category === selectedFilter);

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#C8102E]">
            PROVEN RESULTS
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] dark:text-white tracking-tight">
            Featured Portfolio
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-300">
            Explore recent digital work crafted for ambitious UK startups, SMEs, and enterprise brands.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                selectedFilter === cat
                  ? 'bg-[#012169] text-white shadow-md'
                  : 'bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className="group bg-[#F7F9FC] dark:bg-slate-800/90 rounded-2xl overflow-hidden border border-gray-200 dark:border-slate-700/80 shadow-xs hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              {/* Card Image Container */}
              <div className="relative h-56 overflow-hidden bg-slate-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-95 group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80"></div>
                
                {/* Category & Stat Badges */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="bg-[#012169] text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider shadow-sm">
                    {item.category}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                  <span className="flex items-center gap-1 text-slate-200 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#C8102E]" />
                    {item.location}
                  </span>
                  <span className="bg-emerald-600/90 text-white text-[10px] font-extrabold px-2 py-0.5 rounded shadow-sm">
                    {item.stats}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-extrabold text-[#C8102E] uppercase tracking-wider">
                    {item.client}
                  </div>
                  <h3 className="font-heading text-lg font-extrabold text-gray-900 dark:text-white group-hover:text-[#012169] dark:group-hover:text-blue-400 transition-colors mt-0.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-2 mt-1.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="pt-3 border-t border-gray-200/80 dark:border-slate-700/80 flex flex-wrap gap-1.5">
                  {item.tags.map((tag, idx) => (
                    <span key={idx} className="bg-white dark:bg-slate-900 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-slate-700 text-[10px] font-semibold px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative border border-gray-200 dark:border-slate-800 animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-64 rounded-2xl overflow-hidden">
              <img src={activeModalItem.image} alt={activeModalItem.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="bg-[#C8102E] text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                  {activeModalItem.category}
                </span>
                <h3 className="font-heading text-2xl font-black mt-1">
                  {activeModalItem.title}
                </h3>
                <p className="text-xs text-slate-300">
                  Client: {activeModalItem.client} ({activeModalItem.location})
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-emerald-50 dark:bg-emerald-950/50 p-4 rounded-xl border border-emerald-200 dark:border-emerald-800 flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300">Verified Impact Highlight</span>
                <span className="font-heading text-base font-extrabold text-emerald-600 dark:text-emerald-400">{activeModalItem.stats}</span>
              </div>

              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                {activeModalItem.description} Built specifically to Fortune 500 standards for UK enterprise benchmarks. Includes custom backend infrastructure, WCAG 2.1 AA accessibility pass, and speed optimization.
              </p>

              <div>
                <span className="text-xs font-bold text-gray-500 uppercase block mb-2">Technologies Used</span>
                <div className="flex flex-wrap gap-2">
                  {activeModalItem.tags.map((tag, idx) => (
                    <span key={idx} className="bg-[#012169] text-white text-xs font-semibold px-3 py-1 rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex justify-end gap-3 border-t border-gray-200 dark:border-slate-800">
                <button
                  onClick={() => setActiveModalItem(null)}
                  className="px-5 py-2.5 rounded-xl border border-gray-300 dark:border-slate-700 text-xs font-bold text-gray-700 dark:text-gray-300"
                >
                  Close
                </button>
                <button
                  onClick={() => setActiveModalItem(null)}
                  className="px-5 py-2.5 rounded-xl bg-[#012169] text-white text-xs font-bold flex items-center gap-2"
                >
                  Request Similar Project →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
