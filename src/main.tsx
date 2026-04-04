import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { trackPage } from './lib/analytics'

// Track the initial page view on app load.
// Plausible is cookieless and privacy-friendly — no consent banner required.
trackPage()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
