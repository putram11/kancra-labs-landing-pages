'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'id' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations
const translations = {
  id: {
    // Navigation
    'nav.about': 'Tentang',
    'nav.services': 'Layanan',
    'nav.portfolio': 'Portofolio',
    'nav.contact': 'Kontak',
    
    // Home Page
    'home.welcome': 'Selamat Datang di Masa Depan Solusi Perangkat Lunak',
    'home.title': 'Kancra Labs',
    'home.subtitle': 'Solusi Perangkat Lunak Profesional',
    'home.description': 'Kami menghadirkan solusi perangkat lunak yang inovatif dan berkualitas tinggi. Dari konsep hingga implementasi, kami membantu bisnis Anda bertransformasi digital dengan teknologi terdepan dan pendekatan yang profesional.',
    'home.cta.start': 'Mulai Proyek Anda',
    'home.cta.portfolio': 'Lihat Portfolio',
    
    // Features
    'feature.custom.title': 'Custom Development',
    'feature.custom.desc': 'Solusi perangkat lunak yang dibuat khusus sesuai kebutuhan bisnis Anda dengan teknologi modern dan scalable.',
    'feature.performance.title': 'Performa Tinggi',
    'feature.performance.desc': 'Aplikasi dengan performa tinggi yang dioptimasi untuk memberikan pengalaman pengguna yang superior.',
    'feature.secure.title': 'Aman & Terpercaya',
    'feature.secure.desc': 'Keamanan tingkat enterprise dengan infrastruktur yang dapat diandalkan untuk mendukung operasional bisnis Anda.',
    
    // Technology Stack
    'tech.title': 'Technology Stack',
    'tech.description': 'Kami menggunakan teknologi terdepan untuk membangun solusi yang scalable dan modern',
    
    // Services
    'services.title': 'Layanan Kami',
    'services.description': 'Layanan komprehensif untuk memenuhi semua kebutuhan teknologi bisnis Anda',
    'services.web.title': 'Web Development',
    'services.web.desc': 'Aplikasi web modern dengan performa tinggi dan UI/UX yang menarik',
    'services.mobile.title': 'Mobile Apps',
    'services.mobile.desc': 'Aplikasi mobile native dan cross-platform untuk iOS dan Android',
    'services.cloud.title': 'Cloud Solutions',
    'services.cloud.desc': 'Infrastruktur cloud yang scalable dan aman untuk pertumbuhan bisnis',
    'services.ai.title': 'AI & Machine Learning',
    'services.ai.desc': 'Solusi AI dan ML untuk otomasi dan insight bisnis yang cerdas',
    'services.devops.title': 'DevOps & CI/CD',
    'services.devops.desc': 'Optimasi deployment dan monitoring dengan praktik DevOps terbaik',
    'services.consulting.title': 'Consulting',
    'services.consulting.desc': 'Konsultasi teknologi untuk strategi digital transformation',
    
    // Stats
    'stats.projects': 'Project Selesai',
    'stats.clients': 'Klien Puas',
    'stats.experience': 'Tahun Pengalaman',
    'stats.satisfaction': 'Kepuasan Klien',
    
    // Contact
    'contact.title': 'Siap Memulai Proyek Anda?',
    'contact.description': 'Mari diskusikan bagaimana kami dapat membantu mewujudkan visi teknologi Anda',
    'contact.cta.contact': 'Hubungi Kami',
    'contact.cta.chat': 'Live Chat',
    'contact.email': 'Email',
    'contact.phone': 'Telepon',
    'contact.location': 'Lokasi',
    
    // Footer
    'footer.description': 'Menghadirkan solusi perangkat lunak inovatif untuk transformasi digital bisnis Anda. Berpengalaman dalam teknologi terdepan dengan pendekatan profesional.',
    'footer.services': 'Layanan',
    'footer.company': 'Perusahaan',
    'footer.about': 'Tentang Kami',
    'footer.careers': 'Karir',
    'footer.blog': 'Blog',
    'footer.privacy': 'Kebijakan Privasi',
    'footer.terms': 'Syarat Layanan',
    'footer.cookies': 'Cookies',
    'footer.rights': '2025 Kancra Labs. Semua hak dilindungi.',
    
    // Portfolio
    'portfolio.title': 'Portofolio Kami',
    'portfolio.description': 'Lihat berbagai project yang telah kami kerjakan dengan teknologi terdepan',
    'portfolio.github': 'Lihat di GitHub',
    'portfolio.demo': 'Demo Live',
    'portfolio.view': 'Lihat Project'
  },
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact',
    
    // Home Page
    'home.welcome': 'Welcome to the Future of Software Solutions',
    'home.title': 'Kancra Labs',
    'home.subtitle': 'Professional Software Solutions',
    'home.description': 'We deliver innovative and high-quality software solutions. From concept to implementation, we help your business transform digitally with cutting-edge technology and professional approach.',
    'home.cta.start': 'Start Your Project',
    'home.cta.portfolio': 'View Portfolio',
    
    // Features
    'feature.custom.title': 'Custom Development',
    'feature.custom.desc': 'Custom software solutions built specifically for your business needs with modern and scalable technology.',
    'feature.performance.title': 'High Performance',
    'feature.performance.desc': 'High-performance applications optimized to deliver superior user experience.',
    'feature.secure.title': 'Secure & Reliable',
    'feature.secure.desc': 'Enterprise-level security with reliable infrastructure to support your business operations.',
    
    // Technology Stack
    'tech.title': 'Technology Stack',
    'tech.description': 'We use cutting-edge technologies to build scalable and modern solutions',
    
    // Services
    'services.title': 'Our Services',
    'services.description': 'Comprehensive services to meet all your business technology needs',
    'services.web.title': 'Web Development',
    'services.web.desc': 'Modern web applications with high performance and attractive UI/UX',
    'services.mobile.title': 'Mobile Apps',
    'services.mobile.desc': 'Native and cross-platform mobile applications for iOS and Android',
    'services.cloud.title': 'Cloud Solutions',
    'services.cloud.desc': 'Scalable and secure cloud infrastructure for business growth',
    'services.ai.title': 'AI & Machine Learning',
    'services.ai.desc': 'AI and ML solutions for automation and intelligent business insights',
    'services.devops.title': 'DevOps & CI/CD',
    'services.devops.desc': 'Deployment optimization and monitoring with best DevOps practices',
    'services.consulting.title': 'Consulting',
    'services.consulting.desc': 'Technology consulting for digital transformation strategy',
    
    // Stats
    'stats.projects': 'Projects Completed',
    'stats.clients': 'Happy Clients',
    'stats.experience': 'Years Experience',
    'stats.satisfaction': 'Client Satisfaction',
    
    // Contact
    'contact.title': 'Ready to Start Your Project?',
    'contact.description': 'Let\'s discuss how we can help realize your technology vision',
    'contact.cta.contact': 'Contact Us',
    'contact.cta.chat': 'Live Chat',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    
    // Footer
    'footer.description': 'Delivering innovative software solutions for your business digital transformation. Experienced in cutting-edge technology with professional approach.',
    'footer.services': 'Services',
    'footer.company': 'Company',
    'footer.about': 'About Us',
    'footer.careers': 'Careers',
    'footer.blog': 'Blog',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.cookies': 'Cookies',
    'footer.rights': '2025 Kancra Labs. All rights reserved.',
    
    // Portfolio
    'portfolio.title': 'Our Portfolio',
    'portfolio.description': 'View various projects we have worked on with cutting-edge technology',
    'portfolio.github': 'View on GitHub',
    'portfolio.demo': 'Live Demo',
    'portfolio.view': 'View Project'
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('id');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['id']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
