import { Link, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { getTikTokOAuthUrl } from '../lib/tiktok'

export default function TikTokAuthorize() {
  const navigate = useNavigate()
  const hasClientKey = !!import.meta.env.VITE_TIKTOK_CLIENT_KEY

  const handleAuthorize = () => {
    if (hasClientKey) {
      try {
        const url = getTikTokOAuthUrl()
        window.location.href = url
      } catch {
        navigate('/auth/tiktok/callback?code=demo_code_12345&state=demo')
      }
    } else {
      navigate('/auth/tiktok/callback?code=demo_code_12345&state=demo')
    }
  }

  return (
    <>
      <Helmet>
        <title>Authorize TikTok - malesin.ai</title>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-primary-light via-white to-primary-50 flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-primary transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to malesin.ai
          </Link>

          <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
            {!hasClientKey && (
              <div className="bg-amber-50 border-b border-amber-200 px-6 py-3 flex items-center gap-2">
                <span className="text-xs font-semibold text-amber-700 bg-amber-200 px-2 py-0.5 rounded uppercase tracking-wide">
                  Demo Environment
                </span>
                <span className="text-xs text-amber-600">
                  — simulated authorization for testing
                </span>
              </div>
            )}

            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16.6 5.8C15.5 4.7 14.6 3.4 14.3 2H11v12.6c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7s1.2-2.7 2.7-2.7c.3 0 .5 0 .8.1V8.3c-.3 0-.5-.1-.8-.1-3.7 0-6.7 3-6.7 6.7s3 6.7 6.7 6.7 6.7-3 6.7-6.7V11c1.4 1.1 3.2 1.7 5 1.7v-3c-1.1 0-2.2-.3-3.1-1.2z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-sm font-semibold text-slate-900">Malesin.AI</h2>
                  <p className="text-xs text-slate-500">male sin.ai</p>
                </div>
              </div>

              <p className="text-sm text-slate-700 mb-4">
                <strong>Malesin.AI</strong> wants to access:
              </p>

              <div className="bg-slate-50 rounded-xl p-4 mb-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">Basic Profile Information</p>
                    <p className="text-xs text-slate-500">Username, display name, profile picture, and user ID</p>
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                By clicking Authorize, you allow this app to access your TikTok account
                information as described above.
              </p>

              <div className="flex flex-col gap-3">
                <button
                  onClick={handleAuthorize}
                  className="w-full text-center px-6 py-3 bg-black hover:bg-slate-800 text-white font-medium rounded-md transition-colors"
                >
                  Authorize
                </button>
                <Link
                  to="/login"
                  className="w-full text-center px-6 py-3 border border-slate-300 hover:bg-slate-50 text-slate-700 font-medium rounded-md transition-colors"
                >
                  Cancel
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
