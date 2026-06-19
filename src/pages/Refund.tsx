import { Link } from 'react-router-dom'
import logoMalesin from '../assets/logo_malesin.ai.png'

export default function RefundPage() {
  return (
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
                <h1 className="text-3xl font-bold text-slate-900">Kebijakan Pengembalian, Refund, & Delivery</h1>
                <p className="text-sm text-slate-500">PT Teknologi Cekat Indonesia</p>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed mb-8">
              Thank you for choosing malesin.ai, a product of PT Teknologi Cekat Indonesia. We strive to provide the best services and support for your business needs. This Return & Refund Policy outlines the terms and conditions for requesting a refund.
            </p>

            <section className="mb-8">
              <h2 className="text-lg font-semibold text-slate-900 mb-3">1. Subscription Cancellation</h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                You may cancel your subscription to malesin.ai at any time through your account settings. Cancellation will take effect at the end of your current billing cycle, and you will continue to have access to malesin.ai's features until the end of the subscription period.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-semibold text-slate-900 mb-3">2. Refund Eligibility</h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">
                Refunds for malesin.ai are generally not provided except under specific circumstances such as:
              </p>
              <ul className="list-disc pl-6 text-sm text-slate-600 space-y-1">
                <li>System malfunctions or downtime that exceeds our service level agreement (SLA).</li>
                <li>Billing errors, such as being charged twice or charged for the wrong subscription plan.</li>
              </ul>
              <p className="text-sm text-slate-600 leading-relaxed mt-3">
                To be eligible for a refund, you must submit a request within 14 days of the charge in question.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-semibold text-slate-900 mb-3">3. Refund Process</h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                To request a refund, please contact our support team at <a href="mailto:support@malesin.ai" className="text-primary hover:underline">support@malesin.ai</a> with your account details and a description of the issue. Our team will review your request and notify you of the decision within 7 business days.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed mt-3">
                If approved, the refund will be processed within 14 business days and will be applied to your original method of payment.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-semibold text-slate-900 mb-3">4. Non-Refundable Items</h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">
                Please note that the following items are non-refundable:
              </p>
              <ul className="list-disc pl-6 text-sm text-slate-600 space-y-1">
                <li>One-time setup fees</li>
                <li>Custom development work</li>
                <li>Any services rendered before cancellation</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-semibold text-slate-900 mb-3">5. Changes to This Policy</h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                PT Teknologi Cekat Indonesia reserves the right to modify or update this Return & Refund Policy at any time. Any changes will be effective immediately upon posting on our website. Please review this policy regularly to stay informed about our practices.
              </p>
            </section>

            <hr className="border-slate-200 my-8" />

            <h2 className="text-2xl font-bold text-slate-900 mb-6">Delivery Policy</h2>

            <p className="text-sm text-slate-600 leading-relaxed mb-8">
              malesin.ai is a software-as-a-service (SaaS) product provided by PT Teknologi Cekat Indonesia. This Delivery Policy explains how we provide our services to you.
            </p>

            <section className="mb-8">
              <h2 className="text-lg font-semibold text-slate-900 mb-3">1. Service Delivery</h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Once your subscription to malesin.ai is confirmed, you will receive immediate access to the platform via your registered email address. There are no physical goods associated with malesin.ai; all services are delivered digitally.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-semibold text-slate-900 mb-3">2. Account Activation</h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                After completing the registration process, you will receive a welcome email with instructions on how to log in to your malesin.ai account. If you do not receive this email within 24 hours of registration, please check your spam folder or contact our support team at <a href="mailto:support@malesin.ai" className="text-primary hover:underline">support@malesin.ai</a>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-semibold text-slate-900 mb-3">3. Access to Services</h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Upon successful payment, your subscription will be activated, and you will have access to all the features included in your chosen plan. If you experience any issues accessing the platform, please reach out to our support team immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-semibold text-slate-900 mb-3">4. Service Availability</h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                malesin.ai is designed to be available 24/7. However, there may be scheduled maintenance or unexpected downtime. We will notify you in advance of any planned maintenance that might affect service availability. In the event of unexpected downtime, our team will work to restore service as quickly as possible.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-semibold text-slate-900 mb-3">5. Support and Assistance</h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Our support team is available to assist you with any issues related to accessing or using malesin.ai. You can contact us at <a href="mailto:support@malesin.ai" className="text-primary hover:underline">support@malesin.ai</a> during our business hours.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-semibold text-slate-900 mb-3">6. Changes to This Policy</h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                PT Teknologi Cekat Indonesia reserves the right to modify or update this Delivery Policy at any time. Any changes will be effective immediately upon posting on our website. Please review this policy regularly to stay informed about our practices.
              </p>
            </section>
          </div>
        </div>

        <p className="text-center text-xs text-slate-400 mt-6">
          &copy; {new Date().getFullYear()} malesin.ai. All rights reserved.
        </p>
      </div>
    </div>
  )
}
