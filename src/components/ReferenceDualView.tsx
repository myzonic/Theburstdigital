import React from 'react';
import { PageRoute } from '../types';
import { Hero } from './Hero';
import { ServicesOverview } from './ServicesOverview';
import { StatsBanner } from './StatsBanner';
import { WhyChooseUs } from './WhyChooseUs';
import { Portfolio } from './Portfolio';
import { Process } from './Process';
import { Testimonials } from './Testimonials';
import { Pricing } from './Pricing';
import { ContactSection } from './ContactSection';
import { Footer } from './Footer';
import { Monitor, Smartphone, Sparkles, CheckCircle2 } from 'lucide-react';

interface ReferenceDualViewProps {
  onNavigate: (route: PageRoute) => void;
  onSelectCategory: (slug: string) => void;
  onOpenQuoteModal: () => void;
}

export const ReferenceDualView: React.FC<ReferenceDualViewProps> = ({
  onNavigate,
  onSelectCategory,
  onOpenQuoteModal
}) => {
  return (
    <div className="bg-slate-200 dark:bg-slate-950 p-4 lg:p-8 min-h-screen">
      
      {/* Top Banner explaining Dual Reference Mode */}
      <div className="max-w-7xl mx-auto mb-6 bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-md border border-gray-300 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#C8102E] text-white flex items-center justify-center font-bold">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-heading text-base font-extrabold text-[#012169] dark:text-white flex items-center gap-2">
              Exact Reference PNG Side-by-Side Preview Mode
              <span className="text-[10px] bg-[#012169] text-white px-2 py-0.5 rounded font-bold uppercase">
                Desktop + Mobile
              </span>
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              Left Frame: Desktop 1920px Canvas • Right Frame: Mobile iPhone 375px Canvas.
            </p>
          </div>
        </div>
      </div>

      {/* Side-by-Side Canvas Container */}
      <div className="max-w-[1920px] mx-auto grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
        
        {/* DESKTOP CANVAS FRAME (Left 8 Columns) */}
        <div className="xl:col-span-8 bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden border-2 border-slate-300 dark:border-slate-800">
          
          {/* Desktop Frame Header */}
          <div className="bg-slate-900 text-white px-4 py-3 flex items-center justify-between text-xs border-b border-slate-800">
            <div className="flex items-center gap-2">
              <Monitor className="w-4 h-4 text-blue-400" />
              <span className="font-bold">DESKTOP HOMEPAGE (1920px Viewport)</span>
            </div>
            <div className="bg-slate-800 px-3 py-1 rounded-md text-[10px] font-mono text-slate-300">
              https://burstdigital.co.uk (Desktop Live)
            </div>
          </div>

          {/* Desktop Render Content */}
          <div className="overflow-y-auto max-h-[850px] scrollbar-thin">
            <Hero onNavigate={onNavigate} onOpenQuoteModal={onOpenQuoteModal} />
            <ServicesOverview onSelectCategory={onSelectCategory} onNavigate={onNavigate} />
            <StatsBanner />
            <WhyChooseUs />
            <Portfolio />
            <Process />
            <Testimonials />
            <Pricing onOpenQuoteModal={onOpenQuoteModal} />
            <ContactSection />
            <Footer onNavigate={onNavigate} onSelectCategory={onSelectCategory} />
          </div>

        </div>

        {/* MOBILE CANVAS FRAME (Right 4 Columns) */}
        <div className="xl:col-span-4 bg-slate-950 p-4 rounded-3xl shadow-2xl border-4 border-slate-800 sticky top-24">
          
          {/* Mobile Frame Header */}
          <div className="bg-slate-900 text-white px-3 py-2.5 rounded-2xl mb-3 flex items-center justify-between text-xs border border-slate-800">
            <div className="flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-[#C8102E]" />
              <span className="font-bold text-[11px]">MOBILE VIEW (375px Canvas)</span>
            </div>
            <span className="text-[9px] bg-red-600 text-white px-1.5 py-0.5 rounded font-bold">
              9:41 ⚡
            </span>
          </div>

          {/* iPhone Mockup Frame */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-inner max-h-[800px] overflow-y-auto scrollbar-none border border-slate-800">
            
            {/* Mobile Header Bar */}
            <div className="bg-white dark:bg-slate-900 px-4 py-3 border-b border-gray-200 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#012169] text-white font-bold text-xs rounded-lg flex items-center justify-center">
                  BD
                </div>
                <span className="font-heading text-xs font-bold text-[#012169] dark:text-white">BURST DIGITAL</span>
              </div>
              <span className="text-xs">☰</span>
            </div>

            {/* Mobile Hero View */}
            <div className="p-4 space-y-4">
              <div className="inline-flex items-center gap-1.5 bg-blue-50 text-[#012169] text-[10px] font-bold px-2 py-0.5 rounded-full">
                <span>🇬🇧 UK BASED DIGITAL AGENCY</span>
              </div>

              <h1 className="font-heading text-2xl font-black text-gray-900 dark:text-white leading-tight">
                Helping UK Businesses Build, Launch & <span className="text-[#C8102E]">Grow Digitally.</span>
              </h1>

              <p className="text-xs text-gray-600 dark:text-gray-300">
                Custom websites, mobile apps, branding, creative design, bookkeeping, accounting and business solutions.
              </p>

              <div className="space-y-2">
                <button onClick={onOpenQuoteModal} className="w-full bg-[#012169] text-white text-xs font-bold py-2.5 rounded-lg">
                  Get Free Quote →
                </button>
                <button onClick={() => onNavigate('portfolio')} className="w-full bg-white text-[#C8102E] border border-[#C8102E] text-xs font-bold py-2.5 rounded-lg">
                  View Portfolio →
                </button>
              </div>

              <div className="pt-3 border-t border-gray-100 dark:border-slate-800">
                <span className="text-[10px] font-bold text-red-600 uppercase block mb-2">WHAT WE DO</span>
                <h2 className="font-heading text-base font-bold text-gray-900 dark:text-white mb-3">Our Premium Services</h2>
                
                <div className="space-y-3">
                  <div className="bg-gray-50 dark:bg-slate-800 p-3 rounded-xl border border-gray-200 dark:border-slate-700">
                    <div className="w-8 h-8 rounded-lg bg-[#012169] text-white flex items-center justify-center text-xs mb-2">🌐</div>
                    <h3 className="font-heading text-xs font-bold text-gray-900 dark:text-white">Web Development</h3>
                    <p className="text-[10px] text-gray-500">Custom React, Next.js, Vue.js, Laravel & Fullstack apps.</p>
                  </div>

                  <div className="bg-gray-50 dark:bg-slate-800 p-3 rounded-xl border border-gray-200 dark:border-slate-700">
                    <div className="w-8 h-8 rounded-lg bg-[#C8102E] text-white flex items-center justify-center text-xs mb-2">📱</div>
                    <h3 className="font-heading text-xs font-bold text-gray-900 dark:text-white">Mobile App Development</h3>
                    <p className="text-[10px] text-gray-500">iOS, Android & Flutter cross-platform apps.</p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
