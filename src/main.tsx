import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from '@tanstack/react-router'
import { registerSW } from 'virtual:pwa-register'
import { router } from '@/router'
import './index.css'

registerSW({ immediate: true })

// A lazy chunk failed to load (dropped connection, or a deploy replaced the hashed file).
// Browsers cache failed module imports, so retrying in place can't recover; reload once
// to pick up the current files. The flag (cleared by loadServices on success) stops a
// reload loop if the chunk is truly gone.
window.addEventListener('vite:preloadError', () => {
  if (sessionStorage.getItem('bn-chunk-reload')) return
  sessionStorage.setItem('bn-chunk-reload', '1')
  window.location.reload()
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
