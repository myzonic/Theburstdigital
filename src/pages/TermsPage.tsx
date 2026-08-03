import React from 'react';

export const TermsPage: React.FC = () => {
  return (
    <div className="py-16 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-4xl mx-auto px-4 space-y-6 text-gray-800 dark:text-gray-200">
        <h1 className="font-heading text-3xl font-black text-[#012169] dark:text-white">Terms & Conditions</h1>
        <p className="text-xs text-gray-500">Effective Date: August 2026 • Burst Digital Ltd (England & Wales)</p>
        
        <div className="space-y-4 text-xs leading-relaxed">
          <p>These Terms & Conditions govern the provision of digital services, website development, mobile application engineering, graphic design, and financial support services provided by Burst Digital Ltd to clients across the United Kingdom and internationally.</p>
        </div>
      </div>
    </div>
  );
};
