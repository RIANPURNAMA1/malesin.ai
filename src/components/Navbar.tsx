import { useState } from 'react'
import logoMalesin from '../assets/logo_malesin.ai.png'

const navLinks = [
  { label: 'Fitur', href: '#fitur' },
  { label: 'Blog', href: '#blog' },
  { label: 'Kontak', href: '#kontak' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-2">
            <img src={logoMalesin} alt="malesin.ai" className="h-8 w-auto" />
            <span className="text-xl font-semibold text-slate-900 tracking-tight">
              malesin<span className="text-primary">.ai</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <span className="text-sm font-medium text-slate-400">Indonesia</span>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#masuk"
              className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors px-4 py-2"
            >
              Masuk
            </a>
            <a
              href="#demo"
              className="text-sm font-medium text-white bg-primary hover:bg-primary-dark transition-colors px-5 py-2.5 rounded-full"
            >
              Coba Demo Sekarang
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 border-t border-slate-100 pt-4">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-slate-600 hover:text-slate-900"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <span className="text-sm font-medium text-slate-400">Indonesia</span>
              <hr className="border-slate-100" />
              <a href="#masuk" className="text-sm font-medium text-slate-700">Masuk</a>
              <a
                href="#demo"
                className="text-sm font-medium text-white bg-primary hover:bg-primary-dark transition-colors px-5 py-2.5 rounded-full text-center"
              >
                Coba Demo Sekarang
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
