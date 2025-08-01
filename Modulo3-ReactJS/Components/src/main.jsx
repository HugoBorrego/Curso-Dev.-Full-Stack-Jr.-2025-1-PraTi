import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './components/App.jsx'
import Produto from './components/Produtos.jsx'
import Greeting from './components/Greeting.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Produto />
    <Greeting />
  </StrictMode>,
)
