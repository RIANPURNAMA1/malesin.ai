import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { getTikTokUser, isTikTokConnected, disconnectTikTok } from '../lib/tiktok'
import TikTokConnectionStatus from '../components/tiktok/TikTokConnectionStatus'

export default function Dashboard() {
  const connected = isTikTokConnected()
  const user = getTikTokUser()

  const handleDisconnect = () => {
    disconnectTikTok()
    window.location.reload()
  }

  return (
    <>
      <Helmet>
        <title>Dashboard - malesin.ai</title>
        <meta name="description" content="Dashboard Malesin.AI - Kelola akun dan integrasi TikTok Anda." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-primary-light via-white to-primary-50">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-primary transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to malesin.ai
            </Link>
          </div>

          <div className="mb-8">
            <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
            <p className="text-sm text-slate-500 mt-1">
              Kelola integrasi dan pengaturan akun Anda.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16.6 5.8C15.5 4.7 14.6 3.4 14.3 2H11v12.6c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7s1.2-2.7 2.7-2.7c.3 0 .5 0 .8.1V8.3c-.3 0-.5-.1-.8-.1-3.7 0-6.7 3-6.7 6.7s3 6.7 6.7 6.7 6.7-3 6.7-6.7V11c1.4 1.1 3.2 1.7 5 1.7v-3c-1.1 0-2.2-.3-3.1-1.2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">TikTok Account Connected</h3>
                    <TikTokConnectionStatus connected={connected} />
                  </div>
                </div>
              </div>

              {connected && user && (
                <div className="space-y-4">
                  <div className="bg-slate-50 rounded-xl p-4 space-y-3">
                    <div className="flex items-center gap-4">
                      {user.avatarUrl ? (
                        <img
                          src={user.avatarUrl}
                          alt={user.displayName}
                          className="w-14 h-14 rounded-full border-2 border-white shadow-sm"
                        />
                      ) : (
                        <div className="w-14 h-14 rounded-full border-2 border-white shadow-sm bg-slate-200 flex items-center justify-center">
                          <svg className="w-6 h-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                      )}
                      <div className="space-y-1">
                        <p className="text-sm font-semibold text-slate-900">{user.displayName}</p>
                        <p className="text-xs text-slate-500">@{user.username}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-200">
                      <div>
                        <p className="text-xs text-slate-400">Username</p>
                        <p className="text-sm font-medium text-slate-900">{user.username}</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-400">Display Name</p>
                        <p className="text-sm font-medium text-slate-900">{user.displayName}</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-400">TikTok ID</p>
                        <p className="text-sm font-medium text-slate-900">{user.id}</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-400">Status</p>
                        <p className="text-sm font-medium text-green-600">Connected</p>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={handleDisconnect}
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded-md transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    Disconnect Account
                  </button>
                </div>
              )}

              {!connected && (
                <div className="space-y-3">
                  <p className="text-sm text-slate-500">
                    No TikTok account connected. Connect your account to get started.
                  </p>
                  <Link
                    to="/auth/tiktok/authorize"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-black hover:bg-slate-800 text-white font-medium rounded-md transition-colors"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16.6 5.8C15.5 4.7 14.6 3.4 14.3 2H11v12.6c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7s1.2-2.7 2.7-2.7c.3 0 .5 0 .8.1V8.3c-.3 0-.5-.1-.8-.1-3.7 0-6.7 3-6.7 6.7s3 6.7 6.7 6.7 6.7-3 6.7-6.7V11c1.4 1.1 3.2 1.7 5 1.7v-3c-1.1 0-2.2-.3-3.1-1.2z" />
                    </svg>
                    Connect TikTok
                  </Link>
                </div>
              )}
            </div>
          </div>

          <p className="text-center text-xs text-slate-400 mt-8">
            &copy; {new Date().getFullYear()} malesin.ai. All rights reserved.
          </p>
        </div>
      </div>
    </>
  )
}
