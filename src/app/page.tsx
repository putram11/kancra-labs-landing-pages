export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold text-slate-800 dark:text-white">
            Kancra Labs
          </div>
          <div className="flex space-x-6">
            <a href="#about" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors">
              About
            </a>
            <a href="#services" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors">
              Services
            </a>
            <a href="#contact" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 dark:text-white mb-6">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Kancra Labs
            </span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
            Innovation meets excellence. We build cutting-edge solutions that transform ideas into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Get Started
            </button>
            <button className="border border-slate-300 text-slate-700 dark:text-slate-200 dark:border-slate-600 px-8 py-3 rounded-lg font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              Learn More
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-24 grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">Fast Performance</h3>
            <p className="text-slate-600 dark:text-slate-300">Lightning-fast solutions built with modern technologies and optimized for speed.</p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">Reliable</h3>
            <p className="text-slate-600 dark:text-slate-300">Rock-solid infrastructure and battle-tested solutions you can depend on.</p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">Innovative</h3>
            <p className="text-slate-600 dark:text-slate-300">Cutting-edge technology and creative solutions for tomorrow's challenges.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-100 dark:bg-slate-800 mt-24">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center text-slate-600 dark:text-slate-400">
            <p>&copy; 2025 Kancra Labs. All rights reserved.</p>
            <p className="mt-2 text-sm">Built with Next.js, TypeScript, and Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
