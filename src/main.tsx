import '@/styles/globals.css'

import App from '@/app'

import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

const element = document.getElementById('__app') as HTMLElement

const root = createRoot(element)

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
