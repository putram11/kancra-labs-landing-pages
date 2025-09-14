'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AnimatedSection, StaggeredContainer, AnimatedCounter } from '@/components/AnimatedSection';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const { t } = useLanguage();
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    setIsTyping(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 overflow-x-hidden">
      {/* Lightweight background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Simple floating orbs - reduced blur and animation */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-xl opacity-50"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-600/5 rounded-full blur-xl opacity-30"></div>
        
        {/* Minimal grid pattern */}
        <div className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(147, 51, 234, 0.05) 1px, transparent 0)',
            backgroundSize: '100px 100px'
          }}>
        </div>
      </div>

      <Header />

      {/* Hero Section */}
      <section id="home" className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-6xl mx-auto">
            {/* Enhanced Welcome Badge */}
            <AnimatedSection animation="fadeInUp" className="inline-block mb-8">
              <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-3 rounded-full text-sm font-medium shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 border border-purple-400/20">
                ✨ {t('home.welcome')} ✨
              </span>
            </AnimatedSection>

            {/* Enhanced Main Heading with typing effect */}
            <AnimatedSection animation="fadeInUp" delay={200}>
              <h1 className="text-6xl md:text-7xl lg:text-9xl font-extrabold mb-8 leading-tight">
                <span className="text-white drop-shadow-2xl">Kancra</span>{" "}
                <span className={`bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent ${isTyping ? 'animate-pulse' : ''}`}>
                  Labs
                </span>
              </h1>
            </AnimatedSection>

            {/* Enhanced Subtitle */}
            <AnimatedSection animation="fadeInUp" delay={400}>
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-300 mb-6">
                  {t('home.subtitle')}
                </h2>
                <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
                  {t('home.description')}
                </p>
              </div>
            </AnimatedSection>

            {/* Enhanced CTA Buttons */}
            <AnimatedSection animation="fadeInUp" delay={600}>
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
                <button onClick={() => scrollToSection('about')} className="group border-2 border-blue-500 text-blue-300 hover:text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-blue-500/10 transition-all duration-300 transform hover:scale-105">
                  <span className="flex items-center justify-center gap-2">
                    {t('nav.about')}
                    <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </span>
                </button>
              </div>
            </AnimatedSection>

            {/* Lightweight Feature Highlights */}
            <div className="grid md:grid-cols-3 gap-8 mt-20">
              <div className="bg-gray-800/40 p-8 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-colors duration-200">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{t('feature.custom.title')}</h3>
                <p className="text-gray-300 leading-relaxed">{t('feature.custom.desc')}</p>
              </div>

              <div className="bg-gray-800/40 p-8 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-colors duration-200">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{t('feature.performance.title')}</h3>
                <p className="text-gray-300 leading-relaxed">{t('feature.performance.desc')}</p>
              </div>

              <div className="bg-gray-800/40 p-8 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-colors duration-200">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{t('feature.secure.title')}</h3>
                <p className="text-gray-300 leading-relaxed">{t('feature.secure.desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="relative z-10 py-20 bg-gradient-to-r from-purple-900/20 to-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="fadeInUp" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('tech.title')}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('tech.description')}
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp" delay={200}>
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
                  <div key={index} className="flex flex-col items-center p-3 md:p-4 bg-gray-800/30 rounded-xl border border-gray-700/30 hover:border-purple-500/50 transition-colors duration-200">
                    <div className="w-10 h-10 md:w-12 md:h-12 mb-2 md:mb-3 flex items-center justify-center">
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
          </AnimatedSection>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-20">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="fadeInUp" className="text-center mb-16">
            <div className="inline-block mb-8">
              <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
                {t('nav.about')}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('about.title')}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('about.subtitle')}
            </p>
          </AnimatedSection>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <AnimatedSection animation="fadeInLeft">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  {t('about.vision.title')}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {t('about.vision.description1')}
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {t('about.vision.description2')}
                </p>
              </AnimatedSection>
              
              <AnimatedSection animation="fadeInRight" delay={200}>
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105">
                  <div className="text-center">
                    <div className="text-6xl mb-4 animate-bounce">🎯</div>
                    <h4 className="text-2xl font-bold text-white mb-4">{t('about.focus.title')}</h4>
                    <ul className="text-gray-300 space-y-3">
                      <li className="flex items-center justify-center">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                        {t('about.focus.quality')}
                      </li>
                      <li className="flex items-center justify-center">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                        {t('about.focus.innovation')}
                      </li>
                      <li className="flex items-center justify-center">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                        {t('about.focus.satisfaction')}
                      </li>
                      <li className="flex items-center justify-center">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                        {t('about.focus.technology')}
                      </li>
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Values */}
            <StaggeredContainer className="grid md:grid-cols-3 gap-8 mb-20" staggerDelay={150}>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <span className="text-3xl">💡</span>
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">{t('about.values.innovation.title')}</h4>
                <p className="text-gray-300">
                  {t('about.values.innovation.desc')}
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <span className="text-3xl">🤝</span>
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">{t('about.values.collaboration.title')}</h4>
                <p className="text-gray-300">
                  {t('about.values.collaboration.desc')}
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <span className="text-3xl">🔧</span>
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">{t('about.values.excellence.title')}</h4>
                <p className="text-gray-300">
                  {t('about.values.excellence.desc')}
                </p>
              </div>
            </StaggeredContainer>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 py-20 bg-gradient-to-r from-black/40 to-purple-900/40">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="fadeInUp" className="text-center mb-16">
            <div className="inline-block mb-8">
              <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
                {t('nav.services')}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('services.title')}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('services.description')}
            </p>
          </AnimatedSection>

          <StaggeredContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={150}>
            {[
              {
                titleKey: 'services.web.title',
                descKey: 'services.web.desc',
                icon: '🌐',
                color: 'from-blue-500 to-purple-600'
              },
              {
                titleKey: 'services.mobile.title',
                descKey: 'services.mobile.desc',
                icon: '📱',
                color: 'from-green-500 to-blue-600'
              },
              {
                titleKey: 'services.cloud.title',
                descKey: 'services.cloud.desc',
                icon: '☁️',
                color: 'from-purple-500 to-pink-600'
              },
              {
                titleKey: 'services.ai.title',
                descKey: 'services.ai.desc',
                icon: '🤖',
                color: 'from-orange-500 to-red-600'
              },
              {
                titleKey: 'services.devops.title',
                descKey: 'services.devops.desc',
                icon: '⚙️',
                color: 'from-cyan-500 to-blue-600'
              },
              {
                titleKey: 'services.consulting.title',
                descKey: 'services.consulting.desc',
                icon: '💡',
                color: 'from-yellow-500 to-orange-600'
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-800/40 p-8 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-colors duration-200 h-full min-h-[280px] flex flex-col">
                <div className="flex flex-col h-full">
                  <div className="text-5xl mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{t(service.titleKey)}</h3>
                  <p className="text-gray-300 leading-relaxed flex-grow">{t(service.descKey)}</p>
                </div>
              </div>
            ))}
          </StaggeredContainer>

          {/* CTA Button */}
          <div className="text-center mt-16">
            <button onClick={() => scrollToSection('contact')} className="bg-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-700 transition-colors duration-200">
              <span className="flex items-center justify-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                {t('services.cta')}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section id="portfolio" className="relative z-10 py-20 bg-gradient-to-r from-black/20 to-purple-900/20">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="fadeInUp" className="text-center mb-16">
            <div className="inline-block mb-8">
              <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
                {t('nav.portfolio')}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('portfolio.title')}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('portfolio.description')}
            </p>
          </AnimatedSection>

          {/* Featured Projects Grid */}
          <StaggeredContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16" staggerDelay={200}>
            {[
              {
                titleKey: 'project.ecommerce.title',
                descKey: 'project.ecommerce.desc',
                tech: ['React', 'Node.js', 'MongoDB'],
                image: '🛒',
                color: 'from-blue-500 to-purple-600'
              },
              {
                titleKey: 'project.lms.title',
                descKey: 'project.lms.desc',
                tech: ['Vue.js', 'Laravel', 'MySQL'],
                image: '📚',
                color: 'from-green-500 to-blue-600'
              },
              {
                titleKey: 'project.iot.title',
                descKey: 'project.iot.desc',
                tech: ['IoT', 'Python', 'AWS'],
                image: '🌐',
                color: 'from-orange-500 to-red-600'
              }
            ].map((project, index) => (
              <div key={index} className="group bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105 relative overflow-hidden h-full min-h-[320px] flex flex-col">
                <div className="relative z-10 flex flex-col h-full">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300 text-center">{project.image}</div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center">{t(project.titleKey)}</h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed text-center flex-grow">{t(project.descKey)}</p>
                  <div className="flex flex-wrap gap-2 justify-center mt-auto">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-xs font-medium border border-purple-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </StaggeredContainer>

          {/* View More Button */}
          <AnimatedSection animation="fadeInUp" delay={600} className="text-center">
            <Link href="/portfolio" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
              {t('portfolio.viewAll')}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '50+', label: t('stats.projects') },
              { number: '25+', label: t('stats.clients') },
              { number: '3+', label: t('stats.experience') },
              { number: '99%', label: t('stats.satisfaction') }
            ].map((stat, index) => (
              <AnimatedSection key={index} animation="fadeInUp" delay={index * 100}>
                <div className="group">
                  <AnimatedCounter 
                    end={parseInt(stat.number.replace(/[^\d]/g, ''))} 
                    suffix={stat.number.replace(/[\d]/g, '')}
                    className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-20 bg-gradient-to-r from-purple-900/20 to-black/20">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="fadeInUp" className="text-center mb-16">
            <div className="inline-block mb-8">
              <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
                {t('nav.contact')}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('contact.title')}
            </h2>
            <p className="text-xl md:text-2xl text-purple-200 max-w-2xl mx-auto mb-4">
              {t('contact.subtitle')}
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              {t('contact.description')}
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp" delay={200} className="text-center mb-16">
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
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
              <button className="border-2 border-purple-500 text-purple-300 hover:text-white px-12 py-4 rounded-full font-semibold text-lg hover:bg-purple-500/10 transition-colors duration-200">
                <span className="flex items-center justify-center gap-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  {t('contact.cta.chat')}
                </span>
              </button>
            </div>
          </AnimatedSection>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{t('contact.email')}</h3>
              <p className="text-gray-300">hello@kancralabs.com</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{t('contact.phone')}</h3>
              <p className="text-gray-300">+62 851-7511-1378</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{t('contact.location')}</h3>
              <p className="text-gray-300">Jakarta, Indonesia</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
