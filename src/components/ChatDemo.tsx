export default function ChatDemo() {
  return (
    <section className="py-20 sm:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary-light border border-primary-50 rounded-full px-4 py-1.5 mb-6">
              <span className="text-sm font-medium text-primary-dark">Jualan Otomatis, Langsung dari Chat</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
              Otomatisasi Order
            </h2>
            <div className="mt-4 space-y-3">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-primary shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                <span className="text-slate-600">Ongkos kirim otomatis</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-primary shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                <span className="text-slate-600">Pembayaran terintegrasi</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-primary shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                <span className="text-slate-600">Tanpa proses manual, semua leads terjaga</span>
              </div>
            </div>
            <p className="mt-6 text-slate-500 leading-relaxed">
              Biarkan AI membalas chat, mengelola leads, dan menindaklanjuti customer
              secara otomatis, 24/7. Timing cepat, closing lebih banyak.
            </p>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
              <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center text-xs font-semibold text-primary">
                    CS
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">Customer Service</p>
                    <p className="text-xs text-green-600">Online</p>
                  </div>
                </div>
                <span className="text-xs text-slate-400">AI Agent aktif</span>
              </div>

              <div className="p-4 space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-xs font-semibold text-amber-600 shrink-0">
                    P
                  </div>
                  <div className="bg-slate-100 rounded-2xl rounded-tl-none px-4 py-2.5 max-w-[80%]">
                    <p className="text-sm text-slate-700">Halo, saya mau order 1 black oversized t-shirt ukuran M. Ada?</p>
                  </div>
                </div>

                <div className="flex gap-3 justify-end">
                  <div className="bg-primary text-white rounded-2xl rounded-tr-none px-4 py-2.5 max-w-[80%]">
                    <p className="text-sm">Ya, size M black tersedia.</p>
                    <div className="mt-2 space-y-0.5 text-sm text-primary-50">
                      <p>Harga: Rp185.000</p>
                      <p>Ongkir Bandung: Rp18.000</p>
                      <p className="font-medium text-white">Total: Rp203.000</p>
                    </div>
                    <p className="text-sm text-primary-50 mt-2">
                      Silakan selesaikan pembayaran di: malesin.ai/pay/10293
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-xs font-semibold text-white shrink-0">
                    AI
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-xs font-semibold text-amber-600 shrink-0">
                    P
                  </div>
                  <div className="bg-slate-100 rounded-2xl rounded-tl-none px-4 py-2.5 max-w-[80%]">
                    <p className="text-sm text-slate-700">Oke, saya bayar sekarang ya.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-xs font-semibold text-amber-600 shrink-0">
                    P
                  </div>
                  <div className="bg-slate-100 rounded-2xl rounded-tl-none px-4 py-2.5 max-w-[80%]">
                    <p className="text-sm text-slate-700">Done ✓</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-400 italic">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  AI Agent membalas secara otomatis
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
