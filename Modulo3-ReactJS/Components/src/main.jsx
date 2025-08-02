import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './components/App'
import Produtos from './components/Produtos'
import Greet from './components/Greeting'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Produtos />
    <Greet />
  </StrictMode>,
)