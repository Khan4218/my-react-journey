import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index-4.css'
import App from './index-4.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)