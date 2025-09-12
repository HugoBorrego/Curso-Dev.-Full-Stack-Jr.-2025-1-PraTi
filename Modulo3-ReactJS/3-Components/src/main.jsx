import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './components/App'
import Produtos from './components/Produtos'
import Greet from './components/Greeting'

import LifeCycleClassComponent from './components/LifeCycleClassComponent'
import LifeCycleFunctionalComponent from './components/LifeCycleFunctionalComponent'

import ViaCepFunctional from './components/ViaCepFunctional'

import BotaoCiclico from './components/BotaoCiclico'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Produtos />
    <Greet />
    <LifeCycleClassComponent />
    <LifeCycleFunctionalComponent />
    <ViaCepFunctional cep='12081410' />
    <BotaoCiclico />
  </StrictMode>,
)