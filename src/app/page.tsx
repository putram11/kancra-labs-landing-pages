'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 overflow-x-hidden">
      {/* Enhanced Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl animate-bounce delay-500"></div>

        {/* Geometric shapes */}
        <div className="absolute top-20 right-20 w-4 h-4 bg-purple-400 rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-32 left-16 w-6 h-6 bg-white/20 rotate-45 animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-purple-300 rounded-full animate-pulse"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(147, 51, 234, 0.1) 1px, transparent 0)',
            backgroundSize: '50px 50px'
          }}>
        </div>
      </div>

      <Header />

      {/* Hero Section */}
      <main className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="text-center max-w-5xl mx-auto">
          {/* Welcome Badge */}
          <div className="inline-block mb-8">
            <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
              {t('home.welcome')}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-tight">
            <span className="text-white">Kancra</span>{" "}
            <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
              Labs
            </span>
          </h1>

          {/* Subtitle */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-300 mb-6">
              {t('home.subtitle')}
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              {t('home.description')}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link href="/contact" className="group bg-gradient-to-r from-purple-600 to-purple-700 text-white px-10 py-4 rounded-full font-semibold text-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-purple-500/25">
              <span className="flex items-center justify-center gap-2">
                {t('home.cta.start')}
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
            <Link href="/portfolio" className="group border-2 border-purple-500 text-purple-300 hover:text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-purple-500/10 transition-all duration-300 transform hover:scale-105">
              <span className="flex items-center justify-center gap-2">
                {t('home.cta.portfolio')}
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/10 rounded-full -translate-y-10 translate-x-10"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{t('feature.custom.title')}</h3>
              <p className="text-gray-300 leading-relaxed relative z-10">{t('feature.custom.desc')}</p>
            </div>

            <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 rounded-full -translate-y-10 translate-x-10"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{t('feature.performance.title')}</h3>
              <p className="text-gray-300 leading-relaxed relative z-10">{t('feature.performance.desc')}</p>
            </div>

            <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-green-500/10 rounded-full -translate-y-10 translate-x-10"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{t('feature.secure.title')}</h3>
              <p className="text-gray-300 leading-relaxed relative z-10">{t('feature.secure.desc')}</p>
            </div>
          </div>
        </div>
      </main>

      {/* Technology Stack Section */}
      <section className="relative z-10 py-20 bg-gradient-to-r from-purple-900/20 to-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('tech.title')}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('tech.description')}
            </p>
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-4 md:gap-6 justify-items-center">
              {[
                { name: 'JavaScript', icon: 'js' },
                { name: 'TypeScript', icon: 'ts' },
                { name: 'Go', icon: 'go' },
                { name: 'Python', icon: 'python' },
                { name: 'PHP', icon: 'php' },
                { name: 'WordPress', icon: 'wordpress' },
                { name: 'Java', icon: 'java' },
                { name: 'React', icon: 'react' },
                { name: 'Next.js', icon: 'nextjs' },
                { name: 'Apollo', icon: 'apollo' },
                { name: 'Node.js', icon: 'nodejs' },
                { name: 'Express', icon: 'express' },
                { name: 'GraphQL', icon: 'graphql' },
                { name: 'Sequelize', icon: 'sequelize' },
                { name: 'MongoDB', icon: 'mongodb' },
                { name: 'PostgreSQL', icon: 'postgres' },
                { name: 'MySQL', icon: 'mysql' },
                { name: 'Redis', icon: 'redis' },
                { name: 'RabbitMQ', icon: 'rabbitmq' },
                { name: 'Django', icon: 'django' },
                { name: 'FastAPI', icon: 'fastapi' },
                { name: 'Docker', icon: 'docker' },
                { name: 'Kubernetes', icon: 'kubernetes' },
                { name: 'Nginx', icon: 'nginx' },
                { name: 'AWS', icon: 'aws' },
                { name: 'GCP', icon: 'gcp' }
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
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('services.title')}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('services.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: t('services.web.title'),
                description: t('services.web.desc'),
                icon: '🌐',
                color: 'from-blue-500 to-purple-600'
              },
              {
                title: t('services.mobile.title'),
                description: t('services.mobile.desc'),
                icon: '📱',
                color: 'from-green-500 to-blue-600'
              },
              {
                title: t('services.cloud.title'),
                description: t('services.cloud.desc'),
                icon: '☁️',
                color: 'from-purple-500 to-pink-600'
              },
              {
                title: t('services.ai.title'),
                description: t('services.ai.desc'),
                icon: '🤖',
                color: 'from-orange-500 to-red-600'
              },
              {
                title: t('services.devops.title'),
                description: t('services.devops.desc'),
                icon: '⚙️',
                color: 'from-cyan-500 to-blue-600'
              },
              {
                title: t('services.consulting.title'),
                description: t('services.consulting.desc'),
                icon: '💡',
                color: 'from-yellow-500 to-orange-600'
              }
            ].map((service, index) => {
              const getGradientColors = (colorString: string) => {
                const colors = colorString.split(' ');
                const fromColor = colors[0].replace('from-', '');
                const toColor = colors[2].replace('to-', '');
                return `linear-gradient(to bottom right, var(--tw-gradient-from), var(--tw-gradient-to))`;
              };

              return (
                <div key={index} className="group bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105 relative overflow-hidden">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500`}>
                  </div>
                  <div className="relative z-10">
                    <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-20 bg-gradient-to-r from-black/40 to-purple-900/40">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '50+', label: t('stats.projects') },
              { number: '25+', label: t('stats.clients') },
              { number: '3+', label: t('stats.experience') },
              { number: '99%', label: t('stats.satisfaction') }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('contact.title')}
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              {t('contact.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link href="/contact" className="group bg-gradient-to-r from-purple-600 to-purple-700 text-white px-12 py-4 rounded-full font-semibold text-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-purple-500/25">
                <span className="flex items-center justify-center gap-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {t('contact.cta.contact')}
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              <button className="group border-2 border-purple-500 text-purple-300 hover:text-white px-12 py-4 rounded-full font-semibold text-lg hover:bg-purple-500/10 transition-all duration-300 transform hover:scale-105">
                <span className="flex items-center justify-center gap-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  {t('contact.cta.chat')}
                </span>
              </button>
            </div>

            {/* Contact Info */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">{t('contact.email')}</h3>
                <p className="text-gray-300">hello@kancralabs.com</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">{t('contact.phone')}</h3>
                <p className="text-gray-300">+62 851-7511-1378</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">{t('contact.location')}</h3>
                <p className="text-gray-300">Jakarta, Indonesia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
