import React, { useState } from 'react';
import { PRICING_PLANS } from '../data/agencyData';
import { Check, Sparkles, HelpCircle, ArrowRight } from 'lucide-react';

interface PricingProps {
  onOpenQuoteModal: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenQuoteModal }) => {
  const [billingCycle, setBillingCycle] = useState<'fixed' | 'retainer'>('fixed');

  return (
    <section id="pricing" className="py-20 bg-[#F7F9FC] dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#C8102E]">
            TRANSPARENT INVESTMENT
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] dark:text-white tracking-tight">
            Fair, Predictable UK Pricing
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-300">
            No hidden fees or unexpected extras. All packages include full UK source code ownership and warranty.
          </p>

          {/* Billing Toggle */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <span className={`text-xs font-bold ${billingCycle === 'fixed' ? 'text-[#012169] dark:text-white' : 'text-gray-400'}`}>
              Fixed Project Scope
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'fixed' ? 'retainer' : 'fixed')}
              className="w-12 h-6 bg-[#012169] rounded-full p-1 relative transition-colors"
            >
              <div className={`w-4 h-4 bg-white rounded-full transition-transform ${billingCycle === 'retainer' ? 'translate-x-6 bg-[#C8102E]' : ''}`}></div>
            </button>
            <span className={`text-xs font-bold ${billingCycle === 'retainer' ? 'text-[#012169] dark:text-white' : 'text-gray-400'}`}>
              Monthly Retainer Squad
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white dark:bg-slate-900 rounded-3xl p-8 border transition-all duration-300 flex flex-col justify-between ${
                plan.isPopular
                  ? 'border-2 border-[#C8102E] shadow-2xl scale-105 z-10'
                  : 'border-gray-200 dark:border-slate-800 shadow-md hover:shadow-xl'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C8102E] text-white text-[10px] font-black uppercase px-4 py-1 rounded-full tracking-wider shadow-md flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  MOST POPULAR UK PACKAGE
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <span className="text-xs font-extrabold text-[#C8102E] uppercase tracking-wider block mb-1">
                    {plan.idealFor}
                  </span>
                  <h3 className="font-heading text-2xl font-black text-gray-900 dark:text-white">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                    {plan.tagline}
                  </p>
                </div>

                <div className="py-4 border-y border-gray-100 dark:border-slate-800">
                  <span className="font-heading text-4xl font-black text-[#012169] dark:text-white">
                    {plan.priceGb}
                  </span>
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400 ml-2">
                    /{plan.period}
                  </span>
                </div>

                {/* Features List */}
                <ul className="space-y-3">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="text-xs text-gray-700 dark:text-gray-300 flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 mt-6">
                <button
                  onClick={onOpenQuoteModal}
                  className={`w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md ${
                    plan.isPopular
                      ? 'bg-[#C8102E] hover:bg-red-700 text-white'
                      : 'bg-[#012169] hover:bg-blue-900 text-white'
                  }`}
                >
                  {plan.ctaText}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
