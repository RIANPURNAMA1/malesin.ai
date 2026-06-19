const TIKTOK_AUTH_BASE = 'https://www.tiktok.com/v2/auth/authorize/'

function generateState(): string {
  const array = new Uint8Array(16)
  crypto.getRandomValues(array)
  return Array.from(array, b => b.toString(16).padStart(2, '0')).join('')
}

export interface TikTokUser {
  id: string
  username: string
  displayName: string
  avatarUrl: string
}

const AUTH_KEY = 'malesin_tiktok_auth'
const USER_KEY = 'malesin_tiktok_user'

function getRedirectUri(): string {
  const envUri = import.meta.env.VITE_TIKTOK_REDIRECT_URI
  if (envUri) return envUri
  if (typeof window !== 'undefined') {
    return `${window.location.origin}/auth/tiktok/callback`
  }
  return ''
}

export function getTikTokOAuthUrl(): string {
  const clientKey = import.meta.env.VITE_TIKTOK_CLIENT_KEY

  if (!clientKey) {
    throw new Error(
      'VITE_TIKTOK_CLIENT_KEY belum diset. Buat file .env dan isi dengan Client Key dari TikTok Developer Portal.'
    )
  }

  const redirectUri = getRedirectUri()
  const scope = 'user.info.basic'
  const state = generateState()
  sessionStorage.setItem('tiktok_oauth_state', state)

  const params = new URLSearchParams({
    client_key: clientKey,
    redirect_uri: redirectUri,
    scope,
    state,
    response_type: 'code',
  })

  return `${TIKTOK_AUTH_BASE}?${params.toString()}`
}

export function isTikTokConnected(): boolean {
  return localStorage.getItem(AUTH_KEY) !== null
}

export function getTikTokUser(): TikTokUser | null {
  const data = localStorage.getItem(USER_KEY)
  if (!data) return null
  try {
    return JSON.parse(data) as TikTokUser
  } catch {
    return null
  }
}

export function storeTikTokAuth(code: string): void {
  localStorage.setItem(AUTH_KEY, JSON.stringify({ code, timestamp: Date.now() }))
  const mockUser: TikTokUser = {
    id: '123456789',
    username: 'demo_creator',
    displayName: 'Demo Creator',
    avatarUrl: '',
  }
  localStorage.setItem(USER_KEY, JSON.stringify(mockUser))
}

export function disconnectTikTok(): void {
  localStorage.removeItem(AUTH_KEY)
  localStorage.removeItem(USER_KEY)
}
