export default function CTA() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
          Ubah Setiap Percakapan{' '}
          <span className="text-primary">Jadi Penjualan</span>
        </h2>
        <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
          Lihat bagaimana AI membantu tim balas lebih cepat, follow-up otomatis,
          dan closing lebih banyak tanpa nambah tim.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#demo"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-primary text-white font-medium rounded-full hover:bg-primary-dark transition-colors shadow-lg shadow-primary-50"
          >
            Coba Demo Sekarang
          </a>
          <a
            href="#mulai"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 border-2 border-slate-200 text-slate-700 font-medium rounded-full hover:border-slate-300 hover:bg-slate-50 transition-colors"
          >
            Mulai Gratis
          </a>
        </div>
      </div>
    </section>
  )
}
