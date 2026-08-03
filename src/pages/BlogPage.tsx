import React from 'react';
import { PageRoute } from '../types';
import { Calendar, User, ArrowRight } from 'lucide-react';

interface BlogPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigate }) => {
  const posts = [
    {
      id: 1,
      title: "How Next.js 15 & React 19 Accelerate Google UK Search Indexing",
      category: "Web Development",
      date: "August 2026",
      author: "Senior Architect",
      summary: "Exploring server-side rendering, edge caching, and Core Web Vitals strategies for top Google rankings."
    },
    {
      id: 2,
      title: "The Swiss-Inspired Design Trend: Why Fortune 500s Choose Minimalist UI",
      category: "UI/UX & Branding",
      date: "July 2026",
      author: "Creative Director",
      summary: "How high typography contrast and mathematical spacing elevate brand trust for UK enterprises."
    },
    {
      id: 3,
      title: "Integrating Xero & QuickBooks with Custom SaaS Web Portals",
      category: "Business Services",
      date: "July 2026",
      author: "Financial Lead",
      summary: "Automating invoice reconciliations and UK VAT filings with secure open API integrations."
    }
  ];

  return (
    <div className="py-16 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#C8102E]">
            INSIGHTS & STRATEGY
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-black text-[#111827] dark:text-white tracking-tight">
            Burst Digital Insights
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-300">
            Latest analysis on UK web technology, mobile app engineering, SEO algorithms, and financial solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map(p => (
            <div key={p.id} className="bg-[#F7F9FC] dark:bg-slate-800 p-6 rounded-3xl border border-gray-200 dark:border-slate-700 space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-[10px] font-bold bg-[#012169] text-white px-2.5 py-1 rounded uppercase">{p.category}</span>
              <h3 className="font-heading text-lg font-bold text-gray-900 dark:text-white">{p.title}</h3>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">{p.summary}</p>
              <div className="pt-3 border-t border-gray-200 dark:border-slate-700 flex items-center justify-between text-[11px] text-gray-500">
                <span>{p.date}</span>
                <span className="text-[#C8102E] font-bold">Read Article →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
