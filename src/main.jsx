// Punto de entrada: monta <App /> en el DOM.
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Bootstrap primero para que nuestros estilos puedan sobrescribirlo si hiciera falta.
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

import App from './App.jsx'

// createRoot = API moderna de React 18+. StrictMode activa avisos extra en desarrollo.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
