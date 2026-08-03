import React from 'react';
import { PageRoute } from '../types';
import { SERVICE_CATEGORIES } from '../data/agencyData';
import { CheckCircle2, ArrowRight, ShieldCheck, Zap, Sparkles } from 'lucide-react';

interface ServiceDetailPageProps {
  slug: string;
  onNavigate: (route: PageRoute) => void;
  onOpenQuoteModal: () => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ slug, onNavigate, onOpenQuoteModal }) => {
  const category = SERVICE_CATEGORIES.find(c => c.slug === slug) || SERVICE_CATEGORIES[0];

  return (
    <div className="py-16 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
          <button onClick={() => onNavigate('home')} className="hover:text-[#012169] dark:hover:text-white">Home</button>
          <span>/</span>
          <button onClick={() => onNavigate('services')} className="hover:text-[#012169] dark:hover:text-white">Services</button>
          <span>/</span>
          <span className="font-bold text-[#012169] dark:text-blue-400">{category.title}</span>
        </div>

        {/* Hero Section */}
        <div className="bg-[#012169] text-white rounded-3xl p-8 lg:p-12 space-y-6 shadow-2xl relative overflow-hidden">
          <div className="inline-flex items-center gap-2 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            UK SPECIALIST DIVISION
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            {category.title}
          </h1>

          <p className="text-base text-blue-200 max-w-2xl leading-relaxed">
            {category.shortDesc} Built with British engineering precision, Fortune 500 visual standards, and ISO-certified delivery frameworks.
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <button
              onClick={onOpenQuoteModal}
              className="bg-[#C8102E] hover:bg-red-700 text-white font-bold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider transition-colors flex items-center gap-2"
            >
              Request Quote for {category.title}
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-blue-900 hover:bg-blue-800 text-white font-bold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider border border-blue-700 transition-colors"
            >
              Consult UK Specialist
            </button>
          </div>
        </div>

        {/* Full List of Capabilities */}
        <div className="space-y-6">
          <h2 className="font-heading text-2xl font-black text-gray-900 dark:text-white">
            Division Capabilities & Services Included ({category.items.length})
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {category.items.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F7F9FC] dark:bg-slate-800 p-4 rounded-2xl border border-gray-200/80 dark:border-slate-700/80 flex items-start gap-3 shadow-xs"
              >
                <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-gray-900 dark:text-white">{item}</h3>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">Custom tailored solution for UK market standards.</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
