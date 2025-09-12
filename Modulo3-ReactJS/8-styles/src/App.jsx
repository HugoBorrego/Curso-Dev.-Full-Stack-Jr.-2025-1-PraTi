import './styles/base.css'
import './styles/utilites.css'
import './styles/components.css'

import { Button } from './components/Button/button'
import { Card } from './components/Card/card'

import CardStyled from './components/Card/CardStyled'


function App() {
  

  return (
    <>
    <Card title='Aula de Estilização'>
      <main className='container'>
        <p>Estilos provenientes de arquivos globais.</p>
        <Button>Enviar</Button>
        </main>
      </Card>

      <CardStyled />
    </>
  )
}

export default App

// npm install tailwindcss @tailwindcss/vite para instalar o TailwindCSS