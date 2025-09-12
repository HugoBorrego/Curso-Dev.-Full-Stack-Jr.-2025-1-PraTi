import React, { useState } from 'react'

const BotaoCiclico = () => {
  const cores = ['vermelho', 'verde', 'azul']
  const estilos = {
    vermelho: { backgroundColor: '#e74c3c', color: 'white' },
    verde: { backgroundColor: '#2ecc71', color: 'white' },
    azul: { backgroundColor: '#3498db', color: 'white' },
  }

  const [indiceCor, setIndiceCor] = useState(0)

  const mudarCor = () => {
    setIndiceCor((indiceCor + 1) % cores.length)
  }

  return (
    <button
      style={{
        ...estilos[cores[indiceCor]],
        padding: '15px 30px',
        fontSize: '18px',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
      }}
      onClick={mudarCor}
    >
      Clique para mudar cor
    </button>
  )
}

export default BotaoCiclico
