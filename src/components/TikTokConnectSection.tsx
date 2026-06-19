import { Link } from 'react-router-dom'

export default function TikTokConnectSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.6 5.8C15.5 4.7 14.6 3.4 14.3 2H11v12.6c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7s1.2-2.7 2.7-2.7c.3 0 .5 0 .8.1V8.3c-.3 0-.5-.1-.8-.1-3.7 0-6.7 3-6.7 6.7s3 6.7 6.7 6.7 6.7-3 6.7-6.7V11c1.4 1.1 3.2 1.7 5 1.7v-3c-1.1 0-2.2-.3-3.1-1.2z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-slate-400">TikTok Integration</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Kelola TikTok & Instagram dari Satu Dashboard
            </h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              Lebih dari sekadar membalas chat otomatis di semua platform. Malesin.AI
              terintegrasi dengan TikTok dan Instagram untuk menjadwalkan dan memposting
              konten secara otomatis — atur strategi media sosial Anda tanpa bolak-balik
              aplikasi. Didukung oleh TikTok Developer Platform untuk koneksi yang aman
              dan andal.
            </p>
            <Link
              to="/auth/tiktok/authorize"
              className="inline-flex items-center gap-2 px-6 py-3 bg-black hover:bg-slate-700 text-white font-medium rounded-md transition-all duration-200"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.6 5.8C15.5 4.7 14.6 3.4 14.3 2H11v12.6c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7s1.2-2.7 2.7-2.7c.3 0 .5 0 .8.1V8.3c-.3 0-.5-.1-.8-.1-3.7 0-6.7 3-6.7 6.7s3 6.7 6.7 6.7 6.7-3 6.7-6.7V11c1.4 1.1 3.2 1.7 5 1.7v-3c-1.1 0-2.2-.3-3.1-1.2z" />
              </svg>
              Connect TikTok
            </Link>
          </div>

          <div className="flex-shrink-0">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 w-72">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="text-sm text-slate-300">Connection Status</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
                  <div className="w-10 h-10 rounded-full bg-slate-600 animate-pulse" />
                  <div className="flex-1">
                    <div className="h-3 w-24 bg-slate-600 rounded animate-pulse" />
                    <div className="h-2 w-16 bg-slate-600 rounded mt-2 animate-pulse" />
                  </div>
                </div>
                <div className="h-9 bg-white/5 rounded-full animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
