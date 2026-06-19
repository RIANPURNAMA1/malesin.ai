import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import logoMalesin from '../assets/logo_malesin.ai.png'

export default function DeveloperReview() {
  return (
    <>
      <Helmet>
        <title>TikTok Developer Review - malesin.ai</title>
        <meta name="description" content="Dokumentasi integrasi TikTok Developer untuk review Malesin.AI." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-primary-light via-white to-primary-50">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-primary transition-colors mb-6"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to malesin.ai
          </Link>

          <div className="bg-white rounded-2xl shadow-lg border border-slate-100">
            <div className="max-w-3xl mx-auto py-12 px-4">
              <div className="flex items-center gap-3 mb-8">
                <img src={logoMalesin} alt="malesin.ai" className="h-10 w-auto" />
                <div>
                  <h1 className="text-3xl font-bold text-slate-900">TikTok Developer Review</h1>
                  <p className="text-sm text-slate-500">Integration documentation for TikTok Developer Platform</p>
                </div>
              </div>

              <section className="mb-10">
                <h2 className="text-lg font-semibold text-slate-900 mb-4">Integration Purpose</h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Malesin.AI allows users to connect their TikTok account to manage and publish
                  social media content from a unified dashboard.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-lg font-semibold text-slate-900 mb-4">Requested Scope</h2>
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <code className="text-sm font-mono text-primary bg-primary-light px-2 py-0.5 rounded">
                    user.info.basic
                  </code>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-lg font-semibold text-slate-900 mb-4">Data Accessed</h2>
                <ul className="list-disc pl-6 text-sm text-slate-600 space-y-1.5">
                  <li>Username</li>
                  <li>Display Name</li>
                  <li>Profile Picture</li>
                  <li>TikTok User ID</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-lg font-semibold text-slate-900 mb-4">Flow</h2>
                <div className="space-y-0">
                  {[
                    'Connect TikTok',
                    'Authorize',
                    'Callback',
                    'Dashboard',
                  ].map((step, i) => (
                    <div key={step} className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-light text-primary font-semibold text-sm flex items-center justify-center">
                        {i + 1}
                      </div>
                      <p className="text-sm text-slate-700">{step}</p>
                      {i < 3 && (
                        <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-lg font-semibold text-slate-900 mb-4">Recorded Video Flow</h2>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Screen recording duration: 30–60 seconds covering:
                </p>
                <ol className="list-decimal pl-6 text-sm text-slate-600 space-y-1.5">
                  <li>Open website</li>
                  <li>Click Connect TikTok</li>
                  <li>Authorization page appears</li>
                  <li>Click Authorize</li>
                  <li>Loading screen</li>
                  <li>Dashboard displays connected account</li>
                  <li>Account data visible (username, display name, ID)</li>
                  <li>Click Disconnect Account</li>
                </ol>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-slate-900 mb-4">TikTok Review Form Text</h2>
                <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                  <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                    Malesin.AI is an AI-powered social media management platform that allows users
                    to connect and manage their TikTok accounts.{'\n\n'}
                    The TikTok Login integration is used to authenticate users and retrieve basic
                    profile information using the user.info.basic scope.{'\n\n'}
                    User flow:{'\n\n'}
                    1. User visits Malesin.AI.{'\n'}
                    2. User selects Connect TikTok.{'\n'}
                    3. User authorizes access through TikTok Login.{'\n'}
                    4. TikTok redirects the user back to the application.{'\n'}
                    5. Malesin.AI displays the connected TikTok account information in the user
                    dashboard.{'\n\n'}
                    The retrieved information is used only to identify the connected TikTok account
                    and provide account management functionality within the platform.
                  </p>
                </div>
              </section>
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
