import TikTokConnectionStatus from './TikTokConnectionStatus'
import TikTokLoginButton from './TikTokLoginButton'
import type { TikTokUser } from '../../lib/tiktok'
import { isTikTokConnected, getTikTokUser, disconnectTikTok } from '../../lib/tiktok'
import { useState } from 'react'

function TikTokDisconnectButton() {
  const handleDisconnect = () => {
    disconnectTikTok()
    window.location.reload()
  }

  return (
    <button
      onClick={handleDisconnect}
      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded-full transition-colors"
    >
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
      Disconnect TikTok
    </button>
  )
}

export default function TikTokProfileCard() {
  const [connected] = useState(isTikTokConnected())
  const [user] = useState<TikTokUser | null>(getTikTokUser)

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16.6 5.8C15.5 4.7 14.6 3.4 14.3 2H11v12.6c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7s1.2-2.7 2.7-2.7c.3 0 .5 0 .8.1V8.3c-.3 0-.5-.1-.8-.1-3.7 0-6.7 3-6.7 6.7s3 6.7 6.7 6.7 6.7-3 6.7-6.7V11c1.4 1.1 3.2 1.7 5 1.7v-3c-1.1 0-2.2-.3-3.1-1.2z" />
            </svg>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900">TikTok Connection</h3>
            <TikTokConnectionStatus connected={connected} />
          </div>
        </div>
      </div>

      {connected && user ? (
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
            <img
              src={user.avatarUrl}
              alt={user.displayName}
              className="w-14 h-14 rounded-full border-2 border-white shadow-sm"
            />
            <div>
              <p className="text-sm font-semibold text-slate-900">{user.displayName}</p>
              <p className="text-xs text-slate-500">@{user.username}</p>
              <p className="text-xs text-slate-400 mt-0.5">ID: {user.id}</p>
            </div>
          </div>
          <TikTokDisconnectButton />
        </div>
      ) : (
        <div className="space-y-3">
          <p className="text-sm text-slate-500">
            Hubungkan akun TikTok Anda untuk mengelola konten dan analitik langsung dari Malesin.AI.
          </p>
          <TikTokLoginButton />
        </div>
      )}
    </div>
  )
}
