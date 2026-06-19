import { useEffect, useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { storeTikTokAuth } from '../lib/tiktok'
import type { TikTokUser } from '../lib/tiktok'

const CLIENT_KEY = 'sbawxkqwkx6rts192o'
const CLIENT_SECRET = 'COync1flsEt0OAiTyMsjsSrHMUCOv3D2'

async function exchangeCode(code: string, redirectUri: string): Promise<TikTokUser | null> {
  // 1) Try Vercel API route
  try {
    const res = await fetch('/api/tiktok/exchange', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code, redirectUri }),
    })
    const data = await res.json()
    if (!data.error && data.username) return data as TikTokUser
    console.warn('API error, trying direct exchange:', data)
  } catch (e) {
    console.warn('API fetch failed, trying direct exchange:', e)
  }

  // 2) Direct exchange from browser (sandbox only — secret exposed client-side)
  try {
    const tokenRes = await fetch('https://open.tiktokapis.com/v2/oauth/token/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_key: CLIENT_KEY,
        client_secret: CLIENT_SECRET,
        code,
        grant_type: 'authorization_code',
        redirect_uri: redirectUri,
      }),
    })
    const tokenData = await tokenRes.json()
    if (!tokenData.access_token) {
      console.error('Token exchange failed:', tokenData)
      return null
    }

    const userRes = await fetch(
      'https://open.tiktokapis.com/v2/user/info/?fields=open_id,avatar_url,display_name,username',
      { headers: { Authorization: `Bearer ${tokenData.access_token}` } },
    )
    const userData = await userRes.json()
    const user = userData.data?.user
    if (!user) {
      console.error('User info fetch failed:', userData)
      return null
    }

    return {
      id: user.open_id || user.id || '',
      username: user.username || '',
      displayName: user.display_name || '',
      avatarUrl: user.avatar_url || '',
    }
  } catch (e) {
    console.error('Direct exchange error:', e)
    return null
  }
}

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

    const redirectUri =
      import.meta.env.VITE_TIKTOK_REDIRECT_URI ||
      `${window.location.origin}/auth/tiktok/callback`

    exchangeCode(code, redirectUri)
      .then((user) => {
        if (user) {
          storeTikTokAuth(code, user)
          setStatus('success')
        } else {
          setStatus('error')
          setError(
            'Gagal mendapatkan data pengguna dari TikTok. Coba buka browser console (F12) untuk detail error, atau pastikan sandbox account "retack.id" digunakan.',
          )
        }
      })
      .catch((e) => {
        setStatus('error')
        setError('Error: ' + (e instanceof Error ? e.message : 'Unknown'))
      })
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
