import { useState } from 'react'
import { getTikTokOAuthUrl } from '../../lib/tiktok'

export default function TikTokLoginButton() {
  const [error, setError] = useState('')

  const handleLogin = () => {
    setError('')
    try {
      const url = getTikTokOAuthUrl()
      window.location.href = url
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Gagal memulai autentikasi TikTok.')
    }
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <button
        onClick={handleLogin}
        className="inline-flex items-center gap-3 px-6 py-3 bg-black hover:bg-slate-800 text-white font-medium rounded-md transition-all duration-200 shadow-md hover:shadow-lg"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16.6 5.8C15.5 4.7 14.6 3.4 14.3 2H11v12.6c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7s1.2-2.7 2.7-2.7c.3 0 .5 0 .8.1V8.3c-.3 0-.5-.1-.8-.1-3.7 0-6.7 3-6.7 6.7s3 6.7 6.7 6.7 6.7-3 6.7-6.7V11c1.4 1.1 3.2 1.7 5 1.7v-3c-1.1 0-2.2-.3-3.1-1.2z" />
        </svg>
        Continue with TikTok
      </button>
      {error && (
        <p className="text-xs text-red-500 text-center max-w-xs">{error}</p>
      )}
    </div>
  )
}
