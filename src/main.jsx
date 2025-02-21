import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './components/templates/styles.sass'
import App from './components/templates/Interface.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
