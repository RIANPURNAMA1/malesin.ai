import logoMalesin from '../assets/logo_malesin.ai.png'

const footerLinks = {
  Product: [
    { label: 'AI Chat Agent', href: '#' },
    { label: 'Omnichannel CRM', href: '#' },
    { label: 'Marketing Automation', href: '#' },
    { label: 'Order Management', href: '#' },
  ],
  Legal: [
    // { label: 'Syarat & Ketentuan', href: '/terms' },
    { label: 'Terms & Conditions', href: '/terms-of-service' },
    // { label: 'Kebijakan Privasi', href: '/privacy' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Kebijakan Pengembalian', href: '/refund' },
  ],
  Company: [
    { label: 'Blog', href: '#' },
    { label: 'Kontak', href: '#kontak' },
    { label: 'Karir', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-4">
              <img src={logoMalesin} alt="malesin.ai" className="h-8 w-auto" />
              <span className="text-xl font-semibold text-white tracking-tight">
                malesin<span className="text-primary">.ai</span>
              </span>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Platform AI agent Indonesia untuk mengotomatisasi chat, CRM, dan penjualan
              bisnis Anda.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} malesin.ai. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-slate-500">Indonesia</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
