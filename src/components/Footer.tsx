import React from 'react';
import { PageRoute } from '../types';
import { AGENCY_INFO, SERVICE_CATEGORIES } from '../data/agencyData';
import { Globe, MapPin, Phone, Mail, ArrowUp } from 'lucide-react';
import logoImage from '../assets/logo.png';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
  onSelectCategory?: (slug: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onSelectCategory }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#012169] text-white pt-16 pb-12 border-t border-blue-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white rounded-xl p-3 w-fit shadow-md">
              <img
                src={logoImage}
                alt="Burst Digital Logo"
                className="h-16 w-auto"
              />
            </div>

            <div>
              <h3 className="font-heading text-xl font-black text-white leading-none">
                BURST DIGITAL
              </h3>
              <p className="text-[9px] font-bold text-blue-300 tracking-[0.25em] uppercase mt-1">
                BUILD • LAUNCH • GROW
              </p>
            </div>

            <p className="text-xs text-blue-200 leading-relaxed max-w-sm">
              Full-service UK digital agency delivering enterprise-grade web development, mobile applications, graphic design, publishing, digital marketing, and accounting services.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-blue-200">
              <span className="text-base">🇬🇧</span>
              <span>Registered in England & Wales • Fleet, Hampshire</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-[#FF4D6A]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('home')} className="text-blue-200 hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="text-blue-200 hover:text-white transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('portfolio')} className="text-blue-200 hover:text-white transition-colors">
                  Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="text-blue-200 hover:text-white transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('pricing')} className="text-blue-200 hover:text-white transition-colors">
                  Pricing Plans
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('blog')} className="text-blue-200 hover:text-white transition-colors">
                  Industry Blog
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="text-blue-200 hover:text-white transition-colors">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Services Divisions */}
          <div className="space-y-3">
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-[#FF4D6A]">
              Service Divisions
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICE_CATEGORIES.slice(0, 7).map(c => (
                <li key={c.id}>
                  <button
                    onClick={() => {
                      if (onSelectCategory) onSelectCategory(c.slug);
                      onNavigate('service-detail');
                    }}
                    className="text-blue-200 hover:text-white transition-colors text-left truncate max-w-[180px] block"
                  >
                    {c.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Compliance & Legal */}
          <div className="space-y-3">
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-[#FF4D6A]">
              Legal & Policies
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('privacy')} className="text-blue-200 hover:text-white transition-colors">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('terms')} className="text-blue-200 hover:text-white transition-colors">
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="text-blue-200 hover:text-white transition-colors">
                  GDPR Statement
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="text-blue-200 hover:text-white transition-colors">
                  Security Audits
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 border-t border-blue-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-300">
          <p>© {new Date().getFullYear()} Burst Digital Ltd. All rights reserved. Registered UK Digital Agency.</p>
          
          <div className="flex items-center gap-4">
            <span className="hover:text-white transition-colors cursor-pointer">LinkedIn</span>
            <span className="hover:text-white transition-colors cursor-pointer">Twitter / X</span>
            <span className="hover:text-white transition-colors cursor-pointer">Instagram</span>
            <span className="hover:text-white transition-colors cursor-pointer">GitHub</span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-blue-900 hover:bg-red-600 text-white transition-colors ml-4"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
