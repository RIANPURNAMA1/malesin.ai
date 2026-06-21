import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { getTikTokUser, isTikTokConnected, disconnectTikTok, getTikTokVideos } from '../lib/tiktok'
import TikTokConnectionStatus from '../components/tiktok/TikTokConnectionStatus'

function formatCount(n: number): string {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + 'M'
  if (n >= 1_000) return (n / 1_000).toFixed(1) + 'K'
  return n.toLocaleString()
}

export default function Dashboard() {
  const connected = isTikTokConnected()
  const user = getTikTokUser()
  const videos = getTikTokVideos()

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
                  <div className="bg-slate-50 rounded-xl p-4 space-y-4">
                    <div className="flex items-center gap-4">
                      {user.avatarUrl ? (
                        <img
                          src={user.avatarUrl}
                          alt={user.displayName}
                          className="w-16 h-16 rounded-full border-2 border-white shadow-sm"
                        />
                      ) : (
                        <div className="w-16 h-16 rounded-full border-2 border-white shadow-sm bg-slate-200 flex items-center justify-center">
                          <svg className="w-7 h-7 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                      )}
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <p className="text-base font-semibold text-slate-900">{user.displayName}</p>
                          {user.isVerified && (
                            <svg className="w-4 h-4 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z" />
                            </svg>
                          )}
                        </div>
                        <p className="text-sm text-slate-500">@{user.username}</p>
                        {user.bioDescription && (
                          <p className="text-xs text-slate-600 mt-1 max-w-md">{user.bioDescription}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-4 gap-3">
                      {[
                        { label: 'Followers', value: user.followerCount },
                        { label: 'Following', value: user.followingCount },
                        { label: 'Likes', value: user.likesCount },
                        { label: 'Videos', value: user.videoCount },
                      ].map((stat) => (
                        <div key={stat.label} className="bg-white rounded-lg p-3 text-center border border-slate-100">
                          <p className="text-lg font-bold text-slate-900">
                            {stat.value != null ? formatCount(stat.value) : '-'}
                          </p>
                          <p className="text-xs text-slate-400">{stat.label}</p>
                        </div>
                      ))}
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
                        <p className="text-sm font-medium text-slate-900 text-xs break-all">{user.id}</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-400">Status</p>
                        <p className="text-sm font-medium text-green-600">Connected</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-200">
                      <div>
                        <p className="text-xs text-slate-400">Verified</p>
                        <p className="text-sm font-medium text-slate-900">{user.isVerified ? 'Yes' : 'No'}</p>
                      </div>
                      {user.profileWebLink && (
                        <div>
                          <p className="text-xs text-slate-400">Profile Link</p>
                          <a
                            href={user.profileWebLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-primary hover:underline"
                          >
                            Open Profile
                          </a>
                        </div>
                      )}
                    </div>

                    {user.bioDescription && (
                      <div className="pt-3 border-t border-slate-200">
                        <p className="text-xs text-slate-400 mb-1">Bio</p>
                        <p className="text-sm text-slate-700">{user.bioDescription}</p>
                      </div>
                    )}
                  </div>

                  {videos.length > 0 && (
                    <div className="bg-slate-50 rounded-xl p-4">
                      <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                        Recent Videos ({videos.length})
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                        {videos.map((video) => (
                          <a
                            key={video.id}
                            href={`https://www.tiktok.com/@${user.username}/video/${video.id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative aspect-[9/16] bg-slate-200 rounded-lg overflow-hidden"
                          >
                            {video.coverUrl ? (
                              <img
                                src={video.coverUrl}
                                alt={video.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center">
                                <svg className="w-8 h-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </div>
                            )}
                            {video.title && (
                              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                                <p className="text-xs text-white truncate">{video.title}</p>
                              </div>
                            )}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

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
