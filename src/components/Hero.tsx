import React from 'react';
import { PageRoute } from '../types';
import { AGENCY_INFO } from '../data/agencyData';
import { 
  ArrowRight, 
  Trophy, 
  Users, 
  Award, 
  CheckCircle2, 
  Code, 
  TrendingUp, 
  Smartphone, 
  Palette, 
  Activity,
  Layers,
  Sparkles
} from 'lucide-react';

interface HeroProps {
  onNavigate: (route: PageRoute) => void;
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenQuoteModal }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-blue-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950/20 pt-8 pb-20 lg:pt-14 lg:pb-28">
      
      {/* Background London Skyline Vector Contour (Pure SVG) */}
      <div className="absolute bottom-0 left-0 right-0 h-48 opacity-10 dark:opacity-5 pointer-events-none flex items-end justify-center overflow-hidden">
        <svg viewBox="0 0 1440 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#012169]">
          <path d="M0 220h1440v-40h-20v-30h-15v30h-30v-70h-10v70h-40v-110h-20v110h-50v-60h-15v60h-40v-160h-10v160h-30v-40h-20v40h-60v-90h-15v90h-50v-130h-20v130h-40v-50h-30v50h-70v-180h-15v180h-50v-80h-20v80h-60v-120h-15v120h-50v-40h-20v40h-60v-100h-15v100h-50v-150h-20v150h-40v-60h-20v60h-60v-90h-15v90H0v40z" fill="currentColor"/>
          {/* London Eye Circle */}
          <circle cx="1180" cy="110" r="50" stroke="currentColor" strokeWidth="3" fill="none" />
          {/* Big Ben Clock Tower */}
          <rect x="280" y="20" width="24" height="180" fill="currentColor" />
          <polygon points="280,20 292,0 304,20" fill="currentColor" />
          {/* Gherkin Tower */}
          <ellipse cx="880" cy="110" rx="25" ry="80" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Headline & CTA (Exact PNG Match) */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* UK Agency Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#012169] dark:text-blue-300 shadow-xs">
              <span className="text-base">🇬🇧</span>
              <span className="tracking-wide uppercase">UK BASED DIGITAL AGENCY</span>
            </div>

            {/* Main Headline (Exact text & UK Red highlights) */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#111827] dark:text-white tracking-tight leading-[1.1]">
              Helping UK Businesses Build, Launch & <span className="text-[#C8102E]">Grow Digitally.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
              {AGENCY_INFO.subheadline}
            </p>

            {/* Buttons (Get Free Quote + View Portfolio) */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenQuoteModal}
                className="bg-[#012169] hover:bg-blue-900 text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center gap-2 border border-blue-900"
              >
                Get Free Quote
                <ArrowRight className="w-4 h-4 text-[#C8102E]" />
              </button>

              <button
                onClick={() => onNavigate('portfolio')}
                className="bg-white dark:bg-slate-900 text-[#C8102E] hover:bg-red-50 dark:hover:bg-slate-800 font-bold text-sm sm:text-base px-7 py-3.5 rounded-xl border-2 border-[#C8102E] transition-all flex items-center gap-2 shadow-xs"
              >
                View Portfolio
                <ArrowRight className="w-4 h-4 text-[#C8102E]" />
              </button>
            </div>

            {/* Hero Quick Stats (Exact PNG Match icons & text) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-gray-200/80 dark:border-gray-800">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-amber-50 dark:bg-amber-950/50 text-amber-600 flex items-center justify-center flex-shrink-0">
                  <Trophy className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-heading text-base font-extrabold text-gray-900 dark:text-white block leading-none">
                    500+
                  </span>
                  <span className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">Projects</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-950/50 text-[#012169] dark:text-blue-400 flex items-center justify-center flex-shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-heading text-base font-extrabold text-gray-900 dark:text-white block leading-none">
                    250+
                  </span>
                  <span className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">Clients</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-heading text-base font-extrabold text-gray-900 dark:text-white block leading-none">
                    10+
                  </span>
                  <span className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">Years Exp.</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-red-50 dark:bg-red-950/50 text-[#C8102E] flex items-center justify-center flex-shrink-0">
                  <span className="text-sm">🇬🇧</span>
                </div>
                <div>
                  <span className="font-heading text-base font-extrabold text-gray-900 dark:text-white block leading-none">
                    UK
                  </span>
                  <span className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">Based</span>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Modern Floating Digital UI Scene (Matching Reference PNG) */}
          <div className="lg:col-span-6 relative flex justify-center items-center py-6">
            
            {/* Glow backdrop */}
            <div className="absolute w-72 h-72 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

            {/* Central Sleek Laptop Screen Container */}
            <div className="relative w-full max-w-lg bg-slate-900 rounded-2xl shadow-2xl p-3 border border-slate-700/80 transform hover:scale-[1.01] transition-transform duration-300">
              
              {/* Laptop Display Header Bar */}
              <div className="flex items-center justify-between px-3 py-2 bg-slate-800/90 rounded-t-xl border-b border-slate-700 text-xs text-slate-300">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
                </div>
                <div className="bg-slate-950 px-3 py-0.5 rounded text-[10px] text-slate-400 font-mono tracking-wide flex items-center gap-1">
                  <span>https://burstdigital.co.uk</span>
                </div>
                <span className="text-[10px] bg-red-600/80 text-white px-1.5 py-0.5 rounded font-bold">🇬🇧 LIVE</span>
              </div>

              {/* Laptop Display Inner Screen */}
              <div className="bg-white dark:bg-slate-950 rounded-b-xl p-4 space-y-3 relative overflow-hidden min-h-[260px] flex flex-col justify-center items-center text-center">
                
                {/* London Skyline Graphic in Screen */}
                <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#012169_1px,transparent_1px)] [background-size:16px_16px]"></div>

                <div className="relative z-10 max-w-xs space-y-2">
                  <div className="inline-flex items-center gap-1 bg-blue-50 dark:bg-blue-900/50 text-[#012169] dark:text-blue-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                    <span>Digital Solutions</span>
                    <span>For UK Businesses</span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-gray-900 dark:text-white leading-tight">
                    Custom Web, App & Creative Agency
                  </h3>
                  <div className="pt-1 flex justify-center gap-2">
                    <span className="text-[10px] bg-[#012169] text-white px-3 py-1 rounded font-semibold">
                      London Hub
                    </span>
                    <span className="text-[10px] border border-[#C8102E] text-[#C8102E] px-3 py-1 rounded font-semibold">
                      Get Started
                    </span>
                  </div>
                </div>

              </div>

              {/* Laptop Keyboard Base Base Stand */}
              <div className="h-3 bg-slate-800 rounded-b-xl -mx-3 -mb-3 border-t border-slate-700 flex items-center justify-center">
                <div className="w-16 h-1 bg-slate-600 rounded-full"></div>
              </div>

              {/* FLOATING CARD 1: Top Left Code Editor UI Screen */}
              <div className="absolute -top-6 -left-6 sm:-left-8 bg-slate-900/95 text-slate-100 p-3 rounded-xl shadow-xl border border-slate-700 text-[11px] font-mono animate-float z-20 hidden sm:block max-w-[200px]">
                <div className="flex items-center justify-between text-[9px] text-slate-400 pb-1.5 border-b border-slate-800 mb-1.5">
                  <span className="flex items-center gap-1 text-blue-400">
                    <Code className="w-3 h-3" /> App.tsx
                  </span>
                  <span className="text-emerald-400 font-bold">200 OK</span>
                </div>
                <p className="text-pink-400">const agency = &#123;</p>
                <p className="pl-2 text-cyan-300">name: <span className="text-amber-300">&quot;Burst Digital&quot;</span>,</p>
                <p className="pl-2 text-cyan-300">quality: <span className="text-amber-300">&quot;Fortune 500&quot;</span></p>
                <p className="text-pink-400">&#125;;</p>
              </div>

              {/* FLOATING CARD 2: Top Right Analytics Dashboard */}
              <div className="absolute -top-8 -right-4 sm:-right-8 bg-white dark:bg-slate-900 p-3.5 rounded-xl shadow-xl border border-gray-200 dark:border-slate-800 animate-float-slow z-20 max-w-[210px]">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-[10px] font-bold text-gray-500 uppercase">Total Users</span>
                  <span className="text-[10px] text-emerald-600 font-extrabold bg-emerald-50 px-1.5 py-0.5 rounded">+12.5%</span>
                </div>
                <div className="text-base font-heading font-black text-gray-900 dark:text-white">
                  12,540
                </div>
                <div className="text-[10px] text-gray-400 mt-1 flex items-center justify-between">
                  <span>Analytics Overview</span>
                  <span className="font-bold text-gray-900 dark:text-white">£24,980</span>
                </div>
                {/* Mini SVG Sparkline */}
                <svg viewBox="0 0 100 25" className="w-full h-6 text-emerald-500 mt-1">
                  <path d="M0,20 Q20,5 40,15 T80,5 T100,2" fill="none" stroke="currentColor" strokeWidth="2.5" />
                </svg>
              </div>

              {/* FLOATING CARD 3: Smartphone Mockup Left Center */}
              <div className="absolute -bottom-6 -left-4 sm:-left-10 bg-slate-950 p-2 rounded-2xl shadow-2xl border-2 border-slate-700 animate-float z-30 w-28 sm:w-32 hidden sm:block">
                <div className="w-8 h-1 bg-slate-800 rounded-full mx-auto mb-2"></div>
                <div className="bg-gradient-to-b from-[#012169] to-blue-950 rounded-xl p-2.5 text-white space-y-1.5">
                  <div className="flex items-center justify-between text-[8px] font-bold">
                    <span>9:41</span>
                    <span>5G ⚡</span>
                  </div>
                  <div className="w-full h-8 bg-white/10 rounded-lg flex items-center justify-center">
                    <Smartphone className="w-4 h-4 text-blue-300" />
                  </div>
                  <div className="text-[9px] font-bold">Mobile App UI</div>
                  <div className="text-[7px] text-blue-200">iOS & Android</div>
                </div>
              </div>

              {/* FLOATING CARD 4: Typography & Color Palette Chip Right Center */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 bg-white dark:bg-slate-900 p-3 rounded-xl shadow-xl border border-gray-200 dark:border-slate-800 animate-float-slow z-30 flex items-center gap-3">
                <div className="text-xl font-heading font-black text-[#012169] dark:text-blue-400">
                  Aa
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-gray-700 dark:text-gray-300 block">Manrope + Inter</span>
                  <div className="flex gap-1">
                    <span className="w-3 h-3 rounded-full bg-[#012169]" title="Royal Blue"></span>
                    <span className="w-3 h-3 rounded-full bg-[#C8102E]" title="UK Red"></span>
                    <span className="w-3 h-3 rounded-full bg-slate-900" title="Dark Text"></span>
                  </div>
                </div>
              </div>

              {/* FLOATING TECH BADGES (React, JS, Node, Python) */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-gray-200 dark:border-slate-800 shadow-md flex items-center gap-3 z-30 text-xs font-bold text-gray-700 dark:text-gray-200">
                <span className="flex items-center gap-1 text-cyan-600">⚛️ React</span>
                <span className="flex items-center gap-1 text-emerald-600">🟢 Node</span>
                <span className="flex items-center gap-1 text-blue-600">🐍 Python</span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
