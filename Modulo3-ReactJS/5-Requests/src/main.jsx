import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import FetchGet from './components/FetchUser'
import AxiosGet from './components/AxiosUser'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FetchGet />
    <AxiosGet />
  </StrictMode>,
)
