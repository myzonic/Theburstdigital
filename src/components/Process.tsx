import React from 'react';
import { PROCESS_STEPS } from '../data/agencyData';
import { Search, Compass, Target, Palette, Code2, CheckSquare, Rocket, HeartHandshake, CheckCircle2 } from 'lucide-react';

export const Process: React.FC = () => {
  const getStepIcon = (name: string) => {
    switch (name) {
      case 'Search': return <Search className="w-5 h-5" />;
      case 'Compass': return <Compass className="w-5 h-5" />;
      case 'Target': return <Target className="w-5 h-5" />;
      case 'Palette': return <Palette className="w-5 h-5" />;
      case 'Code2': return <Code2 className="w-5 h-5" />;
      case 'CheckSquare': return <CheckSquare className="w-5 h-5" />;
      case 'Rocket': return <Rocket className="w-5 h-5" />;
      case 'HeartHandshake': return <HeartHandshake className="w-5 h-5" />;
      default: return <Search className="w-5 h-5" />;
    }
  };

  return (
    <section id="process" className="py-20 bg-[#F7F9FC] dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#C8102E]">
            THE METHODOLOGY
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] dark:text-white tracking-tight">
            Our 8-Step Proven Process
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-300">
            A structured British engineering framework designed for clarity, rapid delivery, and zero unexpected surprises.
          </p>
        </div>

        {/* Process Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className="relative bg-white dark:bg-slate-900 rounded-2xl p-6 border border-gray-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:border-[#012169] dark:hover:border-blue-500"
            >
              <div className="space-y-4">
                {/* Step Header Number & Icon */}
                <div className="flex items-center justify-between">
                  <span className="font-heading text-3xl font-black text-[#012169] dark:text-blue-400 group-hover:text-[#C8102E] transition-colors">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-slate-800 text-[#012169] dark:text-blue-300 flex items-center justify-center group-hover:bg-[#012169] group-hover:text-white transition-colors">
                    {getStepIcon(step.icon)}
                  </div>
                </div>

                <div>
                  <h3 className="font-heading text-xl font-extrabold text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                  <span className="text-xs font-semibold text-[#C8102E] block mt-0.5">
                    {step.subtitle}
                  </span>
                </div>

                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Deliverables List */}
              <div className="pt-4 mt-4 border-t border-gray-100 dark:border-slate-800">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-2">Key Deliverables</span>
                <ul className="space-y-1">
                  {step.deliverables.map((del, idx) => (
                    <li key={idx} className="text-[11px] text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-emerald-500 flex-shrink-0" />
                      <span className="truncate">{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
