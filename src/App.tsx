import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { ServicesOverview } from './components/ServicesOverview';
import { StatsBanner } from './components/StatsBanner';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Portfolio } from './components/Portfolio';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { ContactSection } from './components/ContactSection';

import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { AboutPage } from './pages/AboutPage';
import { BlogPage } from './pages/BlogPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';

import { SeoInspector } from './components/SeoInspector';
import { QuoteModal } from './components/QuoteModal';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');
  const [selectedCategorySlug, setSelectedCategorySlug] = useState<string>('web-development');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isSeoOpen, setIsSeoOpen] = useState<boolean>(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState<boolean>(false);

  // Sync dark mode class on <html>
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Scroll to top when changing route
  const handleNavigate = (route: PageRoute) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategory = (slug: string) => {
    setSelectedCategorySlug(slug);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-gray-900 dark:text-slate-100 font-sans transition-colors duration-200">
      
      {/* Header */}
      <Header
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
        isDarkMode={isDarkMode}
        onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
        onOpenQuoteModal={() => setIsQuoteOpen(true)}
      />

      {/* Page Router Content */}
          <main className="min-h-[60vh]">
            {currentRoute === 'home' && (
              <>
                <Hero onNavigate={handleNavigate} onOpenQuoteModal={() => setIsQuoteOpen(true)} />
                <ServicesOverview onSelectCategory={handleSelectCategory} onNavigate={handleNavigate} />
                <StatsBanner />
                <WhyChooseUs />
                <Portfolio />
                <Process />
                <Testimonials />
                <Pricing onOpenQuoteModal={() => setIsQuoteOpen(true)} />
                <ContactSection />
              </>
            )}

            {currentRoute === 'services' && (
              <ServicesPage
                onSelectCategory={handleSelectCategory}
                onNavigate={handleNavigate}
                onOpenQuoteModal={() => setIsQuoteOpen(true)}
              />
            )}

            {currentRoute === 'service-detail' && (
              <ServiceDetailPage
                slug={selectedCategorySlug}
                onNavigate={handleNavigate}
                onOpenQuoteModal={() => setIsQuoteOpen(true)}
              />
            )}

            {currentRoute === 'portfolio' && (
              <div className="py-12">
                <Portfolio />
              </div>
            )}

            {currentRoute === 'about' && (
              <AboutPage onNavigate={handleNavigate} onOpenQuoteModal={() => setIsQuoteOpen(true)} />
            )}

            {currentRoute === 'pricing' && (
              <div className="py-12">
                <Pricing onOpenQuoteModal={() => setIsQuoteOpen(true)} />
              </div>
            )}

            {currentRoute === 'blog' && (
              <BlogPage onNavigate={handleNavigate} />
            )}

            {currentRoute === 'contact' && (
              <div className="py-12">
                <ContactSection />
              </div>
            )}

            {currentRoute === 'privacy' && <PrivacyPage />}
            {currentRoute === 'terms' && <TermsPage />}
          </main>

          {/* Footer */}
          <Footer
            onNavigate={handleNavigate}
            onSelectCategory={handleSelectCategory}
          />

      {/* SEO & Search Inspector Modal */}
      <SeoInspector
        currentRoute={currentRoute}
        isOpen={isSeoOpen}
        onClose={() => setIsSeoOpen(false)}
      />

      {/* Free Quote Request Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />

    </div>
  );
}
