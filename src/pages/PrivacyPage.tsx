import React from 'react';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="py-16 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-4xl mx-auto px-4 space-y-6 text-gray-800 dark:text-gray-200">
        <h1 className="font-heading text-3xl font-black text-[#012169] dark:text-white">UK GDPR Privacy Policy</h1>
        <p className="text-xs text-gray-500">Effective Date: August 2026 • Registered Company: Burst Digital Ltd (UK)</p>
        
        <div className="space-y-4 text-xs leading-relaxed">
          <p>Burst Digital Ltd is committed to respecting your privacy and complying with all applicable United Kingdom Data Protection Laws, including the UK General Data Protection Regulation (UK GDPR) and Data Protection Act 2018.</p>
          <h2 className="font-heading text-base font-bold text-[#012169] dark:text-white pt-2">Data Collection & Usage</h2>
          <p>We collect personal information such as name, email, phone number, and project requirements strictly for responding to enquiries and servicing active contracts.</p>
        </div>
      </div>
    </div>
  );
};
