'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

export default function Portfolio() {
  const { t, language } = useLanguage();

  // Sample portfolio data with translation keys
  const portfolioItems = [
    {
      id: 1,
      titleKey: 'project.ecommerce.title',
      descKey: 'project.ecommerce.desc',
      image: '/api/placeholder/400/300',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Stripe'],
      githubUrl: 'https://github.com/kancralabs/ecommerce-platform',
      demoUrl: 'https://ecommerce-demo.kancralabs.com',
      category: 'Web Development'
    },
    {
      id: 2,
      titleKey: 'project.banking.title',
      descKey: 'project.banking.desc',
      image: '/api/placeholder/400/300',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Socket.io'],
      githubUrl: 'https://github.com/kancralabs/mobile-banking',
      demoUrl: 'https://banking-demo.kancralabs.com',
      category: 'Mobile Development'
    },
    {
      id: 3,
      titleKey: 'project.ai.title',
      descKey: 'project.ai.desc',
      image: '/api/placeholder/400/300',
      technologies: ['Python', 'TensorFlow', 'FastAPI', 'Redis', 'OpenAI'],
      githubUrl: 'https://github.com/kancralabs/ai-chat-assistant',
      demoUrl: 'https://ai-chat-demo.kancralabs.com',
      category: 'AI & Machine Learning'
    },
    {
      id: 4,
      titleKey: 'project.cloud.title',
      descKey: 'project.cloud.desc',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'D3.js', 'Go', 'Docker', 'Kubernetes'],
      githubUrl: 'https://github.com/kancralabs/cloud-dashboard',
      demoUrl: 'https://cloud-demo.kancralabs.com',
      category: 'Cloud Solutions'
    },
    {
      id: 5,
      titleKey: 'project.lms.title',
      descKey: 'project.lms.desc',
      image: '/api/placeholder/400/300',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'WebRTC', 'AWS'],
      githubUrl: 'https://github.com/kancralabs/lms-platform',
      demoUrl: 'https://lms-demo.kancralabs.com',
      category: 'Web Development'
    },
    {
      id: 6,
      titleKey: 'project.iot.title',
      descKey: 'project.iot.desc',
      image: '/api/placeholder/400/300',
      technologies: ['JavaScript', 'MQTT', 'InfluxDB', 'Grafana', 'Arduino'],
      githubUrl: 'https://github.com/kancralabs/iot-monitoring',
      demoUrl: 'https://iot-demo.kancralabs.com',
      category: 'IoT Solutions'
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
                {t('nav.portfolio')}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                {t('portfolio.title')}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {t('portfolio.description')}
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {portfolioItems.map((item) => (
              <div key={item.id} className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-[1.02] overflow-hidden">
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-t-2xl">
                  <div className="w-full h-64 bg-gradient-to-br from-purple-500/20 to-purple-600/20 flex items-center justify-center">
                    {/* Placeholder for project image */}
                    <div className="text-6xl opacity-50">🚀</div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-200 transition-colors">
                    {t(item.titleKey)}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {t(item.descKey)}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.technologies.map((tech, index) => (
                      <span key={index} className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <a
                      href={item.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 group/btn bg-gradient-to-r from-gray-700 to-gray-800 text-white px-6 py-3 rounded-full font-semibold text-center hover:from-gray-600 hover:to-gray-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span className="group-hover/btn:translate-x-1 transition-transform">
                        {t('portfolio.github')}
                      </span>
                    </a>
                    
                    <a
                      href={item.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 group/btn bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-full font-semibold text-center hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-purple-500/25"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span className="group-hover/btn:translate-x-1 transition-transform">
                        {t('portfolio.demo')}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-20">
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm p-12 rounded-2xl border border-gray-700/50 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Punya ide project menarik?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Mari diskusikan bagaimana kami dapat membantu mewujudkan visi teknologi Anda
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
                <Link href="/" className="group border-2 border-purple-500 text-purple-300 hover:text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-500/10 transition-all duration-300 transform hover:scale-105">
                  Kembali ke Home
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
