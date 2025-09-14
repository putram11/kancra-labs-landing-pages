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
    'contact.subtitle': 'Punya ide project menarik?',
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
    'portfolio.view': 'Lihat Project',
    
    // About Page
    'about.title': 'Tentang Kancra Labs',
    'about.subtitle': 'Kami adalah tim developer berpengalaman yang berfokus pada inovasi dan kualitas dalam setiap project',
    'about.vision.title': 'Visi & Misi Kami',
    'about.vision.description1': 'Kancra Labs didirikan dengan visi menjadi partner teknologi terpercaya untuk bisnis Indonesia. Kami percaya bahwa teknologi yang tepat dapat mengubah cara bisnis beroperasi dan memberikan dampak positif yang signifikan.',
    'about.vision.description2': 'Misi kami adalah menghadirkan solusi perangkat lunak berkualitas tinggi yang tidak hanya memenuhi kebutuhan klien, tetapi juga melampaui ekspektasi mereka dengan pendekatan inovatif dan teknologi terdepan.',
    'about.focus.title': 'Fokus Utama',
    'about.focus.quality': '• Kualitas & Keandalan',
    'about.focus.innovation': '• Inovasi Berkelanjutan',
    'about.focus.satisfaction': '• Kepuasan Klien', 
    'about.focus.technology': '• Teknologi Terdepan',
    'about.values.innovation.title': 'Inovasi',
    'about.values.innovation.desc': 'Selalu mencari cara baru dan lebih baik untuk menyelesaikan tantangan teknologi',
    'about.values.expertise.title': 'Keahlian',
    'about.values.expertise.desc': 'Tim berpengalaman dengan expertise mendalam di berbagai teknologi modern',
    'about.values.collaboration.title': 'Kolaborasi',
    'about.values.collaboration.desc': 'Bekerja sama dengan klien sebagai partner untuk mencapai tujuan bersama',
    'about.team.title': 'Tim Expert',
    'about.team.subtitle': 'Didukung oleh tim developer, designer, dan project manager berpengalaman',
    'about.stats.projects': 'Project Selesai',
    'about.stats.clients': 'Klien Puas',
    'about.stats.experience': 'Tahun Pengalaman',
    'about.stats.technologies': 'Teknologi Dikuasai',
    'about.why.title': 'Mengapa Memilih Kancra Labs?',
    'about.why.agile.title': 'Pendekatan Agile',
    'about.why.agile.desc': 'Development dengan metodologi agile untuk hasil yang cepat dan berkualitas',
    'about.why.support.title': '24/7 Support',
    'about.why.support.desc': 'Tim support yang siap membantu kapanpun Anda membutuhkan',
    'about.why.scalable.title': 'Scalable Architecture',
    'about.why.scalable.desc': 'Arsitektur yang dapat berkembang seiring pertumbuhan bisnis Anda',
    'about.why.modern.title': 'Modern Tech Stack',
    'about.why.modern.desc': 'Menggunakan teknologi terbaru dan terbaik di industri',
    'about.why.transparent.title': 'Transparent Process',
    'about.why.transparent.desc': 'Proses development yang transparan dengan update berkala',
    'about.why.postlaunch.title': 'Post-Launch Support',
    'about.why.postlaunch.desc': 'Dukungan berkelanjutan setelah project selesai diluncurkan',
    
    // Portfolio Projects
    'project.ecommerce.title': 'Platform E-Commerce',
    'project.ecommerce.desc': 'Platform e-commerce modern dengan fitur lengkap, payment gateway terintegrasi, dan dashboard admin yang powerful.',
    'project.banking.title': 'Aplikasi Mobile Banking',
    'project.banking.desc': 'Aplikasi mobile banking dengan keamanan tinggi, fitur transfer, pembayaran, dan notifikasi real-time.',
    'project.ai.title': 'AI Chat Assistant',
    'project.ai.desc': 'Chatbot AI yang cerdas untuk customer service dengan natural language processing dan machine learning.',
    'project.cloud.title': 'Cloud Management Dashboard',
    'project.cloud.desc': 'Dashboard manajemen cloud untuk monitoring server, database, dan infrastruktur dengan visualisasi real-time.',
    'project.lms.title': 'Learning Management System',
    'project.lms.desc': 'Platform pembelajaran online dengan fitur video streaming, quiz interaktif, dan tracking progress siswa.',
    'project.iot.title': 'IoT Monitoring System',
    'project.iot.desc': 'Sistem monitoring IoT untuk industri dengan sensor data collection, analytics, dan alert system.',
    
    // Contact Form
    'contact.form.title': 'Kirim Pesan',
    'contact.form.name': 'Nama Lengkap',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Nomor Telepon',
    'contact.form.company': 'Perusahaan',
    'contact.form.service': 'Layanan yang Dibutuhkan',
    'contact.form.budget': 'Budget Range',
    'contact.form.message': 'Pesan',
    'contact.form.send': 'Kirim Pesan',
    'contact.hours.title': 'Jam Operasional',
    'contact.hours.weekday': 'Senin - Jumat',
    'contact.hours.saturday': 'Sabtu',
    'contact.hours.sunday': 'Minggu',
    'contact.hours.emergency': 'Emergency Only',
    'contact.quick.title': 'Kontak Cepat'
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
    'contact.subtitle': 'Have an interesting project idea?',
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
    'portfolio.view': 'View Project',
    
    // About Page
    'about.title': 'About Kancra Labs',
    'about.subtitle': 'We are an experienced developer team focused on innovation and quality in every project',
    'about.vision.title': 'Our Vision & Mission',
    'about.vision.description1': 'Kancra Labs was founded with the vision of becoming a trusted technology partner for Indonesian businesses. We believe that the right technology can transform how businesses operate and provide significant positive impact.',
    'about.vision.description2': 'Our mission is to deliver high-quality software solutions that not only meet client needs, but also exceed their expectations with innovative approaches and cutting-edge technology.',
    'about.focus.title': 'Main Focus',
    'about.focus.quality': '• Quality & Reliability',
    'about.focus.innovation': '• Continuous Innovation',
    'about.focus.satisfaction': '• Client Satisfaction',
    'about.focus.technology': '• Cutting-edge Technology',
    'about.values.innovation.title': 'Innovation',
    'about.values.innovation.desc': 'Always seeking new and better ways to solve technology challenges',
    'about.values.expertise.title': 'Expertise',
    'about.values.expertise.desc': 'Experienced team with deep expertise in various modern technologies',
    'about.values.collaboration.title': 'Collaboration',
    'about.values.collaboration.desc': 'Working together with clients as partners to achieve common goals',
    'about.team.title': 'Expert Team',
    'about.team.subtitle': 'Supported by experienced developers, designers, and project managers',
    'about.stats.projects': 'Projects Completed',
    'about.stats.clients': 'Happy Clients',
    'about.stats.experience': 'Years Experience',
    'about.stats.technologies': 'Technologies Mastered',
    'about.why.title': 'Why Choose Kancra Labs?',
    'about.why.agile.title': 'Agile Approach',
    'about.why.agile.desc': 'Development with agile methodology for fast and quality results',
    'about.why.support.title': '24/7 Support',
    'about.why.support.desc': 'Support team ready to help whenever you need',
    'about.why.scalable.title': 'Scalable Architecture',
    'about.why.scalable.desc': 'Architecture that can grow with your business growth',
    'about.why.modern.title': 'Modern Tech Stack',
    'about.why.modern.desc': 'Using the latest and best technologies in the industry',
    'about.why.transparent.title': 'Transparent Process',
    'about.why.transparent.desc': 'Transparent development process with regular updates',
    'about.why.postlaunch.title': 'Post-Launch Support',
    'about.why.postlaunch.desc': 'Ongoing support after project is successfully launched',
    
    // Portfolio Projects
    'project.ecommerce.title': 'E-Commerce Platform',
    'project.ecommerce.desc': 'Modern e-commerce platform with complete features, integrated payment gateway, and powerful admin dashboard.',
    'project.banking.title': 'Mobile Banking App',
    'project.banking.desc': 'Mobile banking app with high security, transfer features, payments, and real-time notifications.',
    'project.ai.title': 'AI Chat Assistant',
    'project.ai.desc': 'Intelligent AI chatbot for customer service with natural language processing and machine learning.',
    'project.cloud.title': 'Cloud Management Dashboard',
    'project.cloud.desc': 'Cloud management dashboard for monitoring servers, databases, and infrastructure with real-time visualization.',
    'project.lms.title': 'Learning Management System',
    'project.lms.desc': 'Online learning platform with video streaming features, interactive quizzes, and student progress tracking.',
    'project.iot.title': 'IoT Monitoring System',
    'project.iot.desc': 'IoT monitoring system for industry with sensor data collection, analytics, and alert system.',
    
    // Contact Form
    'contact.form.title': 'Send Message',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone Number',
    'contact.form.company': 'Company',
    'contact.form.service': 'Required Service',
    'contact.form.budget': 'Budget Range',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.hours.title': 'Working Hours',
    'contact.hours.weekday': 'Monday - Friday',
    'contact.hours.saturday': 'Saturday',
    'contact.hours.sunday': 'Sunday',
    'contact.hours.emergency': 'Emergency Only',
    'contact.quick.title': 'Quick Contact'
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('id');

  const t = (key: string): string => {
    const translation = translations[language] as Record<string, string>;
    return translation[key] || key;
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
