import type { VercelRequest, VercelResponse } from '@vercel/node'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { code, redirectUri } = req.body

  if (!code) {
    return res.status(400).json({ error: 'Missing authorization code' })
  }

  const clientKey = 'sbawxkqwkx6rts192o'
  const clientSecret = 'COync1flsEt0OAiTyMsjsSrHMUCOv3D2'

  try {
    // 1. Exchange code for access_token
    const tokenRes = await fetch('https://open.tiktokapis.com/v2/oauth/token/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_key: clientKey,
        client_secret: clientSecret,
        code,
        grant_type: 'authorization_code',
        redirect_uri: redirectUri || '',
      }),
    })

    const tokenData = await tokenRes.json()

    if (!tokenData.access_token) {
      return res.status(400).json({
        error: 'Failed to exchange token',
        detail: tokenData,
      })
    }

    // 2. Get user info
    const userRes = await fetch(
      'https://open.tiktokapis.com/v2/user/info/?fields=open_id,avatar_url,display_name,username,bio_description,is_verified,profile_web_link,profile_deep_link,follower_count,following_count,likes_count,video_count',
      {
        headers: {
          Authorization: `Bearer ${tokenData.access_token}`,
        },
      },
    )

    const userData = await userRes.json()

    const user = userData.data?.user

    if (!user) {
      return res.status(400).json({
        error: 'Failed to get user info',
        detail: userData,
      })
    }

    return res.status(200).json({
      id: user.open_id || user.id || '',
      username: user.username || '',
      displayName: user.display_name || '',
      avatarUrl: user.avatar_url || '',
      bioDescription: user.bio_description || undefined,
      isVerified: user.is_verified || undefined,
      profileWebLink: user.profile_web_link || undefined,
      profileDeepLink: user.profile_deep_link || undefined,
      followerCount: user.follower_count ?? undefined,
      followingCount: user.following_count ?? undefined,
      likesCount: user.likes_count ?? undefined,
      videoCount: user.video_count ?? undefined,
    })
  } catch (err) {
    return res.status(500).json({
      error: 'Internal server error',
      message: err instanceof Error ? err.message : 'Unknown error',
    })
  }
}
