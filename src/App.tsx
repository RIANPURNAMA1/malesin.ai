import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import LegalPage from './pages/Legal'
import RefundPage from './pages/Refund'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy" element={<LegalPage />} />
      <Route path="/terms" element={<LegalPage />} />
      <Route path="/refund" element={<RefundPage />} />
    </Routes>
  )
}
