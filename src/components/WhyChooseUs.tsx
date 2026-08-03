import React from 'react';
import { WHY_CHOOSE_US } from '../data/agencyData';
import { 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  Users, 
  Zap, 
  Smartphone, 
  TrendingUp, 
  ShieldCheck, 
  Server, 
  MessageSquare, 
  Headphones, 
  PoundSterling 
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'CheckCircle2': return <CheckCircle2 className="w-5 h-5 text-[#C8102E]" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#012169] dark:text-blue-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-[#C8102E]" />;
      case 'Users': return <Users className="w-5 h-5 text-[#012169] dark:text-blue-400" />;
      case 'Zap': return <Zap className="w-5 h-5 text-amber-500" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5 text-[#012169] dark:text-blue-400" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-emerald-500" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-[#012169] dark:text-blue-400" />;
      case 'Server': return <Server className="w-5 h-5 text-[#C8102E]" />;
      case 'MessageSquare': return <MessageSquare className="w-5 h-5 text-[#012169] dark:text-blue-400" />;
      case 'Headphones': return <Headphones className="w-5 h-5 text-[#C8102E]" />;
      case 'PoundSterling': return <PoundSterling className="w-5 h-5 text-emerald-600" />;
      default: return <CheckCircle2 className="w-5 h-5 text-[#C8102E]" />;
    }
  };

  return (
    <section className="py-20 bg-[#F7F9FC] dark:bg-slate-950 transition-colors relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#C8102E]">
            THE BURST DIGITAL ADVANTAGE
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] dark:text-white tracking-tight">
            Why Choose Burst Digital
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-300">
            We combine Fortune 500 agency standards with British engineering precision and transparent client care.
          </p>
        </div>

        {/* 12 Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((pillar, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-gray-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-all hover:border-[#012169] dark:hover:border-blue-500 group flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-slate-800 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                {getPillarIcon(pillar.icon)}
              </div>
              <div className="space-y-1">
                <h3 className="font-heading text-base font-bold text-gray-900 dark:text-white group-hover:text-[#012169] dark:group-hover:text-blue-400 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
