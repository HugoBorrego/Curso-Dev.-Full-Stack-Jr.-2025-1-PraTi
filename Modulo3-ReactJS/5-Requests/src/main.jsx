import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import FetchGet from './components/FetchUser'
import AxiosGet from './components/AxiosUser'
import AxiosPost from './components/AxiosPost'
import AxiosInterceptor from './components/AxiosInterceptor'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FetchGet />
    <AxiosGet />
    <AxiosPost />
    <AxiosInterceptor />
  </StrictMode>,
)
