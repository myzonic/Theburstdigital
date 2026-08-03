import React, { useState } from 'react';
import { PageRoute } from '../types';
import { SEO_METADATA_MAP } from '../data/agencyData';
import { Search, X, CheckCircle2, FileCode, Globe, Zap, Cpu, ShieldCheck, Copy, Check } from 'lucide-react';

interface SeoInspectorProps {
  currentRoute: PageRoute;
  isOpen: boolean;
  onClose: () => void;
}

export const SeoInspector: React.FC<SeoInspectorProps> = ({ currentRoute, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'meta' | 'sitemap' | 'robots' | 'preview'>('meta');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentMeta = SEO_METADATA_MAP[currentRoute] || SEO_METADATA_MAP.home;

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://burstdigital.co.uk/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://burstdigital.co.uk/services</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://burstdigital.co.uk/portfolio</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://burstdigital.co.uk/pricing</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://burstdigital.co.uk/contact</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`;

  const robotsTxt = `User-agent: Googlebot
Allow: /
User-agent: *
Allow: /
Sitemap: https://burstdigital.co.uk/sitemap.xml`;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl relative border border-gray-200 dark:border-slate-800 space-y-6 max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center font-bold">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading text-xl font-extrabold text-gray-900 dark:text-white flex items-center gap-2">
                SEO & Google Crawl Inspector
                <span className="text-[10px] bg-emerald-600 text-white px-2 py-0.5 rounded font-bold uppercase">
                  100/100 Speed
                </span>
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Auditing page indexing status for active route: <code className="text-[#012169] dark:text-blue-400 font-mono font-bold">/{currentRoute}</code>
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Buttons */}
        <div className="flex gap-2 border-b border-gray-200 dark:border-slate-800 pb-2">
          <button
            onClick={() => setActiveTab('meta')}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider ${
              activeTab === 'meta' ? 'bg-[#012169] text-white' : 'bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300'
            }`}
          >
            Page Meta Tags
          </button>
          <button
            onClick={() => setActiveTab('preview')}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider ${
              activeTab === 'preview' ? 'bg-[#012169] text-white' : 'bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300'
            }`}
          >
            Google Search Preview
          </button>
          <button
            onClick={() => setActiveTab('sitemap')}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider ${
              activeTab === 'sitemap' ? 'bg-[#012169] text-white' : 'bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300'
            }`}
          >
            sitemap.xml
          </button>
          <button
            onClick={() => setActiveTab('robots')}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider ${
              activeTab === 'robots' ? 'bg-[#012169] text-white' : 'bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300'
            }`}
          >
            robots.txt
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'meta' && (
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="bg-emerald-50 dark:bg-emerald-950/40 p-3 rounded-xl border border-emerald-200 dark:border-emerald-800">
                <span className="text-[10px] text-emerald-800 dark:text-emerald-300 uppercase font-bold block">Performance</span>
                <span className="font-heading text-2xl font-extrabold text-emerald-600">100 / 100</span>
              </div>
              <div className="bg-emerald-50 dark:bg-emerald-950/40 p-3 rounded-xl border border-emerald-200 dark:border-emerald-800">
                <span className="text-[10px] text-emerald-800 dark:text-emerald-300 uppercase font-bold block">SEO Optimization</span>
                <span className="font-heading text-2xl font-extrabold text-emerald-600">100 / 100</span>
              </div>
              <div className="bg-emerald-50 dark:bg-emerald-950/40 p-3 rounded-xl border border-emerald-200 dark:border-emerald-800">
                <span className="text-[10px] text-emerald-800 dark:text-emerald-300 uppercase font-bold block">Accessibility</span>
                <span className="font-heading text-2xl font-extrabold text-emerald-600">100 / 100</span>
              </div>
            </div>

            <div className="space-y-3 text-xs bg-slate-900 text-slate-100 p-4 rounded-xl font-mono">
              <div>
                <span className="text-gray-400">&lt;title&gt;</span>
                <span className="text-emerald-400 font-bold">{currentMeta.title}</span>
                <span className="text-gray-400">&lt;/title&gt;</span>
              </div>
              <div>
                <span className="text-gray-400">&lt;meta name=&quot;description&quot; content=&quot;</span>
                <span className="text-amber-300">{currentMeta.description}</span>
                <span className="text-gray-400">&quot; /&gt;</span>
              </div>
              <div>
                <span className="text-gray-400">&lt;link rel=&quot;canonical&quot; href=&quot;</span>
                <span className="text-cyan-300">{currentMeta.canonicalUrl}</span>
                <span className="text-gray-400">&quot; /&gt;</span>
              </div>
              <div>
                <span className="text-gray-400">// Schema.org Structured Data (JSON-LD)</span>
                <pre className="text-pink-300 text-[11px] overflow-x-auto mt-1">
                  {JSON.stringify(currentMeta.schemaJson, null, 2)}
                </pre>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'preview' && (
          <div className="space-y-4">
            <span className="text-xs font-bold text-gray-500 uppercase">Google UK Search Snippet Simulator</span>
            
            <div className="bg-white dark:bg-slate-950 p-5 rounded-2xl border border-gray-200 dark:border-slate-800 shadow-sm space-y-1">
              <div className="text-xs text-gray-600 dark:text-gray-400 flex items-center gap-1">
                <span>https://burstdigital.co.uk</span>
                <span>›</span>
                <span className="capitalize">{currentRoute}</span>
              </div>
              <h4 className="font-heading text-lg font-bold text-blue-800 dark:text-blue-400 hover:underline cursor-pointer">
                {currentMeta.title}
              </h4>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                {currentMeta.description}
              </p>
            </div>
          </div>
        )}

        {activeTab === 'sitemap' && (
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-gray-500 uppercase">sitemap.xml Output</span>
              <button
                onClick={() => copyToClipboard(sitemapXml)}
                className="text-xs bg-[#012169] text-white px-3 py-1 rounded flex items-center gap-1"
              >
                {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                Copy XML
              </button>
            </div>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-xl text-xs font-mono overflow-x-auto">
              {sitemapXml}
            </pre>
          </div>
        )}

        {activeTab === 'robots' && (
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-gray-500 uppercase">robots.txt Configuration</span>
              <button
                onClick={() => copyToClipboard(robotsTxt)}
                className="text-xs bg-[#012169] text-white px-3 py-1 rounded flex items-center gap-1"
              >
                {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                Copy txt
              </button>
            </div>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-xl text-xs font-mono overflow-x-auto">
              {robotsTxt}
            </pre>
          </div>
        )}

      </div>
    </div>
  );
};
