import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Hero from './pages/Hero.jsx'
import './index.css'
import 'leaflet/dist/leaflet.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hero />
  </StrictMode>,
)
