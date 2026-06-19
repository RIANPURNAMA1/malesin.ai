export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-light/50 via-white to-primary-50/50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pt-28 sm:pb-32">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary-light border border-primary-50 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary-dark">
              Platform AI Agent untuk Bisnis Indonesia
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1]">
            Satu AI untuk Mengelola{' '}
            <span className="text-primary">
              Chat, CRM, dan Otomatisasi Bisnis
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
            malesin.ai adalah platform AI agent terdepan di Indonesia yang menggabungkan
            AI agent cerdas, omnichannel CRM, dan sistem order otomatis dalam satu platform.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#mulai"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-primary text-white font-medium rounded-full hover:bg-primary-dark transition-colors shadow-lg shadow-primary-50"
            >
              Mulai Gratis
            </a>
            <a
              href="#demo"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 border-2 border-slate-200 text-slate-700 font-medium rounded-full hover:border-slate-300 hover:bg-slate-50 transition-colors"
            >
              Coba Demo Sekarang
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            <p className="text-sm text-slate-400 font-medium">
              Dipercaya oleh 3.000+ bisnis dan brand terkemuka di Indonesia
            </p>
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 border-2 border-white"
                />
              ))}
              <div className="w-10 h-10 rounded-full bg-primary-50 border-2 border-white flex items-center justify-center">
                <span className="text-xs font-semibold text-primary">3K+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
