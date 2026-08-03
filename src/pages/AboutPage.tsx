import React from 'react';
import { PageRoute } from '../types';
import { AGENCY_INFO } from '../data/agencyData';
import { ShieldCheck, Trophy, Users, Award, MapPin, CheckCircle2 } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenQuoteModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  return (
    <div className="py-16 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* About Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#C8102E]">
            LONDON HEADQUARTERED
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-black text-[#111827] dark:text-white tracking-tight">
            About Burst Digital UK
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-300">
            We are a full-service digital agency engineered for ambitious UK startups, SMEs, and enterprise brands seeking Fortune 500 visual quality and technical excellence.
          </p>
        </div>

        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#012169] text-white p-8 rounded-3xl space-y-4 shadow-xl">
            <h2 className="font-heading text-2xl font-black">Our UK Mission</h2>
            <p className="text-sm text-blue-200 leading-relaxed">
              To empower British businesses with world-class digital assets—custom web development, mobile applications, strategic branding, marketing, and corporate financial accounting—all under one trusted roof.
            </p>
          </div>

          <div className="bg-[#F7F9FC] dark:bg-slate-800 p-8 rounded-3xl space-y-4 border border-gray-200 dark:border-slate-700">
            <h2 className="font-heading text-2xl font-black text-gray-900 dark:text-white">Our Standards</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              We reject low-quality visual clichés and generic templates. Every line of code, typography pair, and user flow is crafted using mathematical precision inspired by Apple, Stripe, Linear, and Framer.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
