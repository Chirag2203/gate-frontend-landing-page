import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "./App.css"
import App from './App.tsx'

// Import the font weights you need
import "@fontsource/plus-jakarta-sans/400.css"; // Regular
import "@fontsource/plus-jakarta-sans/500.css"; // Medium
import "@fontsource/plus-jakarta-sans/600.css"; // SemiBold
import "@fontsource/plus-jakarta-sans/700.css"; // Bold

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
