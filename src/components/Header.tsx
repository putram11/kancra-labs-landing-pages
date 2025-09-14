'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'id' ? 'en' : 'id');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-gradient-to-r from-black/80 via-gray-900/80 to-purple-900/80 border-b border-purple-500/20">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent hover:from-purple-300 hover:to-white transition-all duration-300">
            Kancra Labs
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="relative group text-gray-300 hover:text-white transition-all duration-300">
              {t('nav.about')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={() => scrollToSection('services')} className="relative group text-gray-300 hover:text-white transition-all duration-300">
              {t('nav.services')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="relative group text-gray-300 hover:text-white transition-all duration-300">
              {t('nav.portfolio')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={() => scrollToSection('contact')} className="relative group text-gray-300 hover:text-white transition-all duration-300">
              {t('nav.contact')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-2 rounded-full font-medium hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
              <span className="text-sm font-medium">
                {language === 'id' ? 'EN' : 'ID'}
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => {
                  scrollToSection('about');
                  setIsMobileMenuOpen(false);
                }}
                className="text-gray-300 hover:text-white transition-all duration-300 py-2 text-left"
              >
                {t('nav.about')}
              </button>
              <button 
                onClick={() => {
                  scrollToSection('services');
                  setIsMobileMenuOpen(false);
                }}
                className="text-gray-300 hover:text-white transition-all duration-300 py-2 text-left"
              >
                {t('nav.services')}
              </button>
              <button 
                onClick={() => {
                  scrollToSection('portfolio');
                  setIsMobileMenuOpen(false);
                }}
                className="text-gray-300 hover:text-white transition-all duration-300 py-2 text-left"
              >
                {t('nav.portfolio')}
              </button>
              <button 
                onClick={() => {
                  scrollToSection('contact');
                  setIsMobileMenuOpen(false);
                }}
                className="text-gray-300 hover:text-white transition-all duration-300 py-2 text-left"
              >
                {t('nav.contact')}
              </button>
              
              {/* Mobile Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-2 rounded-full font-medium hover:from-purple-700 hover:to-purple-800 transition-all duration-300 w-fit"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                <span className="text-sm font-medium">
                  {language === 'id' ? 'EN' : 'ID'}
                </span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Gradient bottom border */}
      <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
    </header>
  );
}
