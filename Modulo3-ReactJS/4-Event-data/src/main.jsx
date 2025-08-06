import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Product from './components/Product.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Product />
  </StrictMode>,
)
