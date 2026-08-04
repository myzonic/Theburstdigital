import React, { useState } from 'react';
import { PageRoute } from '../types';
import { SERVICE_CATEGORIES } from '../data/agencyData';
import logoImage from '../assets/logo.png';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Sparkles, 
  Layout, 
  ArrowRight
} from 'lucide-react';

interface HeaderProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenQuoteModal: () => void;
  selectedCategorySlug?: string;
  onSelectCategory?: (slug: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentRoute,
  onNavigate,
  isDarkMode,
  onToggleDarkMode,
  onOpenQuoteModal,
  onSelectCategory
}) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (route: PageRoute) => {
    onNavigate(route);
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceSelect = (slug: string) => {
    if (onSelectCategory) onSelectCategory(slug);
    onNavigate('service-detail');
    setIsServicesOpen(false);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Main Glass Header Navigation */}
      <header className="sticky top-0 z-40 w-full glass-header border-b border-gray-200/80 dark:border-gray-800/80 transition-colors shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo - Burst Digital */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            <img
              src={logoImage}
              alt="Burst Digital Logo"
              className="h-20 w-auto group-hover:scale-105 transition-transform"
            />
            <div className="hidden sm:flex flex-col">
              <span className="font-heading text-lg font-black text-[#012169] dark:text-white tracking-tight leading-none">
                BURST DIGITAL
              </span>
              <span className="text-[9px] font-bold text-gray-500 dark:text-gray-400 tracking-[0.25em] uppercase">
                BUILD • LAUNCH • GROW
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links (Uppercase) */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => handleNavClick('home')}
              className={`text-xs font-bold uppercase tracking-wider transition-colors ${
                currentRoute === 'home' 
                  ? 'text-[#C8102E] border-b-2 border-[#C8102E] pb-1' 
                  : 'text-gray-700 dark:text-gray-200 hover:text-[#012169] dark:hover:text-white'
              }`}
            >
              HOME
            </button>

            {/* Services Dropdown Toggle */}
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                onMouseEnter={() => setIsServicesOpen(true)}
                className={`text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1 py-2 ${
                  currentRoute === 'services' || currentRoute === 'service-detail'
                    ? 'text-[#C8102E]' 
                    : 'text-gray-700 dark:text-gray-200 hover:text-[#012169] dark:hover:text-white'
                }`}
              >
                SERVICES
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isServicesOpen ? 'rotate-180 text-[#C8102E]' : ''}`} />
              </button>

              {/* Services Mega Dropdown */}
              {isServicesOpen && (
                <div 
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className="absolute top-full left-1/2 -translate-x-1/2 w-[720px] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 p-6 grid grid-cols-2 gap-4 z-50 animate-in fade-in slide-in-from-top-2 duration-200 mt-1"
                >
                  <div className="col-span-2 flex items-center justify-between pb-3 border-b border-gray-100 dark:border-gray-800">
                    <div>
                      <h4 className="font-heading text-sm font-bold text-[#012169] dark:text-white flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-[#C8102E]" />
                        End-to-End Digital Solutions
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Select a specialized UK service division</p>
                    </div>
                    <button
                      onClick={() => handleNavClick('services')}
                      className="text-xs font-bold text-[#C8102E] hover:underline flex items-center gap-1"
                    >
                      View All Services →
                    </button>
                  </div>

                  {SERVICE_CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleServiceSelect(cat.slug)}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-all text-left group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/50 text-[#012169] dark:text-blue-400 flex items-center justify-center flex-shrink-0 group-hover:bg-[#012169] group-hover:text-white transition-colors">
                        <Layout className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-gray-900 dark:text-white group-hover:text-[#012169] dark:group-hover:text-blue-400">
                            {cat.title}
                          </span>
                          {cat.badge && (
                            <span className="text-[9px] bg-red-100 text-[#C8102E] px-1.5 py-0.5 rounded font-bold uppercase">
                              {cat.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-gray-500 dark:text-gray-400 line-clamp-1 mt-0.5">
                          {cat.shortDesc}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('portfolio')}
              className={`text-xs font-bold uppercase tracking-wider transition-colors ${
                currentRoute === 'portfolio' 
                  ? 'text-[#C8102E] border-b-2 border-[#C8102E] pb-1' 
                  : 'text-gray-700 dark:text-gray-200 hover:text-[#012169] dark:hover:text-white'
              }`}
            >
              PORTFOLIO
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`text-xs font-bold uppercase tracking-wider transition-colors ${
                currentRoute === 'about' 
                  ? 'text-[#C8102E] border-b-2 border-[#C8102E] pb-1' 
                  : 'text-gray-700 dark:text-gray-200 hover:text-[#012169] dark:hover:text-white'
              }`}
            >
              ABOUT
            </button>

            <button
              onClick={() => handleNavClick('pricing')}
              className={`text-xs font-bold uppercase tracking-wider transition-colors ${
                currentRoute === 'pricing' 
                  ? 'text-[#C8102E] border-b-2 border-[#C8102E] pb-1' 
                  : 'text-gray-700 dark:text-gray-200 hover:text-[#012169] dark:hover:text-white'
              }`}
            >
              PRICING
            </button>

            <button
              onClick={() => handleNavClick('blog')}
              className={`text-xs font-bold uppercase tracking-wider transition-colors ${
                currentRoute === 'blog' 
                  ? 'text-[#C8102E] border-b-2 border-[#C8102E] pb-1' 
                  : 'text-gray-700 dark:text-gray-200 hover:text-[#012169] dark:hover:text-white'
              }`}
            >
              BLOG
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className={`text-xs font-bold uppercase tracking-wider transition-colors ${
                currentRoute === 'contact' 
                  ? 'text-[#C8102E] border-b-2 border-[#C8102E] pb-1' 
                  : 'text-gray-700 dark:text-gray-200 hover:text-[#012169] dark:hover:text-white'
              }`}
            >
              CONTACT
            </button>
          </nav>

          {/* Right Controls: Theme Toggle + Get Free Quote Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onToggleDarkMode}
              className="p-2.5 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
              title="Toggle Light / Dark Mode"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            <button
              onClick={onOpenQuoteModal}
              className="bg-[#012169] hover:bg-blue-900 text-white text-xs font-bold px-5 py-3 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center gap-2 border border-blue-900"
            >
              Get Free Quote
              <ArrowRight className="w-3.5 h-3.5 text-[#C8102E]" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onToggleDarkMode}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl bg-gray-100 dark:bg-slate-800 text-gray-800 dark:text-white"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-gray-800 px-4 pt-4 pb-6 space-y-3 animate-in slide-in-from-top-4 duration-200">
            <button
              onClick={() => handleNavClick('home')}
              className="block w-full text-left py-2 text-sm font-bold uppercase text-gray-800 dark:text-white hover:text-[#C8102E]"
            >
              HOME
            </button>
            <button
              onClick={() => handleNavClick('services')}
              className="block w-full text-left py-2 text-sm font-bold uppercase text-gray-800 dark:text-white hover:text-[#C8102E]"
            >
              SERVICES
            </button>
            <button
              onClick={() => handleNavClick('portfolio')}
              className="block w-full text-left py-2 text-sm font-bold uppercase text-gray-800 dark:text-white hover:text-[#C8102E]"
            >
              PORTFOLIO
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="block w-full text-left py-2 text-sm font-bold uppercase text-gray-800 dark:text-white hover:text-[#C8102E]"
            >
              ABOUT
            </button>
            <button
              onClick={() => handleNavClick('pricing')}
              className="block w-full text-left py-2 text-sm font-bold uppercase text-gray-800 dark:text-white hover:text-[#C8102E]"
            >
              PRICING
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="block w-full text-left py-2 text-sm font-bold uppercase text-gray-800 dark:text-white hover:text-[#C8102E]"
            >
              CONTACT
            </button>
            <div className="pt-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full bg-[#012169] text-white py-3 rounded-xl font-bold text-sm text-center flex items-center justify-center gap-2"
              >
                Get Free Quote →
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
