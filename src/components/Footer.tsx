'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const services = [
    'services.web.title',
    'services.mobile.title', 
    'services.cloud.title',
    'services.ai.title',
    'services.devops.title'
  ];

  const company = [
    { key: 'footer.about', href: '/about' },
    { key: 'nav.portfolio', href: '/portfolio' },
    { key: 'footer.careers', href: '#' },
    { key: 'footer.blog', href: '#' },
    { key: 'nav.contact', href: '/contact' }
  ];

  return (
    <footer className="relative z-10 bg-gradient-to-r from-gray-900 to-black border-t border-purple-500/20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <Link href="/" className="text-3xl font-bold bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent mb-4 inline-block">
              Kancra Labs
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              {['📧', '💬', '🔗', '📱'].map((icon, index) => (
                <div key={index} className="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-full flex items-center justify-center hover:from-purple-500/40 hover:to-purple-600/40 transition-all duration-300 cursor-pointer group">
                  <span className="group-hover:scale-125 transition-transform duration-300">{icon}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.services')}</h3>
            <ul className="space-y-2 text-gray-300">
              {services.map((service, index) => (
                <li key={index} className="hover:text-purple-400 transition-colors cursor-pointer">
                  {t(service)}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.company')}</h3>
            <ul className="space-y-2 text-gray-300">
              {company.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="hover:text-purple-400 transition-colors">
                    {t(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              &copy; {t('footer.rights')}
            </p>
            <div className="flex space-x-6 text-gray-400">
              <a href="#" className="hover:text-purple-400 transition-colors">{t('footer.privacy')}</a>
              <a href="#" className="hover:text-purple-400 transition-colors">{t('footer.terms')}</a>
              <a href="#" className="hover:text-purple-400 transition-colors">{t('footer.cookies')}</a>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
    </footer>
  );
}
