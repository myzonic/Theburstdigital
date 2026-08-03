import React, { useState } from 'react';
import { PageRoute } from '../types';
import { SERVICE_CATEGORIES } from '../data/agencyData';
import { 
  Globe, 
  Smartphone, 
  Palette, 
  ShoppingCart, 
  Megaphone, 
  Calculator, 
  Layout, 
  BookOpen, 
  Video, 
  Briefcase, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Search
} from 'lucide-react';

interface ServicesOverviewProps {
  onSelectCategory: (slug: string) => void;
  onNavigate: (route: PageRoute) => void;
}

export const ServicesOverview: React.FC<ServicesOverviewProps> = ({ onSelectCategory, onNavigate }) => {
  const [activeTab, setActiveTab] = useState<string>(SERVICE_CATEGORIES[0].id);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getIcon = (name: string) => {
    switch (name) {
      case 'Globe': return <Globe className="w-6 h-6" />;
      case 'Smartphone': return <Smartphone className="w-6 h-6" />;
      case 'Palette': return <Palette className="w-6 h-6" />;
      case 'ShoppingCart': return <ShoppingCart className="w-6 h-6" />;
      case 'Megaphone': return <Megaphone className="w-6 h-6" />;
      case 'Calculator': return <Calculator className="w-6 h-6" />;
      case 'Layout': return <Layout className="w-6 h-6" />;
      case 'BookOpen': return <BookOpen className="w-6 h-6" />;
      case 'Video': return <Video className="w-6 h-6" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6" />;
      default: return <Globe className="w-6 h-6" />;
    }
  };

  const selectedCategory = SERVICE_CATEGORIES.find(c => c.id === activeTab) || SERVICE_CATEGORIES[0];

  return (
    <section id="services" className="py-20 bg-white dark:bg-slate-900 transition-colors relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Matching PNG "WHAT WE DO / Our Premium Services") */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#C8102E]">
            WHAT WE DO
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] dark:text-white tracking-tight">
            Our Premium Services
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-300">
            End-to-end digital solutions to help your business build, grow and scale with confidence.
          </p>
        </div>

        {/* Primary 6 Animated Service Cards (Matching Reference PNG Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {SERVICE_CATEGORIES.slice(0, 6).map((service, index) => (
            <div
              key={service.id}
              onClick={() => {
                setActiveTab(service.id);
                onSelectCategory(service.slug);
              }}
              className="group relative bg-[#F7F9FC] dark:bg-slate-800/80 rounded-2xl p-7 border border-gray-200/80 dark:border-slate-700/80 hover:border-[#012169] dark:hover:border-blue-500 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Icon in colored circle */}
                <div className="w-14 h-14 rounded-2xl bg-[#012169] dark:bg-blue-900 text-white flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-[#C8102E] transition-all duration-300">
                  {getIcon(service.iconName)}
                </div>

                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-xl font-extrabold text-[#111827] dark:text-white group-hover:text-[#012169] dark:group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  {service.badge && (
                    <span className="text-[10px] font-bold bg-red-100 dark:bg-red-950 text-[#C8102E] px-2 py-0.5 rounded-md uppercase">
                      {service.badge}
                    </span>
                  )}
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Top 3 Sub-items Preview */}
                <ul className="space-y-1.5 pt-2 border-t border-gray-200/60 dark:border-slate-700/60">
                  {service.items.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E]"></span>
                      <span className="truncate">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 flex items-center justify-between font-bold text-xs text-[#012169] dark:text-blue-400 group-hover:text-[#C8102E] transition-colors">
                <span>Explore ({service.items.length} Solutions)</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform text-[#C8102E]" />
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Interactive Service Directory (Covering All 10 Categories & 100+ Prompt Items) */}
        <div className="bg-[#012169] text-white rounded-3xl p-6 lg:p-10 shadow-2xl space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-blue-900">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-red-400 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#C8102E]" />
                Full Capabilities Catalog
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Explore All Burst Digital Divisions
              </h3>
            </div>

            {/* Quick Filter Search */}
            <div className="relative min-w-[240px]">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-blue-300" />
              <input
                type="text"
                placeholder="Search capabilities (e.g. Next.js, SEO, Books)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-blue-950/80 text-white placeholder-blue-300/70 text-xs rounded-xl pl-9 pr-4 py-2.5 border border-blue-800 focus:outline-none focus:border-red-500"
              />
            </div>
          </div>

          {/* Service Category Navigation Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {SERVICE_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                  activeTab === cat.id
                    ? 'bg-[#C8102E] text-white shadow-md'
                    : 'bg-blue-950/60 hover:bg-blue-900 text-blue-100 hover:text-white border border-blue-800/80'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Active Category Item Grid */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-heading text-xl font-bold text-white flex items-center gap-2">
                {selectedCategory.title}
                <span className="text-xs bg-blue-900 text-blue-200 px-2 py-0.5 rounded-full font-normal">
                  {selectedCategory.items.length} Sub-Services
                </span>
              </h4>
              <button
                onClick={() => onSelectCategory(selectedCategory.slug)}
                className="text-xs font-bold text-red-400 hover:text-red-300 flex items-center gap-1"
              >
                View Full Division Page →
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {selectedCategory.items
                .filter(item => item.toLowerCase().includes(searchQuery.toLowerCase()))
                .map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => onSelectCategory(selectedCategory.slug)}
                    className="bg-blue-950/70 hover:bg-blue-900/90 p-3.5 rounded-xl border border-blue-800/80 hover:border-red-500/80 transition-all cursor-pointer flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0" />
                      <span className="text-xs font-medium text-blue-100 group-hover:text-white transition-colors">
                        {item}
                      </span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-blue-400 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
                  </div>
                ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
