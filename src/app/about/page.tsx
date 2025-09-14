'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AnimatedSection, StaggeredContainer, AnimatedCounter } from '@/components/AnimatedSection';
import { useLanguage } from '@/contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();

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
          <AnimatedSection animation="fadeInUp" className="text-center mb-16">
            <div className="inline-block mb-8">
              <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
                {t('nav.about')}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                {t('about.title')}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {t('about.subtitle')}
            </p>
          </AnimatedSection>

          {/* About Content */}
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <AnimatedSection animation="fadeInLeft">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  {t('about.vision.title')}
                </h2>
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
                    <h3 className="text-2xl font-bold text-white mb-4">{t('about.focus.title')}</h3>
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
                <h3 className="text-2xl font-bold text-white mb-4">{t('about.values.innovation.title')}</h3>
                <p className="text-gray-300">
                  {t('about.values.innovation.desc')}
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <span className="text-3xl">🔧</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{t('about.values.expertise.title')}</h3>
                <p className="text-gray-300">
                  {t('about.values.expertise.desc')}
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{t('about.values.collaboration.title')}</h3>
                <p className="text-gray-300">
                  {t('about.values.collaboration.desc')}
                </p>
              </div>
            </StaggeredContainer>

            {/* Team */}
            <AnimatedSection animation="scaleUp" className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {t('about.team.title')} <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Team</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {t('about.team.subtitle')}
              </p>
            </AnimatedSection>

            {/* Stats */}
            <StaggeredContainer className="grid md:grid-cols-4 gap-8 text-center mb-20" staggerDelay={100}>
              {[
                { number: 50, suffix: '+', label: t('about.stats.projects') },
                { number: 25, suffix: '+', label: t('about.stats.clients') },
                { number: 3, suffix: '+', label: t('about.stats.experience') },
                { number: 15, suffix: '+', label: t('about.stats.technologies') }
              ].map((stat, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                    <AnimatedCounter 
                      end={stat.number} 
                      suffix={stat.suffix}
                      duration={2500}
                    />
                  </div>
                  <div className="text-gray-300 text-lg">{stat.label}</div>
                </div>
              ))}
            </StaggeredContainer>

            {/* Why Choose Us */}
            <AnimatedSection animation="slideInUp" className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm p-12 rounded-2xl border border-gray-700/50 hover:border-purple-500/30 transition-all duration-500 mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                {t('about.why.title')}
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <StaggeredContainer className="space-y-6" staggerDelay={100}>
                  <div className="flex items-start space-x-4 group">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">{t('about.why.agile.title')}</h3>
                      <p className="text-gray-300">{t('about.why.agile.desc')}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">{t('about.why.support.title')}</h3>
                      <p className="text-gray-300">{t('about.why.support.desc')}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">{t('about.why.scalable.title')}</h3>
                      <p className="text-gray-300">{t('about.why.scalable.desc')}</p>
                    </div>
                  </div>
                </StaggeredContainer>

                <StaggeredContainer className="space-y-6" staggerDelay={150}>
                  <div className="flex items-start space-x-4 group">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">{t('about.why.modern.title')}</h3>
                      <p className="text-gray-300">{t('about.why.modern.desc')}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">{t('about.why.transparent.title')}</h3>
                      <p className="text-gray-300">{t('about.why.transparent.desc')}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">{t('about.why.postlaunch.title')}</h3>
                      <p className="text-gray-300">{t('about.why.postlaunch.desc')}</p>
                    </div>
                  </div>
                </StaggeredContainer>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
