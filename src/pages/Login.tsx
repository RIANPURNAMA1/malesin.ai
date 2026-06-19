import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import TikTokConnectionStatus from '../components/tiktok/TikTokConnectionStatus'
import { isTikTokConnected } from '../lib/tiktok'

export default function Login() {
  const connected = isTikTokConnected()

  return (
    <>
      <Helmet>
        <title>Login - malesin.ai</title>
        <meta name="description" content="Masuk atau hubungkan akun TikTok Anda ke Malesin.AI." />
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

          <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-slate-900">Masuk ke Malesin.AI</h1>
              <p className="text-sm text-slate-500 mt-1">
                Hubungkan akun sosial media Anda untuk memulai.
              </p>
            </div>

            <div className="flex flex-col items-center gap-4">
              {connected ? (
                <div className="flex flex-col items-center gap-3">
                  <TikTokConnectionStatus connected={true} />
                  <Link
                    to="/dashboard"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-md transition-colors"
                  >
                    Buka Dashboard
                  </Link>
                </div>
              ) : (
                <Link
                  to="/auth/tiktok/authorize"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-black hover:bg-slate-800 text-white font-medium rounded-md transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16.6 5.8C15.5 4.7 14.6 3.4 14.3 2H11v12.6c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7s1.2-2.7 2.7-2.7c.3 0 .5 0 .8.1V8.3c-.3 0-.5-.1-.8-.1-3.7 0-6.7 3-6.7 6.7s3 6.7 6.7 6.7 6.7-3 6.7-6.7V11c1.4 1.1 3.2 1.7 5 1.7v-3c-1.1 0-2.2-.3-3.1-1.2z" />
                  </svg>
                  Connect TikTok
                </Link>
              )}
            </div>

            <p className="text-xs text-slate-400 text-center mt-6">
              Dengan melanjutkan, Anda menyetujui{' '}
              <Link to="/terms-of-service" className="text-primary hover:underline">
                Terms of Service
              </Link>{' '}
              dan{' '}
              <Link to="/privacy-policy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
