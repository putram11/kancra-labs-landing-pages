'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      title: t('services.web.title'),
      description: t('services.web.desc'),
      icon: '🌐',
      color: 'from-blue-500 to-purple-600',
      features: [
        'Responsive Web Design',
        'Progressive Web Apps (PWA)',
        'E-commerce Solutions',
        'Content Management Systems',
        'API Development & Integration',
        'Performance Optimization'
      ]
    },
    {
      title: t('services.mobile.title'),
      description: t('services.mobile.desc'),
      icon: '📱',
      color: 'from-green-500 to-blue-600',
      features: [
        'Native iOS & Android Apps',
        'Cross-platform Development',
        'React Native Solutions',
        'Mobile UI/UX Design',
        'App Store Optimization',
        'Push Notifications'
      ]
    },
    {
      title: t('services.cloud.title'),
      description: t('services.cloud.desc'),
      icon: '☁️',
      color: 'from-purple-500 to-pink-600',
      features: [
        'AWS & Google Cloud Setup',
        'Serverless Architecture',
        'Container Orchestration',
        'Auto-scaling Solutions',
        'Backup & Disaster Recovery',
        'Security & Compliance'
      ]
    },
    {
      title: t('services.ai.title'),
      description: t('services.ai.desc'),
      icon: '🤖',
      color: 'from-orange-500 to-red-600',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision Solutions',
        'Chatbot Development',
        'Data Analytics & Insights',
        'Predictive Analytics'
      ]
    },
    {
      title: t('services.devops.title'),
      description: t('services.devops.desc'),
      icon: '⚙️',
      color: 'from-cyan-500 to-blue-600',
      features: [
        'CI/CD Pipeline Setup',
        'Infrastructure as Code',
        'Monitoring & Logging',
        'Automated Testing',
        'Docker & Kubernetes',
        'Performance Monitoring'
      ]
    },
    {
      title: t('services.consulting.title'),
      description: t('services.consulting.desc'),
      icon: '💡',
      color: 'from-yellow-500 to-orange-600',
      features: [
        'Technology Strategy',
        'Architecture Planning',
        'Code Review & Audit',
        'Team Training',
        'Digital Transformation',
        'Tech Stack Selection'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(147, 51, 234, 0.1) 1px, transparent 0)',
            backgroundSize: '50px 50px'
          }}>
        </div>
      </div>

      <Header />

      <main className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Page Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-8">
              <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
                {t('nav.services')}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                {t('services.title')}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {t('services.description')}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <div key={index} className="group bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105 relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500`}>
                </div>
                <div className="relative z-10">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">{service.description}</p>
                  
                  {/* Features List */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Process Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Proses <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Kerja</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Metodologi yang terbukti untuk menghasilkan solusi berkualitas tinggi
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Discovery',
                  description: 'Memahami kebutuhan dan tujuan bisnis Anda secara mendalam'
                },
                {
                  step: '02',
                  title: 'Planning',
                  description: 'Merancang strategi dan arsitektur yang tepat untuk project'
                },
                {
                  step: '03',
                  title: 'Development',
                  description: 'Implementasi dengan teknologi terbaik dan best practices'
                },
                {
                  step: '04',
                  title: 'Deployment',
                  description: 'Launching dan monitoring untuk memastikan performa optimal'
                }
              ].map((process, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">{process.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{process.title}</h3>
                  <p className="text-gray-300">{process.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Technology <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Stack</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Teknologi terdepan yang kami gunakan untuk membangun solusi berkualitas
              </p>
            </div>

            <div className="flex justify-center">
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-4 md:gap-6 justify-items-center">
                {[
                  { name: 'JavaScript', icon: 'js' },
                  { name: 'TypeScript', icon: 'ts' },
                  { name: 'React', icon: 'react' },
                  { name: 'Next.js', icon: 'nextjs' },
                  { name: 'Node.js', icon: 'nodejs' },
                  { name: 'Python', icon: 'python' },
                  { name: 'Go', icon: 'go' },
                  { name: 'Java', icon: 'java' },
                  { name: 'PostgreSQL', icon: 'postgres' },
                  { name: 'MongoDB', icon: 'mongodb' },
                  { name: 'Docker', icon: 'docker' },
                  { name: 'Kubernetes', icon: 'kubernetes' },
                  { name: 'AWS', icon: 'aws' },
                  { name: 'GCP', icon: 'gcp' },
                  { name: 'GraphQL', icon: 'graphql' },
                  { name: 'Redis', icon: 'redis' }
                ].map((tech, index) => (
                  <div key={index} className="group flex flex-col items-center p-3 md:p-4 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-110 hover:bg-gradient-to-br hover:from-gray-700/40 hover:to-gray-800/40">
                    <div className="w-10 h-10 md:w-12 md:h-12 mb-2 md:mb-3 group-hover:scale-125 transition-transform duration-300 flex items-center justify-center">
                      <img
                        src={`https://skillicons.dev/icons?i=${tech.icon}`}
                        alt={tech.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-white font-medium text-xs md:text-sm text-center">{tech.name}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm p-12 rounded-2xl border border-gray-700/50 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Siap Memulai Project Anda?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Konsultasikan kebutuhan teknologi Anda dengan tim expert kami
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="group bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-purple-500/25">
                  <span className="flex items-center justify-center gap-2">
                    {t('contact.cta.contact')}
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
                <Link href="/portfolio" className="group border-2 border-purple-500 text-purple-300 hover:text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-500/10 transition-all duration-300 transform hover:scale-105">
                  Lihat Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
