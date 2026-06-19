import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import LegalPage from './pages/Legal'
import RefundPage from './pages/Refund'
import TermsOfService from './pages/TermsOfService'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Login from './pages/Login'
import TikTokCallback from './pages/TikTokCallback'
import TikTokAuthorize from './pages/TikTokAuthorize'
import Dashboard from './pages/Dashboard'
import DeveloperReview from './pages/DeveloperReview'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy" element={<LegalPage />} />
      <Route path="/terms" element={<LegalPage />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/refund" element={<RefundPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/auth/tiktok/authorize" element={<TikTokAuthorize />} />
      <Route path="/auth/tiktok/callback" element={<TikTokCallback />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/developer-review" element={<DeveloperReview />} />
    </Routes>
  )
}
