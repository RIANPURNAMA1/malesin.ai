import { useEffect, useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { storeTikTokAuth } from '../lib/tiktok'

export default function TikTokCallback() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')
  const [error, setError] = useState('')

  useEffect(() => {
    const code = searchParams.get('code')
    const state = searchParams.get('state')
    const savedState = sessionStorage.getItem('tiktok_oauth_state')
    const errorParam = searchParams.get('error')

    sessionStorage.removeItem('tiktok_oauth_state')

    if (errorParam) {
      setStatus('error')
      setError('Authorisasi TikTok ditolak atau dibatalkan.')
      return
    }

    if (!code) {
      setStatus('error')
      setError('Kode otorisasi tidak ditemukan. Silakan coba lagi.')
      return
    }

    if (state && savedState && state !== savedState) {
      setStatus('error')
      setError('State mismatch. Kemungkinan serangan CSRF terdeteksi.')
      return
    }

    storeTikTokAuth(code)

    setStatus('success')

    setTimeout(() => {
      navigate('/dashboard', { replace: true })
    }, 1500)
  }, [searchParams, navigate])

  return (
    <>
      <Helmet>
        <title>Memproses... - malesin.ai</title>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-primary-light via-white to-primary-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-10 max-w-md w-full text-center">
          {status === 'loading' && (
            <div className="space-y-4">
              <div className="w-14 h-14 border-4 border-primary-light border-t-primary rounded-full animate-spin mx-auto" />
              <div>
                <h1 className="text-lg font-semibold text-slate-900">Connecting TikTok Account...</h1>
                <p className="text-sm text-slate-500 mt-1">
                  Please wait while we connect your account.
                </p>
              </div>
            </div>
          )}

          {status === 'success' && (
            <div className="space-y-4">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h1 className="text-lg font-semibold text-slate-900">Connected!</h1>
                <p className="text-sm text-slate-500 mt-1">
                  Redirecting to dashboard...
                </p>
              </div>
            </div>
          )}

          {status === 'error' && (
            <div className="space-y-4">
              <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-7 h-7 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <div>
                <h1 className="text-lg font-semibold text-slate-900">Autentikasi Gagal</h1>
                <p className="text-sm text-red-500 mt-1">{error}</p>
              </div>
              <button
                onClick={() => navigate('/login')}
                className="inline-flex items-center px-5 py-2.5 bg-primary hover:bg-primary-dark text-white text-sm font-medium rounded-full transition-colors"
              >
                Coba Lagi
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
