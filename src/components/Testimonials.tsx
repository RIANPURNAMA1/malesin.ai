const testimonials = [
  {
    quote: 'Response rate kami meningkat 90% sejak menggunakan malesin.ai. Customer tidak perlu menunggu lama untuk mendapatkan jawaban.',
    name: 'Rianti Yahya',
    role: 'CEO & Founder - Vio Optical Clinic',
  },
  {
    quote: 'Platform yang sangat membantu operasional customer service kami. Otomatisasi order dari chat benar-benar menghemat waktu tim.',
    name: 'Tantan Supriantna',
    role: 'Head Customer Relation - Rumah Zakat',
  },
  {
    quote: 'malesin.ai memberikan solusi AI customer service yang terjangkau tanpa mengorbankan kualitas. Sangat direkomendasikan untuk UMKM.',
    name: 'Hargyo T. N. Ignatis, Ph.D',
    role: 'Direktur - Multimedia Nusantara Polytechnic',
  },
  {
    quote: 'Integrasinya mudah, AI-nya cerdas, dan tim support sangat responsif. Investasi terbaik untuk digitalisasi bisnis kami.',
    name: 'Gery Wilianto',
    role: 'CEO & Founder - DokterHub',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Bukti Nyata dari Bisnis yang Menggunakan{' '}
            <span className="text-primary">malesin.ai</span>
          </h2>
          <p className="mt-4 text-lg text-slate-500 leading-relaxed">
            malesin.ai hadir untuk UMKM yang butuh AI customer service terjangkau hingga
            brand berkembang yang butuh platform omnichannel lengkap.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl border border-slate-200 p-6 hover:border-primary-50 hover:shadow-lg transition-all duration-300"
            >
              <svg className="w-8 h-8 text-primary-50 mb-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C9.591 11.69 11 13.154 11 15c0 2.21-1.79 4-4 4-1.2 0-2.2-.484-2.883-1.241l-.204-.22-.33-.218zM13.583 17.321C12.553 16.227 12 15 12 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C18.591 11.69 20 13.154 20 15c0 2.21-1.79 4-4 4-1.2 0-2.2-.484-2.883-1.241l-.204-.22-.33-.218z" />
              </svg>
              <p className="text-slate-600 leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center text-sm font-semibold text-primary">
                  {t.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
