import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import logoMalesin from '../assets/logo_malesin.ai.png'

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - malesin.ai</title>
        <meta name="description" content="Kebijakan privasi Malesin.AI. Pelajari bagaimana kami mengumpulkan, menggunakan, dan melindungi data pengguna termasuk data TikTok." />
        <meta property="og:title" content="Privacy Policy - malesin.ai" />
        <meta property="og:description" content="Kebijakan privasi Malesin.AI. Pelajari bagaimana kami mengumpulkan, menggunakan, dan melindungi data pengguna termasuk data TikTok." />
        <meta property="og:url" content="https://malesin.ai/privacy-policy" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="malesin.ai" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Privacy Policy - malesin.ai",
            "description": "Kebijakan privasi Malesin.AI.",
            "url": "https://malesin.ai/privacy-policy",
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
                  <h1 className="text-3xl font-bold text-slate-900">Privacy Policy</h1>
                  <p className="text-sm text-slate-500">Last updated: 19 June 2026</p>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-8">
                This Privacy Policy explains how Malesin.AI ("we," "our," or "us") collects, uses,
                stores, and protects your personal information when you use our platform and
                services, including any integrations with TikTok and other third-party platforms.
                By using Malesin.AI, you consent to the practices described in this policy.
              </p>

              <section className="mb-8">
                <h2 className="text-lg font-semibold text-slate-900 mb-3">1. Information We Collect</h2>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">
                  We may collect the following types of information when you use Malesin.AI:
                </p>
                <ul className="list-disc pl-6 text-sm text-slate-600 space-y-1.5">
                  <li><strong>Account Information:</strong> Full name, email address, and profile photo provided during registration.</li>
                  <li><strong>User ID:</strong> Unique identifier associated with your account on our Platform.</li>
                  <li><strong>TikTok Account Data:</strong> Information obtained through TikTok Login Kit, including TikTok user ID, username, and profile picture, only after you grant explicit permission.</li>
                  <li><strong>Technical Data:</strong> IP address, browser type and version, device information, operating system, and usage patterns.</li>
                  <li><strong>Communication Data:</strong> Messages, inquiries, and correspondence you send to us.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-lg font-semibold text-slate-900 mb-3">2. TikTok Data Access</h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Malesin.AI integrates with TikTok through the official TikTok Developer Platform.
                  We only access your TikTok data after you have explicitly provided consent
                  through TikTok's authorization interface. The data we may access includes:
                </p>
                <ul className="list-disc pl-6 text-sm text-slate-600 space-y-1.5 mt-3">
                  <li>TikTok User ID</li>
                  <li>TikTok Username</li>
                  <li>Profile Picture</li>
                  <li>Basic account information as permitted by TikTok</li>
                </ul>
                <p className="text-sm text-slate-600 leading-relaxed mt-3">
                  We do not access, collect, or store any data that you have not explicitly
                  authorized. You can revoke Malesin.AI's access to your TikTok account at any
                  time through your TikTok account settings.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-lg font-semibold text-slate-900 mb-3">3. How We Use Information</h2>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">
                  We use the collected information for the following purposes:
                </p>
                <ul className="list-disc pl-6 text-sm text-slate-600 space-y-1.5">
                  <li>To authenticate your identity and manage your account access.</li>
                  <li>To display your TikTok account information when you choose to connect your account.</li>
                  <li>To enable social media account linking and management features.</li>
                  <li>To provide content management features, including posting and scheduling.</li>
                  <li>To improve, personalize, and optimize your experience on the Platform.</li>
                  <li>To communicate with you regarding service updates, support requests, and promotional materials (with your consent).</li>
                  <li>To monitor and analyze usage trends to enhance our services.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-lg font-semibold text-slate-900 mb-3">4. Data Storage and Security</h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your
                  personal information:
                </p>
                <ul className="list-disc pl-6 text-sm text-slate-600 space-y-1.5 mt-3">
                  <li>All data transmitted between your device and our servers is encrypted using HTTPS protocol.</li>
                  <li>Sensitive credentials are protected using industry-standard security mechanisms.</li>
                  <li>Access to personal data is restricted to authorized personnel only, on a need-to-know basis for operational purposes.</li>
                  <li>We regularly review and update our security practices to maintain data integrity.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-lg font-semibold text-slate-900 mb-3">5. Data Sharing</h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We respect your privacy and do not sell your personal information to third
                  parties. We may share your data only in the following circumstances:
                </p>
                <ul className="list-disc pl-6 text-sm text-slate-600 space-y-1.5 mt-3">
                  <li>When required by law, regulation, or legal process (e.g., court order or government request).</li>
                  <li>To enforce our Terms of Service or protect our rights, property, or safety.</li>
                  <li>With trusted service providers who assist us in operating the Platform, under strict confidentiality agreements.</li>
                  <li>With your explicit consent or at your direction.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-lg font-semibold text-slate-900 mb-3">6. User Rights</h2>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">
                  You have the following rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 text-sm text-slate-600 space-y-1.5">
                  <li><strong>Right to Access:</strong> You can request a copy of the personal data we hold about you.</li>
                  <li><strong>Right to Update:</strong> You can update or correct your personal information at any time through your account settings.</li>
                  <li><strong>Right to Delete:</strong> You can request the deletion of your account and associated personal data.</li>
                  <li><strong>Right to Revoke Access:</strong> You can disconnect your TikTok account from Malesin.AI at any time.</li>
                  <li><strong>Right to Withdraw Consent:</strong> You can withdraw your consent for data processing at any time, subject to legal limitations.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-lg font-semibold text-slate-900 mb-3">7. Data Deletion Request</h2>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">
                  You may request the deletion of your personal data at any time. To submit a data
                  deletion request, please contact us through one of the following channels:
                </p>
                <ul className="list-none text-sm text-slate-600 space-y-1.5">
                  <li><strong>Email:</strong> <a href="mailto:support@malesin.ai" className="text-primary hover:underline">support@malesin.ai</a></li>
                </ul>
                <p className="text-sm text-slate-600 leading-relaxed mt-3">
                  Once we receive and verify your request, we will delete your personal data
                  within 30 days, subject to any legal obligations that may require us to retain
                  certain information. You will receive a confirmation once the deletion process
                  is complete.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-lg font-semibold text-slate-900 mb-3">8. Third-Party Services</h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Malesin.AI integrates with various third-party platforms to provide its services.
                  Each of these platforms has its own privacy policies and terms of service:
                </p>
                <ul className="list-disc pl-6 text-sm text-slate-600 space-y-1.5 mt-3">
                  <li><strong>TikTok</strong> — Data handling is governed by TikTok's Privacy Policy.</li>
                  <li><strong>Meta / Facebook</strong> — Data handling is governed by Meta's Privacy Policy.</li>
                  <li><strong>Instagram</strong> — Data handling is governed by Instagram's Privacy Policy.</li>
                  <li><strong>WhatsApp</strong> — Data handling is governed by WhatsApp's Privacy Policy.</li>
                  <li><strong>Google</strong> — Data handling is governed by Google's Privacy Policy.</li>
                </ul>
                <p className="text-sm text-slate-600 leading-relaxed mt-3">
                  We encourage you to review the privacy policies of these third-party services
                  before connecting them to Malesin.AI.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-lg font-semibold text-slate-900 mb-3">9. Contact Information</h2>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">
                  If you have any questions, concerns, or requests regarding this Privacy Policy
                  or our data practices, please contact us:
                </p>
                <ul className="list-none text-sm text-slate-600 space-y-1.5">
                  <li><strong>Email:</strong> <a href="mailto:support@malesin.ai" className="text-primary hover:underline">support@malesin.ai</a></li>
                  <li><strong>Website:</strong> <a href="https://malesin.ai" className="text-primary hover:underline">https://malesin.ai</a></li>
                  <li><strong>Company:</strong> PT Teknologi Riteck Indonesia</li>
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
