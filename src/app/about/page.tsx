'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
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
          <div className="text-center mb-16">
            <div className="inline-block mb-8">
              <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
                {t('nav.about')}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                Tentang Kancra Labs
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Kami adalah tim developer berpengalaman yang berfokus pada inovasi dan kualitas dalam setiap project
            </p>
          </div>

          {/* About Content */}
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Visi & Misi Kami
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Kancra Labs didirikan dengan visi menjadi partner teknologi terpercaya untuk bisnis Indonesia. 
                  Kami percaya bahwa teknologi yang tepat dapat mengubah cara bisnis beroperasi dan memberikan 
                  dampak positif yang signifikan.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Misi kami adalah menghadirkan solusi perangkat lunak berkualitas tinggi yang tidak hanya 
                  memenuhi kebutuhan klien, tetapi juga melampaui ekspektasi mereka dengan pendekatan inovatif 
                  dan teknologi terdepan.
                </p>
              </div>
              <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎯</div>
                  <h3 className="text-2xl font-bold text-white mb-4">Fokus Utama</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Kualitas & Keandalan</li>
                    <li>• Inovasi Berkelanjutan</li>
                    <li>• Kepuasan Klien</li>
                    <li>• Teknologi Terdepan</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">💡</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Inovasi</h3>
                <p className="text-gray-300">
                  Selalu mencari cara baru dan lebih baik untuk menyelesaikan tantangan teknologi
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🔧</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Keahlian</h3>
                <p className="text-gray-300">
                  Tim berpengalaman dengan expertise mendalam di berbagai teknologi modern
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Kolaborasi</h3>
                <p className="text-gray-300">
                  Bekerja sama dengan klien sebagai partner untuk mencapai tujuan bersama
                </p>
              </div>
            </div>

            {/* Team */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Tim <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Expert</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Didukung oleh tim developer, designer, dan project manager berpengalaman
              </p>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-4 gap-8 text-center mb-20">
              {[
                { number: '50+', label: 'Project Selesai' },
                { number: '25+', label: 'Klien Puas' },
                { number: '3+', label: 'Tahun Pengalaman' },
                { number: '15+', label: 'Teknologi Dikuasai' }
              ].map((stat, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-lg">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm p-12 rounded-2xl border border-gray-700/50 mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                Mengapa Memilih Kancra Labs?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">Pendekatan Agile</h3>
                      <p className="text-gray-300">Development dengan metodologi agile untuk hasil yang cepat dan berkualitas</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">24/7 Support</h3>
                      <p className="text-gray-300">Tim support yang siap membantu kapanpun Anda membutuhkan</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">Scalable Architecture</h3>
                      <p className="text-gray-300">Arsitektur yang dapat berkembang seiring pertumbuhan bisnis Anda</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">Modern Tech Stack</h3>
                      <p className="text-gray-300">Menggunakan teknologi terbaru dan terbaik di industri</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">Transparent Process</h3>
                      <p className="text-gray-300">Proses development yang transparan dengan update berkala</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">Post-Launch Support</h3>
                      <p className="text-gray-300">Dukungan berkelanjutan setelah project selesai diluncurkan</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
