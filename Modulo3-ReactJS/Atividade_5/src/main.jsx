import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GetMovie from './components/getMovie'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GetMovie />
  </StrictMode>,
)