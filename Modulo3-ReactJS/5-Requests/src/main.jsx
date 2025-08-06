import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import FetchGet from './components/FetchUser'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FetchGet />
  </StrictMode>,
)
