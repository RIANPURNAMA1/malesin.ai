import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import logoMalesin from '../assets/logo_malesin.ai.png'

export default function TermsOfService() {
  return (
    <>
      <Helmet>
        <title>Terms of Service - malesin.ai</title>
        <meta name="description" content="Syarat dan ketentuan penggunaan platform Malesin.AI. Baca kebijakan penggunaan layanan, integrasi TikTok, dan ketentuan hukum yang berlaku." />
        <meta property="og:title" content="Terms of Service - malesin.ai" />
        <meta property="og:description" content="Syarat dan ketentuan penggunaan platform Malesin.AI. Baca kebijakan penggunaan layanan, integrasi TikTok, dan ketentuan hukum yang berlaku." />
        <meta property="og:url" content="https://malesin.ai/terms" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="malesin.ai" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Terms of Service - malesin.ai",
            "description": "Syarat dan ketentuan penggunaan platform Malesin.AI.",
            "url": "https://malesin.ai/terms",
            "isPartOf": {
              "@type": "WebSite",
              "name": "malesin.ai",
              "url": "https://malesin.ai"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-primary-light via-white to-primary-50">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-primary transition-colors mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Back to malesin.ai
          </Link>

          <div className="bg-white rounded-2xl shadow-lg border border-slate-100">
            <div className="max-w-3xl mx-auto py-12 px-4">
              <div className="flex items-center gap-3 mb-8">
                <img src={logoMalesin} alt="malesin.ai" className="h-10 w-auto" />
                <div>
                  <h1 className="text-3xl font-bold text-slate-900">Terms of Service</h1>
                  <p className="text-sm text-slate-500">Last updated: 19 June 2026</p>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-8">
                These Terms of Service govern your use of the Malesin.AI platform, including any
                integrations with TikTok and other third-party services. By accessing or using
                Malesin.AI, you agree to be bound by these terms.
              </p>

              <section className="mb-8">
                <h2 className="text-lg font-semibold text-slate-900 mb-3">1. Acceptance of Terms</h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  By creating an account, accessing, or using Malesin.AI ("the Platform"), you
                  acknowledge that you have read, understood, and agree to be bound by these Terms
                  of Service and all applicable laws and regulations. If you do not agree with any
                  part of these terms, you must not use the Platform. These terms constitute a
                  legally binding agreement between you and PT Teknologi Riteck Indonesia, the
                  company behind Malesin.AI.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-lg font-semibold text-slate-900 mb-3">2. User Responsibilities</h2>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">
                  As a user of Malesin.AI, you are responsible for:
                </p>
                <ul className="list-disc pl-6 text-sm text-slate-600 space-y-1.5">
                  <li>Maintaining the confidentiality and security of your account credentials.</li>
                  <li>All content created, published, or transmitted through your account on the Platform.</li>
                  <li>Complying with TikTok's terms of service, community guidelines, and any other platform policies applicable to connected services.</li>
                  <li>Ensuring the security of your TikTok account credentials and any other third-party accounts linked to Malesin.AI.</li>
                  <li>Providing accurate, current, and complete information during the registration process.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-lg font-semibold text-slate-900 mb-3">3. TikTok Integration</h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Malesin.AI offers optional integration with TikTok through TikTok Login Kit and
                  other official TikTok Developer Platform services. By connecting your TikTok
                  account, you authorize Malesin.AI to access specific data and perform actions on
                  your behalf only after you have explicitly granted permission through TikTok's
                  consent interface. Malesin.AI will only access data that you have authorized,
                  including but not limited to your TikTok user ID, username, and profile
                  information. You may revoke Malesin.AI's access to your TikTok account at any
                  time through your TikTok settings.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-lg font-semibold text-slate-900 mb-3">4. Prohibited Activities</h2>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">
                  You agree not to engage in any of the following prohibited activities:
                </p>
                <ul className="list-disc pl-6 text-sm text-slate-600 space-y-1.5">
                  <li>Misusing the Platform for any unlawful purpose or in violation of any applicable laws or regulations.</li>
                  <li>Engaging in illegal activities, including but not limited to fraud, money laundering, or intellectual property infringement.</li>
                  <li>Sending spam, unsolicited messages, or engaging in any form of abusive messaging through the Platform.</li>
                  <li>Scraping, crawling, or harvesting data from the Platform without prior written authorization.</li>
                  <li>Violating TikTok's terms of service, community guidelines, or any other third-party platform policies.</li>
                  <li>Attempting to reverse engineer, decompile, or disassemble any part of the Platform.</li>
                  <li>Using the Platform to distribute malware, viruses, or any other harmful code.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-lg font-semibold text-slate-900 mb-3">5. Disclaimer</h2>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">
                  The Platform is provided on an "as is" and "as available" basis without any
                  warranties of any kind, either express or implied. Malesin.AI does not guarantee
                  that:
                </p>
                <ul className="list-disc pl-6 text-sm text-slate-600 space-y-1.5">
                  <li>The service will be uninterrupted, timely, secure, or error-free.</li>
                  <li>The results obtained from using the Platform will be accurate or reliable.</li>
                  <li>Any errors or defects will be corrected.</li>
                </ul>
                <p className="text-sm text-slate-600 leading-relaxed mt-3">
                  Malesin.AI shall not be liable for any changes in policies, terms, or API
                  availability of third-party services, including TikTok, Meta, or any other
                  integrated platform. Your use of third-party services is subject to their
                  respective terms and policies.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-lg font-semibold text-slate-900 mb-3">6. Account Termination</h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Malesin.AI reserves the right to suspend or terminate your account at any time
                  without prior notice if you violate these Terms of Service or engage in any
                  prohibited activities. Upon termination, your access to the Platform will cease
                  immediately, and Malesin.AI may delete your data in accordance with our Privacy
                  Policy. You may also delete your account at any time through your account
                  settings or by contacting our support team.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-lg font-semibold text-slate-900 mb-3">7. Contact Information</h2>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">
                  If you have any questions, concerns, or requests regarding these Terms of
                  Service, please contact us:
                </p>
                <ul className="list-none text-sm text-slate-600 space-y-1.5">
                  <li><strong>Email:</strong> <a href="mailto:support@malesin.ai" className="text-primary hover:underline">support@malesin.ai</a></li>
                  <li><strong>Website:</strong> <a href="https://malesin.ai" className="text-primary hover:underline">https://malesin.ai</a></li>
                </ul>
              </section>
            </div>
          </div>

          <p className="text-center text-xs text-slate-400 mt-6">
            &copy; {new Date().getFullYear()} malesin.ai. All rights reserved.
          </p>
        </div>
      </div>
    </>
  )
}
