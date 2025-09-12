export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 overflow-x-hidden">
      {/* Enhanced Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl animate-bounce delay-500"></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-20 right-20 w-4 h-4 bg-purple-400 rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
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

      {/* Fixed Header with Gradient */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-gradient-to-r from-black/80 via-gray-900/80 to-purple-900/80 border-b border-purple-500/20">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent hover:from-purple-300 hover:to-white transition-all duration-300">
              Kancra Labs
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="relative group text-gray-300 hover:text-white transition-all duration-300">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#services" className="relative group text-gray-300 hover:text-white transition-all duration-300">
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#portfolio" className="relative group text-gray-300 hover:text-white transition-all duration-300">
                Portfolio
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#contact" className="relative group text-gray-300 hover:text-white transition-all duration-300">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>
            
            {/* Mobile Menu Button */}
            <button className="md:hidden text-gray-300 hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </nav>
        </div>
        
        {/* Gradient bottom border */}
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="text-center max-w-5xl mx-auto">
          {/* Welcome Badge */}
          <div className="inline-block mb-8">
            <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
              Welcome to the Future of Software Solutions
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
              Professional Software Solutions
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Kami menghadirkan solusi perangkat lunak yang inovatif dan berkualitas tinggi. 
              Dari konsep hingga implementasi, kami membantu bisnis Anda bertransformasi digital 
              dengan teknologi terdepan dan pendekatan yang profesional.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button className="group bg-gradient-to-r from-purple-600 to-purple-700 text-white px-10 py-4 rounded-full font-semibold text-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-purple-500/25">
              <span className="flex items-center justify-center gap-2">
                Mulai Proyek Anda
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            <button className="group border-2 border-purple-500 text-purple-300 hover:text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-purple-500/10 transition-all duration-300 transform hover:scale-105">
              <span className="flex items-center justify-center gap-2">
                Lihat Portfolio
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </span>
            </button>
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
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Custom Development</h3>
              <p className="text-gray-300 leading-relaxed relative z-10">Solusi perangkat lunak yang dibuat khusus sesuai kebutuhan bisnis Anda dengan teknologi modern dan scalable.</p>
            </div>

            <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 rounded-full -translate-y-10 translate-x-10"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">High Performance</h3>
              <p className="text-gray-300 leading-relaxed relative z-10">Aplikasi dengan performa tinggi yang dioptimasi untuk memberikan pengalaman pengguna yang superior.</p>
            </div>

            <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-green-500/10 rounded-full -translate-y-10 translate-x-10"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Secure & Reliable</h3>
              <p className="text-gray-300 leading-relaxed relative z-10">Keamanan tingkat enterprise dengan infrastruktur yang dapat diandalkan untuk mendukung operasional bisnis Anda.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Technology Stack Section */}
      <section className="relative z-10 py-20 bg-gradient-to-r from-purple-900/20 to-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Technology <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Stack</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Kami menggunakan teknologi terdepan untuk membangun solusi yang scalable dan modern
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: 'React', icon: '⚛️' },
              { name: 'Next.js', icon: '▲' },
              { name: 'TypeScript', icon: 'TS' },
              { name: 'Node.js', icon: '🟢' },
              { name: 'Python', icon: '🐍' },
              { name: 'AWS', icon: '☁️' }
            ].map((tech, index) => (
              <div key={index} className="group flex flex-col items-center p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-110">
                <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">{tech.icon}</div>
                <h3 className="text-white font-semibold">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Layanan komprehensif untuk memenuhi semua kebutuhan teknologi bisnis Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Web Development',
                description: 'Aplikasi web modern dengan performa tinggi dan UI/UX yang menarik',
                icon: '🌐',
                color: 'from-blue-500 to-purple-600'
              },
              {
                title: 'Mobile Apps',
                description: 'Aplikasi mobile native dan cross-platform untuk iOS dan Android',
                icon: '📱',
                color: 'from-green-500 to-blue-600'
              },
              {
                title: 'Cloud Solutions',
                description: 'Infrastruktur cloud yang scalable dan aman untuk pertumbuhan bisnis',
                icon: '☁️',
                color: 'from-purple-500 to-pink-600'
              },
              {
                title: 'AI & Machine Learning',
                description: 'Solusi AI dan ML untuk otomasi dan insight bisnis yang cerdas',
                icon: '🤖',
                color: 'from-orange-500 to-red-600'
              },
              {
                title: 'DevOps & CI/CD',
                description: 'Optimasi deployment dan monitoring dengan praktik DevOps terbaik',
                icon: '⚙️',
                color: 'from-cyan-500 to-blue-600'
              },
              {
                title: 'Consulting',
                description: 'Konsultasi teknologi untuk strategi digital transformation',
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
              { number: '50+', label: 'Projects Completed' },
              { number: '25+', label: 'Happy Clients' },
              { number: '3+', label: 'Years Experience' },
              { number: '99%', label: 'Client Satisfaction' }
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
              Ready to Start Your <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Project?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Mari diskusikan bagaimana kami dapat membantu mewujudkan visi teknologi Anda
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <button className="group bg-gradient-to-r from-purple-600 to-purple-700 text-white px-12 py-4 rounded-full font-semibold text-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-purple-500/25">
                <span className="flex items-center justify-center gap-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Hubungi Kami
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
              <button className="group border-2 border-purple-500 text-purple-300 hover:text-white px-12 py-4 rounded-full font-semibold text-lg hover:bg-purple-500/10 transition-all duration-300 transform hover:scale-105">
                <span className="flex items-center justify-center gap-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Live Chat
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
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-gray-300">hello@kancralabs.com</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-gray-300">+62 XXX XXXX XXXX</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">Location</h3>
                <p className="text-gray-300">Jakarta, Indonesia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-gradient-to-r from-gray-900 to-black border-t border-purple-500/20">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent mb-4">
                Kancra Labs
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Menghadirkan solusi perangkat lunak inovatif untuk transformasi digital bisnis Anda. 
                Berpengalaman dalam teknologi terdepan dengan pendekatan profesional.
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
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-300">
                {['Web Development', 'Mobile Apps', 'Cloud Solutions', 'AI & ML', 'DevOps'].map((service, index) => (
                  <li key={index} className="hover:text-purple-400 transition-colors cursor-pointer">{service}</li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-300">
                {['About Us', 'Portfolio', 'Careers', 'Blog', 'Contact'].map((item, index) => (
                  <li key={index} className="hover:text-purple-400 transition-colors cursor-pointer">{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700/50 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">
                &copy; 2025 Kancra Labs. All rights reserved.
              </p>
              <div className="flex space-x-6 text-gray-400">
                <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-purple-400 transition-colors">Cookies</a>
              </div>
            </div>
          </div>
        </div>

        {/* Gradient line */}
        <div className="h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      </footer>
    </div>
  );
}
