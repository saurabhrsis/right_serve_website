import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from '@/App'
import { LeadModalProvider } from '@/components/LeadModal'
import { ToastProvider } from '@/components/Toast'
import './index.css'

const container = document.getElementById('root')!

const tree = (
  <StrictMode>
    <BrowserRouter>
      <ToastProvider>
        <LeadModalProvider>
          <App />
        </LeadModalProvider>
      </ToastProvider>
    </BrowserRouter>
  </StrictMode>
)

/**
 * Prerendered pages ship with real HTML inside #root, so we hydrate them.
 * In dev (empty container) we mount normally.
 */
if (container.hasChildNodes()) {
  hydrateRoot(container, tree)
} else {
  createRoot(container).render(tree)
}
